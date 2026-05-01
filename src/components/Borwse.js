import React from 'react'
import useAuthStore from '../store/useAuthStore'
import Header from './Header';

const Borwse = () => {
  const userDetails = useAuthStore((state) => state.user);
  console.log(userDetails);
  return (
    <div>
      <Header/>
      
      {/* <h1>Browse screen{userDetails?.email} {userDetails?.uuid}</h1> */}
    </div>
  )
}

export default Borwse
