import { BrowserRouter, Routes, Route } from 'react-router-dom';
import GlobalStyle from './GlobalStyle';
import SingIn from '../SingIn';
import SingUp from '../SingUp';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SingIn />} />
          <Route path="/SingUp" element={<SingUp />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
