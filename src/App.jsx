import React, { Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class  App extends Component {
    state= {
            userName:{ name : 'Arunprasad'},
            address :{ addr : 'Chinna kadai street, Rasipuram'}
    }
    nameChangeEvntHandler = (event) => {
        console.log("nameChangeEvntHandler called !");
            this.setState({
                userName:{ name : event.target.value },
                address :{ addr : 'Chinna kadai street, Rasipuram'}
            })   
    }

   
    render(){
        const cardStyle = {
            backgroundColor:'white',
            border:'1px solid',
            padding: '8px',
            textAlign: 'center',
            margin:'auto',
            boxShdow:'0 2px 3px gray',
            width:'20%',
            font:'inline'           
        };
        return ( 
                <div style = {cardStyle} >
                    <UserInput name = {this.state.userName.name} 
                        nameChangeEvent={this.nameChangeEvntHandler}> </UserInput>   
                    <UserOutput name = {this.state.userName.name}
                                address ={this.state.address.addr}></UserOutput>
                </div >
            );
        }
}

export default App;