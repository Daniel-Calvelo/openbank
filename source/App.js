import React from 'react';
import {render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducer';
import Divbody from './body';
import Header from './header';
import Aside from './aside'; 
import Article from './article'; 
import Footer from './footer'; 

require("style-loader!css-loader!sass-loader!./app.scss");

render(<Divbody />, document.getElementById('content'));

render(<Header />, document.getElementById('header'));

render(<Aside />, document.getElementById('aside'));

render(<Article />, document.getElementById('article'));

render(<Footer/>, document.getElementById('footer'));