import React from 'react'
import {menuData} from "../../data/MenuData"
import { Button } from "../Buttons/ButtonElements"
import { 
    DropdownContainer,
    Icon,
    CloseIcon,
    DropdownWrapper,
    DropdownMenu,
    DropdownLink,
    BtnWrap    
} from './DropdownElements'

const Dropdown = ({isOpen, toggle}) => {
    return (
        <DropdownContainer isOpen={isOpen} toggle={toggle}>
           <Icon onClick={toggle}>
               <CloseIcon />
           </Icon>
           <DropdownWrapper>
               <DropdownMenu>
                   {menuData.map((item, index) => (
                       <DropdownLink to={item.link} key={index}>
                           {item.title}
                       </DropdownLink>
                   ))}
               </DropdownMenu>
               <BtnWrap>
                   <Button primary="true" round="true" small="true" to="/contact">Contact Us</Button>
               </BtnWrap>
           </DropdownWrapper>
        </DropdownContainer>

    )
}

export default Dropdown
