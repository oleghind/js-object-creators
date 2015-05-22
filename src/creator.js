function create_object(firstName, lastName) {
	var human = {};
	var that = this;
	that.firstName = firstName;
	var setFirstName = function() {
			human['firstName'] = firstName;
	}
	setFirstName();

	var setLastName = function() {
			human['lastName'] = firstName;
	}
	setLastName();
	

	return human;
}