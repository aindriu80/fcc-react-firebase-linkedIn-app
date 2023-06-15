import React from 'react'
import { likePost } from '../../../api/FirestoreAPI'
import { AiOutlineLike, AiOutlineSend } from 'react-icons/ai'
import { BiCommentDetail, BiRepost } from 'react-icons/bi'
import './LikeButton.scss'

const LikeButton = ({ userId, postId }) => {
  const handleLike = () => {
    likePost(userId, postId)
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
