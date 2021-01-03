import React from 'react'
import Navbar from '../components/Navbar'
import Categories from '../components/Categories'
import Books from '../components/Books'

export default function Dashboard() {
  return (
    <div>
      <Navbar />
      <Categories />
      <Books />
    </div>
  )
}
