AccountsTemplates.addField({
    _id: 'reg_code',
    type: 'hidden'
});

// Options
AccountsTemplates.configure({
    texts: {
        socialIcons: {
            "meteor-developer": "rocket",
        },
    }
});


// Initialization
Meteor.startup(function(){
    AccountsTemplates.init();

    if (Meteor.isClient){
        AccountsTemplates.options = new ReactiveObjects(AccountsTemplates.options);
        AccountsTemplates.texts = new ReactiveObjects(AccountsTemplates.texts);
    }
});
