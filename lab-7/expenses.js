function add_e(s, f) {
	var j;
	for (j = s; j <= f; j++) {
	   var u = Math.floor(Math.random()*(1000000 - 1 + 1)) + 1;
	   
	   var DoE = '';


	   var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz';
	   var charactersLength = characters.length;
	   
	   var t = Math.floor(Math.random()*5)+1;
	  
		var year = Math.floor(Math.random()*(2020-2017+1)) + 2017;
		var month = Math.floor(Math.random()*(12-1+1)) + 1;
		var day = Math.floor(Math.random()*(30-1+1)) + 1;
		
		if (month < 10)
			month = '0' + month;
		if (day < 10)
			day = '0' + day;
		
		DoE = year + '-' + month + '-' + day;
		
		var exp = Math.floor(Math.random()*400)+1;
	   
		db.expenses.insert([{_id: j, type_id: t, spend_date:ISODate(DoE), sum_of_expenses: exp, user_id: u}])
	}
	db.expenses.insert({_id: j, type_id: t, spend_date:new Date(), sum_of_expenses: 300, user_id: u})
}