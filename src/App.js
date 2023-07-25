// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Header from './components/layouts/Header/Header.jsx';
import Main from './components/layouts/Main/Main.jsx';
import NotFoundPage from './components/layouts/NotFoundPage/NotFoundPage.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/*" element={<NotFoundPage />} exact />
      </Routes>
      <footer style={{ height: '200px', flexShrink: '0' }}></footer>
    </>
  );
}

export default App;
