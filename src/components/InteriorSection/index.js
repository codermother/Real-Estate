import React from 'react'
import { Button } from '../Buttons/ButtonElements'
import { 
    Section,
    Container,
    ColumnLeft,
    ColumnRight
 } from './InteriorElements'

const InteriorSection = ({
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
                    <h1>{heading}</h1>
                    <p>{paragraphOne}</p>
                    <p>{paragraphTwo}</p>
                    <Button to="/homes" secondary="true">{buttonLabel}</Button>
                </ColumnLeft>
                <ColumnRight reverse={reverse}>
                    <img src={image} alt="home" />
                </ColumnRight>
            </Container>
        </Section>
            
    )
}

export default InteriorSection
