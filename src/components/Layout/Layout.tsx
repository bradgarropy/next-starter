import Footer from "components/Footer"
import Header from "components/Header"
import {FC} from "react"
import styled, {ThemeProvider} from "styled-components"
import Container from "styles/Container"
import GlobalStyles from "styles/GlobalStyles"
import theme from "styles/theme"

const LayoutWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: auto 1fr auto;
`

const Layout: FC = ({children}) => {
    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyles />

                <LayoutWrapper>
                    <Header />
                    <Container>{children}</Container>
                    <Footer />
                </LayoutWrapper>
            </>
        </ThemeProvider>
    )
}

export default Layout
