import { useState, useRef } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { CSSTransition } from "react-transition-group";
import Backdrop from "@mui/material/Backdrop";

import './RightSideNavigation.css'

export default function RightSideNavigation() {

    const [showMenu, setShowMenu] = useState(false);
    const nodeRef = useRef(null);

    const openMenu = () => setShowMenu(true);
    const closeMenu = () => setShowMenu(false);

    return (
        <>
            <div className="menu-icon" onClick={openMenu}>
                <MenuIcon />
            </div>

            <Backdrop
                open={showMenu}
                onClick={closeMenu}
                sx={{
                    zIndex: 1300,
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            />
            <CSSTransition
                in={showMenu}
                timeout={300}
                classNames="slide"
                unmountOnExit
                nodeRef={nodeRef}
            >
                <nav className="side-menu" ref={nodeRef}>
                    <ul>
                        <li onClick={closeMenu}>Home</li>
                        <li onClick={closeMenu}>About</li>
                        <li onClick={closeMenu}>Profile</li>
                        <li onClick={closeMenu}>Settings</li>
                    </ul>
                </nav>
            </CSSTransition>
        </>
    );
}
