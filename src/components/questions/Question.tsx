import React, { FC } from "react";
import { IAnswerQuestion, IQuestion } from "@/interfaces";
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { IconAnswerQuestion } from "./IconAnswerQuestion";

interface Props {
  isFormSaved: boolean;
  question: IQuestion;
  answersSelected: IAnswerQuestion[];
  onChangeAnswers: (answers: IAnswerQuestion[]) => void;
}
export const Question: FC<Props> = ({
  isFormSaved,
  question,
  answersSelected,
  onChangeAnswers,
}) => {
  const correctOptionInQuestion = question.options.find(
    (item) => item.isCorrectOption
  );

  const answerSelectedInQuestion = answersSelected.find(
    (answer) => answer.idQuestion === question.id
  );

  const handleChangeAnswer = (event: React.ChangeEvent<HTMLInputElement>) => {
    const optionSelected = (event.target as HTMLInputElement).value;
    const answersSelectedAux = [...answersSelected];

    if (answerSelectedInQuestion) {
      const indexAnswerSelected = answersSelected.findIndex(
        (answer) => answer.id === answerSelectedInQuestion.id
      );
      answersSelectedAux[indexAnswerSelected].idOptionQuestion =
        Number(optionSelected);
    } else {
      const newAnswer: IAnswerQuestion = {
        id: Date.now(),
        idQuestion: question.id,
        idOptionQuestion: Number(optionSelected),
      };
      answersSelectedAux.push(newAnswer);
    }
    onChangeAnswers(answersSelectedAux);
  };

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
        <RadioGroup
          value={
            answerSelectedInQuestion
              ? answerSelectedInQuestion.idOptionQuestion
              : null
          }
          onChange={handleChangeAnswer}
        >
          {question.options.map((option) => (
            <Box key={option.id} display="flex" alignItems="center">
              <FormControlLabel
                disabled={isFormSaved}
                value={option.id}
                control={<Radio size="small" />}
                label={option.option}
              />
              {isFormSaved && (
                <IconAnswerQuestion
                  currentOptionInQuestion={option}
                  correctOptionInQuestion={correctOptionInQuestion}
                  answerSelectedInQuestion={answerSelectedInQuestion}
                />
              )}
            </Box>
          ))}
          {isFormSaved && (
            <Typography variant="body2" color={"warning.main"}>
              {correctOptionInQuestion && (
                <>
                  Respuesta correcta: <b>{correctOptionInQuestion?.option}</b>
                </>
              )}
            </Typography>
          )}
        </RadioGroup>
      </FormControl>
    </Box>
  );
};
