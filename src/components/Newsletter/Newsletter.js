import React, { useState } from 'react';
import './newsletter.scss';
import { validateEmail } from '../../utils/validate';

export default function Newsletter() {

    const [ email, setEmail ] = useState('');
    const [ sended, setSended ] = useState(false);
    const [ formError, setFormError ] = useState(false);

    function onSubscribe() {
        const obj = { email, site: 'www.pixterbooks.com' };
        if(isValid()) {
            console.log('Sending', obj);
            setSended(true);
        } else {
            setFormError(true);
        }
    }

    function isValid() {
        return email && validateEmail(email);
    }
    
    return (
        <div id="newsletter" className="Newsletter-main">
            {
                !sended ?
                    <>
                        <div className="Newsletter-fields">
                            <div className="row Newsletter-form">
                                <div className="col-12 col-sm-9">
                                    <input 
                                        type="text" 
                                        onChange={ e => setEmail(e.target.value) }
                                        className={ `form-control ${ formError && 'error' }` } 
                                        placeholder="Enter your email to update"
                                        id="email" />
                                </div>
                                <div className="col-12 col-sm-3">
                                    <button 
                                        className="btn Newsletter-button btn-block"
                                        onClick={ onSubscribe }>
                                            Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </>
                :
                    <div className="text-center">
                        Registration successful
                    </div>
            }
        </div>
    )
}