import styled from 'styled-components'

export const DivFooter = styled.div`
    position: absolute;
    bottom: 2.5em;
    left: .7em;
    
    p{
        color: grey;
        font-size: .7rem;
        margin: 0;
        font-weight: lighter;
    }

    @media (min-width: 440px){
        P{
            text-align: center;
        }
    }
`