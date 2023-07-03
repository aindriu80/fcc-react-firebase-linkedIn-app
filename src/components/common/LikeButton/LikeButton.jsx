import React, { useMemo } from 'react'
import {
  likePost,
  getLikesByUser,
  postComment,
  getComments,
} from '../../../api/FirestoreAPI'
import { AiOutlineLike, AiOutlineSend, AiFillLike } from 'react-icons/ai'
import { BiCommentDetail, BiRepost } from 'react-icons/bi'
import './LikeButton.scss'
import { useState } from 'react'
import { getCurrentTimeStamp } from '../../helpers/useMoment'
import { BsPersonCircle } from 'react-icons/bs'

const LikeButton = ({ userId, postId, currentUser }) => {
  const [likesCount, setLikesCount] = useState(0)
  const [liked, setLiked] = useState(false)
  const [commentVisible, setCommentVisible] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [comments, setComments] = useState([])

  const [imageLink, setImageLink] = useState('')

  const handleLike = () => {
    likePost(userId, postId, liked)
  }

  const handleComment = () => {
    setCommentVisible(true)
  }

  const handlePostComment = () => {
    postComment(
      postId,
      commentText,
      getCurrentTimeStamp('LLL'),
      currentUser?.name
    )
    setCommentText('')
  }

  useMemo(() => {
    getLikesByUser(userId, postId, setLiked, setLikesCount)
    getComments(postId, setComments)
  }, [userId, postId])

  return (
    <>
      <p className="social-number-of-likes" key={postId}>
        {likesCount} People like this Post
      </p>
      <hr className="like-container-hr-line" />
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
      {commentVisible && (
        <div className="like-comment-component">
          <input
            type="text"
            placeholder="Add a comment...."
            className="comment-input"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          <button className="submit-comment-button" onClick={handlePostComment}>
            Post
          </button>

          {comments.length > 0 ? (
            comments.map((comment) => {
              return (
                <>
                  <div className="article-comment">
                    <div className="user-reply-comment">
                      {/* <BsPersonCircle size={30} className="user-logo-sidebar" /> */}
                      {imageLink ? (
                        <img
                          src={imageLink}
                          className="user-logo-reply-comments"
                          alt="User profile"
                        />
                      ) : currentUser.imageLink ? (
                        <img
                          src={currentUser.imageLink}
                          className="user-logo-reply-comments"
                          alt="User profile"
                        />
                      ) : (
                        <BsPersonCircle size={152} className="user-logo-post" />
                      )}
                    </div>

                    <div className="all-comments">
                      <p className="comentReplyName">{comment.name}</p>
                      <p className="comment">{comment.commentText}</p>
                      <p className="timestamp">{comment.timeStamp}</p>
                    </div>
                  </div>
                  <p className="interact-comment">
                    <a href="#">Like </a>|<a href=""> Comment</a>
                  </p>
                </>
              )
            })
          ) : (
            <></>
          )}
        </div>
      )}
    </>
  )
}

export default LikeButton
