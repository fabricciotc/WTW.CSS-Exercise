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
    align-items: center;
    height: 100%;
    padding: 10px;
    grid-area: "plan";
    grid-gap: 5px;

    > img {
        grid-area: Logo;
    }

    > b {
        grid-area: Premium;
    }

    > a {
        grid-area: PlanName;
    }

    > button {
        grid-area: Button;
    }

    @media (min-width: ${props => props.theme.screenSize.tablet}) {
        grid-template-areas: 
        "Logo Premium"
        "PlanName Button";
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
                <LinkButton styleType='primary' style={{textAlign:'left'}} as="a">
                    {PlanName}
                </LinkButton>
                <Button styleType='primary' style={{ whiteSpace: 'pre-wrap'}}>
                    Add To Cart
                </Button>
        </PlanHeaderContainer>
    )
}

export default PlanHeader;