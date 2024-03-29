import React, { FC } from 'react';

import { IUser } from '../types/types';

interface UserItemProps {
    user:IUser;
}

const UserItem:FC<UserItemProps> = ({user}) => {
    return (
        <div key={user.id} style={{ padding: 15, border: '1px solid gray'}}>
            {user.name} проживає у місті {user.address.city} на вулиці {user.address.street}
        </div>
    );
};

export default UserItem;
