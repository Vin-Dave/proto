class Person {
  constructor(weight, height) {
    this.weight = weight;
    this.height = height;
  }

  calculateBMI() {
    if (this.weight <= 0 || this.height <= 0) {
      return "Błąd: Waga i wzrost muszą być większe od zera.";
    }
    const heightInMeters = this.height / 100;
    return this.weight / (heightInMeters * heightInMeters);
  }
}

const form = document.querySelector("form");
const calculateButton = document.querySelector("#calculate");
const resultDiv = document.querySelector("#result");

calculateButton.addEventListener("click", () => {
  const weight = parseFloat(form.querySelector("#weight").value);
  const height = parseFloat(form.querySelector("#height").value);

  const person = new Person(weight, height);
  const bmi = person.calculateBMI();

  resultDiv.textContent = bmi;
});
