import { firestore } from '../../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

let dbRef = collection(firestore, 'posts')
export const PostStatus = (status) => {
  let object = {
    status: status,
  }
  addDoc(dbRef, object)
    .then((res) => {
      console.log('document has been added sucessfully')
    })
    .catch((err) => {
      console.log(err)
    })
}
