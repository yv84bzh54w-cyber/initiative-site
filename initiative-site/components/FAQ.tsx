'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: '[Question 1?]',
    answer: '[Answer to question 1 goes here]'
  },
  {
    question: '[Question 2?]',
    answer: '[Answer to question 2 goes here]'
  },
  {
    question: '[Question 3?]',
    answer: '[Answer to question 3 goes here]'
  },
];

export default function FAQ() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <div className="section-content">
        {faqItems.map((item, index) => (
          <div key={index} className="faq-item">
            <div
              className="faq-question"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {expandedIndex === index ? '▼ ' : '▶ '} {item.question}
            </div>
            {expandedIndex === index && (
              <div className="faq-answer">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
