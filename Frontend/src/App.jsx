import Login from './components/Login';
import Register from './components/Register';
import OwnerRegistration from './components/OwnerRegistration';
import Navbar from './components/Navbar';
import Home from './components/Home/index';
import { ToastContainer } from 'react-toastify';
import {Routes, Route} from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css'; 
import Shops from './components/Shops';
import SearchPage from './components/SearchPage';
const App = () =>{
  return (
    <>
    <ToastContainer />
    <Navbar />
    <Routes>
      {/* <Route path='/' element={<Login />}/> */}
      <Route path='/' element={<Home />} />
      {/* <Route path='/login' element={<Login />}/>
      <Route path='/registerOwner' element={<OwnerRegistration />} />
      <Route path='/register' element={<Register />}/> */}
      <Route path='/shops' element={<Shops/>}/>
      <Route path='/search' element={<SearchPage/>}/>
    </Routes>
    </>
  )
}

export default App;