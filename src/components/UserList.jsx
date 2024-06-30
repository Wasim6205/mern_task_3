// src/components/UserList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const UserList = ({ onSelectUser }) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        axios.get('https://602e7c2c4410730017c50b9d.mockapi.io/users')
            .then(response => {
                setUsers(response.data);
                console.log(response.data);
                setLoading(false);
            })
            .catch(error => {
                setError('Error fetching data');
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    if (users.length === 0) {
        return <div>No data to show</div>;
    }

    return (
        <div className="user-list flex flex-col gap-2 mt-4 hide">
            {users.map(user => (
                <div 
                    key={Math.random()} 
                    onClick={() => onSelectUser(user)}
                    className="user-item flex gap-4 cursor-pointer p-4 border bg-black border-gray-200 rounded-md transition-all duration-200 hover:bg-gray-600"
                >
                    <img src={user.avatar} alt={user.profile.username} className="w-12 h-12 mr-2 rounded-full" />
                    <div className='flex flex-col gap-2'>
                        <span className='text-xl font-bold text-white'>{user.profile.firstName} {user.profile.lastName}</span>
                        <span className='text-xl text-slate-100'>{user.jobTitle}</span>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default UserList;
