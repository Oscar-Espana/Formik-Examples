import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Formik } from "formik";
import { ICity, ICountry } from "@/interfaces";
import { EditionForm } from "@/components/edition";

export interface FormData {
  country: ICountry | null;
  city: ICity | null;
  budget: number;
  activities: any[];
}

const initialValues: FormData = {
  country: null,
  city: null,
  budget: 0,
  activities: [],
};
const EditionPage = () => {
  return (
    <Box>
      <Container>
        <Grid container>
          <Grid item xs={12} md={4}>
            <Formik
              initialValues={initialValues}
              onSubmit={(values) => {
                alert(JSON.stringify(values, null, 2));
              }}
            >
              {({ values, setFieldValue, handleSubmit }) => (
                <EditionForm
                  values={values}
                  setFieldValue={setFieldValue}
                  handleSubmit={handleSubmit}
                />
              )}
            </Formik>
          </Grid>
          <Grid item xs={12} md={8}></Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EditionPage;
