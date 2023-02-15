import React from "react";
import { Box, IconButton, Typography } from "@mui/material";
import { IActivity } from "@/interfaces";

interface Props {
  activity: IActivity;
  activitiesSelected: IActivity[];
  onSelectActivities: () => void;
}
const Activity = ({
  activity,
  activitiesSelected,
  onSelectActivities,
}: Props) => {
  const activityFounded = activitiesSelected.find(
    (item) => item.id === activity.id
  );

  const isSelected = Boolean(activityFounded);

  return (
    <Box>
      <Box
        sx={{
          width: "50px",
          height: "50px",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          border: isSelected ? "none" : "solid 1px gray",
          cursor: "pointer",
          backgroundColor: isSelected ? "primary.main" : "none",
          color: isSelected ? "white" : "black",
        }}
        onClick={onSelectActivities}
      >
        {activity.icon}
      </Box>
      <Typography variant="caption" textAlign="center">
        {activity.label}
      </Typography>
    </Box>
  );
};

export default Activity;
