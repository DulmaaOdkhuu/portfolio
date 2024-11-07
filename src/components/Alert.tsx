import React from 'react';

type Props = {
    type: string,
    text: string
};

const Alert: React.FC<Props> = ({type, text}) => {
  return (
    <div className='absolute top-10 left-0 right-0 flex justify-center items-senter'>
        <div className={`${type ==='danger' ? 'bg-red-800' : "bg-blue-800"} p-2 text-indigo-100 leading-none lg:rounded-full flex lg:inline-flex items-center pl-3`} role="alert"><p className='mr-2 text-left'>{text}</p>
        <p className={`${type ==='danger' ? 'bg-red-500' : "bg-blue-500"} flex rounded-full uppercase px-2 py-1 font-semi-bold mr-3 text-xs pl-3`}> {type === 'danger' ? 'Failed' : 'Success'} </p>
        </div>
 
    </div>
  );
};

export default Alert;