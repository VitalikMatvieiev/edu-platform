import { useAppDispatch, useAppSelector } from '../../shared/model/store';
import {
  InstructorCount,
  CategoryCount,
  LevelCount,
  CourseData,
} from '../../types/components/componentType';
import {
  getInstructorCounts,
  getCategoryCounts,
  getLevelCounts,
} from '../../shared/helpers/courses';
import './_sideFilterNew.scss';

import * as model from '../../shared/model/';

import { useEffect, useState } from 'react';
import {
  FormControlLabel,
  InputAdornment,
  TextField,
  FormGroup,
  Checkbox,
  Slider,
} from '@mui/material';
import { CourseCard } from '../course-card';

interface Filters {
  priceRangeValue: number[];
  selectedInstructors: string[];
  selectedCategories: string[];
  selectedLevels: string[];
}

export const SideFilterNew: React.FC = () => {
  const data = useAppSelector((state) => state.courses.courses);
  const dispatch = useAppDispatch();

  // Example usage
  const instructorCounts: InstructorCount[] = getInstructorCounts(data);
  const categoryCounts: CategoryCount[] = getCategoryCounts(data);
  const levelCounts: LevelCount[] = getLevelCounts(data);

  const minPrice: number = 0;
  const maxPrice: number = 1000;

  const [priceRangeValue, setPriceRangeValue] = useState<number[]>([0, 1000]);
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const handleApply = () => {
    try {
      const filters: Filters = {
        priceRangeValue,
        selectedInstructors,
        selectedCategories,
        selectedLevels,
      };

      const filteredData = data.filter((item) => {
        const instructorMatch =
          filters.selectedInstructors.length === 0 ||
          filters.selectedInstructors.some(
            (instructor) => instructor === item.instructor,
          );

        const levelMatch =
          filters.selectedLevels.length === 0 ||
          filters.selectedLevels.some((level) => level === item.level);

        const categoryMatch =
          filters.selectedCategories.length === 0 ||
          filters.selectedCategories.some(
            (category) => category === item.category,
          );

        const priceMatch =
          item.price >= filters.priceRangeValue[0] &&
          item.price <= filters.priceRangeValue[1];

        return instructorMatch && levelMatch && priceMatch && categoryMatch;
      });

      console.log(filteredData);

      // useEffect(() => {
      //   // add data to Redux
      //   dispatch(model.filteredCourses.setFilteredCourses(filteredData));
      // }, [dispatch, filteredData]);
    } catch (err: any) {
      console.error(`Error in apply filter: ${err}`);
    }
  };

  const handleSelectInstructors = (instructor: string) => {
    setSelectedInstructors((prevState): string[] => {
      if (prevState.includes(instructor)) {
        return prevState.filter((i) => i !== instructor);
      } else {
        return [...prevState, instructor];
      }
    });
  };

  const handleSelectCategories = (category: string) => {
    setSelectedCategories((prevState): string[] => {
      if (prevState.includes(category)) {
        return prevState.filter((i) => i !== category);
      } else {
        return [...prevState, category];
      }
    });
  };

  const handleSelectLevels = (level: string) => {
    setSelectedLevels((prevState): string[] => {
      if (prevState.includes(level)) {
        return prevState.filter((i) => i !== level);
      } else {
        return [...prevState, level];
      }
    });
  };

  const handlePriceRangeChange = (
    _event: Event,
    newValue: number | number[],
  ) => {
    setPriceRangeValue(newValue as number[]);
  };

  return (
    <div className="side-filter-container">
      {/* <div>
        {filterData.map((course: any) => (
          <CourseCard
            key={course.id}
            id={course.id}
            category={course.category}
            rating={course.rating}
            level={course.level}
            price={course.price}
            name={course.name}
            photoUrl={course.photoUrl}
            instructor={course.instructor}
          />
        ))}
      </div> */}
      <span className="filter-range">Duration range</span>
      <div className="inputs-price-container">
        <TextField
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#cbc5c5',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#cbc5c5',
              },
            },
          }}
          type="number"
          variant="outlined"
          size="small"
          value={priceRangeValue[0]}
          onChange={(e) => {
            setPriceRangeValue([Number(e.target.value), priceRangeValue[1]]);
          }}
          InputProps={{
            style: {
              borderRadius: '50px',
              width: 'inherit',
              border: '0px solid #cbc5c5',
              color: '#222020',
            },
            startAdornment: (
              <InputAdornment position="start">
                <span style={{ color: '#222020' }}>$</span>
              </InputAdornment>
            ),
            inputProps: {
              min: 0,
              max: 1000,
            },
          }}
        />
        <TextField
          sx={{
            width: '100%',
            '& .MuiOutlinedInput-root': {
              '&:hover fieldset': {
                borderColor: '#cbc5c5',
              },
              '&.Mui-focused fieldset': {
                borderColor: '#cbc5c5',
              },
            },
          }}
          type="number"
          variant="outlined"
          size="small"
          value={priceRangeValue[1]}
          onChange={(e) => {
            setPriceRangeValue([priceRangeValue[0], Number(e.target.value)]);
          }}
          InputProps={{
            style: {
              borderRadius: '50px',
              width: 'inherit',
              border: '0px solid #cbc5c5',
              color: '#222020',
            },
            startAdornment: (
              <InputAdornment position="start">
                <span style={{ color: '#222020' }}>$</span>
              </InputAdornment>
            ),
            inputProps: { min: 0, max: 1000 },
          }}
        />
      </div>
      <Slider
        getAriaLabel={() => 'Price range'}
        value={priceRangeValue}
        onChange={handlePriceRangeChange}
        valueLabelDisplay="auto"
        min={minPrice}
        max={maxPrice}
        sx={{
          '& .MuiSlider-track': {
            backgroundColor: 'red',
            border: 'none',
          },
          '& .MuiSlider-rail': {
            backgroundColor: 'black',
          },
          '& .MuiSlider-thumb': {
            backgroundColor: 'red',
          },
        }}
      />
      <div className="checkbox-wrapper">
        <span className="filter-range">Instructor</span>
        <FormGroup>
          {instructorCounts.map((item) => (
            <FormControlLabel
              key={item.instructor}
              sx={{
                color: '#222020',
                '& .MuiTypography-root': {
                  fontFamily: `'Nunito', sans-serif`,
                  fontWeight: '500',
                },
              }}
              value={item.instructor}
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                  }}
                  size="small"
                  checked={selectedInstructors.includes(item.instructor)}
                  onChange={() => handleSelectInstructors(item.instructor)}
                />
              }
              label={`${item.instructor} (${item.quantity})`}
            />
          ))}
        </FormGroup>
      </div>
      <div className="checkbox-wrapper">
        <span className="filter-range">Category</span>
        <FormGroup>
          {categoryCounts.map((item) => (
            <FormControlLabel
              key={item.category}
              sx={{
                color: '#222020',
                '& .MuiTypography-root': {
                  fontFamily: `'Nunito', sans-serif`,
                  fontWeight: '500',
                },
              }}
              value={item.category}
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                  }}
                  size="small"
                  checked={selectedCategories.includes(item.category)}
                  onChange={() => handleSelectCategories(item.category)}
                />
              }
              label={`${item.category} (${item.quantity})`}
            />
          ))}
        </FormGroup>
      </div>
      <div className="checkbox-wrapper">
        <span className="filter-range">Level</span>
        <FormGroup>
          {levelCounts.map((item) => (
            <FormControlLabel
              key={item.level}
              sx={{
                color: '#222020',
                '& .MuiTypography-root': {
                  fontFamily: `'Nunito', sans-serif`,
                  fontWeight: '500',
                },
              }}
              value={item.level}
              control={
                <Checkbox
                  sx={{
                    color: 'red',
                    '&.Mui-checked': {
                      color: 'red',
                    },
                  }}
                  size="small"
                  checked={selectedLevels.includes(item.level)}
                  onChange={() => handleSelectLevels(item.level)}
                />
              }
              label={`${item.level} (${item.quantity})`}
            />
          ))}
        </FormGroup>
      </div>
      <div className="filter-button-wrapper">
        <button className="filter-apply-button" onClick={() => handleApply()}>
          <span className="apply-button-text">Apply</span>
        </button>
      </div>
    </div>
  );
};
