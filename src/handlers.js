export const handleFilterFunc = (data, string) => {
  const filteredData = data.filter(
    element => (element.name.toLowerCase().includes(string.toLowerCase())
      || element.symbol.toLowerCase().includes(string.toLowerCase())),
  );
  return filteredData;
};

export const sortName = (data, order) => {
  const sortedArray = order === 'ascending'
    ? [...data].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return (nameA > nameB) ? 1 : -1;
    })
    : [...data].sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      return (nameA > nameB) ? -1 : 1;
    });
  return sortedArray;
};

export const sortValue = (data, order, category) => {
  const sortedArray = order === 'ascending' ? [...data].sort((a, b) => a[category] - b[category]) : [...data].sort((a, b) => b[category] - a[category]);
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
  return Number(pointer - gap - divSize) || 120;
};

export const addPlus = (number) => {
  if (Number(number) > 0) {
    return `+${number}`;
  }
  return number;
};

export const getPerformanceClass = (performance) => {
  if (performance <= -5) {
    return 'minus-five';
  }
  if (performance <= -3) {
    return 'minus-three';
  }
  if (performance <= -1) {
    return 'minus-one';
  }
  if (performance <= 1) {
    return 'zero';
  }
  if (performance <= 3) {
    return 'plus-one';
  }
  if (performance <= 5) {
    return 'plus-three';
  }
  return 'plus-five';
};

export const addCardToString = string => `${string}-card`;

export const addListToString = string => `${string}-list`;


export const getSizeClass = (marketCap) => {
  if (marketCap <= 1000) {
    return 'size-zero';
  }
  if (marketCap <= 10000) {
    return 'size-thousand';
  }
  if (marketCap <= 100000) {
    return 'size-ten-thousand';
  }
  if (marketCap <= 1000000) {
    return 'size-hundred-thousand';
  }
  if (marketCap <= 10000000) {
    return 'size-million';
  }
  if (marketCap <= 100000000) {
    return 'size-ten-million';
  }
  if (marketCap <= 1000000000) {
    return 'size-hundred-million';
  }
  if (marketCap <= 10000000000) {
    return 'size-billion';
  }
  if (marketCap <= 100000000000) {
    return 'size-ten-billion';
  }
  return 'size-hundred-billion';
};
