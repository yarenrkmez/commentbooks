import React,{Component} from 'react'
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    
Input
} from 'reactstrap';
import {connect} from 'react-redux';
import {addItem} from '../actions/itemActions';
class ItemModal extends Component{
state={
    modal:false,
    name:'',
    surname:'',
    password:''
}
toogle=()=>{
    this.setState({
        modal:!this.state.modal
    })
}
onChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
    this.setState({[e.target.surname]:e.target.value});
    this.setState({[e.target.password]:e.target.value});
}
onSubmit=(e)=>{
e.preventDefault();
const newperson={
 
    name:this.state.name,
    surname:this.state.surname,
    password:this.state.password
}
this.props.addItem(newperson);
this.toogle();
}
render(){
  
    return(
<div>
    <Button
    color="dark"
    style={{marginBottom:'2rem'}}
    onClick={this.toogle}
    >
    Kayıt Ol
    </Button>
    <Modal
    isOpen={this.state.modal}
    toogle={this.toogle}
    >
    <ModalHeader toogle={this.toogle}>Kayıt Ol


    
   
   <Button
   style={{marginLeft:"360px"}}
 className="remove-btn btn btn-danger btn-sm"
  onClick={this.toogle}
    >x</Button>

 
    </ModalHeader>
    <ModalBody>
        <Form onSubmit={this.onSubmit}>
<FormGroup>
    <Label for="name">Ad:</Label>
    <Input type="text"
    name="name"
    id="name"
    placeholder="Adınızı Girin"
    onChange={this.onChange}
    ></Input>
     <Label for="surname">Soyadınız:</Label>
    <Input type="text"
    name="surname"
    id="surname"
    placeholder="Soyadınızı Girin"
    onChange={this.onChange}
    ></Input>
       <Label for="password">Şifre:</Label>
    <Input type="text"
    name="password"
    id="password"
    placeholder="Şifrenizi Girin"
    onChange={this.onChange}
    ></Input>
    <Button
     color="dark"
    style={{marginTop:"20px",marginLeft:"360px"}}
    >Kayıt Ol</Button>
    
</FormGroup>  
        </Form>
    </ModalBody>

    </Modal>
</div>
    );
}
}

const mapStateProps=state=>({
    item:state.item
})

export default connect(mapStateProps,{addItem})(ItemModal);