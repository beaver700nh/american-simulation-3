"use client";

import { useMemo, useState } from "react";

import { IconButton, InputAdornment, TextField, TextFieldProps } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export default function PasswordInput(props: TextFieldProps) {
  const [visible, setVisible] = useState(false);

  const handleClick = useMemo(() => () => {
    setVisible(visible => !visible);
  }, []);

  const handleMouseDown = useMemo(() => (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  }, []);

  return (
    <TextField
      label="Password"
      type={visible ? "text" : "password"}
      InputProps={{
        endAdornment: <InputAdornment
          position="end"
        >
          <IconButton
            onClick={handleClick}
            onMouseDown={handleMouseDown}
            edge="end"
          >
            {visible ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </InputAdornment>,
        ...props.InputProps,
      }}
      {...props}
    />
  );
}
