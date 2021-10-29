import React from 'react';

export const Child: React.FC<{num: number}>  = ({num}) => {
    return (
      <span>
          {num}
      </span>
    );
  }