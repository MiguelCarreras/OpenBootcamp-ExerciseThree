import React, { useState } from 'react';
import { Contact } from '../../models/contact.class';
import ContactComponent from '../pure/Contact';
import ContactForm from '../pure/forms/ContactForm';


const ContactListComponent = () => {
    
    const defaultContact = new Contact('Ana', 'ana@email.com', false);

    const [contacts, setContacts] = useState([defaultContact]);
    
    const connectContact = (contact) => {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts[index].connected = !tempContacts[index].connected;
        setContacts(tempContacts);
    }

    const addContact = (contact) => {
        const tempContacts = [...contacts, contact];
        setContacts(tempContacts);
    }

    const removeContact = (contact) => {
        const index = contacts.indexOf(contact);
        const tempContacts = [...contacts];
        tempContacts.splice(index, 1);
        setContacts(tempContacts);
    }

    return (
        <div>
            <div className='col-12'>
                <div className='card'>
                    <div className='card-header p-3'>
                        <h5>Your Contacts:</h5>
                    </div>
                    <div className='card-body' data-mb-perfect-scrollbar='true' style={ {position: 'relative', height: '400px'} }>
                        <table>
                            <thead>
                                <tr>
                                    <th scope='col'>Name</th>
                                    <th scope='col'>Email</th>
                                    <th scope='col'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    contacts.map((contact, index) => {
                                        return(
                                            <ContactComponent 
                                                key={ index }
                                                contact={ contact }
                                                connect={ connectContact }
                                                remove={ removeContact } />
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <ContactForm add={ addContact }/>
        </div>
    );
};

export default ContactListComponent;
