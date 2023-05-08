// 根据前17位生成末位
// 生成随机数字，max限制最大值，base限制最小值
function getRandom(max, base?: number) {
  return Math.floor(Math.random() * max + (base ? base : 0));
}

// 根据前17位生成末位
function cnNewID(idcard) {
  const arrExp = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; // 加权因子
  const arrValid = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]; // 校验码
  let sum = 0;

  for (let j = 0; j < 17; j++) {
    // 对前17位数字与权值乘积求和
    sum += parseInt(idcard[j], 10) * arrExp[j];
  }
  return arrValid[sum % 11];
}

// 生成身份证号
export const randomIdcard = () => {
  let idcard = '';
  for (let i = 0; i < 18; i++) {
    if (i < 6) {
      idcard += getRandom(10);
    } else if (i === 6) {
      idcard += getRandom(2, 1); //年份第一位仅支持1和2
    } else if (i === 7) {
      idcard += idcard[6] === '1' ? 9 : 0; //两位年份规则，仅支持19和20
    } else if (i === 8) {
      idcard += idcard[6] === '1' ? getRandom(7, 3) : getRandom(2); //三位年份规则，仅支持193-199、200、201这些值
    } else if (i === 9) {
      idcard += getRandom(10); //四位年份规则,0-9
    } else if (i === 10) {
      idcard += getRandom(2); //首位月份规则
    } else if (i === 11) {
      idcard += idcard[10] === '0' ? getRandom(9, 1) : getRandom(3); //末位月份规则
    } else if (i === 12) {
      const maxDays = new Date(
        Number(idcard.substr(6, 4)),
        Number(idcard.substr(10, 2)),
        0,
      ).getDate(); // 获取当月最大天数
      const day = getRandom(maxDays, 1);
      idcard += day < 10 ? '0' + day : day;
      i++;
    } else if (i > 13 && i < 17) {
      idcard += getRandom(10);
    } else if (i === 17) {
      idcard += cnNewID(idcard);
    }
  }
  return idcard;
};
