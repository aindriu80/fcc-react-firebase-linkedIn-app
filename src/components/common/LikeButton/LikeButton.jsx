import React, { useMemo } from 'react'
import { likePost, getLikesByUser } from '../../../api/FirestoreAPI'
import { AiOutlineLike, AiOutlineSend, AiFillLike } from 'react-icons/ai'
import { BiCommentDetail, BiRepost } from 'react-icons/bi'
import './LikeButton.scss'
import { useState } from 'react'

const LikeButton = ({ userId, postId }) => {
  const [likesCount, setLikesCount] = useState(0)
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    likePost(userId, postId, liked)
  }

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount)
  }, [userId, postId])

  return (
    <>
      <p className="social-number-of-likes">
        {likesCount} People like this Post
      </p>
      <div className="like-container" onClick={handleLike}>
        <span className="feed-shared-social-action">
          {liked ? <AiFillLike /> : <AiOutlineLike />}
          <span className={liked ? 'blue' : 'black'}>Like</span>
        </span>
        <span className="feed-shared-social-action">
          <BiCommentDetail />
          Comment
        </span>
        <span className="feed-shared-social-action">
          <BiRepost />
          Repost
        </span>
        <span className="feed-shared-social-action">
          <AiOutlineSend />
          Send
        </span>
      </div>
    </>
  )
}

export default LikeButton
