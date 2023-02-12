import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Formik } from "formik";
import { cities, countries } from "@/constants";
import { ICity, ICountry } from "@/intefaces";
import { Autocomplete, TextInput } from "@/components";
import { activities } from "../constants/activities";

interface FormData {
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
  const getCitiesFilteredByCountry = (countryId: number | undefined) => {
    return cities.filter((city) => city.countryId === countryId);
  };
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
                <Box
                  component={"form"}
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                    gap: 2.5,
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
                    Planificar viaje
                  </Typography>
                  <Autocomplete
                    label="País"
                    name="country"
                    options={countries}
                    getOptionLabel={(option) => option.name ?? option}
                    onChange={(value) => {
                      setFieldValue("country", value);
                      setFieldValue("city", null);
                    }}
                  />

                  <Autocomplete
                    label="Ciudad"
                    name="city"
                    options={getCitiesFilteredByCountry(values.country?.id)}
                    getOptionLabel={(option) => option.name ?? option}
                  />

                  <TextInput
                    type="number"
                    name="budget"
                    label="Presupuesto estimado"
                  />

                  <Typography>Actividades a realizar:</Typography>
                  <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                    {activities.map((activity) => (
                      <Box key={activity.id}>
                        <Box
                          sx={{
                            width: "50px",
                            height: "50px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            border: "solid 1px gray",
                            cursor: "pointer",
                          }}
                        >
                          {activity.icon}
                        </Box>
                        <Typography variant="caption" textAlign="center">
                          {activity.label}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Button variant="contained" sx={{ mt: 2 }} type="submit">
                    Registrar
                  </Button>
                </Box>
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
