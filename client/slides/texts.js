var titleOpts = [
    {_id:  1, name: "changePwd",        type: "str", obj: "texts.title",       reinit: false},
    {_id:  2, name: "enrollAccount",    type: "str", obj: "texts.title",       reinit: false},
    {_id:  3, name: "forgotPwd",        type: "str", obj: "texts.title",       reinit: false},
    {_id:  4, name: "resetPwd",         type: "str", obj: "texts.title",       reinit: false},
    {_id:  5, name: "signIn",           type: "str", obj: "texts.title",       reinit: false},
    {_id:  6, name: "signUp",           type: "str", obj: "texts.title",       reinit: false},
];

var socialOpts = [
    {_id:  7, name: "facebook",         type: "str", obj: "texts.socialIcons", reinit: false},
    {_id:  8, name: "google",           type: "str", obj: "texts.socialIcons", reinit: false},
    {_id:  9, name: "meteor-developer", type: "str", obj: "texts.socialIcons", reinit: false},
    {_id: 10, name: "socialAdd",        type: "str", obj: "texts",             reinit: false},
    {_id: 11, name: "socialConfigure",  type: "str", obj: "texts",             reinit: false},
    {_id: 12, name: "socialRemove",     type: "str", obj: "texts",             reinit: false},
    {_id: 13, name: "socialSignIn",     type: "str", obj: "texts",             reinit: false},
    {_id: 14, name: "socialSignUp",     type: "str", obj: "texts",             reinit: false},
    {_id: 15, name: "socialWith",       type: "str", obj: "texts",             reinit: false},
    {_id: 16, name: "sep",              type: "str", obj: "texts",             reinit: false},
];

var errorsOpts = [
    {_id: 17, name: "mustBeLoggedIn",    type: "str", obj: "texts.errors",     reinit: false},
    {_id: 18, name: "pwdMismatch",       type: "str", obj: "texts.errors",     reinit: false},
];

var infoOpts = [
    {_id: 19, name: "emailSent",         type: "str", obj: "texts.info",       reinit: false},
    {_id: 20, name: "emailVerified",     type: "str", obj: "texts.info",       reinit: false},
    {_id: 21, name: "pwdChanged",        type: "str", obj: "texts.info",       reinit: false},
    {_id: 22, name: "pwdReset",          type: "str", obj: "texts.info",       reinit: false},
    {_id: 23, name: "pwdSet",            type: "str", obj: "texts.info",       reinit: false},
    {_id: 24, name: "singUpVerifyEmail", type: "str", obj: "texts.info",       reinit: false},
];

var linksOpts = [
    {_id: 25, name: "pwdLink_pre",       type: "str", obj: "texts",            reinit: false},
    {_id: 26, name: "pwdLink_link",      type: "str", obj: "texts",            reinit: false},
    {_id: 27, name: "pwdLink_suff",      type: "str", obj: "texts",            reinit: false},
    {_id: 28, name: "signInLink_pre",    type: "str", obj: "texts",            reinit: false},
    {_id: 29, name: "signInLink_link",   type: "str", obj: "texts",            reinit: false},
    {_id: 30, name: "signInLink_suff",   type: "str", obj: "texts",            reinit: false},
    {_id: 31, name: "signUpLink_pre",    type: "str", obj: "texts",            reinit: false},
    {_id: 32, name: "signUpLink_link",   type: "str", obj: "texts",            reinit: false},
    {_id: 33, name: "signUpLink_suff",   type: "str", obj: "texts",            reinit: false},
    {_id: 34, name: "termsPreamble",     type: "str", obj: "texts",            reinit: false},
    {_id: 35, name: "termsPrivacy",      type: "str", obj: "texts",            reinit: false},
    {_id: 36, name: "termsAnd",          type: "str", obj: "texts",            reinit: false},
    {_id: 37, name: "termsTerms",        type: "str", obj: "texts",            reinit: false},
];

var miscOpts = [
    {_id: 38, name: "navSignIn",         type: "str", obj: "texts",            reinit: false},
    {_id: 39, name: "navSignOut",        type: "str", obj: "texts",            reinit: false},
    {_id: 40, name: "optionalField",     type: "str", obj: "texts",            reinit: false},
];


var order_of_objs = [
    {obj: "texts.title",       comm: "// Title"},
    {obj: "texts.socialIcons", comm: "// Social Icons"},
    {obj: "texts.errors",      comm: "// Error Messages"},
    {obj: "texts.info",        comm: "// Info Messages"},
    {obj: "texts",             comm: "// Others"},
];

var groups = [
    {
        _id: 0,
        name: "-",
        options: [],
    },
    {
        _id: 1,
        name: "Title",
        options: titleOpts,
    },
    {
        _id: 2,
        name: "Social",
        options: socialOpts,
    },
    {
        _id: 3,
        name: "Errors",
        options: errorsOpts,
    },
    {
        _id: 4,
        name: "Info",
        options: infoOpts,
    },
    {
        _id: 5,
        name: "Links",
        options: linksOpts,
    },
    {
        _id: 6,
        name: "Others",
        options: miscOpts,
    },
];

Template.texts.helpers({
    confCode: function(){
        var text = "//Texts\nAccountsTemplates.configure({";
        _.each(order_of_objs, function(o_group){        
            text += "\n    " + o_group.comm;
            var subObj = o_group.obj.split(".")[1]
            if (subObj)
                text += "\n    " + subObj + ": {";
            _.each(groups, function(group){
                _.each(group.options, function(opt){
                    if (opt.obj !== o_group.obj)
                        return;
                    var optObj = getOptObj(opt.obj);
                    var value = optObj[opt.name];
                    if (!!value) {
                        text += "\n"
                        if (subObj)
                            text += "    ";
                        if (opt.type == "str")
                            text += "    " + opt.name + ": \"" + value + "\",";
                        else
                            text += "    " + opt.name + ": " + value + ",";
                    }
                });
            })
            if (subObj)
                text += "\n    },";
        });
        text += "\n});";
        return text;
    },
});

Template.textsButtons.created = function(){
    Session.set('optGroup', "-");
};

Template.textsButtons.helpers({
    optGroups: function(){
        return groups;
    },
    active: function(){
        if (this.name == Session.get('optGroup'))
            return "active";
    },
});

Template.textsButtons.events({
    "click .button": function(e,t){
        Session.set('optGroup', this.name);
    },
});

Template.textsOptions.helpers({
    options: function(){
        var name = Session.get('optGroup')
        var group = _.filter(groups, function(grp){
            return grp.name === name;
        });
        if (!group.length)
            return [];
        return group[0].options;
    },
    templateName: function(){
        if (this.type == "boolean")
            return "atBooleanOpt";
        return "atTextOpt";
    },
});

Template.textsOptions.events({
    "click .accordion.opt1 > .title": function(e, t){
        console.log("click 1");
        $('.ui.accordion.opt1').accordion("open", 0);
    },
    "click .accordion.opt2 > .title": function(e, t){
        console.log("click 2");
        var index = t.data._id;
        $('.ui.accordion.opt2').accordion("open", index);
    },
})