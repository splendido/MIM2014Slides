Template.atBooleanOpt.created = function(){
    var optObj = getOptObj(this.data.obj);
    var checked = optObj[this.data.name];
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
        var optObj = getOptObj(t.data.obj);
        var code = t.data.code;
        var checked = !t.checked.get();
        t.checked.set(checked);
        optObj[t.data.name] = checked;
        if (t.data.reinit)
            reinitAT();
    },
});
