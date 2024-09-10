import React from "react";
import './Navbar.css';
import { NavLink } from "react-router-dom";

import { AppBar, Toolbar, Typography, Container, Box, Button } from "@mui/material";

const Navbar = () => {
    return (
            <nav className="nav">
                <AppBar position="static" color="secondary">
                    <Container maxWidth="xl">
                        <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                            }}
                        >
                            <NavLink to="/">Test Company</NavLink>
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to="/AboutUs">ABOUT US</NavLink></Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to="/Service">SERVICES</NavLink></Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to="/Achievements">ACHIEVEMENTS</NavLink></Button>
                            <Button sx={{ my: 2, color: 'white', display: 'block' }}><NavLink to="/contact">CONTACT</NavLink></Button>
                        </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </nav>
    )
}
export default Navbar;
