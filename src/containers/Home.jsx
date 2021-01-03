import React, { useState, useEffect } from 'react'

export default function Home() {
  const [userData, setUserData] = useState(null)
  const baseUrl = 'http://localhost:3000/'

  useEffect(() => {
    async function fetchUserData() {
      const data = await fetch(baseUrl + 'user')
      console.log('User data: ', data)
      setUserData(data)
      return userData
    }
    fetchUserData()
  }, [])

  return <div>Home Page</div>
}
