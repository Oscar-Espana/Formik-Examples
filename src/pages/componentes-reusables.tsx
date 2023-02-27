import React from "react";
import {
  Box,
  Button,
  FormControlLabel,
  MenuItem,
  Radio,
  Typography,
} from "@mui/material";
import { civilStatus, genders } from "@/constants/user";
import { Formik } from "formik";
import { IUser } from "@/interfaces";
import { userValidation } from "@/utils/validationsSchema";
import { TextInput, RadioGroup } from "@/components/ui";
import { MainLayout } from "@/layouts";

const defaultUser: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  age: 0,
  civilStatus: "",
  gender: "",
};

const ReusableComponentsPage = () => {
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        <Formik
          initialValues={defaultUser}
          validationSchema={userValidation}
          onSubmit={(values) => {
            alert(JSON.stringify(values, null, 2));
          }}
        >
          {({ handleSubmit }) => (
            <Box
              component={"form"}
              sx={{
                display: "flex",
                flexDirection: "column",
                width: "100%",
                maxWidth: "350px",
                gap: 2.5,
              }}
              onSubmit={handleSubmit}
            >
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
                Componentes reutilizables
              </Typography>
              <TextInput type="text" name="firstName" label="Nombre" />
              <TextInput type="text" name="lastName" label="Apellido" />
              <TextInput type="email" name="email" label="Correo" />
              <TextInput type="number" name="age" label="Edad" />
              <TextInput select name="civilStatus" label="Estado civil">
                {civilStatus.map((option) => (
                  <MenuItem key={option} value={option}>
                    {option}
                  </MenuItem>
                ))}
              </TextInput>
              <RadioGroup label="Género" name="gender">
                {genders.map((option) => (
                  <FormControlLabel
                    key={option}
                    value={option}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
              <Button variant="contained" sx={{ mt: 1 }} type="submit">
                Registrar
              </Button>
            </Box>
          )}
        </Formik>
      </Box>
    </MainLayout>
  );
};

export default ReusableComponentsPage;
