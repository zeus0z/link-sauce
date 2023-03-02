import { useState } from 'react';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import { auth } from './config/firebase';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

//Bootstrap Imports
import { Button } from 'react-bootstrap';

function App() {

 

  const logUser = () => {
    console.log(auth.currentUser?.uid)
  }

  const logout = async () => {
    await signOut(auth)
  }

  const user = auth.currentUser;



  return (

    <div className='App'>

    <Button onClick={logUser} variant='secondary'>Console.loguser</Button>
    <Button onClick={logout} variant='secondary'>Log Out</Button>
     
     <LoginModal/>
     <SignUpModal/>

    </div>

  )

}


export default App;
