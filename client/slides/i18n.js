
var languages = [
    {_id: "en", lang: "English"},
    {_id: "it", lang: "Italian"},
    {_id: "vi", lang: "Vietnamese"},
    {_id: "ar", lang: "Arabic"},
    {_id: "es", lang: "Spanish"},
];

Template.i18nbuttons.helpers({
    languages: function(){
        return languages;
    },
    active: function(){
        if (T9n.language == this._id)
            return "active";
    },
});

Template.i18nbuttons.events({
    "click": function(e, t){
        console.log("Setting language " + t.data.lang);
        T9n.setLanguage(this._id);
    },
});