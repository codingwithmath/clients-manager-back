export interface ICreateClientAddressDTO {
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  complement?: string;
  reference?: string;
  zipCode: string;
}
