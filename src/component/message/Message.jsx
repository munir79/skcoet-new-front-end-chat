

// export default Message;
import React, { useState } from 'react';
import { useGetMessageByUsersQuery, useSendMessageMutation } from '@/redux/features/MessageApi';


const Message = ({ id }) => {
    const [newMessage, setNewMessage] = useState('');
    
    // Fetch messages
    const { data: getMessageByUsers, isLoading } = useGetMessageByUsersQuery(id);
    const [sendMessage]=useSendMessageMutation()
    
    // Mutation to send message (Assuming this exists in your MessageApi)

    const handleSend = async (e) => {
        e.preventDefault();
        if (!newMessage.trim()) return;

        try {
            await sendMessage({
                conversationId: id,
                content: newMessage
            }).unwrap();
            setNewMessage(''); // Clear input after sending
        } catch (error) {
            console.error("Failed to send message:", error);
        }
    };

    return (
        <div className='w-[550px] bg-[#010409] h-[600px] border-2 border-gray-800 flex flex-col relative'>
            {/* Header */}
            <div className='p-3 border-b border-gray-800 bg-[#0d1117]'>
                <h3 className='text-gray-400 text-sm'>Chatting with: <span className='text-blue-400'>{id}</span></h3>
            </div>

            {/* Message List Area */}
            <div className='flex-1 overflow-y-auto p-4 space-y-3 custom-scrollbar'>
                {isLoading ? (
                    <p className='text-gray-500 text-center'>Loading messages...</p>
                ) : (
                    getMessageByUsers?.data?.map((msg) => (
                        <div 
                            key={msg._id || msg.id} 
                            className={`flex ${msg.senderId === id ? 'justify-start' : 'justify-end'}`}
                        >
                            <div className={`max-w-[80%] p-2 rounded-lg ${
                                msg.senderId === id 
                                ? 'bg-gray-700 text-white' 
                                : 'bg-blue-600 text-white'
                            }`}>
                                <p className='text-sm'>{msg.content}</p>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {/* Input Area */}
            <form onSubmit={handleSend} className='p-3 border-t border-gray-800 bg-[#0d1117] flex gap-2'>
                <input
                    className="flex-1 px-3 py-2 border border-gray-700 rounded-md bg-[#010409] text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Type a message..."
                    type="text"
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                />
                <button 
                    type="submit"
                    className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors font-medium'
                >
                    Send
                </button>
            </form>
        </div>
    );
};

export default Message;