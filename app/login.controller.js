const LoginController = function() {
	isValidUserId = function(userList, user) {
		return userList.indexOf(user) >= 0;
	};

	isValidUserIdAsync = function (userList, user, callback) {
		setTimeout(function() {
			callback(userList.indexOf(user) >= 0);
		}, 1);
	};

	return {
		isValidUserId,
		isValidUserIdAsync
	};
};

module.exports = LoginController;