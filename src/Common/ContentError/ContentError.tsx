import React from 'react';

type props = {
  content: string;
};

const ContentError: React.FC<props> = (props) => {
  return (
    <div className='SWWBlock'>
      {props.content ? props.content : 'Something Went Wrong'}
    </div>
  );
};

export default ContentError;
