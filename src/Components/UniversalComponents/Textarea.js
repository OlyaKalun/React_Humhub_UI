import React from "react";

export function Textarea(props) {
  const {
    labelName,
    htmlFor,
    labelClasses,
    wrapperClasses,
    textareaClasses,
    textareaId,
    textareaName,
    textareaValue,
    rows,
    placeholder,
    onChange,
    invalidClasses,
    messageInvalid,
  } = props;

  return (
    <div className={wrapperClasses}>
      <label htmlFor={htmlFor} className={labelClasses}>
        {labelName}
      </label>
      <textarea
        className={textareaClasses}
        id={textareaId}
        name={textareaName}
        value={textareaValue}
        rows={rows}
        placeholder={placeholder}
        onChange={onChange}
      ></textarea>
      <div className={`invalid ${invalidClasses}`}>{messageInvalid}</div>
    </div>
  );
}
