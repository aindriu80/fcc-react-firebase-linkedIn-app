import React, { useMemo } from 'react'
import { likePost, getLikesByUser } from '../../../api/FirestoreAPI'
import { AiOutlineLike, AiOutlineSend, AiFillLike } from 'react-icons/ai'
import { BiCommentDetail, BiRepost } from 'react-icons/bi'
import './LikeButton.scss'
import { useState } from 'react'

const LikeButton = ({ userId, postId }) => {
  const [likesCount, setLikesCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const [buttonVisible, setButtonVisible] = useState(false)

  const handleLike = () => {
    likePost(userId, postId, liked)
  }

  const handleComment = () => {
    setOpen(true)
  }

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount)
  }, [userId, postId])

  return (
    <>
      <p className="social-number-of-likes">
        {likesCount} People like this Post
      </p>
      <hr className="hr-line" />
      <div className="like-container-main">
        <div className="social-action" onClick={handleLike}>
          <span className="feed-shared-social-action">
            {liked ? <AiFillLike color="#378FE9" /> : <AiOutlineLike />}
            <span className={liked ? 'blue' : 'black'}>Like</span>
          </span>
        </div>
        <div className="social-action" onClick={handleComment}>
          <span className="feed-shared-social-action">
            <BiCommentDetail />
            Comment
          </span>
        </div>
        <div className="social-action">
          <span className="feed-shared-social-action">
            <BiRepost />
            Repost
          </span>
        </div>
        <div className="social-action">
          <span className="feed-shared-social-action">
            <AiOutlineSend />
            Send
          </span>
        </div>
      </div>
      <div className="like-comment-component">
        <input
          type="text"
          placeholder="Add a comment"
          className="comment-input"></input>
        <button className="submit-comment-button">Post</button>
      </div>
    </>
  )
}

export default LikeButton
