import React from 'react'
import useFetch from '../serices/useFetch'

export default function UserDetails() {
  const { data: userData } = useFetch('user')
  return (
    <div>
      <img alt="" src={userData ? userData.avatar : ''} />
      <div>
        {userData ? userData.first_name + ' ' + userData.last_name : ''}
      </div>
      <div>{userData ? userData.role : ''}</div>
      <div>City: {userData ? userData.city : ''}</div>
      <div>Books: {userData ? userData.books_number : ''}</div>
      <div>Return date: {userData ? userData.return_date : ''}</div>
    </div>
  )
}
