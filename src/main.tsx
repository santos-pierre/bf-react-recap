import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { render } from 'react-dom';

// ReactDOM.createRoot(document.getElementById("root")!).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );

const container = document.getElementById('root');
render(<App />, container);
