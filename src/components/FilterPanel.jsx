import { useSelector, useDispatch } from 'react-redux';

import { Badge } from 'UI/Badge';
import { Card } from 'UI/Card';
import { Stack } from 'UI/Stack';

import { selectFilters } from 'store/filters/filtersSelectors';
import { removeFilter, clearFilter, } from 'store/filters/filtersActions';


const FilterPanel = () => {
  const currentFilter = useSelector(selectFilters)
  const dispatch = useDispatch()

  if (currentFilter.length === 0) {
    return null
  }

  const handleClearFilter = () => {
    dispatch(clearFilter())
  }

  const handleRemoveFilter = (filter) => {
    dispatch(removeFilter(filter))
  }

  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map(filter => (
            <Badge onClear={() => handleRemoveFilter(filter)} key={filter} variant="clearable">{filter}</Badge>
          ))}
        </Stack>
        <button onClick={handleClearFilter} className='link'>Clear</button>
      </div>
    </Card>
  )
}

export { FilterPanel };