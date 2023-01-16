import './App.css';
import { Alert } from 'react-bootstrap';
import { 
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
  Redirect,
  Link,
  useNavigate
}  from 'react-router-dom';
import Login from './component/login';
import Navbarfirst from './component/navbar'
import Footer from './component/footer';
import Register from './component/register';
import Home from './component/home';
import Dashboard from './component/userdashboard';
import Addprodcut from './component/staff/add_product';
import Dashboardstaff from './component/staff/dashboard';
import Test from './test';
import Details from './component/detalis';
import Catagroy from './component/catagory';
import Maincatagory from './component/maincatagory';
import Stafflogin from './component/staff/stafflogin';
import Search from './component/search';
import Staffregister from './component/staff/addstaff';



function App() {
  return (
      <Router>

        <Navbarfirst />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/account' element={<Dashboard />} />
          <Route path='/staff' element={<Stafflogin />} />
          <Route path='/staff/account' element={<Dashboardstaff />} />
          <Route path='/staff/addproduct' element={<Addprodcut />} />
          <Route path='test' element={<Test/> } />
          <Route path="/product-detalis/:id" element={<Details />} />
          <Route path="/product/catagory/:main" element={<Catagroy />} />
          <Route path="/product/main-catagory/:main/:catagory" element={<Maincatagory />} />
          <Route path="/product/search" element={<Search />} />
          <Route path="/staff/staffregister" element={<Staffregister />} />

        </Routes>

        <Footer />
      </Router>
  )
}

export default App;
