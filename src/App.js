
import React from 'react';
import './App.css';
import {Switch,Route, useHistory} from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { Button } from '@mui/material';
import { Contact } from './Contact';
import { MakeupList } from './MakeupList';
import { Home } from './Home';
function App() {
  const history=useHistory();
  return (
    <div className="App">
      <div className="router-container">
         <AppBar style={{ backgroundColor: "#f11094"}} position="fixed">
        <Toolbar >
              <Button color="inherit" onClick={()=> history.push("/")}>Home</Button>
              <Button color="inherit" onClick={()=> history.push("/about")}>About</Button>
              <Button color="inherit" onClick={()=> history.push("/products")}>Products</Button>
              <Button color="inherit" onClick={()=> history.push("/contact")}>Contact us</Button>
              </Toolbar>
      </AppBar>
        </div>
        <Switch>
        <Route exact path="/">
                <Home/>
        </Route>
        <Route path="/about">
           About
        </Route>
        <Route path="/products">
          <MakeupList/>
        </Route>
        <Route path="/contact">
           <Contact/>
        </Route>
      </Switch>
    </div>
  );
}
export default App;
