Template.atBooleanOpt.created = function(){
    var checked = AccountsTemplates.options[this.data.name];
    this.checked = new ReactiveVar(checked ? true : false);
};

Template.atBooleanOpt.helpers({
    checked: function(){
        var t = Template.instance();
        return t.checked.get();
    },
});

Template.atBooleanOpt.events({
    "click ": function(e, t){
        var code = t.data.code;
        var checked = !t.checked.get();
        t.checked.set(checked);
        AccountsTemplates.options[t.data.name] = checked;
    },
});