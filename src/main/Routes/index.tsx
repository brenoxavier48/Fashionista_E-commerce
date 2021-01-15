import react from 'react'
import { Route } from 'react-router-dom'
import ProductsCatalog from '../../presentation/components/ProductsCatalog'
import SingleProductView from '../../presentation/components/SingleProductView'

const Routes = () => (
  <>
    <Route exact path="/" component={ProductsCatalog}/>
    <Route exact path="/SingleProductView" component={SingleProductView}/>
  </>
)

export default Routes