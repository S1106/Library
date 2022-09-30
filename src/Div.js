import React from "react";
import { RowTable } from './RowTable';

export default function Div({inputText,}){
    console.dir(inputText);
    
    
    if (!inputText) {
        return null;
    } 
    return(
        <div>
            {inputText.map( item =><RowTable key={item.id} item = {item} />)}
        </div>
        );
}
