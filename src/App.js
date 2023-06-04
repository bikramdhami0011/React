import React, { Component } from 'react'
import Nevbar from './component/Nevbar'
import News from './component/News'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

export default class App extends Component {
  apikey="b0ca89111c2a404aa8948030edbfde2b"
  render() {
    return (
      <div>
        <Router>
         <Nevbar >
         </Nevbar>
         <div className="container">
         <Routes>
           <Route exact path='/' element={<News key='/' pagesize='5' category='general'page='1'      apikey={this.apikey} />}/>
           <Route exact path='/home' element={<News key='home' pagesize='5' category='general' page='1' apikey={this.apikey} />}/>
            <Route exact path='/sport' element={<News key='sport'  pagesize='5' category='sports' page='1' apikey={this.apikey} />}/>
            <Route exact path='/business' element={<News key='business' pagesize='5' category='business'page='1'   apikey={this.apikey} />}/>
            <Route exact path='/entertainment' element={<News key='entertainment'  pagesize='5' category='entertainment' page='1'  apikey={this.apikey} />}/>
            <Route exact path='/health' element={<News key='health'  pagesize='5' category='health' page='1'apikey={this.apikey}  />}/>
            <Route exact path='/science' element={<News key='science' pagesize='5' category='science'  page='1' apikey={this.apikey} />}/>
            <Route exact path='/technology' element={<News key='technology'  pagesize='5' category='technology' page='1'  apikey={this.apikey} />}/>

         </Routes>
         </div>
         </Router>
      </div>
    )
  }
}

