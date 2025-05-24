package model

import (
	"time"

	"go.mongodb.org/mongo-driver/v2/bson"
)

type Message struct {
	ID        bson.ObjectID `bson:"_id"`
	UserID    string        `bson:"user_id"`
	RoomID    string        `bson:"room_id"`
	Content   string        `bson:"content"`
	Timestamp time.Time     `bson:"timestamp"`
}
