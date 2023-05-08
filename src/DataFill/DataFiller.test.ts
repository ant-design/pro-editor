import DataFiller from './DataFiller';

describe('DataFiller', () => {
  it('通用类文本', () => {
    expect(DataFiller.common().length).toBeLessThanOrEqual(10);
  });
  describe('名字', () => {
    it('中文名', () => {
      const cname = DataFiller.name();
      expect(cname.length).toBeGreaterThanOrEqual(2);
      expect(cname.length).toBeLessThanOrEqual(4);
    });
    it('英文名', () => {
      const name = DataFiller.name('en');
      expect(name.split(' ')).toHaveLength(2);
    });
  });
  it('网址相关', () => {
    const url = DataFiller.website('url');
    expect(url.startsWith('http')).toBeTruthy();

    const domain = DataFiller.website('domain');
    const domainLength = domain.split('.').length;
    expect(domainLength).toBeGreaterThanOrEqual(2);
    expect(domainLength).toBeLessThanOrEqual(4);

    const ip = DataFiller.website('ip');
    expect(ip.split('.')).toHaveLength(4);
  });

  it('邮件', () => {
    expect(DataFiller.mail().split('@')).toHaveLength(2);
  });

  describe('编号相关', () => {
    it('编号', () => {
      const identifier = DataFiller.identifier();
      expect(identifier.length).toEqual(12);
    });

    it('手机号', () => {
      const phone = DataFiller.phone();
      expect(phone.length).toEqual(11);
      const phoneAst = DataFiller.phone(true);
      expect(phoneAst.length).toEqual(11);
      expect(phoneAst.includes('****')).toBeTruthy();
    });
  });

  describe('数据', () => {
    it('百分比', () => {
      const percent = DataFiller.percent();
      expect(percent.length).toBeLessThanOrEqual(3);
      const percentWithDec = DataFiller.percent(true);
      expect(percentWithDec.length).toBeGreaterThanOrEqual(4);
      expect(percentWithDec.length).toBeLessThanOrEqual(6);
    });
  });

  describe('地址', () => {
    it('完整地址', () => {
      const addr = DataFiller.address();
      expect(addr).toBeDefined();
    });
    it('国家', () => {
      const country = DataFiller.country();
      expect(country).toBeDefined();
    });
    it('省份', () => {
      const province = DataFiller.province();
      expect(province).toBeDefined();
    });
    it('城市', () => {
      const city = DataFiller.city();
      expect(city).toBeDefined();
    });
  });
});
