import { toAsterisk } from './asterisk';

test('toAsterisk', () => {
  expect(toAsterisk('427074440475')).toEqual('4270****0475');
});
