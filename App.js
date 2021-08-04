import React from 'react'
import Home from './Home'
// import About from './About'
// import Contact from './Contact'
import { Route, Switch } from 'react-router-dom'
import Navbar from './Navbar'
import AddUser from './User/AddUser'
import EditUser from './User/EditUser'
import DisplayUser from './DisplayUser'
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  return (
    <>
      {/* Serch btn  */}
      <Navbar />
      <br />
      <Switch>
        <div className="container-fluid nav-bg">
          <div className="row">
            <div className='col-10 mx-auto'>

              <Route exact path='/' component={Home} />
              <Route exact path='/newuser' component={AddUser} />
              <Route exact path= '/edituser/:id'
                component={EditUser} />
              <Route exact path="/users/:id" component={DisplayUser} />
              {/* <Route exact path='/about' component={About} />
              <Route exact path='/contact' component={Contact} /> */}
            </div>
          </div>
        </div>

      </Switch>
    </>
  )
}

export default App;