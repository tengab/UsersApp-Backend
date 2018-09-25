export class User {

  id: string;
  age: number;
  gender: string;
  email: string;
  nat: string;
  natFullName: string;
  phone: string;
  name: Name;
  picture: Picture;
}

export class Name {
  private first: string;
  private last: string;
  private title: string;
}

export class Picture {
  private thumbnail: string;
  private large: string;
}

// constructor() {
//
//
//   this.location = {
//     coordinates: {
//       latitude: 'noData',
//       longitude: 'noData',
//     },
//     street: null,
//     city: null,
//     state: null,
//     postcode: null,
//   };
//   this.addStatus = 'addedManually';
//   this.friends = {
//     foreignFriends: User[],
//     twins: [],
//     favouriteFriends: [],
//     countriesForFriendsSuggestions: [],
//   };
// }