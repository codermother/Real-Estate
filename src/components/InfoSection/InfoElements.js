import styled from "styled-components"

export const Section = styled.section`
    width: 100%;
    height: 100%;   
`;

export const Container = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 800px;

    @media screen and (max-width: 768px) {
        grid-template-columns: 1fr;
        margin-top: 0;
        padding-top:0;
    }    
`;

export const ColumnLeft = styled.div` 
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 1.4;
    padding: 1rem 2rem;
    order: ${({reverse}) => (reverse ? "2" : "1")};

    h1 {
        margin-bottom: 1rem; 
        font-size: clamp(1.5rem, 6vw, 2rem)
    }

    p {
        margin-bottom: 2rem;
    }

    @media screen and (max-width: 768px) {
        padding-bottom: 0;
        margin-bottom: 0;
    }
`;

export const ColumnRight = styled.div`
    padding: 1rem 2rem;
    order: ${({ reverse }) => (reverse ? "2" : "1")};
    display: flex;
    justify-content: center;
    alignt-items: center;

    @media screen and (max-width: 768px) {
        padding-top: 0;
        margin-top: 0;
    }

    img{
        width: 100%;
        height: 100%;
        object-fit: cover;

        @media screen and (max-width: 768px) {
            width: 90%;
            height: 90%;            
        }
    }    
`;