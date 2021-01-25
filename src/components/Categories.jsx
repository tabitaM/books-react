import React from 'react'
import useFetch from '../serices/useFetch'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import styled from 'styled-components'
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    position: "sticky",
    top: "1rem",
    minWidth: "275"
  }
});

export default function Categories({ books, setBooks }) {
  const { data: allCategories } = useFetch('categories')
  const classes = useStyles()

  const filterByCategory = (category) => {
    const filteredBooks = books.filter(
      (book) => book.categoryId === category.id
    )
    setBooks(filteredBooks)
  }

  return (
    <div>
      <div style={{marginTop: '15px'}}>Categories</div> 
      {/* <ListItem button={true}> */}
        <AllCategories button={true}
          primary="All"
          onClick={() => setBooks(books)}
        />
      {/* </ListItem>{' '} */}
      {allCategories
        ? allCategories.map((category) => (
            <List key={category.id}>
              {/* <ListItem button={true} disableGutters={true} style={{ borderRadius: 3, height: 40, marginLeft: '5px'}} onClick={() => filterByCategory(category)}> */}
                <CategoriesListItem className={classes.root}
                button={true} onClick={() => filterByCategory(category)}
                  primary={category.name}
                  style={{
                    backgroundColor: `${category.color}`
                  }}
                />
              {/* </ListItem> */}
            </List>
          ))
        : ''}
    </div>
  )
}

const CategoriesListItem = styled(ListItemText)`
cursor: pointer;
padding: 7px;
margin: -10px 0 0 5px;
border-radius: 5px;
width: 80%;
`

const AllCategories = styled(ListItemText)`
background-color: #785c44;
cursor: pointer;
padding: 7px;
margin: 20px 0 10px 5px;
border-radius: 5px;
width: 80%;
`
