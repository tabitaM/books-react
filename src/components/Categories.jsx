import React from 'react'
import useFetch from '../serices/useFetch'

export default function Categories() {
  const { data: allCategories } = useFetch('categories')
  return (
    <div>
      Categories
      {allCategories
        ? allCategories.map((category) => (
            <section key={category.id}>
              {category ? category.name : 'no category'}
            </section>
          ))
        : ''}
    </div>
  )
}
