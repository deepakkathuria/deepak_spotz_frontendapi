import React from "react";
import UpdatesSound from "../../../components/common/UpdatesSound";
import styles from "./teamName.module.css";
import TeamCountryNav from "../../../components/teams/TeamCountryNav";
import Image from "next/image";
import PostListBar from "../../../components/common/PostListBar";
import NavBarSec from "@/components/scorePage/NavBarSec";
import Breadcrumb from "@/components/common/Breadcrumb";
import OrganisationLd from "@/json-ld/OrganisationLd";
const base_url = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;
import { BreadcrumbJsonLd } from "next-seo";
// const base_url = process.env.NEXT_PUBLIC_BASE_URL;
const site_url = process.env.NEXT_PUBLIC_SITE_URL;

const fetchTeamInfoById = async (teamId) => {
  const res = await fetch(`${base_url}/teams/${teamId}?token=${token}`);
  const team = await res.json();
  return team;
};

const page = async ({ params }) => {
  const { teamName } = params;
  const teamId = teamName?.split("-")[1];
  const currentCountry = "india";
  const data = await fetchTeamInfoById(teamId);
  console.log(data);
  const breadcrumbs = [
    {
      name: "HOME",
      url: "/",
    },
    {
      name: `CRICKET TEAM`,
      url: "/cricket-team",
    },
    {
      name: `${teamName.toUpperCase().slice(0, 40)}...`,
      url: `/cricket-team/${teamName}`,
    },
  ];

  return (
    <>
          <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "HOME",
            item: "sportzwiki.com",
          },
          {
            position: 2,
            name: breadcrumbs[1]?.name,
            item: `${site_url}${breadcrumbs[1]?.url}`,
          },
          {
            position: 3,
            name: breadcrumbs[2]?.name,
            item: `${site_url}${breadcrumbs[2]?.url}`,
          },
          // {
          //   position: 4,
          //   name: breadcrumbs[3]?.name,
          //   item: `${site_url}${breadcrumbs[3]?.url}`,
          // },
        ]}
      />
      <OrganisationLd />
      <div className={styles.container}>
        <NavBarSec active="teams" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.soundUpdatesDiv}>
          <UpdatesSound />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.leftSection}>
            <div className={styles.TeamCountryNavDiv}>
              <TeamCountryNav active="main" currentCountry={teamName} />
            </div>

            <div className={styles.aboutTeam}>
              <div className={styles.teamTable}>
                <div className={styles.teamLogo}>
                  <Image
                    src={data?.response?.logo_url}
                    alt="Cricket Team Logo"
                    height={95}
                    width={95}
                  />
                </div>
                <div className={styles.infoTable}>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Full Name</p>
                    <p className={styles.infoDetail}>{data?.response?.title}</p>
                  </div>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Abbr Name</p>
                    <p className={styles.infoDetail}>{data?.response?.abbr}</p>
                  </div>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Type</p>
                    <p className={styles.infoDetail}>{data?.response?.type}</p>
                  </div>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Full Name</p>
                    <p className={styles.infoDetail}>
                      India National Cricket Team
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.teamInfo}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste
                  autem officiis facilis sint eveniet ex blanditiis qui
                  quibusdam ea. At explicabo esse officiis earum ea autem
                  necessitatibus sunt consectetur neque? Exercitationem facere
                  quas aperiam est? Neque quasi, tempora, vel ut accusamus
                  inventore fugiat dignissimos obcaecati consequuntur quas sequi
                  impedit quod debitis culpa! Nulla obcaecati omnis accusantium
                  minus error optio. Iste. Inventore nobis omnis in soluta rerum
                  repellat itaque? Doloribus rerum earum consequatur architecto
                  fugiat dicta tempore consectetur id deleniti inventore alias
                  repellat ratione laudantium perferendis tempora quisquam,
                  dolor iusto quod. Blanditiis ratione quae est accusantium
                  accusamus doloribus corporis velit facilis commodi sequi
                  eveniet mollitia cum rerum, sapiente molestias maiores id rem
                  reiciendis. Minus, itaque sint voluptate blanditiis inventore
                  nobis dolores. Tempora deleniti ducimus incidunt maiores neque
                  sint rem. Culpa impedit adipisci enim. Quam ratione modi
                  voluptates soluta inventore consectetur, quo possimus fuga
                  aliquid ipsam rerum veritatis et, quaerat nesciunt illum.
                  Voluptatem similique officia maxime cum voluptates corporis
                  numquam iure, neque tempora eius eos quam reiciendis
                  laboriosam, repellendus a saepe hic nulla omnis sed eligendi
                  reprehenderit corrupti? Debitis molestiae libero ut. Nesciunt
                  tempora iste sint adipisci natus, quos in ex officiis
                  delectus, qui similique harum esse dolorem assumenda magnam
                  architecto earum nostrum repellendus cupiditate placeat at
                  rerum saepe aspernatur neque. Saepe. Eius accusamus molestias
                  eos veniam atque iusto sunt corporis numquam hic ratione,
                  mollitia ullam incidunt reprehenderit quae molestiae. Facilis
                  in autem aliquid blanditiis deserunt harum vel qui soluta
                  accusantium delectus. Ipsum quibusdam aperiam, reprehenderit
                  porro, voluptate pariatur veritatis necessitatibus maiores
                  eaque, odit molestias! Eaque possimus illo saepe labore
                  tenetur. Hic modi corporis reprehenderit pariatur expedita qui
                  cumque eius. Accusantium, qui. Architecto dignissimos a dolor
                  quaerat nemo neque omnis, vero voluptatibus, doloremque optio
                  facilis blanditiis numquam maxime animi exercitationem. Quae
                  blanditiis corrupti distinctio ab tempore molestias debitis
                  vero dicta hic recusandae!
                </p>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <PostListBar category="cricket" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
