import React from 'react';
import MainMenu from './templates/menu/MainMenu';
import Login from './templates/menu/Login';
import Background from './templates/menu/Background';

export default function App() {
  const [isAuth, setIsAuth] = React.useState(false);
  const [username, setUsername] = React.useState('');

  const handleLogin = (username: string) => {
    setIsAuth(true);
    setUsername(username);
  };

  return (
    <>
      <Background />
      {isAuth ? <MainMenu username={username} /> : <Login onLogin={handleLogin} />}
    </>
  );
}
