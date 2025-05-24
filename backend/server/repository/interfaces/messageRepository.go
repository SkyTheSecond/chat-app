package interfaces

import (
	"context"
	"websocket-server/model"
)

type MessageRepository interface {
	Create(ctx context.Context, message model.Message) error
	GetByUserID(ctx context.Context, userID string)
	GetByRoomID(ctx context.Context, roomID string)
}

/*
	Add Later:
		Edit Message
		Delete Message (Will require a new event)
*/
