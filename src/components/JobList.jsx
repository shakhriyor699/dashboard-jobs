import { useSelector, useDispatch } from 'react-redux';
import { addFilter } from 'store/filters/filtersActions';
import { selectAllPositions, selectVisiblePositions } from 'store/positions/positionSelectors';
import { JobPosition } from './JobPosition';
import { selectFilters } from 'store/filters/filtersSelectors';

const JobList = () => {
  const dispatch = useDispatch()
  const currentFilters = useSelector(selectFilters)
  const positions = useSelector((state) => selectVisiblePositions(state, currentFilters))

  const handleAddFilters = (filter) => {
    dispatch(addFilter(filter))
  }

  return (
    <div className='job-list'>
      {positions.map(item => (
        <JobPosition
          key={item.id}
          {...item}
          handleAddFilters={handleAddFilters}
        />
      ))}
    </div>
  )
}

export { JobList };