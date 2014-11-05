#!/bin/sh
curl https://api.github.com/repos/meteor-useraccounts/core/contributors -o contributors/core.json
curl https://api.github.com/repos/meteor-useraccounts/bootstrap/contributors -o contributors/bootstrap.json
curl https://api.github.com/repos/meteor-useraccounts/foundation/contributors -o contributors/foundation.json
curl https://api.github.com/repos/meteor-useraccounts/semantic-ui/contributors -o contributors/semantic.json
curl https://api.github.com/repos/meteor-useraccounts/unstyled/contributors -o contributors/unstyled.json
curl https://api.github.com/repos/meteor-useraccounts/famous-wrapper/contributors -o contributors/famous.json

curl https://api.github.com/repos/meteor-useraccounts/core/issues -o contributors/core.issues.json
curl https://api.github.com/repos/meteor-useraccounts/bootstrap/issues -o contributors/bootstrap.issues.json
curl https://api.github.com/repos/meteor-useraccounts/foundation/issues -o contributors/foundation.issues.json
curl https://api.github.com/repos/meteor-useraccounts/semantic-ui/issues -o contributors/semantic.issues.json
curl https://api.github.com/repos/meteor-useraccounts/unstyled/issues -o contributors/unstyled.issues.json
curl https://api.github.com/repos/meteor-useraccounts/famous-wrapper/issues -o contributors/famous.issues.json