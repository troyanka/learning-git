function authenticate (login, password){
	if(login === 'login' && password === "password"){
		return "You were logged in";
	}
	else{
		return 'login is incorrect';
	}
}