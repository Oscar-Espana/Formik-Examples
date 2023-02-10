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

const HomePage = () => {
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
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          maxWidth: "350px",
          gap: 2.5,
        }}
      >
        <TextField label="Nombre" type="text" />
        <TextField label="Apellido" type="text" />
        <TextField label="Correo" type="email" />
        <TextField label="Edad" type="number" />
        <TextField select label="Estado civil">
          {civilStatus.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>
        <FormControl>
          <FormLabel id="demo-controlled-radio-buttons-group">Género</FormLabel>
          <RadioGroup
            aria-labelledby="demo-controlled-radio-buttons-group"
            name="controlled-radio-buttons-group"
          >
            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Femenino"
            />
            <FormControlLabel
              value="male"
              control={<Radio />}
              label="Masculino"
            />
          </RadioGroup>
        </FormControl>
        <Button variant="contained" sx={{ mt: 1 }}>
          Registrar
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
