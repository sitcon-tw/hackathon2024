'use client';

import Image from 'next/image';
import Link from 'next/link';
import Ellipse from '@/components/registration/ellipse';
import VisionImage from '@/assets/images/main-vision.svg';
import MainImage from '@/assets/images/main.svg';

export default function Home() {
  return (
    <main id="root" className="container">
      <Image
        className="init"
        src="/2024/images/main-init.svg"
        alt="main-init"
        width={0}
        height={0}
      />
      <article className="cover">
        <div className="row">
          <section className="info">
            <p>2024.07.06 (六) - 2024.07.07 (日)</p>
            <p>臺北市政府公務人員訓練處</p>
          </section>
          <section className="links">
            <Link className="btn-white" href="/event">
              活動資訊
            </Link>
            <Link className="btn-white" href="/registration">
              立即報名
            </Link>
          </section>
        </div>
      </article>
      <article className="banner">
        <Image src={MainImage} alt="main" />
      </article>
      <article className="topic">
        <h1>黑客松主題</h1>
        <h2>__INIT__</h2>
        <section>
          縱觀人類發展，數字的概念一直是理解世界、量化事物的基石，利用石塊、獸骨與結繩等記號表示一到千萬的自然數概念；歷經千年時間，人類們才意識到「零」的數字概念存在。奠基於「從零到一」與「從一到百」，推演負數、有理數、無理數種種概念，從此開啟了數學的全新篇章。
        </section>
        <section>
          19 世紀，人類提出了分析機，並成為現今電腦的空想雛形；20
          年代中期，人類才成功創造了最基礎的電腦；在電子科技的快速進步下，僅不到百年的時間裡，我們現今已然能仰賴更加先進的技術與不同領域的發展，一窺接下來蓬勃發展的數位世界。
        </section>
        <section>
          現在，我們有機會站在巨人的肩膀上，得以學習、創作並實踐前人千百年累積的知識與技術，這是一個讓我們思考過去、現在和未來的機會。
        </section>
        <section>
          本屆黑客松主題為 __init__，參考自 Python 語言中初始化物件的方法，我們期待 SITCON Hackathon
          與參賽者 一同開創新的旅程，實踐「從零到一」的精神。以 __init__
          的方式啟動我們的未來，跨出屬於我們世代的第一步。
        </section>
      </article>
      <article className="vision">
        <h1>活動願景</h1>
        <h1>Our Vision</h1>
        <Ellipse bgColor="#2CACD180" />
        <section>
          <Image src={VisionImage} alt="our-vision" width={0} height={0} style={{}} />
        </section>
      </article>
      <article className="coc">
        <h1>行為準則</h1>
        <h1>Code of Conduct</h1>
        <Ellipse bgColor="#35EB9359" />
        <section>
          SITCON
          歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加
          SITCON，我們要求所有參與者閱讀年會的行為準則（Code of Conduct），共同創造一個友善的環境。
        </section>
      </article>
      <article className="discuss">
        <h1>參與討論</h1>
        <h1>Join the community</h1>
        <Ellipse bgColor="#2B76B980" />
        <section>
          SITCON
          是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱
          SITCON
          的郵件論壇並貢獻你的想法，如果想成為明年年會或黑客松的籌備團隊，也可以填寫跳坑表單，我們會在明年活動開始籌備時通知你！
        </section>
        <section>
          若你想進一步了解 SITCON Hackathon 籌備與討論的內容，歡迎到 GitLab 上查看 SITCON Hackathon
          2024 的籌備歷程。
        </section>
      </article>
      <article className="btns">
        <a href="#" target="_blank" className="btn-color">
          預約跳坑表單
        </a>
        <a href="#" target="_blank" className="btn-color">
          郵件紀錄
        </a>
        <a href="#" target="_blank" className="btn-color">
          籌備紀錄
        </a>
      </article>
    </main>
  );
}
