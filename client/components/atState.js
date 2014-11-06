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
    },
    "click .ui.dropdown.button": function(e, t){
        console.log("click");
        console.dir(e);
        e.preventDefault();
        e.stopPropagation();
        $(e.currentTarget).dropdown("toggle");
    },
});
