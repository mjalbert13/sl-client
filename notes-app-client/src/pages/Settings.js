import React, { useState} from 'react'
import { API } from 'aws-amplify'
import { Elements, StripeProvider } from "react-stripe-elements";
import BillingForm from "../components/BillingForm";
import config from "../config";
import { useAlert } from 'react-alert';


const Settings = (props) => {

  const alert = useAlert();

    const [isLoading, setIsLoading] = useState(false);
    function billUser(details) {
        return API.post("notes", "/billing", {
          body: details
        });
    }

    async function handleFormSubmit(storage, { token, error }) {
        if (error) {
          alert(error);
          return;
        }
      
        setIsLoading(true);
      
        try {
          await billUser({
            storage,
            source: token.id
          });
      
          alert.show("Your card has been charged successfully!");
          props.history.push("/");
        } catch (e) {
          alert.show(e);
          setIsLoading(false);
        }
      }
      
      return (
        <div className="Settings">
          <h1 className='large text-primary'>Billing Information</h1>
          <StripeProvider apiKey={config.STRIPE_KEY}>
            <Elements>
              <BillingForm
                isLoading={isLoading}
                onSubmit={handleFormSubmit}
              />
            </Elements>
          </StripeProvider>
        </div>
      );
}

export default Settings
