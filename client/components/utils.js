reinitAT = function(){
    AccountsTemplates._initialized = false;
    var fields = _.chain(AccountsTemplates._fields)
        .map(function(field){
            return _.pick(field, [
                "_id",
                "type",
                "required",
                "displayName",
                "placeholder",
                "minLength",
                "maxLength",
                "re",
                "func",
                "errStr",
                "continuousValidation",
                "negativeFeedback",
                "negativeValidation",
                "positiveValidation",
                "positiveFeedback",
                "trim",
                "lowercase",
                "uppercase"
            ]);
        })
        .reject(function(field){
            return field._id === "password_again" || field._id === "new_password_again";
        })
        .value();
    AccountsTemplates._fields = fields;
    var state = AccountsTemplates.getState();
    // Actual re-initialization...
    AccountsTemplates.init();
    $('div.at-form').remove();
    Blaze.render(Template.atForm, $('#atFormDiv').get(0));
    AccountsTemplates.setState(state);
};

redrawAT = function(){
    var state = AccountsTemplates.getState();
    $('div.at-form').remove();
    Blaze.render(Template.atForm, $('#atFormDiv').get(0));
    AccountsTemplates.setState(state);
};

getOptObj = function(obj){
    obj= obj.split(".");
    return _.reduce(obj, function(memo, o){
        return memo[o];
    }, AccountsTemplates);
};