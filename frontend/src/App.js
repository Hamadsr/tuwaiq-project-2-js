import React from 'react';
import { Route } from 'react-router-dom';
import Navigation from './components/navigation/index'

require("dotenv").config();

const App = () => {
	return <div className="App">
		<Navigation/></div>;
};

export default App;
