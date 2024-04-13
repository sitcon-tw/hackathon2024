import { MdAdd, MdRemove } from 'react-icons/md';
import qa from '@/data/json/sponsor.json';

export default function SponsorPage() {
  return (
    <main id="sponsor" className="container">
      <section>
        <h1>支持我們</h1>
      </section>
      <section>
        <h1>主辦單位</h1>
      </section>
      <section>
        <h1>共同主辦</h1>
      </section>
      <section>
        <h1>協辦單位</h1>
      </section>
      <section>
        <h1>深耕級</h1>
      </section>
      <section>
        <h1>前瞻級</h1>
      </section>
      <section>
        <h1>新芽級</h1>
      </section>
    </main>
  );
}
