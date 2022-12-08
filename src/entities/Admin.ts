import { uuid } from 'uuidv4';

type Documents = {
  rg: string;
  cpf: string;
};

type Address = {
  id: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  complement?: string;
  reference: string;
  zipCode?: string;
};

export class User {
  public readonly id: string;

  public name: string;
  public birthDate: string;
  public documents: Documents;
  public phone: string;
  public addresses: Address[];

  constructor(props: Omit<User, 'id'>, id?: string) {
    Object.assign(this, props);

    if (!id) {
      this.id = uuid();
    }
  }
}
