import React,{Component} from 'react';
import './index.css';
import api from '../../services/api';

class Home extends Component{
    state = {
        docs:[]
    }

    // Services
    async componentDidMount(){
        const response = await api.get('/');

        console.log(response);

        this.setState({
            docs: response.data.docs
        });

    }

    render(){
        return (
            <div>
                <h1>Bem Vindo ao Curso de React</h1>
                { this.state.docs.map(
                        users =>( <div key={users._id}>{users.name}</div>)
                )
                }
            </div>
        )
    }
}

export default Home;