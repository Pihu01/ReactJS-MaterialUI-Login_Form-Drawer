import React from 'react';
import './styles/Login.css';
import { Box, Button, TextField } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import LockIcon from '@material-ui/icons/Lock';
import Grid from '@material-ui/core/Grid';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Link from '@material-ui/core/Link';
import Logo from './images/logo.png';
import clsx from 'clsx';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


const Login = () => {

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <Box container boxShadow={3} margin="10% auto" alignItems="center" width={500} height={360} >
        <img src={Logo} alt="logo" className="logo" /><br />
        <form Validate autoComplete="off">

          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <EmailIcon className="mrl" />
            </Grid>
            <Grid item>
              <TextField name='email' required id="input-with-icon-grid" label="Email" color="secondary" className="email" />
            </Grid>
          </Grid>

          <Grid container spacing={1} alignItems="flex-end">
            <Grid item>
              <LockIcon className="mrl" />
            </Grid>
            <Grid item>
              <FormControl className={clsx()}>

                <InputLabel htmlFor="standard-adornment-password" style={{marginLeft:'15%'}}>Password*</InputLabel>
                <Input
                  label="Password"
                  color="secondary" className="password"
                  id="standard-adornment-password"
                  type={values.showPassword ? 'text' : 'password'}
                  value={values.password}
                  onChange={handleChange('password')}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                      >
                        {values.showPassword ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
            </Grid>
          </Grid>

          <Grid container spacing={3}>
            <Grid item xs={6} className="gd">
              <FormControlLabel control={<Checkbox icon={<CheckBoxOutlineBlankIcon fontSize="small" />} checkedIcon={<CheckBoxIcon fontSize="small" />} name="checkedI" />} label="Secure Login" />
            </Grid>
            <Grid item xs={6} >
              <Link href="#" color="secondary" className="gd1">
                {'Forget Password'}
              </Link>
            </Grid>
          </Grid>
          <Button onClick={event => window.location.href = '/drawer'} variant="contained" color="secondary" className="btn" size="large">Login</Button>
        </form>
        <p style={{ color: '#6b6a6a', textAlign: 'center' }}>Copyright © Pihu01 2020 All Right Reserved</p>
      </Box>
      <br />
    </>
  );
}

export default Login;