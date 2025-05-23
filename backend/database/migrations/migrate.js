const fs = require("fs")
const migrations = ["1_init_schema.up.js"]
const version = process.env["VERSION"] || 1;
console.log("working");
console.log(process.env["DEBUG_BUILD"]);

const files = fs.readdirSync("/migrations")
files.forEach(file => {
    console.log(file);
})

if (process.env["DEBUG_BUILD"]) {
    migrations.push("0_sample_data.up.js");
    version++;
}

for (var i = 0; i < version; i++) {
    load("migrations/" + migrations[i]);
}
