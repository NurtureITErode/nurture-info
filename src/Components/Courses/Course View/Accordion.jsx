import React, { useState, useRef } from 'react';
import './Accordion.css';

const AccordionItem = ({ title, content, isOpen, onClick }) => {
  const contentRef = useRef(null);

  return (
    <div className="accordion-item">
      <div className="accordion-title" onClick={onClick}>
        <h3>{title}</h3>
      </div>
      <div
        ref={contentRef}
        className={`accordion-content ${isOpen ? 'open' : ''}`}
        style={{ maxHeight: isOpen ? `${contentRef.current.scrollHeight}px` : '0px' }}
      >
        <p>{content}</p>
      </div>
    </div>
  );
};

const Accordion = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleClick = index => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          content={item.content}
          isOpen={index === openIndex}
          onClick={() => handleClick(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
