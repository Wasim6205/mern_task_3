import React, { useState } from 'react';
import UserList from './components/UserList';
import UserDetails from './components/UserDetails';
import './App.css';

const App = () => {
    const [selectedUser, setSelectedUser] = useState(null);

    const handleSelectUser = (user) => {
        setSelectedUser(user);
    };

    return (
        <div className="app-container flex p-4 hide">
            <div className="user-list-container w-[100vw] md:w-1/3 border-r border-gray-200">
                <h1 className='text-center w-40 mx-auto text-3xl border-2 border-black'>Users</h1>
                <UserList onSelectUser={handleSelectUser} />
            </div>
            <div className="user-details-container w-2/3 p-4">
                <UserDetails user={selectedUser} />
            </div>
        </div>
    );
};

export default App;
