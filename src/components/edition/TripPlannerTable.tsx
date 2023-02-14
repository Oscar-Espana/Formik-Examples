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

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid rows={trips} columns={columns} hideFooter />
    </div>
  );
};
