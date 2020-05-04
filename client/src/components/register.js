import React, { Component } from 'react'
import {Container,ListGroup,ListGroupItem,Button, Input} from 'reactstrap';
import {CSSTransition,TransitionGroup} from 'react-transition-group';
import { Form } from 'reactstrap'
// import uuid from 'uuid/v4';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/itemActions';
import propTypes from 'prop-types'

class register extends Component {
 componentDidMount(){
    this.props.getItems(); 
 }
onDeleteClick=(id)=>{
this.props.deleteItem(id);
}
    render() {
      
        const{items}=this.props.item;

        return (
            <div>
                <Container>
            
{/*               
                   <Button color="dark" style={{marginBottom:'2rem'}}
                   onClick={()=>{
                       const name=prompt('Enter Item');
                       const surname=prompt('Enter Item');
                       const password=prompt('Enter Item');
                       if(name && surname && password){
                           this.setState(state=>({
                               items:[...state.items,{id:uuid(),name,surname,password}]
                           }))
                       }
                   }}>add new

                   </Button>  */}
<ListGroup>
    <TransitionGroup className="register-list">
{items.map(({_id,name,surname,password})=>(
    <CSSTransition key={_id} timeout={500} classNames="fade">
        <ListGroupItem>
        <Button className="remove-btn" 
        color="danger"
        size="sm"
         onClick={this.onDeleteClick.bind(this,_id) 
}
        
        >&times;</Button>
        {name +' '+surname+' '+password}</ListGroupItem>

        
    </CSSTransition>
))}
    </TransitionGroup>
</ListGroup>


                </Container>
            </div>
        )
    }
}

register.propTypes={
    getItems:propTypes.func.isRequired,
    item:propTypes.object.isRequired
}

const mapStateToProps=(state)=>({
    item:state.item
});

export default connect(mapStateToProps,{getItems,deleteItem}) (register)