const createEventLD = {
  "@context": "http://schema.org",
  "@type": "SportsEvent",
  name: "Super Bowl LVI",
  startDate: "2023-02-12T18:30:00-05:00",
  location: {
    "@type": "Place",
    name: "SoFi Stadium",
  },
  competitor: [
    {
      "@type": "SportsTeam",
      name: "Los Angeles Rams",
    },
    {
      "@type": "SportsTeam",
      name: "New England Patriots",
    },
  ],
};
