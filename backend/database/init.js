db = db.getSiblingDB("chat");

db.createUser(
    {
        user: "ws_server",
        pwd: "server_password",
        roles: [
            { role: "readWrite", db: "chat" }
        ]
    }
)
