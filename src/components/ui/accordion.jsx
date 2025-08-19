import React, { createContext, useContext, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const AccordionContext = createContext();

const Accordion = ({ type, collapsible, className = "", children, ...props }) => {
  const [openItems, setOpenItems] = useState(new Set());

  const toggleItem = (value) => {
    if (type === "single") {
      if (collapsible && openItems.has(value)) {
        setOpenItems(new Set());
      } else {
        setOpenItems(new Set([value]));
      }
    }
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem }}>
      <div className={className} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ value, className = "", children, ...props }) => {
  return (
    <div className={`border-b ${className}`} {...props}>
      {React.Children.map(children, child =>
        React.cloneElement(child, { value })
      )}
    </div>
  );
};

const AccordionTrigger = ({ value, className = "", children, ...props }) => {
  const { openItems, toggleItem } = useContext(AccordionContext);
  const isOpen = openItems.has(value);

  return (
    <button
      className={`flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline ${className}`}
      onClick={() => toggleItem(value)}
      {...props}
    >
      {children}
      <ChevronDown className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
        isOpen ? 'rotate-180' : ''
      }`} />
    </button>
  );
};

const AccordionContent = ({ value, className = "", children, ...props }) => {
  const { openItems } = useContext(AccordionContext);
  const isOpen = openItems.has(value);

  return (
    <div
      className={`overflow-hidden transition-all ${
        isOpen ? 'animate-accordion-down' : 'animate-accordion-up'
      }`}
      {...props}
    >
      <div className={`pb-4 pt-0 ${className}`}>
        {children}
      </div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };