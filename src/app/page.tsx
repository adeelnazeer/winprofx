import HeroBanner from './components/Home/HeroBanner';
import ServicesSection from './components/Home/ServicesSection';
import FintechExpertiseSection from './components/Home/FintechExpertiseSection'
import OtpComponent from './components/Home/otpHandler'
import DepositeBanner from './home-page/components/depositeBanner'
export default function Home() {
  return (
    <>
      <HeroBanner />
      <ServicesSection />
      <DepositeBanner/>
      <OtpComponent />
      <FintechExpertiseSection />
    </>
  );
}
