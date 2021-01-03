function add_u(s, f) {
	var j;
	var log = 'user';
	for (j = s; j <= f; j++) {
	   log = 'user';
	   var r = '';
	   
	   log += j;
	   	   
	   var r = Math.floor(Math.random()*3)+1;
	  
		db.user.insert([{_id: j, role_id: r, login: log, password: log}])
	}
	db.user.insert({_id:j, role_id: 1, login:(log+j), password:(log+j)})
}