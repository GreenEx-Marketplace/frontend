import supabase from './index';

export const signInWithCredentials = async (email, password) => {
	const { data, error } = await supabase.auth.signInWithPassword({
		email,
		password,
	});

	if (error) {
		throw error;
	}

	const userData = await supabase
		.from('profiles')
		.select('id, full_name, username, avatar_url')
		.eq('id', data.user.id)
		.single();

	return { user: userData.data };
};

export const signInWithOAuth = async provider => {
	const { data, error } = await supabase.auth.signInWithOAuth({
		provider,
		options: {
			redirectTo: window.location.origin + '/',
		},
	});

	console.log(data);

	if (error) {
		throw error;
	}

	return data;
};

export const signOut = async () => {
	const { error } = await supabase.auth.signOut();
	if (error) {
		throw error;
	}
};

export const signUp = async (email, password) => {
	const { user, error } = await supabase.auth.signUp({ email, password });

	if (error) {
		throw error;
	}

	return user;
};
