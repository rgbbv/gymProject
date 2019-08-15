
enterWaitingList = (req, res, connection) => {
	var que = 'INSERT IGNORE INTO waiting (courseId, participantId) VALUES (?, ?)';
	connection.query(que, [req.body.courseId, req.body.participantId], (err) => {
		if (err) throw err;
		res.send('you have been added to the waiting list')
	})
}

getWaitingList = (req, res, connection, rowsRegistered) => {
	var que = 'SELECT courseId FROM waiting WHERE participantId = ?'
	connection.query(que, [req.query.participantId], (err2, rowsWaiting) => {
		if (err2) throw err
		res.send({register: rowsRegistered, wait: rowsWaiting})
	})
}

module.exports = { enterWaitingList, getWaitingList }