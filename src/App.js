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
           <Route path='/' element={<News pagesize='5' category='general'page='1'      apikey={this.apikey} />}/>
           <Route path='/home' element={<News pagesize='5' category='general' page='1' apikey={this.apikey} />}/>
            <Route path='/sport' element={<News  pagesize='5' category='sports' page='1' apikey={this.apikey} />}/>
            <Route path='/business' element={<News pagesize='5' category='business'page='1'   apikey={this.apikey} />}/>
            <Route path='/entertainment' element={<News  pagesize='5' category='entertainment' page='1'  apikey={this.apikey} />}/>
            <Route path='/health' element={<News  pagesize='5' category='health' page='1'apikey={this.apikey}  />}/>
            <Route path='/science' element={<News  pagesize='5' category='science'  page='1' apikey={this.apikey} />}/>
            <Route path='/technology' element={<News  pagesize='5' category='technology' page='1'  apikey={this.apikey} />}/>

         </Routes>
         </div>
         </Router>
      </div>
    )
  }
}

