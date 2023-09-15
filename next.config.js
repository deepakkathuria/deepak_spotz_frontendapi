// const withImages = require("next-images");
// module.exports = withImages();

const nextConfig = {
  async redirects() {
    return [
      // {
      //   source:
      //     "/more/odisha-set-kalinga-international-sports-city-mega-events",
      //   destination:
      //     "/asian-athletics-championship-(aac)-2017/odisha-to-set-up-kalinga-international-sports-city-for-mega-events",
      //   permanent: true,
      // },
      {
        source:
          "/asian-games-2018/comedy-of-errors-leave-top-indian-athletes-hitching-a-ride-at-asiad-torch-relay-2",
        destination:
          "/asian-games-2018/comedy-of-errors-leave-top-indian-athletes-hitching-a-ride-at-asiad-torch-relay",
        permanent: true,
      },
      {
        source:
          "/badminton-latest-news/lee-chong-wei-says-he-wants-to-play-2020-tokyo-olympics-2",
        destination:
          "/badminton-latest-news/lee-chong-wei-says-he-wants-to-play-2020-tokyo-olympics",
        permanent: true,
      },
      {
        source:
          "/badminton-latest-news/saina-enters-malaysia-open-semis-sindhu-knocked-2",
        destination:
          "/badminton-latest-news/saina-enters-malaysia-open-semis-sindhu-knocked",
        permanent: true,
      },
      {
        source:
          "/badminton-latest-news/shuttler-sindhu-crashes-out-of-china-open",
        destination:
          "/badminton-latest-news/shuttler-sindhu-crashes-china-open",
        permanent: true,
      },
      {
        source:
          "/badminton-latest-news/sindhu-loses-tai-hong-kong-open-final-2",
        destination:
          "/badminton-latest-news/sindhu-loses-tai-hong-kong-open-final",
        permanent: true,
      },
      {
        source:
          "/cricket-news/2016-asia-cup-t20-india-vs-sri-lanka-indias-predicted-xi-2",
        destination:
          "/cricket-events-2017/2016-asia-cup-t20-india-vs-sri-lanka-indias-predicted-xi",
        permanent: true,
      },
      {
        source: "/cricket-news/5-indian-players-to-watch-out-for-in-asia-cup-2",
        destination:
          "/cricket-news/5-indian-players-to-watch-out-for-in-asia-cup",
        permanent: true,
      },
      {
        source: "/uncategorized/5-players-never-played-india-zimbabwe-tour-2",
        destination: "/cricket-news/5-players-never-played-india-zimbabwe-tour",
        permanent: true,
      },
      {
        source:
          "/cricket-news/5-promising-cricketers-who-did-not-get-enough-chances-under-ms-dhoni-2",
        destination:
          "/cricket-news/5-promising-cricketers-who-did-not-get-enough-chances-under-ms-dhoni",
        permanent: true,
      },
      {
        source: "/cricket-news/australia-favourites-win-womens-world-t20-2",
        destination: "/cricket-news/australia-favourites-win-womens-world-t20",
        permanent: true,
      },
      {
        source:
          "/cricket-news/bangladesh-postpone-zimbabwe-test-series-to-prepare-for-t20-events-2",
        destination:
          "/cricket-news/bangladesh-postpone-zimbabwe-test-series-to-prepare-for-t20-events",
        permanent: true,
      },
      {
        source:
          "/cricket-news/new-zealand-vs-india-2014-2nd-odi-hamish-bennett-replaces-injured-adam-milne",
        destination: "/cricket-news/bennett-replaces-injured-milne",
        permanent: true,
      },
      {
        source:
          "/cricket-news/cheteshwar-pujara-reveals-test-series-against-sri-lanka-will-prepare-hosts-for-south-africa-tour-2",
        destination:
          "/cricket-news/cheteshwar-pujara-reveals-test-series-against-sri-lanka-will-prepare-hosts-for-south-africa-tour",
        permanent: true,
      },
      {
        source:
          "/cricket-news/court-considers-defamation-case-against-kirti-azad-2",
        destination:
          "/cricket-news/court-considers-defamation-case-against-kirti-azad",
        permanent: true,
      },
      {
        source: "/cricket-news/ct-2017-india-vs-pakistan-scoreboard-2",
        destination: "/cricket-news/ct-2017-india-vs-pakistan-scoreboard",
        permanent: true,
      },
      {
        source:
          "/cricket-news/deepika-padukone-reveals-her-favourite-cricketer-2",
        destination:
          "/cricket-news/deepika-padukone-reveals-her-favourite-cricketer",
        permanent: true,
      },
      {
        source:
          "/cricket-news/dhoni-plays-with-ice-bags-on-his-back-at-jamsedpur-in-2006-2",
        destination:
          "/cricket-news/dhoni-plays-with-ice-bags-on-his-back-at-jamsedpur-in-2006",
        permanent: true,
      },
      {
        source:
          "/cricket-news/disgraceful-fight-between-pakistani-players-in-psl-2",
        destination:
          "/cricket-news/disgraceful-fight-between-pakistani-players-in-psl",
        permanent: true,
      },
      {
        source:
          "/cricket-news/dravid-raina-amazing-plan-to-dismiss-kamran-akmal-2",
        destination:
          "/cricket-news/dravid-raina-amazing-plan-to-dismiss-kamran-akmal",
        permanent: true,
      },
      {
        source: "/cricket-news/end-road-suresh-raina",
        destination: "/cricket-news/end-of-road-for-suresh-raina",
        permanent: true,
      },
      {
        source:
          "/cricket-news/england-vs-india-2014-2nd-test-day-2-twitter-reactions-2",
        destination:
          "/cricket-news/england-vs-india-2014-2nd-test-day-2-twitter-reactions",
        permanent: true,
      },
      {
        source: "/cricket-news/lalit-modi-lashes-out-at-bcci",
        destination:
          "/cricket-news/former-indian-premier-league-ipl-commissioner-lalit-modi-took-a-dig-at-the-board-of-control-for-cricket-in-india-bcci",
        permanent: true,
      },
      {
        source: "/cricket-news/ganguly-unveils-statue-balurghat",
        destination: "/cricket-news/ganguly-unveils-own-statue-at-balurghat",
        permanent: true,
      },
      {
        source: "/cricket-news/hardik-pandya-hit-34-off-1-domestic-t20-2",
        destination: "/cricket-news/hardik-pandya-hit-34-off-1-domestic-t20",
        permanent: true,
      },
      {
        source:
          "/cricket-news/team-india-selected-hardik-pandya-hit-34-off-1-over-in-domestic-t20-2",
        destination: "/cricket-news/hardik-pandya-hit-34-off-1-domestic-t20",
        permanent: true,
      },
      {
        source: "/cricket-news/haters-can-never-get-top-ms-dhoni",
        destination: "/cricket-news/haters-can-never-get-on-top-of-ms-dhoni",
        permanent: true,
      },
      {
        source:
          "/cricket-news/icc-world-cup-2019-shikhar-dhawan-ruled-out-of-the-tournament-2",
        destination:
          "/cricket-news/icc-world-cup-2019-shikhar-dhawan-ruled-out-of-the-tournament",
        permanent: true,
      },
      {
        source:
          "/cricket-news/indian-cricketers-who-married-people-from-different-religion-2",
        destination:
          "/cricket-news/indian-cricketers-who-married-people-from-different-religion",
        permanent: true,
      },
      {
        source: "/cricket-news/indian-premier-league-2008-best-average-2",
        destination: "/cricket-news/indian-premier-league-2008-best-average",
        permanent: true,
      },
      {
        source: "/cricket-news/indian-premier-league-2018-fastest-fifties-2",
        destination: "/cricket-news/indian-premier-league-2018-fastest-fifties",
        permanent: true,
      },
      {
        source: "/cricket-news/indian-premier-league-2018-most-fours-innings-2",
        destination:
          "/cricket-news/indian-premier-league-2018-most-fours-innings",
        permanent: true,
      },
      {
        source:
          "/cricket-news/india-register-ninth-straight-series-win-after-drawing-kotla-test-2",
        destination:
          "/cricket-news/india-register-ninth-straight-series-win-after-drawing-kotla-test",
        permanent: true,
      },
      {
        source: "/cricket-news/india-vs-england-scoreboard-day-three-stumps-2",
        destination:
          "/cricket-news/india-vs-england-scoreboard-day-three-stumps",
        permanent: true,
      },
      {
        source: "/cricket-news/india-vs-england-scoreboard-day-two-close-2",
        destination: "/cricket-news/india-vs-england-scoreboard-day-two-close",
        permanent: true,
      },
      {
        source: "/cricket-news/india-vs-sri-lanka-final-scoreboard-2",
        destination: "/cricket-news/india-vs-sri-lanka-final-scoreboard",
        permanent: true,
      },
      {
        source: "/cricket-news/ind-vs-nz-3rd-test-day-1-twitter-reactions-2",
        destination: "/cricket-news/ind-vs-nz-3rd-test-day-1-twitter-reactions",
        permanent: true,
      },
      {
        source: "/cricket-news/innings-proteas-learning-curve-dhawan-2",
        destination: "/cricket-news/innings-proteas-learning-curve-dhawan",
        permanent: true,
      },
      {
        source:
          "/cricket-news/sunrisers-hyderabad-vs-mumbai-indians-twitter-reactions",
        destination:
          "/cricket-news/ipl-2018-match-7-sunrisers-hyderabad-vs-mumbai-indians-twitter-reactions",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2019-it-feels-great-to-train-under-muttiah-muralitharan-says-srh-spinner-shahbaz-nadeem-2",
        destination:
          "/cricket-news/ipl-2019-it-feels-great-to-train-under-muttiah-muralitharan-says-srh-spinner-shahbaz-nadeem",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2019-shane-watson-and-kagiso-rabada-exchange-pleasantries-after-heated-argument-2",
        destination:
          "/cricket-news/ipl-2019-shane-watson-and-kagiso-rabada-exchange-pleasantries-after-heated-argument",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2020-chennai-super-kings-vs-rajasthan-royals-csk-predicted-xi-2",
        destination:
          "/cricket-news/ipl-2020-chennai-super-kings-vs-rajasthan-royals-csk-predicted-xi",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2020-delhi-capitals-vs-rajasthan-royals-rr-predicted-xi-2",
        destination:
          "/cricket-news/ipl-2020-delhi-capitals-vs-rajasthan-royals-rr-predicted-xi",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2020-kolkata-knight-riders-vs-rajasthan-royals-kkr-predicted-xi-2",
        destination:
          "/cricket-news/ipl-2020-kolkata-knight-riders-vs-rajasthan-royals-kkr-predicted-xi",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2020-royal-challengers-bangalore-vs-sunrisers-hyderabad-rcb-predicted-xi-2",
        destination:
          "/cricket-news/ipl-2020-royal-challengers-bangalore-vs-sunrisers-hyderabad-rcb-predicted-xi",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2020-royal-challengers-bangalore-vs-sunrisers-hyderabad-srh-predicted-xi-2",
        destination:
          "/cricket-news/ipl-2020-royal-challengers-bangalore-vs-sunrisers-hyderabad-srh-predicted-xi",
        permanent: true,
      },
      {
        source: "/cricket-news/irfan-pathan-casually-castles-a-batsman-2",
        destination: "/cricket-news/irfan-pathan-casually-castles-a-batsman",
        permanent: true,
      },
      {
        source: "/cricket-news/video-irfan-pathan-castles-batsman-beauty",
        destination: "/cricket-news/irfan-pathan-casually-castles-a-batsman",
        permanent: true,
      },
      {
        source: "/cricket-news/latest-icc-odi-batsmen-rankings-2",
        destination: "/cricket-news/latest-icc-odi-batsmen-rankings",
        permanent: true,
      },
      {
        source: "/cricket-news/latest-icc-test-bowlers-rankings-2",
        destination: "/cricket-news/latest-icc-test-bowlers-rankings",
        permanent: true,
      },
      {
        source: "/cricket-news/latest-indian-cricketers-salaries-2",
        destination: "/cricket-news/latest-indian-cricketers-salaries",
        permanent: true,
      },
      {
        source:
          "/cricket-news/lewis-shines-as-west-indies-beat-india-by-nine-wickets-2",
        destination:
          "/cricket-news/lewis-shines-as-west-indies-beat-india-by-nine-wickets",
        permanent: true,
      },
      {
        source:
          "/cricket-news/list-of-non-muslim-cricketers-who-played-for-pakistan-2",
        destination:
          "/cricket-news/list-of-non-muslim-cricketers-who-played-for-pakistan",
        permanent: true,
      },
      {
        source:
          "/cricket-news/longest-lbw-decision-ever-in-the-history-of-cricket-2",
        destination:
          "/cricket-news/longest-lbw-decision-ever-in-the-history-of-cricket",
        permanent: true,
      },
      {
        source: "/cricket-news/looking-forward-bowl-kohli-test-thakur-2",
        destination: "/cricket-news/looking-forward-bowl-kohli-test-thakur",
        permanent: true,
      },
      {
        source:
          "/cricket-news/martin-guptill-smashes-a-monster-six-during-the-1st-odi-vs-australia-2",
        destination:
          "/cricket-news/martin-guptill-smashes-a-monster-six-during-the-1st-odi-vs-australia",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ms-dhoni-comes-sarcastic-technique-deal-negativity-2",
        destination:
          "/cricket-news/ms-dhoni-comes-sarcastic-technique-deal-negativity",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ms-dhoni-troll-attack-leavessssssss-ravindra-jadeja-tatters",
        destination:
          "/cricket-news/ms-dhoni-troll-attack-leaves-rsavindra-jadeja-in-tatters",
        permanent: true,
      },
      {
        source:
          "/uncategorized/new-zealand-beat-australia-womens-world-t20-clash-2",
        destination:
          "/cricket-news/new-zealand-beat-australia-in-womens-world-t20-clash",
        permanent: true,
      },
      {
        source:
          "/cricket-news/new-zealand-vs-west-indies-third-test-match-preview-2",
        destination:
          "/cricket-news/new-zealand-vs-west-indies-third-test-match-preview",
        permanent: true,
      },
      {
        source: "/cricket-news/understanding-wasp",
        destination:
          "/cricket-news/new-zeland-vs-india-odi-series-understanding-wasp-winning-and-score-predictor",
        permanent: true,
      },
      {
        source:
          "/cricket-news/pakistan-batsman-umar-akmal-clean-bowled-by-a-girl-in-norway-2",
        destination:
          "/cricket-news/pakistan-batsman-umar-akmal-clean-bowled-by-a-girl-in-norway",
        permanent: true,
      },
      {
        source:
          "/cricket-news/pakistan-cricket-board-to-investigate-shehzad-dilshan-religious-gate-2",
        destination:
          "/cricket-news/pakistan-cricket-board-to-investigate-shehzad-dilshan-religious-gate",
        permanent: true,
      },
      {
        source:
          "/cricket-news/pakistan-vs-new-zealand-2018-a-great-advertisement-for-test-cricket-kane-williamson-2",
        destination:
          "/cricket-news/pakistan-vs-new-zealand-2018-a-great-advertisement-for-test-cricket-kane-williamson",
        permanent: true,
      },
      {
        source: "/cricket-news/pravin-amre-resigns-mca-ipl-2018",
        destination: "/cricket-news/pravin-amre-mca-managing-committee",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ravichandran-ashwin-reveals-the-name-of-is-his-favourite-captain",
        destination:
          "/cricket-news/ravichandran-ashwin-reveals-name-favourite-captain",
        permanent: true,
      },
      {
        source:
          "/cricket-news/revealed-salary-of-australian-cricketers-in-2015-2016-2",
        destination:
          "/cricket-news/revealed-salary-of-australian-cricketers-in-2015-2016",
        permanent: true,
      },
      {
        source:
          "/cricket-news/rohit-buttler-power-mumbai-indians-6-wicket-win-kkr-2",
        destination:
          "/cricket-news/rohit-buttler-power-mumbai-indians-6-wicket-win-kkr",
        permanent: true,
      },
      {
        source:
          "/cricket-news/shahid-afridi-doesnt-shakes-hand-with-the-sponsor-after-getting-man-of-the-match-award-2",
        destination:
          "/cricket-news/shahid-afridi-doesnt-shakes-hand-with-the-sponsor-after-getting-man-of-the-match-award",
        permanent: true,
      },
      {
        source:
          "/cricket-news/sportzwiki-top-five-odi-matches-international-cricket-history-2",
        destination:
          "/cricket-news/sportzwiki-top-five-odi-matches-international-cricket-history",
        permanent: true,
      },
      {
        source:
          "/cricket-news/superior-chepauk-super-gillies-defeats-kanchi-warriors-rain-marred-match-2",
        destination:
          "/cricket-news/superior-chepauk-super-gillies-defeats-kanchi-warriors-rain-marred-match",
        permanent: true,
      },
      {
        source: "/cricket-news/top-10-teams-sixes-odi-cricket",
        destination: "/cricket-news/teams-most-sixes-in-odi",
        permanent: true,
      },
      {
        source:
          "/cricket-news/the-cheater-wags-wags-cheating-on-their-spouse-to-date-their-teammates-2",
        destination:
          "/cricket-news/the-cheater-wags-wags-cheating-on-their-spouse-to-date-their-teammates",
        permanent: true,
      },
      {
        source:
          "/cricket-news/tommy-stewart-a-teenage-boy-took-10-wickets-for-just-2-runs-2",
        destination:
          "/cricket-news/tommy-stewart-a-teenage-boy-took-10-wickets-for-just-2-runs",
        permanent: true,
      },
      {
        source: "/cricket-news/top-10-greatest-bowlers-of-all-time-2",
        destination: "/cricket-news/top-10-greatest-bowlers-of-all-time",
        permanent: true,
      },
      {
        source:
          "/cricket-news/top-10-highest-man-of-the-match-award-winners-in-odi",
        destination:
          "/cricket-news/top-10-highest-man-match-award-winners-odi-2",
        permanent: true,
      },
      {
        source: "/cricket-news/top-10-most-run-conceded-in-odi-2",
        destination: "/cricket-news/top-10-most-run-conceded-in-odi",
        permanent: true,
      },
      {
        source: "/cricket-news/top-10-richest-cricket-boards-2",
        destination: "/cricket-news/top-10-richest-cricket-boards",
        permanent: true,
      },
      {
        source: "/cricket-news/top-5-partnerships-test-cricket-debutants-2",
        destination:
          "/cricket-news/top-5-partnerships-in-test-cricket-by-debutants",
        permanent: true,
      },
      {
        source:
          "/cricket-news/tri-series-2018-sri-lanka-vs-india-live-blog-scorecard-commentary",
        destination:
          "/cricket-news/tri-series2018-sri-lanka-vs-india-live-blog-scorecard-commentary",
        permanent: true,
      },
      {
        source:
          "/cricket-news/us-production-house-to-make-a-film-on-yuvraj-singh-2",
        destination:
          "/cricket-news/us-production-house-to-make-a-film-on-yuvraj-singh",
        permanent: true,
      },
      {
        source: "/cricket-news/varun-aaron-to-lead-jharkhand-in-ranji-trophy-2",
        destination:
          "/cricket-news/varun-aaron-to-lead-jharkhand-in-ranji-trophy",
        permanent: true,
      },
      {
        source:
          "/cricket-news/video-ms-dhoni-got-angry-over-yuvraj-singh-in-the-2011-wc-final-2",
        destination:
          "/cricket-news/video-ms-dhoni-got-angry-over-yuvraj-singh-in-the-2011-wc-final",
        permanent: true,
      },
      {
        source: "/cricket-news/video-ms-dhoni-is-bowling-to-virat-kohli-2",
        destination: "/cricket-news/video-ms-dhoni-is-bowling-to-virat-kohli",
        permanent: true,
      },
      {
        source:
          "/cricket-news/video-rahul-dravid-picked-up-2-wickets-in-one-over-2",
        destination:
          "/cricket-news/video-rahul-dravid-picked-up-2-wickets-in-one-over",
        permanent: true,
      },
      {
        source: "/cricket-news/video-when-ab-de-villiers-cheated-indian-team-2",
        destination:
          "/cricket-news/video-when-ab-de-villiers-cheated-indian-team",
        permanent: true,
      },
      {
        source:
          "/cricket-news/video-when-jadeja-ask-dhoni-for-his-car-to-take-his-girlfriend-for-a-long-drive-2",
        destination:
          "/cricket-news/video-when-jadeja-ask-dhoni-for-his-car-to-take-his-girlfriend-for-a-long-drive",
        permanent: true,
      },
      {
        source:
          "/news/virat-kohli-stands-out-in-a-tame-indian-run-chase-new-zealand-win-the-first-odi-by-24-runs-2",
        destination:
          "/cricket-news/virat-kohli-stands-out-in-a-tame-indian-run-chase-new-zealand-win-the-first-odi-by-24-runs",
        permanent: true,
      },
      {
        source: "/cricket-news/virender-sehwag-scores-17-runs-of-one-ball-2",
        destination: "/cricket-news/virender-sehwag-scores-17-runs-of-one-ball",
        permanent: true,
      },
      {
        source:
          "/cricket-news/what-would-happen-to-team-india-if-dhoni-quit-cricket-2",
        destination:
          "/cricket-news/what-would-happen-to-team-india-if-dhoni-quit-cricket",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-5-transfer-rumors-and-other-interesting-stories",
        destination:
          "/current-football-news/manchester-united-daily-digest-5-transfer-rumors-interesting-stories",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aa-vs-ctb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22-2",
        destination:
          "/fantasy-cricket-tips/aa-vs-ctb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aa-vs-nb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22-2",
        destination:
          "/fantasy-cricket-tips/aa-vs-nb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/act-vs-drx-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/act-vs-drx-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/afg-vs-ned-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-v-netherlands-in-qatar-2022-2",
        destination:
          "/fantasy-cricket-tips/afg-vs-ned-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-v-netherlands-in-qatar-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/afi-vs-may-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20-2",
        destination:
          "/fantasy-cricket-tips/afi-vs-may-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/afi-vs-mor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20-2",
        destination:
          "/fantasy-cricket-tips/afi-vs-mor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/af-vs-mal-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-malmo-2021-2",
        destination:
          "/fantasy-cricket-tips/af-vs-mal-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-malmo-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/agr-vs-acc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-club-championship-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/agr-vs-acc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-club-championship-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ajm-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022-2",
        destination:
          "/fantasy-cricket-tips/ajm-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/alz-vs-dif-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/alz-vs-dif-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amb-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/amb-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amb-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/amb-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amb-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers-2",
        destination:
          "/fantasy-cricket-tips/amb-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amd-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/amd-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amd-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/amd-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amd-vs-nfcc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/amd-vs-nfcc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/amd-vs-sll-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/amd-vs-sll-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aum-vs-mar-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-malta-2021-2",
        destination:
          "/fantasy-cricket-tips/aum-vs-mar-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-malta-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/australia-tour-of-india-2022-ind-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-2",
        destination:
          "/fantasy-cricket-tips/australia-tour-of-india-2022-ind-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/australia-tour-of-india-2022-ind-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-3",
        destination:
          "/fantasy-cricket-tips/australia-tour-of-india-2022-ind-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ashes-2021-22-3",
        destination:
          "/fantasy-cricket-tips/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ashes-2021-22-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ashes-2021-22-4",
        destination:
          "/fantasy-cricket-tips/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ashes-2021-22-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ashes-2021-22-5",
        destination:
          "/fantasy-cricket-tips/aus-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ashes-2021-22-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022-2",
        destination:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022-3",
        destination:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022-4",
        destination:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022-5",
        destination:
          "/fantasy-cricket-tips/aus-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-australia-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-en-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-ashes-2022-3",
        destination:
          "/fantasy-cricket-tips/au-w-vs-en-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-ashes-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-en-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-ashes-2022-4",
        destination:
          "/fantasy-cricket-tips/au-w-vs-en-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-ashes-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-en-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-ashes-2022-5",
        destination:
          "/fantasy-cricket-tips/au-w-vs-en-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-ashes-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021-2",
        destination:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021-3",
        destination:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021-4",
        destination:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021-5",
        destination:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021-6",
        destination:
          "/fantasy-cricket-tips/au-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-australia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/au-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-icc-womens-world-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/au-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-icc-womens-world-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ave-vs-kgs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/ave-vs-kgs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-2xi-vs-kp-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20-2",
        destination:
          "/fantasy-cricket-tips/bal-2xi-vs-kp-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-2xi-vs-nor-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20-2",
        destination:
          "/fantasy-cricket-tips/bal-2xi-vs-nor-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-vs-cep-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/bal-vs-cep-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-vs-khp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021-2",
        destination:
          "/fantasy-cricket-tips/bal-vs-khp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021-2",
        destination:
          "/fantasy-cricket-tips/bal-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/bal-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/bal-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bal-vs-sop-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/bal-vs-sop-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022-2",
        destination:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022-3",
        destination:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022-4",
        destination:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022-5",
        destination:
          "/fantasy-cricket-tips/ban-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-bangladesh-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021-2",
        destination:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021-3",
        destination:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021-4",
        destination:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021-5",
        destination:
          "/fantasy-cricket-tips/ban-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021-2",
        destination:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021-3",
        destination:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021-4",
        destination:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021-5",
        destination:
          "/fantasy-cricket-tips/ban-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021-2",
        destination:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021-3",
        destination:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021-4",
        destination:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021-5",
        destination:
          "/fantasy-cricket-tips/ban-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-bangladesh-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/baw-vs-vh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-nature-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/baw-vs-vh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-nature-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bb-vs-dd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bb-vs-dd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bb-vs-gmy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20-2",
        destination:
          "/fantasy-cricket-tips/bb-vs-gmy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bb-vs-gmy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20-3",
        destination:
          "/fantasy-cricket-tips/bb-vs-gmy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bb-vs-kw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bb-vs-kw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bb-w-vs-ht-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-maharaja-t20-trophy-2",
        destination:
          "/fantasy-cricket-tips/bb-w-vs-ht-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-maharaja-t20-trophy",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bcp-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-3",
        destination:
          "/fantasy-cricket-tips/bcp-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bel-vs-ned-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/bel-vs-ned-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bel-vs-sco-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10-2",
        destination:
          "/fantasy-cricket-tips/bel-vs-sco-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bel-vs-spa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/bel-vs-spa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ben-vs-kar-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-syed-mushtaq-ali-trophy-2021-2",
        destination:
          "/fantasy-cricket-tips/ben-vs-kar-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-syed-mushtaq-ali-trophy-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bg-vs-kab-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sharjah-cbfs-t20-2",
        destination:
          "/fantasy-cricket-tips/bg-vs-kab-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sharjah-cbfs-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-3",
        destination:
          "/fantasy-cricket-tips/bhb-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/bhb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-mti-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-mti-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-mti-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-mti-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bhb-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/bhb-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bh-w-vs-as-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-big-bash-league-2021-2",
        destination:
          "/fantasy-cricket-tips/bh-w-vs-as-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-big-bash-league-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/blb-vs-cp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/blb-vs-cp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bld-vs-ccl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/bld-vs-ccl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/news/bld-vs-sck-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/bld-vs-sck-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bld-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/bld-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bld-vs-spk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/bld-vs-spk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bld-vs-spk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-3",
        destination:
          "/fantasy-cricket-tips/bld-vs-spk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bok-vs-sin-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/bok-vs-sin-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bos-vs-sg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shpageeza-cricket-league-t20-2",
        destination:
          "/fantasy-cricket-tips/bos-vs-sg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shpageeza-cricket-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/brb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/brb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/brb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-3",
        destination:
          "/fantasy-cricket-tips/brb-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/brb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/brb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/brb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/brb-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/brb-vs-mti-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/brb-vs-mti-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/brb-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/brb-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bre-vs-alz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-3",
        destination:
          "/fantasy-cricket-tips/bre-vs-alz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bre-vs-bri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        destination:
          "/fantasy-cricket-tips/bre-vs-alz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bre-vs-bri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/bre-vs-alz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bri-vs-gri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/bri-vs-gri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/br-vs-tkr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-6ixty-2",
        destination:
          "/fantasy-cricket-tips/br-vs-tkr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-6ixty",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bs-vs-ple-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022-2",
        destination:
          "/fantasy-cricket-tips/bs-vs-ple-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bt-vs-cb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/bt-vs-cb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bt-vs-tad-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/bt-vs-tad-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/buk-vs-kab-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sharjah-cbfs-t20-2",
        destination:
          "/fantasy-cricket-tips/buk-vs-kab-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sharjah-cbfs-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/bul-vs-lio-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/bul-vs-lio-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/car-vs-clj-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/car-vs-clj-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cch-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/cch-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cch-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-3",
        destination:
          "/fantasy-cricket-tips/cch-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cch-vs-kht-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/cch-vs-kht-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cch-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/cch-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cch-vs-syl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/cch-vs-syl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ccl-vs-lbg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/ccl-vs-lbg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ccl-vs-lbg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-3",
        destination:
          "/fantasy-cricket-tips/ccl-vs-lbg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ccl-vs-spk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/ccl-vs-spk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cc-vs-nw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/cc-vs-nw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cep-2xi-vs-sin-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20-2",
        destination:
          "/fantasy-cricket-tips/cep-2xi-vs-sin-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cep-vs-khp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/cep-vs-khp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cep-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/cep-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cep-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021-2",
        destination:
          "/fantasy-cricket-tips/cep-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cep-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/cep-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cep-vs-sop-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/cep-vs-sop-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ces-vs-amd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/ces-vs-amd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ces-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/ces-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ces-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/ces-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ces-vs-nfcc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/ces-vs-nfcc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cov-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/cov-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cov-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/cov-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cpl-2021-guy-vs-skn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-2",
        destination:
          "/fantasy-cricket-tips/cpl-2021-guy-vs-skn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cpl-2021-slk-vs-skn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-2",
        destination:
          "/fantasy-cricket-tips/cpl-2021-slk-vs-skn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cpl-2021-tkr-vs-slk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-2",
        destination:
          "/fantasy-cricket-tips/cpl-2021-tkr-vs-slk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cs-vs-ns-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021-2",
        destination:
          "/fantasy-cricket-tips/cs-vs-ns-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cs-vs-tw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021-2",
        destination:
          "/fantasy-cricket-tips/cs-vs-tw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cs-vs-wf-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22-2",
        destination:
          "/fantasy-cricket-tips/cs-vs-wf-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ctb-vs-cs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22-2",
        destination:
          "/fantasy-cricket-tips/ctb-vs-cs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ctb-vs-wf-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-super-smash-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/ctb-vs-wf-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-super-smash-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ctl-vs-grd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain-2",
        destination:
          "/fantasy-cricket-tips/ctl-vs-grd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ctl-vs-mal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain-2",
        destination:
          "/fantasy-cricket-tips/ctl-vs-mal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cym-vs-ces-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/cym-vs-ces-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cym-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/cym-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cym-vs-sll-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/cym-vs-sll-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dat-vs-ggi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021-2",
        destination:
          "/fantasy-cricket-tips/dat-vs-ggi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dd-vs-kb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/dd-vs-kb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dd-vs-kc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/dd-vs-kc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dd-vs-kh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/dd-vs-kh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dd-vs-kh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/dd-vs-kh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dek-vs-gek-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021-2",
        destination:
          "/fantasy-cricket-tips/dek-vs-gek-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dek-vs-gek-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021-3",
        destination:
          "/fantasy-cricket-tips/dek-vs-gek-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dg-vs-bt-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/dg-vs-bt-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dg-vs-db-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/dg-vs-db-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dg-vs-db-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-3",
        destination:
          "/fantasy-cricket-tips/dg-vs-db-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dha-vs-bok-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/dha-vs-bok-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dif-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/dif-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dmu-vs-set-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20-2",
        destination:
          "/fantasy-cricket-tips/dmu-vs-set-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dna-vs-pkc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-austria-2022-2",
        destination:
          "/fantasy-cricket-tips/dna-vs-pkc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-austria-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dpr-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/dpr-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dpr-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/dpr-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/dpr-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/dpr-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eag-vs-ave-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/eag-vs-ave-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eag-vs-tus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20-2",
        destination:
          "/fantasy-cricket-tips/eag-vs-tus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/emb-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022-2",
        destination:
          "/fantasy-cricket-tips/emb-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eme-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/eme-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eme-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers",
        destination:
          "/fantasy-cricket-tips/eme-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eme-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers-2",
        destination:
          "/fantasy-cricket-tips/eme-vs-pea-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/enc-vs-trc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021-2",
        destination:
          "/fantasy-cricket-tips/enc-vs-trc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2021-3",
        destination:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2021-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2021-4",
        destination:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2021-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2022-2",
        destination:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2022-3",
        destination:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2022-4",
        destination:
          "/fantasy-cricket-tips/eng-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-england-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-nz-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-england-2022-2",
        destination:
          "/fantasy-cricket-tips/eng-vs-nz-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-england-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-vs-nz-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-england-2022-3",
        destination:
          "/fantasy-cricket-tips/eng-vs-nz-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-england-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-xi-vs-bel-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/eng-xi-vs-bel-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-xi-vs-bel-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-3",
        destination:
          "/fantasy-cricket-tips/eng-xi-vs-bel-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/eng-xi-vs-ger-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/eng-xi-vs-ger-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021-2",
        destination:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021-3",
        destination:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021-4",
        destination:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021-5",
        destination:
          "/fantasy-cricket-tips/en-u19-vs-wi-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-under-19s-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021-2",
        destination:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021-3",
        destination:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021-4",
        destination:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021-5",
        destination:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021-6",
        destination:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021-7",
        destination:
          "/fantasy-cricket-tips/en-w-vs-nz-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-women-tour-of-england-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/en-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-england-2022-2",
        destination:
          "/fantasy-cricket-tips/en-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-england-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fal-w-vs-spi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-fairbreak-invitational-womens-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/fal-w-vs-spi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-fairbreak-invitational-womens-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fal-w-vs-tor-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-fairbreak-invitational-womens-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/fal-w-vs-tor-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-fairbreak-invitational-womens-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/far-vs-gek-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/far-vs-gek-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fba-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/fba-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fig-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/fig-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fig-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/fig-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fin-vs-den-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10-2",
        destination:
          "/fantasy-cricket-tips/fin-vs-den-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fin-vs-swe-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-sweden-tour-of-finland-2021-2",
        destination:
          "/fantasy-cricket-tips/fin-vs-swe-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-sweden-tour-of-finland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/for-vs-pf-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/for-vs-pf-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/for-vs-ume-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/for-vs-ume-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fuj-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d10-2021-2",
        destination:
          "/fantasy-cricket-tips/fuj-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/fuj-vs-sha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022-2",
        destination:
          "/fantasy-cricket-tips/fuj-vs-sha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gek-vs-aca-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021-2",
        destination:
          "/fantasy-cricket-tips/gek-vs-aca-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ger-vs-fra-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-germany-t20i-tri-series-2",
        destination:
          "/fantasy-cricket-tips/ger-vs-fra-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-germany-t20i-tri-series",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ger-vs-nor-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-germany-t20i-tri-series-2",
        destination:
          "/fantasy-cricket-tips/ger-vs-nor-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-germany-t20i-tri-series",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gg-vs-ss-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/gg-vs-ss-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gib-vs-bul-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-valletta-cup-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/gib-vs-bul-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-valletta-cup-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gib-vs-mal-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-portugal-t20i-tri-series-2",
        destination:
          "/fantasy-cricket-tips/gib-vs-mal-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-portugal-t20i-tri-series",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gjg-vs-bhk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-legends-league-t20-2",
        destination:
          "/fantasy-cricket-tips/gjg-vs-bhk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-legends-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gla-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/gla-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gla-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-3",
        destination:
          "/fantasy-cricket-tips/gla-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gla-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/gla-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gmy-vs-mw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20-2",
        destination:
          "/fantasy-cricket-tips/gmy-vs-mw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gsy-vs-jer-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-jersey-tour-of-guernsey-2022-2",
        destination:
          "/fantasy-cricket-tips/gsy-vs-jer-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-jersey-tour-of-guernsey-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/gt-vs-rr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ipl-2022-2",
        destination:
          "/fantasy-cricket-tips/gt-vs-rr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ipl-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/guy-vs-br-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-hero-cpl-2022-2",
        destination:
          "/fantasy-cricket-tips/guy-vs-br-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-hero-cpl-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/guy-vs-jam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-hero-cpl-2022-2",
        destination:
          "/fantasy-cricket-tips/guy-vs-jam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-hero-cpl-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/hbsc-vs-far-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/hbsc-vs-far-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/hbsc-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/hbsc-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/hea-vs-six-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22-3",
        destination:
          "/fantasy-cricket-tips/hea-vs-six-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/hun-vs-por-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/hun-vs-por-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/icab-vs-rcd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-dresden-2",
        destination:
          "/fantasy-cricket-tips/icab-vs-rcd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-dresden",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ic-vs-bhk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-legends-league-t20-2",
        destination:
          "/fantasy-cricket-tips/ic-vs-bhk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-legends-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india-2",
        destination:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india-3",
        destination:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india-4",
        destination:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india-5",
        destination:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india-6",
        destination:
          "/fantasy-cricket-tips/in-a-vs-nz-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-new-zealand-a-tour-of-india",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/inb-vs-ams-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022-2",
        destination:
          "/fantasy-cricket-tips/inb-vs-ams-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/inb-vs-plo-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022-2",
        destination:
          "/fantasy-cricket-tips/inb-vs-plo-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/inb-vs-zas-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/inb-vs-zas-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-a-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-u19-triangular-one-day-series-2021-2",
        destination:
          "/fantasy-cricket-tips/ind-a-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-u19-triangular-one-day-series-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-b-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-u19-triangular-one-day-series-2021-2",
        destination:
          "/fantasy-cricket-tips/ind-b-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-u19-triangular-one-day-series-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/india-vs-pakistan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/india-vs-pakistan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-india-2021-2",
        destination:
          "/fantasy-cricket-tips/ind-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-india-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/ind-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022-2",
        destination:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022-3",
        destination:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022-4",
        destination:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022-5",
        destination:
          "/fantasy-cricket-tips/ind-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022-2",
        destination:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022-3",
        destination:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022-4",
        destination:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022-5",
        destination:
          "/fantasy-cricket-tips/ind-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022-2",
        destination:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022-3",
        destination:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022-4",
        destination:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022-5",
        destination:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022-6",
        destination:
          "/fantasy-cricket-tips/ind-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-india-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ipl-2021-dc-vs-csk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-2",
        destination:
          "/fantasy-cricket-tips/ipl-2021-dc-vs-csk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ipl-2021-kkr-vs-dc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-2",
        destination:
          "/fantasy-cricket-tips/ipl-2021-kkr-vs-dc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-ireland-2022-2",
        destination:
          "/fantasy-cricket-tips/ire-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-ireland-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-ireland-2022-2",
        destination:
          "/fantasy-cricket-tips/ire-vs-nz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-new-zealand-tour-of-ireland-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-sa-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-south-africa-tour-of-ireland-2021-2",
        destination:
          "/fantasy-cricket-tips/ire-vs-sa-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-south-africa-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-sa-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-ireland-2021-2",
        destination:
          "/fantasy-cricket-tips/ire-vs-sa-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021-2",
        destination:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021-3",
        destination:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021-4",
        destination:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021-5",
        destination:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021-6",
        destination:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021-2",
        destination:
          "/fantasy-cricket-tips/ire-vs-zim-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-ireland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ire-xi-vs-spa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10-2",
        destination:
          "/fantasy-cricket-tips/ire-xi-vs-spa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/irr-vs-tgs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-nature-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/irr-vs-tgs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-nature-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022-2",
        destination:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022-3",
        destination:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022-4",
        destination:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022-5",
        destination:
          "/fantasy-cricket-tips/ir-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-ireland-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ita-vs-czr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/ita-vs-czr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/jam-vs-bok-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/jam-vs-bok-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/jam-vs-skn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-6ixty-2",
        destination:
          "/fantasy-cricket-tips/jam-vs-skn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-6ixty",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kah-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/kah-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kah-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/kah-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kdc-vs-prc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021-2",
        destination:
          "/fantasy-cricket-tips/kdc-vs-prc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ken-vs-nep-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-nepal-tour-of-kenya-3rd-t20i-2",
        destination:
          "/fantasy-cricket-tips/ken-vs-nep-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-nepal-tour-of-kenya-3rd-t20i",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ken-vs-nig-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-icc-t20-world-cup-africa-qualifier-2021-2",
        destination:
          "/fantasy-cricket-tips/ken-vs-nig-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-icc-t20-world-cup-africa-qualifier-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/khp-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021-2",
        destination:
          "/fantasy-cricket-tips/khp-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/khp-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/khp-vs-nor-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/khp-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/khp-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kht-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/kht-vs-cov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kht-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/kht-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kht-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/kht-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kht-vs-syl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/kht-vs-syl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kin-xi-vs-ven-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-italy-super-series-2021-2",
        destination:
          "/fantasy-cricket-tips/kin-xi-vs-ven-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-italy-super-series-2021",
        permanent: true,
      },
      {
        source:
          "/news/kls-vs-tw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021-2",
        destination:
          "/fantasy-cricket-tips/kls-vs-tw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kp-2xi-vs-sp-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20-2",
        destination:
          "/fantasy-cricket-tips/kp-2xi-vs-sp-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ksa-vs-for-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021-2",
        destination:
          "/fantasy-cricket-tips/ksa-vs-for-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ksa-vs-for-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021-3",
        destination:
          "/fantasy-cricket-tips/ksa-vs-for-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-greece-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/kw-vs-kb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/kw-vs-kb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-bengal-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lah-vs-isl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022-2",
        destination:
          "/fantasy-cricket-tips/lah-vs-isl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lah-vs-lio-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-global-t20-namibia-2",
        destination:
          "/fantasy-cricket-tips/lah-vs-lio-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-global-t20-namibia",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lah-vs-re-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-lahore-qalandars-vs-richelieu-eagles-one-day-2",
        destination:
          "/fantasy-cricket-tips/lah-vs-re-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-lahore-qalandars-vs-richelieu-eagles-one-day",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lbg-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/lbg-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lio-vs-pan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20-2",
        destination:
          "/fantasy-cricket-tips/lio-vs-pan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lio-vs-re-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-global-t20-namibia-2",
        destination:
          "/fantasy-cricket-tips/lio-vs-re-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-global-t20-namibia",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lio-vs-tig-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20-2",
        destination:
          "/fantasy-cricket-tips/lio-vs-tig-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/liz-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/liz-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lns-vs-mnr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-hundred-2",
        destination:
          "/fantasy-cricket-tips/lns-vs-mnr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-hundred",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lsg-vs-rcb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ipl-2022-2",
        destination:
          "/fantasy-cricket-tips/lsg-vs-rcb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ipl-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lsh-vs-bgr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-vincy-premier-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/lsh-vs-bgr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-vincy-premier-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/lux-vs-fra-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10-2",
        destination:
          "/fantasy-cricket-tips/lux-vs-fra-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mal-vs-bel-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-belgium-tour-of-malta-2021-2",
        destination:
          "/fantasy-cricket-tips/mal-vs-bel-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-belgium-tour-of-malta-2021",
        permanent: true,
      },
      {
        source:
          "/news/mal-vs-bel-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-belgium-tour-of-malta-2021-3",
        destination:
          "/fantasy-cricket-tips/mal-vs-bel-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-belgium-tour-of-malta-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mal-vs-ctl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain-2",
        destination:
          "/fantasy-cricket-tips/mal-vs-ctl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mal-vs-grd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain-2",
        destination:
          "/fantasy-cricket-tips/mal-vs-grd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ect-t10-spain",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mal-vs-lca-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-portugal-2",
        destination:
          "/fantasy-cricket-tips/mal-vs-lca-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fancode-ecs-t10-portugal",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mal-vs-rom-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-valletta-cup-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/mal-vs-rom-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-valletta-cup-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mar-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/mar-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mar-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-3",
        destination:
          "/fantasy-cricket-tips/mar-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mau-vs-int-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021-2",
        destination:
          "/fantasy-cricket-tips/mau-vs-int-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mgm-vs-tvs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sharjah-cbfs-t20-2",
        destination:
          "/fantasy-cricket-tips/mgm-vs-tvs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sharjah-cbfs-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mit-vs-uns-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-jamaica-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/mit-vs-uns-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-jamaica-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mr-w-vs-as-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-big-bash-league-2021-2",
        destination:
          "/fantasy-cricket-tips/mr-w-vs-as-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-big-bash-league-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/msf-vs-oex-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/msf-vs-oex-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/msf-vs-oex-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-3",
        destination:
          "/fantasy-cricket-tips/msf-vs-oex-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/msk-vs-cag-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/msk-vs-cag-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mtc-vs-acc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-club-championship-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/mtc-vs-acc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-club-championship-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mtc-vs-bkk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-club-championship-t20-2022-2",
        destination:
          "/fantasy-cricket-tips/mtc-vs-bkk-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-club-championship-t20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mti-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/mti-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mti-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/mti-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mti-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/mti-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mti-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/mti-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mti-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/mti-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mti-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/mti-vs-sbc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mul-vs-lah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022-2",
        destination:
          "/fantasy-cricket-tips/mul-vs-lah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mul-vs-lah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022-3",
        destination:
          "/fantasy-cricket-tips/mul-vs-lah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/mw-vs-ht-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20-2",
        destination:
          "/fantasy-cricket-tips/mw-vs-ht-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-shriram-maharaja-trophy-ksca-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nac-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/nac-vs-hud-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-vs-uga-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-tour-of-namibia-2022-2",
        destination:
          "/fantasy-cricket-tips/nam-vs-uga-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-tour-of-namibia-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-vs-uga-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-tour-of-namibia-2022-3",
        destination:
          "/fantasy-cricket-tips/nam-vs-uga-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-tour-of-namibia-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-vs-zim-et-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-emerging-tour-of-namibia-2021-2",
        destination:
          "/fantasy-cricket-tips/nam-vs-zim-et-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-emerging-tour-of-namibia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-vs-zim-et-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-emerging-tour-of-namibia-2021-3",
        destination:
          "/fantasy-cricket-tips/nam-vs-zim-et-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-emerging-tour-of-namibia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-vs-zim-et-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-emerging-tour-of-namibia-2021-4",
        destination:
          "/fantasy-cricket-tips/nam-vs-zim-et-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-zimbabwe-emerging-tour-of-namibia-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-womens-t20-tri-series-2022-2",
        destination:
          "/fantasy-cricket-tips/nam-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-womens-t20-tri-series-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-womens-t20-tri-series-2022-2",
        destination:
          "/fantasy-cricket-tips/nam-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-womens-t20-tri-series-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nam-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-womens-t20-tri-series-2022-3",
        destination:
          "/fantasy-cricket-tips/nam-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-womens-t20-tri-series-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nb-vs-ctb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-super-smash-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/nb-vs-ctb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-super-smash-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nct-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/nct-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nct-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-3",
        destination:
          "/fantasy-cricket-tips/nct-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nct-vs-ces-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/nct-vs-ces-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nd-vs-ov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22-2",
        destination:
          "/fantasy-cricket-tips/nd-vs-ov-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nd-vs-wf-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22-2",
        destination:
          "/fantasy-cricket-tips/nd-vs-wf-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-the-ford-trophy-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nd-w-vs-fb-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fairbreak-women-tour-of-netherlands-2",
        destination:
          "/fantasy-cricket-tips/nd-w-vs-fb-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fairbreak-women-tour-of-netherlands",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nd-w-vs-fb-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fairbreak-women-tour-of-netherlands-3",
        destination:
          "/fantasy-cricket-tips/nd-w-vs-fb-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fairbreak-women-tour-of-netherlands",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nd-w-vs-nam-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-women-tour-of-netherlands-2022-2",
        destination:
          "/fantasy-cricket-tips/nd-w-vs-nam-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-women-tour-of-netherlands-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-netherlands-2022-2",
        destination:
          "/fantasy-cricket-tips/ned-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-netherlands-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-netherlands-2022-3",
        destination:
          "/fantasy-cricket-tips/ned-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-netherlands-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-netherlands-2022-2",
        destination:
          "/fantasy-cricket-tips/ned-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-netherlands-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-netherlands-2022-3",
        destination:
          "/fantasy-cricket-tips/ned-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-netherlands-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-w-u19-vs-sco-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-scotland-women-under-19-tour-of-netherlands-2",
        destination:
          "/fantasy-cricket-tips/ned-w-u19-vs-sco-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-scotland-women-under-19-tour-of-netherlands",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-w-u19-vs-sco-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-scotland-women-under-19-tour-of-netherlands-3",
        destination:
          "/fantasy-cricket-tips/ned-w-u19-vs-sco-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-scotland-women-under-19-tour-of-netherlands",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-xi-vs-aut-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-3",
        destination:
          "/fantasy-cricket-tips/ned-xi-vs-aut-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-xi-vs-spa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/ned-xi-vs-spa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ned-xi-vs-swe-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10-2",
        destination:
          "/fantasy-cricket-tips/ned-xi-vs-swe-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-dream11-ecc-t10",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nep-vs-zim-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-a-tour-of-nepal-2022-2",
        destination:
          "/fantasy-cricket-tips/nep-vs-zim-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-a-tour-of-nepal-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nfcc-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/nfcc-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nfcc-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/nfcc-vs-cym-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nfcc-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/nfcc-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nfcc-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-3",
        destination:
          "/fantasy-cricket-tips/nfcc-vs-nct-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nfcc-vs-sll-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/nfcc-vs-sll-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nor-2xi-vs-sp-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20-2",
        destination:
          "/fantasy-cricket-tips/nor-2xi-vs-sp-2xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-cricket-associations-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nor-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/nor-vs-sin-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nor-vs-swe-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/nor-vs-swe-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022-2",
        destination:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022-3",
        destination:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022-4",
        destination:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022-5",
        destination:
          "/fantasy-cricket-tips/np-w-vs-ug-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-uganda-women-tour-of-nepal-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ns-vs-spe-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021-2",
        destination:
          "/fantasy-cricket-tips/ns-vs-spe-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nsw-w-vs-qun-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-australian-womens-odd-2",
        destination:
          "/fantasy-cricket-tips/nsw-w-vs-qun-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-australian-womens-odd",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nw-vs-blb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/nw-vs-blb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nw-vs-dg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/nw-vs-dg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nz-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-new-zealand-2022-2",
        destination:
          "/fantasy-cricket-tips/nz-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-new-zealand-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022-2",
        destination:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022-3",
        destination:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022-4",
        destination:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022-5",
        destination:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022-6",
        destination:
          "/fantasy-cricket-tips/nz-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-new-zealand-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/oex-vs-voc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/oex-vs-voc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/omn-vs-mum-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-mumbai-tour-of-oman-2021-2",
        destination:
          "/fantasy-cricket-tips/omn-vs-mum-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-mumbai-tour-of-oman-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/omn-vs-mum-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-mumbai-tour-of-oman-2021-3",
        destination:
          "/fantasy-cricket-tips/omn-vs-mum-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-mumbai-tour-of-oman-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/omn-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-oman-2021-2",
        destination:
          "/fantasy-cricket-tips/omn-vs-sl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-tour-of-oman-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ovi-w-vs-sob-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-hundred-women-2",
        destination:
          "/fantasy-cricket-tips/ovi-w-vs-sob-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-hundred-women",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022-2",
        destination:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022-3",
        destination:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022-4",
        destination:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022-5",
        destination:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022-6",
        destination:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022-7",
        destination:
          "/fantasy-cricket-tips/pak-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021-2",
        destination:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021-3",
        destination:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021-22-2",
        destination:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021-22-3",
        destination:
          "/fantasy-cricket-tips/pak-vs-wi-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-west-indies-tour-of-pakistan-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pan-vs-lio-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/pan-vs-lio-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pan-vs-sha-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/pan-vs-sha-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pan-vs-sha-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/pan-vs-sha-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pes-vs-isl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022-2",
        destination:
          "/fantasy-cricket-tips/pes-vs-isl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-pakistan-super-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pic-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/pic-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pic-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-3",
        destination:
          "/fantasy-cricket-tips/pic-vs-pnl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pic-vs-tw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/pic-vs-tw-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pk-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-women-tour-of-pakistan-2022-2",
        destination:
          "/fantasy-cricket-tips/pk-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-women-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pk-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-women-tour-of-pakistan-2022-3",
        destination:
          "/fantasy-cricket-tips/pk-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-women-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pk-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-women-tour-of-pakistan-2022-4",
        destination:
          "/fantasy-cricket-tips/pk-w-vs-sl-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-women-tour-of-pakistan-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pk-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-playing-11-dream11-team-pitch-report-and-injury-update-west-indies-women-tour-of-pakistan-2021-2",
        destination:
          "/fantasy-cricket-tips/pk-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-playing-11-dream11-team-pitch-report-and-injury-update-west-indies-women-tour-of-pakistan-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/plo-vs-ple-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022-2",
        destination:
          "/fantasy-cricket-tips/plo-vs-ple-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-bulgaria-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/plz-vs-pcc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-czech-republic-2022-2",
        destination:
          "/fantasy-cricket-tips/plz-vs-pcc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-czech-republic-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/png-vs-omn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-cwc-league-2-one-day-2",
        destination:
          "/fantasy-cricket-tips/png-vs-omn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-cwc-league-2-one-day",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/png-vs-sco-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-cwc-league-2-one-day-2",
        destination:
          "/fantasy-cricket-tips/png-vs-sco-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-cwc-league-2-one-day",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/por-vs-gib-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-portugal-t20i-tri-series-2",
        destination:
          "/fantasy-cricket-tips/por-vs-gib-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-portugal-t20i-tri-series",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/prc-vs-alc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021-2",
        destination:
          "/fantasy-cricket-tips/prc-vs-alc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/pr-vs-sal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-rotterdam-2022-2",
        destination:
          "/fantasy-cricket-tips/pr-vs-sal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-rotterdam-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ps-w-vs-as-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-big-bash-league-2021-2",
        destination:
          "/fantasy-cricket-tips/ps-w-vs-as-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-big-bash-league-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/qut-vs-amr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d10-2022-2",
        destination:
          "/fantasy-cricket-tips/qut-vs-amr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/qut-vs-dat-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021-2",
        destination:
          "/fantasy-cricket-tips/qut-vs-dat-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/qut-vs-ggi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021-2",
        destination:
          "/fantasy-cricket-tips/qut-vs-ggi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ran-vs-dha-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/ran-vs-dha-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ran-vs-dum-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/ran-vs-dum-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ran-vs-jam-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/ran-vs-jam-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-jharkhand-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/re-vs-lah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-global-t20-namibia-2",
        destination:
          "/fantasy-cricket-tips/re-vs-lah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-global-t20-namibia",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rot-vs-bri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/rot-vs-bri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/roy-vs-pan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20-2",
        destination:
          "/fantasy-cricket-tips/roy-vs-pan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/roy-vs-tus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20-2",
        destination:
          "/fantasy-cricket-tips/roy-vs-tus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rr-vs-rcb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ipl-2022-2",
        destination:
          "/fantasy-cricket-tips/rr-vs-rcb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ipl-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rtw-vs-csg-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-shriram-tnpl-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/rtw-vs-csg-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-shriram-tnpl-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rub-vs-amb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/rub-vs-amb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rub-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/rub-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rub-vs-sap-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/rub-vs-sap-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rub-vs-sap-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers-2",
        destination:
          "/fantasy-cricket-tips/rub-vs-sap-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rur-vs-dat-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021-2",
        destination:
          "/fantasy-cricket-tips/rur-vs-dat-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rur-vs-dat-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021-3",
        destination:
          "/fantasy-cricket-tips/rur-vs-dat-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/rur-vs-ggi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021-2",
        destination:
          "/fantasy-cricket-tips/rur-vs-ggi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-oman-d20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-a-vs-in-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-a-tour-of-south-africa-2021-2",
        destination:
          "/fantasy-cricket-tips/sa-a-vs-in-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-a-tour-of-south-africa-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-a-vs-in-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-a-tour-of-south-africa-2021-3",
        destination:
          "/fantasy-cricket-tips/sa-a-vs-in-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-a-tour-of-south-africa-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sae-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-zimbabwe-women-tour-of-south-africa-2",
        destination:
          "/fantasy-cricket-tips/sae-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-zimbabwe-women-tour-of-south-africa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sae-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-zimbabwe-women-tour-of-south-africa-3",
        destination:
          "/fantasy-cricket-tips/sae-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-zimbabwe-women-tour-of-south-africa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sae-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-zimbabwe-women-tour-of-south-africa-4",
        destination:
          "/fantasy-cricket-tips/sae-w-vs-zm-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-zimbabwe-women-tour-of-south-africa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sap-vs-amb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/sap-vs-amb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sap-vs-amb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers-2",
        destination:
          "/fantasy-cricket-tips/sap-vs-amb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-kca-womens-t20-challengers",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sap-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021-2",
        destination:
          "/fantasy-cricket-tips/sap-vs-eme-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kca-t20-pink-challenge-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sau-w-vs-vct-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-australian-womens-odd-2",
        destination:
          "/fantasy-cricket-tips/sau-w-vs-vct-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-australian-womens-odd",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022-2",
        destination:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022-3",
        destination:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022-4",
        destination:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022-5",
        destination:
          "/fantasy-cricket-tips/sa-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-south-africa-2021-22-3",
        destination:
          "/fantasy-cricket-tips/sa-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-south-africa-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-south-africa-2021-22-4",
        destination:
          "/fantasy-cricket-tips/sa-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-south-africa-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-south-africa-2021-22-5",
        destination:
          "/fantasy-cricket-tips/sa-vs-ind-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-tour-of-south-africa-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-women-tour-of-south-africa-2022-2",
        destination:
          "/fantasy-cricket-tips/sa-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-women-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-women-tour-of-south-africa-2022-3",
        destination:
          "/fantasy-cricket-tips/sa-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-women-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sa-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-women-tour-of-south-africa-2022-4",
        destination:
          "/fantasy-cricket-tips/sa-w-vs-wi-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-women-tour-of-south-africa-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sbc-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/sbc-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sbc-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/sbc-vs-brb-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-assam-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sbc-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/sbc-vs-dpr-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sbc-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20-2",
        destination:
          "/fantasy-cricket-tips/sbc-vs-kah-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-assam-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sck-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-3",
        destination:
          "/fantasy-cricket-tips/sck-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sco-vs-omn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-cwc-league-2-one-day-2",
        destination:
          "/fantasy-cricket-tips/sco-vs-omn-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-cwc-league-2-one-day",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sco-vs-six-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22-2",
        destination:
          "/fantasy-cricket-tips/sco-vs-six-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sco-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22-2",
        destination:
          "/fantasy-cricket-tips/sco-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sco-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-scotland-2021-2",
        destination:
          "/fantasy-cricket-tips/sco-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-scotland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sco-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-scotland-2021-3",
        destination:
          "/fantasy-cricket-tips/sco-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-scotland-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sc-w-vs-fb-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fairbreak-xi-tour-of-scotland-2",
        destination:
          "/fantasy-cricket-tips/sc-w-vs-fb-xi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-fairbreak-xi-tour-of-scotland",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sc-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-ireland-women-tour-of-scotland-1st-t20i-2",
        destination:
          "/fantasy-cricket-tips/sc-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-ireland-women-tour-of-scotland-1st-t20i",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sel-vs-joh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-sukan-malaysia-t20-2",
        destination:
          "/fantasy-cricket-tips/sel-vs-joh-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-sukan-malaysia-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sha-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022-2",
        destination:
          "/fantasy-cricket-tips/sha-vs-abd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d20-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sha-vs-bul-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/sha-vs-bul-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sha-vs-dub-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d10-2021-2",
        destination:
          "/fantasy-cricket-tips/sha-vs-dub-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-emirates-d10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sha-vs-tig-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/sha-vs-tig-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sh-vs-cs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021-2",
        destination:
          "/fantasy-cricket-tips/sh-vs-cs-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-mca-t10-bash-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sin-vs-bal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021-3",
        destination:
          "/fantasy-cricket-tips/sin-vs-bal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-national-t20-cup-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sin-vs-mal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-malaysia-tour-of-singapore-2022-2",
        destination:
          "/fantasy-cricket-tips/sin-vs-mal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-malaysia-tour-of-singapore-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sin-vs-mal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-malaysia-tour-of-singapore-2022-3",
        destination:
          "/fantasy-cricket-tips/sin-vs-mal-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-malaysia-tour-of-singapore-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sin-vs-sop-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup-2",
        destination:
          "/fantasy-cricket-tips/sin-vs-sop-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-national-t20-cup",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/six-vs-str-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22-2",
        destination:
          "/fantasy-cricket-tips/six-vs-str-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sla-vs-lsa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20-2",
        destination:
          "/fantasy-cricket-tips/sla-vs-lsa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/slgy-vs-slre-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-invitational-t20-league-2021-2",
        destination:
          "/fantasy-cricket-tips/slgy-vs-slre-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-sri-lanka-invitational-t20-league-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/slk-vs-jam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-hero-cpl-2022-2",
        destination:
          "/fantasy-cricket-tips/slk-vs-jam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-hero-cpl-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sll-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021-2",
        destination:
          "/fantasy-cricket-tips/sll-vs-bcp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-cyprus-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/slre-vs-slbl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-slc-invitational-t20-2",
        destination:
          "/fantasy-cricket-tips/slre-vs-slbl-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-slc-invitational-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sls-vs-bld-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/sls-vs-bld-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-under-19s-tour-of-sri-lanka-2021-2",
        destination:
          "/fantasy-cricket-tips/sl-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-under-19s-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-under-19s-tour-of-sri-lanka-2021-3",
        destination:
          "/fantasy-cricket-tips/sl-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-under-19s-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-under-19s-tour-of-sri-lanka-2021-4",
        destination:
          "/fantasy-cricket-tips/sl-u19-vs-bd-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-under-19s-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-3",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-4",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-5",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-6",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-7",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022-8",
        destination:
          "/fantasy-cricket-tips/sl-vs-aus-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-australia-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021-3",
        destination:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021-4",
        destination:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021-5",
        destination:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021-6",
        destination:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021-7",
        destination:
          "/fantasy-cricket-tips/sl-vs-ind-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-india-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-pak-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021-3",
        destination:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021-4",
        destination:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021-5",
        destination:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021-6",
        destination:
          "/fantasy-cricket-tips/sl-vs-sa-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-sri-lanka-2021-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-wi-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-west-indies-tour-of-sri-lanka-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-sri-lanka-2022-2",
        destination:
          "/fantasy-cricket-tips/sl-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-sri-lanka-2022-3",
        destination:
          "/fantasy-cricket-tips/sl-vs-zim-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-zimbabwe-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-sri-lanka-2022-2",
        destination:
          "/fantasy-cricket-tips/sl-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sl-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-sri-lanka-2022-3",
        destination:
          "/fantasy-cricket-tips/sl-w-vs-in-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-india-women-tour-of-sri-lanka-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sob-w-vs-ovi-w-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-the-hundred-womens-competition-2021-2",
        destination:
          "/fantasy-cricket-tips/sob-w-vs-ovi-w-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-the-hundred-womens-competition-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sob-w-vs-trt-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-hundred-women-2",
        destination:
          "/fantasy-cricket-tips/sob-w-vs-trt-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-hundred-women",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spa-vs-bel-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/spa-vs-bel-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecc-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spa-vs-int-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021-2",
        destination:
          "/fantasy-cricket-tips/spa-vs-int-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spa-vs-int-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021-3",
        destination:
          "/fantasy-cricket-tips/spa-vs-int-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spa-vs-mau-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021-2",
        destination:
          "/fantasy-cricket-tips/spa-vs-mau-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-spain-lalfas-del-pi-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spb-vs-dve-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-vincy-premier-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/spb-vs-dve-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-vincy-premier-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spc-vs-quv-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-capelle-2021-2",
        destination:
          "/fantasy-cricket-tips/spc-vs-quv-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-capelle-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/spk-vs-sck-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/spk-vs-sck-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/news/spk-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022-2",
        destination:
          "/fantasy-cricket-tips/spk-vs-sls-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-trinidad-t10-blast-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sri-lanka-vs-afghanistan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/sri-lanka-vs-afghanistan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sri-lanka-vs-pakistan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022-2",
        destination:
          "/fantasy-cricket-tips/sri-lanka-vs-pakistan-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-asia-cup-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sro-vs-ski-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-jamaica-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/sro-vs-ski-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-jamaica-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/ss-vs-cp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/ss-vs-cp-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-dream11-spice-isle-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sta-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/sta-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sto-vs-ume-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021-2",
        destination:
          "/fantasy-cricket-tips/sto-vs-ume-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-ecs-t10-sweden-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/str-vs-hur-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22-2",
        destination:
          "/fantasy-cricket-tips/str-vs-hur-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bbl-2021-22",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/svs-vs-cht-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20-2",
        destination:
          "/fantasy-cricket-tips/svs-vs-cht-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-minor-league-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/sw-vs-tv-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/sw-vs-tv-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-womens-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/syl-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/syl-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/syl-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/fantasy-cricket-tips/syl-vs-mgd-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tad-vs-bt-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021-2",
        destination:
          "/fantasy-cricket-tips/tad-vs-bt-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-abu-dhabi-t10-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tar-vs-cag-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-gibraltar-2022-2",
        destination:
          "/fantasy-cricket-tips/tar-vs-cag-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-gibraltar-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tig-vs-pan-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/tig-vs-pan-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tig-vs-roy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20-2",
        destination:
          "/fantasy-cricket-tips/tig-vs-roy-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-byjus-kca-president-cup-t20",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tig-vs-tus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/tig-vs-tus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tit-vs-dol-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-csa-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/tit-vs-dol-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-csa-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tit-vs-fig-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/tit-vs-fig-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tit-vs-gla-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/tit-vs-gla-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tit-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/tit-vs-sta-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tit-vs-war-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/tit-vs-war-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tkr-w-vs-br-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-6ixty-womens-2",
        destination:
          "/fantasy-cricket-tips/tkr-w-vs-br-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-the-6ixty-womens",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/trc-vs-mtc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021-2",
        destination:
          "/fantasy-cricket-tips/trc-vs-mtc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/trc-vs-mtc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021-3",
        destination:
          "/fantasy-cricket-tips/trc-vs-mtc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/trc-vs-mtc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021-4",
        destination:
          "/fantasy-cricket-tips/trc-vs-mtc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-kerala-club-championship-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tus-vs-lio-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-2",
        destination:
          "/fantasy-cricket-tips/tus-vs-lio-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tus-vs-pan-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021-3",
        destination:
          "/fantasy-cricket-tips/tus-vs-pan-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-byjus-pondicherry-t20-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tw-vs-bri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-3",
        destination:
          "/fantasy-cricket-tips/tw-vs-bri-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/tw-vs-drx-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/tw-vs-drx-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/uae-w-vs-hk-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-hong-kong-women-tour-of-uae-2022-2",
        destination:
          "/fantasy-cricket-tips/uae-w-vs-hk-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-hong-kong-women-tour-of-uae-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/uae-w-vs-hk-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-hong-kong-women-tour-of-uae-2022-3",
        destination:
          "/fantasy-cricket-tips/uae-w-vs-hk-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-hong-kong-women-tour-of-uae-2022",
        permanent: true,
      },
      {
        source:
          "/news/uni-vs-clj-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-romania-2022",
        destination:
          "/fantasy-cricket-tips/uni-vs-clj-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-romania-2022-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/usa-vs-ire-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ireland-tour-of-usa-2021-2",
        destination:
          "/fantasy-cricket-tips/usa-vs-ire-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ireland-tour-of-usa-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa-2",
        destination:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa-3",
        destination:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa-4",
        destination:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usausa-w-u19-vs-wi-w-u19-dream11-prediction-fa",
        destination:
          "/fantasy-cricket-tips/usa-w-u19-vs-wi-w-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-west-indies-under-19-women-tour-of-usa",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/vcc-vs-act-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-austria-2022-2",
        destination:
          "/fantasy-cricket-tips/vcc-vs-act-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-austria-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/vcc-vs-kam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-rotterdam-2022-2",
        destination:
          "/fantasy-cricket-tips/vcc-vs-kam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-rotterdam-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/voc-vs-alz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022-2",
        destination:
          "/fantasy-cricket-tips/voc-vs-alz-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-european-cricket-league-t10-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/vvv-vs-spc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-capelle-2021-2",
        destination:
          "/fantasy-cricket-tips/vvv-vs-spc-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ecs-t10-capelle-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/war-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/war-vs-cha-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/war-vs-gla-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/war-vs-gla-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/war-vs-gla-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-3",
        destination:
          "/fantasy-cricket-tips/war-vs-gla-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/war-vs-tit-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022-2",
        destination:
          "/fantasy-cricket-tips/war-vs-tit-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-byjus-baroda-t20-challenge-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wa-w-vs-am-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-australian-womens-odd-2",
        destination:
          "/fantasy-cricket-tips/wa-w-vs-am-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-australian-womens-odd",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-a-vs-bn-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-bangladesh-a-tour-of-west-indies-2",
        destination:
          "/fantasy-cricket-tips/wi-a-vs-bn-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-bangladesh-a-tour-of-west-indies",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-a-vs-bn-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-bangladesh-a-tour-of-west-indies-3",
        destination:
          "/fantasy-cricket-tips/wi-a-vs-bn-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-bangladesh-a-tour-of-west-indies",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-a-vs-bn-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-bangladesh-a-tour-of-west-indies-4",
        destination:
          "/fantasy-cricket-tips/wi-a-vs-bn-a-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-injury-update-bangladesh-a-tour-of-west-indies",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-u19-vs-sa-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-under-19s-tour-of-west-indies-2021-2",
        destination:
          "/fantasy-cricket-tips/wi-u19-vs-sa-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-under-19s-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-u19-vs-sa-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-under-19s-tour-of-west-indies-2021-3",
        destination:
          "/fantasy-cricket-tips/wi-u19-vs-sa-u19-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-under-19s-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-west-indies-2021-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-west-indies-2021-3",
        destination:
          "/fantasy-cricket-tips/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-west-indies-2021-4",
        destination:
          "/fantasy-cricket-tips/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-australia-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022-3",
        destination:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022-5",
        destination:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022-6",
        destination:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/news/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022-4",
        destination:
          "/fantasy-cricket-tips/wi-vs-ban-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022-3",
        destination:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022-3",
        destination:
          "/fantasy-cricket-tips/wi-vs-eng-dream11-prediction-fantasy-cricket-tips-dream-11-team-playing-xi-pitch-report-and-injury-update-england-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-ire-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ireland-tour-of-west-indies-2022-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-ire-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ireland-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-ire-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ireland-tour-of-west-indies-2022-3",
        destination:
          "/fantasy-cricket-tips/wi-vs-ire-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-ireland-tour-of-west-indies-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-pak-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-pakistan-tour-of-west-indies-2021-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-pak-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-pakistan-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-pak-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-west-indies-2021-2",
        destination:
          "/fantasy-cricket-tips/wi-vs-pak-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-vs-pak-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-west-indies-2021-3",
        destination:
          "/fantasy-cricket-tips/wi-vs-pak-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-pakistan-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-2",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-3",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-4",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-5",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-6",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-7",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021-8",
        destination:
          "/fantasy-cricket-tips/wi-w-vs-sa-w-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-south-africa-women-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022-2",
        destination:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022-3",
        destination:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022-4",
        destination:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022-5",
        destination:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022-6",
        destination:
          "/fantasy-cricket-tips/zim-vs-afg-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-afghanistan-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021-2",
        destination:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021-3",
        destination:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021-2",
        destination:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021-3",
        destination:
          "/fantasy-cricket-tips/zim-vs-ban-dream11-prediction-fantasy-cricket-tips-playing-xi-pitch-report-and-injury-update-bangladesh-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022-2",
        destination:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022-3",
        destination:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022-4",
        destination:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022-5",
        destination:
          "/fantasy-cricket-tips/zim-vs-nam-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-namibia-tour-of-zimbabwe-2022",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zm-w-vs-bd-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-bangladesh-women-tour-of-zimbabwe-2021-2",
        destination:
          "/fantasy-cricket-tips/zm-w-vs-bd-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-bangladesh-women-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zm-w-vs-bd-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-bangladesh-women-tour-of-zimbabwe-2021-3",
        destination:
          "/fantasy-cricket-tips/zm-w-vs-bd-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-bangladesh-women-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zm-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-ireland-women-tour-of-zimbabwe-2021-2",
        destination:
          "/fantasy-cricket-tips/zm-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-ireland-women-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zm-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-ireland-women-tour-of-zimbabwe-2021-3",
        destination:
          "/fantasy-cricket-tips/zm-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-ireland-women-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zm-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-ireland-women-tour-of-zimbabwe-2021-4",
        destination:
          "/fantasy-cricket-tips/zm-w-vs-ir-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-ireland-women-tour-of-zimbabwe-2021",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/zm-w-vs-tl-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-thailand-women-tour-of-zimbabwe-2021-3",
        destination:
          "/fantasy-cricket-tips/zm-w-vs-tl-w-dream11-prediction-fantasy-cricket-tips-playing-xi-dream11-team-pitch-report-and-injury-update-thailand-women-tour-of-zimbabwe-2021-2",
        permanent: true,
      },
      {
        source:
          "/football/10-talking-points-from-the-premier-league-this-weekend-2",
        destination:
          "/football/10-talking-points-from-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source:
          "/football/10-talking-points-from-the-premier-league-this-weekend-3",
        destination:
          "/football/10-talking-points-from-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source:
          "/football/10-talking-points-from-the-premier-league-this-weekend-4",
        destination:
          "/football/10-talking-points-from-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source:
          "/football/10-talking-points-from-the-premier-league-this-weekend-5",
        destination:
          "/football/10-talking-points-from-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source:
          "/current-football-news/10-talking-points-from-matchday-3-of-the-barclays-premier-league",
        destination:
          "/football/10-talking-points-matchday-3-barclays-premier-league",
        permanent: true,
      },
      {
        source: "/football/10-talking-points-premier-league-weekend-2",
        destination: "/football/10-talking-points-premier-league-weekend",
        permanent: true,
      },
      {
        source: "/football/10-talking-points-premier-league-weekend-3",
        destination: "/football/10-talking-points-premier-league-weekend",
        permanent: true,
      },
      {
        source: "/football/10-talking-points-premier-league-weekend-4",
        destination: "/football/10-talking-points-premier-league-weekend",
        permanent: true,
      },
      {
        source: "/football/10-things-look-premier-league-weekend-2",
        destination: "/football/10-things-look-premier-league-weekend",
        permanent: true,
      },
      {
        source: "/football/10-things-look-premier-league-weekend-3",
        destination: "/football/10-things-look-premier-league-weekend",
        permanent: true,
      },
      {
        source: "/football/10-things-look-premier-league-weekend-4",
        destination: "/football/10-things-look-premier-league-weekend",
        permanent: true,
      },
      {
        source: "/football/10-things-to-look-forward-to-epl-gw29",
        destination:
          "/football/10-things-to-look-forward-to-in-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source:
          "/football/10-things-to-look-forward-to-in-the-premier-league-this-weekend-2",
        destination:
          "/football/10-things-to-look-forward-to-in-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source:
          "/football/10-things-to-look-forward-to-in-the-premier-league-this-weekend-3",
        destination:
          "/football/10-things-to-look-forward-to-in-the-premier-league-this-weekend",
        permanent: true,
      },
      {
        source: "/football/aizawl-beat-gokulam-in-i-league-clash-2",
        destination: "/football/aizawl-beat-gokulam-in-i-league-clash",
        permanent: true,
      },
      {
        source: "/football/ajax-win-dutch-classic-against-feyenoord-2",
        destination: "/football/ajax-win-dutch-classic-against-feyenoord",
        permanent: true,
      },
      {
        source: "/football/bayern-defend-top-spot-german-bundesliga-2",
        destination: "/football/bayern-defend-top-spot-german-bundesliga",
        permanent: true,
      },
      {
        source: "/football/brazils-thiago-silva-itching-for-world-cup-chance-2",
        destination:
          "/football/brazils-thiago-silva-itching-for-world-cup-chance",
        permanent: true,
      },
      {
        source:
          "/football/current-barcelona-team-best-time-ex-defender-milito-2",
        destination:
          "/football/current-barcelona-team-best-time-ex-defender-milito",
        permanent: true,
      },
      {
        source: "/football/dimitri-payet-on-verge-of-signing-new-contract-2",
        destination: "/football/dimitri-payet-on-verge-of-signing-new-contract",
        permanent: true,
      },
      {
        source: "/football/frankfurt-down-hannover-4-1-in-german-bundesliga",
        destination: "/football/eintracht-frankfurt",
        permanent: true,
      },
      {
        source: "/football/epl-team-of-the-week-round-23",
        destination: "/football/epl-team-of-the-week",
        permanent: true,
      },
      {
        source: "/football/french-ligue-1-standings-till-23rd-january-2016-2",
        destination:
          "/football/french-ligue-1-standings-till-23rd-january-2016",
        permanent: true,
      },
      {
        source: "/football/gunmen-kill-senior-official-of-iraqi-soccer-club",
        destination: "/football/gunmen-kill-senior-official-iraqi-soccer-club",
        permanent: true,
      },
      {
        source: "/football/league-spirited-neroca-hold-east-bengal-2",
        destination: "/football/i-league-spirited-neroca-hold-east-bengal",
        permanent: true,
      },
      {
        source: "/football/liverpool-daily-digest-transfer-news-and-more",
        destination: "/football/liverpool-daily-digest-transfer-news",
        permanent: true,
      },
      {
        source:
          "/football/liverpool-daily-digest-transfer-rumors-and-other-interesting-stories-2",
        destination:
          "/football/liverpool-daily-digest-transfer-rumors-and-other-interesting-stories",
        permanent: true,
      },
      {
        source: "/football/liverpool-daily-digest-transfer-stories-2",
        destination: "/football/liverpool-daily-digest-transfer-stories",
        permanent: true,
      },
      {
        source: "/football/liverpool-daily-digest-transfer-stories-3",
        destination: "/football/liverpool-daily-digest-transfer-stories",
        permanent: true,
      },
      {
        source: "/football/liverpool-daily-digest-transfer-stories-4",
        destination: "/football/liverpool-daily-digest-transfer-stories",
        permanent: true,
      },
      {
        source: "/football/liverpool-daily-digest-transfer-stories-and-more-2",
        destination:
          "/football/liverpool-daily-digest-transfer-stories-and-more",
        permanent: true,
      },
      {
        source: "/football/liverpool-daily-digest-transfer-stories-and-more-4",
        destination:
          "/football/liverpool-daily-digest-transfer-stories-and-more",
        permanent: true,
      },
      {
        source: "/football/liverpool-transfer-round-up-2",
        destination: "/football/liverpool-transfer-round-up",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-transfer-news-and-more-2",
        destination:
          "/football/manchester-united-daily-digest-transfer-news-and-more",
        permanent: true,
      },
      {
        source: "/football/manchester-united-daily-digest-transfer-rumors-2",
        destination: "/football/manchester-united-daily-digest-transfer-rumors",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-transfer-rumors-and-more-2",
        destination: "/football/manchester-united-daily-digest-transfer-rumors",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-transfer-rumors-and-more-4",
        destination: "/football/manchester-united-daily-digest-transfer-rumors",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-transfer-rumors-and-more-5",
        destination: "/football/manchester-united-daily-digest-transfer-rumors",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-transfer-rumors-and-more-6",
        destination:
          "/football/manchester-united-daily-digest-transfer-rumors-and-more",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-daily-digest-transfer-rumors-and-other-interesting-stories-2",
        destination:
          "/football/manchester-united-daily-digest-transfer-rumors-and-other-interesting-stories",
        permanent: true,
      },
      {
        source:
          "/football/manchester-united-vs-tottenham-hotspur-player-ratings",
        destination:
          "/football/manchester-united-vs-tottenham-hotspur-1-0-player-ratings",
        permanent: true,
      },
      {
        source: "/football/maradona-skips-football-match-spends-time-with-kids",
        destination: "/football/maradona-skips-football-match-spends-time-kids",
        permanent: true,
      },
      {
        source:
          "/football/mexico-coach-to-select-world-cup-squad-from-among-28-players-2",
        destination:
          "/football/mexico-coach-to-select-world-cup-squad-from-among-28-players",
        permanent: true,
      },
      {
        source: "/football/napoli-striker-milik-given-green-light-train-2",
        destination: "/football/napoli-striker-milik-given-green-light-train",
        permanent: true,
      },
      {
        source:
          "/football/premier-league-preview-west-bromwich-albion-v-everton-2",
        destination:
          "/football/premier-league-preview-west-bromwich-albion-v-everton",
        permanent: true,
      },
      {
        source: "/football/small-talk-daily-updates3",
        destination: "/football/small-talk-daily-football-updates-070314",
        permanent: true,
      },
      {
        source: "/football/transfer-rumours-roundup-2",
        destination: "/football/transfer-rumours-roundup",
        permanent: true,
      },
      {
        source: "/football/transfer-rumours-roundup-3",
        destination: "/football/transfer-rumours-roundup",
        permanent: true,
      },
      {
        source:
          "/football/u-17-world-cup-tempered-expectations-comment-special-ians-2",
        destination:
          "/football/u-17-world-cup-tempered-expectations-comment-special-ians",
        permanent: true,
      },
      {
        source:
          "/football/wenger-confirms-new-rule-regarding-arsenals-goalkeeping-position-2",
        destination:
          "/football/wenger-confirms-new-rule-regarding-arsenals-goalkeeping-position",
        permanent: true,
      },
      {
        source:
          "/more/europes-boxing-champ-took-meldonium-two-weeks-prior-bout",
        destination: "/home",
        permanent: true,
      },
      {
        source:
          "/more/europes-boxing-champ-took-meldonium-two-weeks-prior-bout-2",
        destination: "/home",
        permanent: true,
      },
      {
        source:
          "/cricket-news/ipl-2020-delhi-capitals-vs-rajasthan-royals-dc-predicted-xi-2",
        destination:
          "/ipl-2020/ipl-2020-delhi-capitals-vs-rajasthan-royals-dc-predicted-xi",
        permanent: true,
      },
      {
        source: "/more/gatlin-dashes-bolts-farewell-100m-title-dream-2",
        destination: "/more/gatlin-dashes-bolts-farewell-100m-title-dream",
        permanent: true,
      },
      {
        source:
          "/more/heart-transplant-recipient-wants-to-spread-awareness-through-tsk-25k-2",
        destination:
          "/more/heart-transplant-recipient-wants-to-spread-awareness-through-tsk-25k",
        permanent: true,
      },
      {
        source: "/football/kasperczak-denies-resigning-tunisia-bench-2",
        destination: "/more/kasperczak-denies-resigning-tunisia-bench",
        permanent: true,
      },
      {
        source: "/unknown/afghanistan-cricket-and-beyond",
        destination: "/news/afghanistan-cricket-and-beyond-2",
        permanent: true,
      },
      {
        source:
          "/fantasy-cricket-tips/cch-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022-2",
        destination:
          "/news/cch-vs-fba-dream11-prediction-fantasy-cricket-tips-dream11-team-playing-xi-pitch-report-and-injury-update-bangladesh-premier-league-2022",
        permanent: true,
      },
      {
        source: "/unknown/liverpool-fc-the-season-preview",
        destination: "/news/liverpool-fc-the-season-preview-2",
        permanent: true,
      },
      {
        source: "/news/money-in-the-bank-qualifiers-set-for-smackdown",
        destination: "/news/money-in-the-bank-qualifiers-for-smackdown",
        permanent: true,
      },
      {
        source: "/news/ted-dibiase-loos-back-at-joining-wcw-in-1996-2",
        destination: "/news/ted-dibiase-loos-back-at-joining-wcw-in-1996",
        permanent: true,
      },
      {
        source:
          "/ipl-2023/this-can-be-my-last-world-cup-umesh-yadav-targets-ipl-2023-to-make-indian-team-comeback-2",
        destination:
          "/news/this-can-be-my-last-world-cup-umesh-yadav-targets-ipl-2023-to-make-indian-team-comeback",
        permanent: true,
      },
      {
        source:
          "/news/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-australia-tour-of-west-indies-2021-2",
        destination:
          "/news/wi-vs-aus-dream11-prediction-fantasy-cricket-tips-playing-11-pitch-report-and-injury-update-australia-tour-of-west-indies-2021",
        permanent: true,
      },
      {
        source:
          "/news/wwe-news-new-united-states-champion-crowned-on-smackdown-live-2",
        destination:
          "/news/wwe-news-new-united-states-champion-crowned-on-smackdown-live",
        permanent: true,
      },
      {
        source: "/more/britains-peaty-sets-world-record-mens-100m-breaststroke",
        destination:
          "/rio-olympics-2016/britains-peaty-sets-world-record-mens-100m-breaststroke-2",
        permanent: true,
      },
      {
        source:
          "/rio-olympics-2016/indian-womens-archery-team-beats-colombia-reach-olympics-quarters-2",
        destination:
          "/rio-olympics-2016/indian-womens-archery-team-beats-colombia-reach-olympics-quarters",
        permanent: true,
      },
      {
        source:
          "/badminton-latest-news/telangana-andhra-cms-congratulate-sindhu-2",
        destination:
          "/rio-olympics-2016/telangana-andhra-cms-congratulate-sindhu",
        permanent: true,
      },
      {
        source: "/more/wada-retesting-sampples-russian-paralympic-athletes-2",
        destination:
          "/rio-olympics-2016/wada-retesting-sampples-russian-paralympic-athletes",
        permanent: true,
      },
      {
        source: "/tennis-news/djokovic-continues-to-lead-atp-rankings-2",
        destination:
          "/tennis-news-2016/djokovic-continues-to-lead-atp-rankings",
        permanent: true,
      },
      {
        source:
          "/tennis-news-2016/djokovic-maintains-top-spot-in-atp-rankings-2",
        destination:
          "/tennis-news-2016/djokovic-maintains-top-spot-in-atp-rankings",
        permanent: true,
      },
      {
        source:
          "/tennis-news-2016/germanys-kerber-continues-to-lead-wta-ranking-2",
        destination:
          "/tennis-news-2016/germanys-kerber-continues-to-lead-wta-ranking",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/murray-stays-top-atp-rankings-2",
        destination: "/tennis-news-2017/murray-stays-top-atp-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/nadal-continues-lead-atp-rankings-2",
        destination: "/tennis-news-2017/nadal-continues-lead-atp-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/nadal-continues-lead-atp-rankings-3",
        destination: "/tennis-news-2017/nadal-continues-lead-atp-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/nadal-continues-lead-atp-rankings-4",
        destination: "/tennis-news-2017/nadal-continues-lead-atp-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/nadal-continues-lead-atp-rankings-5",
        destination: "/tennis-news-2017/nadal-continues-lead-atp-rankings",
        permanent: true,
      },
      {
        source:
          "/tennis-news-2017/querrey-eliminates-tsonga-marches-towards-wimbledons-last-16-2",
        destination:
          "/tennis-news-2017/querrey-eliminates-tsonga-marches-towards-wimbledons-last-16",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/simona-halep-leads-wta-rankings-2",
        destination: "/tennis-news-2017/simona-halep-leads-wta-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/simona-halep-leads-wta-rankings-3",
        destination: "/tennis-news-2017/simona-halep-leads-wta-rankings",
        permanent: true,
      },
      {
        source: "/more/spains-bautista-wins-first-round-at-wimbledon",
        destination:
          "/tennis-news-2017/spains-bautista-wins-first-round-wimbledon",
        permanent: true,
      },
      {
        source: "/tennis-news/fed-cup-thandi-loses-as-india-concede-lead-2",
        destination: "/tennis-news/fed-cup-thandi-loses-as-india-concede-lead",
        permanent: true,
      },
      {
        source: "/tennis-news/halep-remains-on-top-of-world-tennis-rankings-2",
        destination:
          "/tennis-news/halep-remains-on-top-of-world-tennis-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news/halep-remains-on-top-of-world-tennis-rankings-3",
        destination:
          "/tennis-news/halep-remains-on-top-of-world-tennis-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news/nadal-stays-atop-atp-rankings-2",
        destination: "/tennis-news/nadal-stays-atop-atp-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news-2017/serena-williams-leads-wta-rankings-3",
        destination: "/tennis-news/serena-williams-leads-wta-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news/serena-williams-leads-wta-rankings-2",
        destination: "/tennis-news/serena-williams-leads-wta-rankings",
        permanent: true,
      },
      {
        source: "/tennis-news/tennis-murray-stays-top-mens-singles-rankings-2",
        destination:
          "/tennis-news/tennis-murray-stays-top-mens-singles-rankings",
        permanent: true,
      },
      {
        source: "/unknown/fake-fb-wall-2",
        destination: "/unknown/fake-fb-wall",
        permanent: true,
      },
      {
        source: "/unknown/fake-fb-wall-3",
        destination: "/unknown/fake-fb-wall",
        permanent: true,
      },
      {
        source: "/unknown/fake-fb-wall-7",
        destination: "/unknown/fake-fb-wall",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-10",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-11",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-13",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-2",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-3",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-4",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-5",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-6",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-7",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-8",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out-9",
        destination: "/unknown/sportzwiki-transfer-gossip-whos-in-and-whos-out",
        permanent: true,
      },
      {
        source: "/unknown/sportzwki-trolls-of-the-day-11th-july-2013-2",
        destination: "/unknown/sportzwki-trolls-of-the-day-11th-july-2013",
        permanent: true,
      },
      {
        source: "/unknown/sportzwki-trolls-of-the-day-27th-june-2013-2",
        destination: "/unknown/sportzwki-trolls-of-the-day-27th-june-2013",
        permanent: true,
      },
      {
        source: "/unknown/wwe-smackdown-spoilers-july-12-2013-2",
        destination: "/unknown/wwe-smackdown-spoilers-july-12-2013",
        permanent: true,
      },
      {
        source:
          "/wwe/5-wwe-stars-who-had-undergone-surgery-to-change-their-physique-2",
        destination:
          "/wwe/5-wwe-stars-who-had-undergone-surgery-to-change-their-physique",
        permanent: true,
      },
      {
        source: "/wwe/roman-reigns-reached-milestone-on-wwe-smackdown",
        destination: "/wwe/roman-reigns-reached-huge-milestone-smackdown",
        permanent: true,
      },
      {
        source: "/wwe/top-5-wwe-rumors-time-2",
        destination: "/wwe/top-5-wwe-rumors-time",
        permanent: true,
      },
      {
        source:
          "/uncategorized/wwe-news-sami-zayn-might-traded-smackdown-live-2",
        destination: "/wwe/wwe-news-sami-zayn-might-traded-smackdown-live",
        permanent: true,
      },
      {
        source: "/unknown/wwe-payback-review",
        destination: "/wwe/wwe-payback-review",
        permanent: true,
      },
      {
        source: "/uncategorized/wwe-top-5-rumor-past-week",
        destination: "/wwe/wwe-top-5-rumors-past-week",
        permanent: true,
      },
      {
        source: "/wwe/wwe-top-5-rumor-past-week-2",
        destination: "/wwe/wwe-top-5-rumors-past-week",
        permanent: true,
      },
      {
        source: "/wwe/wwe-top-5-rumor-past-week-3",
        destination: "/wwe/wwe-top-5-rumors-past-week",
        permanent: true,
      },
      {
        source: "/wwe/wwe-top-5-rumor-week",
        destination: "/wwe/wwe-top-5-rumors-past-week",
        permanent: true,
      },
      {
        source: "/wwe/wwe-top-5-rumors-past-week-2",
        destination: "/wwe/wwe-top-5-rumors-past-week",
        permanent: true,
      },
    ];
  },
  images: {
    domains: [
      "i0.wp.com",
      "res.cloudinary.com",
      "images.unsplash.com",
      "feetfirst.org",
      "thumbs.dreamstime.com",
      "bengali.sportzwiki.com",
      "images.entitysport.com",
      "demo2.sportzwiki.com",
      "swdupli.sportzwiki.com",
      "admin.sportzwiki.com",
    ],
  },
  // ...
  compiler: {
    removeConsole: false,
  },
  // ...

  rewrites: async () => [
    {
      source: "/images-sitemap-:id.xml",
      destination: "/images-sitemap.xml/:id",
    },

    {
      source: "/post-sitemap-:id.xml",
      destination: "/post-sitemap.xml/:id",
    },

    {
      source: "/categories-sitemap-:id.xml",
      destination: "/categories-sitemap.xml/:id",
    },

    {
      source: "/livescore-sitemap-:id.xml",
      destination: "/livescore-sitemap.xml/:id",
    },

    {
      source: "/series-sitemap-:id.xml",
      destination: "/series-sitemap.xml/:id",
    },

    {
      source: "/cricketers",
      destination: "/cricketers/india",
    },

    {
      source: "/cricket/fantasy-cricket/:id",
      destination: "/cricket/:id",
    },

    // {
    //   source: "/cricket/fantasy-cricket",
    //   destination: "/cricket/",
    // },

    {
      source: "/:id",
      destination: "/:id/page/1",
    },

    // {
    //   source: "/:id/:slug/:slug1",
    //   destination: "/:id/:slug/:slug1/page/1",
    // },

    {
      source: "/wiki/:id",
      destination: "/wiki/:id/page/1",
    },

    // {
    //   source: "/feed",
    //   destination: "/feed.xml",
    // },
  ],
};

module.exports = nextConfig;

// Injected content via Sentry wizard below

const { withSentryConfig } = require("@sentry/nextjs");

module.exports = withSentryConfig(
  module.exports,
  {
    // For all available options, see:
    // https://github.com/getsentry/sentry-webpack-plugin#options

    // Suppresses source map uploading logs during build
    silent: true,

    org: "none-io1",
    project: "javascript-nextjs",
  },
  {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  }
);
