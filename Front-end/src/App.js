import './App.css';
import Login from './pages/Login'
import Nav from './components/Nav'
import {  Route, Routes, useRoutes } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import Footer from './components/Footer';
import PdfViewer from './components/pdfGenerator/PdfViewer';
import TemplatesPage from './pages/TemplatesPage';
import MyDocument from './components/pdfGenerator/MyDocument';
import PopupDelete from './components/PoppupDelete';

// const routes=useRoutes([
//   {
//     path:'/',
//     element:
//   }
// ])

function App() {
  return (
    <div>
      
      {/* <Nav/> */}
        
          <Routes>
            
          <Route path='/'  element={<LandingPage/>}/>
              <Route path='/home'  element={<Home/>}/>
              <Route path='/login' element={<Login/>}/>
              <Route path='/register' element={<Register/>}/>
              <Route path='/pdfViewer' element={<PdfViewer/> }/>
              <Route path='/templates' element={<TemplatesPage/> }/>
              <Route path='/doc' element={<PopupDelete/> }/>

              
          </Routes>
        
      
      
      {/* <Login/> */}
      {/* <LandingPage/> */}
      {/* <Footer/> */}
      
    </div>
  );
}

export default App;
