// import React from "react";
// import ReactDOM from "react-dom";
// import App from "./App";
// import { BrowserRouter } from "react-router-dom";

// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById("root")
// );


import React from 'react';
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

import { createRoot } from 'react-dom/client';
const container = document.getElementById('app');
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>

)