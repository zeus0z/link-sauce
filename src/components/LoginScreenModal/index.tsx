import { auth } from '../../config/firebase';
import {  signInWithEmailAndPassword} from 'firebase/auth';
import { useState } from 'react';
import Modal from '../Modal';

type Props = {
  closeModalFunction: ()=>void;
}

const LoginScreenModal = ({closeModalFunction}:Props) => {

  const [LoginEmail, setLoginEmail] = useState<string>('');
  const [LoginPassword, setLoginPassword] = useState<string>('')

  const loginUser = async (e: any) => {
    await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
  }

  return (

    <Modal modalTitle={'Login'} closeModalFunction={closeModalFunction}>
      <input type="text" placeholder='EMAIL'
        onChange={(e) => setLoginEmail(e.target.value)} />

      <input type="password" placeholder='senha'
        onChange={(e) => setLoginPassword(e.target.value)} />

      <button onClick={loginUser}>Logar</button>
    </Modal>
  )
}

export default LoginScreenModal