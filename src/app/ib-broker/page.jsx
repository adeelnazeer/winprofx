import Banner from './components/banner';
import PartneringPerks from './components/partnerPerks'
import IntroducingBrokerBenefits from './components/benefitsIB'
import Rewards from './components/rewards'
import StartJourneyForm from './components/startJourneyForm'
import ProfitCalculator from './components/profileCalculator'
import WinprofxPartner from './components/partner'

export default function About() {
    return (
        <main>
            <Banner />
            <PartneringPerks />
            <IntroducingBrokerBenefits />
            <Rewards />
            <StartJourneyForm />
            <ProfitCalculator />
            <WinprofxPartner />
        </main>
    );
}
