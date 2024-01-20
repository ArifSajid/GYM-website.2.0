import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ForgetPas from './components/ForgetPas/ForgetPas';
import Register from './components/Register/Register';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Announcement from './parts/Announcement/Announcement';
import Header from './parts/Header/Header';
import Footer from './parts/Footer/Footer';
import Lastpart from './parts/Lastpart/Lastpart';
import Login from './components/Login/Login';

const router = createBrowserRouter([
  {
    path: "/",
    element: 
    <>
      <Announcement/>
      <Header/>
      <Hero/>
      <Products/>
      <Footer/>
      <Lastpart/>
    </>
    ,
  },
  {
    path: "/login", 
    element: <Login/>,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/forget",
    element: <ForgetPas/>,
  }

]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />

      
    </div>
  );
}

export default App;
