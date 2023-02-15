import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { countries, activities, cities } from "@/constants";
import { IActivity, ITripPlan } from "@/interfaces";
import { Autocomplete, TextInput } from "../ui";
import Activity from "./Activity";

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

  const handleSelectActivities = (activity: IActivity) => {
    const activitiesAux = [...values.activities];
    const indexActivity = activitiesAux.findIndex(
      (item) => item.id === activity.id
    );
    indexActivity === -1
      ? activitiesAux.push(activity)
      : activitiesAux.splice(indexActivity, 1);
    setFieldValue("activities", activitiesAux);
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

      <Typography>Actividades a realizar:</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            activitiesSelected={values.activities}
            onSelectActivities={() => handleSelectActivities(activity)}
          />
        ))}
      </Box>

      <Button variant="contained" sx={{ mt: 2 }} type="submit">
        {isEditForm ? "Actualizar" : "Registrar"}
      </Button>
    </Box>
  );
};
