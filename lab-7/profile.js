function add_p(s, f) {
	var j;
	for (j = s; j <= f; j++) {
	   var name = '';
	   var r = '';
	   var ph = 'D:\Project\lab6db\photo1.jpg';
	   var DoB = '';
	   
	   var u = Math.floor(Math.random()*(1000000 - 1 + 1)) + 1;
	   
	   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
	   var num = '1234567890';
	   var charactersLength = characters.length;
	   var numLength = num.length;
	   
	   for (var i = 0; i < 10; i++ ) {
		  name += characters.charAt(Math.floor(Math.random() * charactersLength));
	   }
	   
	   	   
	   var value = Math.floor(Math.random()*2)+1;
	   if (value == 1)
			s = 'Male';
	   else if (value == 2)
			s = 'Female';
		
		
		var kind = Math.floor(Math.random()*3)+1;
		if (kind == 1)
			k = 'Teacher';
	   else if (value == 2)
			k = 'Student';
		else if (value == 3)
			k = 'Welder';
		
		var inc = Math.floor(Math.random()*10000)+1;
		
	   
		ph += j + '.jpg';
		
		var year = Math.floor(Math.random()*(2002-1965+1)) + 1965;
		var month = Math.floor(Math.random()*(12-1+1)) + 1;
		var day = Math.floor(Math.random()*(30-1+1)) + 1;
		
		if (month < 10)
			month = '0' + month;
		if (day < 10)
			day = '0' + day;
		
		DoB = year + '-' + month + '-' + day;
		db.profile.insert([{user_id: u, nickname: name, photo: ph, sex: s, birth_date:ISODate(DoB), kind_of_activity: k, income: inc }])
	}
	db.profile.insert({user_id: u, nickname:"Michael", photo: "D:\Project\lab6db\photo1.jpg", sex:"Male", birth_date:new Date(), kind_of_activity:"Student", income: 3000})
}