import React, {useState} from 'react';
import AddUser from './components/Users/AddUser';
import UsersListTable from './components/Users/UsersListTable';
import UsersListData from './data/UsersListData';

import './App.css';

function App() {
  //------------------------------------------------------------------
  const [usersList, setUsers] = useState(UsersListData);

  const onAddUserDataHandler = (enteredUserData) => {
    //console.log('+ onAddExpenseDataHandler');
    //console.log('+ enteredUserData:name:' + enteredUserData.name);
    //console.log('+ enteredUserData:age:' + enteredUserData.age);
    setUsers((prevUsers) => {
        const tempUserData = {id: 'u' + (prevUsers.length+1), ...enteredUserData }
        return [...prevUsers, tempUserData];
    });
  }

  return (
    <div className="App">
      <AddUser onAddUserData={onAddUserDataHandler}></AddUser>
      <div className="MarginTop_1"></div>
      <UsersListTable usersListData={usersList}></UsersListTable>
    </div>
  );
}

export default App;
