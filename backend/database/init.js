db = db.getSiblingDB("chat");

const username = process.env["SERVER_USERNAME"];
const password = process.env["SERVER_PASSWORD"];

const debug = process.env["DEBUG_BUILD"] === "true";
var version = parseInt(process.env["DB_VERSION"], 10);
if (isNaN(version)) {
    console.log("Invalid version");
    version = 1;
}

db.createUser(
    {
        user: username,
        pwd: password,
        roles: [
            { role: "readWrite", db: "chat" }
        ]
    }
)

db.createCollection("schema_migrations");
db.schema_migrations.insertOne(
    {
        "current": {
            "version": 0,
            "debug": false,
        },
        "required": {
            "version": version,
            "debug": debug
        }
    }
);
