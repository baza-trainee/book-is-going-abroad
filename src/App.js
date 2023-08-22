// eslint-disable-next-line import/no-extraneous-dependencies
import { Routes, Route } from 'react-router-dom';
import Footer from './components/layouts/Footer/Footer.jsx';
import Header from './components/layouts/Header/Header.jsx';
import Main from './components/layouts/Main/Main.jsx';
import Gallery from './components/Gallery/Gallery.jsx';
import NotFoundPage from './components/NotFoundPage/NotFoundPage.jsx';
// eslint-disable-next-line import/no-named-as-default, import/extensions
import Translate from './contexts/translate-context.js';

function App() {
  return (
    <Translate>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/gallery" element={<Gallery />} exact />
        <Route path="/*" element={<NotFoundPage />} exact />
      </Routes>
      <Footer />
    </Translate>
  );
}

export default App;
