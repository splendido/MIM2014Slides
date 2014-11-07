Template.atTextOpt.rendered = function(){
    var optObj = getOptObj(this.data.obj);
    var value = optObj[this.data.name];
    if (value)
        this.$('input').val(value);
};

Template.atTextOpt.helpers({
    answered: function(){
        var optObj = getOptObj(this.obj);
        var value = optObj[this.name];
        return !!value;
    },
});

Template.atTextOpt.events({
    "change input": function(e, t){
        var optObj = getOptObj(t.data.obj);
        var value = t.$('input').val();
        if (t.data.type === "number")
            value = parseInt(value);
        optObj[t.data.name] = value;
        if (t.data.reinit)
            reinitAT();
    },
});
