import React, {useState} from 'react'
import {
    Nav, 
    Logo, 
    MenuBars, 
    NavMenu,
    NavMenuLinks,
    NavBtn
} from "./NavbarElements"
import { menuData } from "../../data/MenuData"
import { Button } from '../Buttons/ButtonElements'


const Navbar = ({toggle}) => {
    
    const [navbar, setNavbar] = useState(false);

    const changeBackground = () => {
        if(window.scrollY >= 600) {
            setNavbar(true)
        } else {
            setNavbar(false);
        }
    }

    window.addEventListener("scroll", changeBackground);

   
    return (
        <Nav className={navbar ? "Nav active" : "Nav"} >
            <Logo to="/">ELIXR</Logo>
            <MenuBars onClick={toggle}/>
            <NavMenu>
                {menuData.map((item, index) => (
                    <NavMenuLinks to={item.link} key={index}>{item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to="/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar


