package model

type User struct {
	ID       string `bson:"_id"`
	Username string `bson:"username"`
	Tag      string `bson:"tag"`
	Password string `bson:"password"`
}
