Template.atTextOpt.rendered = function(){
    var value = AccountsTemplates.options[this.data.name];
    if (value)
        this.$('input').val(value);
};

Template.atTextOpt.helpers({
    answered: function(){
        var value = AccountsTemplates.options[this.name];
        return !!value;
    },
});

Template.atTextOpt.events({
    "change input": function(e, t){
        var value = t.$('input').val();
        AccountsTemplates.options[t.data.name] = value;
    },
});