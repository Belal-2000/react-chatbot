import ChatMessage from "./ChatMessage"
import { useEffect, useRef } from "react"


export default function ChatMessages({messages}) {

    const bottomRef = useRef(null)    

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" })
    }, [messages])
    
    return (
        <div className="flex-1 overflow-y-auto scrollbar-hide space-y-3 order-2">
        {messages.map((message) => {
            return <ChatMessage message={message.content} role={message.role} key={message.id} />
        })}

        <div ref={bottomRef} />
        </div>
    )
}