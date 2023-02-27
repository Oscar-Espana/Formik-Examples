import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { civilStatus, genders } from "@/constants/user";
import { useFormik } from "formik";
import { IUser } from "@/interfaces";
import { userValidation } from "@/utils/validationsSchema";
import { MainLayout } from "@/layouts";

const defaultUser: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  age: 0,
  civilStatus: "",
  gender: "",
};

const HomePage = () => {
  const { values, touched, errors, handleChange, handleSubmit } = useFormik({
    initialValues: defaultUser,
    validationSchema: userValidation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <MainLayout>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
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
            Componentes controlados
          </Typography>
          <TextField
            type="text"
            name="firstName"
            label="Nombre"
            value={values.firstName}
            onChange={handleChange}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
          />
          <TextField
            type="text"
            name="lastName"
            label="Apellido"
            value={values.lastName}
            onChange={handleChange}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName && errors.lastName}
          />
          <TextField
            type="email"
            name="email"
            label="Correo"
            value={values.email}
            onChange={handleChange}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email && errors.email}
          />
          <TextField
            type="number"
            name="age"
            label="Edad"
            value={values.age}
            onChange={handleChange}
            error={touched.age && Boolean(errors.age)}
            helperText={touched.age && errors.age}
          />
          <TextField
            select
            name="civilStatus"
            label="Estado civil"
            value={values.civilStatus}
            onChange={handleChange}
            error={touched.civilStatus && Boolean(errors.civilStatus)}
            helperText={touched.civilStatus && errors.civilStatus}
          >
            {civilStatus.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
          <FormControl error={touched.gender && Boolean(errors.gender)}>
            <FormLabel>Género</FormLabel>
            <RadioGroup
              name="gender"
              value={values.gender}
              onChange={handleChange}
            >
              {genders.map((option) => (
                <FormControlLabel
                  key={option}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
            <FormHelperText>{touched.gender && errors.gender}</FormHelperText>
          </FormControl>
          <Button variant="contained" sx={{ mt: 1 }} type="submit">
            Registrar
          </Button>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default HomePage;
