"use strict";

import React from 'react';
 
export default class Article extends React.Component {
  render() {
    return (
      <div class="row">
      <h1>Transferencia</h1>
        <div><label>Número de Cuenta Desde:</label> <input/></div>
        <div><label>Número de Cuenta Para:</label> <input/></div>
        <div><label>Nombre Completo Propietario de Cuenta:</label> <input/></div>
        <div><label>Fecha de Transferencia:</label> <input/></div>
        <div><label>Monto a Transferir:</label> <input/></div>
        <div class="field-wrap"><button type="button" class="btn btn--red">Confirmar</button> <button type="button" class="btn btn--red">Borrar</button></div>
      </div>
    );
  }
}