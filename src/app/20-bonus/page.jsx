import Banner from './components/banner';
import EasySteps from './components/easySteps'
import TradeBanner from './components/tradeBanner'
import BonusWithdrawal from './components/bonusWithdraw'
import DepositBonusComparison from "./components/depositBonus"
import ActivateBonusForm from './components/applyForm'

export default function About() {
    return (
        <main>
            <Banner />
            <EasySteps />
            <TradeBanner />
            <BonusWithdrawal />
            <DepositBonusComparison />
            <ActivateBonusForm />
        </main>
    );
}
