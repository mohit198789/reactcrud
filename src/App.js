import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navbar';
import Bhavanacorp from './components/Bhavanacorp';
import Allusers from './components/Allusers';
import Addusers from './components/Addusers';


import {BrowserRouter,Routes, Route} from 'react-router-dom';
import EditUser from './components/EditUser';
function App() {
  return (
    <BrowserRouter>
          <NavBar></NavBar>
          <Routes>
              <Route path="/"element={<Bhavanacorp></Bhavanacorp>}/>
              <Route path="/all"element={<Allusers></Allusers>}/>
              <Route path="/add"element={<Addusers></Addusers>}/>
              <Route path="/edit/:id"element={<EditUser></EditUser>}/>
          </Routes>
    </BrowserRouter>
  );
}

export default App;
