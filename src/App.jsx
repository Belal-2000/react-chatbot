import './App.css'
import ChangeInputsPlacements from './components/ChangeInputsPlacement'
import ChatInputs from './components/ChatInputs'
import ChatMessages from './components/ChatMessages'
import { useState } from 'react'

function App() {
  const [messages, setMessages] = useState([
    // { id: crypto.randomUUID(), content: "I need your help", role: "user" },
    // { id: crypto.randomUUID(), content: "Hello! How can I assist you today?", role: "assistant" },
    // { id: crypto.randomUUID(), content: "I have a question about my order", role: "user" },
    // { id: crypto.randomUUID(), content: "Hello! How can I assist you todayasdasdddddd asddddddddd asddddddddddddasdasd asdas asddddddddddddd asd asd asd asd asdojwopqd jmfdsmvs'djkf a?", role: "assistant" },
  ])

  const [inputsPlacements, setInputsPlacement] = useState('down')

  return (
    <div className="h-screen md:py-6 sm:py-5 p-3 bg-gray-950 text-white">
      <div className='flex flex-col gap-5 h-full md:max-w-9/12 sm:max-w-10/12 mx-auto'>
        <ChatInputs setMessages={setMessages} messages={messages} inputsPlacements={inputsPlacements} />
        <ChatMessages messages={messages} />
        <ChangeInputsPlacements inputsPlacements={inputsPlacements} setInputsPlacement={setInputsPlacement} />
      </div>
    </div>
  )
}

export default App
