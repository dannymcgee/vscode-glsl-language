import { loadTestFile } from "../testing/utility";

describe("simple", () => {
	it("should work", async () => {
		let code = await loadTestFile("simple.glsl");

		expect(code).toMatchSnapshot();
	});
});
