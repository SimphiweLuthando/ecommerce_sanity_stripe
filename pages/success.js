import React, {useState, useEffect} from 'react';
import Link from 'next/Link';
import {BsBagCheckFill} from 'react-icons/bs';
import { runFireWorks } from '../lib/utils';

import {useStateContext} from '../context/StateContext';

const Success = () => {

  const {setCartItems, setTotalPrice, setTotalQuantities}  = useStateContext();

  useEffect(()=>{
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runFireWorks();
  },[])

  return (
    <div className='success-wrapper'>
        <div className="success">
            <p className="icon">
                <BsBagCheckFill />
            </p>
            <h2>Thank you for your purachase!</h2>
            <p className="email-msg">Check your email inbox for the reciept.</p>
            <p className="description">
                If you have any questions, please email
                <a href="mailto:orders@example.com" className='email'>
                    orders@example.com
                </a>
            </p>
            <Link href='/'>
                <button className="btn" type='button' width='300px'>Continue Shopping</button>
            </Link>
        </div>
    </div>
  )
}

export default Success