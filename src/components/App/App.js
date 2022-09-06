import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import SingIn from '../SingIn';
import SingUp from '../SingUp';
import Home from '../Home';
import NewEntry from '../NewEntry';
import NewOutPut from '../NewOutPut';

export default function App() {
  return (
    <>
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
    </>
  );
}
