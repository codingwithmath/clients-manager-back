type Documents = {
  rg: string;
  cpf: string;
};

type Address = {
  id?: string;
  country: string;
  state: string;
  city: string;
  neighborhood: string;
  address: string;
  number: string;
  complement?: string;
  reference?: string;
  zipCode: string;
};
