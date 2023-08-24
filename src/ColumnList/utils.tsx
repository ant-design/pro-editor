export const genUniqueID = (index) => {
  return `columnlist_${index}_${Math.floor(Math.random() * 10000)}_${Date.now()}`;
};
