var behaviourOpts = [
    {_id:1, name: "confirmPassword",             type: "boolean", obj: "options", reinit: true},
    {_id:2, name: "enablePasswordChange",        type: "boolean", obj: "options", reinit: true},
    {_id:3, name: "forbidClientAccountCreation", type: "boolean", obj: "options", reinit: true},
    {_id:4, name: "sendVerificationEmail",       type: "boolean", obj: "options", reinit: true},
    {_id:5, name: "homeRoutePath",               type: "str",     obj: "options", reinit: true},
    {_id:6, name: "redirectTimeout",             type: "number",  obj: "options", reinit: true},
];

Template.behaviour.helpers({
    options: function(){
        return behaviourOpts;
    },
    templateName: function(){
        if (this.type == "boolean")
            return "atBooleanOpt";
        return "atTextOpt";
    },
    confCode: function(){
        var text = "//Behaviour\nAccountsTemplates.configure({";
        _.each(behaviourOpts, function(opt){
            var obj = opt.obj;
            var value = AccountsTemplates[obj][opt.name];
            if (opt.type == "boolean") {
                text += "\n    " + opt.name + ": " + value + ",";
            }
            else {
                if (!!value) {
                    if (opt.type == "str")
                        text += "\n    " + opt.name + ": '" + value + "',";
                    else
                        text += "\n    " + opt.name + ": " + value + ",";
                }
            }
        });
        text += "\n});";
        return text;
    },
});
