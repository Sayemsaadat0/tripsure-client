import React, { useState } from 'react';
import "@chatscope/chat-ui-kit-styles/dist/default/styles.min.css";
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator,
} from "@chatscope/chat-ui-kit-react";

const OpenAi = () => {
    const API_KEY = "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";

    const [messages, setMessages] = useState([
        {
            message: "hello! How can i help you today?",
            sender: "ChatGPT",
        },
    ]);
    const [typing, setTyping] = useState(false);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: "user",
            direction: "outgoing",
        };

        const newMessages = [...messages, newMessage];
        setMessages(newMessages);

        setTyping(true);
        await processMessageToChatGPT(newMessages);
    };

    async function processMessageToChatGPT(chatMessages) {
        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.sender === "ChatGPT") {
                role = "assistant";
            } else {
                role = "user";
            }
            return { role: role, content: messageObject.message };
        });

        const systemMessage = {
            role: "system",
            content: "Explain all concepts like I am 10 years old.",
        };

        const apiRequestBody = {
            model: "gpt-3.5-turbo",
            messages: [systemMessage, ...apiMessages],
        };

        try {
            const response = await fetch("https://api.openai.com/v1/chat/completions", {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${API_KEY}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(apiRequestBody),
            });
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error("ChatGPT API Error:", error);
        }

        setTyping(false);
    };

    return (
        <div>
            <button onClick={() => document.getElementById('my_modal_1').showModal()} className='fixed tooltip tooltip-left right-3 top-20 z-10' data-tip="Ask anything!"> <img className='w-12 md:w-16' src="https://i.ibb.co/tCVGzf8/Ask-Anything-3.png" alt="" /> </button>

            <dialog id="my_modal_1" className="modal backdrop-blur-sm">
                <div className="modal-box relative pt-20">
                    <div className="mx-auto  w-96 ">
                        <MainContainer className='pt-10 rounded-lg'>
                            <ChatContainer>
                                <MessageList
                                    typingIndicator={
                                        typing ? (
                                            <TypingIndicator content="Please wait for a reply" />
                                        ) : null }>
                                    {messages.map((message, i) => {
                                        return <Message key={i} model={message} />;
                                    })}
                                </MessageList>
                                <MessageInput placeholder="Type your issues here" onSend={handleSend} />
                            </ChatContainer>
                        </MainContainer>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default OpenAi;

