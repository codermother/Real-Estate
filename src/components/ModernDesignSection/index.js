import React from 'react'
import { Button } from '../Buttons/ButtonElements'
import { 
    Section,
    Container,
    ColumnLeft,
    ColumnRight
 } from './ModernDesignElements'

const ModernDesign = ({
    heading, 
    paragraphOne, 
    paragraphTwo, 
    buttonLabel, 
    reverse, 
    image
}) => {    
    return (
        <Section>
            <Container>
                <ColumnLeft>
                    <img src={image} alt="home" />
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" primary="true">{buttonLabel}</Button>
                </ColumnRight>
            </Container>
        </Section>
            
    )
}

export default ModernDesign
