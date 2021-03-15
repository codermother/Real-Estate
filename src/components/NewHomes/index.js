import React from 'react'
import { Button } from '../Buttons/ButtonElements'
import { 
    Section,
    Container,
    ColumnLeft,
    ColumnRight,
    Arrow
 } from './NewHomesElements'

const NewHomes = ({
    heading, 
    paragraphOne, 
    paragraphTwo, 
    buttonLabel, 
    image,
    image2
}) => {    
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <h1>{heading}</h1>
                    <img src={image} alt="home" />
                    <p>{paragraphOne}</p>
                    <Button to="/homes" primary="false" css= {`max-width: 160px`}>{buttonLabel}  <Arrow /></Button>
                </ColumnLeft>
                <ColumnRight >
                    <img src={image2} alt="home" />
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true" css= {`max-width: 160px`}>{buttonLabel}  <Arrow /></Button>
                
                </ColumnRight>
            </Container>
        </Section>
            
    )
}

export default NewHomes
