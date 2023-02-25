import { IQuestion } from "@/interfaces";
import {
  Box,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import React, { FC, useState } from "react";

interface Props {
  question: IQuestion;
}
export const Question: FC<Props> = ({ question }) => {
  return (
    <Box>
      <Typography component="h2" variant="subtitle1" fontWeight={600}>
        {question.title}
      </Typography>
      <Typography variant="body2">
        {`(`}
        {question.points} {question.points === 1 ? "Punto" : "Puntos"}
        {`)`}
      </Typography>
      <FormControl>
        <RadioGroup>
          {question.options.map((option) => (
            <FormControlLabel
              key={option.id}
              value={option.id}
              control={<Radio size="small" />}
              label={option.option}
            />
          ))}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
