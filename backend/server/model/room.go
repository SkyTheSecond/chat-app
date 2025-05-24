package model

type Room struct {
	ID      string `bson:"_id"`
	OwnerID string `bson:"owner_id"`
	Users   User   `bson:"users"`
}
