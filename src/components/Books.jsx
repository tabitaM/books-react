import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import ListSubheader from '@material-ui/core/ListSubheader'
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

export default function Books({
  books,
  categories,
  setBookCategoryColor,
  bookCategoryColor,
}) {
  const [open, setOpen] = React.useState(false)

  const handleClose = () => {
    setOpen(false)
  }

  console.log('Categories in Books: ', categories)
  const getBookCategoryColor = (book) => {
    const category = categories
      ? categories.find((category) => book.categoryId === category.id)
      : ''
    setBookCategoryColor(category.color)
  }
  return (
    <div>
      <GridList cols={4} style={{ width: '98%', height: 'auto' }}>
        <GridListTile cols={5} style={{ height: 'auto' }}>
          <ListSubheader>Books</ListSubheader>
        </GridListTile>
        {books
          ? books.map((book) => (
              <Card style={{ maxWidth: 300, height: 400 }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 150, margin: 10 }}
                    image={book.thumbnail}
                    title={book.title}
                  />
                  <CardContent>
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="h2"
                      style={{ fontSize: 15, fontWeight: 'bold' }}
                    >
                      {book.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      component="p"
                      style={{
                        fontSize: 13,
                        overflow: 'hidden',
                        lineHeight: '1.2em',
                        height: '3.6em',
                        // textOverflow: 'ellipsis',
                        // whiteSpace: 'nowrap',
                      }}
                    >
                      {book.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    size="small"
                    color="primary"
                    onClick={() => {
                      setOpen(true)
                    }}
                  >
                    Learn more
                  </Button>
                  <Button
                    size="small"
                    onClick={() => getBookCategoryColor(book)}
                    color={bookCategoryColor}
                  >
                    categoryName
                  </Button>
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
            <p id="transition-modal-description">
              react-transition-group animates me.
            </p>
          </div>
        </FadeModal>
      </DescriptionModal>
    </div>
  )
}

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
