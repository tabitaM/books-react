import React from 'react'
import useFetch from '../serices/useFetch'
import styled from 'styled-components'

export default function UserDetails() {
  const { data: userData } = useFetch('user')
  return (
    <div>
      <BasicUserDetails>
        <Avatar alt="" src={userData ? userData.avatar : ''} />
        <UserName>
          {userData ? userData.first_name + ' ' + userData.last_name : ''}
        </UserName>
        <UserRole>{userData ? userData.role : ''}</UserRole>
      </BasicUserDetails>
      <hr style={{ border: '1px solid #8e7b6b', width: '95%' }}></hr>
      <MoreUserDetails>
        <div>City: {userData ? userData.city : ''}</div>
        <div>Books: {userData ? userData.books_number : ''}</div>
        <div>Return date: {userData ? userData.return_date : ''}</div>
      </MoreUserDetails>
    </div>
  )
}

const Avatar = styled.img`
  border-radius: 50%;
  width: 250;
  margin-bottom: 15px;
`
const BasicUserDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 45px 0;
`
const UserName = styled.div`
  font-size: 35px;
  font-weight: bold;
`

const UserRole = styled.div`
  font-size: 20px;
`
const MoreUserDetails = styled.div`
  font-size: 18px;
  margin: 20px 0 0 35px;
  line-height: 2.2;
`
