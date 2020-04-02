import React, { useState, useEffect } from "react";
import ApplicationShell from "../components/ApplicationShell";
import { Link } from "react-router-dom";
import marked, { Renderer } from "marked";
import DomPurify from "dompurify";
import classNames from "classnames";

import { FaCaretLeft, FaRegClipboard, FaSave } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { DiCode } from "react-icons/di";

import AceEditor from "react-ace";
import Highlight from "highlight.js";

import "highlight.js/styles/gml.css";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import Notification from "../components/Notification";
import styled from "styled-components";
import { useMutation } from "@apollo/react-hooks";
import { ADD_DOC, EDIT_DOC } from "../utils/queries";
import { useDispatch, useSelector } from "react-redux";
import { addDoc, userData, editDoc } from "../components/userSlice";
import { Div } from "../styles/markdow";

const renderer = new Renderer();
renderer.code = (code, language) => {
  const validLang = !!(language && Highlight.getLanguage(language));

  const highlighted = validLang
    ? Highlight.highlight(language, code).value
    : code;

  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

const Create = () => {
  const [editErrors, setEditErrors] = useState({});
  const [editNotification, setEditNotification] = useState(false);
  const [saveNotification, setSaveNotification] = useState(false);

  const dispatch = useDispatch();
  const credentials = useSelector(userData);

  const initialState = JSON.parse(localStorage.getItem("currDoc"));

  const [data, setData] = useState(initialState.body);
  const [docname, setDocname] = useState(initialState.title);
  const [textPreview, setTextPreview] = useState(true);
  const [mobileMd, setMobileMd] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  marked.setOptions({
    renderer: renderer
  });

  const createMarkup = () => {
    return { __html: DomPurify.sanitize(marked(data)) };
  };

  const [editDocument, { loading: editLoading }] = useMutation(EDIT_DOC, {
    update(_, { data: { editDoc: response } }) {},
    onError(err) {
      const errors = err.graphQLErrors[0].extensions.exception.errors;
      setEditErrors(errors);
    }
  });

  const handleEdit = async id => {
    const currDoc = JSON.parse(localStorage.getItem("currDoc"));

    const doc = await editDocument({
      variables: { docId: id, name: currDoc.title, body: currDoc.body }
    });
    dispatch(
      editDoc({
        docId: id,
        body: currDoc.body,
        createdAt: doc.data.editDoc.createdAt,
        name: currDoc.title
      })
    );

    setEditNotification(true);
    setTimeout(() => {
      setEditNotification(false);
    }, 2000);
  };

  useEffect(() => {
    const currDoc = JSON.parse(localStorage.getItem("currDoc"));
    localStorage.setItem(
      "currDoc",
      JSON.stringify({ id: currDoc.id, title: docname, body: data })
    );
  }, [data, docname]);

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  const [saveDocument, { loading }] = useMutation(ADD_DOC, {
    update(_, { data: { createDoc: docData } }) {
      dispatch(
        addDoc({
          docId: docData.docId,
          body: data,
          createdAt: docData.createdAt,
          name: docname
        })
      );
    },
    onError(err) {
      const errors = err.graphQLErrors[0].extensions.exception.errors;
      console.log(errors);
    },
    variables: { body: data, docId: initialState.id, name: docname }
  });

  const handleSave = async () => {
    await saveDocument();
    setSaveNotification(true);
    setTimeout(() => {
      setSaveNotification(false);
    }, 2000);
  };

  return (
    <div>
      <Notification
        show={showNotification}
        setShow={setShowNotification}
        title="Success"
      >
        Markdown content copied to clipboard
      </Notification>
      <ApplicationShell page="create">
        <div className="flex flex-row justify-between -mt-10">
          <Link
            to="/documents"
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center m-5"
          >
            <FaCaretLeft /> Back
          </Link>

          <input
            type="text"
            value={docname}
            onChange={e => setDocname(e.target.value)}
            className="bg-gray-800 text-gray-100 font-serif text-xl border-0 focus:outline-none w-32"
            spellCheck="false"
          />
          <button
            className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center m-5"
            onClick={() => {
              if (
                credentials.docs
                  .map(elem => elem.docId)
                  .includes(initialState.id)
              ) {
                handleEdit(initialState.id);
              } else {
                console.log("yooo");
                handleSave();
              }
            }}
          >
            <FaSave className="mr-2" /> Save
          </button>
        </div>
        <div className="flex justify-between h-(almost)">
          <div
            className={classNames(
              "mr-0 md:mr-5 md:w-6/12",
              !mobileMd ? "w-full md:w-6/12" : "hidden md:block"
            )}
          >
            <div className="w-full h-10 border-gray-500 border border-solid border-b-0 bg-white flex items-center justify-between px-5">
              <div className="font-serif">Markdown</div>
              <MdLoop
                className="text-gray-700 cursor-pointer hover:text-gray-500 text-2xl block md:hidden"
                onClick={() => setMobileMd(!mobileMd)}
              />
              <FaRegClipboard
                className="text-gray-700 cursor-pointer hover:text-gray-500 text-2xl block"
                onClick={handleCopy}
              />
            </div>
            <div className="h-full w-full border-gray-500 border border-solid">
              <AceEditor
                mode="markdown"
                theme="github"
                name="md"
                value={data}
                editorProps={{ $blockScrolling: true }}
                onChange={e => setData(e)}
                placeholder="Enter markdown here..."
                width="100%"
                height="100%"
                fontSize={13}
              />
            </div>
          </div>

          <div
            className={classNames(
              "h-full w-6/12",
              mobileMd ? "w-full md:w-6/12" : "hidden md:block"
            )}
          >
            <div className="w-full h-10 border-gray-500 border border-solid border-b-0 bg-white flex items-center justify-between px-5">
              <div className="font-serif">Live Preview</div>
              <MdLoop
                className="text-gray-700 cursor-pointer hover:text-gray-500 text-2xl block md:hidden"
                onClick={() => setMobileMd(!mobileMd)}
              />
              <DiCode
                className="text-4xl text-gray-700 cursor-pointer hover:text-gray-500"
                onClick={() => setTextPreview(!textPreview)}
              />
            </div>
            {textPreview ? (
              <Div
                className="w-full h-full border-gray-500 border border-solid bg-white p-5 overflow-auto"
                dangerouslySetInnerHTML={createMarkup()}
              />
            ) : (
              <div className="w-full h-full border-gray-500 border border-solid bg-white p-5 overflow-auto">
                {DomPurify.sanitize(marked(data))}
              </div>
            )}
          </div>
          {(loading || editLoading) && <div className="spinner" />}
          <Notification
            show={editNotification}
            setShow={setEditNotification}
            title="Success"
          >
            Edit successful!
          </Notification>
          <Notification
            show={saveNotification}
            setShow={setSaveNotification}
            title="Success"
          >
            Save successful!
          </Notification>
        </div>
      </ApplicationShell>
    </div>
  );
};

export default Create;
