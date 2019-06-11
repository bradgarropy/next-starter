import React from "react"
import Navigation from "./Navigation"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    background: blue;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Navigation/>
        </HeaderWrapper>
    )
}

export default Header
