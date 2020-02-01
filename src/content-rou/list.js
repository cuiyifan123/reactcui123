import React,{Component,Fragment} from "react";
import PageList from "../conponents";
import axios from 'axios'
class Lists extends Component{
    constructor(props) {
        super(props);
        this.state={
            data:[]
        }
    }
    componentWillReceiveProps(nextProps) {
        const id=nextProps.match.params.id
        axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id)
            .then(res=>{
                this.setState({
                    data:res.data.data
                })
            })
    }

    componentDidMount() {
        const id=this.props.match.params.id
        axios.get("http://www.dell-lee.com/react/api/list.json?id=" + id)
            .then(res=>{
                this.setState({
                    data:res.data.data
                })
            })
    }

    render() {
        return (
            <Fragment>
                <PageList data={this.state.data}/>
            </Fragment>
        );
    }
}
export  default Lists