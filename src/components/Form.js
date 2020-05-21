import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core';
import { AccountCircle, EmailRounded, Visibility, VisibilityOff } from '@material-ui/icons';
import React from 'react';
import { useHistory } from 'react-router-dom';
import useForm from '../lib/useForm';
import { useInfos } from '../state-management/context';

const Form = () => {
  const history = useHistory();
  const { user, userLogin } = useInfos();
  const { inputs, handleChange, resetForm, handleShowPassword } = useForm({
    username: '',
    email: '',
    password: '',
    showPassword: false,
    id: '',
  });

  return (
    <form
      autoComplete="off"
      onSubmit={(e) => {
        e.preventDefault();
        userLogin({ ...inputs, id: Date.now() });
        history.push('/private');
        resetForm();
      }}
    >
      <Grid
        container
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Grid item>
          <FormControl margin="dense" variant="outlined">
            <InputLabel required htmlFor="username">
              Username
            </InputLabel>
            <OutlinedInput
              name="username"
              id="username"
              type="text"
              required
              value={inputs.username}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <AccountCircle />
                </InputAdornment>
              }
              labelWidth={80}
            />
          </FormControl>
        </Grid>
        {!user.id && (
          <Grid item>
            <FormControl margin="dense" variant="outlined">
              <InputLabel required htmlFor="email">
                Email
              </InputLabel>
              <OutlinedInput
                name="email"
                id="email"
                type="email"
                required
                value={inputs.email}
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end">
                    <EmailRounded />
                  </InputAdornment>
                }
                labelWidth={80}
              />
            </FormControl>
          </Grid>
        )}
        <Grid item>
          <FormControl margin="dense" variant="outlined">
            <InputLabel required htmlFor="password">
              Password
            </InputLabel>
            <OutlinedInput
              name="password"
              id="password"
              required
              type={inputs.showPassword ? 'text' : 'password'}
              value={inputs.password}
              onChange={handleChange}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleShowPassword}
                    edge="end"
                  >
                    {inputs.showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              }
              labelWidth={80}
            />
          </FormControl>
        </Grid>
        {inputs.username && inputs.password && (
          <Button color="primary" type="submit" variant="outlined" size="large">
            {user.id ? 'Sign In' : 'Sign Up'}
          </Button>
        )}
      </Grid>
    </form>
  );
};

export default Form;
