// object maker function
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

// constructor
function HumanConstr(firstName, lastName) {
	var that = this;
	this.firstName = firstName;
	this.lastName = lastName;

	// Method will be copied to all instances, speed is compromised
  this.getfirstName = function() {
 	
		return that.firstName;
	}
}
HumanConstr.prototype.getLastName = function() {
	return this.lastName;
}

// factory
var HumanFactory = {
	create_object: function(firstName, lastName) {
		var human = Object.create(this);
		human.firstName = firstName;
		human.lastName = lastName;
		return human;
	},
	getLastName: function() {
		return this.lastName;
	},
	getfirstName: function() {
		return this.firstName;
	}
}