'use client'

import React from 'react'
import Link from 'next/link'

import { Category } from '../../../payload/payload-types'
import CategoryCard from './CategoryCard'

import classes from './index.module.scss'

const Categories = ({ categories }: { categories: Category[] }) => {
  const storeCats = [
    '65b66fc3c6d625e44dd72650',
    '65b6d28f6f92b293bd6f5de7',
    '65b6d2a06f92b293bd6f5e07',
  ]
  return (
    <section className={classes.container}>
      <div className={classes.titleWrapper}>
        <h3>Shop by Categories</h3>
        <Link href="/products">Show All</Link>
      </div>

      <div className={classes.list}>
        {categories
          .filter(category => storeCats.includes(category.id))
          .map(category => {
            return <CategoryCard key={category.id} category={category} />
          })}
      </div>
    </section>
  )
}

export default Categories
