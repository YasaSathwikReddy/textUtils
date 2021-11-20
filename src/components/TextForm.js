import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

    const toUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Text converted to upperCase", "success");
    }

    const toLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Text converted to lowerCase", "success");
    }

    const clear = () => {
        setText("");
        props.showAlert("Text Cleared", "success");
    }

    const handleText = (e) => {
        // console.log(e.target.value);
        setText(e.target.value);
    }

    return (
        <>
        <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} style={{backgroundColor: props.mode === 'dark'? '#171414':'white', color: props.mode === 'dark'? 'white':'black'}} onChange={handleText} id="my-box" rows="7" placeholder="Write here!"></textarea>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={toUpper}>ConvertToUpperCase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={toLower}>ConvertToLowerCase</button>
                <button disabled={text.length === 0} className="btn btn-primary my-2 mx-1" onClick={clear}>Clear</button>
            </div>
        </div>
        <div className="container" style={{color: props.mode === 'dark'? 'white':'black'}}>
            <h1>Your text summary</h1>
            <p>{text.split(" ").filter((element) => {return (element.length !== 0)}).length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").filter((element) => {return (element.length !== 0)}).length} minutes read</p>
        </div>
        </>
    )
}
