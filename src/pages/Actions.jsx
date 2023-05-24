import React, { useState} from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { actionsData, contextMenuItems, actionsGrid } from '../data/dummy';
import { Header } from '../components';
import {BsFillChatDotsFill} from 'react-icons/bs';
import { useStateContext } from '../contexts/ContextProvider';


const Actions = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const {currentColor} = useStateContext();

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSendMessage = () => {
    if (input.trim() !== '') {
      const newMessage = {
        id: messages.length + 1,
        content: input,
        time: new Date().toLocaleTimeString({timeStyle: 'short'})
      };

      setMessages([...messages, newMessage]);
      setInput('');
    }
  };

  return (
   
    <div className='mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
     w-11/12 mr-auto ml-auto shadow-xl'>
      <Header category="Page" title="Actions" />
      <GridComponent 
        id="gridcomp"
        dataSource={actionsData}
        allowPaging
        allowSorting
      >
        <ColumnsDirective  style={{display: "flex"}}>
          {actionsGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, Filter, ContextMenu, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
      <div className="chat w-full rounded-xl dark:text-slate-200 mt-5 p-5 bg-gray-200 dark:bg-slate-700">
        <div className="top flex mb-3 text-slate-400">
          <p className=''>George Michael</p>
          <p className='pl-5'>11:24:19 AM</p>
          <p className='pl-5'>Changed status to - <span className="text-red-500 font-bold">Denied</span></p>
        </div>
        <div className="message dark:text-slate-200">
          <p>Improper Input Validation vulnerability in flask that can result in Large amount of memory usage
            possibly leading to denial of service. This attack appears to be exploitable via Attacker provides
             JSON data in incorrect encoding. </p>
             {messages.map((message) => (
                  <div key={message.id} className="message flex flex-col dark:text-slate-200 mt-5">
                    <div className="info pb-2 flex text-slate-400">
                      <p className=''>Chris Stevenson</p>
                      <p className='mr-0 pl-5 text-right'>{message.time}</p>
                    </div>
                    <p className='flex items-center text-left'>{message.content}</p>
                  </div>
              ))}
        </div>
        <div className="chat-input pt-5 w-full flex md:w-[50%]">
          <input
              type="text"
              placeholder="Type your message..."
              value={input}
              onChange={handleInputChange}
              style={{width: "-webkit-fill-available", borderRadius: "10px", padding: "10px 20px", color: "#ccc"}}
          />
          <button className='ml-5 text-4xl rounded-md font-bold' style={{backgroundColor: "transparent"}}  onClick={handleSendMessage}><BsFillChatDotsFill style={{fill: `${currentColor}`}} /></button>
        </div>
      </div>
    </div>
  )
}

export default Actions;