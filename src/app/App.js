
import { Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from '../pages/HomePage/HomePage.jsx';
import RegisterPage from '../pages/RegisterPage/RegisterPage.jsx';
import LoginPage from '../pages/LoginPage/LoginPage';
import PostPage from '../pages/PostPage/PostPage';
import MessagePage from '../pages/MessagePage/MessagePage';
import FrendsPage from '../pages/FrendsPage/FrendsPage.jsx';
import PhotoGaleryPage from '../pages/PhotoGaleryPage/PhotoGaleryPage.jsx';
import SettingPage from '../pages/SettingPage/SettingPage';


function App() {
  
  return (
    <div className="App">
     <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/LoginPage' element={<LoginPage/>}/>
      <Route path='/RegisterPage' element={<RegisterPage/>}/>
      <Route path='/PostPage' element={<PostPage/>}/>
      <Route path='/MessagePage' element={<MessagePage/>}/>
      <Route path='/FrendsPage' element={<FrendsPage/>}/>
      <Route path='/PhotoGaleryPage' element={<PhotoGaleryPage/>}/>
      <Route path='/SettingPage' element={<SettingPage/>}/>
     </Routes>
    </div>
  );
}

export default App;
