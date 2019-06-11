import React from "react"
import PropTypes from "prop-types"
import styled, {ThemeProvider} from "styled-components"
import Header from "../components/Header/Header"
import Footer from "../components/Footer/Footer"
import GlobalStyles from "../styles/GlobalStyles"
import Container from "../styles/Container"
import theme from "../styles/theme"

const LayoutWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Layout = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles/>

                <LayoutWrapper>
                    <Header/>
                    <Container>{children}</Container>
                    <Footer/>
                </LayoutWrapper>
            </>
        </ThemeProvider>
    )
}

Layout.propTypes = {
    children: PropTypes.node,
}

export default Layout
