'use client'
import Image from 'next/image';
import guideline from '@/app/guideline';
import { createTheme, ThemeProvider, Typography, Box, CssBaseline, Button, Grid } from '@mui/material';
import { TocContainer } from '@/components/TOC';

const theme = createTheme({
  typography: {
    fontFamily: 'Noto Sans TC',
    h1: {
      fontSize: '48px'
    },
    h2: {
      fontSize: '36px'
    },
    h3: {
      fontSize: '30px'
    },
    h4: {
      fontSize: '24px'
    },
    body1: {
      fontSize: '20px'
    },
    button_font: {
      color: 'white',
      fontSize: '24px',
      fontWeight: 'bold',
    },
  },
  palette: {
    mode: 'dark'
  }
});

const styles = {
  flexContainer: {
    display: 'flex',
    flexDirection: 'column',
    gap: '72px'
  },
  flexInnerContainer: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    width: '215px',
    Height: '68px',
    borderRadius: '50px',
    borderImageSource: 'linear-gradient(90deg, #3D3393 40%, #2B76B9 40%, #2CACD1 40%, #35EB93 40%, #73BB3A 40%)',
    background: 'linear-gradient(90deg, rgba(61, 51, 147, 0.4) 0%, rgba(43, 118, 185, 0.4) 31.5%, rgba(44, 172, 209, 0.4) 58%, rgba(53, 235, 147, 0.4) 81%, rgba(115, 187, 58, 0.4) 100%)',
  },

};

export default function SponsorPage() {
  return <ThemeProvider theme={theme}>
    <CssBaseline />
    <TocContainer>
      <Box sx={styles.flexContainer} width='80%' margin='auto'>
        <Box sx={styles.flexContainer}>
          <Typography variant='h1' fontWeight='bold' id="sup">支持我們</Typography>
          <Typography variant='body1'>
            十年以來，SITCON 一直秉持著不向與會者收費的原則來舉辦資訊研討會，不僅創造許多學生們交流、教學互長的機會，也帶領無數學子踏入資訊的殿堂。 <br />
            <br />
            此外，我們也樂見企業與學生的近距離交流，成為我們的合作夥伴您可以接觸學生資訊人才提升品牌影響力深入學生群體推廣產品內容如果您也認同 SITCON 的理念，歡迎以行動支持 SITCON 的運作，點擊下方「個人贊助」，您的支持將會成為我們的動力，讓更多學生能在舞台上展現自我、讓資訊教育遍及臺灣的每個角落！ 若您有興趣成為我們的贊助夥伴，歡迎點擊下方「索取贊助徵求書」，了解詳細合作方案，或是利用 contact@sitcon.org 聯絡我們，商討更多的合作方式！
          </Typography>
        </Box>
        <Box sx={{ margin: 'auto', width: '10em' }}>
          <Button sx={styles.button}> <Typography variant='button_font'>索取贊助徵求書</Typography></Button>
        </Box>
        <Grid container gap='3rem'>
          <Grid item container gap='1rem'>
            <Typography variant='h1' fontWeight='bold' id="host">主辦單位</Typography>
            <Typography variant='body1'>
              <Typography variant='h3' fontWeight='bold' id="team">SITCON 學生計算機年會籌備團隊</Typography>
              SITCON 學生計算機年會 (Students’ Information Technology Conference) 是一個由各校同學於網路串聯發起，鼓勵自發學習、切磋成長的學生社群。 <br />
              <br />
              因為熱愛資訊領域、知道尋找興趣相近夥伴的不容易，籌備團隊從 2013 年以來，便致力於連結對資訊科技相關領域有興趣的學生們，透過每年三月的研討會分享彼此所學，在每週的定期聚交流精進。發展至今，SITCON 除了是東亞最大的學生資訊社群與研討會，各地參與者也藉由夏令營、一小時學程式 (Hour of Code)、黑客松等不同的面向活動，推廣創新、實作、教學相長、以及開源貢獻的精神與理念；在台灣與海外各地，都有 SITCON 參與者的身影。
            </Typography>
          </Grid>
          <Grid item container gap='1rem'>
            <Typography variant='h1' fontWeight='bold' id="co-host">共同主辦</Typography>
            <Typography variant='body1'>
              <Typography variant='h3' fontWeight='bold'>中央研究院資訊科學研究所</Typography>
              中央研究院資訊科學研究所於 1977 年開始設立籌備處，歷經五年籌備， 於 1982 年 9 月正式成立研究所，是中央研究院數理組十一個單位之一。目前編制內有 39 位研究人員，另外有 29 位博士後研究學者，將近 300 位專任之資訊技術人員與非全時之研究助理，支援資訊領域之研究與系統之開發。「件件工作，反映自我，凡經我手，必為佳作」是全體同仁一致秉持的工作信念，重視工作之卓越品質，發揮最佳綜效之團隊精神。
            </Typography>
            <Typography variant='body1'>
              <Typography variant='h3' fontWeight='bold'>財團法人開放文化基金會</Typography>
              開放文化基金會成立於 2014 年，由多個開源社群及活動組織共同發起，希望協助台灣蓬勃的開放社群，進一步促進開放源碼、開放資料、開放硬體等自由精神，能更廣泛的於各領域中應用，同時也協助政府、企業及非政府組織更能了解開源軟體的優勢、開放資料的重要，進而推廣開放協作的文化。2015 年起我們除了支援本地社群主辦多場中大型活動，也和英國代表處、美國在台協會及世界銀行等單位共同舉辦各種主題講座，深耕台灣的開放文化並與國際交流。
            </Typography>
          </Grid>
          <Grid item container gap='1rem'>
            <Typography variant='h1' fontWeight='bold' id="with-host">協辦單位</Typography>
            <Typography variant='body1'>
              <Typography variant='h3' fontWeight='bold'>智慧創新跨域人才培育計畫</Typography>
              ITSA 為教育部智慧創新跨域人才培育計畫，協助進行數位人才之培育，聚焦於「智慧感知與互動體驗」、「大數據分析與資料科學」、「文化創意與多媒體」、「電商金融科技」四大類新興數位軟體之人才培育，以及以開源模式培養雲端運算系統軟體、嵌入式系統軟體及軟體工程人才，以補足我國各產業在相關數位應用人才需求之缺口，擴大國內各產業晉用數位軟體人才的來源。
            </Typography>
          </Grid>
          <Grid item container gap='1rem'>
            <Typography variant='h1' fontWeight='bold' id="sponsor-1">深耕級</Typography>
            <Typography variant='body1'>
              <Image src={`/2024/images/sponsor/.svg`} width={50} height={50} />
            </Typography>
          </Grid>
          <Grid item container gap='1rem'>
            <Typography variant='h1' fontWeight='bold' id="sponsor-2">前瞻級</Typography>
            <Typography variant='body1'>
              <Image src={`/2024/images/sponsor/.svg`} width={50} height={50} />
            </Typography>
          </Grid>
          <Grid item container gap='1rem'>
            <Typography variant='h1' fontWeight='bold' id="sponsor-3">新芽級</Typography>
            <Typography variant='body1'>
              <Image src={`/2024/images/sponsor/.svg`} width={50} height={50} />
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </TocContainer>
  </ThemeProvider>
}