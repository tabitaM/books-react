import React from 'react'
import useFetch from '../serices/useFetch'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import InfoIcon from '@material-ui/icons/Info'
import styled from 'styled-components'

export default function Books() {
  const { data: allBooks } = useFetch('books')
  return (
    <div>
      <GridList cols={5} style={{ width: 'full', height: 'auto' }}>
        <GridListTile cols={5} style={{ height: 'auto' }}>
          <ListSubheader>Books</ListSubheader>
        </GridListTile>
        {allBooks
          ? allBooks.map((book) => (
              <GridListTile
                key={book.id}
                style={{ backgroundColor: 'green', margin: '10px' }}
              >
                <img src={book.thumbnail} alt="" />
                <GridListTileBar
                  title={book.title}
                  subtitle={<span>{book.description}</span>}
                  actionIcon={
                    <IconButton
                      onClick={() =>
                        console.log('Full description: ', book.description)
                      }
                    >
                      <InfoIcon />
                    </IconButton>
                  }
                />
              </GridListTile>
            ))
          : ''}
      </GridList>
    </div>
  )
}
