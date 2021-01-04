import React, { useState, useEffect } from 'react'

export default function Home() {
  const [userData, setUserData] = useState(null)
  const baseUrl = 'http://localhost:3000/'

  useEffect(() => {
    fetch(baseUrl + 'user')
      .then((res) => res.json())
      .then((result) => {
        console.log('get user result: ', result)
        setUserData(result)
      })
  }, [])

  return (
    <div>
      Hello, {userData ? userData.first_name + ' ' + userData.last_name : ''}!
    </div>
  )
}
