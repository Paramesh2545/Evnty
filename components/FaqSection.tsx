import React, { useState } from 'react';
import SectionHeader from './SectionHeader';

const faqData = [
    {
        question: "Who can join events?",
        answer: "All events are open to students of University of Excellence. Some events may be open to students from other colleges as well, which will be specified in the event details."
    },
    {
        question: "What type of events can I find?",
        answer: "We host a wide variety of events including technical workshops, coding competitions, cultural nights, sports tournaments, guest lectures, and much more."
    },
    {
        question: "How do I get my first ticket or register?",
        answer: "Simply navigate to the event's detail page and fill out the registration form. For paid events, you will be redirected to a secure payment gateway after submitting the form."
    },
    {
        question: "Which clubs can I join on campus?",
        answer: "You can explore all our student-run organizations on the 'Clubs' page. Each club has its own page with details on what they do and how to become a member."
    }
];

const FaqItem: React.FC<{ faq: typeof faqData[0], isOpen: boolean, onClick: () => void }> = ({ faq, isOpen, onClick }) => {
    return (
        <div className="border-b border-gray-800 py-6">
            <button onClick={onClick} className="w-full flex justify-between items-center text-left">
                <h3 className="text-xl font-bold text-white">{faq.question}</h3>
                <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-45' : 'rotate-0'}`}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                </span>
            </button>
            <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
                 <p className="text-gray-400 max-w-3xl">
                    {faq.answer}
                </p>
            </div>
        </div>
    )
}


const FaqSection: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }
    
  return (
    <section className="py-20 bg-[#0D1117]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader title="We Are Aware Of Your Opinions" align="left" />
        <div>
            {faqData.map((faq, index) => (
                <FaqItem 
                    key={index}
                    faq={faq}
                    isOpen={openIndex === index}
                    onClick={() => handleToggle(index)}
                />
            ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
