import react from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import ProductsCatalog from '../../components/ProductsCatalog'
import SingleProductView from '../../components/SingleProductView'

const Routes = () => (
  <BrowserRouter>
    <Route exact path="/" component={ProductsCatalog}/>
    <Route exact path="/SingleProductView" component={SingleProductView}/>
  </BrowserRouter>
)

export default Routes