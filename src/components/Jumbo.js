import React from 'react'
import {StyledJumbo} from '../styles/components'

export default function Jumbo({description}) {
    return (
        <StyledJumbo>
            <div>
                <h2>
                    ¡Consigue las mejores playeras para developers !
                </h2>
                <small>{description}</small>
            </div>
            
        </StyledJumbo>

    )
}
