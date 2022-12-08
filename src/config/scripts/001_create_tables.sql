USE manager;

CREATE TABLE clients (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(200) NOT NULL,
  birthDate VARCHAR(10) NOT NULL,
  rg VARCHAR(9) NOT NULL,
  cpf VARCHAR(11) NOT NULL,
  phone VARCHAR(11) NOT NULL,
  CONSTRAINT pk_clients_id PRIMARY KEY (id)
);

CREATE TABLE addresses (
  id INT NOT NULL AUTO_INCREMENT,
  country VARCHAR(200) NOT NULL,
  state VARCHAR(200) NOT NULL,
  city VARCHAR(200) NOT NULL,
  neighborhood VARCHAR(200) NOT NULL,
  address VARCHAR(200) NOT NULL,
  number INT NOT NULL,
  complement VARCHAR(200),
  reference VARCHAR(200),
  zipCode VARCHAR(8) NOT NULL,
  client_id INT NOT NULL,
  CONSTRAINT pk_addresses_id PRIMARY KEY (id),
  CONSTRAINT fk_client_id FOREIGN KEY (client_id)
    REFERENCES clients(id)
    ON DELETE CASCADE
);