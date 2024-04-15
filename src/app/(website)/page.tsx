'use client'
import { Box, createTheme, Grid, ThemeProvider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import Ellipse from '@/components/registration/ellipse';
import WhiteButton from '@/components/home/white-button';
import { theme } from '../guideline';

export default function Home () {
  return (
    <ThemeProvider theme={theme}>
      <main id="root" style={{ padding: '10px 0' }}>
          <Box
            style={{ padding: '10px 0', position: 'relative', backgroundImage: 'url("/2024/images/main.svg")', backgroundSize: '120%', backgroundPosition: 'center', minHeight: '900px' }}
          >
              <Box style={{ position: 'absolute', top: '25vh', padding: '0 10vw' }}>
                <Typography variant="h5" fontWeight='bold'>2024.07.06 (六) - 2024.07.07 (日)</Typography>
                <Typography variant="h5" fontWeight='bold' marginTop='25px'>臺北市政府公務人員訓練處</Typography>
              </Box>
              <Box style={{ position: 'absolute', top: '25vh', right: '5vw' }}>
                <WhiteButton text="活動資訊" href="/2024/events" />
                <WhiteButton text="立即報名" href="/2024/registration" />
              </Box>
              <Image
                src={`/2024/images/main-init.svg`}
                alt="main-init"
                width={0}
                height={0}
                style={{ width: '700px', height: 'auto', margin: '10px auto', zIndex: -1, display: 'block' }}
              />
              <Image
                  src={`/2024/images/main-hackathon.svg`}
                  alt="main"
                  width={0}
                  height={0}
                  style={{ width: '100%', height: 'auto', margin: '10px 0', zIndex: -1, display: 'block', position: 'absolute', bottom: 0 }}
              />
          </Box>
          <Box style={{ margin: '10px 10vw 0px 10vw', padding: '5vw', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '40px', border: '1px white solid', boxShadow: '0px 0px 10px 5px rgba(255, 255, 255, 0.3)', position: 'relative' }} sx={{ lineHeight: '200%' }}>
            <Typography variant="h3" fontWeight='bold'>黑客松主題</Typography>
            <Typography marginTop='33px' variant="h3" sx={{ fontFamily: 'Monospace', fontWeight: 'bold' }} style={{ color: '#73BB3A' }}>_ _ INIT_ _</Typography>
            <Typography marginTop='65px' variant="body1" fontWeight='500'>
              縱觀人類發展，數字的概念一直是理解世界、量化事物的基石，利用石塊、獸骨與結繩等記號表示一到千萬的自然數概念；歷經千年時間，人類們才意識到「零」的數字概念存在。奠基於「從零到一」與「從一到百」，推演負數、有理數、無理數種種概念，從此開啟了數學的全新篇章。
              <br />
              <br />
              19 世紀，人類提出了分析機，並成為現今電腦的空想雛形；20 年代中期，人類才成功創造了最基礎的電腦；在電子科技的快速進步下，僅不到百年的時間裡，我們現今已然能仰賴更加先進的技術與不同領域的發展，一窺接下來蓬勃發展的數位世界。
              <br />
              <br />
              現在，我們有機會站在巨人的肩膀上，得以學習、創作並實踐前人千百年累積的知識與技術，這是一個讓我們思考過去、現在和未來的機會。
              <br />
              <br />
              本屆黑客松主題為 __init__，參考自 Python 語言中初始化物件的方法，我們期待 SITCON Hackathon 與參賽者 一同開創新的旅程，實踐「從零到一」的精神。以 __init__ 的方式啟動我們的未來，跨出屬於我們世代的第一步。</Typography>
              <br />
              <br />
            <Typography style={{ bottom: '0', textAlign: 'right', color: '#FFFFFF66', fontWeight: 'bold' }}>SITCON Hackathon</Typography>
          </Box>

          <Box style={{ margin: '20vh 15vw' }}>
            <Box style={{ position: 'relative', margin: '5vh 0' }}>
              <Typography variant="h3" fontWeight='bold'>活動願景</Typography>
              <Typography variant="h3" fontWeight='bold' marginTop='30px'>Our Vision</Typography>
              <Ellipse bgColor="#2CACD180" />
              <Image
                  src={`/2024/images/main-vision.svg`}
                  alt="our-vision"
                  width={0}
                  height={0}
                  style={{ width: '50%', height: 'auto', margin: '10px auto', zIndex: -1, display: 'block' }}
              />
            </Box>

            <Box style={{ position: 'relative', margin: '10vh 0' }}>
              <Typography variant="h3" fontWeight='bold' style={{ lineHeight: '200%' }}>行為準則</Typography>
              <Typography variant="h3" fontWeight='bold' style={{ lineHeight: '200%' }}>Code of Conduct</Typography>
              <Ellipse bgColor="#35EB9359" />
              <Typography variant="body1" marginTop='48px' style={{ lineHeight: '200%' }}>SITCON 歡迎不同身分、來自不同背景的與會者，也非常鼓勵女性、性少數與多元背景的參與者。為了讓大家都能愉快的參加 SITCON，我們要求所有參與者閱讀年會的行為準則（Code of Conduct），共同創造一個友善的環境</Typography>
            </Box>

            <Box style={{ position: 'relative', margin: '5vh 0' }}>
              <Typography variant="h3" fontWeight='bold' style={{ lineHeight: '200%' }}>參與討論</Typography>
              <Typography variant="h3" fontWeight='bold' style={{ lineHeight: '200%' }}>Join the community</Typography>
              <Ellipse bgColor="#2B76B980" />
              <Typography variant="body1" marginTop='48px' style={{ lineHeight: '200%' }}>
                SITCON 是個開放的社群，許多籌備的相關事項都會在公開的郵件論壇上進行討論，如果有興趣參與，歡迎訂閱 SITCON 的郵件論壇並貢獻你的想法，如果想成為明年年會或黑客松的籌備團隊，也可以填寫跳坑表單，我們會在明年活動開始籌備時通知你！
                <br />
                <br />
                若你想進一步了解 SITCON Hackathon 籌備與討論的內容，歡迎到 GitLab 上查看 SITCON Hackathon 2024 的籌備歷程。
              </Typography>
            </Box>
          </Box>

          <Grid width='90%' gap='5vw' direction='row' container justifyContent='flex-end'>
            <a href='#' target='_blank' className='btn-color' style={{padding: '25px 40px'}}><Typography fontWeight='bold' variant='h4'>預約跳坑表單</Typography></a>
            <a href='#' target='_blank' className='btn-color' style={{padding: '25px 40px'}}><Typography fontWeight='bold' variant='h4'>郵件紀錄</Typography></a>
            <a href='#' target='_blank' className='btn-color' style={{padding: '25px 40px'}}><Typography fontWeight='bold' variant='h4'>籌備紀錄</Typography></a>
          </Grid>
      </main>
    </ThemeProvider>
  );
}