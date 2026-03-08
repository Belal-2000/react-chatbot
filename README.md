# AI Chat UI (React)

A simple **AI chat interface** built with **React, Vite, and TailwindCSS**.
The project focuses on implementing a chat experience from scratch, including message handling, loading states, and **streaming responses from an LLM API**.

## Features

* Send and receive chat messages
* Different UI for user and assistant messages
* Auto-scroll to the newest message
* Loading message while waiting for the AI response
* **Streaming responses** (messages appear gradually like ChatGPT)
* Simple and clean UI

## Tech Stack

* **React**
* **Vite**
* **TailwindCSS**
* **Fetch API**
* **Streaming (ReadableStream)**

## Project Structure

```
src
 ├── components
 │   ├── ChatInputs.jsx
 │   ├── ChatMessage.jsx
 │   └── ChatMessages.jsx
 │
 ├── assets
 │
 └── App.jsx
```

## How It Works

1. The user sends a message.
2. The message is added to the `messages` state.
3. A temporary assistant message (loading state) is created.
4. A request is sent to the LLM API.
5. The response is received as a **stream**.
6. The assistant message is updated gradually as new chunks arrive.

## Run Locally

Clone the repository:

```bash
git clone <repo-url>
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Future Improvements

* Markdown message support
* Code block highlighting
* Multiple chat sessions
* Persistent chat history
* Mobile UI improvements
* Model selection for different LLMs
