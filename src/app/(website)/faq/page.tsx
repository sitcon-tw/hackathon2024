import { MdAdd, MdRemove } from 'react-icons/md';
import qa from '@/data/json/faq.json';

export default function FaqPage() {
  return (
    <main id="faq" className="container">
      <section>
        <h1>交通資訊</h1>
        <div className="traffic-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.879854083955!2d121.55951530601584!3d25.004198167642972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442aa6ac084d1f5%3A0x41cc89de432d8875!2sDepartment%20of%20Civil%20Servant%20Development!5e0!3m2!1sen!2stw!4v1714026798956!5m2!1sen!2stw"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
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
