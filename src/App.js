// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer/Footer.jsx';
import Header from './components/layouts/Header/Header.jsx';
import Main from './components/layouts/Main/Main.jsx';
import NotFoundPage from './components/layouts/NotFoundPage/NotFoundPage.jsx';
import Features from './components/layouts/Features/Features.jsx';

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/*" element={<NotFoundPage />} exact />
      </Routes>
      <Features />
      <Footer />
    </>
  );
}

export default App;
