
var textsOpts = [
    {_id: 2,  name: "navSignIn",       type: "str"},
    {_id: 3,  name: "navSignOut",      type: "str"},
    {_id: 4,  name: "info",            type: "str"},
    {_id: 5,  name: "optionalField",   type: "str"},
    {_id: 6,  name: "pwdLink_pre",     type: "str"},
    {_id: 7,  name: "pwdLink_link",    type: "str"},
    {_id: 8,  name: "pwdLink_suff",    type: "str"},
    {_id: 9,  name: "sep",             type: "str"},
    {_id: 10, name: "signInLink_pre",  type: "str"},
    {_id: 11, name: "signInLink_link", type: "str"},
    {_id: 12, name: "signInLink_suff", type: "str"},
    {_id: 13, name: "signUpLink_pre",  type: "str"},
    {_id: 14, name: "signUpLink_link", type: "str"},
    {_id: 15, name: "signUpLink_suff", type: "str"},
    {_id: 16, name: "socialAdd",       type: "str"},
    {_id: 17, name: "socialConfigure", type: "str"},
    {_id: 18, name: "socialRemove",    type: "str"},
    {_id: 19, name: "socialSignIn",    type: "str"},
    {_id: 20, name: "socialSignUp",    type: "str"},
    {_id: 21, name: "socialWith",      type: "str"},
    {_id: 22, name: "termsPreamble",   type: "str"},
    {_id: 23, name: "termsPrivacy",    type: "str"},
    {_id: 24, name: "termsAnd",        type: "str"},
    {_id: 25, name: "termsTerms",      type: "str"},
    {_id: 26, name: "title",           type: "str"},
];

// TODO:

var button = [

];

var error = [

];

var info = [

];


Template.texts.helpers({
    textsOpts: function(){
        return textsOpts;
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
