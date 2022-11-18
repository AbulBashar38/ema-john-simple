import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Shop from './Component/Shop/Shop';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Shop />}></Route>
        <Route path='/home' element={<Shop />}></Route>
      </Routes>
      
    </div>
  );
}

export default App;
