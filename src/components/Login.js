import React from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { useForm } from "react-hook-form";
import { Paper, Grid } from "@mui/material";
import Link from "@mui/material/Link";
import Checkbox from "@mui/material/Checkbox";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const paperStyle = {
    padding: 20,
    height: "70vh",
    width: 220,
    margin: "20px auto",
  };
  const label = { inputProps: { "aria-label": "Checkbox demo" } };
  return (
    <Paper elevation={10} style={paperStyle} align="center">
      <Container maxWidth="xs" style={paperStyle}>
        <h1>Welcome!</h1>
        <Grid align="center" />
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box mb={3}>
            <TextField
              variant="outlined"
              label="Username"
              fullWidth
              autoComplete="Write your username here"
              autoFocus
              {...register("Username", { required: "Required" })}
              error={!!errors?.Username}
              helperText={errors?.Username ? errors.Username.message : null}
            />
          </Box>
          <Box mb={3}>
            <TextField
              variant="outlined"
              label="Password"
              fullWidth
              autoComplete="Write your password here"
              autoFocus
              {...register("Password", { required: "Required" })}
              error={!!errors?.Password}
              helperText={errors?.Password ? errors.Password.message : null}
            />
          </Box>
          <Box mb={3}>
          <Button type="submit" variant="contained" color="primary" fullWidhth>
            Log in
          </Button>
          </Box>
        </form>
        <div>
          <Checkbox {...label} defaultChecked />
          Remember Me
        </div>
        <Link href="#">Sing Up</Link>
      </Container>
    </Paper>
  );
}
