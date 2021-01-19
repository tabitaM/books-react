import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Books from '../components/Books'
import Grid from '@material-ui/core/Grid'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Categories />
        </Grid>
        <Grid item xs={9}>
          <Books />
        </Grid>
      </Grid>
    </div>
  )
}
