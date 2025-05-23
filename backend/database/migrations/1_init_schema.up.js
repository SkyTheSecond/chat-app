db = db.getSiblingDB("chat");

db.createCollection("users");
db.createCollection("rooms");
db.createCollection("messages");
db.createCollection("schema_migrations");

db.schema_migrations.insertOne({ "version": 1 });
