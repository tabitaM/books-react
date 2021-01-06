import React, { useState } from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import useFetch from '../serices/useFetch'
import { useHistory } from 'react-router-dom'

export default function Navbar() {
  const { data: userData } = useFetch('user')
  const navigate = useHistory()

  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography>BOOKS</Typography>
          <Button onClick={() => navigate.push('/dashboard')} color="inherit">
            {' '}
            All Books{' '}
          </Button>
          <img
            alt=""
            aria-controls="dropdown"
            onClick={handleClick}
            src={userData ? userData.avatar : ''}
          />
          <Menu
            id="dropdown"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={() => navigate.push('/profile')}>
              My account
            </MenuItem>
            <MenuItem onClick={() => navigate.push('/')}>Logout</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  )
}
