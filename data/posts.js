import { USERS } from "./users";
export const POSTS = [
  {
    imageUrl: "https://picsum.photos/id/237/200/300",
    user: USERS[0].username,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    likes: "254",
    caption: "How amazing is that....",
    profile_picture: USERS[0].image,

    comments: [
      {
        user: "Pegah Pasha",
        comment: "OMG, I really missed cute Peddy🥰🥰",
      },
      {
        user: "Pinar Chong",
        comment: "Oh my god, its freaking radiculous💯",
      },
   
    ],
  },
  {
    imageUrl: "https://baconmockup.com/640/360",
    user: USERS[1].username,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    likes: "104",
    caption: "How amazing is that😄",
    profile_picture: USERS[1].image,

    comments: [
      {
        user: "Shideh",
        comment: "Oh my god, its freaking radiculous",
      },
      
      {
        user: "Pinar",
        comment: "Oh my god, its freaking radiculous",
      },
    ],
  },

  {
    imageUrl: "https://placekitten.com/640/360",
    user: USERS[2].username,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    likes: "124",
    caption: "How amazing is that....",
    profile_picture: USERS[2].image,

    comments: [
      {
        user: "Golnaz",
        comment: "Oh my god, its freaking radiculous",
      },
      {
        user: "Sou",
        comment: "Oh my god, its freaking radiculous, I go through that",
      },
      {
        user: "Samineh",
        comment: "Oh my god, its freaking radiculous",
      },
     
    ],
  },
  {
    imageUrl: "https://placebeard.it/640x360",
    user: USERS[3].username,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    likes: "124",
    caption: "How amazing is that....",
    profile_picture: USERS[3].image,

    comments: [
      {
        user: "Som",
        comment: "Oh my god, its freaking radiculous",
      },
      {
        user: "Pinar",
        comment: "Oh my god, its freaking radiculous, I go through that",
      },
      {
        user: "shyla",
        comment: "Oh my god, its freaking radiculous",
      },
      {
        user: "Pinar",
        comment: "Oh my god, its freaking radiculous",
      },
    ],
  },
];
