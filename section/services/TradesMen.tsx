import React from 'react'
import ServicesBottomCard from "../../element/ServicesBottomCard";
import RepairIcon from "../../data/icon/RepairIcon";
import CarpentryIcon from "../../data/icon/CarpentryIcon";
import HouseBuildingIcon from "../../data/icon/HouseBuildingIcon";
import PlumberIcon from "../../data/icon/PlumberIcon";
import ElectricalRepairKit from "../../data/icon/ElectricalRepairKit";

const TradesMen = () => {
  return (
  <section className='contain pb-5 sm:pb-12 lg:pb-[71px]'>
        <h2 className="text-black font-[700] mb-8 lg:mb-[58px] text-center text-8">
          We use fully qualified tradesmen in all of the following areas
        </h2>
        <div className="sm:flex gap-5 mb-5 justify-between">
          <ServicesBottomCard
            icon={<ElectricalRepairKit />}
            title="Electrical"
            subtitle="We professionally install spotlights, audio walls & general home electrics."
          />
          <ServicesBottomCard
            icon={<RepairIcon />}
            title="Repair"
            subtitle="We professionally install spotlights, audio walls & general home electrics."
          />
          <ServicesBottomCard
            icon={<CarpentryIcon />}
            title="Carpentry"
            subtitle="We professionally install spotlights, audio walls & general home electrics."
          />
        </div>
        <div className="sm:flex gap-5 sm:px-[15%] lg:px-[176px]">
          <ServicesBottomCard
            icon={<HouseBuildingIcon />}
            title="Remodeling"
            subtitle="We professionally install spotlights, audio walls & general home electrics."
          />
          <ServicesBottomCard
            icon={<PlumberIcon />}
            title="Electrical"
            subtitle="We professionally install spotlights, audio walls & general home electrics."
          />
        </div>
      </section>
  )
}

export default TradesMen
