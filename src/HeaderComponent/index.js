import React,{Component} from "react";
import logo from './logo.png'
import{ Link} from "react-router-dom";
import './style.css'
import axios from 'axios'
import { Menu, Icon } from 'antd';
import Login from "../login/login";
class AppHeader extends Component{
    constructor(props) {
        super(props);
        this.state={
            list:[]
        }
    }

    getUl=()=>{
        return this.state.list.map(function (item) {
             return(
                <Menu.Item key={item.id} id="ant-menu-item">
                    <Link to={`/${item.id}`} >
                        <Icon type={item.icon}/>
                        {item.title}
                    </Link>
                </Menu.Item>
            )
        })
    }

    componentDidMount() {
        axios.get('http://www.dell-lee.com/react/api/header.json')
            .then(res=>{
                this.setState({
                    list:res.data.data
                })
            })

    }

    render(){
        const {list}=this.state
        return(
            <div className="box">
                <Link to="/"><img src={logo} alt='logo' /></Link>
                <Menu  mode="horizontal">
                    {this.getUl()}
                </Menu>
                <Login />
            </div>
        )
    }
}
export default AppHeader