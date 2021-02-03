import React, { useState } from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Modal from '@material-ui/core/Modal'
import Backdrop from '@material-ui/core/Backdrop'
import Fade from '@material-ui/core/Fade'
import styled from 'styled-components'

export default function Books({ books, categories }) {
  const [open, setOpen] = useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <BooksWrapper>
      <GridList cols={5} style={{ width: '98%', height: 'auto' }}>
        <GridListTile cols={5} style={{ height: 'auto' }}>
          <BooksText>Books</BooksText>
        </GridListTile>
        {books
          ? books.map((book) => (
              <Card
                key={book.id}
                style={{ width: '24%', height: 400, margin: '5px' }}
              >
                <CardActionArea>
                  <CardMedia
                    style={{ height: 150, margin: 10 }}
                    image={book.thumbnail}
                    title={book.title}
                  />
                  <CardContent>
                    <CardTitle gutterBottom variant="h5" component="h2">
                      {book.title}
                    </CardTitle>
                    <CardDescription
                      variant="body2"
                      color="textSecondary"
                      component="p"
                    >
                      {book.description}
                    </CardDescription>
                  </CardContent>
                </CardActionArea>
                <CardActions
                  style={{
                    margin: '0px',
                    display: 'flex',
                    justifyContent: 'space-between',
                  }}
                >
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      setOpen(true)
                    }}
                  >
                    read more
                  </Button>
                  <CardCategoryName
                    size="small"
                    style={{
                      backgroundColor: `${
                        categories ? categories[book.categoryId].color : ''
                      }`,
                    }}
                  >
                    {categories ? categories[book.categoryId].name : ''}
                  </CardCategoryName>
                </CardActions>
              </Card>
            ))
          : ''}
        );
      </GridList>

      <DescriptionModal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <FadeModal in={open}>
          <div>
            <p id="transition-modal-description">Book Description :)</p>
          </div>
        </FadeModal>
      </DescriptionModal>
    </BooksWrapper>
  )
}

const CardCategoryName = styled.p`
  width: 80px;
  text-align: center;
  color: black;
  border-radius: 5px;
`

const BooksText = styled.h3`
  margin: 15px 0 12px 5px;
  color: #5e4e42;
`

const CardTitle = styled(Typography)`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 15px;
  font-weight: bold;
`

const CardDescription = styled(Typography)`
  display: -webkit-box;
  margin: 0 auto;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  color: #785c44;
  margin-bottom: 8px;
  font-size: 13px;
`

const BooksWrapper = styled.div``

const DescriptionModal = styled(Modal)`
  display: flex;
  align-items: center;
  justify-content: center;
`

const FadeModal = styled(Fade)`
  background-color: white;
  box-shadow: 10;
  padding: 20px;
`
