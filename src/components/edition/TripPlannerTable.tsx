import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { IActivity, ITripPlan } from "@/interfaces";
import { Box, IconButton } from "@mui/material";

interface Props {
  trips: ITripPlan[];
  onSelectEditTrip: (idTrip: string) => void;
  onRemoveTrip: (idTrip: string) => void;
}
export const TripPlannerTable = ({
  trips = [],
  onSelectEditTrip,
  onRemoveTrip,
}: Props) => {
  const columns: GridColDef[] = [
    {
      field: "id",
      headerName: "Acciones",
      renderCell: (params: GridRenderCellParams) => {
        const id = params.row.id || "";
        return (
          <Box>
            <IconButton
              onClick={() => {
                onSelectEditTrip(id);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                onRemoveTrip(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
    {
      field: "country",
      headerName: "País",
      minWidth: 125,
      renderCell: (params: GridRenderCellParams) => {
        const country = params.row.country?.name || "";
        return <>{country}</>;
      },
    },
    {
      field: "city",
      headerName: "Ciudad",
      minWidth: 150,
      renderCell: (params: GridRenderCellParams) => {
        const city = params.row.city?.name || "";
        return <>{city}</>;
      },
    },
    { field: "budget", headerName: "Presupuesto" },
    {
      field: "activities",
      headerName: "Actividades",
      minWidth: 350,
      renderCell: (params: GridRenderCellParams) => {
        const activitiesSelected: IActivity[] = params.row.activities || "";
        return <>{activitiesSelected.map((item) => item.label).join(", ")}</>;
      },
    },
  ];

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={trips} columns={columns} hideFooter />
    </div>
  );
};
