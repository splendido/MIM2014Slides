var appearanceOpts = [
    {_id:1, name: "showAddRemoveServices",  type: "boolean", obj: "options", reinit: false},
    {_id:2, name: "showForgotPasswordLink", type: "boolean", obj: "options", reinit: false},
    {_id:3, name: "showLabels",             type: "boolean", obj: "options", reinit: false},
    {_id:4, name: "showPlaceholders",       type: "boolean", obj: "options", reinit: false},
    {_id:5, name: "privacyUrl",             type: "str",     obj: "options", reinit: false},
    {_id:6, name: "termsUrl",               type: "str",     obj: "options", reinit: false},
];

Template.appearance.helpers({
    options: function(){
        return appearanceOpts;
    },
    templateName: function(){
        if (this.type == "boolean")
            return "atBooleanOpt";
        return "atTextOpt";
    },
    confCode: function(){
        var text = "//Appearance\nAccountsTemplates.configure({";
        _.each(appearanceOpts, function(opt){
            var obj = opt.obj;
            var value = AccountsTemplates[obj][opt.name];
            if (opt.type == "boolean") {
                text += "\n    " + opt.name + ": " + value;
            }
            else {
                if (!!value) {
                    if (opt.type == "str")
                        text += "\n    " + opt.name + ": \"" + value + "\"";
                    else
                        text += "\n    " + opt.name + ": " + value;
                }
            }
        });
        text += "\n});";
        return text;
    },
});
