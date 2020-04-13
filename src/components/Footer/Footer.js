import React, { useState, useEffect } from 'react';
import './footer.scss';
import Newsletter from '../Newsletter/Newsletter';
import { FaTwitter, FaGooglePlus, FaPinterestP, FaFacebookF } from 'react-icons/fa';
import Address from '../Address/Address';

export default function Footer() {

    const addresses = [
        ['Alameda Santos, 1978', '6th floor - Jardim Paulista', 'São Paulo - SP', '+55 11 3090 8500'],
        ['London - UK', '125 Kingsway', 'London WC2B 6NH'],
        ['Lisbon - Portugal', 'Rua Rodrigues Faria, 103', '4th floor', 'Lisbon - Portugal'],
        ['Curitiba - PR', 'R.Francisco Rocha, 198', 'Batel - Curitiba - PR'],
        ['Buenos Aires - Argentina', 'Esmeralda 950', 'Buenos Aires B C1007']
    ];

    return (
        <div className="Footer-main">
            <div className="container">
                <div className="Footer-title">
                    <h3>Keep in touch with us</h3>
                    <p>
                        Lorem ipsum, dolor sit amet, consectetur adipisicing elit. Praesent vitae eros eget tellus
                    </p>
                    <p>
                        tristique bibendum. Donec rutrum sed sem quis venenatis.
                    </p>
                </div>
                <Newsletter />
                <div className="Footer-icons">
                    <FaFacebookF color="FBDC3A" size={ 30 } />
                    <FaTwitter color="FBDC3A" size={ 30 } />
                    <FaGooglePlus color="FBDC3A" size={ 30 } />
                    <FaPinterestP color="FBDC3A" size={ 30 } />
                </div>
                <div id="address" className="Footer-addresses">
                    {
                        addresses.map((address, index) => <Address key={ index } data={ address } />)
                    }
                </div>
            </div>
        </div>
    )
}