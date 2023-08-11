import React from "react";
import styles from "./PlayerTeamSelect.module.css";
import TeamSliderButton from "./TeamSliderButton";

const PlayerTeamSelect = () => {
  return (
    <>
      <div className={styles.container}>
        <TeamSliderButton
          name="IND"
          img="https://images.entitysport.com/assets/uploads//2023/01/india-4.png"
          src=""
        />
        <TeamSliderButton
          name="AUS"
          img="https://images.entitysport.com/assets/uploads//2023/01/Australia-1.png"
          src="australia"
        />
        {/* <TeamSliderButton name="ENG" img="" /> */}
        <TeamSliderButton
          name="PAK"
          img="https://images.entitysport.com/assets/uploads/2023/05/Pakistan.png"
          src="pakistan"
        />
        <TeamSliderButton
          name="SA"
          img="https://images.entitysport.com/assets/uploads/2023/05/South-africa.png"
          src="srilanka"
        />
        <TeamSliderButton
          name="WI"
          img="https://images.entitysport.com/assets/uploads/2023/05/West-Indies.png"
          src="westindies"
        />
        <TeamSliderButton
          name="NZ"
          img="https://images.entitysport.com/assets/uploads/2023/05/New-zealand.png"
          src="newzealand"
        />
        <TeamSliderButton
          name="SL"
          img="https://images.entitysport.com/assets/uploads/2023/05/Sri-lanka.png"
          src="srilanka"
        />
        {/* <TeamSliderButton name="NZ" img="" /> */}
        {/* <TeamSliderButton name="WI" img="" />
        <TeamSliderButton name="SA" img="" /> */}
        <TeamSliderButton
          name="IRE"
          img="https://images.entitysport.com/assets/uploads/2023/05/Ireland.png"
          src="ireland"
        />
        <TeamSliderButton
          name="UAE"
          img="https://images.entitysport.com/assets/uploads/2023/05/United_Arab_Emirates.png"
          src="uae"
        />
        <TeamSliderButton
          name="BAN"
          img="https://images.entitysport.com/assets/uploads/2023/05/Bangladesh-10.png"
          src="bangladesh"
        />
        {/* <TeamSliderButton name="" img="" />
        <TeamSliderButton name="" img="" />
        <TeamSliderButton name="" img="" />
        <TeamSliderButton name="" img="" />
        <TeamSliderButton name="" img="" />
        <TeamSliderButton name="" img="" />
        <TeamSliderButton name="" img="" /> */}
      </div>
    </>
  );
};

// sa 19
// srilanka 21
// bangladesh 23
// uae 15
//
export default PlayerTeamSelect;
