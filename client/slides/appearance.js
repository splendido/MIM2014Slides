var appearanceOpts = [
    {_id:1, name: "showAddRemoveServices"},
    {_id:2, name: "showForgotPasswordLink"},
    {_id:3, name: "showLabels"},
    {_id:4, name: "showPlaceholders"},
];

var termsOpts = [
    {_id:1, name: "privacyUrl"},
    {_id:2, name: "termsUrl"},
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
            if (!!value)
                text += "\n    " + opt.name + ": " + value;
        });
        text += "\n});";
        return text;
    },
});
