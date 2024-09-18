import GlobalStyle from "./GlobalStyles";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
