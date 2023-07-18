import React, { useState} from 'react';
import { Header } from '../components';
import {BsFillChatDotsFill} from 'react-icons/bs';
import { useStateContext } from '../contexts/ContextProvider';
import { FaCheckCircle } from 'react-icons/fa';
import { BsFlagFill } from 'react-icons/bs';
import { avatars } from '../data/dummy';
import avatar5 from '../data/avatar5.png';



const Actions = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const {currentColor} = useStateContext();

  const {rows, setRows} = useStateContext();

  const GridApproversImage = () => {
  
    let unshuffled = avatars;
    // let shuffled = unshuffled
    //   .map(value => ({ value, sort: Math.random() }))
    //   .sort((a, b) => a.sort - b.sort)
    //   .map(({ value }) => value)
  
   
    return (
      <div className='flex justify-end items-center relative'>
        { 
          unshuffled.map((user, index) => { 
            return (
                <div key={index} className='avatar-wrapper hidden lg:flex relative w-18 h-18'>
                  <div className='icon absolute right-0 top-0'>
                    {user.icon}
                  </div> 
                  <img
                    key={index}
                    className="rounded-full p-1 w-16 h-auto "
                    src={user.image}
                    alt="approver"
                  />
                </div> 
              
            )})
          }
          <div className='avatar-wrapper w-18 h-18 relative hidden sm:block'>
            <img  
              src={avatar5} 
              className="rounded-full p-1 w-16 min-w-8 h-auto"
              alt="approver"
            />
          </div>
          
      </div>
    )};
  

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

  const handleApproveClick = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
        row.id === id ? { ...row, status: "approved",  actionApprove: "Approved!", actionReject: "Reject" } : row
      )
    );
    
  };
    
  const handleRejectClick = (id) => {
    setRows((prevRows) =>
      prevRows.map((row) =>
      row.id === id ? { ...row, status: "rejected", actionApprove: "Approve", actionReject: "Rejected!" } : row
      )
    );
  };

  return (
    <div
      className="actions-table mt-32 md:mt-12 p-10 bg-white rounded-3xl dark:bg-secondary-dark-bg
     w-11/12 mr-auto ml-auto shadow-xl"
    >
      <Header category="Page" title="Actions" />

      <div className="actions-table">
        <table className="dark:bg-secondary-dark-bg w-full !border-solid border-2 border-slate-200 e-grid md:!table">
          <thead>
            <tr className="dark:text-slate-200">
              <th className=" bg-gray-100 dark:bg-slate-700">Title</th>
              <th className=" bg-gray-100 dark:bg-slate-700">Status</th>
              <th className=" bg-gray-100 dark:bg-slate-700 approver-title">
                Approvers
              </th>
              <th className=" bg-gray-100 dark:bg-slate-700">Action</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="bg-white dark:bg-slate-600">
                <td>{row.title}</td>
                <td>
                  <p
                    className={`rounded-xl p-1 max-w-[120px] mx-auto dark:text-slate-200 text-slate-800 ${
                      row.status === "approved" ? "bg-green-600" : null
                    } ${row.status === "rejected" ? "bg-red-500" : null}`}
                  >
                    {row.status}
                  </p>
                </td>
                <td className="approvers relative">
                  {GridApproversImage()}
                  {row.status === "approved" ? (
                    <FaCheckCircle className="fill-green-600 text-lg absolute right-5 top-5 approver-icon" />
                  ) : null}
                  {row.status === "rejected" ? (
                    <BsFlagFill className="fill-red-600 text-lg absolute right-5 top-5 approver-icon" />
                  ) : null}
                </td>
                <td>
                  <button
                    className={` ${
                      row.status === "rejected"
                        ? "bg-red-500 text-slate-200"
                        : "bg-slate-200 text-black"
                    }`}
                    style={{
                      margin: "5px",
                      padding: "7px 20px",
                      borderRadius: "5px",
                      width: "120px",
                    }}
                    onClick={() => handleRejectClick(row.id)}
                  >
                    {row.actionReject}
                  </button>
                  <button
                    className={` ${
                      row.status === "approved"
                        ? "bg-green-600 text-slate-200"
                        : "bg-green-300 text-black"
                    }`}
                    style={{
                      margin: "5px",
                      padding: "7px 20px",
                      borderRadius: "5px",
                      width: "120px",
                    }}
                    onClick={() => handleApproveClick(row.id)}
                  >
                    {row.actionApprove}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="chat w-full rounded-xl dark:text-slate-200 mt-5 p-5 bg-slate-200 dark:bg-slate-700">
        <div className="top flex mb-3 text-slate-400">
          <p className="">George Michael</p>
          <p className="pl-5">11:24:19 AM</p>
          <p className="pl-5">
            Changed status to -{" "}
            <span className="text-red-500 font-bold">Rejected</span>
          </p>
        </div>
        <div className="message dark:text-slate-200">
          <p>
            Improper Input Validation vulnerability in flask that can result in
            Large amount of memory usage possibly leading to denial of service.
            This attack appears to be exploitable via Attacker provides JSON
            data in incorrect encoding.{" "}
          </p>
          {messages.map((message) => (
            <div
              key={message.id}
              className="message flex flex-col dark:text-slate-200 mt-5"
            >
              <div className="info pb-2 flex text-slate-400">
                <p className="">Chris Stevenson</p>
                <p className="mr-0 pl-5 text-right">{message.time}</p>
              </div>
              <p className="flex items-center text-left">{message.content}</p>
            </div>
          ))}
        </div>
        <div className="chat-input pt-5 w-full flex md:w-[50%]">
          <input
            type="text"
            placeholder="Type your message..."
            value={input}
            onChange={handleInputChange}
            style={{
              width: "-webkit-fill-available",
              borderRadius: "10px",
              padding: "10px 20px",
              color: "#ccc",
            }}
          />
          <button
            className="ml-5 text-4xl rounded-md font-bold"
            style={{ backgroundColor: "transparent" }}
            onClick={handleSendMessage}
          >
            <BsFillChatDotsFill style={{ fill: `${currentColor}` }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Actions;