import { IAnswerQuestion, IOptionQuestion } from "@/interfaces";
import React, { FC } from "react";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface Props {
  currentOptionInQuestion: IOptionQuestion;
  correctOptionInQuestion: IOptionQuestion | undefined;
  answerSelectedInQuestion: IAnswerQuestion | undefined;
}
export const IconAnswerQuestion: FC<Props> = ({
  currentOptionInQuestion,
  correctOptionInQuestion,
  answerSelectedInQuestion,
}) => {
  if (!correctOptionInQuestion) {
    return null;
  }
  if (currentOptionInQuestion !== correctOptionInQuestion) {
    return null;
  }

  if (!answerSelectedInQuestion) {
    return null;
  }

  const isCorrectAnswer =
    correctOptionInQuestion.id === answerSelectedInQuestion.idOptionQuestion;

  if (!isCorrectAnswer) {
    return <CloseIcon color="error" />;
  }

  return <CheckIcon color="success" />;
};
