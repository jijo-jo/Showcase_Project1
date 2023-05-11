import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './global/Header';

import Homepage from './pages/homepage/Homepage';
import CategoryVintage from './pages/CategoryVintage';
import CategoryExtant from './pages/CategoryExtant';
import CategorySteampunk from './pages/CategorySteampunk';
import AllProducts from './pages/AllProducts';
import ProductPage from './pages/productPage/ProductPage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Terms from './pages/Terms';
import Cart from './pages/cart/Cart';
import LogInPage from './pages/LogInPage';
import RegisterPage from './pages/RegisterPage';
import ForgetPasswordPage from './pages/ForgotPassword';
import Antdtable from './pages/Materialtable/Materialtable';
import PageforviewDeliveries from './pages/Delveryboy/Pageforviewalldelivery';
import Orderdeatailspage from './pages/AdminPages/Orderdetailspage';
import Employeelist from './pages/SuperAdminPages/Userslist';
import AddEmployeepage from './pages/SuperAdminPages/AddEmployeepage';
import Addnewwatch from './pages/Addnewwatch';
import Nomatch from './pages/Nomatch';
import Cartfunction from './pages/cart/Cartfunctin';

class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
               {localStorage.getItem("Accesstoken") &&<Header />}
                    <Switch>
                        <Route exact path="/" component={LogInPage}/>  
                        <Route exact  path="/home" component={Homepage} />
                        <Route exact  path="/aboutus" component={AboutUs} />
                        <Route exact  path="/contact" component={Contact} />
                        <Route exact  path="/terms" component={Terms} />
                        <Route exact  path="/vintage/" component={CategoryVintage} />
                        <Route exact  path="/extant/" component={CategoryExtant} />
                        <Route exact  path="/steampunk/" component={CategorySteampunk} />
                        <Route exact  path="/allproducts/" component={AllProducts} />
                        <Route exact  path="/product/:productnumber" component={ProductPage} />
                        <Route exact  path="/cart" component={Cart} />
                        <Route exact  path="/login" component={LogInPage}/>
                        <Route exact  path="/register" component={RegisterPage}/>
                        <Route exact  path="/forget-password" component={ForgetPasswordPage}/>
                        <Route exact  path="/antdtable" component={Antdtable}/>
                        <Route exact  path="/deliverypage" component={PageforviewDeliveries}/>
                        <Route exact  path="/orderdetails" component={Orderdeatailspage}/>
                        <Route exact  path="/employeelist" component={Employeelist}/>
                        <Route exact  path="/addemployee" component={AddEmployeepage}/>
                        <Route exact path="/addnewwatch" component={Addnewwatch}/>
                        <Route exact path="/cartfunction" component={Cartfunction}/>
                        <Route path="/*" component={Nomatch}/>
                      
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
