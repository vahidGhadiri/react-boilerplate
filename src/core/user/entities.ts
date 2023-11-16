export interface ICompany {
  bs: string;
  name: string;
  catchPhrase: string;
}

export interface IGeo {
  lat: "-37.3159";
  lng: "81.1496";
}

export interface IAddress {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: IGeo;
}

export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
  address: IAddress;
  phone: string;
  website: string;
  company: ICompany;
}
