import React, { useContext, useState } from 'react';
import { MyContext } from '../../App';
import { Avatar, Menu, MenuItem, IconButton } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const AccountMenu = () => {
    const { isLogin, setIsLogin, setUsername } = useContext(MyContext);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    const handleMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        setIsLogin(false);
        setUsername("");
        localStorage.removeItem('authToken');
        navigate('/SignIn');
        handleMenuClose();
    };

    return (
        <div>
            <IconButton onClick={handleMenuOpen}>
                <Avatar 
                    src="https://png.pngtree.com/png-vector/20191110/ourmid/pngtree-avatar-icon-profile-icon-member-login-vector-isolated-png-image_1978396.jpg" 
                    sx={{ width: 40, height: 40 }}
                />
            </IconButton>

            <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
            >
                {isLogin ? (
                    <MenuItem onClick={handleLogout}>Sign Out</MenuItem>
                ) : (
                    <>
                        <MenuItem onClick={() => {navigate('/SignIn'); handleMenuClose();}}>Login</MenuItem>
                        <MenuItem onClick={() => {navigate('/SignUp'); handleMenuClose();}}>Sign Up</MenuItem>
                    </>
                )}
            </Menu>
        </div>
    );
};

export default AccountMenu;
