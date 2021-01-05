import react from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import Home from '../../pages/Home'

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={Home}/>
  </BrowserRouter>
)

export default Routes