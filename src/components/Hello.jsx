import React, { Component, Fragment } from "react";
import PropTypes from 'prop-types';

// class Hello extends React.Component{
//     render(){
//         return <Hello1 />
//     }
// }

// class Hello1 extends React.Component{
//     render(){
//         return(
//             <div>
//                 <h1>Hello1 Component called</h1>
//                 <Hello2 />
//                 <Hello3 />
//             </div>
//         )
//     }
// }

// class Hello2 extends Component{
//     render(){
//         return <h1>Hello 2 Component called</h1>
//     }
// }

// class Hello3 extends Component{
//     render(){
//         return(
//             // <React.Fragment>
//             //     <h1>Hello4 called</h1>
//             //     <h1>Hello4 called...</h1>
//             // </React.Fragment>
//             <Fragment>
//                 <h1>Hello3 called</h1>
//                 <h1>Hello3 called...</h1>
//                 <Hello4 />
//             </Fragment>
//         )
//     }
// }

// class Hello4 extends Component{
//     render(){
//         return(
//             <>
//               <h1>Hello4 Component called......</h1>
//             </>
//         )
//     }
// }

//---------------functional syntax----------------//
// function Hello(){
//     return(
//         <h1>Hello from funcitonal Component</h1>
//     )
// }


// const Hello = function(){
//     return(
//         <h1>Hello from fuctional Component</h1>
//     )
// }

// const Hello = () =>{

//     return(
//         <div>
//             <p>Hello</p>
//         </div>
//     )
// }

// const Hello = () =>(
//     <>
//     <h1>Hello</h1>
//     </>
// )

// const Hello = (props) =>(
//    <p>{props}</p>
// )

// class Hello extends Component{
//     constructor(props){
//         super(props);
//         console.log("this.props ",this.props);
//         console.log("props", props);

//         this.state = {count:1}
//         console.log("this.state values..   ", this.state);
//         this.increaseCount = this.increaseCount.bind(this);
//         this.decreaseCount = this.decreaseCount.bind(this);
//     }
//     increaseCount(){
//         this.setState({
//             count : this.state.count+1
//         });
//     }
//     decreaseCount(){
//         // this.setState({
//         //     count : this.state.count-1
//         // });

//         this.setState({
//             count:this.state.count-1
//         },()=>{
//             console.log("count values is" ,this.state.count);
//         })
//     }
//     render(){
//         console.log("state ",this.state)
//         return (
//             <Fragment>
//                    <h1>Count {this.state.count}</h1>
//                    <button onClick={this.increaseCount}>Click here to increase the count</button>
//                    <button onClick={this.decreaseCount}>Click here to decrease the count</button>
//             </Fragment>
         
           
//         )
//     }
// }


// const Hello = function(props){
//     console.log("props",props);
   
//     return(
//         <h1>Hello {props.id}</h1>
//     )
// }

// const Hello = ()=>{
//     console.log("props");
//     return(
//         <h1>Hello using arrow function</h1>
//     )
// }

// const Hello = (props)=>{
   
//     return(
//         <h1>Hello using arrow function passing props {props.id},{props.name}</h1>
//     )
// }

// const Hello = ({id,name,...address})=>{
//    console.log("address", address);
//     return(
//         <h1>Hello using arrow function passing props {id},{name},{address.address.city}</h1>
//     )
// }


class Hello extends Component{

    hello1(){
        console.log(this);
    }
    hello2(e){
        console.log(e);
    }
    hello3(e){
        console.log(this,e);
    }
    hello4(name,e){
        console.log("name ",name);
        console.log(e);
        e.preventDefault();
    }


    render(){
        return(
        <>
           <h1>Name is {this.props.name}</h1>
           <h1>Age is {this.props.age}</h1>
           <button onClick={this.hello1}>Click on me!</button>
           <button onClick={this.hello2}>Click on me!</button>
           <button onClick={this.hello3.bind(this)}>Click on me!</button>
           <button onClick={this.hello4.bind(this,"sania bano")}>Click on me!</button>
           <button onClick={()=>{
            console.log("Click me cliekc");
           }}>Click on me!</button>
           <br/>
           <a href="https://www.google.com/" onClick={function(e){
              console.log("prevented");
              //e.preventDefault();
           }}>Follow the link</a>
           <a href="https://www.google.com/" onClick={(function(e){
            console.log("prevented");
            console.log(e,this);
            e.preventDefault();
           }).bind(this)}>Google link</a>
            <a href="https://www.google.com/" onClick={(e)=>{
                console.log(e);
                console.log("this ",this);
                e.preventDefault();
            }}>Google link</a>
            <a href="https://www.google.com/" onClick={(e)=>{
               this.hello4("bano bano",e); 
            }}>wotuo</a>
        </> 
            
        )
    }
   
    // getInitialState(){
    //     console.log("get initial state get executed  ", this.state);
    // }
    // componentWillMount(){
    //     console.log("componentWillMount");

    // }
    // componentDidMount(){
    //     console.log("componentDidMount");

    // }
    // componentWillReceiveProps(){
    //     console.log("componentWillReceiveProps");

    // }
    // shouldComponentUpdate(){
    //     console.log("shouldComponentUpdate");

    // }
    // componentWillUpdate(){
    //     console.log("componentWillUpdate");

    // }
    // componentDidUpdate(){
    //     console.log("componentDidUpdate");

    // }
    // componentWillUnmount(){
    //     console.log("componentWillUnmount");

    // }


    
   
}


Hello.defaultProps={
    name:"sania",
    age:27
}

Hello.propTypes ={
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
}



export default Hello;