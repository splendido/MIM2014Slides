Template.atState.rendered = function(){
    $('.ui.dropdown').dropdown();
};

Template.atState.helpers({
    state: function(){
        return AccountsTemplates.getState();
    },
    states: function(){
        var states = _.map(AccountsTemplates.STATES, function(name, id){
            return {
                _id: id,
                name: name,
            };
        });
        console.dir(states);
        return states;
    },
});

Template.atState.events({
    "click .item": function(){
        AccountsTemplates.setState(this.name);
    }
});