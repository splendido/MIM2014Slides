var appearanceOpts = [
    {_id:1, name: "confirmPassword"},
    {_id:2, name: "enablePasswordChange"},
    {_id:3, name: "forbidClientAccountCreation"},
    {_id:4, name: "sendVerificationEmail"},
];

var termsOpts = [
    {_id:1, name: "homeRoutePath"},
    {_id:2, name: "redirectTimeout"},
];

Template.behaviour.helpers({
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
