import React from "react";
import { Paper, TextField, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Login = () => {
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 219,
    margin: "20px auto",
  };
  const btnStyle = { margin: "8px 0", padding: 10, height: "70vh" };
  return (
    <Paper elevation={10} style={paperStyle} align="center">
      <h2>Sign in</h2>
      <Grid align="center" />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="standard-basic"
          label="Username"
          placeholder="Enter username"
          fullWidth
          required
        />
        <TextField
          id="standard-basic"
          label="Password"
          placeholder="Enter password"
          type="password"
          fullWidth
          required
        />
      </Box>
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="secondary" fullWidth>
          Sing In
        </Button>
      </Stack>

      <Link href="#">Sing Up</Link>

      <div>
        <Checkbox {...label} defaultChecked />
        Remember Me
      </div>
    </Paper>
  );
};

export default Login;
