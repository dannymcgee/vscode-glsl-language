import { loadTestFile } from "../testing/utility";

describe("types", () => {
	it("should work", async () => {
		let code = await loadTestFile("types.glsl");

		expect(code).toMatchSnapshot();
	});
});
