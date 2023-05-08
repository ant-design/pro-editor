import { faker } from '@faker-js/faker';

import {
  ChAddressRandom,
  DateTimeRandom,
  TextRandom,
  WebRandom,
} from '@antv/dw-random';
import type {
  DataParams,
  DateParams,
  DateTimeParams,
  NameParams,
  WebsiteParams,
} from './types';
import { toAsterisk } from './utils/asterisk';
import { randomIdcard } from './utils/idcard';

const TR = new TextRandom();
const DR = new DateTimeRandom();
const CAR = new ChAddressRandom();
const WebR = new WebRandom();

class _DataFiller {
  common() {
    return TR.cword();
  }

  name(type?: NameParams) {
    if (type === 'en') {
      return TR.name();
    }

    return TR.cname();
  }

  website(type: WebsiteParams) {
    switch (type) {
      case 'url':
        return WebR.url({ protocol: 'https' });

      case 'domain':
        return WebR.domain();

      case 'ip':
        return WebR.ipv4();
    }
  }

  mail() {
    return WebR.email();
  }

  identifier() {
    return TR.integer({ min: 100000000000, max: 999999999999 }).toString();
  }

  phone(asterisk?: boolean) {
    return TR.phone({ asterisk });
  }

  landline(asterisk?: boolean) {
    return TR.phone({ mobile: false, formatted: true, asterisk });
  }

  idCard(asterisk?: boolean) {
    const id = randomIdcard();

    return asterisk ? toAsterisk(id) : id;
  }

  bankCard(asterisk?: boolean) {
    const card = faker.finance.creditCardNumber('visa').replaceAll('-', '');

    return asterisk ? toAsterisk(card) : card;
  }

  // ====== 数据 ====== //

  percent(withDecimal?: boolean) {
    return (Math.random() * 100).toFixed(withDecimal ? 2 : 0);
  }

  money(withDecimal?: boolean) {
    return Number(faker.finance.amount()).toFixed(withDecimal ? 2 : 0);
  }

  data(type: DataParams) {
    switch (type) {
      case 'digits': {
        return faker.finance.amount(0, 10, 0);
      }
      case 'tens': {
        return faker.finance.amount(10, 99, 0);
      }
      case 'hundreds': {
        return faker.finance.amount(100, 999, 0);
      }
    }
  }

  // ====== 地址 ====== //

  address() {
    return CAR.address();
  }
  country() {
    return CAR.country();
  }
  province() {
    return CAR.province();
  }
  city() {
    return CAR.city();
  }

  // ====== 日期 ====== //
  // gitlab.alipay-inc.com/datavis/DataWizard/blob/master/packages/dw-random/src/database.ts#L115-121
  month(type: DateParams) {
    return DR.month({
      locale: type === 'zh' ? 'zh-CN' : undefined,
      abbr: type === 'abbr',
    });
  }
  week(type: DateParams) {
    return DR.weekday({
      locale: type === 'zh' ? 'zh-CN' : undefined,
      abbr: type === 'abbr',
    });
  }
  date(format) {
    return DR.datetime({ format });
  }

  dateTime(type: DateTimeParams) {
    switch (type) {
      case 'date':
        return DR.date();

      case 'dateTime':
        return DR.datetime();

      case 'time':
        return DR.time();
    }
  }
}

const DataFiller = new _DataFiller();

export default DataFiller;
