Meteor.publish("AllContributors", function(){
	return Contributors.find();
});