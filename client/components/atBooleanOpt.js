Template.atBooleanOpt.created = function(){
    var obj = this.data.obj;
    var checked = AccountsTemplates[obj][this.data.name];
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
        var obj = t.data.obj;
        var code = t.data.code;
        var checked = !t.checked.get();
        t.checked.set(checked);
        AccountsTemplates[obj][t.data.name] = checked;
        if (t.data.reinit)
            reinitAT();
    },
});
