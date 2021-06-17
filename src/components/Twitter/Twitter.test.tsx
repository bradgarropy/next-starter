import Twitter from "components/Twitter"
import {mockTwitter} from "test-utils/mocks"
import {render} from "test-utils/render"

test("includes twitter meta", () => {
    render(
        <Twitter
            card={mockTwitter.card}
            site={mockTwitter.site}
            title={mockTwitter.title}
            description={mockTwitter.description}
            image={mockTwitter.image}
        />,
    )

    Object.keys(mockTwitter).forEach(key => {
        const meta = document.querySelector(`meta[name='twitter:${key}']`)
        const content = meta.getAttribute("content")

        expect(content).toEqual(mockTwitter[key])
    })
})

test("includes default twitter meta", () => {
    render(<Twitter />)

    Object.keys(mockTwitter).forEach(key => {
        const meta = document.querySelector(`meta[name='twitter:${key}']`)
        const content = meta.getAttribute("content")

        expect(content).toEqual(mockTwitter[key])
    })
})
