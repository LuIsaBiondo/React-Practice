import React from "react";
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useForm } from "react-hook-form";

export default function LoginPage(){
    const {register, handleSubmit, formState: { errors },} = useForm()
    const onSubmit = (data) => console.log(data)
    return (
    <Container maxWidth='xs'>
        <h1>Welcome!</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <Box mb={3}>
            <TextField 
                variant="outlined" 
                label="Username" 
                fullWidth 
                autoComplete="Write your username here" 
                autoFocus  
                {...register("Username", {required: "Required"})}
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
                {...register("Password", {required: "Required"})}
                error={!!errors?.Password}
                helperText={errors?.Password ? errors.Password.message : null}
            />
            </Box>
            <Button type="submit" variant='contained' color='primary' fullWidhth>
                Log in
            </Button>
        </form>
    </Container>
     );   
}