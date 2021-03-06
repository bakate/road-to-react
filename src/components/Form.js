import { Button, FormControl, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@material-ui/core'
import { AccountCircle, EmailRounded, Visibility, VisibilityOff } from '@material-ui/icons'
import React from 'react'
import { useHistory } from 'react-router-dom'
import useForm from '../lib/useForm'
import { useInfos } from '../state-management/context'

const Form = () => {
  const history = useHistory()
  const { user, userLogin } = useInfos()
  const { inputs, handleChange, resetForm, handleShowPassword } = useForm({
    id: '',
    email: '',
    username: '',
    password: '',
    showPassword: false,
  })

  return (
    <form
      autoComplete="off"
      onSubmit={e => {
        e.preventDefault()
        userLogin({ ...inputs, id: Date.now() })
        resetForm()
        history.push('/private')
      }}
    >
      <Grid
        container
        wrap="nowrap"
        justify="center"
        direction="column"
        alignItems="center"
        alignContent="center"
      >
        <Grid item>
          <FormControl margin="dense" variant="outlined">
            <InputLabel required htmlFor="username">
              Username
            </InputLabel>
            <OutlinedInput
              required
              type="text"
              id="username"
              name="username"
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
                required
                id="email"
                name="email"
                type="email"
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
              required
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleChange}
              type={inputs.showPassword ? 'text' : 'password'}
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
  )
}

export default Form
