import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../firebaseConfig'

export const LoginAPI = (email, password) => {
  try {
    // signInWithEmailAndPassword(auth, email, password)
    let response = signInWithEmailAndPassword(auth, email, password)
    console.log(response)
    return response
  } catch (error) {
    console.log('Error', error)
    alert(err.errors.message)
    return error
  }
}
export const RegisterAPI = (email, password) => {
  try {
    // createUserWithEmailAndPassword(auth, email, password)
    let response = createUserWithEmailAndPassword(auth, email, password)

    return response
  } catch (error) {
    return error
  }
}
