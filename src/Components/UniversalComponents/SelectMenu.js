import React from "react";

export function SelectMenu(props) {
  const { labelName, htmlFor, labelClasses, wrapperClasses, selectClasses, selectId, selectName, selectValue, options, onChange } = props;
  return (
    <div className={wrapperClasses}>
      <label htmlFor={htmlFor} className={labelClasses}>
        {labelName}
      </label>
      <select className={selectClasses} id={selectId} name={selectName} onChange={onChange} value={selectValue}>
        {options.map((option, index) => (
          <option key={index} value={option.optionValue}>
            {option.optionTitle}
          </option>
        ))}
      </select>
    </div>
  );
}
