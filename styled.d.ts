import "styled-components"

declare module "styled-components" {
    export interface DefaultTheme {
        colors: {
            white: string
            offWhite: string
            gray: string
            offBlack: string
            black: string
        }
    }
}
