import React from 'react'
import GoogleAuth from './GoogleAuth';
import LogoutButton from './LogoutButton';

function Header({ user }) {

    return (
        <header className={!user?.data ? "msger-header-no-login" : "msger-header"}>
            <div className={!user?.data ? "msger-header-title-no-login" : "msger-header-title"}>
                <b>My Chat</b>
            </div>

            <div className="msger-header-options">
                <span>
                    {user?.data && <img className='user-image' src={user?.data?.photoURL} />}
                </span>
                <span>{user?.data && <LogoutButton />}</span>
            </div>

            {!user?.data &&
                <div className='welcome-media-wrapper'>
                    <img
                        className='welcome-media'
                        src='https://firebasestorage.googleapis.com/v0/b/chat-app-574bb.appspot.com/o/media%2Fchat-removebg-preview.png?alt=media&token=b06a75b9-f0ef-46c1-9009-e56fc8c0e1ac&_gl=1*1ag7ekj*_ga*ODIxOTg2MjI3LjE2ODUwMzcyMDc.*_ga_CW55HF8NVT*MTY4NTYxNjkzOS4yMi4xLjE2ODU2MjAxNzcuMC4wLjA.' />
                </div>
            }

            {!user?.data && <GoogleAuth />}

        </header>
    )
}

export default Header