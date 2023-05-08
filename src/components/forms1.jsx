import React, { Component } from 'react';
import {SketchPicker} from "react-color"
import domtoimage from "dom-to-image";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Popover from 'react-bootstrap/Popover';
import Qoutes from "./Qoutes";
import InputField from "./inputFields"

// popover doesn't work in vanlla bootstrap

const Forms = (props) => {

    const WSFonts = ["helvetica" , "Arial" , "Arial Black" , "verdana" , "tahoma" , "trebuchet ms"
                    ,"impact","gill sans","times new roman" , "georgia" ,"palatino" ,"baskerville"
                    ,"courier","lucida","monaco","bradley hand","brush script mt","luminari",
                    "comic sans ms"];

    const [input , setInput] = React.useState({color:"black",
                                                fontFamily:"",
                                                fontSize : "",
                                                qoutes: [""]})

    const [img , setImg] = React.useState("m6.jpg");

    const popover = (
        <Popover id="popover-basic">
          <Popover.Body>
          <SketchPicker
          color={input.color}
            onChange={function(color) {
            setInput(prev => ({...prev , color : color.hex}))
            }}/>
          </Popover.Body>
        </Popover>
      );

    function addQuote(){
        setInput(prev => {
            let newInput = {...prev}
            newInput.qoutes.push("")
            return newInput
        })

    }

    function deleteQoute(){
        setInput(prev => {
            let newInput = {...prev}
            newInput.qoutes.pop()
            return newInput
        })
    }

    function handleChange(event){
        const {name , value} = event.target;

        if(name != "color" && name != "fontFamily" && name != "fontSize"){
        setInput(prev => {
            let newInput = {...prev};
            newInput.qoutes[name] = value;
            return newInput
        })
        }else{
            setInput(prev => 
                ({...prev,
                [name] : value})
            )
        }}

    function handleclick(event){ //gets random image from list

        event.preventDefault();

        let randomNum = Math.floor(Math.random() * 10)
        let URL = props.aetheticpics[randomNum]; 

        setImg(URL)

    }

    function handleDownload(event){ //converts #quote-img div into dataURL and downloads it
        event.preventDefault();

        let quote = document.getElementById("quote-img");

        domtoimage.toPng(quote)
        .then(imageData => {

            const a = Object.assign(document.createElement("a"),{
                href : imageData,
                download:"myimg.png",
                style:"dispaly:none"
            })

            document.body.appendChild(a)
        
            a.click();

            a.remove();
        })
    }
    function handleDrag(event){//handles moving the qoutes and keeping them
        const {target,movementX , movementY} = event; // within the image bounds
                                                    
        let img_height = document.getElementById("img").height,
            img_width = document.getElementById("img").width,
            styles = window.getComputedStyle(target),
            left = parseInt(styles.left), 
            top = parseInt(styles.top), 
            quote_width = parseInt(styles.width),
            quote_height = parseInt(styles.height);
        
        if(left + movementX >= 0 &&  left + movementX <= img_width-quote_width &&
            top + movementY >= 0 && top + movementY <= img_height-quote_height){
            target.style.left = `${left + movementX}px`;
            target.style.top = `${top + movementY}px`;
        }
    }

    function handleDragState(event){//handles weather the element is in a movable state or not
        const {type , target} = event;

        if(type == "mousedown"){
            target.addEventListener("mousemove", handleDrag)                               

        }else if(type == "mouseup"){
                target.removeEventListener("mousemove",handleDrag)
        }else if(type == "click"){
            for(let i=0 ; i < document.getElementById("quote-img").childNodes.length;i++){
                    document.getElementById("quote-img").childNodes[i].removeEventListener("mousemove",handleDrag)
                }
        }}

    function selectFont(event){
        let {textContent} = event.target
        setInput(prev =>  ({...prev , fontFamily :textContent}))
    }

    React.useEffect(() => {
        window.bootstrap = require("bootstrap")
        let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-toggle="popover"]'))
        let popoverList = popoverTriggerList.map(popoverTriggerEl => {
            return new 
            window.bootstrap.Popover(popoverTriggerEl)
        })

    },[])

    return ( 
        <React.Fragment>

                <h1 className='text-center'>Be an inspiration to the people around you and<br></br>
                help the the people around you reach their dreams</h1>
       
                <form className='row justify-content-around m-4' id='form'>

                    <div className='col-5 m-3 p-0'>
                        <div className='input-group'>
                            <OverlayTrigger trigger="click" placement="right" overlay={popover}>
                                <Button id="color-btn" 
                                style={{backgroundColor: input.color === "" ? "white" : input.color}}>

                                </Button>
                            </OverlayTrigger>
                            <input 
                            type="text"
                            value={input.color}
                            placeholder="Font color (e.g. darkblue (or) #a4b6c1)"
                            className='form-control'
                            name='color'
                            onChange={handleChange} />
                        </div>
                    </div>
                    
                    <div className='col-5 m-3 p-0'>
                            <div className='input-group'>
                                <div className='input-group-prepend'>
                                    <button className='btn btn-outline-secondary dropdown-toggle' type='button' 
                                    data-toggle="dropdown">fonts</button>
                                    <ul className='menu dropdown-menu'>
                                        {WSFonts.map(a => {
                                            return <li className='dropdown-item' onClick={selectFont} key={a}>{a}</li>
                                        })}
                                    </ul>
                            </div>
                            <input 
                            id='font' 
                            type="text"
                            value={input.fontFamily}
                            placeholder="Don't be afraid to try a unique font, it might work!"
                            className='form-control'
                            name='fontFamily'
                            title="you can try other fonts , but if they're not installed on your pc
                            they won't work"
                            onChange={handleChange}
                            />
                        </div>
                    </div>

                    <input 
                    type="text" 
                    className='col-5 m-3'
                    value={input.fontSize}
                    placeholder="text size e.g. 16px"
                    name='fontSize'
                    onChange={handleChange}/>

                    <InputField 
                    input={input}
                    handleChange={handleChange}/>
                </form>

                <div className='row justify-content-between  m-3'>
                    <div className='col-2 btn btn-outline-secondary m-3' onClick={addQuote}>Add new quote</div>
                    <div className='col-2 btn btn-outline-danger m-3' onClick={deleteQoute}>delete last quote</div>
                    <button onClick={handleclick} className='button btn btn-block mb-3 bg-success text-light'>Generate different image</button>
                </div>

                
                <div className='quote-img w-100 text-center'>
                    <h1 className='text-dark'>you don't like the position of the quotes? try moving them!</h1>
                    <div className='mx-auto d-inline-block' id='quote-img' style={{position: "relative"}} onClick={handleDragState}>

                        <Qoutes 
                        input={input}
                        handleDragState={handleDragState}
                        />

                        <img className='c-img' id='img' src={require(`../imgs/${img}`)} alt="" onMouseUp={handleDragState}/>
                    </div>
                </div>

                <div className='container-fluid p-4'>
                    <button onClick={handleDownload} className='button btn btn-block mb-3 bg-success text-light'>download image</button>
                </div>

            
        </React.Fragment>
     );
}
 
export default Forms;