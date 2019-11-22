const cron = require('node-cron');
const express = require('express');
const axios = require('axios');
const fs = require('fs');

app = express();
let res = {};
const name = async () => {
	try {
		let date_ob = new Date();

		// current date
		// adjust 0 before single digit date
		let date = ('0' + date_ob.getDate()).slice(-2);

		// current month
		let month = ('0' + (date_ob.getMonth() + 1)).slice(-2);

		// current year
		let year = date_ob.getFullYear();

		// current hours
		let hours = date_ob.getHours();

		// current minutes
		let minutes = date_ob.getMinutes();

		// current seconds
		let seconds = date_ob.getSeconds();

		// prints date in YYYY-MM-DD format
		console.log(year + '-' + month + '-' + date);

		// prints date & time in YYYY-MM-DD HH:MM:SS format
		console.log(year + '-' + month + '-' + date + ' ' + hours + ':' + minutes + ':' + seconds);

		// prints time in HH:MM format
		console.log(hours + ':' + minutes);
	} catch (error) {
		console.error(error);
	}
};

name();
//shedule tasks to run on server

// cron.schedule('* * 21 * *', () => {
// 	console.log('-----------------------');
// 	console.log('running cron job');
// 	fs.unlink('./error.log', (err) => {
// 		if (err) throw err;
// 		console.log('error lile successfully deleted');
// 	});
// });

app.listen(3218);
