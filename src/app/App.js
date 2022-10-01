
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage.jsx';
import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';




function App() {
  
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>}/>
      <Route path='/PostPage' element={<PostPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
