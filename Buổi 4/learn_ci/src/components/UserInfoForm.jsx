import React, { useState } from 'react';

const UserInfoForm = ({ setUserInfor }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const updateUserInfo = () => {
        setUserInfor({ name: name, email: email });
    };
    return (
        <div>
            <div style={{ marginBottom: 12 }}>
                <label>Name: </label>
                <input onChange={(e) => setName(e.target.value)} />
            </div>
            <div style={{ marginBottom: 12 }}>
                <label>Email: </label>
                <input onChange={(e) => setEmail(e.target.value)} />
            </div>
            <button onClick={updateUserInfo}>Submit</button>
        </div>
    );
};

export default UserInfoForm;


