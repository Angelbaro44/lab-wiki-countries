import React, { Component } from 'react';
import './App.css';
import { Switch, Route, Link } from 'react-router-dom';
import countrys from './countries.json';
import Countrydets from "./Countrysdets"

class App extends Component {

  displaycountrys = () => {
    return (
      countrys.map((count) => {
        return (

          <li><Link to={`/countries/${count.flag}`}>{count.name.common}</Link></li>

        )
      })
    )
  }






  render() {
    return (
      <div style={{ color: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
        <div style={{width:'40%'}}>

        <nav style={{maxWidth:'606px', justifyContent:'center', fontSize:'20px', border:'outset', }} className="title-bar"  >
          <Link style={{ color: 'white', maxWidth:'100%'}} to='/home'>Wiki_Countries</Link>
          <br />
          <br />
        </nav>
        <div className="row" style={{placeContent: 'center', flex:'12'}}>

          <div className="window" style={{ maxHeight: '80vh', overflow: 'scroll' ,margin:'10px', flex:'7'}}>
            <h1 style={{ color: 'white',fontSize:'20px' }} className="title-bar" >Countries</h1>
            <div className="window"><ul className="tree-view"><ul style={{ paddingBottom: '10px' }} >{this.displaycountrys()}</ul></ul></div>
          </div>
          <div className="window" style={{ flex:'5' ,margin:'10px'}} >
            <Switch>

              <Route exact path='/countries/:id' component={(props) => <Countrydets {...props} countrys={countrys} />}></Route>

            </Switch>
          </div>
        </div>

        </div>
        powered by caffeine :)

      </div>
    );
  }
}

export default App;


