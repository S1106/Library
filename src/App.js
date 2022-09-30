import React from "react";
import "./style.css";
import Modal from "./Modal";
import Div from "./Div";

export default function App() {

    const [activeItem, setActiveItem] = React.useState(null);

    const [inputText, setinputText] = React.useState([]);

    console.log(inputText);
      
        React.useEffect(()=>{
         if(inputText.length > 0) {
          localStorage.setItem('library', JSON.stringify(inputText));
         }
       },[inputText]);

        React.useEffect(() =>{
        let f = JSON.parse(localStorage.getItem('library')) || [];
        setinputText(f);
        }, []);

        const selectField = (id) => {
            setinputText(         
                inputText.map((single) => {
                    if(single.id === id) {
                        single.completed = !single.completed;
                    }
                return single;
                })
          
            )
        }

  return (
    <>
{/* ---------------------------------------------------------------------------- */}
        <section className="header">
            <div className="container">
                <div className="row justify-content-between">
                    <div className="logo col-3">LIBRARY</div>
                    <div className="slogan col-9">Library are the treasuries of all the treasuries of the human spirit.</div>
                </div>
            </div>
        </section>
{/* ---------------------------------------------------------------------------- */}
        <section className="menu">
        <div className="container">
            <div className="row justify-content-between">
                <div className="book col-3">Book</div>
                <div className="visitor col-3">Visitor</div>
                <div className="cart col-3">Card</div>
                <div className="static col-3">Static</div>
            </div>
        </div>
        </section>
{/* ---------------------------------------------------------------------------- */}
        <section className="function">
        <div className="container">
            <div className="row justify-content-between">
                <div className="add col-1" onClick={ () => {setActiveItem(true)} }>add</div>
                <div className="delete col-1">delete</div>
                <div className="edit col-1">edit</div>
                <div className="input col-3"><input type="text" placeholder="Enter search"/></div>
                <select className="select col-3" placeholder="name A-Z">
                  <option>Name A-Z</option>
                  <option>2</option>
                  <option>3</option>
                </select>
                <div className="sort col-1">sort</div>
            </div>
        </div>
        </section>
{/* ---------------------------------------------------------------------------- */}
        <section className="tablet">
        <div className="container">
            <div className="row justify-content-start">
                <div className="no col-1">№</div>
                <div className="name1 col-2">Name book</div>
                <div className="name2 col-2">Full name author</div>
                <div className="name3 col-1">Year</div>
                <div className="name4 col-2">Publisher</div>
                <div className="name5 col-2">Number of slides</div>
                <div className="name6 col-2">Number of books</div>
            </div>
            <Div inputText={inputText} selectField = {selectField}/>
        </div>
        </section>


        <Modal activeItem={activeItem} setActiveItem={setActiveItem} setinputText={setinputText} inputText = {inputText}/>
    </>
  );
}