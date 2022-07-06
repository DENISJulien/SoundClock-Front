import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import './FormLogin.scss';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import './FormLogin.scss';


const schema = yup.object().shape({
    username: 
      yup
      .string()
      .email("Email valide demandé")
      .required("Email obligatoire"),
    password: 
      yup
      .string()
      .required(),
  });


export default function FormTest() {

  const{register, handleSubmit, formState:{errors}, formState} = useForm({
      mode: "onTouched",
      resolver: yupResolver(schema)
  })

  const{isSubmitSuccessful} = formState

  const onSubmit = data => {

    axios.post('http://localhost:8080/api/login_check',data )
    .then((response) => localStorage.setItem("userToken", response.data.token)) 
    .catch((error) => console.log("reponse NOK", error))}

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
      className = "Form__Login__Box"
    >
      {isSubmitSuccessful && <div className="alert alert-success"> Vous etes connecté</div>}
      <TextField 
      id="outlined-basic" 
      className = "Form__Login__Box__Textfield"
      type="email" 
      required 
      label="Email" 
      variant="outlined"  
      {...register('username')}
      />

      <span>{errors.username?.message}</span>

      <TextField 
      id="outlined-basic" 
      className = "Form__Login__Box__Textfield"
      type="password" 
      required 
      label="Mot de Passe" 
      variant="outlined"  
      {...register('password')}
      />

      <span>{errors.password?.message}</span>

      { <button className="Form__Button" type="submit" >Connexion</button> }

    </Box>
  );
}