import React from 'react';

export const Child: React.FC<{name: string}>  = ({name}) => {
    return (
      <button>
          {name}
      </button>
    );
  }