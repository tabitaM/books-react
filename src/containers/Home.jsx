import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import useFetch from '../serices/useFetch'
import styled from 'styled-components'
import booksImage from '../assets/books.png'

export default function Home() {
  const { data: userData } = useFetch('user')
  const navigate = useHistory()

  return (
    <div style={{ display: 'flex' }}>
      <WelcomeMessage>
        hello,{' '}
        <UserName>
          {userData ? userData.first_name + ' ' + userData.last_name : ''}!
        </UserName>
        <Button onClick={() => navigate.push('/dashboard')}>
          {' '}
          check books{' '}
        </Button>
      </WelcomeMessage>
      <Image alt="" src={booksImage} />
    </div>
  )
}

const Image = styled.img`
  width: 35%;
  margin: 200px auto;
`
const WelcomeMessage = styled.h6`
  margin-left: auto;
  font-size: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const UserName = styled.div`
  font-size: 50px;
`
