import React from 'react'
import Button from '@material-ui/core/Button'
import { useHistory } from 'react-router-dom'
import useFetch from '../serices/useFetch'

export default function Home() {
  const { data: userData } = useFetch('user')
  const navigate = useHistory()

  return (
    <div>
      Hello, {userData ? userData.first_name + ' ' + userData.last_name : ''}!
      <Button onClick={() => navigate.push('/dashboard')}> check books </Button>
    </div>
  )
}
