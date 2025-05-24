package model

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type Message struct {
	id        bson.ObjectID `bson:"_id"`
	userID    string        `bson:"user_id"`
	roomID    string        `bson:"room_id"`
	content   string        `bson:"content"`
	timestamp time.Time     `bson:"timestamp"`
}
