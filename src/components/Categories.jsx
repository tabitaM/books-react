import React, { useState } from 'react'
import useFetch from '../serices/useFetch'
import List from '@material-ui/core/List'
import ListItemText from '@material-ui/core/ListItemText'
import EditIcon from '@material-ui/icons/Edit'
import styled from 'styled-components'

export default function Categories({ books, setBooks }) {
  const [editable, setEditable] = useState(false)

  const { data: allCategories } = useFetch('categories')

  const filterByCategory = (category) => {
    const filteredBooks = books.filter(
      (book) => book.categoryId === category.id
    )
    setBooks(filteredBooks)
  }

  return (
    <CategoriesWrapper>
      <CategoriesText>Categories</CategoriesText>
      <AllCategoriesButton
        button={true}
        primary="All"
        onClick={() => setBooks(books)}
      />
      {allCategories
        ? allCategories.map((category) => (
            <List key={category.id}>
              <CategoriesListItem
                onMouseOver={() => setEditable(true)}
                onMouseLeave={() => setEditable(false)}
                button={true}
                onClick={() => filterByCategory(category)}
                primary={
                  <span style={{ display: 'flex' }}>
                    {category.name}{' '}
                    {editable ? (
                      <EditIcon style={{ marginLeft: 'auto' }} />
                    ) : (
                      ''
                    )}
                  </span>
                }
                style={{
                  backgroundColor: `${category.color}`,
                }}
              ></CategoriesListItem>
            </List>
          ))
        : ''}
    </CategoriesWrapper>
  )
}

const CategoriesWrapper = styled.div`
  margin-left: 10px;
`

const CategoriesText = styled.h3`
  margin: 15px 0 0 10px;
  color: #5e4e42;
`

const CategoriesListItem = styled(ListItemText)`
  cursor: pointer;
  padding: 7px;
  margin: -10px 0 0 5px;
  border-radius: 5px;
  color: white;
  width: 80%;
  &:hover {
    text-decoration: underline;
  }
`

const AllCategoriesButton = styled(ListItemText)`
  background-color: #785c44;
  cursor: pointer;
  padding: 7px;
  margin: 20px 0 10px 5px;
  border-radius: 5px;
  color: white;
  width: 80%;
`
