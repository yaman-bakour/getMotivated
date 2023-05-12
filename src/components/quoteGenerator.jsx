import React, { Component } from 'react';

const QuoteGenerator = (props) => {

    const [quoteImage , setQuoteImage] = React.useState("m7.jpg")

    const [quotes, setQoutes] = React.useState({content : "do NOT lose hope" , author : "by us"});
    
    function handleGetQuote(){
    
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(res => {
            document.getElementById("c").innerHTML = "";
            return setQoutes(res)})
        .catch(err => {document.getElementById("c").innerHTML = 
        `There has been a problem with the quotes server or your internet connection ,Please try again later and don't
        lose hope , stay motivated!`});
    }

    function handleQuoteImage (){

        let randomURL = Math.floor( Math.random() * 10);

        setQuoteImage(props.aetheticpics[randomURL]);
    }

    function Quote(){
        handleGetQuote();
        handleQuoteImage();
    }

    return ( 
        <React.Fragment>

            <div className='motivate w-100 bg-success fw-bold p-4 text-center'>Motivate youself</div>

                <div className='text-center' id='c'></div>
                <div className='row no-gutters'>
                    <div className='col-xl-7 text-success'>
                        <div className='quote-img text-center'>
                            <img className='w-100' src={require(`../imgs/${quoteImage}`)} alt="" id="img1"/>
                            <div className='quote' id='quote'>{quotes.content}</div>
                            <div className='author' id='author'>-{quotes.author}</div>
                        </div>
                    </div>
                    
                    <div className='col-xl-5 about-quote p-5'>
                        <p className='text-success'>Lack motivation?</p>

                        <h1 className='font-weight-bold'>Motivate yourself</h1>

                        <button onClick={Quote} className='btn btn-success m-3'>Get quote</button>
                        
                        <p className='text-success'>dont worry , it get better</p>

                        <p className='text-success'>just keep going!</p>

                        <p className='speech'>if you are going to do a sit-up, then you do a sit-up 
                            the very best way you can. You don't take anything for 
                            granted, you don't assume that you have tomorrow. 
                            Everything we do in life is a choice and those choices 
                            dictate the kind of life that you are going to lead. 
                            And as soon as you can understand that, then you start 
                            to take ownership of your life. You start to design 
                            your life to turnout whatever way you want it to.
                        </p>
                    </div>
                </div>

        </React.Fragment>
     );
}
 
export default QuoteGenerator;
