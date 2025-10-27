import React from 'react';
import MainMenu from './templates/menu/MainMenu';
import Login from './templates/menu/Login';
import Background from './templates/menu/Background';

export default function App() {
  const [isAuth, setIsAuth] = React.useState(() => {
    const stored = localStorage.getItem('isAuth');
    return stored === 'true';
  });
  const [username, setUsername] = React.useState(() => localStorage.getItem('username') || '');

  const handleLogin = (username: string) => {
    setIsAuth(true);
    setUsername(username);
    localStorage.setItem('isAuth', 'true');
    localStorage.setItem('username', username);
  };

  React.useEffect(() => {
    localStorage.setItem('isAuth', isAuth ? 'true' : 'false');
    localStorage.setItem('username', username);
  }, [isAuth, username]);

  return (
    <>
      <Background />
      {isAuth ? <MainMenu/> : <Login onLogin={handleLogin} />}
    </>
  );
}
