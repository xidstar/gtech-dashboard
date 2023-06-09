import React, {useState} from 'react';
import {TooltipComponent} from '@syncfusion/ej2-react-popups';
import {BiShowAlt, BiHide} from 'react-icons/bi';

const CardTemplate = ({ title, content, bgColor, height }) => {
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
        <div id={`Card${title}`} className={`card flex flex-col justify-between text-gray-700 p-5 rounded-[30px]
         mt-5 mb-5 md:ml-10 md:mr-10 xl:ml-2 xl:mr-2 drop-shadow-2xl hover:cursor-pointer ${showContent ? "" : "!h-auto"}`}
        style={{backgroundColor: bgColor, height}}>
            <div className="card-header flex justify-between pb-5 pl-5 pr-5">
                <h3 className='font-bold'>{title}</h3>
                <TooltipComponent content={showContent ? "Hide" : "Show"} position='TopCenter'>
                    <button className='text-lg' onClick={toggleContent}>{ToggleContentButton()}</button>
                </TooltipComponent>
            </div>
            {showContent && <div className="card-content h-full">{content}</div>}
        </div>
    );
}

export default CardTemplate