import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { countries, cities } from "@/constants";
import { ITripPlan } from "@/interfaces";
import { Autocomplete, TextInput } from "../ui";
import Activities from "./Activities";

interface Props {
  isEditForm: boolean;
  handleSubmit: (e?: React.FormEvent<HTMLFormElement> | undefined) => void;
  setFieldValue: (
    field: string,
    value: any,
    shouldValidate?: boolean | undefined
  ) => void;
  values: ITripPlan;
}
export const EditionForm = ({
  isEditForm,
  handleSubmit,
  setFieldValue,
  values,
}: Props) => {
  const getCitiesFilteredByCountry = (countryId: number | undefined) => {
    return cities.filter((city) => city.countryId === countryId);
  };

  return (
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

      <TextInput type="number" name="budget" label="Presupuesto estimado" />

      <Activities name="activities" />

      <Button variant="contained" sx={{ mt: 2 }} type="submit">
        {isEditForm ? "Actualizar" : "Registrar"}
      </Button>
    </Box>
  );
};
