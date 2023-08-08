import React from "react";
import UpdatesSound from "@/components/common/UpdatesSound";
import styles from "./india.module.css";
import TeamCountryNav from "@/components/teams/TeamCountryNav";
import Image from "next/image";
import PostListBar from "@/components/common/PostListBar";

const page = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.soundUpdatesDiv}>
          <UpdatesSound />
        </div>
        <div className={styles.detailsContainer}>
          <div className={styles.leftSection}>
            <div className={styles.TeamCountryNavDiv}>
              <TeamCountryNav />
            </div>

            <div className={styles.aboutTeam}>
              <div className={styles.teamTable}>
                <div className={styles.teamLogo}>
                  <Image
                    src={
                      "https://res.cloudinary.com/dbb7g0jqa/image/upload/v1689677921/Cricket_India_Crest-768x768_wed7tu.jpg"
                    }
                    alt="Cricket Team Logo"
                    height={130}
                    width={130}
                  />
                </div>
                <div className={styles.infoTable}>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Full Name</p>
                    <p className={styles.infoDetail}>
                      India National Cricket Team
                    </p>
                  </div>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Full Name</p>
                    <p className={styles.infoDetail}>
                      India National Cricket Team
                    </p>
                  </div>
                  <div className={styles.column}>
                    <p className={styles.infoName}>Full Name</p>
                    <p className={styles.infoDetail}>
                      India National Cricket Team
                    </p>
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
          <div className="rightSection">
            <PostListBar category="cricket" />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
