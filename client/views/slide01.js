var appearanceOpts = [
    {_id:1, name: "showAddRemoveServices"},
    {_id:2, name: "showForgotPasswordLink"},
    {_id:3, name: "showLabels"},
    {_id:4, name: "showPlaceholders"},
];

Template.slide01.helpers({
    props: function(){
        return appearanceOpts;
    },
    confCode: function(){
        var text = "//Appearance\nAccountsTemplates.configure({";
        _.each(appearanceOpts, function(opt){
            text += "\n    " + opt.name + ": " + AccountsTemplates.options[opt.name];
        });
        text += "\n});";
        return text;
    },
});