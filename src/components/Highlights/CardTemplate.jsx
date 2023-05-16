import React, {useState} from 'react';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {BiShowAlt, BiHide} from 'react-icons/bi';

const CardTemplate = ({ title, content, bgColor }) => {
    const [showContent, setShowContent] = useState(true);
        
    const toggleContent = () => {
        setShowContent(!showContent);
    };

    const ToggleContentButton = () => {
        const [icon, setIcon] = useState(<BiHide />);
          
        const handleClick = () => {
            setIcon(icon.type === BiShowAlt ? <BiHide /> : <BiShowAlt />);
        };
        
        return <button onClick={handleClick}>{icon}</button>;
    }
    
    return (
        <div className={`card flex flex-col justify-between text-gray-700 p-5 rounded-[30px] w-full
        xl:w-1/5 min-w-[30%] m-5 md:ml-10 md:mr-10 xl:ml-2 xl:mr-2 drop-shadow-2xl hover:cursor-pointer ${showContent ? "h-[450px]" : "h-auto"}`}
        style={{backgroundColor: bgColor}}>
            <div className="card-header flex justify-between pb-5">
                <h3 className='font-bold'>{title}</h3>
                <TooltipComponent content={showContent ? "Hide" : "Show"} position='TopCenter'>
                    <button className='text-lg' onClick={toggleContent}>{ToggleContentButton()}</button>
                </TooltipComponent>
            </div>
            {showContent && <div className="card-content">{content}</div>}
        </div>
    );
}

export default CardTemplate