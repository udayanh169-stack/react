import React from 'react';
import ReactDOM from 'react-dom/client';

const Header=()=>
     (
        <div className='header' >
            <div className='logo'>
                <img src='334cbb333311ac916a8d8d01c68ae950.png' alt='logo' />

            </div>
            <div className='nav-items'>
                <ul>
                     <li>Home</li>
                    <li>About</li>
                    <li>Cart</li>
                    <li>Contact</li>

                </ul>
            </div>
        </div>
    )


const root=ReactDOM.createRoot(document.getElementById('root'));

root.render(<Header />);

