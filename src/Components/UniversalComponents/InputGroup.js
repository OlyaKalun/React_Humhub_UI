import React from "react";
import PropTypes from "prop-types";

export function InputGroup(props) {
  const {
    labelName,
    htmlFor,
    labelClasses,
    inputName,
    inputType,
    inputValue,
    placeholder,
    inputClasses,
    wrapperClasses,
    onChange,
    labelBefore = true,
    invalidClasses,
    messageInvalid,
    onBlur,
  } = props;
  if (labelBefore) {
    return (
      <div className={wrapperClasses}>
        <label htmlFor={htmlFor} className={labelClasses}>
          {labelName}
        </label>
        <input
          name={inputName}
          type={inputType}
          value={inputValue}
          placeholder={placeholder}
          className={inputClasses}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
        <div className={`invalid ${invalidClasses}`}>{messageInvalid}</div>
      </div>
    );
  }

  return (
    <div className={wrapperClasses}>
      <input
        name={inputName}
        type={inputType}
        value={inputValue}
        placeholder={placeholder}
        className={inputClasses}
        onChange={onChange}
      ></input>
      <div className={invalidClasses}>{messageInvalid}</div>
      <label htmlFor={htmlFor} className={labelClasses}>
        {labelName}
      </label>
    </div>
  );
}

InputGroup.propTypes = {
  wrapperClasses: PropTypes.string,
  labelName: PropTypes.string,
  htmlFor: PropTypes.string,
  inputName: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  inputClasses: PropTypes.string,
  labelBefore: PropTypes.bool,
};
