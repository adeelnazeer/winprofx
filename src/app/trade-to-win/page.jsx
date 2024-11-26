import Banner from './components/Banner';
import HowToTrade from './components/howToTrade'
import ProgramDetail from './components/program'
import StartTrading from './components/startTrading'
import FaqsSections from './components/faqs'

export default function About() {
  return (
    <main>
      <Banner />
      <HowToTrade />
      <ProgramDetail />
      <StartTrading />
      <FaqsSections />
    </main>
  );
}
