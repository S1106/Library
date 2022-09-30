import React from 'react';

export const  RowTable = ({item} ) => {
    return (
        <div className="row justify-content-start">
            <div className="no col-1"></div>
            <div className="name1 col-2">{item.name1}</div>
            <div className="name2 col-2">{item.name2}</div>
            <div className="name3 col-1">{item.name3}</div>
            <div className="name4 col-2">{item.name4}</div>
            <div className="name5 col-2">{item.name5}</div>
            <div className="name6 col-2">{item.name6}</div>
        </div>
    )
}