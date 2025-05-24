package model

type Room struct {
	id      string `bson:"_id"`
	ownerID string `bson:"owner_id"`
	users   User   `bson:"users"`
}
