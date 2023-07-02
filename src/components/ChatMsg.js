import React from "react";

const ChatMsg = ({ name, message }) => {
    return (
        <div>
            <div className='flex p-2 border items-center'>
                <img
                    className='h-8'
                    src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png'
                    alt='user logo'
                />
                <p className='mx-2 font-semibold'>{name}: </p>
                <p>{message}</p>
            </div>
        </div>
    );
};

export default ChatMsg;
