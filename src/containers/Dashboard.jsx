import React, { useState, useEffect } from 'react'
import useFetch from '../serices/useFetch'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Books from '../components/Books'
import Grid from '@material-ui/core/Grid'

export default function Dashboard() {
  const { data: allBooks } = useFetch('books')
  const { data: categories } = useFetch('categories')
  const [books, setBooks] = useState(allBooks)

  useEffect(() => {
    console.log('allBooks:', allBooks)
    setBooks(allBooks)
  }, [allBooks])

  return (
    <div>
      <Navbar />
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <Categories books={allBooks} setBooks={setBooks} />
        </Grid>
        <Grid item xs={9}>
          <Books books={books} categories={categories} />
        </Grid>
      </Grid>
    </div>
  )
}
