import React from "react";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  MenuItem,
  Radio,
  RadioGroup,
  TextField,
} from "@mui/material";
import { civilStatus } from "@/constants/gender";
import { useFormik } from "formik";
import { IUser } from "@/intefaces";

const defaultUser: IUser = {
  firstName: "",
  lastName: "",
  email: "",
  age: 0,
  civilStatus: "",
  gender: "",
};

const HomePage = () => {
  const { values, handleChange, handleSubmit } = useFormik({
    initialValues: defaultUser,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
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
        <TextField
          type="text"
          name="firstName"
          label="Nombre"
          value={values.firstName}
          onChange={handleChange}
        />
        <TextField
          type="text"
          name="lastName"
          label="Apellido"
          value={values.lastName}
          onChange={handleChange}
        />
        <TextField
          type="email"
          name="email"
          label="Correo"
          value={values.email}
          onChange={handleChange}
        />
        <TextField
          type="number"
          name="age"
          label="Edad"
          value={values.age}
          onChange={handleChange}
        />
        <TextField
          select
          name="civilStatus"
          label="Estado civil"
          value={values.civilStatus}
          onChange={handleChange}
        >
          {civilStatus.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <FormLabel>Género</FormLabel>
          <RadioGroup
            name="gender"
            value={values.gender}
            onChange={handleChange}
          >
            <FormControlLabel
              value="femenino"
              control={<Radio />}
              label="Femenino"
            />
            <FormControlLabel
              value="masculino"
              control={<Radio />}
              label="Masculino"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" sx={{ mt: 1 }} type="submit">
          Registrar
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
