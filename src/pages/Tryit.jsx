import React, { useCallback, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import marked, { Renderer } from "marked";
import { v4 as uuidv4 } from "uuid";
import DomPurify from "dompurify";
import classNames from "classnames";

import { FaCaretLeft, FaRegClipboard } from "react-icons/fa";
import { MdLoop } from "react-icons/md";
import { DiCode } from "react-icons/di";

import AceEditor from "react-ace";
import Highlight from "highlight.js";

import initialString from "../utils/dummyMarkdown";

import "highlight.js/styles/gml.css";
import "ace-builds/src-noconflict/mode-markdown";
import "ace-builds/src-noconflict/theme-github";
import Notification from "../components/Notification";
import { Div } from "../styles/markdow";

const renderer = new Renderer();
renderer.code = (code, language) => {
  const validLang = !!(language && Highlight.getLanguage(language));

  const highlighted = validLang
    ? Highlight.highlight(language, code).value
    : code;

  return `<pre><code class="hljs ${language}">${highlighted}</code></pre>`;
};

const Tryit = () => {
  const initialState = useCallback(() => {
    const currDoc = JSON.parse(localStorage.getItem("currDoc"));
    if (currDoc) return currDoc;
    return { body: initialString, id: uuidv4(), title: "untitled.md" };
  }, []);

  const [data, setData] = useState(initialState().body);
  const [textPreview, setTextPreview] = useState(true);
  const [mobileMd, setMobileMd] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  marked.setOptions({
    renderer: renderer
  });

  const createMarkup = () => {
    return { __html: DomPurify.sanitize(marked(data)) };
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(data);
    setShowNotification(true);
    setTimeout(() => {
      setShowNotification(false);
    }, 2000);
  };

  useEffect(() => {
    const currDoc = JSON.parse(localStorage.getItem("currDoc"));
    localStorage.setItem(
      "currDoc",
      JSON.stringify({ id: currDoc.id, title: currDoc.title, body: data })
    );
  }, [data]);

  return (
    <div className="bg-gray-100 h-screen pt-5">
      <Notification
        show={showNotification}
        setShow={setShowNotification}
        title="Success"
      >
        Copied to clipboard
      </Notification>
      <img
        className="h-8 w-auto sm:h-10 mb-5 m-auto"
        src="logo_cropped.png"
        alt=""
      />
      <Link
        to="/"
        className="bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded flex items-center m-5 w-24"
      >
        <FaCaretLeft /> Back
      </Link>
      <div className="flex justify-between px-5 h-(almost)">
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
      </div>
    </div>
  );
};

export default Tryit;
