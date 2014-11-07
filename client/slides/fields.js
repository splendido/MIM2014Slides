Template.fields.helpers({
    confCode: function(){
        var refreshTrick = Session.get('refreshTrick');
        var text = "//Fields\nAccountsTemplates.addFields(";
        _.each(AccountsTemplates._fields, function(field){
            text += "\n    {";
            text += "\n        _id: '" + field._id +"',";
            text += "\n        type: '" + field.type +"',";
            if (field.required)
                text += "\n        required: true,";
            else
                text += "\n        required: false,";
            if (field.displayName)
                text += "\n        displayName: '" + field.displayName +"',";
            if (field.placeholder)
                text += "\n        placeholder: '" + field.placeholder +"',";
            if (field.minLength)
                text += "\n        minLength: " + field.minLength +",";
            if (field.maxLength)
                text += "\n        maxLength: " + field.maxLength +",";
            if (field.re)
                text += "\n        re: " + field.re +",";
            if (field.func)
                text += "\n        func: " + field.func +",";
            if (field.errStr)
                text += "\n        errStr: '" + field.errStr +"',";
            if (field.trim)
                text += "\n        trim: true,";
            if (field.lowercase)
                text += "\n        lowercase: true,";
            if (field.uppercase)
                text += "\n        uppercase: true,";
            text += "\n    },";
        });
        text += "\n});";
        return text;
    },
});

Template.configureFields.events({
    "click .accordion > .title": function(e, t){
        $('.ui.accordion').accordion("open", 0);
    },
});

Template.configureFields.helpers({
    fields: function(){
        var refreshTrick = Session.get('refreshTrick');
        return AccountsTemplates._fields;
    },
});

Template.field.helpers({
    iconName: function(){
        if (this.type === "text")
            return "edit";
        if (this.type === "email")
            return "mail outline";
        if (this.type === "password")
            return "asterisk";
        if (this.type === "checkbox")
            return "checked checkbox";
        if (this.type === "radio")
            return "ok circle";
        if (this.type === "tel")
            return "phone";
        if (this.type === "hidden")
            return "hide";
        return "unhide";
    },
    disabled: function(){
        if (_.contains(AccountsTemplates.SPECIAL_FIELDS, this._id))
            return "disabled";
    },
});

Template.field.events({
    "click .button.edit": function(){
        console.log("edit " + this._id);
    },
    "click .button.down": function(){
        console.log("down " + this._id);
        console.log("up " + this._id);
        var fieldName = this._id;
        var fieldIds = AccountsTemplates.getFieldIds();
        var fieldId = _.indexOf(fieldIds, fieldName);
        var field = AccountsTemplates._fields.splice(fieldId, 1)[0];
        AccountsTemplates._fields.splice(fieldId + 1, 0, field);
        AccountsTemplates._initialized = false;
        redrawAT();
        Session.set('refreshTrick', !Session.get('refreshTrick'));
    },
    "click .button.up": function(){
        console.log("up " + this._id);
        var fieldName = this._id;
        var fieldIds = AccountsTemplates.getFieldIds();
        var fieldId = _.indexOf(fieldIds, fieldName);
        var field = AccountsTemplates._fields.splice(fieldId, 1)[0];
        AccountsTemplates._fields.splice(fieldId - 1, 0, field);
        AccountsTemplates._initialized = false;
        redrawAT();
        Session.set('refreshTrick', !Session.get('refreshTrick'));
    },
    "click .button.remove": function(){
        console.log("remove " + this._id);
        AccountsTemplates.removeField(this._id);
        AccountsTemplates._initialized = false;
        redrawAT();
        Session.set('refreshTrick', !Session.get('refreshTrick'));
    },
});
