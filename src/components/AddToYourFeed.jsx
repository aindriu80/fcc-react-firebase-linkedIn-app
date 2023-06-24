import React, { useState, useMemo } from 'react'
import imageInformation from '../assets/imageInfomation.svg'
import followButton from '../assets/followButton.svg'
import arrowRight from '../assets/arrowRight.svg'
import imageModuleOne from '../assets/imgModuleOne.jpeg'
import imageModuleTwo from '../assets/imgModuleTwo.jpeg'
import imageModuleThree from '../assets/imgModuleThree.jpeg'
import '../Sass/AddToYourFeed.scss'

const AddToYourFeed = ({ currentUser }) => {
  return (
    <>
      <div className="layout-aside-main">
        <div className="layout-aside-content">
          <div className="right-aside-header">
            Add to your feed
            <div className="right-side-image">
              <a href="#">
                <img src={imageInformation} width="14px" height="14px" />
              </a>
            </div>
          </div>

          <ul className="feed-follows-module">
            <a href="#">
              <li className="ember1000">
                <img
                  src={imageModuleOne}
                  alt="Image"
                  className="imgEmber1000"
                />
              </li>
            </a>
            <div>
              <p className="feed-follows-module-recommendation">
                <span className="ember1000Text">
                  Code Institute
                  <div className="feed-follows-module-information">
                    Company - Code Institute
                  </div>
                </span>
              </p>
              <button className="follow-feed-button">
                <img src={followButton} className="follow-button-plus" />
                Follow
              </button>
            </div>
          </ul>

          <ul className="feed-follows-module">
            <a href="#">
              <li className="ember1000">
                <img
                  src={imageModuleTwo}
                  alt="Image"
                  className="imgEmber1000"
                />
              </li>
            </a>
            <div>
              <p className="feed-follows-module-recommendation">
                <span className="ember1000Text">
                  World Health Organization
                  <div className="feed-follows-module-information">
                    Organization - Wold Health
                  </div>
                </span>
              </p>
              <button className="follow-feed-button">
                <img src={followButton} className="follow-button-plus" />
                Follow
              </button>
            </div>
          </ul>

          <ul className="feed-follows-module">
            <a href="#">
              <li className="ember1000">
                <img
                  src={imageModuleThree}
                  alt="Image"
                  className="imgEmber1000"
                />
              </li>
            </a>
            <div>
              <p className="feed-follows-module-recommendation">
                <span className="ember1000Text">
                  Ryanair
                  <div className="feed-follows-module-information">
                    Company - Airline
                  </div>
                </span>
              </p>
              <button className="follow-feed-button">
                <img src={followButton} className="follow-button-plus" />
                Follow
              </button>
            </div>
          </ul>

          <div className="more-recommendations">
            View all recommendations
            <img src={arrowRight} className="arrowRight" />{' '}
          </div>
        </div>
      </div>
    </>
  )
}

export default AddToYourFeed
