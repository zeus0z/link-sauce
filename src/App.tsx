import { useState } from 'react';
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';
import { auth } from './config/firebase';
import { signOut } from 'firebase/auth';
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

function App() {

  /*
  const [isSignUpModalVisible, setIsSignUpModalVisible] = useState(false)
  const [isLoginModalVisible, setIsLoginModalVisible] = useState(false)

  const openSignUpModal = () => {
    setIsSignUpModalVisible(true);
  };
  const closeSignUpModal = () => {
    setIsSignUpModalVisible(false);
  };
  const openLoginModal = () => {
    setIsLoginModalVisible(true);
  };
  const closeLoginModal = () => {
    setIsLoginModalVisible(false);
  };

  */

  const logUser = () => {
    console.log(auth.currentUser?.uid)
  }

  const logout = async () => {
    await signOut(auth)
  }

  const user = auth.currentUser;



  return (

    <div className='App bg-dark'>

      <button className="btn btn-secondary" onClick={logUser}> USUARIO CONSOLE </button>


      {!user && (

        <>
          <button className="btn btn-primary" onClick={openLoginModal}> Login </button>
          <button className="btn btn-success" onClick={openSignUpModal}> Sign Up</button>
        </>

      )}

     
        <button className="btn btn-secondary" onClick={logout}> LOGOUT </button>
      



      {isLoginModalVisible && (
        <LoginModal closeModalFunction={closeLoginModal} />)}

      {isSignUpModalVisible && (
        <SignUpModal closeModalFunction={closeSignUpModal} />)}





    </div>

  )

}


export default App;
