import React, { useMemo } from 'react'
import { likePost, getLikesByUser } from '../../../api/FirestoreAPI'
import { AiOutlineLike, AiOutlineSend } from 'react-icons/ai'
import { BiCommentDetail, BiRepost } from 'react-icons/bi'
import './LikeButton.scss'
import { useState } from 'react'

const LikeButton = ({ userId, postId }) => {
  const [likesCount, setLikesCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const handleLike = () => {
    likePost(userId, postId)
  }
  console.log('likesCount ', likesCount)

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount)
  }, [userId, postId])

  return (
    <>
      <div className="like-container">
        <AiOutlineLike onClick={handleLike} />
        <p>Like ({likesCount})</p>
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
