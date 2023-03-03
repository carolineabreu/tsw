import { useState } from "react";

export function CreateCountry() {
  const [form, setForm] = useState({
    name: "",
    surname: "",
    age: 0,
    addresses: [],
  });

  const [address, setAddress] = useState({
    street: "",
    number: 0,
    neighborhood: "",
    state: "",
    cep: "00000000",
  });

  console.log(form, address);

  function handleChangeForm(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleChangeAddress(e) {
    setAddress({ ...address, [e.target.name]: e.target.value });
  }

  function removeAddress(index) {
    setForm((currentState) => {
      const newAddresses = currentState.addresses.splice(index, 1);
      console.log("NOVA ARRAY DE ENDEREÇOS", newAddresses);

      return { ...currentState, addresses: [...newAddresses] };
    });
  }

  function addAddress() {
    setForm({ ...form, addresses: [...form.addresses, address] });
    setAddress({
      street: "",
      number: 0,
      neighborhood: "",
      state: "",
      cep: "00000000",
    });
  }

  return (
    <div className="App">
      <form>
        <label>Nome</label>
        <input name="name" value={form.name} onChange={handleChangeForm} />
        <label>Sobrenome</label>
        <input
          name="surname"
          value={form.surname}
          onChange={handleChangeForm}
        />
        <label>Idade</label>
        <input
          name="age"
          value={form.age}
          onChange={handleChangeForm}
          type="number"
        />

        <h2>Endereços</h2>
        <label>Rua</label>
        <input
          name="street"
          value={address.street}
          onChange={handleChangeAddress}
        />
        <label>Numero</label>
        <input
          name="number"
          type="number"
          value={address.number}
          onChange={handleChangeAddress}
        />
        <label>Bairro</label>
        <input
          name="neighborhood"
          value={address.neighborhood}
          onChange={handleChangeAddress}
        />
        <label>Estado</label>
        <input
          name="state"
          value={address.state}
          onChange={handleChangeAddress}
        />
        <label>CEP</label>
        <input name="cep" value={address.cep} onChange={handleChangeAddress} />

        {form.addresses.map((currentAddress, index) => {
          return (
            <p>
              <strong>{currentAddress.street}</strong>
              <button
                type="button"
                onClick={() => {
                  removeAddress(index);
                }}
              >
                Remover
              </button>
            </p>
          );
        })}

        <button type="button" onClick={addAddress}>
          Add endereço
        </button>

        <button>Enviar</button>
      </form>
    </div>
  );
}

