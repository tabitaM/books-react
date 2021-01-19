import React from 'react'
import useFetch from '../serices/useFetch'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

export default function Categories() {
  const { data: allCategories } = useFetch('categories')
  const { data: allBooks } = useFetch('books')

  const filterByCategory = (category) => {
    console.log('Category in filter method: ', category)
    const filteredBooks = allBooks.filter(
      (book) => book.categoryId === category.id
    )
    console.log('Filtered Books: ', filteredBooks)
  }
  return (
    <div>
      Categories
      <ListItem button>
        <ListItemText primary="All" style={{ backgroundColor: '#785c44' }} />
      </ListItem>{' '}
      {allCategories
        ? allCategories.map((category) => (
            <List>
              <ListItem
                button
                onClick={() => {
                  console.log('Category name: ', category.name)
                  filterByCategory(category)
                }}
              >
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
