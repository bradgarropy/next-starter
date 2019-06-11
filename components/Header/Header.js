import React from "react"
import Navigation from "./Navigation"
import styled from "styled-components"

const HeaderWrapper = styled.header`
    padding: 20px 30px;
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.06);
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Navigation/>
        </HeaderWrapper>
    )
}

export default Header
