
import { useMemo, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Link as RouterLink } from "react-router-dom";
import { Grid, Typography, TextField, Button, Link, Alert } from "@mui/material";
import { AuthLayout } from "../layout/AuthLayout";
import { useForm } from "../../hooks";
import { startCreatingUserWithEmailPassword } from "../../store/auth";

const formData = {
  email: '',
  password: '',
  displayName: ''
};

const formValidations = {
  email: [(value) => value.includes('@'), 'Email should have @'],
  password: [(value) => value.length >= 6, 'Password should have more than 6 characters'],
  displayName: [(value) => value.length >= 1, 'Name is required'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setFormSubmitted] = useState(false);

  const {
     displayName , email, password, onInputChange, formState,
     isFormValid, emailValid, passwordValid, displayNameValid
  } = useForm( formData, formValidations );

  const {status, errorMessage} = useSelector( state => state.auth );
  const isCheckingAuthentication = useMemo( () => status === 'checking', [status] );


  const onSubmit = (event) => {
    event.preventDefault();
    setFormSubmitted(true);
    if( !isFormValid ) return;
    dispatch( startCreatingUserWithEmailPassword(formState) );
   
  }
  return (
    <AuthLayout title="Register">

      <h1>FormValid  {isFormValid ? 'Valido' : 'Incorrecto'} </h1>

      <form onSubmit={ onSubmit } >
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Full Name"
              type="text"
              placeholder="Your name"
              fullWidth
              name="displayName"
              value={ displayName }
              onChange={ onInputChange }
              error={ !!displayNameValid && formSubmitted }
              helperText={ displayNameValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email@google.com"
              fullWidth
              name="email"
              value={ email }
              onChange={ onInputChange }
              error={ !!emailValid && formSubmitted }
              helperText={ emailValid }
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="Password"
              fullWidth
              name="password"
              value={ password }
              onChange={ onInputChange }
              error={ !!passwordValid  && formSubmitted }
              helperText={ passwordValid }
            />
          </Grid>

          <Grid container spacing={2} sx={{ mb: 2, mt: 1 }}>
            <Grid item xs={12} display={!!errorMessage ? '' : 'none'}>
              <Alert severity="error"> 
                  { errorMessage }
              </Alert>
            </Grid>

            <Grid item xs={12} >
              <Button disabled={ isCheckingAuthentication } type="submit" variant="contained" fullWidth>
                Sign up
              </Button>
            </Grid>

          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 3}}>Already have an a account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/login">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
