import { useState } from 'react'
import sendMessage from '../helpers/callAI';

export default function ChatInputs({setMessages, messages, inputsPlacements}) {
    const [messageInput, setMessageInput] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    
    const handleMessageChange = (event) => {
        setMessageInput(event.target.value)
    }

    const updateMessage = (id, content) => {
        setMessages((prev) => {
            setMessages(prev =>
                prev.map(msg =>
                    msg.id === id
                    ? { ...msg, content: content }
                    : msg
                )
            );

            return [
                ...prev
            ]
        })
    }

    const handleSendMessage = async () => {
        if (messageInput.trim() === "" || isLoading === true) return;
        
        setIsLoading(true)

        setMessages(prev => [
            ...prev,
            {
                id: crypto.randomUUID(),
                role: "user",
                content: messageInput
            }
        ])
        
        const currentMessage = messageInput
        setMessageInput("")

        const loadingMessageId = crypto.randomUUID()
        
        setMessages(prev => [
            ...prev,
            {
                id: loadingMessageId,
                role: "assistant",
                content: "Loading..."
            }
        ])
        
        const llmResponse = await sendMessage(currentMessage, messages)
        let fullMessage = ""

        for await (const chunk of llmResponse) {
            const token = chunk.choices?.[0]?.delta?.content || ""
            fullMessage += token

            updateMessage(loadingMessageId, fullMessage)
        }

        setIsLoading(false)
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            handleSendMessage()
        }
    };

    return (
        <div className={"flex gap-3 " + (inputsPlacements === "top" ? 'order-1' : 'order-4')}>
        <input onKeyDown={handleKeyDown} className="flex-1 border border-gray-300 rounded py-2 px-4 focus:outline-none focus:border-blue-500 transition min-w-28" type="text" placeholder="Type your message..." value={messageInput} onChange={handleMessageChange} />
        <button onClick={handleSendMessage} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer transition">Send</button>
        </div>
    )
}