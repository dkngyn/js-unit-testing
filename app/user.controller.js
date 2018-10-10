const UserController = function () {
	let userList;

	load = function(users) {
		userList = users;
	};

	isValidId = function(user) {
		return userList.indexOf(user) >= 0;
	};

	isValidIdAsync = function (user, callback) {
		setTimeout(function() {
			callback(userList.indexOf(user) >= 0);
		}, 1);
	};

	return {
		load,
		isValidId,
		isValidIdAsync
	};
};

module.exports = UserController;