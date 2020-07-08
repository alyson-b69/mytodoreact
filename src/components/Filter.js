import React from 'react';

const Filter = ({ filters, currentFilter, onFilterChange }) => {
    return (
      <div className="filters">
      {filters.map(filter => (
        <button
          key={filter}
          onClick={() => {
            onFilterChange(filter);
          }}
          className={`filter ${currentFilter === filter ? "current" : ""}`}
        >
          {filter}
        </button>
      ))}
    </div>
    );
  }

  export default Filter;