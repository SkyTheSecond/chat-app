package main

import (
	"log"
	"net/http"
	"sync/atomic"

	"golang.org/x/net/websocket"
)

type Message struct {
	Event    string `json:"event"`
	Msg      string `json:"message"`
	ClientId int32  `json:"client_id"`
}

var ClientCount int32

func handler(conn *websocket.Conn) {
	atomic.AddInt32(&ClientCount, 1)
	msg := Message{
		Event:    "connect",
		Msg:      "connected successfully",
		ClientId: ClientCount,
	}
	websocket.JSON.Send(conn, msg)
}

func main() {
	http.Handle("GET /", websocket.Handler(handler))

	log.Println("Sever started on port 3000")
	http.ListenAndServe(":3000", nil)
}
