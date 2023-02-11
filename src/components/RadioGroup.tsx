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
import { genders } from "@/constants/user";
import { useField } from "formik";

interface Props extends Omit<RadioGroupProps, "label" | "name"> {
  label: string;
  name: string;
}

export const RadioGroup = ({ label, ...props }: Props) => {
  const [field, meta] = useField(props.name);

  return (
    <FormControl error={meta.touched && Boolean(meta.error)}>
      <FormLabel>{label}</FormLabel>
      <RadioGroupMui {...field} {...props}>
        {genders.map((option) => (
          <FormControlLabel
            key={option}
            value={option}
            control={<Radio />}
            label={option}
          />
        ))}
      </RadioGroupMui>
      <FormHelperText>{meta.touched && meta.error}</FormHelperText>
    </FormControl>
  );
};
