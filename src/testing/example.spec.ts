import { loadTestFile } from '../testing/utility';

describe('example', () => {
	it('should work', async () => {
		let code = await loadTestFile('example.glsl');

		expect(code).toMatchSnapshot();
	});
});
