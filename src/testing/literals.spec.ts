import { loadTestFile } from "../testing/utility";

describe("literals", () => {
	it("should work", async () => {
		let code = await loadTestFile("literals.glsl");

		expect(code).toMatchSnapshot();
	});
});
