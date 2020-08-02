const fs = require('fs');
const path = require('path');

module.exports = async (app) => {
    fs.readdir(path.resolve(__root,'./src/routes'), (err, routes) => {
        if (err) console.log(err);
        else {
            routes.forEach(async route => {
                const require_route = await require(__root + `/src/routes/${route}`);
                app.use(require_route);
            })
        }
    })
}