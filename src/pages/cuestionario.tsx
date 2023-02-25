import { Question } from "@/components/questions";
import { questions } from "@/constants";
import { Box, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";

const QuestionsPage = () => {
  return (
    <Formik
      initialValues={{ questions }}
      enableReinitialize
      onSubmit={(values) => {
        console.log("values", values);
      }}
    >
      {({ values, setFieldValue, handleSubmit }) => (
        <div>
          {questions.map((question) => (
            <Question key={question.id} question={question} />
          ))}
        </div>
      )}
    </Formik>
  );
};

export default QuestionsPage;
