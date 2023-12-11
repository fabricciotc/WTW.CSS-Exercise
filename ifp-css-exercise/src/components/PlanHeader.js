import { Button, LinkButton } from 'es-components';
import React from 'react'
import styled from 'styled-components';

const PlanHeaderContainer = styled.section`
    display: grid;
    grid-template-areas: 
    "Logo"
    "Premium"
    "PlanName"
    "Button";
    direction: ltr;
    height: 100%;
    padding: 10px;
    grid-area: "plan";
    grid-gap: 5px;
    grid-template-rows: auto 1fr 1fr 1fr;
    text-align: center;

    > img {
        grid-area: Logo;
        margin: auto;
    }

    > b {
        grid-area: Premium;
        margin: auto 0;
    }

    > a {
        grid-area: PlanName;
    }

    > button {
        grid-area: Button;
        height: fit-content;
    }

    @media (min-width: ${props => props.theme.screenSize.tablet}) {
        grid-template-areas: 
        "Logo Premium"
        "PlanName Button";

        grid-template-columns: 1fr 1fr;
        grid-template-rows: auto 1fr;
        text-align: left;

        > img {
        margin: auto 0;
        }
    }

`;

const PlanHeader = ({
  logoUrl,
  PlanName,
  Premium
}) => {

    return(
        <PlanHeaderContainer>
                <img width={100} src={logoUrl} alt='plan'/>
                <b style={{fontSize:'1.3rem'}}>
                    ${Premium}/month
                </b>
                <LinkButton styleType='primary' as="a">
                    {PlanName}
                </LinkButton>
                <Button styleType='primary' style={{ whiteSpace: 'pre-wrap'}}>
                    Add To Cart
                </Button>
        </PlanHeaderContainer>
    )
}

export default PlanHeader;