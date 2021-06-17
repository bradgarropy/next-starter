import Facebook from "components/Facebook"
import {mockFacebook} from "test-utils/mocks"
import {render} from "test-utils/render"

test("includes facebook meta", () => {
    render(
        <Facebook
            url={mockFacebook.url}
            type={mockFacebook.type}
            title={mockFacebook.title}
            description={mockFacebook.description}
            image={mockFacebook.image}
        />,
    )

    Object.keys(mockFacebook).forEach(key => {
        const meta = document.querySelector(`meta[property='og:${key}']`)
        const content = meta.getAttribute("content")

        expect(content).toEqual(mockFacebook[key])
    })
})

test("includes default facebook meta", () => {
    render(<Facebook />)

    Object.keys(mockFacebook).forEach(key => {
        const meta = document.querySelector(`meta[property='og:${key}']`)
        const content = meta.getAttribute("content")

        expect(content).toEqual(mockFacebook[key])
    })
})
