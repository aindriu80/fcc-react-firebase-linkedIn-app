import React from 'react'
import NetworkComponent from '../components/NetworkComponent'
import TopNavigation from '../components/common/TopNavigation/TopNavigation'
import '../Sass/NetworkComponent.scss'

const MyNetwork = () => {
  return (
    <>
      <TopNavigation activeLink="network" />
      <NetworkComponent />
    </>
  )
}

export default MyNetwork
