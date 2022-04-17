import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import FriendDetail from './components/FriendDetail/FriendDetail';

function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/friend/:friendId" element={<FriendDetail />}/>
        <Route path="/" element={<Home />}/>
        <Route path="*" element={<NoMatch />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
