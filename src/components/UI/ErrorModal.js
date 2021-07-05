import React from 'react';
import AddUserCard from '../UI/AddUserCard';
import Button from '../UI/Button';
import classes from './ErrorModal.module.css';

const ErrorModal = props => {
    const closeHandler = () => {
        console.log("+ closeHandler");
        props.OnClose();
    };

    return (
    <div>
        <div className={classes.backdrop} onClick={closeHandler}></div>
        <AddUserCard className={classes.modal}>
            <header className={classes.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={classes.content}>
                <p>{props.message}</p>
            </div>
            <footer className={classes.actions}>
                <Button type="submit" disabled={false} onClick={closeHandler}>Close</Button>
            </footer>
        </AddUserCard>
    </div>
    );
};

export default ErrorModal;