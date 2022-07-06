import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from 'react';
import axios from 'axios';
import './FormLogin.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";


const schema = yup.object({
    username: yup.string().email().required(),
    password: yup.string().required(),
  });


export default function FormTest() {

  const{register, handleSubmit, formState:{errors}, formState} = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema)
  })

  const{isSubmitSuccessful} = formState

  const onSubmit = data => console.log(data)

  console.log('hello')
  return (
    <Box
      component="form"
      onSubmit = {handleSubmit(onSubmit)}
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      {isSubmitSuccessful && <div className="alert alert-success"> Merci pour votre inscription </div>}
      <TextField 
      id="outlined-basic" 
      type="email" 
      required 
      label="Email" 
      variant="outlined"  
      {...register('username')}
      />

      <span>{errors.username?.message}</span>

      <TextField 
      id="outlined-basic" 
      type="password" 
      required 
      label="Mot de Passe" 
      variant="outlined"  
      {...register('password')}
      />

      <span>{errors.password?.message}</span>

      { <button /*disabled={isSubmitting}*/ className="Form__Button" type="submit" >Connexion</button> }

    </Box>
  );
}