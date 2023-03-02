//Components
import SignUpModal from './components/SignUpModal';
import LoginModal from './components/LoginModal';

//FirebaseImports
import { auth } from './config/firebase';
import { signOut, onAuthStateChanged } from 'firebase/auth';


//Bootstrap Imports
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap';

//Hooks
import useScrapMetaData from './hooks/useScrapMetaData';

function App() {

  const URL = 'https://www.wowhead.com/'
  const { data, isLoading, error } = useScrapMetaData(URL)



  const logUser = () => {
    console.log(auth.currentUser?.uid)
  }

  const logout = async () => {
    await signOut(auth)
  }

  const logData = () => console.log(data);

  const user = auth.currentUser;


  return (

    <div className='App'>

      

        <Button onClick={logData} variant='danger'>Data</Button>

      
      <Button onClick={logUser} variant='secondary'>Console.loguser</Button>
      <Button onClick={logout} variant='secondary'>Log Out</Button>
      <LoginModal />
      <SignUpModal />



    </div>

  )

}


export default App;
