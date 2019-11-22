const cron = require('node-cron');
const express = require('express');
const fs = require('fs');

app = express();

//shedule tasks every minute

cron.schedule('* * * * *', () => {
	console.log('running task every minute');
});

app.listen(3218);
