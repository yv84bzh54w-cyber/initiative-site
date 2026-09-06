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

const campaignFaqs: FAQItem[] = [
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

const principlesFaqs: FAQItem[] = [
  {
    question: 'The Appeal states that Israel behaves as a predatory and terror state. Are you anti-Israel?',
    answer: 'No. We distinguish between the right of the State of Israel to exist and the conduct of the Israeli state. The terms predatory and terror are both explained in the Appeal. We criticize Israel\'s conduct, including its acquisition and continued control of territory through the 1967 war and its subsequent settlement and annexation policies. Acquiring territory through force and refusing to relinquish it is predatory behaviour. The Palestinian population in these territories experiences state-sanctioned terror.'
  },
  {
    question: 'Many Palestinians and their sympathizers shout, “From the River to the Sea, Palestine Will Be Free.” Is that a threat to the State of Israel?',
    answer: 'We do not support that slogan. A slogan should, however, be judged in the context in which it is used and should not automatically be equated with a concrete threat to the existence of a state. We believe the slogan should instead be: “From the River to the Sea, Only Peace Will Set Both Peoples Free.”'
  },
  {
    question: 'How do you respond to threats Israel has faced from surrounding countries, Hezbollah and Iran?',
    answer: 'The best protection is Oz VeShalom: strength and peace. Strength is not demonstrated through ethnic cleansing or genocidal practices, such as obstructing water and food supplies, but through achieving peace treaties, as Israel did with Egypt and Jordan and, later, through the Abraham Accords. Israel should also seek peace with the Palestinians. Oz VeShalom is also part of the name of a sympathetic Jewish organization, Oz VeShalom–Netivot Shalom, which combines adherence to traditional Jewish ethics with a commitment to peace, without being naïve about threats to Israel\'s security.'
  },
  {
    question: 'What about the rejection of the 1947 UN Partition Plan, Palestinian fedayeen and Hamas?',
    answer: 'In 1947, Palestinians believed that Jews had taken land on which their ancestors had lived for many centuries. Under the plan, Jews constituted approximately 33% of the inhabitants of Mandatory Palestine, yet approximately 56% of the territory was allocated to a Jewish state. It took years for the majority of Palestinians to acknowledge the State of Israel. Acknowledgement should always go in both directions. Since the collapse of the Oslo peace process, successive Israeli governments have not acknowledged, through their policies and actions, the Palestinians’ right to statehood.'
  },
  {
    question: 'Why do you speak of occupied territories rather than Judea and Samaria?',
    answer: 'The International Court of Justice concluded in its advisory opinion of 19 July 2024 that Israel’s continued presence in the Occupied Palestinian Territory is unlawful. This supports the use of the internationally recognized term occupied territories. Historical and religious associations with a territory cannot, by themselves, override contemporary international law.'
  },
  {
    question: 'Is the International Court of Justice biased against Israel?',
    answer: 'Governments subject to adverse findings by international courts often make the same claim. That is a common response to unwelcome judicial findings. Those whose conduct has been found unlawful may seek arguments to undermine the authority of the court and its findings. ICJ judges are elected by the United Nations General Assembly and Security Council. They examine extensive written and oral submissions before reaching a judgment or issuing an advisory opinion.'
  },
  {
    question: 'Are nominations of judges to the ICJ political nominations?',
    answer: 'Political considerations may play a role, as they do in many international appointments. Candidates are nominated by national groups associated with the Permanent Court of Arbitration, although governments can influence this process. The nominations must also be based on merit: under the Statute of the ICJ, judges must be persons of high moral character who possess the qualifications required for appointment to the highest judicial offices in their respective countries, or be jurists of recognized competence in international law. The judges are subsequently elected, independently of one another, by the United Nations General Assembly and Security Council.'
  },
  {
    question: 'Did God not promise the land to the Jews?',
    answer: 'The belief that God promised this land to the Jewish people is rooted in interpretations of ancient biblical texts. These interpretations have changed through the centuries and are not shared by all religious groups, or even by all Jews or all Christians. We should not return to the days in which religious convictions and territorial claims were advanced through armed force.'
  },
  {
    question: 'Many countries violate the Rule of Law. Why focus on Israel?',
    answer: 'It is true that many countries violate the Rule of Law, but there are gradations in the nature, duration and severity of such violations. Israel’s prolonged occupation, settlement policies, annexation measures and treatment of the Palestinian population constitute exceptionally grave and sustained violations of international law. Pointing to violations by other states cannot justify Israel’s conduct. If such an argument were allowed to prevail, we would descend into a world governed only by sheer force.'
  },
  {
    question: 'I have no trust in the United Nations. It talks, but we see no improvements on the ground.',
    answer: 'The United Nations can act only within the authority granted to it by its member states. Its capacity to act is also constrained by the structure established after the Second World War, particularly the privileged position and veto powers of the five permanent members of the Security Council. The United Nations therefore needs to reinvent itself and become capable of reducing or suspending the rights of member states when they become gross and persistent violators of the Rule of Law. Our Appeal calls for the international community to confront both Israel’s violations and the institutional limitations that have prevented the United Nations from responding effectively.'
  },
  {
    question: 'Are Muslims opposed to the State of Israel?',
    answer: 'We reject such generalizations. Muslims do not form a single political or religious bloc, and criticism of the conduct of the Israeli state should not automatically be interpreted as opposition to Israel’s existence. Several Muslim-majority countries have recognized Israel, concluded peace treaties or established diplomatic relations with it. Political violence and injustice can generate further radicalization and violent responses. This may help to explain such responses, but it does not justify violence against civilians. Muslim religious leaders have also made great efforts to refute extremist thought and reach out to non-Muslims, including through the Amman Message, A Common Word Between Us and You, the Marrakesh Declaration and the Document on Human Fraternity for World Peace and Living Together.'
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
      <h3>The Appeal</h3>
      <FAQGroup items={appealFaqs} startIndex={0} />
      <h3>The Campaign</h3>
      <FAQGroup items={campaignFaqs} startIndex={appealFaqs.length} />
      <h3>Principles and positions</h3>
      <FAQGroup items={principlesFaqs} startIndex={appealFaqs.length + campaignFaqs.length} />
    </section>
  );
}
