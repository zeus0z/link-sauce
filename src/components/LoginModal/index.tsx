import { auth } from '../../config/firebase';
import {  signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


const LoginModal = () => {

  const [LoginEmail, setLoginEmail] = useState<string>('');
  const [LoginPassword, setLoginPassword] = useState<string>('')

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const loginUser = async (e: any) => {
    await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
    await handleClose();
  }

  return (

    <>
    <Button variant="primary" onClick={handleShow}>
      Login
    </Button>

    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Faça seu Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        
      <input
        type="text"
        placeholder='EMAIL'
        onChange={(e) => setLoginEmail(e.target.value)} />
      <input
        type="password"
        placeholder='senha'
        onChange={(e) => setLoginPassword(e.target.value)} />
      
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={loginUser}>
          Login
        </Button>
      </Modal.Footer>
    </Modal>
  </>
  )
}

export default LoginModal