import './App.css';
import { Routes, Route } from "react-router-dom"
import Owner from './Components/PageComponents/owner/Owner';
import Brand from './Components/PageComponents/brand/Brand';
import Store from './Components/PageComponents/store/Store';
import Agent from './Components/PageComponents/agent/Agent';
import Account from './Components/PageComponents/account/Account';
import Home from './Components/PageComponents/Home';
import RegAgent from './Components/PageComponents/agent/RegAgent';
import RegBrand from './Components/PageComponents/brand/RegBrand';
import RegAccount from './Components/PageComponents/account/RegAccount';
import Header from './Components/NavigationComponent/Header';
import Footer from './Components/NavigationComponent/Footer';
import BrandIndex from './Components/PageComponents/brand/BrandIndex';
import AgentIndex from './Components/PageComponents/agent/AgentIndex';
import NotFound from './Components/PageComponents/NotFound';
import Login from './Components/PageComponents/Login';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path="/owner" element={<Owner />}></Route>
        <Route path='/store' element={<Store />}></Route>
        <Route path='/agent' element={<Agent />}>
          <Route index element={<AgentIndex />}></Route>
          <Route path='/agent/reg_agent' element={<RegAgent />}></Route>
        </Route>
        <Route path='/brand' element={<Brand />}>
          <Route index element={<BrandIndex />}></Route>
          <Route path='/brand/reg_brand' element={<RegBrand />}></Route>
        </Route>
        <Route path='/account' element={<Account />}>
          <Route index element={<AgentIndex />}></Route>
          <Route path='/account/reg_account' element={<RegAccount />}></Route>
        </Route>
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
