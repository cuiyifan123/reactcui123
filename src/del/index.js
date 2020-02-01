import React,{Component,Fragment} from "react";
import axios from 'axios'
import { Card } from 'antd';
import './style.css'
class Del extends Component{
    constructor(props) {
        super(props);
        this.state={
            title:"react",
            data:[],
            con:"sa"
        }
    }
    componentDidMount() {
        const id=this.props.match.params.id
        axios.get("http://www.dell-lee.com/react/api/detail.json?id=" + id)
            .then(res=>{
               this.setState({
                   title:res.data.data.title,
                   con:res.data.data.content
               })
            })
    }

    render(){
        return(
              <Fragment>
                  <Card title={this.state.title}>
                     <div className="de" dangerouslySetInnerHTML={{__html:this.state.con}}></div>
                  </Card>
              </Fragment>
        )
    }
}
export default Del