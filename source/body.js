"use strict";

import React from 'react';
 
export default class Divbody extends React.Component {
  render() {
    return (
      <div class="row">
        <div id="header"></div>
        <div id="aside" class="col-md-4"></div>
        <div id="article" class="col-md-8"></div>
        <div id="footer"></div>
      </div>
    );
  }
}