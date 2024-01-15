import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { Header } from '../../../../payload/payload-types'
import { Gutter } from '../../Gutter'
import { HeaderNav } from '../Nav'

import classes from './index.module.scss'

const HeaderComponent = ({ header }: { header: Header }) => {
  return (
    <nav className={[classes.header]}>
      <Gutter className={classes.wrap}>
        <Link href="/">
          <Image
            src="/static-img.jpg"
            alt="logo"
            height={170}
            width={50}
            className={classes.logo}
          />
        </Link>

        <HeaderNav header={header} />
        <HeaderMobileNav header={header}/>
      </Gutter>
    </nav>
  )
}

export default HeaderComponent
