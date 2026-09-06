'use client';

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const appealFaqs: FAQItem[] = [
  {
    question: 'What is the Appeal to the United Nations?',
    answer: 'The Appeal to the United Nations is a declaration by ordinary people concerning the conduct of the State of Israel towards the State of Palestine, other states in the Middle East and the Rule of Law. It calls upon the United Nations to take collective and corrective action in response to the absence of the Rule of Law in the illegally occupied territories and the grave consequences for the people of Palestine. The Appeal asks the United Nations to uphold international law, protect human rights and take effective measures to rein in the State of Israel.'
  },
  {
    question: 'Who is behind the appeal and the campaign?',
    answer: 'The Appeal was initiated and drafted by Dr Reynier Overhoff, a former senior legal adviser at the Dutch Council of State, on the basis of information provided by several experts on the region. It was subsequently signed by an assembly of ten people with expert knowledge of the region and its politics, representing a variety of groups and backgrounds. The members of the assembly will remain anonymous unless they choose to make their identities public. The Appeal may be represented only by its three chairs, with Dr Reynier Overhoff serving as Chair; the initiative currently operates under the name RuleofLawAppeal.'
  },
  {
    question: 'Why has the appeal been made now?',
    answer: 'We, ordinary people, witness daily the horrific fate of the people of Palestine and the dramatic and inhumane consequences of the absence of the Rule of Law in the illegally occupied territories. The multitude of expressions of violence by the State of Israel, and conduct which we consider to constitute acts of genocide and war crimes, have made immediate collective and corrective action by the United Nations indispensable. We believe that the prolonged failure of the United Nations and the wider international community to respond effectively has undermined the credibility of the international framework itself.'
  },
  {
    question: 'What does the appeal ask the United Nations to do?',
    answer: 'The Appeal asks the United Nations to suspend the full membership of the State of Israel, compel Israel to withdraw from the occupied territories, act so that Israel respects the Rule of Law, reinvent the United Nations so its agencies and human rights protections are defended, and systematically involve women in meaningful decision-making processes and agencies.'
  },
  {
    question: 'What is the campaign\'s central concern?',
    answer: 'The campaign\'s central concern is the absence of the Rule of Law in the illegally occupied territories of the State of Palestine, and the dramatic and inhumane consequences of that absence for the Palestinian people. The Appeal concerns the conduct of the State of Israel and the responsibilities of the United Nations; it is not directed against any people, religion or nationality.'
  },
  {
    question: 'What does the campaign mean by the Rule of Law?',
    answer: 'The Rule of Law means that the State must adhere to the law, just as civilians are bound by the law. It must comply with judicial rulings, respect human rights, fulfil obligations arising from treaties and international law, and ensure meaningful supervision and accountability of those acting on its behalf. The Rule of Law is particularly important during armed conflict and occupation because legal limits are essential to protect civilian life, human dignity and the rights of an occupied people.'
  },
  {
    question: 'What is the role of the European coalition?',
    answer: 'The European coalition will bring together civic organisations across Europe that support the Appeal\'s call for respect for the Rule of Law and corrective action by the United Nations. It will provide a platform for sharing verified information, coordinating peaceful public engagement, and strengthening contact with political decision-makers, UN missions and the wider public.'
  },
  {
    question: 'Who can support or join the campaign?',
    answer: 'Individuals may sign in support of the Appeal, including with an organisational affiliation where relevant. Organisations interested in promoting the Appeal or discussing possible collaboration are invited to contact us at contact@ruleoflawappeal.org. Support is open to all who share the Appeal\'s commitment to the Rule of Law, fundamental values and peaceful coexistence.'
  },
  {
    question: 'What can an organisation or individual do to support the appeal?',
    answer: 'Organisations and individuals can read and share the Appeal, help bring it to the attention of others, and express support for its demand that the United Nations take collective and corrective action. Civic organisations may contact RuleofLawAppeal to discuss endorsement, joining the European coalition, sharing the Appeal with their members, contributing expertise, or taking part in future peaceful public engagement.'
  },
  {
    question: 'Where can journalists, organisations and members of the public find the full appeal?',
    answer: 'The full Appeal can be found on the RuleofLawAppeal website. Information not available on the website may be requested by email at contact@ruleoflawappeal.org. Depending on the nature of the request and the information available to us, we may not be able to provide all requested material.'
  },
];

const positionFaqs: FAQItem[] = [
  {
    question: 'How does the campaign ensure that its advocacy is peaceful and non-discriminatory?',
    answer: 'The campaign is committed to peaceful and lawful civic participation, and to equal human dignity for all people. It rejects antisemitism, anti-Palestinian racism, Islamophobia, racism, threats, harassment, hate speech and collective blame. The Appeal concerns the conduct of the State of Israel and the responsibilities of the United Nations; it is not directed against any people, religion, nationality or ethnic group.'
  },
  {
    question: 'Does supporting the campaign require agreement with every word of the appeal?',
    answer: 'Support for the campaign does not necessarily mean endorsement of every formulation in the Appeal. It means support for its central demand that the United Nations take effective action to uphold the Rule of Law and respect international law.'
  },
  {
    question: 'What happens after the appeal is submitted?',
    answer: 'Following submission of the Appeal, RuleofLawAppeal will seek to build support among civic organisations and ordinary people, share information about the Appeal, and engage peacefully with UN missions, political representatives and the wider public. The campaign will monitor responses and communicate significant developments to supporters and participating organisations.'
  },
  {
    question: 'How will the campaign handle donations, personal data and use of logos?',
    answer: 'RuleofLawAppeal will handle donations, personal data, names and logos transparently and only for agreed campaign purposes. Personal data will be processed in accordance with applicable data-protection rules, and the name or logo of an individual or organisation will not be made public without express consent. Information about funding arrangements, privacy practices and permissions for use of logos will be made available on the website.'
  },
];

function FAQGroup({ items, startIndex }: { items: FAQItem[]; startIndex: number }) {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <div className="section-content">
      {items.map((item, index) => (
        <div key={startIndex + index} className="faq-item">
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
  );
}

export default function FAQ() {
  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <h3>FAQs about the Appeal</h3>
      <FAQGroup items={appealFaqs} startIndex={0} />
      <h3>Principles and positions</h3>
      <FAQGroup items={positionFaqs} startIndex={appealFaqs.length} />
    </section>
  );
}
