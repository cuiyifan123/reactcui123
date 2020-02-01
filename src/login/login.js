import React,{Component,Fragment} from "react";
import { Button , Modal,Input,message} from 'antd'
import axios from 'axios'
class Login extends Component{
    constructor(props) {
        super(props);
        this.state={
            login:false,
            model:false,
            inputValue:"",
            inputPassword:""
        }
    }
    componentDidMount() {
        axios.get("http://www.dell-lee.com/react/api/login.json",{
            withCredentials:true
        })
            .then(res=>{
                const login=res.data.data.login
                this.setState({
                    login
                })
            })
    }

    handerClick=()=>{
        this.setState({
            model:true
        })
    }

    showmodel=()=>{
        this.setState({
            model:false
        })
    }
    handertext=(e)=>{
        this.setState({
            inputValue:e.target.value
        })
    }

    handerPassword=(e)=>{
        this.setState({
            inputPassword:e.target.value
        })
    }

    checklogin=()=>{
        const {inputValue,inputPassword}=this.state
        console.log(inputValue,inputPassword)
        const url=`
            http://www.dell-lee.com/react/api/login.json?user=${inputValue}&password=${inputPassword}
        `
        axios.get(url,{
            withCredentials:true
        })
            .then(res=>{
               const login =res.data.data.login
                if(login){
                    message.success("登录成功")
                    this.setState({
                        login:true,
                        model:false
                    })
                }else{
                    this.setState({
                        inputPassword:""
                    })
                    message.error("登录失败,账号或密码错误")
                }
            })
    }
    logout=()=>{
        axios.get("http://www.dell-lee.com/react/api/logout.json",{
            withCredentialsL:true
        })
            .then(res=>{
                const login=res.data.data.logout;
                if(login){
                    this.setState({
                        login:false
                    })
                }
            })
    }

    render() {
        const {login}=this.state
        return(
            <Fragment>
                {
                    login?
                        <Button style={{margin:"10px"}} type="primary" onClick={this.logout}>退出</Button>:
                        <Button style={{margin:"10px"}} type="primary" onClick={this.handerClick}>登录</Button>
                }
                <Modal
                    title="登录"
                    visible={this.state.model}
                    onOk={this.checklogin}
                    onCancel={this.showmodel}
                >
                    <Input placeholder="账号" value={this.state.inputValue} onChange={this.handertext}/>
                    <Input type="password" placeholder="密码" value={this.state.inputPassword} onChange={this.handerPassword} />
                </Modal>
            </Fragment>
        )
    }
}
export default Login