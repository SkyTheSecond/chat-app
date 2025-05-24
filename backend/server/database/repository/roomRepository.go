package repository

import (
	"context"
	"websocket-server/model"
)

type RoomRepository interface {
	Create(ctx context.Context, room model.Room) error
	Exists(ctx context.Context, roomID string)
	AddUser(ctx context.Context, userID string, roomID string) error
	RemoveUser(ctx context.Context, userID string, roomID string) error
	GetUserRooms(ctx context.Context, userID string) ([]*model.User, error)
	GetUsers(ctx context.Context, roomID string) ([]*model.Room, error)
	GetOwner(ctx context.Context, roomID string) (model.User, error)
}
