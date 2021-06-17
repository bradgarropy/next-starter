import "jest-styled-components"
import "@testing-library/jest-dom"
import "regenerator-runtime/runtime"

jest.mock(
    "next/head",
    () =>
        function Head({children}) {
            return <>{children}</>
        },
)
