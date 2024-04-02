import { MdAdd, MdRemove } from 'react-icons/md';

export default function FaqPage() {
  const qa = [
    {
      question: '場地能過夜嗎？',
      answer: '我們不提供場地過夜喔！建議大家可以住在鄰近的 XX 區、XX 區，才不會錯過第二天的活動！'
    },
    {
      question: '我需要繳納多少報名費用？',
      answer: '我們不提供場地過夜喔！建議大家可以住在鄰近的 XX 區、XX 區，才不會錯過第二天的活動！'
    }
  ];

  return (
    <main id="faq" className="container">
      <section>
        <h1>交通資訊</h1>
      </section>
      <section>
        <h1>常見問題</h1>
        <div className="qa">
          {qa.map(({ question, answer }, index) => (
            <div className="qa-card" key={index}>
              <input id={`qa-${index}`} type="checkbox" />
              <div className="qa-content">
                <p className="question">
                  <label htmlFor={`qa-${index}`}>{question}</label>
                  <label htmlFor={`qa-${index}`}>
                    <MdAdd />
                  </label>
                  <label htmlFor={`qa-${index}`}>
                    <MdRemove />
                  </label>
                </p>
                <div className="answer" data-content={answer}></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
