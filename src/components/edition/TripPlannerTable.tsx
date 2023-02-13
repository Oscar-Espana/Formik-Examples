import React from "react";
import {
  DataGrid,
  GridRowsProp,
  GridColDef,
  GridRenderCellParams,
} from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { ITripPlan } from "@/interfaces";
import { cities, countries } from "@/constants";
import { Box, IconButton } from "@mui/material";

const rows: ITripPlan[] = [
  {
    id: "1",
    country: countries[0],
    city: cities[2],
    budget: 0,
    activities: [],
  },
  {
    id: "2",
    country: countries[2],
    city: cities[5],
    budget: 0,
    activities: [],
  },
];

const columns: GridColDef[] = [
  {
    field: "id",
    headerName: "Acciones",
    renderCell: (params: GridRenderCellParams) => {
      const id = params.row.id || "";
      return (
        <Box>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      );
    },
  },
  {
    field: "country",
    headerName: "País",
    renderCell: (params: GridRenderCellParams) => {
      const country = params.row.country?.name || "";
      return <>{country}</>;
    },
  },
  {
    field: "city",
    headerName: "Ciudad",
    renderCell: (params: GridRenderCellParams) => {
      const city = params.row.city?.name || "";
      return <>{city}</>;
    },
  },
  { field: "budget", headerName: "Presupuesto" },
];

export const TripPlannerTable = () => {
  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} hideFooter />
    </div>
  );
};
