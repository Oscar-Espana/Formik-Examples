import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { Formik } from "formik";
import { ITripPlan } from "@/interfaces";
import { EditionForm, TripPlannerTable } from "@/components/edition";

const initialValues: ITripPlan = {
  id: "",
  country: null,
  city: null,
  budget: 0,
  activities: [],
};

const EditionPage = () => {
  return (
    <Box>
      <Container>
        <Grid container spacing={5}>
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
          <Grid item xs={12} md={8}>
            <TripPlannerTable />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EditionPage;
