const fs = require("fs");
const path = require("path");
const process = require("process")

const db = db.getSiblingDB("chat");

const versionInfo = db.schema_migrations.findOne();

const currentVersion = versionInfo.current.version;
const requiredVersion = versionInfo.required.version;

const currentDebug = versionInfo.current.debug;
const requiredDebug = versionInfo.required.debug;

const dir = "/migrations/"
const debugDir = path.join(dir, "debug/")
const commonDir = path.join(dir, "common/");
let commonMigrations = [];
let debugMigrations = [];

console.log("Versioning info:");
console.log("Current Version:", currentVersion);
console.log("Required Version:", requiredVersion);

console.log();
console.log("Debug info:");
console.log("Current Debug:", currentDebug);
console.log("Required Debug", requiredDebug);

console.log();
console.log("Directory info:");
console.log("Migration Directory:", dir)
console.log("Debug Directory:", debugDir);
console.log("Common Directory:", commonDir);

if (currentVersion === requiredVersion && requiredDebug === currentDebug) exit;

if (!currentDebug && requiredDebug) {
    const files = readFiles(debugDir, "up");
    debugMigrations.push(...files);
}

if (currentDebug && !requiredDebug) {
    const files = readFiles(debugDir, "down");
    debugMigrations.push(...files);
}
debugMigrations = sortMigrations(debugMigrations);

if (currentVersion < requiredVersion) {
    const files = readFiles(commonDir, "up");
    commonMigrations.push(...files);
}

if (currentVersion > requiredVersion) {
    const files = readFiles(commonDir, "down");
    commonMigrations.push(...files);
}

commonMigrations = sortMigrations(commonMigrations);

console.log();
console.log("Migration info:");

for (let i = currentVersion + 1; i <= requiredVersion; i++) {
    const common = commonMigrations.filter((migration) => (getVersion(migration) === i));
    const debug = debugMigrations.filter((migration) => (getVersion(migration) === i))

    if (common.length > 0) {
        common.forEach((migration) => {
            load(path.join(commonDir, migration));
            console.log("Completed common Migration:", path.join(commonDir, migration));
        })
    }
    if (debug.length > 0) {
        debug.forEach((migration) => {
            load(path.join(debugDir, migration));
            console.log("Debug Migration:", path.join(debugDir, migration));
        })
    }
}
for (let i = currentVersion; i > requiredVersion; i--) {
    const common = commonMigrations.filter((migration) => (getVersion(migration) === i));
    const debug = debugMigrations.filter((migration) => (getVersion(migration) === i))

    if (common.length > 0) {
        common.forEach((migration) => {
            load(path.join(commonDir, migration));
            console.log("Completed common Migration:", path.join(commonDir, migration));
        })
    }
    if (debug.length > 0) {
        debug.forEach((migration) => {
            load(path.join(debugDir, migration));
            console.log("Completed Debug Migration:", path.join(debugDir, migration));
        })
    }
}

db.schema_migrations.updateOne({}, [
    {
        $set: {
            current: {
                "version": requiredVersion,
                "debug": requiredDebug
            }
        }
    }
])

/* UTILITY FUNCTIONS */
function readFiles(dir, type) {
    const arr = [];

    var regex;
    if (type === "up") {
        regex = /^[a-zA-Z0-9_]*\.up\.js$/;
    } else if (type === "down") {
        regex = /^[a-zA-Z0-9_]*\.down\.js$/;
    } else {
        console.log("Invalid type");
        return arr;
    }

    const files = fs.readdirSync(dir);
    for (const file of files) {
        if (regex.test(file)) {
            arr.push(file);
        }
    }

    return arr;
}

function sortMigrations(migrations) {
    migrations = migrations.filter((migration) => getVersion(migration) !== -1)

    migrations.sort((a, b) => getVersion(a) - getVersion(b));

    return migrations;
}

function getVersion(str) {
    const regex = /[0-9]+/
    const num = str.match(regex);
    if (!num) return -1;

    return parseInt(num[0]);
}
