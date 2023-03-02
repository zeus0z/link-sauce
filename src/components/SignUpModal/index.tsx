import { auth } from '../../config/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import Modal from '../Modal';

type Props = {
  closeModalFunction: () => void;
}

const SignUpModal = ({ closeModalFunction }: Props) => {

  const [NewUseremail, setNewUserEmail] = useState<string>('');
  const [NewUserPassword, setNewUserPassword] = useState<string>('')


  const createUser = async () => {
    try {
      await createUserWithEmailAndPassword(auth, NewUseremail, NewUserPassword);
    } catch (err: any) {
      console.error(err.code)
      console.error(err.message)
    }
  }

  return (

    <Modal modalTitle={'SignUp'} closeModalFunction={closeModalFunction}>
      <input
        type="text"
        placeholder='EMAIL'
        onChange={(e) => setNewUserEmail(e.target.value)} />
      <input
        type="password"
        placeholder='senha'
        onChange={(e) => setNewUserPassword(e.target.value)} />
      <button onClick={createUser}>Cadastrar </button>
    </Modal>
  )
}

export default SignUpModal