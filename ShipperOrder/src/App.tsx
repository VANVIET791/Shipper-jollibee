import HeaderComponent from './Component/HeaderComponent/HeaderComponent'
import DeliveryComponent from './Component/DeliveryComponent/DeliveryComponent'
import OrderComponent from './Component/OrderComponent/OrderComponent'
// import LoginPage from './Page/LoginPage/LoginPage'
// import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';

// import {silder1} from './assets/img/slider1.jpg'
// import {silder2} from './assets/img/slider1.jpg'
// import {silder3} from './assets/img/slider1.jpg'
import './App.css'


function App() {
  return (
    <>
      <HeaderComponent/>
      <OrderComponent/>
      <DeliveryComponent/>

      
    </>
  )
}

export default App
