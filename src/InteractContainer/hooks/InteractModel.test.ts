import { createTestElement } from '../utils';
import { InteractModel } from './InteractModel';

// 开始之前将所有节点清理掉
beforeEach(() => {
  document.body.childNodes.forEach((n) => n.remove());
});

describe('InteractModel', () => {
  it('识别到元素', () => {
    const div = document.createElement('div');
    div.setAttribute('data-uxid', 'row');
    document.body.appendChild(div);

    const model = new InteractModel([
      { id: 'container', actions: ['hover'], selectors: ['row'] },
    ]);

    expect(model.models[0].elements).toEqual([div]);
  });

  it('指定父容器时可正常找到元素', () => {
    const container = document.createElement('div');
    container.setAttribute('id', 'container');
    document.body.appendChild(container);

    const div = document.createElement('div');
    div.setAttribute('data-uxid', 'test');
    container.appendChild(div);

    const div2 = document.createElement('div');
    div2.setAttribute('data-uxid', 'test');
    container.appendChild(div2);

    const model = new InteractModel(
      [{ id: 'container', actions: ['hover'], selectors: ['test'] }],
      container,
    );

    expect(model.models[0].elements).toEqual([div, div2]);
  });

  describe('找到相应的交互元素', () => {
    it('getHoverElements', () => {
      const hover = document.createElement('div');
      hover.setAttribute('data-uxid', 'hover');
      document.body.appendChild(hover);

      const click = document.createElement('div');
      click.setAttribute('data-uxid', 'click');
      document.body.appendChild(click);

      const model = new InteractModel([
        { id: 'hover', actions: ['hover'], selectors: ['hover'] },
        { id: 'click', actions: ['click'], selectors: ['click'] },
      ]);

      expect(model.getHoverElements()).toEqual([hover]);
    });
    it('getClickElements', () => {
      createTestElement('hover');
      const click1 = createTestElement('click-');
      const click2 = createTestElement('click-');

      const model = new InteractModel([
        { id: 'hover', actions: ['hover'], selectors: ['hover'] },
        { id: 'click', actions: ['click'], selectors: ['click-'] },
      ]);

      expect(model.getClickElements()).toEqual([click1, click2]);
    });
  });

  it('getRuleAndIndexByElement', () => {});

  describe('findElementByStatus', () => {
    it('根据status找到相应元素', () => {
      const div = document.createElement('div');
      div.setAttribute('class', 'row');
      document.body.appendChild(div);

      const model = new InteractModel([
        { id: 'container', actions: ['click'], selectors: ['.row'] },
      ]);

      const element = model.getElementByStatus({
        action: 'click',
        currentNode: {
          rule: { id: 'container', actions: ['click'], selectors: ['.row'] },
          index: 0,
        },
      });

      expect(element).toEqual(div);
    });

    it('动作不匹配时也无法找到元素', () => {
      const div = document.createElement('div');
      div.setAttribute('class', 'row');
      document.body.appendChild(div);

      const model = new InteractModel([
        { id: 'container', actions: ['click'], selectors: [] },
      ]);

      const element = model.getElementByStatus({
        action: 'hover',
        currentNode: {
          rule: { id: 'container', actions: ['click'], selectors: ['.row'] },
          index: 0,
        },
      });

      expect(element).toBeUndefined();
    });

    it('没有 rule', () => {
      const div = document.createElement('div');
      div.setAttribute('class', 'row');
      document.body.appendChild(div);

      const model = new InteractModel([]);

      const element = model.getElementByStatus({
        action: 'click',
      });

      expect(element).toBeUndefined();
    });
  });

  describe('getValidElements', () => {
    it('data-uxid', () => {
      const div = document.createElement('div');
      div.setAttribute('data-uxid', 'btn');
      document.body.appendChild(div);

      const elements = InteractModel.getValidElements({
        id: 'container',
        selectors: ['btn'],
        actions: [],
      });

      expect(elements).toEqual([div]);
    });

    it('单个class', () => {
      const div = document.createElement('div');
      div.setAttribute('class', 'row');
      document.body.appendChild(div);

      const elements = InteractModel.getValidElements({
        id: 'container',
        selectors: ['.row'],
        actions: [],
      });

      expect(elements).toEqual([div]);
    });
  });

  describe('querySelector', () => {
    it('无效元素', () => {
      createTestElement('x', 'class');

      const list = InteractModel.querySelector('x');

      expect(list).toHaveLength(0);
    });

    describe('标记方案', () => {
      it('data-uxid 有效元素', () => {
        createTestElement('row');

        const list = InteractModel.querySelector('row');

        expect(list).toHaveLength(1);
      });

      it('data-testid 有效元素', () => {
        createTestElement('row', 'data-testid');
        const list = InteractModel.querySelector('row');

        expect(list).toHaveLength(1);
      });
    });

    describe('CSS Query 方案', () => {
      it('单个类选择', () => {
        const div = document.createElement('div');
        div.setAttribute('class', 'row');
        document.body.appendChild(div);

        const list = InteractModel.querySelector('.row');

        expect(list).toHaveLength(1);
      });
      it('混合选择', () => {
        const th = document.createElement('th');
        th.setAttribute('class', 'test');
        document.body.appendChild(th);

        const list = InteractModel.querySelector('th.test');

        expect(list).toHaveLength(1);
      });
      it('多个类选择', () => {
        const div = document.createElement('div');
        div.setAttribute('class', 'light space');
        document.body.appendChild(div);

        const list = InteractModel.querySelector('.light.space');

        expect(list).toHaveLength(1);
      });
    });
  });
});
