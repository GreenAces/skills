import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SubscriptionSettings from "../styles/verifySubscription.module.css";
import { useParams } from 'react-router-dom';


const VerifySubscription = (props) => {


  const [message, setMessage] = useState('');
  const { email, token } = useParams();

  useEffect(() => {

    
    const verifySubscription = async () => {
      try {
        const response = await axios.get(`/php/processVerifySubscription.php`, {
          params: {
            email: email,
            token: token
          }
        });
        console.log('Response:', response); // remove line after debugging is complete
        setMessage(response.data.message);
      } catch (error) {
        setMessage('An error occurred. Please try again.');
      }
    };

    verifySubscription();
  }, [email, token]);

  return (
    <div>
      <h1 className={SubscriptionSettings["h2-title"]}>Subscription Verification</h1>
      <p className={SubscriptionSettings["responseColorMessage"]}>{message}</p>
    </div>
  );
};

export default VerifySubscription;
