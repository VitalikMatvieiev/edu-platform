import { SearchInputProps } from '../../../types/components/componentType';
import SearchIcon from '@mui/icons-material/Search';

import searchInputStyles from './_searchInput.module.scss';

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className={searchInputStyles['search-container']}>
      <SearchIcon
        className={searchInputStyles['search-icon']}
        fontSize="small"
        style={{ color: '#333334' }}
      />
      <input
        className={searchInputStyles['search-input']}
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
