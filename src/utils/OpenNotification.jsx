import React, { useState } from "react";
import Notification from "../components/Notification";

export const OpenNotification = () => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <Notification show={show} setShow={setShow} title="Success">
        Words
      </Notification>
    </div>
  );
};

export default OpenNotification;
