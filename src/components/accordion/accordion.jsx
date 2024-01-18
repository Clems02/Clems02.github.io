import { Component, useState } from "react"
import './accordion.css'
import AccordionItem from "../accordionItem/accordionItem";

const Accordion = ({data}) => {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleToggle = (index) => {
        setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
    }

    return (
        <div className="accordion" >

            {data.map((item, index) => (
                <AccordionItem 
                key={index}
                header={item.header}
                content={item.content}
                isOpen={activeIndex === index}
                onClick={() => handleToggle(index)}
                />
            ))}

        </div>
    )
}

export default Accordion