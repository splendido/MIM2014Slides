
var textsOpts = [
    {_id: 1,  name: "navSignIn",       type: "str", obj: "texts", reinit: false},
    {_id: 2,  name: "navSignOut",      type: "str", obj: "texts", reinit: false},
    {_id: 3,  name: "optionalField",   type: "str", obj: "texts", reinit: false},
    {_id: 4,  name: "pwdLink_pre",     type: "str", obj: "texts", reinit: false},
    {_id: 5,  name: "pwdLink_link",    type: "str", obj: "texts", reinit: false},
    {_id: 6,  name: "pwdLink_suff",    type: "str", obj: "texts", reinit: false},
    {_id: 7,  name: "sep",             type: "str", obj: "texts", reinit: false},
    {_id: 8, name: "signInLink_pre",  type: "str", obj: "texts", reinit: false},
    {_id: 9, name: "signInLink_link", type: "str", obj: "texts", reinit: false},
    {_id: 10, name: "signInLink_suff", type: "str", obj: "texts", reinit: false},
    {_id: 11, name: "signUpLink_pre",  type: "str", obj: "texts", reinit: false},
    {_id: 12, name: "signUpLink_link", type: "str", obj: "texts", reinit: false},
    {_id: 13, name: "signUpLink_suff", type: "str", obj: "texts", reinit: false},
    {_id: 14, name: "socialAdd",       type: "str", obj: "texts", reinit: false},
    {_id: 15, name: "socialConfigure", type: "str", obj: "texts", reinit: false},
    {_id: 16, name: "socialRemove",    type: "str", obj: "texts", reinit: false},
    {_id: 17, name: "socialSignIn",    type: "str", obj: "texts", reinit: false},
    {_id: 28, name: "socialSignUp",    type: "str", obj: "texts", reinit: false},
    {_id: 29, name: "socialWith",      type: "str", obj: "texts", reinit: false},
    {_id: 30, name: "termsPreamble",   type: "str", obj: "texts", reinit: false},
    {_id: 31, name: "termsPrivacy",    type: "str", obj: "texts", reinit: false},
    {_id: 32, name: "termsAnd",        type: "str", obj: "texts", reinit: false},
    {_id: 33, name: "termsTerms",      type: "str", obj: "texts", reinit: false},
    {_id: 34, name: "title",           type: "str", obj: "texts", reinit: false},
];

// TODO:

var button = [

];

var error = [

];

var info = [

];


Template.texts.helpers({
    options: function(){
        return textsOpts;
    },
    templateName: function(){
        if (this.type == "boolean")
            return "atBooleanOpt";
        return "atTextOpt";
    },
    confCode: function(){
        var text = "//Appearance\nAccountsTemplates.configure({";
        _.each(textsOpts, function(opt){
            var value = AccountsTemplates.texts[opt.name];
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
