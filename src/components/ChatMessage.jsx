import ReactMarkdown from "react-markdown";
import botImage from "../assets/Chatbot Chat Message.jpg"
import humanImage from "../assets/296fe121-5dfa-43f4-98b5-db50019738a7.jpg"

export default function ChatMessage({message, role}) {    
    return (
        <div className={'flex items-start gap-2 ' + (role === "user" ? 'justify-end' : 'justify-start')}>
            <div className="max-w-[75%] order-2 md:text-xl sm:text-base text-sm px-2 py-3 bg-gray-500 rounded-sm">
                <ReactMarkdown>
                    {message}
                </ReactMarkdown>
            </div>
            <img 
                className={"w-12 h-12 rounded-full " + (role === "user" ? "order-3" : 'order-1')}
                src={role === "user" ? humanImage : botImage} 
                alt={role === "user" ? "chat-person" : "chat-bot"} 
            />
        </div>
    )
}