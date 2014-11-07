AccountsTemplates.addField({
    _id: 'reg_code',
    type: 'hidden'
});

AccountsTemplates.addField({
    _id: 'name',
    type: 'text',
    displayName: "Full Name",
    //minLength: 5,
    //maxLength: 30,
    func: function(value){return value === 'Full Name';},
    errStr: 'Only "Full Name" allowed!',
    trim: true,
});

AccountsTemplates.addField({
    _id: 'phone',
    type: 'tel',
    displayName: "Phone",
    re: /^[(]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{3}[-\s\.]{0,1}[0-9]{4}$/,
    errStr: 'Invalid Phone number!',
});

// Options
AccountsTemplates.configure({
    texts: {
        socialIcons: {
            "google": "google",
            "facebook": "facebook",
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
        AccountsTemplates.texts.title = new ReactiveObjects(AccountsTemplates.texts.title);
        AccountsTemplates.texts.button = new ReactiveObjects(AccountsTemplates.texts.button);
        AccountsTemplates.texts.errors = new ReactiveObjects(AccountsTemplates.texts.errors);
        AccountsTemplates.texts.info = new ReactiveObjects(AccountsTemplates.texts.info);
        AccountsTemplates.texts.socialIcons = new ReactiveObjects(AccountsTemplates.texts.socialIcons);
    }
});
