export type Branch = {
  id: string;
  name: string;
  city: string;
  address: string;
  phone?: string;
  isHeadOffice?: boolean;
  mapEmbed: string;
  mapsLink: string;
};

export const branches: Branch[] = [
  {
    id: "ahmedabad",
    name: "Ahmedabad Branch",
    city: "Ahmedabad",
    address: "108, 1st Floor, Bluewater Building, Ahmedabad, Gujarat",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d72.4987!3d22.9948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sAmber+Tower+Sarkhej+Ahmedabad!5e0!3m2!1sen!2sin!4v1",
    mapsLink: "https://www.google.com/maps?q=Bluewater+Building+Ahmedabad+Gujarat",
  },
  {
    id: "gandhinagar",
    name: "Gandhinagar Branch (Kanti Nagar)",
    city: "Gandhinagar",
    address:
      "3rd Floor, 307, Shagun-11, Above Croma Center, Sector 11, Gandhinagar, Gujarat 382010",
    phone: "+91 99786 19900",
    isHeadOffice: true,
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d72.6369!3d23.2156!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sShagun+11+Sector+11+Gandhinagar!5e0!3m2!1sen!2sin!4v1",
    mapsLink: "https://www.google.com/maps?q=Shagun-11+Sector+11+Gandhinagar+Gujarat",
  },
  {
    id: "patan",
    name: "Patan Branch",
    city: "Patan",
    address: "Opp. Old Bus Stand, Bhagwati Nagar, Patan, Gujarat 384265",
    phone: "+91 97242 82527",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d72.1266!3d23.8493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPandya+Complex+Patan+Gujarat!5e0!3m2!1sen!2sin!4v1",
    mapsLink: "https://www.google.com/maps?q=Pandya+Complex+Patan+Gujarat",
  },
  {
    id: "surendranagar",
    name: "Surendranagar Branch",
    city: "Surendranagar",
    address: "Surendranagar, Gujarat",
    mapEmbed:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.0!2d71.6495!3d22.7289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sSurendranagar+Gujarat!5e0!3m2!1sen!2sin!4v1",
    mapsLink: "https://www.google.com/maps?q=Surendranagar+Gujarat",
  },
];

export const visitingBranch = {
  id: "visiting-branches",
  name: "Visiting Branches / Others",
  address: "Address confirmed on WhatsApp",
};
