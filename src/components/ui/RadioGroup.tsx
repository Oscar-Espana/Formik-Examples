import React from "react";
import {
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup as RadioGroupMui,
  RadioGroupProps,
  FormHelperText,
} from "@mui/material";
import { useField } from "formik";

interface Props extends Omit<RadioGroupProps, "label" | "name"> {
  label: string;
  name: string;
}

export const RadioGroup = ({ label, children, ...props }: Props) => {
  const [field, meta] = useField(props.name);
  return (
    <FormControl error={meta.touched && Boolean(meta.error)}>
      <FormLabel>{label}</FormLabel>
      <RadioGroupMui {...field} {...props}>
        {children}
      </RadioGroupMui>
      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
};
