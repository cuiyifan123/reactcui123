import React,{Fragment,Component} from 'react';
import{ BrowserRouter as Router,Route,Switch} from "react-router-dom";
import AppHeader from "./HeaderComponent/index";
import Del from "./del/index";
import Lists from "./content-rou/list";
import './style.css'
import Login from "./login/login";
class App extends Component{
    render(){
        return(
               <Fragment>
                   <Router>
                   <header>
                        <AppHeader />
                   </header>
                   <div id="content">
                       <Switch>
                           <Route path="/del/:id" component={Del}/>
                           <Route path="/:id?" component={Lists} exact/>
                       </Switch>
                   </div>
                   <footer>
                       foo
                    </footer>
                   </Router>
               </Fragment>
        )
    }
}
export default App;
