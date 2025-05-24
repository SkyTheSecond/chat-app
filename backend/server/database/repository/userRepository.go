package repository

import (
	"context"
	"websocket-server/model"
)

type UserRepository interface {
	Create(ctx context.Context, user *model.User) error
	Exists(ctx context.Context, userID string) (bool, error)
	ConfirmPassword(ctx context.Context, userID string, hashedPassword string) (bool, error)
}

/*
	Maybe later:
		- Delete user
		- Edit user data
		- Change password
*/
