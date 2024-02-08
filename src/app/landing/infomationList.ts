import { InfoCardProps } from '@/components/landing/InfoCard';
import EmojiObjects from '@mui/icons-material/EmojiObjects';
import Group from '@mui/icons-material/Group';
import Info from '@mui/icons-material/Info';
import Landscape from '@mui/icons-material/Landscape';
import Event from '@mui/icons-material/Event';
import Create from '@mui/icons-material/Create';
import Add from '@mui/icons-material/Add';
import Computer from '@mui/icons-material/Computer';
import FormatListNumbered from '@mui/icons-material/FormatListNumbered';

const informationList: InfoCardProps[] = [
  {
    color: '#00C853',
    headline: '創新想法，實踐技術',
    text: 'SITCON Hackathon 提供了一個實踐技術的舞台，鼓勵學生發揮所長，將所學知識轉化為創意發想與實踐目標的能力。',
    Icon: EmojiObjects
  },
  {
    color: '#6200EA',
    headline: '挑戰問題，團隊合作',
    text: 'SITCON Hackathon 提供學生互相交流和合作的機會。參與活動的學生來自不同的背景和學科，並擁有不同的專業知識和技能。學生們將透過組隊協作，共同發掘並解決問題。',
    Icon: Group
  },
  {
    color: '#0091EA',
    headline: '拓展眼界，跨領域交流',
    text: 'SITCON Hackathon 鼓勵科技文化和跨領域學術交流，扮演學習與分享的平台。我們鼓勵參與者分享技術與交流知識，也能更深入了解不同企業資源與社群文化，傳遞更加開放和包容的 SITCON 社群理念。',
    Icon: Landscape
  },
  {
    color: '#d50000',
    headline: '活動資訊',
    text: 'SITCON Hackathon 將由主題延伸三項有關社會的子議題，並期望參賽團隊利用外界資源與社群協力，完成專案、實踐社會參與。參賽團隊將在黑客松現場展開為期兩天的密集開發，並於次日的下午進行成果報告。最終由提供資源的單位，評選出具備最佳技術與最佳創意的團隊授予獎項。',
    Icon: Info
  },
  {
    color: '#DD2C00',
    headline: '活動時程',
    text: `
- 4 月 官網上線、報名開始
- 5 月中旬 正取團隊公告
- 5 月下旬 參賽者工作坊與社群課程開跑
- 07/06、07/07 SITCON Hackathon`,
    Icon: Event,
    markdown: true
  },
  {
    color: '#64DD17',
    headline: '事前調查表單',
    subtitle: 'Pre-investigate',
    text: '若你有興趣參與今年 SITCON Hackathon 2024，可以先填寫事前調查表單，讓我們了解你對活動的期待與想法。若比賽開始正式報名，我們也會在第一時間提供報名資訊！\n\n[SITCON Hackathon 2024 事前調查表單](https://forms.gle/bqTfygXkGnJnaaDCA)',
    Icon: Create,
    markdown: true
  },
  {
    color: '#304FFE',
    headline: '關於 SITCON',
    subtitle: 'About SITCON',
    text: '學生計算機年會（Students’ Information Technology Conference）自 2013 年發起，以學生為本、由學生自發舉辦，長期投身學生資訊教育與推廣開源精神，希望引領更多學子踏入資訊的殿堂，更冀望所有對資訊有興趣的學生，能夠在年會裏齊聚一堂，彼此激盪、傳承、啟發，達到「學以致用、教學相長」的實際展現。',
    Icon: Computer
  },
  {
    color: '#C51162',
    headline: '行為準則',
    subtitle: 'Code of Conduct',
    text: 'SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的行為準則（Code of Conduct），共同創造一個友善的環境。',
    Icon: FormatListNumbered
  },
  {
    color: '#00B8D4',
    headline: '參與討論',
    subtitle: 'Join the community',
    text: 'SITCON 是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的郵件論壇並貢獻你的想法，如果想成為明年年會的籌備團隊，也可以填寫跳坑表單，我們會在明年年會開始籌備時通知你！\n\n若你想進一步了解 SITCON 年會籌備與討論的內容，歡迎到 GitLab 上查看 SITCON 2024 的籌備歷程。',
    Icon: Add
  }
];

export default informationList;
