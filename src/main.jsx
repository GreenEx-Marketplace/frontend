import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import StyledEngineProvider from '@mui/material/StyledEngineProvider';
import { ThemeProvider } from '@mui/material';

import getCustomTheme from './theme';

import App from './App';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<BrowserRouter>
			<ThemeProvider theme={getCustomTheme()}>
				<StyledEngineProvider injectFirst>
					<CssBaseline />
					<App />
				</StyledEngineProvider>
			</ThemeProvider>
		</BrowserRouter>
	</React.StrictMode>
);
