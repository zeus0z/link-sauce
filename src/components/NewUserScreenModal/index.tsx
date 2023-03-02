import { auth } from '../../config/firebase';
import {
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword
} from 'firebase/auth';
import { useState } from 'react';

type Props = {}

const LoginScreenModal = (props: Props) => {

    const [NewUseremail, setNewUserEmail] = useState<string>('');
    const [LoginEmail, setLoginEmail] = useState<string>('');
    const [NewUserPassword, setNewUserPassword] = useState<string>('')
    const [LoginPassword, setLoginPassword] = useState<string>('')
  
  
    const createUser = async () => {
  
      try {
        await createUserWithEmailAndPassword(auth, NewUseremail, NewUserPassword);
      } catch (err: any) {
        console.error(err.code)
        console.error(err.message)
      }
    }
  
    const loginUser = async (e:any) => {
     await signInWithEmailAndPassword(auth, LoginEmail, LoginPassword)
     e.target.value=
     
    }
  
    function logFunction() {
      console.log(`
      user email: ${auth.currentUser?.email}
      user id: ${auth.currentUser?.uid}
      `)
    }
    const logout = async () => {
      await signOut(auth)
    }
  



    return (
        <>

            <h1>    Link Sauce</h1>

            <button onClick={logFunction}>LOG</button>

            <div className="CreateUserScreen"
                style={
                    {
                        display: auth.currentUser?.uid != undefined ? 'none' : 'block'
                    }
                }
            >

                <h2>Cadastro</h2>
                <input
                    type="text"
                    placeholder='EMAIL'
                    onChange={(e) => setNewUserEmail(e.target.value)} />
                <input
                    type="password"
                    placeholder='senha'
                    onChange={(e) => setNewUserPassword(e.target.value)} />
                <button onClick={createUser}>Cadastrar </button>
            </div>

            <button onClick={logout}>LOGOUT </button>


            <div className="LoginScreen">

                <h2>Login</h2>

                <input type="text" placeholder='EMAIL'
                    onChange={(e) => setLoginEmail(e.target.value)} />

                <input type="password" placeholder='senha'
                    onChange={(e) => setLoginPassword(e.target.value)} />

                <button onClick={loginUser}>Logar</button>
            </div></>
    )
}

export default LoginScreenModal