const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

app = express();

//shedule tasks to run on server

cron.schedule('* * 21 * *', () => {
	console.log('-----------------------');
	console.log('running cron job');
	fs.unlink('./error.log', (err) => {
		if (err) throw err;
		console.log('error lile successfully deleted');
	});
});

app.listen(3218);
