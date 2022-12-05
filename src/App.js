import './App.css';
import UserActions from './UserCRUD/UserActions';
import { Routes,Route } from 'react-router-dom';
import Login from './UserCRUD/Login';
function App() {
  return (
    <div className="App">
      <header className="App-header">
       
      <Routes>
       
       <Route path='/Login' element={<UserActions className='App-header'/>} />
      <Route path='/' element={<Login/>} />
      </Routes>
      </header>
    </div>
  );
}

export default App;
