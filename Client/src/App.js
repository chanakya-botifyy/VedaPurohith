import { Routes,Route, Router, Navigate} from'react-router-dom';
// import './App.css';
import Navbar from './components/Navbar/Navbar.jsx';
import { NavbarImg } from './components/Navbar/NavbarImg.jsx';
import Login from './components/Pages/Login Pages/Login.jsx';
import PurohithLogin from './components/Pages/Login Pages/PurohithLogin.jsx';
import PurohithRegistrationForm from './components/Pages/Login Pages/PurohithRegistrationForm.jsx';
import Productspage from './components/Pages/ProdectsPage/Productspage.jsx';
import PujaDetails from './components/Pages/ProdectsPage/PujaDetails.jsx';
import CartPage from './components/Pages/Cart/CartPage.jsx';
import CartAddPage from './components/Pages/Cart/CartAddPage.jsx';
import OrdersPage from './components/Pages/Orders/OrdersPage.jsx';
import UserRegistration from './components/Pages/Login Pages/UserRegistration.jsx';
import Puja from './components/Pages/CategoryPage/Puja.jsx';
import Events from './components/Pages/CategoryPage/Events.jsx';
import Festivals from './components/Pages/CategoryPage/Festivals.jsx';
import Homam from './components/Pages/CategoryPage/Homam.jsx';
import Vratham from './components/Pages/CategoryPage/Vratham.jsx';
import AdminLayout from './components/Layouts/Admin/AdminLayout.js';
import Orders from './pages/Admin/Orders.js';
import Dashboard from './pages/Admin/Dashboard.js';
import SevaList from './pages/Admin/SevaList.js';
import Customer from './pages/Admin/Customer.js';
import Purohiths from './pages/Admin/Purohiths.js';
import Payments from './pages/Admin/Payments.js';
import Banners from './pages/Admin/Banners.js';
import OrderDetails from './pages/Admin/OrderDetails.js';
import CustomerDetails from './pages/Admin/CustomerDetails.js';
import PurohitDetails from './pages/Admin/PurohitDetails.js';
import NewPurohit from './pages/Admin/NewPurohit.js';
import AddSeva from './pages/Admin/AddSeva.js';
import CreatePurohith from './pages/Admin/CreatePurohit.js';
import PaymentInfo from './pages/Admin/PaymentInfo.js';
import Terms_Conditions from './components/Support/Terms_Conditions.jsx'
import Privacy_Policy from './components/Support/Privacy_Policy.jsx'
import Shipping_Policy from './components/Support/Shipping_Policy.jsx'
import Customer_Grievance from './components/Support/Customer_Grievance.jsx'
import Cancellation_Refund_Policy from './components/Support/Cancellation_Refund_Policy.jsx'
import PurohitLayout from './components/Layouts/Purohith/PurohitLayout.js';
import EditSeva from './pages/Admin/EditSeva.js';
import ProfilePage from './components/Pages/Login Pages/ProfilePage.jsx';
import ProfileEdit from './components/Pages/Login Pages/ProfileEdit.jsx';
import { createContext, useEffect, useState } from 'react';
import Notifications from './pages/Admin/Notifications.js';
import Paymentstatus from './components/Pages/Cart/paymentstatus.jsx';
import Cookies from 'js-cookie';
import axios from 'axios';
import Aboutus from './components/SpecialOfferSection/Aboutus.jsx';



export const store = createContext();


const AdminRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<AdminLayout />}>
          <Route path='/Dashboard' element={<Dashboard/>} />

          <Route path='/Orders' element={<Orders/>} />
          <Route path='/OrderDetails/:orderId' element={<OrderDetails/>} />

          <Route path='/Seva-List' element={<SevaList/>}/>
          <Route path='AddSeva' element={<AddSeva/>} />
          <Route path='EditSeva/:sevaId' element={<EditSeva/>} />

          <Route path='/Customer' element={<Customer/>}/>
          <Route path='/CustomerDetails/:customerId' element={<CustomerDetails/>}/>

          <Route path='/Purohiths' element={<Purohiths/>}/>
          <Route path='/PurohitDetails/:PurohithId' element={<PurohitDetails/>}/>
          <Route path='/NewPurohit' element={<NewPurohit/>}/>
          <Route path='/CreatePurohith' element={<CreatePurohith/>}/>

          <Route path='/Payments' element={<Payments/>}/>
          <Route path='/PaymentInfo/:PaymentId' element={<PaymentInfo/>}/>

          <Route path='/Banners' element={<Banners/>}/>
        </Route>
      </Routes>
    </>
  )
}

const PurohitRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='' element={<PurohitLayout/>}>
          <Route path='/Orders' element={<Orders/>} />
          <Route path='/OrderDetails/:orderId' element={<OrderDetails/>} />

          <Route path='/Seva-List' element={<SevaList/>}/>
          <Route path='AddSeva' element={<AddSeva/>} />
          <Route path='EditSeva/:sevaId' element={<EditSeva/>} />

          <Route path='/Payments' element={<Payments/>}/>
          <Route path='/PaymentInfo/:PaymentId' element={<PaymentInfo/>}/>

          <Route path='/Notifications' element={<Notifications/>}/>
        </Route>
      </Routes>
    </>
  )
}

const ClientRoutes = ({setTriggerRefresh}) => {
  const [token,setToken] = useState(null);
  return (
    <store.Provider value={[token,setToken]}>
    <>
    <Navbar />
    <Routes>
        <Route path='/Home' element={<NavbarImg />} />
        <Route path='/Login'  element={<Login />} />
        <Route path='/Purohith' element={<PurohithLogin />} />
        <Route path='/Purohith/Register' element={<PurohithRegistrationForm />} />
        <Route path='/Products' element={<Productspage />} />
        {/* <Route path='/Products/:value' element={<Productspage />} /> */}
        <Route path='/Products/:ProductId' element={<PujaDetails />} />
        {/* <Route path='/Products/:value/:ProductId' element={<PujaDetails />} /> */}
        <Route path='/Products/:ProductId/Cart' element={<CartPage />} />
        <Route path='/Products/:ProductId/Cart/address' element={<CartAddPage />} />
        <Route path='/Orders' element={<OrdersPage />} />
        <Route path='/Signup' element={<UserRegistration />} />
        <Route path='/terms_&_conditions' element={<Terms_Conditions />} />
        <Route path='/privacy_policy' element={<Privacy_Policy />} />
        <Route path='/shipping_policy' element={<Shipping_Policy />} />
        <Route path='/customer_grievance' element={<Customer_Grievance />} />
        <Route path='/cancellation_&_refund_policy' element={<Cancellation_Refund_Policy />} />
        <Route path='/Profile' element={<ProfilePage />}/>
        <Route path='/ProfileEdit' element={<ProfileEdit />}/>
        <Route path='/PaymentStatus/:id' element={<Paymentstatus />}/>
        <Route path='/Aboutus' element={<Aboutus />} />

      </Routes>
      
    </>
    </store.Provider>
  )
}

export const refreshContext = createContext({setTriggerRefresh:() => {}})

function App() {
  const [triggerRefresh, setTriggerRefresh] = useState();
  const [authenticated, setAuthenticated] = useState();

  const role = localStorage.getItem('role');
  const token = localStorage.getItem('token');

  useEffect(() => {
    const timeout = setTimeout(() => {
      // Remove token and role from local storage
      alert("Session has been Expired please login again")
      localStorage.removeItem('token');
      localStorage.removeItem('role');
      localStorage.removeItem('userId');
      window.location.reload();

      // Update authenticated state to false
      setAuthenticated(false);
    }, 10 * 60 * 1000); // 10 minutes in milliseconds
  
    // Reset the triggerRefresh state to trigger useEffect when needed
    setTriggerRefresh(Date.now());
  
    // Clean up the timeout when the component unmounts or when useEffect runs again
    return () => clearTimeout(timeout);
  }, [token]);

  useEffect(()=>{
    setAuthenticated(token ? true : false)
  },[triggerRefresh, token])

  console.log(authenticated)

  return (
    <>
      <refreshContext.Provider value={{setTriggerRefresh}}>
      <Routes>
      {role === 'Admin' && (
        <>
          <Route path="/" element={<Navigate to={'Admin/Orders'} />} />
          <Route path="Admin/*" element={<AdminRoutes /> } />
        </>
      )}
      {role === 'Purohith' && (
        <>
          <Route path="/" element={<Navigate to={'Purohith/Orders'}/>} />
          <Route path="Purohith/*" element={<PurohitRoutes /> } />
        </>
      )}
      {(authenticated === false || role === 'User') && (
        <>
          <Route path="/" element={<Navigate to={'Home'} />} />
          <Route path="*" element={<ClientRoutes /> } />
        </>
      )}
      </Routes>
      </refreshContext.Provider>
    </>
  );
}

export default App;
