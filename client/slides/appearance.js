var appearanceOpts = [
    {_id:1, name: "showAddRemoveServices",  type: "boolean"},
    {_id:2, name: "showForgotPasswordLink", type: "boolean"},
    {_id:3, name: "showLabels",             type: "boolean"},
    {_id:4, name: "showPlaceholders",       type: "boolean"},
];

var termsOpts = [
    {_id:1, name: "privacyUrl", type: "str"},
    {_id:2, name: "termsUrl",   type: "str"},
];

Template.appearance.helpers({
    booleanOpts: function(){
        return appearanceOpts;
    },
    textOpts: function(){
        return termsOpts;
    },
    confCode: function(){
        var text = "//Appearance\nAccountsTemplates.configure({";
        _.each(appearanceOpts, function(opt){
            text += "\n    " + opt.name + ": " + AccountsTemplates.options[opt.name];
        });
        _.each(termsOpts, function(opt){
            var value = AccountsTemplates.options[opt.name];
            if (!!value) {
                if (opt.type == "str")
                    text += "\n    " + opt.name + ": \"" + value + "\"";
                else
                    text += "\n    " + opt.name + ": " + value;
            }
        });
        text += "\n});";
        return text;
    },
});
