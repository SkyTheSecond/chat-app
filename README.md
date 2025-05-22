# Chat App

## TODO:

### Server side events

#### Connect
- [ ] Login / Signup handling

**Sign Up**
- [ ] Checking if username is already taken
- [ ] Creating a user in the database
- [ ] Sending over a JWT if success

**Login**
- [ ] Password matching
- [ ] Sending over JWT if success
- [ ] Send over a success

#### Connected

- [ ] Send over room info
- [ ] Send over chats 50 for each room
- [ ] Send over other users from each room

#### Create Room
- [ ] Check if a room id is already taken
- [ ] Create a room in the database, and mark the owner
- [ ] Send back a success message on creation

#### Join Room
- [ ] Check if the room id exists
- [ ] Add user to the room
- [ ] Send user all the messages present in the room

#### Delete Room
- [ ] Check if the user is the owner or not
- [ ] Delete the room from the table
- [ ] Remove all users from the room
- [ ] Inform all the users

#### Leave Room
- [ ] Remove the user from the room

#### Send Message
- [ ] Broadcast the message to all the users in that room
- [ ] Add the message to the database, alongside timestamp, and message id

#### Get Message (pagination, maybe later)
- [ ] Broadcast more messages based on what is asked

### Database Management
- [ ] Create a user table, with id, username, tag and password
- [ ] Create a room table, with id and a foreign key to the user table
- [ ] Create a messages table, with a message id and a timestamp, keeping track of user and room
