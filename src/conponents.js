import React,{Component,Fragment} from "react";
import { List } from 'antd';
import Del from "./del";
import{Link} from "react-router-dom";
class PageList extends Component{
    render(){
        const data=this.props.data;
        return(
            <Fragment>
                    <List
                        style={{backgroundColor:"#fff"}}
                        bordered
                        dataSource={data}
                        renderItem={item => (
                            <List.Item>
                                <Link to={`del/${item.id}`}>{item.title}</Link>
                            </List.Item>
                        )}
                    />
            </Fragment>
        )
    }
}
export default PageList