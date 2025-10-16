import { Header } from '@/components/header';
import { MainScreen } from '@/components/mainScreen';
import { Plans } from '@/components/plans';
import { Services } from '@/components/services';
import { Steps } from '@/components/steps';
import { About } from '@/components/about';
import { Directors } from '@/components/directors';
import { Choose } from '@/components/choose';
import { Trust } from '@/components/trust';
import reviewsConfig from '@config/reviews.config';
import Slider from '@/components/slider/slider';
import certificatesConfig from '@config/certificates.config';
import { Form } from '@/components/form';
import { Contacts } from '@/components/contacts';
import { Footer } from '@/components/footer';

const RootLayout = () => {
    return (
        <>
            <Header />
            <MainScreen />
            <Plans />
            <Services />
            <Steps />
            <About />
            <Directors />
            <Choose />
            <Trust />
            <Slider config={reviewsConfig} />
            <Slider config={certificatesConfig} />
            <Form />
            <Contacts />
            <Footer />
        </>
    );
};
export default RootLayout;
