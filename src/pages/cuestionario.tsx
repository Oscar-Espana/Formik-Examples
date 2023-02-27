import React, { useState } from "react";
import { Question } from "@/components/questions";
import { questions } from "@/constants";
import { Box, Button, Container, Typography } from "@mui/material";
import { Formik } from "formik";
import { IAnswerQuestion } from "../interfaces";
import { MainLayout } from "@/layouts";

const defaultAnswers: { answers: IAnswerQuestion[] } = {
  answers: [],
};

const QuestionsPage = () => {
  const [isFormSaved, setIsFormSaved] = useState(false);

  return (
    <MainLayout>
      <Container>
        <Formik
          initialValues={defaultAnswers}
          enableReinitialize
          onSubmit={(values) => {
            setIsFormSaved(true);
            console.log("value", values);
          }}
        >
          {({ values, setFieldValue, handleSubmit }) => (
            <Box
              component={"form"}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
              onSubmit={handleSubmit}
            >
              <Typography
                textAlign={"center"}
                component="h2"
                sx={{
                  fontWeight: "500",
                  fontSize: "28px",
                  mb: 1.5,
                }}
              >
                Prueba de Matemáticas
              </Typography>
              {questions.map((question) => (
                <Question
                  isFormSaved={isFormSaved}
                  key={question.id}
                  question={question}
                  answersSelected={values.answers}
                  onChangeAnswers={(answers: IAnswerQuestion[]) => {
                    setFieldValue("answers", answers);
                  }}
                />
              ))}
              <Box sx={{ margin: "0 0 0 auto" }}>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={isFormSaved}
                >
                  Finalizar prueba
                </Button>
              </Box>
            </Box>
          )}
        </Formik>
      </Container>
    </MainLayout>
  );
};

export default QuestionsPage;
