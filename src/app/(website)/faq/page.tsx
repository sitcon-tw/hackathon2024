import { MdAdd, MdRemove } from 'react-icons/md';
import qa from '@/data/json/faq.json';

export default function FaqPage() {
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