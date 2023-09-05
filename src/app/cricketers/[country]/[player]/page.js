import React from "react";
import styles from "./playerProfile.module.css";
import UpdatesSound from "../../../../components/common/UpdatesSound";
import PlayersNav from "../../../../components/testing/players/PlayersNav";
import PlayerInfoTable from "../../../../components/testing/players/PlayerInfoTable";
import StatsTable from "../../../../components/testing/players/StatsTable";
import NavBarSec from "@/components/scorePage/NavBarSec";
import StatsTableBowling from "@/components/testing/players/StatsTableBowling";
import Breadcrumb from "@/components/common/Breadcrumb";
// import OrganisationLd from "@/json-ld/OrganisationLd";
import { BreadcrumbJsonLd } from "next-seo";
import FaqLive from "@/components/common/FaqLive";
const base_url = process.env.BASE_URL_DO;
const site_url = process.env.SITE_URL;

const baseUrl = process.env.NEXT_PUBLIC_ENTITY_URL;
const token = process.env.NEXT_PUBLIC_ENTITY_TOKEN;

const fetchPlayerInfoById = async (playerId) => {
  const res = await fetch(`${baseUrl}/players/${playerId}?token=${token}`);
  const data = await res.json();
  return data;
};

const fetchPlayerStatsById = async (playerId) => {
  const res = await fetch(
    `${baseUrl}/players/${playerId}/stats?token=${token}`
  );
  const data = await res.json();
  return data;
};

export async function generateMetadata({ params }) {
  const { country, player } = params;

  const playerIdInt = parseInt(player.split("-")[player.split("-").length - 1]);

  const playerInfo = await fetchPlayerInfoById(playerIdInt);
  // console.log(playerInfo);
  return {
    title: `${
      playerInfo?.response?.player?.title || ""
    } | Indian Cricketers Information | International &  Domestic`,
    description: `Full player information of ${
      playerInfo?.response?.player?.title || ""
    }, fulll details, career on SportzWiki.`,
  };
}

const page = async ({ params }) => {
  const { country, player } = params;
  //   const { player } = params;

  const playerIdInt = parseInt(player.split("-")[player.split("-").length - 1]);

  const playerInfo = await fetchPlayerInfoById(playerIdInt);
  // console.log(playerInfo, "playerInfoplayerInfoplayerInfoplayerInfo");
  const playerStats = await fetchPlayerStatsById(playerIdInt);
  // console.log(playerStats.response.batting, "playerIdIntplayerIdIntplayerIdInt");
  const breadcrumbs = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: `Cricketers`,
      url: "/cricketers",
    },
    //  {
    //   name: `NEWS`,
    //   url: "/",
    // },
    {
      name: `${country}`,
      url: `/cricketers/${country}`,
    },
    {
      name: `${playerInfo?.response?.player?.title}`,
      // url: `/cricketers/${country}/${player}`,
    },
    // {
    //   name: `NEWS`,
    //   url: "/",
    // },
  ];
  return (
    <>
      <BreadcrumbJsonLd
        useAppDir={true}
        itemListElements={[
          {
            position: 1,
            name: "Home",
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
      {/* <OrganisationLd /> */}
      <div className={styles.container}>
        <NavBarSec active="players" />
        <div style={{ marginTop: "1rem" }} className="breadcrumb">
          <Breadcrumb breadcrumbsObj={breadcrumbs} />
        </div>
        <div className={styles.updateBox}>
          <UpdatesSound />
        </div>
        <h1 style={{ marginTop: "1rem" }}>
          {playerInfo?.response?.player?.title || ""}
        </h1>
        <div className={styles.dataMain}>
          <div className={styles.bannerNav}>
            <div className={styles.banner}></div>
            <div className={styles.nav}>
              <PlayersNav
                country={country}
                player={player}
                active={"overview"}
              />
            </div>
          </div>
          <div className={styles.details}>
            <PlayerInfoTable
              name={playerInfo?.response?.player?.title || ""}
              dob={playerInfo?.response?.player?.birthdate || ""}
              short_name={playerInfo?.response?.player?.short_name}
              first_name={playerInfo?.response?.player?.first_name}
              last_name={playerInfo?.response?.player?.last_name}
              middle_name={playerInfo?.response?.player?.middle_name}
              birthplace={playerInfo?.response?.player?.birthplace}
              country={playerInfo?.response?.player?.country}
              primary_team={playerInfo?.response?.player?.primary_team}
              playing_role={playerInfo?.response?.player?.playing_role}
              batting_style={playerInfo?.response?.player?.batting_style}
              bowling_style={playerInfo?.response?.player?.bowling_style}
              fielding_position={
                playerInfo?.response?.player?.fielding_position
              }
              recent_match={playerInfo?.response?.player?.recent_match}
              recent_appearance={
                playerInfo?.response?.player?.recent_appearance
              }
              fantasy_player_rating={
                playerInfo?.response?.player?.fantasy_player_rating
              }
              alt_name={playerInfo?.response?.player?.alt_name}
              facebook_profile={playerInfo?.response?.player?.facebook_profile}
              twitter_profile={playerInfo?.response?.player?.twitter_profile}
              instagram_profile={
                playerInfo?.response?.player?.instagram_profile
              }
              nationality={playerInfo?.response?.player?.nationality}
            />
          </div>
          {/* <div className={styles.about}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            molestiae neque odit, aliquam, iste expedita nulla cum laudantium,
            ut pariatur sed doloribus. Ex saepe impedit deleniti optio quisquam,
            sapiente repudiandae! Animi obcaecati mollitia quis eligendi
            blanditiis eius, quas earum ea repellat. Earum dignissimos expedita,
            aliquam non necessitatibus illo, blanditiis, iure soluta ullam quasi
            vel. Saepe nesciunt itaque libero dicta facilis? Commodi assumenda
            qui odit sapiente, pariatur amet laborum officiis sint tempora.
            Provident modi, distinctio esse facere eius voluptates excepturi
            aliquid rerum recusandae facilis, voluptate in, assumenda fugit.
            Distinctio, aliquid ipsum. Molestiae fugit repellendus officia qui
            corrupti, officiis accusantium. Assumenda, amet ex eligendi soluta
            neque vitae nemo excepturi dolorum, dicta aspernatur quaerat esse ad
            modi quam, blanditiis veritatis rerum explicabo repellat?
            Exercitationem sunt molestiae deleniti excepturi atque officia
            labore cum fuga delectus, perspiciatis, quam, corrupti voluptas!
            Cumque voluptatem ipsum praesentium aliquid sapiente, officiis
            laudantium. Esse debitis harum tempore ea ipsa non. Quaerat nesciunt
            animi officia ut culpa. Vel eveniet, aspernatur placeat possimus
            voluptate, suscipit porro illo esse iusto ullam fugit, quis in!
            Velit maxime soluta veniam ullam iure, incidunt voluptas provident.
            Incidunt, ratione saepe voluptates, magni, possimus quo cumque ad
            aliquid expedita mollitia consequuntur debitis. Enim dolore nihil
            temporibus aut saepe neque ratione ea ab voluptatum laborum
            deleniti, ex voluptatibus similique. Ut nobis iusto, sed temporibus
            sunt, ducimus est reprehenderit fugiat possimus excepturi
            distinctio. Odit commodi est fuga. Quisquam amet eum quaerat,
            similique reiciendis nesciunt culpa itaque, eos cumque nemo hic.
            Culpa, incidunt porro cupiditate nam numquam a voluptas
            necessitatibus id, blanditiis temporibus, itaque ex rerum fugiat
            nostrum vel? Hic, repellendus doloribus nihil labore fugit amet
            atque fuga quaerat? Enim, aperiam? Ullam commodi quo cumque,
            repudiandae magnam error hic incidunt. Corrupti, odit! Ea labore,
            beatae magnam consequuntur odio cupiditate illo reprehenderit
            dolores distinctio repellat, inventore fugiat ipsam quidem ipsa.
            Aliquid, iste! Architecto officiis officia quam debitis sed
            cupiditate quos corporis odio hic distinctio reiciendis, suscipit
            accusantium maxime voluptates perferendis aut sint ut culpa laborum.
            Eaque, labore. Illum sed labore vero doloribus? Nobis voluptatem,
            dolores ipsa ducimus ullam sit doloribus vero ipsam illo cumque quos
            expedita illum molestias maiores soluta placeat accusantium neque
            provident beatae! Voluptates mollitia nisi iusto atque
            necessitatibus! Distinctio. Velit fugit cumque, porro eaque facilis
            sapiente deleniti quaerat ea eos. In accusamus eveniet consectetur
            corporis. Molestias iure nihil tempore tempora esse neque, fugiat
            quia velit soluta quasi culpa facere. Id minus consectetur obcaecati
            earum, modi dolorum quibusdam debitis animi et. Laudantium ad,
            delectus beatae tempora totam dolorum assumenda, in dicta repellat,
            quae nobis odit vel voluptates quia. At, error! Quidem natus,
            consequatur laboriosam perspiciatis, fuga culpa aperiam unde sint
            nemo repellat alias! Deserunt, voluptatibus? Saepe, consequuntur.
            Facilis laboriosam tempora, rerum repudiandae veniam beatae. Odio
            earum ratione deleniti illum eligendi? Accusamus ipsum eveniet,
            illum natus laborum exercitationem maiores iste quidem adipisci
            repellendus consequuntur, hic voluptate dolorem, voluptatum ducimus
            incidunt rem corrupti soluta placeat ab architecto odit. Aspernatur
            error qui eius? Neque harum cupiditate non explicabo obcaecati
            expedita veniam earum iste accusantium aliquam, dicta fuga
            consequuntur nobis natus error et, odit omnis consequatur corrupti!
            Iusto optio vel alias sint distinctio at? Vero libero inventore
            accusamus perferendis voluptatibus, officiis eveniet ipsam veritatis
            quos sapiente reiciendis nobis, est in vitae quo non distinctio
            alias minus qui possimus placeat exercitationem sit cupiditate fuga!
            Odio. Corporis veniam eaque soluta facere nobis. Animi facere error
            pariatur quia consequuntur nam amet modi nihil nisi. Quibusdam
            temporibus ad et, nostrum dolore ipsam, doloribus nobis delectus
            quas mollitia ullam! Sapiente odit asperiores ea iusto corporis,
            commodi consequatur aliquid tenetur provident, numquam, temporibus
            similique. Sit excepturi pariatur odit consequuntur doloremque,
            animi dolores sint consectetur ad rerum deserunt temporibus. Neque,
            vitae? Recusandae nulla doloremque sapiente cupiditate. Debitis
            ratione minima repudiandae doloribus sed animi illum, qui optio
            explicabo incidunt quisquam! A eligendi rerum optio incidunt sint.
            Non eligendi aliquam sit sed eum? Numquam dolorem debitis eaque
            dicta voluptas vel similique nesciunt. Voluptatum similique soluta,
            nobis blanditiis maiores hic quam quae odio saepe perferendis fuga,
            suscipit dignissimos nesciunt doloremque id. Placeat, fugiat a!
            Obcaecati mollitia totam debitis consequatur. Fuga nulla, nobis nisi
            molestiae quas sequi voluptates reiciendis odio laborum ab inventore
            rem enim obcaecati ipsa magni facere qui eligendi, voluptatem dolore
            facilis temporibus. Excepturi unde debitis quis voluptate qui quasi
            sequi veniam? Voluptas cumque minus reprehenderit enim magni est
            nulla iure soluta excepturi temporibus autem quo eligendi dolor
            numquam, asperiores, similique rerum culpa. Voluptate, veniam
            exercitationem! Repudiandae magnam suscipit cumque, in consectetur
            hic placeat soluta quibusdam culpa dignissimos error voluptate saepe
            blanditiis sint deserunt laudantium eligendi omnis explicabo
            doloremque!
          </div> */}
          <div className={styles.table}>
            <StatsTable
              data={playerStats.response.batting}
              type="Batting Stats"
              typeStr="bat"
            />
            <StatsTableBowling
              data={playerStats.response.bowling}
              type="Bowling Stats"
              typeStr="bowl"
            />
            {/* <div style={{ marginTop: "2rem" }} className="header">
              <h2 style={{ fontSize: "1.4rem" }}>SportzWiki Media</h2>
              <p style={{ marginTop: "1rem", fontSize: "1.3rem" }}>
                It is an honour to introduce—Sportzwiki – sports is life, is one
                of the leading online sports mediums across the globe. The
                digital platform over the years has grabbed the attention of an
                audience worldwide.From the cricketing ground to the badminton
                court—the dedicated team at Sportzwiki has been always on the
                lookout to provide insights, pre and post-match stuff and plenty
                with 24/7 window.
              </p>
            </div>
            <FaqLive /> */}
          </div>

          {/* <div className="newsSection">

          </div> */}
        </div>
      </div>
    </>
  );
};

export default page;
