import React from 'react';
import clsxm from './utils/clsxm';

function App() {
  const variant = 'primary';
  return (
    <div className='App'>
      <h1 className=''>Hello world!</h1>
      <button
        className={clsxm(
          'px-8 py-3 rounded-full shadow-sky-400 shadow-lg hover:bg-sky-400',
          [true && ['bg-sky-500']]
        )}
      >
        Save changes
      </button>
    </div>
  );
}

export default App;
