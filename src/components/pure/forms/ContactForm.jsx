import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../../models/contact.class';


const ContactForm = ({ add }) => {

    const nameRef = useRef('');
    const emailRef = useRef('');

    const addContact = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const newContact = new Contact(name, email, true);
        add(newContact);
    }

    return (
        <form onSubmit={ addContact } className='d-flex justify-content-center align-items-center nb-4' >
            <div className='form-outline flex-fill'>
                <input id='inputName' className='form-control form-control-lg' type='text' placeholder='Contact Name' ref={nameRef} required autoFocus />
                <input id='inputEmail' className='form-control form-control-lg' type='text' placeholder='Contact Email' ref={emailRef} required />
            </div>
            <button type='submit' className='btn btn-success btn-lg ms-2' >Add</button>
        </form>
    );
};


ContactForm.propTypes = {
    add: PropTypes.func.isRequired
};


export default ContactForm;
