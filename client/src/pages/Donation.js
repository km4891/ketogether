import React, { useEffect } from "react";
import { QUERY_CHECKOUT } from '../utils/queries';
import { loadStripe } from '@stripe/stripe-js';
import { useLazyQuery } from '@apollo/react-hooks';

const stripePromise = loadStripe('pk_test_51HpO6wGjGw30uJiXHaZpPghap4MesUAA2FmdShAOnUp1P7fuy748OLfn5SdHmVZRsa6BTCICvIsTH3rAXWj4l2Nw00mE5FFPsn');

const Donation = () => {
    const [getCheckout, { data }] = useLazyQuery(QUERY_CHECKOUT);

    useEffect(() => {
        if (data) {
          stripePromise.then((res) => {
            res.redirectToCheckout({ sessionId: data.checkout.session });
          });
        }
    }, [data]);

    async function handleDonate(name) {
        getCheckout({
            variables: { name }
        });
    }

    return(
        <div className='global-wrapper'>
            <div className='donation-page'>
                <div className='donation-header pattern-diagonal-stripes-left'>
                    <h3>
                        Thank You!
                    </h3>
                    <p>
                        
                        
                    </p>
                </div>
                <div className='donation-body'>
                    <h4>Donation Tiers</h4>
                    <p>Select Donation Amount.</p>
                    <div>
                        <div 
                            onClick={() => handleDonate('Tier 1')}
                            className='donation-options-wrapper'>
                            <div className='tier-emblem bronze'>
                                <h5>Tier 1</h5>
                                <div>
                                    $5
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Tier 2')}
                            className='tier-emblem silver'>
                            <h5>Tier 2</h5>
                            <div >
                                $20
                            </div>
                        </div>
                
                        <div 
                            onClick={() => handleDonate('Tier 3')}
                            className='tier-emblem platinum'>
                            <h5>Tier 3</h5>
                            <div >
                                $50
                            </div>
                        </div>
                        <div 
                            onClick={() => handleDonate('Tier 4')}
                            className='tier-emblem diamond'>
                            <h5>Tier 4</h5>
                            <div >
                                $100
                            </div>
                        </div>
                    </div>
                    <p>
                      THANK YOU FOR YOUR DONATION!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Donation;