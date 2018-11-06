import {
  handleFilterFunc,
  sortName,
  sortValue,
  displayCategory,
  isEnoughSpace,
  left,
  addPlus,
  getPerformanceClass,
  getSizeClass,
} from '../handlers';

describe('handlers', () => {
  describe('handleFilterFunc', () => {
    it('should return filtered array of data', () => {
      const data = [
        { name: 'Bitcoin', symbol: 'BTC' },
        { name: 'Ethereum', symbol: 'ETH' },
      ];
      const string = 'et';
      const result = [{ name: 'Ethereum', symbol: 'ETH' }];
      expect(handleFilterFunc(data, string)).toEqual(result);
    });
  });
  describe('sortName', () => {
    describe('nameA > nameB', () => {
      let data;
      beforeEach(() => {
        data = [
          { name: 'Ethereum', symbol: 'ETH' },
          { name: 'Bitcoin', symbol: 'BTC' },
        ];
      });
      it('should return sorted array by name in ascending order', () => {
        const order = 'ascending';
        const result = [
          { name: 'Bitcoin', symbol: 'BTC' },
          { name: 'Ethereum', symbol: 'ETH' },
        ];
        expect(sortName(data, order)).toEqual(result);
      });
      it('should return sorted array by name in descending order', () => {
        const order = 'descending';
        const result = [
          { name: 'Ethereum', symbol: 'ETH' },
          { name: 'Bitcoin', symbol: 'BTC' },
        ];
        expect(sortName(data, order)).toEqual(result);
      });
    });
    describe('nameB > nameA', () => {
      let data;
      beforeEach(() => {
        data = [
          { name: 'Bitcoin', symbol: 'BTC' },
          { name: 'Ethereum', symbol: 'ETH' },
        ];
      });
      it('should return sorted array by name in ascending order', () => {
        const order = 'ascending';
        const result = [
          { name: 'Bitcoin', symbol: 'BTC' },
          { name: 'Ethereum', symbol: 'ETH' },
        ];
        expect(sortName(data, order)).toEqual(result);
      });
      it('should return sorted array by name in descending order', () => {
        const order = 'descending';
        const result = [
          { name: 'Ethereum', symbol: 'ETH' },
          { name: 'Bitcoin', symbol: 'BTC' },
        ];
        expect(sortName(data, order)).toEqual(result);
      });
    });
  });
  describe('sortValue', () => {
    describe('rankB > rankA', () => {
      const data = [
        { name: 'Bitcoin', rank: 1 },
        { name: 'Ethereum', rank: 2 },
      ];
      it('should return sorted array by value in ascending order, rankB > rankA', () => {
        const order = 'ascending';
        const category = 'rank';
        const result = [
          { name: 'Bitcoin', rank: 1 },
          { name: 'Ethereum', rank: 2 },
        ];
        expect(sortValue(data, order, category)).toEqual(result);
      });
      it('should return sorted array by value in descending order, rankB > rankA', () => {
        const order = 'descending';
        const category = 'rank';
        const result = [
          { name: 'Ethereum', rank: 2 },
          { name: 'Bitcoin', rank: 1 },
        ];
        expect(sortValue(data, order, category)).toEqual(result);
      });
    });
    describe('rankA > rankB', () => {
      const data = [
        { name: 'Ethereum', rank: 2 },
        { name: 'Bitcoin', rank: 1 },
      ];
      it('should return sorted array by value in ascending order, rankA > rankB', () => {
        const order = 'ascending';
        const category = 'rank';
        const result = [
          { name: 'Bitcoin', rank: 1 },
          { name: 'Ethereum', rank: 2 },
        ];
        expect(sortValue(data, order, category)).toEqual(result);
      });
      it('should return sorted array by value in descending order, rankA > rankB', () => {
        const order = 'descending';
        const category = 'rank';
        const result = [
          { name: 'Ethereum', rank: 2 },
          { name: 'Bitcoin', rank: 1 },
        ];
        expect(sortValue(data, order, category)).toEqual(result);
      });
    });
  });
  describe('displayCategory', () => {
    it('should return correct string "name"', () => {
      const category = 'name';
      expect(displayCategory(category)).toEqual('name');
    });
    it('should return correct string "rank"', () => {
      const category = 'rank';
      expect(displayCategory(category)).toEqual('rank');
    });
    it('should return correct string "price"', () => {
      const category = 'price_usd';
      expect(displayCategory(category)).toEqual('price');
    });
    it('should return correct string "performance"', () => {
      const category = 'percent_change_24h';
      expect(displayCategory(category)).toEqual('performance');
    });
    it('should return null if category is not recognized', () => {
      const category = '';
      expect(displayCategory(category)).toEqual(null);
    });
  });
  describe('isEnoughSpace', () => {
    it('should return true if there is enough space', () => {
      const coordX = 0;
      const gap = 100;
      const div = 250;
      expect(isEnoughSpace(coordX, gap, div)).toEqual(true);
    });
    it('should return false if there is not enough space', () => {
      const coordX = 2000;
      const gap = 100;
      const div = 2500;
      expect(isEnoughSpace(coordX, gap, div)).toEqual(false);
    });
  });
  describe('left', () => {
    it('should return the X coordinate of Tooltip if isEnoughSpace', () => {
      const divSize = 250;
      const coordX = 0;
      const gap = 100;
      expect(left(divSize, coordX, gap)).toEqual(100);
    });
    it('should return the X coordinate of Tooltip if !isEnoughSpace', () => {
      const divSize = 250;
      const coordX = 2000;
      const gap = 100;
      expect(left(divSize, coordX, gap)).toEqual(1650);
    });
  });
  describe('addPlus', () => {
    it('should return a string with added plus symbol if number is positive', () => {
      const number = 1;
      expect(addPlus(number)).toEqual('+1');
    });
    it('should return number if number is negative', () => {
      const number = -1;
      expect(addPlus(number)).toEqual(-1);
    });
  });
  describe('getPerformanceClass', () => {
    it('should return "minus-five" if performance is <= -5', () => {
      const performance = -6;
      expect(getPerformanceClass(performance)).toEqual('minus-five');
    });
    it('should return "minus-three" if performance is > -5 and <= -3', () => {
      const performance = -4;
      expect(getPerformanceClass(performance)).toEqual('minus-three');
    });
    it('should return "minus-one" if performance is > -3 and <= -1', () => {
      const performance = -2;
      expect(getPerformanceClass(performance)).toEqual('minus-one');
    });
    it('should return "zero" if performance is > -1 and <= 1', () => {
      const performance = 0;
      expect(getPerformanceClass(performance)).toEqual('zero');
    });
    it('should return "plus-one" if performance is > 1 and <= 3', () => {
      const performance = 2;
      expect(getPerformanceClass(performance)).toEqual('plus-one');
    });
    it('should return "plus-three" if performance is > 3 and <= 5', () => {
      const performance = 4;
      expect(getPerformanceClass(performance)).toEqual('plus-three');
    });
    it('should return "plus-five" if performance is > 5', () => {
      const performance = 6;
      expect(getPerformanceClass(performance)).toEqual('plus-five');
    });
  });
  describe('getSizeClass', () => {
    it('should return "size-zero" if marketCap is <= 1000', () => {
      const marketCap = 950;
      expect(getSizeClass(marketCap)).toEqual('size-zero');
    });
    it('should return "size-thousand" if marketCap is > 1000 and <= 10000', () => {
      const marketCap = 9500;
      expect(getSizeClass(marketCap)).toEqual('size-thousand');
    });
    it('should return "size-ten-thousand" if marketCap is > 10000 and <= 100000', () => {
      const marketCap = 95000;
      expect(getSizeClass(marketCap)).toEqual('size-ten-thousand');
    });
    it('should return "size-hundred-thousand" if marketCap is > 100000 and <= 1000000', () => {
      const marketCap = 950000;
      expect(getSizeClass(marketCap)).toEqual('size-hundred-thousand');
    });
    it('should return "size-million" if marketCap is > 1000000 and <= 10000000', () => {
      const marketCap = 9500000;
      expect(getSizeClass(marketCap)).toEqual('size-million');
    });
    it('should return "size-ten-million" if marketCap is > 10000000 and <= 100000000', () => {
      const marketCap = 95000000;
      expect(getSizeClass(marketCap)).toEqual('size-ten-million');
    });
    it('should return "size-hundred-million" if marketCap is > 100000000 and <= 1000000000', () => {
      const marketCap = 950000000;
      expect(getSizeClass(marketCap)).toEqual('size-hundred-million');
    });
    it('should return "size-billion" if marketCap is > 1000000000 and <= 10000000000', () => {
      const marketCap = 9500000000;
      expect(getSizeClass(marketCap)).toEqual('size-billion');
    });
    it('should return "size-ten-billion" if marketCap is > 10000000000 and <= 100000000000', () => {
      const marketCap = 95000000000;
      expect(getSizeClass(marketCap)).toEqual('size-ten-billion');
    });
    it('should return "size-hundred-billion" if marketCap is > 100000000000', () => {
      const marketCap = 950000000000;
      expect(getSizeClass(marketCap)).toEqual('size-hundred-billion');
    });
  });
});
