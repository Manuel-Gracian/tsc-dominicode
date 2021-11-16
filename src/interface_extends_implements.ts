// interfaces que heredan de otra interface
interface Person {
  id: number;
  name: string;
}

// Esxtendemos de persona (Herencia)
interface Employee extends Person {
  department: string;
}

interface Customer extends Person {
  country: string;
}

const empl: Employee = { id: 1245, name: "manuel", department: "development" };
const cust: Customer = { id: 1245, name: "manuel", country: "MEX" };

interface Animal {
  Get_Dogs: () => void;
  Get_Cats: () => void;
}

// Implementando interface Aimal en la clase Zoo
class Zoo implements Animal {
  Get_Dogs(): void {}
  Get_Cats(): void {}
}
