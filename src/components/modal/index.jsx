import React from 'react';
import './Modal.css'
const Modal = ({isOpen, setIsOpen, isIncorrectEmailData, isIncorrectPasswordLength, }) => {
    return (
        <div style={isOpen ? {display: 'block'} : {display: 'none'}} className="overlay">
            <div className="modal">
                <h2>
                    {isIncorrectEmailData? 'Incorrect email!' : ''}
                </h2>

                <h2>
                    {isIncorrectPasswordLength? 'at least 6 symbols in password': ''}
                </h2>
                <h2>
                    {(isIncorrectEmailData === false && isIncorrectPasswordLength === false ) ? 'Success' : '' }
                </h2>
                <svg onClick={() => setIsOpen(false)} height="200" viewBox="0 0 200 200" width="200">
                    <title />
                    <path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z" />
                </svg>
            </div>
        </div>
    );
};

export default Modal;
