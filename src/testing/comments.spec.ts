import { loadTestFile } from "../testing/utility";

describe("comments", () => {
	it("should work", async () => {
		let code = await loadTestFile("comments.glsl");

		expect(code).toMatchSnapshot();
	});
});
