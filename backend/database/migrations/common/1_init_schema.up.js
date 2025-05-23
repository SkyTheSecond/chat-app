db = db.getSiblingDB("chat");

db.createCollection("users");
db.createCollection("rooms");
db.createCollection("messages");
