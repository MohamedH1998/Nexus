import React from 'react'

const ProgressBar = ({percentageProgress}) => {
    return (
<div className="relative">
  <div className="flex h-4 overflow-hidden text-xs bg-green-200 rounded">
    <div style={{ width: `${percentageProgress}%` }} className="flex flex-col justify-center text-center text-white bg-green-500 shadow-none whitespace-nowrap"></div>
  </div>
</div>
    );
};

export default ProgressBar