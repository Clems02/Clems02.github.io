import { useRef } from 'react';
import './accordionItem.css'
import { RiArrowDropDownLine } from "react-icons/ri";


const AccordionItem = ({ header, content, isOpen, onClick }) => {
    const contentHeight = useRef();

    return (
        <div className="accordionItem">
            <button className={`accordionItemButton ${isOpen ? 'active' : ""}`} onClick={onClick}>
                <p className='accordionItemHeader'>{header}</p>
                <RiArrowDropDownLine className={`accordionArrow ${isOpen ? "active" : ""}`}/>
            </button>

            <div
                ref={contentHeight}
                className='accordionItemContentContainer'
                style={
                    isOpen
                        ? { height: contentHeight.current.scrollHeight }
                        : { height: "0px" }
                }
            >
                <p className='accordionItemContent'>{content}</p>
            </div>


        </div>
    )
}

export default AccordionItem