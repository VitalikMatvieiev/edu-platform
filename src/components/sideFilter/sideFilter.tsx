import { useState } from 'react';
import './_sideFilter.scss';
import {
  Slider,
  TextField,
  InputAdornment,
  Checkbox,
  FormControlLabel,
  FormGroup,
} from '@mui/material';
import { Category, CategoryCount, Instructor, InstructorCount, Level, LevelCount } from '../../types/components/componentType';

//Test array, next will be array which we get from backend
const data = [
  { instructor: 'John', category: 'Interactive', level: 'Beginner' },
  { instructor: 'John', category: 'Self-paced', level: 'Intermidiate' },
  { instructor: 'John', category: 'Certificated', level: 'Expert' },
  { instructor: 'John', category: 'Interactive', level: 'Practical' },
  { instructor: 'Ann', category: 'Interactive', level: 'Intermidiate' },
  { instructor: 'Ann', category: 'Certificated', level: 'Practical' },
  { instructor: 'Ann', category: 'Certificated', level: 'Expert' },
  { instructor: 'Alex', category: 'Interactive', level: 'Beginner' },
  { instructor: 'Alex', category: 'Self-paced', level: 'Intermidiate' },
  { instructor: 'Alex', category: 'Certificated', level: 'Expert' },
];



// Function, which gets array of objects with property - instructor
const getInstructorCounts = (data: Instructor[]): InstructorCount[] => {
  // Use reduce to calculate the quantities of each instructor
  return data.reduce((acc: InstructorCount[], item) => {
    // Search instructor in acc
    const existingItem = acc.find(
      (accItem) => accItem.instructor === item.instructor,
    );
    // If instructor already exists, increase its quantity by 1
    if (existingItem) {
      existingItem.quantity++;
    } else {
      // If there is no instructor, add a new object with an instructor and an initial number of 1
      acc.push({ instructor: item.instructor, quantity: 1 });
    }

    return acc;
  }, []);
};

// Function, which gets array of objects with property - category
const getCategoryCounts = (data: Category[]): CategoryCount[] => {
  return data.reduce((acc: CategoryCount[], item) => {
    const existingItem = acc.find(
      (accItem) => accItem.category === item.category,
    );
    if (existingItem) {
      existingItem.quantity++;
    } else {
      acc.push({ category: item.category, quantity: 1 });
    }

    return acc;
  }, []);
};

// Function, which gets array of objects with property - level
const getLevelCounts = (data: Level[]): LevelCount[] => {
  return data.reduce((acc: LevelCount[], item) => {
    const existingItem = acc.find((accItem) => accItem.level === item.level);
    if (existingItem) {
      existingItem.quantity++;
    } else {
      acc.push({ level: item.level, quantity: 1 });
    }

    return acc;
  }, []);
};

// Example usage
const instructorCounts: InstructorCount[] = getInstructorCounts(data);
const categoryCounts: CategoryCount[] = getCategoryCounts(data);
const levelCounts: LevelCount[] = getLevelCounts(data);

const SideFilter: React.FC = () => {
  const minPrice: number = 0;
  const maxPrice: number = 1000;

  const [priceRangeValue, setPriceRangeValue] = useState<number[]>([0, 1000]);
  const [selectedInstructors, setSelectedInstructors] = useState<string[]>([]);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLevels, setSelectedLevels] = useState<string[]>([]);

  const handleApply = () => {
    try {
      // will be send filtered data to redux state
      const filteredData = { priceRangeValue, selectedInstructors, selectedCategories, selectedLevels };
      console.log(filteredData);
    } catch (err: any) {
      console.error(`Error in apply filter: ${err}`);
    }
  }

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

export default SideFilter;
