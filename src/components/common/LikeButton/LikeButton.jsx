import React from 'react'
import { AiOutlineLike, AiOutlineSend } from 'react-icons/ai'
import { BiCommentDetail, BiRepost } from 'react-icons/bi'
import './LikeButton.scss'

const LikeButton = () => {
  const handleLike = () => {
    console.log('first')
  }
  return (
    <>
      <div className="like-container">
        <AiOutlineLike onClick={handleLike} />
        <p>Like</p>
        <BiCommentDetail />
        <p>Comment</p>
        <BiRepost />
        <p>Repost</p>
        <AiOutlineSend />
        <p>Send</p>
      </div>
    </>
  )
}

export default LikeButton
