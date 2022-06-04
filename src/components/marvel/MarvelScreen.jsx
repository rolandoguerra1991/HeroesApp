import React, { Fragment } from 'react'
import HeroList from '../hero/HeroList'

const MarvelScreen = () => {
  return (
    <Fragment>
      <h1>Marvel Screen</h1>
      <hr />
      <HeroList publisher={'Marvel Comics'}/>
    </Fragment>
  )
}

export default MarvelScreen