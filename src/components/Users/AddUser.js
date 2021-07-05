import React, {useState} from 'react';
import AddUserCard from '../UI/AddUserCard';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';

import './AddUser.css';

const AddUser = (props) => {
    var errMessage = '';
    let isValidInput = true;
    
    const[isProcessing,     setIsProcessing]     = useState(false);
    const[enteredUserName,  setEnteredUserName]  = useState('');
    const[enteredAge,       setEnteredAge]       = useState('');
    const[errMessage2,      setErrMessage2]       = useState();

    const enteredUserNameHandler  = (event) => {setEnteredUserName(event.target.value);};
    const enteredAgeHandler       = (event) => {setEnteredAge(event.target.value);};

    const hideProcessing = () => {
        console.log("+ hideProcessing");
        setIsProcessing(false);
    }

    const errorHandler = () => {setErrMessage2(null);} ;

    const AddUserHandler = (event) => {
        console.log("+ -------------------------------"); 
        event.preventDefault();

        if (!enteredUserName) 
        { 
            setErrMessage2({
                title: 'Invalid Name',
                message: 'User name is a required field.'
            });

            errMessage = 'User name is a required field.'

            isValidInput = false;
            console.log("+ errMessage1: " + errMessage); 
        }
        if (!enteredAge || +enteredAge < 1 ) 
        { 
            setErrMessage2({
                title: 'Invalid Age',
                message: 'User age is invalid.'
            });
            errMessage = 'User age is a required field.'
            isValidInput = false;
            console.log("+ errMessage2: " + errMessage); 
        }
    
        if (isValidInput){
            console.log("+ processing input:" + enteredUserName + ":" + enteredAge); 
            const userData = {
                name: enteredUserName,
                age: enteredAge
            }            
            props.onAddUserData(userData);
            setIsProcessing(true);
            setTimeout(() => {
                hideProcessing();
                setEnteredUserName('');
                setEnteredAge('');
            }, 3000);
        }
        else {
            console.log("+ invalid input, display error message"); 
            console.log("+ errMessage3: " + errMessage); 
        }
    }

    return (
        <div>

            {errMessage2 && <ErrorModal title={errMessage2.title} message={errMessage2.title} OnClose={errorHandler}></ErrorModal>}

            <AddUserCard>
                <form className="AddUser" onSubmit={AddUserHandler}>
                    <label htmlFor="username">UserName</label>
                    <input id="username" type="text" value={enteredUserName} onChange={enteredUserNameHandler}></input>
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" value={enteredAge} onChange={enteredAgeHandler}></input>
                    <Button disabled={isProcessing} type="submit">Add User</Button>
                    {isProcessing && <label className="float_left" >Processing...</label>}
                </form>    
            </AddUserCard>
        </div>
    )
};

export default AddUser;