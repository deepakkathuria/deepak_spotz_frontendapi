import React from "react";
import styles from "./seriesVenue.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import VenueCard from "../../../../components/common/VenueCard";
import StatsNav from "@/components/series/StatsNav";
// import OrganisationLd from "@/json-ld/OrganisationLd";

const page = ({ params }) => {
  const { "series-name": seriesName } = params;
  return (
    <>
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <div className="updateBox">
          <UpdatesSound />
        </div>
        <div className={styles.seriesOverviewTitle}>
          <p>Sri Lanka Tour of india 2022</p>
        </div>
        <div className={styles.tertiaryNav}>
          <StatsNav seriesName={seriesName} active="venues" />
        </div>
        <div className={styles.venues}>
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
          <VenueCard />
        </div>
      </div>
    </>
  );
};

export default page;
