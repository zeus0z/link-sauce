import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const SignUpModal = () => {

  const [NewUseremail, setNewUserEmail] = useState<string>('');
  const [NewUserPassword, setNewUserPassword] = useState<string>('')

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, NewUseremail, NewUserPassword);
      handleClose();
    } catch (err: any) {
      console.error(err.code)
      console.error(err.message)
    }
  }

  return (


    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          
        <input
        type="text"
        placeholder='EMAIL'
        onChange={(e) => setNewUserEmail(e.target.value)} />
      <input
        type="password"
        placeholder='senha'
        onChange={(e) => setNewUserPassword(e.target.value)} />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Fechar
          </Button>
          <Button variant="primary" onClick={createUser}>
            Cadastrar
          </Button>
        </Modal.Footer>
      </Modal>
    </>

  
  )
}

export default SignUpModal