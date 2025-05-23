db = db.getSiblingDB("chat");

const generatedUsers = [];

for (let i = 1; i <= 10; i++) {
    const username = "Sample_User_" + i;
    const tag = i.toString().padStart(4, "0");
    const password = "sample_password_" + i;

    generatedUsers.push({
        _id: `${username}#${tag}`,
        username,
        tag,
        password
    })
}

db.users.insertMany(generatedUsers);
