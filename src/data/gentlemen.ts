import { Gentleman } from "../types";

const gentlemenApi: Gentleman[] = [
  {
    id: 1,
    name: "Bertin Osbourne",
    status: "Alive",
    profession: "Youtuber",
    twitter: "@osbourne",
    picture: "bertin.jpg",
    isSelected: true,
  },
  {
    name: "The Farytale",
    status: "Reborn",
    profession: "Influencer",
    twitter: "pending",
    picture: "fary.jpg",
    id: 2,
    isSelected: false,
  },
  {
    id: 3,
    name: "Julius Churches",
    status: "RIP",
    profession: "Brain-eater",
    twitter: "@julius_is_dead",
    picture: "julio.jpg",
    isSelected: true,
  },
  {
    name: "John and a Half",
    status: "RIP",
    profession: "Elder abuser",
    twitter: "@john",
    picture: "juan.jpg",
    isSelected: true,
    id: 4,
  },
];

export default gentlemenApi;
