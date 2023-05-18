import React, { useState, useMemo } from 'react'
import { firestore } from '../../firebaseConfig'
import { addDoc, collection, onSnapshot } from 'firebase/firestore'
import { toast } from 'react-toastify'

let postsRef = collection(firestore, 'posts')
let userRef = collection(firestore, 'users')

export const postStatus = (object) => {
  addDoc(postsRef, object)
    .then(() => {
      toast.success('Document has been added successfully')
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
      // console.log(
      response.docs
        .map((docs) => {
          return { ...docs.data(), userIDd: docs.id }
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
