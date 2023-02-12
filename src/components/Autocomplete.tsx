import React from "react";
import {
  Autocomplete as AutocompleteMui,
  AutocompleteProps,
  TextField,
} from "@mui/material";
import { useField } from "formik";

interface Props<
  T,
  Multiple extends boolean | undefined,
  DisableClearable extends boolean | undefined,
  FreeSolo extends boolean | undefined
> extends Omit<
    AutocompleteProps<T, Multiple, DisableClearable, FreeSolo>,
    "label" | "name" | "renderInput" | "onChange"
  > {
  label: string;
  name: string;
  onChange?: (value: T | NonNullable<T> | T[] | null) => void;
}

export const Autocomplete = <T extends unknown>({
  label,
  onChange,
  ...props
}: Props<T, boolean, boolean, false>) => {
  const [field, meta, helpers] = useField(props.name);
  return (
    <AutocompleteMui
      {...field}
      {...props}
      onChange={(_, value: T | NonNullable<T> | T[] | null) => {
        onChange ? onChange(value) : helpers.setValue(value);
      }}
      renderInput={(params) => (
        <TextField
          {...field}
          {...params}
          label={label}
          error={meta.touched && Boolean(meta.error)}
          helperText={meta.touched && meta.error}
        />
      )}
    />
  );
};
