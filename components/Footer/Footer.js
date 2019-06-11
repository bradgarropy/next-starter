import React from "react"
import styled from "styled-components"

const FooterWrapper = styled.footer`
    background-image: linear-gradient(to bottom, #121212 0%, #323232 100%);
    text-align: center;
    color: ${({theme}) => theme.colors.offWhite};
`

const Footer = () => {
    return (
        <FooterWrapper>
            <h1>Footer</h1>
        </FooterWrapper>
    )
}

export default Footer
