var contribs_files = [
    {filename: "contributors/core.json", issue: false},
    {filename: "contributors/bootstrap.json", issue: false},
    {filename: "contributors/foundation.json", issue: false},
    {filename: "contributors/semantic.json", issue: false},
    {filename: "contributors/unstyled.json", issue: false},
    {filename: "contributors/famous.json", issue: false},
    {filename: "contributors/core.issues.json", issue: true},
    {filename: "contributors/bootstrap.issues.json", issue: true},
    {filename: "contributors/foundation.issues.json", issue: true},
    {filename: "contributors/semantic.issues.json", issue: true},
    {filename: "contributors/unstyled.issues.json", issue: true},
    {filename: "contributors/famous.issues.json", issue: true},
];

var contributors = {};
_.each(contribs_files, function(cf){
    var filename = cf.filename;
    var issue = cf.issue;
    _.each(JSON.parse(Assets.getText(filename)), function(contrib){
        if (issue)
            contrib = contrib.user;
        var c_id = contrib.id;
        var login = contrib.login;
        if (login == "splendido")
            return;
        var avatar_url = contrib.avatar_url;
        var html_url = contrib.html_url;
        var contributions = contrib.contributions;
        if (contributors[c_id]){
            if (contributions > contributors[c_id]["contributions"])
                contributors[c_id]["contributions"] = contributions;
        }
        else {
            contributors[c_id] = {
                id: c_id,
                login: login,
                avatar_url: avatar_url,
                html_url: html_url,
                contributions: contributions,
            };
        }
    });
});

// Updates Contributors collection
Contributors.remove({});
_.each(contributors, function(c, c_id){
    Contributors.insert(c);
});
