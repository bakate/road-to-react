import Grid from '@material-ui/core/Grid'
import React from 'react'
import TextDescription from '../components/Text'

const PrivatePage = () => {
  return (
    <Grid
      container
      spacing={2}
      direction="column"
      justify="space-between"
      alignItems="stretch"
    >
      <Grid item>
        <TextDescription infos="That's so great. you've finally reached this page" />
        <Grid item>
          <TextDescription infos="i will work to provide you more insights" />
        </Grid>
      </Grid>
      <Grid item>
        <TextDescription infos="But, for now let me leave you with some dummy text: " />
        <Grid item>
          <TextDescription infos=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sequi ducimus perferendis doloremque tempora rem debitis provident iste nemo est, assumenda fugiat dolorem cupiditate facere veniam possimus laboriosam sit eos! Dolore?" />
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PrivatePage
