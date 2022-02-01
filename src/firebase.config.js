import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCKY3jw0Q9Cmx1NzjCaU2NGoe59gZpVH5Y',
  authDomain: 'house-marketplace-app-a5911.firebaseapp.com',
  projectId: 'house-marketplace-app-a5911',
  storageBucket: 'house-marketplace-app-a5911.appspot.com',
  messagingSenderId: '171676514167',
  appId: '1:171676514167:web:eac71c41be0d501af65372',
}

// Initialize Firebase
// const app = initializeApp(firebaseConfig)

initializeApp(firebaseConfig)
export const db = getFirestore()
