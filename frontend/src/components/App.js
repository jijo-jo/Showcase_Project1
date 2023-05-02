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

class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <Header />
                    <Switch>
                        <Route exact path="/" component={Homepage} />
                        <Route path="/aboutus" component={AboutUs} />
                        <Route path="/contact" component={Contact} />
                        <Route path="/terms" component={Terms} />
                        <Route path="/vintage/" component={CategoryVintage} />
                        <Route path="/extant/" component={CategoryExtant} />
                        <Route path="/steampunk/" component={CategorySteampunk} />
                        <Route path="/allproducts/" component={AllProducts} />
                        <Route path="/product/:productnumber" component={ProductPage} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/login" component={LogInPage}/>
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/forget-password" component={ForgetPasswordPage}/>
                        <Route path="/antdtable" component={Antdtable}/>
                        <Route path="/deliverypage" component={PageforviewDeliveries}/>
                        <Route path="/orderdetails" component={Orderdeatailspage}/>
                        <Route path="/employeelist" component={Employeelist}/>
                        <Route path="/addemployee" component={AddEmployeepage}/>
                        <Route path="/addnewwatch" component={Addnewwatch}/>
                    </Switch>
            </BrowserRouter>
        )
    }
}

export default App;
