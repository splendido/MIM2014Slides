var appearanceOpts = [
    {_id:1, name: "confirmPassword",             type: "boolean"},
    {_id:2, name: "enablePasswordChange",        type: "boolean"},
    {_id:3, name: "forbidClientAccountCreation", type: "boolean"},
    {_id:4, name: "sendVerificationEmail",       type: "boolean"},
];

var termsOpts = [
    {_id:1, name: "homeRoutePath",   type: "str"},
    {_id:2, name: "redirectTimeout", type: "number"},
];

Template.behaviour.helpers({
    booleanOpts: function(){
        return appearanceOpts;
    },
    textOpts: function(){
        return termsOpts;
    },
    confCode: function(){
        var text = "//Behaviour\nAccountsTemplates.configure({";
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
