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

	isAuthorizedPromise = function(user) {
		return new Promise(function(resolve) {
			setTimeout(function() {
				resolve(userList.indexOf(user) >= 0);
			}, 5);
		});
	};

	return {
		load,
		isValidId,
		isValidIdAsync,
		isAuthorizedPromise
	};
};

module.exports = UserController;