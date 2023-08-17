"use client"
import { EventJsonLd } from "next-seo";

const EventLd = (props) => (
  <>
    <EventJsonLd
      useAppDir={true}
      name={props.eventName}
      startDate={props.startDate}
      endDate={props.endDate}
      location={{
        name: props.venue,
        //   sameAs: "https://example.com/my-place",
        //   address: {
        //     streetAddress: "1600 Saratoga Ave",
        //     addressLocality: "San Jose",
        //     addressRegion: "CA",
        //     postalCode: "95129",
        //     addressCountry: "US",
        //   },
      }}
      url={props.eventUrl}
      //   images={["https://example.com/photos/photo.jpg"]}
      //   description="My event @ my place"
      //   offers={[
      //     {
      //       price: "119.99",
      //       priceCurrency: "USD",
      //       priceValidUntil: "2020-11-05",
      //       itemCondition: "https://schema.org/UsedCondition",
      //       availability: "https://schema.org/InStock",
      //       url: "https://www.example.com/executive-anvil",
      //       seller: {
      //         name: "John Doe",
      //       },
      //       validFrom: "2020-11-01T00:00:00.000Z",
      //     },
      //     {
      //       price: "139.99",
      //       priceCurrency: "CAD",
      //       priceValidUntil: "2020-09-05",
      //       itemCondition: "https://schema.org/UsedCondition",
      //       availability: "https://schema.org/InStock",
      //       url: "https://www.example.ca/executive-anvil",
      //       seller: {
      //         name: "John Doe Sr.",
      //       },
      //       validFrom: "2020-08-05T00:00:00.000Z",
      //     },
      //   ]}
      //   performers={[
      //     {
      //       name: "Adele",
      //     },
      //     {
      //       name: "Kira and Morrison",
      //     },
      //   ]}
      //   organizer={
      //     {
      //       type: "Organization",
      //       name: "Unnamed organization",
      //       url: "https://www.unnamed.com",
      //     }
      //   }
      //   eventStatus="EventScheduled"
      //   eventAttendanceMode="OfflineEventAttendanceMode"
    />
  </>
);

export default EventLd;
