import React from 'react'

 function SortBar({ onSort}) {
    const handleSort = (criteria) => {
        onSort(criteria)
    }
  return (
    <div className='sort-bar'>
        <button onClick={() => handleSort('health')}>Health</button>
        <button onClick={() => handleSort('damage')}>Damage</button>
        <button onClick={() => handleSort('armor')}>Armor</button>
    </div>
  )
}

export default SortBar;
