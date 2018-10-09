const LoginController = function() {
	isValidUserId = function(userList, user) {
		return userList.indexOf(user) >= 0;
	};

	return {
		isValidUserId
	};
};

module.exports = LoginController;