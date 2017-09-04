import React from 'react';

const queueComponents = ({title},{priority},{created})=>{
  return(
    <ul>
    {
      title.map(title, priority, created =>{
        return (
            {title},
            {priority},
            {created}
          )
      })
    }
    </ul>
  );
};


export default queueComponents;