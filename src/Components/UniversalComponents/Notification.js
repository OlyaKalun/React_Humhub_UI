import React from "react";

export function Notification(props) {
  const { alertClasses, message } = props;
  return <div className={`alert ${alertClasses}`}>{message}</div>;
}
