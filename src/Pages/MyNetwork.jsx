import React from 'react'
import NetworkComponent from '../components/NetworkComponent'
import TopNavigation from '../components/common/TopNavigation/TopNavigation'

const myNetwork = () => {
  return (
    <>
      <TopNavigation activeLink="network" />
      <NetworkComponent />
    </>
  )
}

export default myNetwork
