import { getContainerElement } from './utils';

describe('getContainerElement', () => {
  it('获取document', () => {
    expect(getContainerElement()).toEqual(document);
  });
});
