import React from 'react'
import {Icon, LinkButton} from "es-components";

const BackButton = ({ ...props }) => {

    return(
        <LinkButton styleType="primary">
         <Icon size={24} name="arrow-left" />
            Return to Plan Results
        </LinkButton>
    )
}

export default BackButton;