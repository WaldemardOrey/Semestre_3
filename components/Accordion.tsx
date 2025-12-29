import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface AccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  className?: string;
  buttonClass?: string;
}

const Accordion: React.FC<AccordionProps> = ({ 
  title, 
  children, 
  defaultOpen = false,
  className = "mb-4",
  buttonClass = "bg-azul hover:bg-azul-dark text-white"
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`w-full max-w-3xl mx-auto ${className}`}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-full flex justify-between items-center px-6 py-3 rounded-lg font-bold text-lg transition-colors duration-300 ${buttonClass}`}
      >
        <span>{title}</span>
        {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
      </button>
      
      {isOpen && (
        <div className="mt-4 p-4 bg-gray-50/50 rounded-lg border border-gray-200 animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

export default Accordion;