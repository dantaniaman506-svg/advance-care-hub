export type Branch = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone?: string;
  mapEmbed: string;
  mapsLink: string;
};

export const branches: Branch[] = [
  {
    id: "gandhinagar",
    name: "Gandhinagar (Head Office)",
    city: "Gandhinagar",
    address:
      "3rd Floor, 307, Shagun-11, Above Croma Center, Sector 11, Gandhinagar, Gujarat 382010",
    mapEmbed:
      "https://www.google.com/maps?q=Shagun-11+Sector+11+Gandhinagar&output=embed",
    mapsLink: "https://www.google.com/maps?q=Shagun-11+Sector+11+Gandhinagar",
  },
  {
    id: "patan",
    name: "Patan",
    city: "Patan",
    address:
      "1st Floor, Pandya Complex, Opp. Old S.T. Bus Stop, Krishnanagar Society, Hansapur Part, Patan, Gujarat 384265",
    phone: "+91 97242 82527",
    mapEmbed:
      "https://www.google.com/maps?q=Pandya+Complex+Patan+Gujarat&output=embed",
    mapsLink: "https://www.google.com/maps?q=Pandya+Complex+Patan+Gujarat",
  },
  {
    id: "ahmedabad",
    name: "Ahmedabad (Sarkhej)",
    city: "Ahmedabad",
    address:
      "First Floor, Blue Water, 108, Amber Tower Rd, Near Bushra Hospital, Arshad Park, Sarkhej, Ahmedabad, Gujarat 380055",
    mapEmbed:
      "https://www.google.com/maps?q=Amber+Tower+Sarkhej+Ahmedabad&output=embed",
    mapsLink: "https://www.google.com/maps?q=Amber+Tower+Sarkhej+Ahmedabad",
  },
  {
    id: "surendranagar",
    name: "Surendranagar",
    city: "Surendranagar",
    address: "Surendranagar, Gujarat (full address coming soon)",
    mapEmbed: "https://www.google.com/maps?q=Surendranagar+Gujarat&output=embed",
    mapsLink: "https://www.google.com/maps?q=Surendranagar+Gujarat",
  },
];
