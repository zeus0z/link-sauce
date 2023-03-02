import { useState } from 'react';
import './App.css';
import LoginScreenModal from './components/NewUserScreenModal';

function App() {

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


  

  return (

    <div className='App'>

      <button className="authButtons" onClick={openLoginModal}> Login </button>
      <button className="authButtons" onClick={openSignUpModal}> Sign Up</button>

      {isLoginModalVisible &&(

        <LoginScreenModal>
      )   }


    </div>


  );
}

export default App;
