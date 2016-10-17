"use strict";

import React from 'react';
 
export default class Aside extends React.Component {
  render() {
    return (
    <div>
      <div><a href="/transferencia">Inicio</a></div>
      <a href="https://facebook.github.io/react/">Hello!</a>
      <div><a href="#">Transferencia</a></div>
      <div><a href="#">Consultas de Transferencias</a></div>
    </div>
    );
  }
}