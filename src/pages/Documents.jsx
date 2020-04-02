import React from "react";
import ApplicationShell from "../components/ApplicationShell";
import { useSelector, useDispatch } from "react-redux";
import { userData, deleteDoc } from "../components/userSlice";
import { FaRegEye, FaTrashAlt } from "react-icons/fa";
import { useMutation } from "@apollo/react-hooks";
import { DELTE_DOC } from "../utils/queries";
import { useState } from "react";

const Documents = ({ history }) => {
  const credentials = useSelector(userData);
  const dispatch = useDispatch();

  const [deleteErrors, setDeleteErrors] = useState({});

  const [deleteDocument, { loading: deleteLoading }] = useMutation(DELTE_DOC, {
    update(_, { data: { deleteDoc } }) {},
    onError(err) {
      const errors = err.graphQLErrors[0].extensions.exception.errors;
      setDeleteErrors(errors);
    }
  });

  const handleDelete = async id => {
    await deleteDocument({ variables: { docId: id } });
    dispatch(deleteDoc(id));
  };

  const openDocument = id => {
    console.log(id);
    const docToOpen = credentials.docs.find(elem => elem.docId === id);

    localStorage.setItem(
      "currDoc",
      JSON.stringify({ id, title: docToOpen.name, body: docToOpen.body })
    );
    history.push("/create");
  };

  return (
    <ApplicationShell page="documents">
      <div className="max-w-7xl mx-auto bg-white rounded-lg shadow px-5 py-6 sm:px-6">
        {credentials.docs.length > 0 ? (
          credentials.docs.map(doc => (
            <div className="flex justify-between mb-7 lg:px-10">
              <div>{doc.name}</div>
              <div className="flex">
                <FaRegEye
                  onClick={() => openDocument(doc.docId)}
                  className=" cursor-pointer"
                />
                <FaTrashAlt
                  className="ml-10 cursor-pointer"
                  onClick={() => handleDelete(doc.docId)}
                />
              </div>
            </div>
          ))
        ) : (
          <div>You have no documents yet</div>
        )}
      </div>
      {deleteLoading && <div className="spinner" />}
    </ApplicationShell>
  );
};

export default Documents;
