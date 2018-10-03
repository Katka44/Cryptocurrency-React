export const handleFilterFunc = (data, string) => {
  const filteredData = data.filter(
    element => (element.name.toLowerCase().includes(string.toLowerCase())
      || element.symbol.toLowerCase().includes(string.toLowerCase())),
  );
  return filteredData;
};

export const sortName = (data, order) => {
  const sortedArray = order === 'ascending'
    ? data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return (nameA > nameB) ? 1 : -1;
    })
    : data.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return (nameA > nameB) ? -1 : 1;
    });
  return sortedArray;
};

export const sortValue = (data, order, category) => {
  const sortedArray = order === 'ascending' ? data.sort((a, b) => a[category] - b[category]) : data.sort((a, b) => b[category] - a[category]);
  return sortedArray;
};

export const displayCategory = (category) => {
  switch (category) {
    case 'name':
    case 'rank':
      return category;
    case 'price_usd':
      return 'price';
    case 'percent_change_24h':
      return 'performance';
    default:
      return null;
  }
};

export const isEnoughSpace = (coordX, gap, div) => {
  const html = window.innerWidth;
  const scrollbar = 16;
  const spaceNeeded = (gap + div);
  if ((coordX + spaceNeeded) <= html - scrollbar) {
    return true;
  }
  return false;
};

export const left = (divSize, coordX, gap) => {
  const pointer = coordX;
  const div = divSize;
  if (isEnoughSpace(coordX, gap, div)) {
    return Number(pointer + gap);
  }
  return Number(pointer - gap - divSize);
};

export const addPlus = (number) => {
  if (Number(number) > 0) {
    return `+${number}`;
  }
  return number;
};

export const getPerformanceClass = (performance) => {
  if (performance <= -5) {
    return ' minusFive';
  }
  if (performance <= -3) {
    return ' minusThree';
  }
  if (performance <= -1) {
    return ' minusOne';
  }
  if (performance <= 1) {
    return ' zero';
  }
  if (performance <= 3) {
    return ' plusOne';
  }
  if (performance <= 5) {
    return ' plusThree';
  }
  return ' plusFive';
};

export const getSizeClass = (marketCap) => {
  if (marketCap <= 1000) {
    return ' sizeZero';
  }
  if (marketCap <= 10000) {
    return ' sizeThousand';
  }
  if (marketCap <= 100000) {
    return ' sizeTenThousand';
  }
  if (marketCap <= 1000000) {
    return ' sizeHundredThousand';
  }
  if (marketCap <= 10000000) {
    return ' sizeMillion';
  }
  if (marketCap <= 100000000) {
    return ' sizeTenMillion';
  }
  if (marketCap <= 1000000000) {
    return ' sizeHundredMillion';
  }
  if (marketCap <= 10000000000) {
    return ' sizeBillion';
  }
  if (marketCap <= 100000000000) {
    return ' sizeTenBillion';
  }
  return ' sizeHundredBillion';
};
