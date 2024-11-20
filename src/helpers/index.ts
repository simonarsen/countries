export const handleSearch = (searchValue: string, searchBy: string[]) => {
  for (let i = 0; i < searchBy.length; i++) {
    if (searchBy[i].toLowerCase().includes(searchValue)) return true;
  }
  return false;
};
