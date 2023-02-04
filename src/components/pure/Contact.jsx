import React from 'react';
import PropTypes from 'prop-types';
import { Contact } from '../../models/contact.class';

const ContactComponent = ({ contact, connect, remove }) => {
    
    const contactConnectedIcon = () => {
        if(contact.connected) return (<i onClick={() => connect( contact )} className='bi-toggle-on task-action' style={ {color: 'green'} }></i>)
        return (<i onClick={() => connect( contact )} className='bi-toggle-off task-action' style={ {color: 'grey'} }></i>)
    }
    
    return (
        <tr className='fw-normal'>
            <th>
                <span className='ms-2'>{ contact.name }</span>
            </th>
            <td className='align-middle'>
                <span>{ contact.email }</span>
            </td>
            <td className='align-middle'>
                { contactConnectedIcon() }
                <i className='bi-trash task-action' onClick={() => remove(contact) } style={ {color: 'tomato' }}></i>
            </td>
        </tr>
    );
};


ContactComponent.propTypes = {
    contact: PropTypes.instanceOf(Contact).isRequired,
    connect: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
};


export default ContactComponent;
