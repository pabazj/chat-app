import React from 'react'
import GoogleAuth from './GoogleAuth';
import LogoutButton from './LogoutButton';

function Header({ user }) {

    return (
        <>
        <header className={!user?.data ? "msger-header-no-login" : "msger-header"}>
            <div className={!user?.data ? "msger-header-title-no-login" : "msger-header-title"}>
                <b>ChitChat</b>
            </div>

            <div className="msger-header-options">
                <span>
                    {user?.data && <img className='user-image' src={user?.data?.photoURL} />}
                </span>
                <span>{user?.data && <LogoutButton />}</span>
            </div>

        </header>

        {!user?.data && <GoogleAuth />}
        </>
    )
}

export default Header