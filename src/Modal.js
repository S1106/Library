import React from "react";

export default function Modal({activeItem,setActiveItem,setinputText,inputText}) {

    let a = React.createRef();
    let b =  React.createRef();
    let c = React.createRef();
    let d =  React.createRef();
    let g = React.createRef();
    let f =  React.createRef();

    //////////////////////////////////////////////////////////

    function Move(e) {

        e.preventDefault();

        let obj = {
            id: Date.now(),
            name1:a.current.value,
            name2:b.current.value,
            name3:c.current.value,
            name4:d.current.value,
            name5:g.current.value,
            name6:f.current.value,
            completed:false
        }
        
        console.log(obj);

        setinputText([
                ...inputText,
                obj]
        );

        setActiveItem(null);

    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////


    if (!activeItem) {
        return null;
    }
    return(
        <div className="overlay" >
            <div className="modal__window" >
                <h1>Заповніть параметри</h1>
                <input type="text" placeholder="название книги" required ref = {a}/>
                <input type="text" placeholder="имя автора" required ref = {b}/>
                <input type="text" placeholder="год издания книги" required ref = {c}/>
                <input type="text" placeholder="издательство" required ref = {d}/>
                <input type="text" placeholder="количество страниц" required ref = {g}/>
                <input type="text" placeholder="количество книг" required ref = {f}/>
                <input type="submit" className="ok" onClick={(e) => {Move(e)}} value="OK"/>
                <button onClick={() => {setActiveItem(null)}}>+</button>
            </div>
        </div>          
    );
}

