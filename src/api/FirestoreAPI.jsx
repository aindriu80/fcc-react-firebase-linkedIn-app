import React, { useState, useMemo } from 'react'
import { firestore } from '../../firebaseConfig'
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  setDoc,
  updateDoc,
  query,
  where,
  deleteDoc,
} from 'firebase/firestore'
import { toast } from 'react-toastify'

let postsRef = collection(firestore, 'posts')
let userRef = collection(firestore, 'users')
let likeRef = collection(firestore, 'likes')
let commentsRef = collection(firestore, 'comments')
let connectionsRef = collection(firestore, 'connections')

export const postStatus = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success('Post has been added successfully')
    })
    .catch((err) => {
      console.log(err)
    })
}
export const getStatus = (setAllStatuses) => {
  onSnapshot(postsRef, (response) => {
    setAllStatuses(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id }
      })
    )
  })
}

export const getAllUsers = (setAllUsers) => {
  onSnapshot(userRef, (response) => {
    setAllUsers(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id }
      })
    )
  })
}

export const getSingleStatus = (setAllStatuses, id) => {
  const singlePostQuery = query(postsRef, where('userID', '=='), id)
  onSnapshot(singlePostQuery, (response) => {
    setAllStatuses(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id }
      })
    )
  })
}

export const getSingleUser = (setCurrentUser, email) => {
  const singleUserQuery = query(userRef, where('email', '==', email))
  onSnapshot(singleUserQuery, (response) => {
    setCurrentUser(
      response.docs.map((docs) => {
        return { ...docs.data(), id: docs.id }
      })[0]
    )
  })
}

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((err) => {
      console.log(err)
    })
}

export const getCurrentUser = (setCurrentUser) => {
  let currentEmail = localStorage.getItem('userEmail')
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((docs) => {
          return { ...docs.data(), id: docs.id }
        })
        .filter((item) => {
          return item.email === localStorage.getItem('userEmail')
        })[0]
    )
  })
}

export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID)

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success('Profile has been updated successfully')
    })
    .catch((err) => {
      console.log(err)
    })
}

export const likePost = (userId, postId, liked) => {
  try {
    let docToLike = doc(likeRef, `${userId}_${postId}`)
    if (liked) {
      deleteDoc(docToLike)
    } else {
      setDoc(docToLike, { userId, postId })
    }
  } catch (error) {
    console.log(error)
  }
}

export const getLikesByUser = (userId, postId, setLiked, setLikesCount) => {
  try {
    let likeQuery = query(likeRef, where('postId', '==', postId))

    onSnapshot(likeQuery, (response) => {
      let likes = response.docs.map((doc) => doc.data())
      let likesCount = likes?.length

      const isLiked = likes.some((like) => like.userId == userId)

      setLikesCount(likesCount)
      setLiked(isLiked)
    })
  } catch (error) {
    console.log(error)
  }
}

export const postComment = (postId, commentText, timeStamp, name) => {
  try {
    addDoc(commentsRef, {
      postId,
      commentText,
      timeStamp,
      name,
    })
  } catch (error) {
    console.log(error)
  }
}

export const getComments = (postId, setComments) => {
  try {
    let singlePostQuery = query(commentsRef, where('postId', '==', postId))

    onSnapshot(singlePostQuery, (response) => {
      const comments = response.docs.map((doc) => {
        return {
          id: doc.id,

          ...doc.data(),
        }
      })
      setComments(comments)
    })
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, status, postImage) => {
  let updateToUpdate = doc(postsRef, id)
  try {
    updateDoc(updateToUpdate, { status, postImage })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => {
  let docToDelete = doc(postsRef, id)
  try {
    deleteDoc(docToDelete)
  } catch (error) {
    console.log(error)
  }
}

export const addConnection = (userId, targetId) => {
  try {
    let connectionToAdd = doc(connectionsRef, `${userId}_${targetId}`)
    setDoc(connectionToAdd, { userId, targetId })
    console.log('Connection has been added!!')
  } catch (error) {
    console.log(error)
  }
}

export const getConnections = (userId, targetId, setIsConnected) => {
  try {
    let connectionsQuery = query(
      connectionsRef,
      where('targetId', '==', targetId)
    )

    onSnapshot(connectionsQuery, (response) => {
      let connections = response.docs.map((doc) => doc.data())

      const isConnected = connections.some(
        (connection) => connection.userId === userId
      )

      setIsConnected(isConnected)
    })
  } catch (err) {
    console.log(err)
  }
}
export const getUserById = async (userId) => {
  try {
    const userDoc = await doc(userRef, userId).get()
    if (userDoc.exists) {
      return { ...userDoc.data(), id: userDoc.id }
    } else {
      return null
    }
  } catch (error) {
    console.log(error)
    return null
  }
}
