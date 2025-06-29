import SectionTitle from "../SectionTitle";
import JarvTennis from '/images/partnerLogos/Jarvenpaan_tenniskeskus_logo.png';
import Kets from '/images/partnerLogos/KETS_logo.jpeg';
import Intersport from '/images/partnerLogos/Intersport_logo.png';
import KeravaTennis from '/images/partnerLogos/Keravan_tenniskeskus_logo.png';
import Netvisor from '/images/partnerLogos/Netvisor_logo.png';
import '../../index.css';
import { useTranslation } from "react-i18next";

const Partners: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className='bg-white'>
      <div className="flex justify-center">
        <SectionTitle title={t('partners.sectionTitle')} />
      </div>
      <div className="container">
        <div className="flex flex-col flex-wrap md:flex-row justify-center gap-x-10 gap-y-14 items-center">
          <img src={JarvTennis} alt="" className="w-full h-auto max-w-96" />
          <img src={Kets} alt="" className="w-full h-auto max-w-96" />
          <img src={Intersport} alt="" className="w-full h-auto max-w-96" />
          <img src={KeravaTennis} alt="" className="w-full h-auto max-w-96" />
          <img src={Netvisor} alt="" className="w-full h-auto max-w-96" />
        </div>
      </div>
    </section>
  )
}

export default Partners