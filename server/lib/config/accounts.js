// Set up login services
Meteor.startup(function() {
    // Remove configuration entries in case service is already configured
    ServiceConfiguration.configurations.remove({$or: [
        {service: "facebook"},
        {service: "google"},
        {service: "meteor-developer"},
    ]});

    // Add Facebook configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "facebook",
        "appId": "XXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    });

    // Add GitHub configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "meteor-developer",
        "clientId": "XXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX"
    });

    // Add Google configuration entry
    ServiceConfiguration.configurations.insert({
        "service": "google",
        "clientId": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "client_email": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
        "secret": "XXXXXXXXXXXXXXXXXXXXXXXX"
    });
});
