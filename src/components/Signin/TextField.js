import { TextField } from "@mui/material";
import React from "react";

function TextFieldFomik(props) {
  const {
    type,
    label,
    field,
    form,
    required,
    placeholder,
    variant,
    ...otherProps
  } = props;
  const { onChange, value, name } = field || {};
  const { errors, touched } = form || {};

  // const errorMsg = get(errors, name);
  // const isTouched = get(touched, name);
  // const isShowMsg = isTouched && !!errorMsg;

  //! Render
  return (
    <div>
      <TextField
        onChange={props?.onChange || onChange}
        label={label}
        type={type}
        id={name}
        name={name}
        value={value}
        placeholder={placeholder}
        variant={variant}
        helperText={
          touched[field.name] &&
          errors[field.name] && (
            <p style={{ color: "red", margin: "0" }}>{errors[field.name]}</p>
          )
        }
        {...otherProps}
      />
    </div>
  );
}

export default TextFieldFomik;
