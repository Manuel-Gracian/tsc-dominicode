class Person2 {
  public name: string = "";
  protected city: string = "Santo Domingo";

  constructor() {}
}

class Employee extends Person2 {
  // atributos
  public id: number = 0;
  private dept: string = "";

  constructor(pId: number, pName: string, pDept: string) {
    super(); // Llamada al constructor padre si no marca error

    this.name = pName;
    this.dept = pDept;
    this.id = pId;
    console.log("Hello");
    this.Show_Info();
  }

  // la propiedad dept es private solo se puede acceder de su misma clase
  // la propiedad city de la clase padre es protected por lo que si podemos acceder desde la clase hija

  // metodos
  Show_Info(): void {
    console.log(`${this.name} ${this.dept} ${this.id}`);
  }
}

const emp = new Employee(1, "manuel", "sales");

// Propiedades publicas
// emp.id
// emp.name

// No permite acceder a dept por que es private
//emp.dept
