import React from 'react';
import './AddUserCard.css'

const AddUserCard = (props) => {
    console.log('+ AddUserCard:' + props);
    console.log('+ AddUserCard:' + props.className);

    return (
        <div className={`AddUserCard ${props.className}` }>
            {props.children}
        </div>
    )
};

export default AddUserCard;