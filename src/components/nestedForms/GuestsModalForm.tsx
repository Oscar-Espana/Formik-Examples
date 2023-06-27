import React, { FC } from "react";
import { Box, Typography, Button, Modal } from "@mui/material";
import { Formik } from "formik";
import { TextInput } from "../ui";
import { bookingValidation, guestValidation } from "@/utils/validationsSchema";
import { IGuest } from "@/interfaces";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  guestSelected: IGuest | null;
  onSaveGuest: (guest: IGuest) => void;
}

export const GuestsModalForm: FC<Props> = ({
  isOpen,
  onClose,
  guestSelected,
  onSaveGuest,
}) => {
  const defaultGuest: IGuest = {
    id: Date.now().toString(),
    firstName: "",
    lastName: "",
    email: "",
    dni: "",
  };

  return (
    <Modal open={isOpen} onClose={onClose}>
      <Box
        sx={{
          position: "absolute" as "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "450px",
          bgcolor: "background.paper",
          p: { xs: 4, md: 7 },
        }}
      >
        <Formik
          initialValues={guestSelected || defaultGuest}
          validationSchema={guestValidation}
          onSubmit={(values) => {
            onSaveGuest(values);
            onClose();
          }}
        >
          {({ handleSubmit }) => (
            <Box
              component={"form"}
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                gap: 2.5,
              }}
            >
              <Typography variant="h5">Datos del huésped:</Typography>

              <TextInput
                type="text"
                name="firstName"
                label="Nombre"
                fullWidth
              />
              <TextInput
                type="text"
                name="lastName"
                label="Apellido"
                fullWidth
              />
              <TextInput type="email" name="email" label="Correo" fullWidth />
              <TextInput type="text" name="dni" label="DNI" fullWidth />
              <Button variant="contained" sx={{ mt: 1 }} type="submit">
                Registrar
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </Modal>
  );
};
