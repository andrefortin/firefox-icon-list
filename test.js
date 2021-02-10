const firefoxIconList = require('.');

describe('firefox icons', () => {
	test('firefox icons count', async () => {
		expect(firefoxIconList().length).toBe(5);
	});
});
