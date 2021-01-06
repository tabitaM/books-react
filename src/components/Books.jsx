import React from 'react'
import useFetch from '../serices/useFetch'

export default function Books() {
  const { data: allBooks } = useFetch('books')
  return (
    <div>
      Books
      {allBooks
        ? allBooks.map((book) => (
            <section key={book.id}>{book ? book.title : 'no book'}</section>
          ))
        : ''}
    </div>
  )
}
