import {  Component } from "react";
import PropTypes from 'prop-types';


const ListItem = ({items}) =>{
    console.log(items);
   return(

//  <ul>
//     {items.map((item, key)=>{
//          return <li key={key}>{item.name}</li>
//     })}
//  </ul>



   <table className="table">
<thead>
    <tr><th>Id</th><th>Name</th></tr>
</thead>
<tbody>
   
        {items.map((item,index)=>{
              return (
                <tr key={index}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                </tr>
              )
        })}
    
</tbody>
   </table>

   )
}

ListItem.propTypes={
    items: PropTypes.arrayOf(PropTypes.object).isRequired
};

class ListComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            employee:[
                {id:101, name:"sania1"},
                {id:102, name:"sania2"},
                {id:103, name:"sania3"},
                {id:104, name:"sania4"},
                {id:105, name:"sania5"}
            ]
        }
        
    }
    render(){
        return(
            <>
             <h1> List Component </h1>
             <ListItem items={this.state.employee} />
            </>
        )
    }
}
export default ListComponent;