import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <div className='overflow-x-hidden'>
      <Navbar />
      <Outlet />
      <Footer />
      <ToastContainer />
    </div>
  )
}

export default App
