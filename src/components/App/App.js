import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserContext from '../contexts/UserCOntext';
import GlobalStyle from './GlobalStyle';
import SingIn from '../SingIn';
import SingUp from '../SingUp';
import Home from '../Home';
import NewEntry from '../NewEntry';
import NewOutPut from '../NewOutPut';
import { useState } from 'react';

export default function App() {

  const [user_Token, setUser_Token] = useState('');
  const [server_Data, setServer_Data] = useState([]);

  return (
    <UserContext.Provider value={{user_Token,setUser_Token, server_Data, setServer_Data}}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/SingUp" element={<SingUp />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/NewEntry" element={<NewEntry/>} />
          <Route path="/NewOutPut" element={<NewOutPut/>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
