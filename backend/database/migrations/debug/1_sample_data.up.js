const db = db.getSiblingDB("chat");

// User generation
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

// Room generation
const generatedRooms = []
const users_per_room = 4;

for (let i = 1; i <= 3; i++) {
    const room = i.toString().padStart(6, "X");

    const users = [];
    for (let j = (i - 1) * users_per_room + 1; j <= i * users_per_room; j++) {
        const username = "Sample_User_" + j;
        const tag = j.toString().padStart(4, "0");
        users.push(`${username}#${tag}`)
    }

    generatedRooms.push({
        _id: room,
        users
    })
}

// Message generation
const generatedMessages = [];

generatedRooms.forEach(room => {
    room.users.forEach(user_id => {
        // Generate 3 messages per user per room
        for (let i = 1; i <= 3; i++) {
            generatedMessages.push({
                user_id,
                room_id: room._id,
                content: `Message ${i} from ${user_id} in room ${room._id}`,
                timestamp: new Date()
            });
        }
    });
});

db.messages.insertMany(generatedMessages);
