import { uuid } from 'uuidv4';

export class Client {
  public readonly id: number;

  public name: string;
  public birthDate: string;
  public rg: string;
  public cpf: string;
  public phone: string;
  public addresses?: Address[];

  constructor(props: Omit<Client, 'id' | 'addresses'>, addresses?: Address[]) {
    Object.assign(this, props);

    if (!addresses) {
      this.addresses = [];
    }
  }
}
