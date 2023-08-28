import hash from 'object-hash';

export const genUniqueID = (item, index) => {
  return `columnlist_${index}_${hash(item).slice(-6)}`;
};
