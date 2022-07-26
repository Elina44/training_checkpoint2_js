import './App.css';
import GameList from './component/GameList';
import Header from './component/Header';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import GameDetail from './component/GameDetail';

function App() {
  return (
    <Router>
      <div className="App">
        <Header name="react game"/>
        <Routes>
          <Route path="/" element={<GameList/>} />
          <Route path="/games/:id" element={<GameDetail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
