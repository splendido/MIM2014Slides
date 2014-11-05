Template.atState.rendered = function(){
    $('.ui.dropdown').dropdown();
};

Template.atState.helpers({
    state: function(){
        return AccountsTemplates.getState();
    },
    states: function(){
        return _.map(AccountsTemplates.STATES, function(name, id){
            return {
                _id: id,
                name: name,
            };
        });
    },
});

Template.atState.events({
    "click .item": function(e, t){
        AccountsTemplates.setState(this.name);
    }
});
