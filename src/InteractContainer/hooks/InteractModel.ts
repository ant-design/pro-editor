import isEqual from 'lodash.isequal';
import type {
  CanvasInteractModel,
  CanvasInteractRule,
  ContainerNode,
  InteractionType,
  InteractStatus,
} from '../type';

/**
 * 约定标识符
 */
const SELECTOR_IDENTIFIERS = ['data-uxid', 'data-testid'];

export class InteractModel {
  rules: CanvasInteractRule[];

  models: CanvasInteractModel[];

  container: ContainerNode;

  constructor(rules, container: ContainerNode = document) {
    this.rules = rules;
    this.container = container;

    this.initModels();
  }

  get totalValidElements() {
    return this.getMatchedElements().length;
  }

  /**
   * 初始化模型
   */
  initModels() {
    this.models = this.rules.map((r) => ({
      ...r,
      elements: InteractModel.getValidElements(r, this.container),
      containerMatched: this.isMatchContainer(r),
    }));
  }

  /**
   * 获取规则与元素索引值
   * @param element
   */
  getRuleAndIndexByElement(element: Element) {
    let index = -1;

    const ruleIndex = this.models.findIndex((r) => {
      const i = r.elements.findIndex((e) => isEqual(e, element));
      if (i > -1) {
        index = i;
      }
      return i > -1;
    });

    const rule = this.rules[ruleIndex];

    if (rule) return { index, rule };

    if (element.parentElement)
      return this.getRuleAndIndexByElement(element.parentElement);
  }

  /**
   * 获取所有的支持hover的元素
   */
  getHoverElements() {
    return this.getMatchedElements('hover');
  }

  /**
   * 获取所有的支持点击的元素
   */
  getClickElements() {
    return this.getMatchedElements('click');
  }

  /**
   * 获取匹配的元素类型
   * @param action
   */
  getMatchedElements(action?: InteractionType) {
    return this.models
      .filter((i) => (!action ? i : i.actions.includes(action)))
      .map((e) => e.elements)
      .flat()
      .filter((o) => o);
  }

  /**
   * 根据 status 值找到元素
   */
  getElementByStatus(status: InteractStatus): HTMLElement {
    const node = status.currentNode ?? status.activeNode;

    if (!node) return;
    const { rule, index } = node;

    const model = this.models.find(
      (m) => m.id === rule.id && m.actions.includes(status.action),
    );

    if (!model) return;

    return model.elements[index] as HTMLElement;
  }

  /**
   * 获取规则匹配的所有元素
   */
  static getValidElements(
    rule: CanvasInteractRule,
    container: ContainerNode = document,
  ) {
    return rule.selectors
      .map((s) => this.querySelector(s, container))
      .map((i) => Array.from(i.values()))
      .flat();
  }

  /**
   * 使用三重选择器做判断
   * @param container
   * @param selector
   * @private
   */
  static querySelector(
    selector: string,
    container: Document | Element = document,
  ) {
    // 先用约定标识符
    for (const id of SELECTOR_IDENTIFIERS) {
      const eles = container.querySelectorAll(`[${id}="${selector}"]`);
      if (eles.length > 0) return eles;
    }

    // 再用 css 选择器
    return container.querySelectorAll(selector);
  }

  /**
   * 判断是否匹配容器本身
   * @param rule
   */
  isMatchContainer(rule: CanvasInteractRule) {
    if (isEqual(this.container, document)) return false;

    return rule.selectors.some((s) => {
      const array = InteractModel.querySelector(s);

      return array.length > 0;
    });
  }

  initListener = (
    ele: Element[] | ContainerNode,
    type: keyof GlobalEventHandlersEventMap,
    method,
  ) => {
    if (ele instanceof Array) {
      return {
        register: () => {
          ele.forEach((e) => {
            e.addEventListener(type, method);
          });
        },
        unRegister: () => {
          ele.forEach((e) => {
            e.removeEventListener(type, method);
          });
        },
      };
    } else {
      return {
        register: () => ele.addEventListener(type, method),
        unRegister: () => ele.removeEventListener(type, method),
      };
    }
  };

  getClickListeners(onClick) {
    const elements = this.getClickElements();

    return this.initListener(elements, 'click', onClick);
  }

  getHoverListeners(onHover, onUnhover) {
    const elements = this.getHoverElements();

    const hoverFn = this.initListener(elements, 'mouseenter', onHover);
    const unhoverFn = this.initListener(elements, 'mouseleave', onUnhover);

    return {
      register: () => {
        hoverFn.register();
        unhoverFn.register();
      },
      unRegister: () => {
        hoverFn.unRegister();
        unhoverFn.unRegister();
      },
    };
  }

  /**
   * 将相应的一些交互事件监听方法进行注册
   * @param click
   * @param hover
   */
  getInteractListeners({
    click,
    hover,
  }: {
    click;
    hover: { onHoverStart; onHoverEnd };
  }) {
    const clickFn = this.getClickListeners(click);
    const hoverFn = this.getHoverListeners(
      hover.onHoverStart,
      hover.onHoverEnd,
    );

    return {
      register: () => {
        clickFn.register();
        hoverFn.register();
      },
      unRegister: () => {
        clickFn.unRegister();
        hoverFn.unRegister();
      },
    };
  }
}
