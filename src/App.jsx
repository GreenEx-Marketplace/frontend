import { useEffect } from 'react';

import { Routes, Route, useNavigate } from 'react-router-dom';

import { AuthProvider } from './context/AuthContext';

import supabase from './supabase';
import Login from './pages/Login';
import Home from './pages/Home';

function App() {
	const navigate = useNavigate();

	useEffect(() => {
		supabase.auth.onAuthStateChange((_event, session) => {
			if (session === null) {
				navigate('/login', { replace: true });
			}
		});
	}, [navigate]);

	return (
		<AuthProvider>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/' element={<Home />} />
			</Routes>
		</AuthProvider>
	);
}

export default App;
