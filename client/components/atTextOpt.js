Template.atTextOpt.rendered = function(){
    var obj = this.data.obj;
    var value = AccountsTemplates[obj][this.data.name];
    if (value)
        this.$('input').val(value);
};

Template.atTextOpt.helpers({
    answered: function(){
        var obj = this.obj;
        var value = AccountsTemplates[obj][this.name];
        return !!value;
    },
});

Template.atTextOpt.events({
    "change input": function(e, t){
        var obj = t.data.obj;
        var value = t.$('input').val();
        if (t.data.type === "number")
            value = parseInt(value);
        AccountsTemplates[obj][t.data.name] = value;
        if (t.data.reinit)
            reinitAT();
    },
});
