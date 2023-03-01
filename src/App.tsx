import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (

    <div className='App'>
      <h1>    Link Sauce</h1>

      <h2>Cadastro</h2>
      <form >
        <input type="text" placeholder='EMAIL' />
        <input type="password" placeholder='senha' />
        <input type="submit" />
      </form>

      <h2>Login</h2>
      <form >
        <input type="text" placeholder='EMAIL' />
        <input type="password" placeholder='senha' />
        <input type="submit" />
      </form>
    </div>


  );
}

export default App;
