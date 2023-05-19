import React, { useState } from 'react';
import { chatData } from '../data/dummy';
import { Header } from '../components';
import {BsChat} from 'react-icons/bs';
import avatar5 from '../data/avatar5.png'
import { useStateContext } from '../contexts/ContextProvider';


const Indicators = () => {
    const {currentColor} = useStateContext();

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        content: input,
        time: new Date().toLocaleTimeString([], {timeStyle: 'short'})
      };

      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
     w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Page" title="Indicators" />
      <div>
            <div className="chat-container">
                <div className="chat-messages">
                    {chatData.map((item, index) => (
                        <div key={index}  className="flex justify-between p-4 border-b-1 dark:text-slate-200">
                            <img className="rounded-full h-8 mr-3 max-w-6" src={item.image} alt="" />
                            <p className='flex items-center text-left'>{item.message} {item.chat ? <span className='pl-1'><BsChat style={{marginLeft: "10px"}} /></span> : ''}  </p>
                            <p className='mr-0 ml-auto text-xs text-right w-[80px]'>{item.time}</p>
                        </div>
                    ))}
                    {messages.map((message) => (
                        <div key={message.id} className="message flex justify-between p-4 border-b-1 dark:text-slate-200">
                            <img className="rounded-full h-8 mr-3 max-w-6" src={avatar5} alt="" />
                            <p className='flex items-center text-left'>{message.content}<BsChat style={{marginLeft: "10px"}} /></p>
                            <p className='mr-0 ml-auto text-xs text-right w-[80px]'>{message.time}</p>
                        </div>
                    ))}
                </div>
                <div className="chat-input pt-5 w-full flex md:w-[50%]">
                <input
                    type="text"
                    placeholder="Type your message..."
                    value={input}
                    onChange={handleInputChange}
                    style={{width: "-webkit-fill-available", borderRadius: "10px", padding: "10px 20px"}}
                />
                <button className='ml-5 p-3 pl-5 pr-5 rounded-md font-bold' style={{backgroundColor: `${currentColor}`}}  onClick={handleSendMessage}>Send</button>
                </div>
            </div>
        </div>
    </div>
    
  );
};

export default Indicators;
