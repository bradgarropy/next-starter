import Link from "next/link"
import {FC} from "react"
import styled from "styled-components"

const NavigationWrapper = styled.nav`
    display: grid;
    grid-auto-flow: column;
    justify-content: space-between;
`

const NavigationLink = styled.a`
    color: ${({theme}) => theme.colors.gray};
    cursor: pointer;
    text-decoration: none;

    &:hover {
        color: ${({theme}) => theme.colors.offBlack};
    }
`

const Navigation: FC = () => {
    return (
        <NavigationWrapper>
            <Link href="/" passHref>
                <NavigationLink>Home</NavigationLink>
            </Link>

            <Link href="/about" passHref>
                <NavigationLink>About</NavigationLink>
            </Link>
        </NavigationWrapper>
    )
}

export default Navigation
