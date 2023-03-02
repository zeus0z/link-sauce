import { auth } from '../../config/firebase';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useState } from 'react';

type Props = {}

const LoginScreenModal = (props: Props) => {

  const [LoginEmail, setLoginEmail] = useState<string>('');
  const [LoginPassword, setLoginPassword] = useState<string>('')

  const loginUser = async (e: any) => {
    await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)


  }


  return (
    <Modal>
      <input type="text" placeholder='EMAIL'
        onChange={(e) => setLoginEmail(e.target.value)} />

      <input type="password" placeholder='senha'
        onChange={(e) => setLoginPassword(e.target.value)} />

      <button onClick={loginUser}>Logar</button>
    </Modal>
  )
}

export default LoginScreenModal