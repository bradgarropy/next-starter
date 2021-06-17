import Meta from "components/Meta"
import {mockMeta} from "test-utils/mocks"
import {render} from "test-utils/render"

import config from "../../../package.json"

test("includes meta", () => {
    render(<Meta title={mockMeta.title} />)

    expect(document.title).toEqual(mockMeta.title)

    const description = document
        .querySelector("meta[name='description']")
        .getAttribute("content")

    expect(description).toEqual(config.description)

    const keywords = document
        .querySelector("meta[name='keywords']")
        .getAttribute("content")

    expect(keywords).toEqual(config.keywords.join(", "))
})
