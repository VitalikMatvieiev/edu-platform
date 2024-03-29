import React, { useEffect, useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import './extendedFilter.scss';
import { DetailsOfCourse } from '../../types/components/componentType';

const Sorting: React.FC = () => {
  const [sortBy, setSortBy] = useState<string>('rating');
  const [data, setData] = useState<DetailsOfCourse[] | undefined>(undefined);

  const sortOptions: { label: string; value: keyof DetailsOfCourse }[] = [
    { label: 'Rating', value: 'rating' },
    { label: 'Most Popular', value: 'popularity' },
    { label: 'Newest', value: 'date' },
    { label: 'Price', value: 'price' },
  ];

  //add api
  useEffect(() => {}, [sortBy]);

  const applySorting = (sortBy: keyof DetailsOfCourse) => {
    const sortedData = [...(data || [])];

    if (sortBy === 'rating' || sortBy === 'popularity' || sortBy === 'price') {
      sortedData.sort((a, b) => a[sortBy] - b[sortBy]);
    } else if (sortBy === 'date') {
      sortedData.sort((a, b) => Date.parse(a.date) - Date.parse(b.date));
    }

    setData(sortedData);
  };

  const handleSortChange = (event: SelectChangeEvent<string>) => {
    const value = event.target.value as keyof DetailsOfCourse;
    setSortBy(value);
    applySorting(value);
  };

  return (
    <>
      <FormControl sx={{ minWidth: 150, height: '20px' }}>
        <InputLabel id="demo-simple-select-helper-label">Sort by:</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          label="Sort by"
          onChange={handleSortChange}
          placeholder="Sort By"
          sx={{ borderRadius: '30px' }}
        >
          {sortOptions.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label} (Ascending)
            </MenuItem>
          ))}
          {sortOptions.map((option) => (
            <MenuItem key={`-${option.value}`} value={`-${option.value}`}>
              {option.label} (Descending)
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      {/* Add the sorted list */}
      {/* <ul>
        {data?.map((item) => (
          <li key={item.name}>
            {item.name} - Rating: {item.rating}, Popularity: {item.popularity},
            Date: {item.date}, Price: {item.price}
          </li>
        ))}
      </ul> */}
    </>
  );
};

export default Sorting;