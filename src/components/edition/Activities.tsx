import { activities } from "@/constants";
import { IActivity } from "@/interfaces";
import { Typography, Box } from "@mui/material";
import { useField } from "formik";
import React from "react";
import Activity from "./Activity";

interface Props {
  name: string;
}

const Activities = (props: Props) => {
  const [field, meta, helpers] = useField(props.name);

  const activitiesSelected = field.value as IActivity[];
  const hasError = meta.touched && Boolean(meta.error);
  const helperText = meta.touched && meta.error;

  const handleSelectActivities = (activity: IActivity) => {
    const activitiesAux = [...activitiesSelected];
    const indexActivity = activitiesAux.findIndex(
      (item) => item.id === activity.id
    );
    indexActivity === -1
      ? activitiesAux.push(activity)
      : activitiesAux.splice(indexActivity, 1);
    helpers.setValue(activitiesAux);
  };

  return (
    <>
      <Typography color={hasError ? "error" : "inherit"}>
        Actividades a realizar:
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "space-around" }}>
        {activities.map((activity) => (
          <Activity
            key={activity.id}
            activity={activity}
            activitiesSelected={activitiesSelected}
            onSelectActivities={() => handleSelectActivities(activity)}
          />
        ))}
      </Box>
      {hasError && (
        <Typography variant="caption" color="error">
          {helperText}
        </Typography>
      )}
    </>
  );
};

export default Activities;
