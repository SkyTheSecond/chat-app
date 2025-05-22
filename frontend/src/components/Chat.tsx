'use client'
import { useState } from "react"
import Message from "./Message"

type message = {
    user_id: string,
    content: string
}

export default () => {
    let [username, setUsername] = useState<string>('client');

    return (< div className="bg-neutral-800/40 w-full h-full rounded-2xl flex flex-col p-10 gap-5" >
        <div className="bg-neutral-800/80 h-full rounded-md p-5">
            {messages.map((message, index) => (
                <Message key={index}>{message.content}</Message>
            ))}
        </div>
        <div className="max-h-14 flex content-between gap-3">
            <div className="bg-neutral-800 h-full w-full rounded-md flex align-center p-3 px-5">
                <input type="text" className="w-full focus-visible:outline-none" />
            </div>
            <button className="h-full aspect-square bg-green-600 fa-regular fa-paper-plane cursor-pointer rounded-md fa-lg"></button>
        </div>
    </div >
    )

}

const messages: message[] = [
    {
        user_id: 'client',
        content: "Hello, how are you?"
    },
    {
        user_id: 'server1',
        content: "I'm good, thank you! How can I assist you today?"
    },
    {
        user_id: 'client',
        content: "I'm looking for some help with an API issue."
    },
    {
        user_id: 'server1',
        content: "I'd be happy to help. Could you please provide more details about the issue?"
    },
    {
        user_id: 'client',
        content: "I'm getting a 404 error when I try to fetch data from the endpoint."
    },
    {
        user_id: 'server1',
        content: "It sounds like the endpoint might not exist or there’s a typo in the URL. Let me check."
    },
    {
        user_id: 'client',
        content: "I double-checked the URL and it seems correct."
    },
    {
        user_id: 'server1',
        content: "Hmm, let me see if there are any server issues on my end."
    },
    {
        user_id: 'client',
        content: "Okay, thanks for looking into it."
    },
    {
        user_id: 'server1',
        content: "I’ve found the issue! It looks like there was a temporary server misconfiguration. It’s fixed now."
    }
]
