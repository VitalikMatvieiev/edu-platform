import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import * as model from '../../shared/model';
import './extendedFilter.scss';

import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import React from 'react';

const SortingNew: React.FC = () => {
  const dispatch = useAppDispatch();
  const sortBy = useAppSelector((state) => state.courses.sortBy);
  const order = useAppSelector((state) => state.courses.order);
  //   const courses = useAppSelector((state) => state.courses.courses);

  const handleChange = (event: { target: { value: any } }) => {
    const value = event.target.value;
    switch (value) {
      case 'price-asc':
        dispatch(model.courses.sortByPriceAsc());
        break;
      case 'price-desc':
        dispatch(model.courses.sortByPriceDesc());
        break;
      case 'rating-asc':
        dispatch(model.courses.sortByRatingAsc());
        break;
      case 'rating-desc':
        dispatch(model.courses.sortByRatingDesc());
        break;
      default:
        dispatch(model.courses.sortByPriceAsc());
        break;
    }
  };

  return (
    <>
      <FormControl size="small" sx={{ minWidth: 150, m: 1 }}>
        <InputLabel id="sort-select-label">Sort by:</InputLabel>
        <Select
          labelId="sort-select-label"
          id="sort-select"
          label="Sort by"
          onChange={handleChange}
          value={`${sortBy}-${order}`}
          placeholder="Sort By"
          sx={{ borderRadius: '30px' }}
        >
          <MenuItem value="price-asc">Price (Ascending)</MenuItem>
          <MenuItem value="price-desc">Price (Descending)</MenuItem>
          <MenuItem value="rating-asc">Rating (Ascending)</MenuItem>
          <MenuItem value="rating-desc">Rating (Descending)</MenuItem>
        </Select>
      </FormControl>
    </>
  );
};

export default SortingNew;
