import React from 'react'
import useFetch from '../serices/useFetch'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function Categories({ books, setBooks }) {
  const { data: allCategories } = useFetch('categories')
  // const { data: allBooks } = useFetch('books')

  const filterByCategory = (category) => {
    const filteredBooks = books.filter(
      (book) => book.categoryId === category.id
    )
    setBooks(filteredBooks)
  }

  return (
    <div>
      Categories
      <ListItem button>
        <ListItemText
          primary="All"
          style={{ backgroundColor: '#785c44' }}
          onClick={() => setBooks(books)}
        />
      </ListItem>{' '}
      {allCategories
        ? allCategories.map((category) => (
            <List key={category.id}>
              <ListItem button onClick={() => filterByCategory(category)}>
                <ListItemText
                  primary={category.name}
                  style={{
                    backgroundColor: `${category.color}`,
                    cursor: 'pointer',
                  }}
                />
              </ListItem>
            </List>
          ))
        : ''}
    </div>
  )
}
