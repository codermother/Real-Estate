import styled from 'styled-components';

export const FooterContainer = styled.footer`
    background-color: #000d1a;
`;

export const FooterWrap = styled.div`
    padding: 3rem calc((100vw - 1300px) / 2);
    display: flex;
    grid-template-rows: 450px;

    @media screen and (max-width: 900px) {
    flex-direction: column;
    grid-template-columns: 1fr;
    }
`;

export const FooterColumnLeft = styled.div` 
    display: flex;
    flex-direction: column;
    margin: 4rem 2rem 2rem 3rem;

    @media screen and (max-width: 900px) {
    align-items: center;
    }

    h1 {
        padding-top: 5rem;
        color:#fff;
        font-size: 5rem;
    
        @media screen and (max-width: 900px) {
        text-align: center;
        }
    }
`;

export const SocialMediaWrap = styled.div`
    padding-top: 1rem;
    margin-bottom: 3rem;
    text-align: center;

`
export const SocialIcons = styled.div`
`

export const SocialIconLink = styled.a`
    color:  #cd853f;
    font-size: 2rem;;
    padding-right: 2rem;
    
`;

export const Small = styled.div`
    color: #cd853f;
    text-align: center;
    padding-bottom: 1rem;
`;

export const FooterColumnRight = styled.div`
    display: flex;
    flex-direction: rows;
    justify-content: center;
    color:#fff;
    font-size: 15px;
    margin: 10rem 2rem 2rem 3rem;
    height: 100%;  
   
    @media screen and (max-width: 900px) {
    text-align: flex-start;
    margin: 3rem 3rem;
    width:100%;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    margin-right: 3rem;
    width: 130px;
    
    a {
        color: #fff;
        text-decoration: none;
        padding-top: 2rem;
    }
`;
