import { useState, useEffect } from 'react'

export default function useFetch(url) {
  console.log('Using useFetch for:', url)

  const [data, setData] = useState(null)
  const baseUrl = 'http://localhost:3000/'

  useEffect(() => {
    fetch(baseUrl + `${url}`)
      .then((res) => res.json())
      .then((result) => {
        console.log('get user result in useFetch: ', result)
        setData(result)
      })
  }, [url])

  return { data }
}
