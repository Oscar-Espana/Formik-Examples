import React from "react";
import { DataGrid, GridColDef, GridRenderCellParams } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/EditOutlined";
import DeleteIcon from "@mui/icons-material/DeleteOutlined";
import { IGuest } from "@/interfaces";
import { Box, IconButton } from "@mui/material";

interface Props {
  guests: IGuest[];
  onSelectGuest: (idGuest: string) => void;
  onRemoveGuest: (idGuest: string) => void;
}
export const GuestsTable = ({
  guests = [],
  onSelectGuest,
  onRemoveGuest,
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
                onSelectGuest(id);
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              onClick={() => {
                onRemoveGuest(id);
              }}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        );
      },
    },
    { field: "firstName", headerName: "Nombre" },
    { field: "lastName", headerName: "Apellido" },
    { field: "dni", headerName: "DNI" },
  ];

  return (
    <div style={{ height: 250, width: "100%" }}>
      <DataGrid rows={guests} columns={columns} hideFooter />
    </div>
  );
};
