import Banner from './components/Banner';
import HowToStart from './components/howToStart'
import InvestWithUs from './components/investWithUs'
import BenefitSection from './components/benefiltSection'
import DepositBanner from './components/depositeBanner'
import WhatYouCanTrade from './components/whatYouCanTrade'
import ProfileAbleTrading from './components/profileableTrading'
import AwardWinningExcellence from './components/awardWiningSlider'
import NewsCarousel from './components/newsSlider'
import EffortlessFundFlow from './components/paymentMethods'
import TradeToWinBanner from './components/tradeToWinBanner'
import PartnerBanner from './components/90Banner'

export default function HomePage() {
  return (
    <main>
      <Banner />
      <HowToStart />
      <InvestWithUs />
      <BenefitSection />
      <DepositBanner />
      <WhatYouCanTrade />
      <TradeToWinBanner />
      <ProfileAbleTrading />
      <AwardWinningExcellence />
      <NewsCarousel />
      <EffortlessFundFlow />
      <PartnerBanner />
    </main>
  );
}
