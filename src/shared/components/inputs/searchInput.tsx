import { SearchInputProps } from '../../../types/components/componentType';
import './_searchInput.scss';

import SearchIcon from '@mui/icons-material/Search';

export const SearchInput: React.FC<SearchInputProps> = ({
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="search-container">
      <SearchIcon
        className="search-icon"
        fontSize="small"
        style={{ color: '#333334' }}
      />
      <input
        className="search-input"
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
