import React, {Component} from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Peliculas from './components/Peliculas';
import SeccionPruebas from './components/SeccionPruebas';
import MiComponente from './components/MiComponente';
import Error from './components/Error';


class  Router extends Component{
  render(){
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" Component={Peliculas} />
          <Route exact path="/ruta-prueba" Component={SeccionPruebas} />
          <Route exact path="/segunda-ruta" Component={MiComponente} />

          <Route exact path='/pagina-1' element={
              <React.Fragment>
                <h1>Hola mundo desde la ruta /pagina-1</h1>
                <p>
                  Esta ruta tiene desarrollado <code>JSX</code> dentro del Element                  
                </p>
              </React.Fragment>
            }
          />
          <Route path="*" Component = {Error}/>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default Router;