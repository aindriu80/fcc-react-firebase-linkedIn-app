import React, { useState, useMemo } from 'react'
import { firestore } from '../../firebaseConfig'
import {
  addDoc,
  collection,
  onSnapshot,
  doc,
  updateDoc,
  query,
  where,
} from 'firebase/firestore'
import { toast } from 'react-toastify'

let postsRef = collection(firestore, 'posts')
let userRef = collection(firestore, 'users')

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
          return { ...docs.data(), userID: docs.id }
        })
        .filter((item) => {
          return item.email === localStorage.getItem('userEmail')
        })[0]
    )
  })
}

export const editProfile = (userID, payload) => {
  let userToEdit = doc(userRef, userID)
  console.log('payload', payload)

  updateDoc(userToEdit, payload)
    .then(() => {
      toast.success('Profile has been updated successfully')
      console.log('Profile has been updated successfully')
    })
    .catch((err) => {
      console.log(err)
      console.log('there seems to be an error')
    })
}
