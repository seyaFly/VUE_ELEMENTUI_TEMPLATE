// see http://vuejs-templates.github.io/webpack for documentation.
var env = process.env.NODE_ENV;
var bdisaBleHostCheck = true;
let evnPort = process.env.PORT;

if (env === "dev") {
    evnPort = process.env.VUE_APP_PORT;
    bdisaBleHostCheck = false
} else {
    bdisaBleHostCheck = true;
}
