import React from 'react'
import styled from 'styled-components'

const DivHeader = styled.header`
    display: flex;

`

export default function Header () {
    let user = localStorage.getItem("user")

    return(
        <DivHeader>
            {user}
        </DivHeader>
    )
}