import React, { useState } from "react";
import { Formik } from "formik";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormHelperText,
  Grid,
  Radio,
  Typography,
} from "@mui/material";
import PersonAddIcon from "@mui/icons-material/PersonAddAltOutlined";
import { IBooking, IGuest } from "@/interfaces";
import { bookingValidation } from "@/utils/validationsSchema";
import { TextInput, RadioGroup } from "@/components/ui";
import { MainLayout } from "@/layouts";
import { paymentMethods } from "@/constants";
import { GuestsModalForm, GuestsTable } from "@/components/nestedForms";
import { error } from "console";

const defaultBooking: IBooking = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  paymentMethod: "",
  guests: [],
};

const NestedFormsPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [guestSelected, setGuestSelected] = useState<IGuest | null>(null);

  const handleToogleModal = (guestSelected?: IGuest) => {
    setIsOpenModal(!isOpenModal);
    setGuestSelected(guestSelected || null);
  };

  return (
    <MainLayout>
      <Container>
        <Typography
          textAlign={"center"}
          component="h1"
          variant="h2"
          sx={{
            fontWeight: "500",
            fontSize: "28px",
            mb: 1.5,
          }}
        >
          Reserva tu hospedaje
        </Typography>

        <Formik
          initialValues={defaultBooking}
          validationSchema={bookingValidation}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit, values, setFieldValue, getFieldMeta }) => (
            <Box
              component={"form"}
              onSubmit={handleSubmit}
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
            >
              <Box
                component="fieldset"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  border: "none",
                }}
              >
                <Typography variant="h5" component="h2">
                  Datos del cliente:
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      type="text"
                      name="firstName"
                      label="Nombre"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      type="text"
                      name="lastName"
                      label="Apellido"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      type="email"
                      name="email"
                      label="Correo"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} md={6}>
                    <TextInput
                      type="tel"
                      name="phone"
                      label="Celular"
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <RadioGroup label="Método de pago" name="paymentMethod">
                      {paymentMethods.map((option) => (
                        <FormControlLabel
                          key={option.id}
                          value={option.value}
                          control={<Radio />}
                          label={option.label}
                        />
                      ))}
                    </RadioGroup>
                  </Grid>
                </Grid>
              </Box>

              <Box
                component="fieldset"
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "flex-start",
                  gap: 2,
                  border: "none",
                }}
              >
                <Typography variant="h5" component="h2">
                  Datos de los huéspedes:
                </Typography>
                <Button
                  variant="outlined"
                  startIcon={<PersonAddIcon />}
                  onClick={() => handleToogleModal()}
                >
                  Agregar húesped
                </Button>
                <GuestsTable
                  guests={values.guests}
                  onSelectGuest={function (idGuest: string): void {
                    const currentGuests = [...values.guests];
                    const guestFounded = currentGuests.find(
                      (item) => item.id === idGuest
                    );
                    handleToogleModal(guestFounded);
                  }}
                  onRemoveGuest={function (idGuest: string): void {
                    const currentGuests = [...values.guests];
                    const indexGuest = currentGuests.findIndex(
                      (item) => item.id === idGuest
                    );
                    currentGuests.splice(indexGuest, 1);
                    setFieldValue("guests", currentGuests);
                  }}
                />
                <GuestsModalForm
                  isOpen={isOpenModal}
                  onClose={handleToogleModal}
                  guestSelected={guestSelected}
                  onSaveGuest={(guest: IGuest) => {
                    const currentGuests = [...values.guests];
                    const indexGuest = currentGuests.findIndex(
                      (item) => item.id === guest.id
                    );
                    if (indexGuest >= 0) {
                      currentGuests[indexGuest] = guest;
                    } else {
                      currentGuests.push(guest);
                    }
                    setFieldValue("guests", currentGuests);
                  }}
                />
                <FormControl error={Boolean(getFieldMeta("guests").error)}>
                  <FormHelperText>
                    {getFieldMeta("guests").error}
                  </FormHelperText>
                </FormControl>
              </Box>

              <Button
                variant="contained"
                sx={{ px: 10, alignSelf: "end" }}
                type="submit"
              >
                Registrar
              </Button>
            </Box>
          )}
        </Formik>
      </Container>
    </MainLayout>
  );
};

export default NestedFormsPage;
