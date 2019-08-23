import React from 'react'
import { connect } from 'react-redux'
import cx from 'classnames'
import { setVisibilityFilter } from '../redux/actions'
import { VISIBILITY_FILTERS } from '../redux/actions'

const FilterEmployees = ({ activeFilter, setVisibilityFilter }) => {
  return (
    <div className='filters'>
      {Object.keys(VISIBILITY_FILTERS).map(filterKey => {
        const currentFilter = VISIBILITY_FILTERS[filterKey]
        return (
          <span
            key={`visibility-filter-${currentFilter}`}
            className={cx(
              'filter',
              currentFilter === activeFilter && 'filter--active'
            )}
            onClick={() => {
              setVisibilityFilter(currentFilter)
            }}>
            {currentFilter}
          </span>
        )
      })}
    </div>
  )
}

const mapStateToProps = state => {
  return { activeFilter: state.visibilityFilter }
}
// export default VisibilityFilters;
export default connect(
  mapStateToProps,
  { setVisibilityFilter }
)(FilterEmployees)
