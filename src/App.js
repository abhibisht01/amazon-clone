import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import { useStateValue } from './state/StateProvider';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import Login from './components/Login';

import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './components/Orders';
import Register from './components/Register';
import { auth } from './Firebase/firebase';

const promise = loadStripe(
  "pk_test_51L7djxSB8fvo7PnuFnkwFR2cu16ehrKO9PRpHuTknXExlqO5jMO4nQk18FvNiV9usO5IjVw2cRP1y2ehin3I3uNH00O5BRJxUy"
);

function App() {


  const [{ }, dispatch] = useStateValue();
  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  return (
    <BrowserRouter>
      <div className="app">
        {/* <Header /> */}
        <Routes>
          <Route exact path="/" element={<> <Header /> <Home />  </>} />
          <Route exact path="/login/register" element={<Register />} />
          <Route exact path="/orders" element={<> <Header /> <Orders />  </>} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/payment" element={<> <Header />
            <Elements stripe={promise}>< Payment /></Elements></>} />
          <Route exact path="/checkout" element={<> <Header /> <Checkout />  </>} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
