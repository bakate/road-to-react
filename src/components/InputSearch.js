import { Divider, IconButton, InputBase, Paper } from '@material-ui/core'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import React from 'react'
import useForm from '../lib/useForm'
import { useInfos } from '../state-management/context'

const useStyles = makeStyles(theme => ({
  search: {
    padding: '2px 4px',
    alignItems: 'center',
    borderRadius: theme.shape.borderRadius,
    width: '100%',
    display: 'flex',
    position: 'relative',
    marginRight: theme.spacing(2),
    backgroundColor: fade(theme.palette.background.paper, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.background.paper, 0.35),
    },
    [theme.breakpoints.up('sm')]: {
      width: 'auto',
      marginRight: theme.spacing(3),
    },
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    width: '100%',
    padding: theme.spacing(1, 1, 1, 0),
    transition: theme.transitions.create('width'),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  iconButton: {
    padding: theme.spacing(0, 2),
    cursor: 'pointer',
    height: '100%',
    margin: 'auto',
  },
  divider: {
    height: 28,
    margin: 4,
  },
}))

const InputSearch = () => {
  const classes = useStyles()

  const { setSearch } = useInfos()

  const { inputs, handleChange, resetForm } = useForm({ query: '' })
  console.log(inputs.query, 'from Seach')

  const handleSubmit = () => {
    setSearch(inputs.query)
    resetForm({ query: '' })
  }
  return (
    <Paper className={classes.search}>
      <InputBase
        type="text"
        name="query"
        value={inputs.query}
        placeholder="Search..."
        inputProps={{ 'aria-label': 'search' }}
        onChange={handleChange}
        classes={{
          root: classes.inputRoot,
          input: classes.inputInput,
        }}
      />
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton
        type="submit"
        onClick={handleSubmit}
        className={classes.iconButton}
        aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default InputSearch
