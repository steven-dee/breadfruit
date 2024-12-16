import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "Is Breadfruit an insurance company?",
      answer: "No, Breadfruit is not an insurance company. We are a licensed digital insurance marketplace that partners with leading Caribbean insurance carriers to provide you with the best coverage options."
    },
    {
      question: "Is Breadfruit an insurance broker?",
      answer: "Yes, Breadfruit is a licensed insurance broker. We work with multiple insurance carriers to help you find the best coverage at competitive rates. Our digital platform makes it easy to compare and purchase policies online."
    },
    {
      question: "How is Breadfruit regulated?",
      answer: "Breadfruit is regulated by the Financial Services Commission and operates in compliance with all local insurance regulations. We are also regulated by the Micro-Lending Act as part of our buy-now, pay-later flexible monthly payment plans. We maintain all required licenses and certifications to operate as an insurance broker and micro-lender."
    },
    {
      question: "How does Breadfruit make money?",
      answer: "Breadfruit earns a commission from the insurance company from whom you purchased a policy. Commissions are a standard cost of doing business for all insurance companies. Our commission is paid for by the insurance company, not you as the client."
    },
    {
      question: "Is my personal information secure?",
      answer: "Yes, we take data security seriously. We use bank-level encryption to protect your personal information and comply with all data protection regulations. We never share your information without your consent."
    },
    {
      question: "How do I get a copy of my insurance policy?",
      answer: "Your policy documents are available immediately in your online account after purchase. You can download, print, or email them at any time. We also keep a secure digital copy for your records."
    },
    {
      question: "How long does it take for the policy to activate?",
      answer: "Most policies activate instantly after purchase. You'll receive immediate confirmation and can download your policy documents right away. Some specialized policies may require additional verification."
    },
    {
      question: "How do I file an insurance claim?",
      answer: "You can file a claim directly through your online account or contact your insurance carrier's claims department. We provide all necessary contact information and can help guide you through the process."
    }
  ];

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                className="w-full px-4 py-5 flex justify-between items-center focus:outline-none"
                onClick={() => toggleQuestion(index)}
              >
                <dt className="text-lg font-medium text-gray-900 text-left">{faq.question}</dt>
                <ChevronDownIcon
                  className={`flex-shrink-0 ml-2 h-6 w-6 text-gray-400 transform transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <dd className="px-4 pb-5 text-base text-gray-500">
                  {faq.answer}
                </dd>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FAQ;