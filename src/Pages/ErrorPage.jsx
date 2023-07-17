import React from 'react'
import TopNavigation from '../components/common/TopNavigation/TopNavigation'
import Footer from '../components/FooterComponent'
import '../Sass/ErrorPage.scss'

const ErrorPage = () => {
  return (
    <>
      <TopNavigation activeLink="home" />
      <div className="error-page-main-content">
        <div className="error-page-header">Page not found</div>
        <div className="error-page-message">
          Uh oh, we can't seem to find the page you're looking for. Try going
          back to the previous page or see our Help Center for more information
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ErrorPage
