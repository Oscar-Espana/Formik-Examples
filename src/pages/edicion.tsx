import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";
import { Formik, FormikHelpers, FormikValues } from "formik";
import { ITripPlan } from "@/interfaces";
import { EditionForm, TripPlannerTable } from "@/components/edition";
import { cities, countries } from "@/constants";

const initialValues: ITripPlan = {
  id: "",
  country: null,
  city: null,
  budget: 0,
  activities: [],
};

const initialTrips: ITripPlan[] = [
  {
    id: "1",
    country: countries[0],
    city: cities[2],
    budget: 400,
    activities: [],
  },
  {
    id: "2",
    country: countries[2],
    city: cities[5],
    budget: 200,
    activities: [],
  },
];

const EditionPage = () => {
  const [trips, setTrips] = useState<ITripPlan[]>(initialTrips);
  const [tripSelected, setTripSelected] = useState<ITripPlan | null>(null);

  const isEditForm = Boolean(tripSelected);

  const handleSelectEditTrip = (idTrip: string) => {
    const tripSelected = trips.find((trip) => trip.id === idTrip);
    setTripSelected(tripSelected || null);
  };

  const handleAddTrip = (newTrip: ITripPlan) => {
    const tripsAux = [...trips];
    tripsAux.push({ ...newTrip, id: Date.now().toString() });
    setTrips(tripsAux);
    setTripSelected(null);
  };

  const handleEditTrip = (tripUpdated: ITripPlan) => {
    const tripsAux = [...trips];
    const tripIndex = trips.findIndex((trip) => trip.id === tripUpdated.id);
    tripsAux[tripIndex] = tripUpdated;
    setTrips(tripsAux);
    setTripSelected(null);
  };

  const handleRemoveTrip = (idTrip: string) => {
    const tripsAux = [...trips];
    const tripIndex = trips.findIndex((trip) => trip.id === idTrip);
    tripsAux.splice(tripIndex, 1);
    setTrips(tripsAux);
  };

  return (
    <Box>
      <Container>
        <Grid container spacing={5} sx={{ my: 5 }}>
          <Grid item xs={12} md={4}>
            <Formik
              initialValues={tripSelected || initialValues}
              enableReinitialize
              onSubmit={(
                values: ITripPlan,
                { resetForm }: FormikHelpers<ITripPlan>
              ) => {
                if (isEditForm) {
                  handleEditTrip(values);
                } else {
                  handleAddTrip(values);
                }
                resetForm();
              }}
            >
              {({ values, setFieldValue, handleSubmit }) => (
                <EditionForm
                  isEditForm={isEditForm}
                  values={values}
                  setFieldValue={setFieldValue}
                  handleSubmit={handleSubmit}
                />
              )}
            </Formik>
          </Grid>
          <Grid item xs={12} md={8}>
            <TripPlannerTable
              trips={trips}
              onSelectEditTrip={handleSelectEditTrip}
              onRemoveTrip={handleRemoveTrip}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default EditionPage;
