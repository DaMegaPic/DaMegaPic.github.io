class Pizza {
    constructor(name, image, ingredients, sauce, cheese, price){
        this.name = name;
        this.image = image;
        this.ingredients = ingredients;
        this.sauce = sauce;
        this.cheese = cheese;
        this.price = price;
    }
    get sectionHTML() {
        return `
            <section class="profile" onclick="showModal('${this.name}')">
                <h2>${this.name}</h2>
                <img src="${this.image}">
            </section>
        `;
    }
    get modalHTML() {
        return `
            <div class="modal" id="modal-${this.name}">
                <div class="modal-content">
                    <span class="close" onclick="closeModal('${this.name}')">&times;</span>
                    <h2>${this.name}</h2>
                    <img src="${this.image}" alt="${this.name}">
                    <p><strong>Ingredients:</strong> ${this.ingredients}</p>
                    <p><strong>Sauce:</strong> ${this.sauce}</p>
                    <p><strong>Cheese:</strong> ${this.cheese}</p>
                    <p><strong>Price:</strong> $${this.price}</p>
                </div>
            </div>
        `;
    }
};
const pizzas = [
    new Pizza("Hawaiian", "images/Hawaiian.jpg", "Pineapple, Ham", "Tomato", "Mozzerella", "12.95"),
    new Pizza("Buffalo Chicken Ranch", "images/BCR.jpg", "Chicken", "Buffalo, Ranch", "Gorgonzola", "14.95"),
    new Pizza("Margarita", "images/Margarita.jpg", "Basil, Tomatoes", "Extra Virgin Olive Oil", "Asiago", "14.95"),
    new Pizza("Pepperoni", "images/Pepperoni.jpg", "Pepperoni", "Tomato", "Mozzerella", "12.95"),
    new Pizza("Veggie", "images/Veggie.jpg", "Broccoli, Olives, Spinach", "Pesto", "Ricotta", "14.95")
];
const loadPizzas = () => {
    const container = document.getElementById("pizza-box");
    const modalContainer = document.getElementById("modal-container");
    pizzas.forEach(pizza => {
        container.insertAdjacentHTML("beforeend", pizza.sectionHTML);
        modalContainer.insertAdjacentHTML("beforeend", pizza.modalHTML);
    });
}
const showModal = (pizzaName) => {
    const modal = document.getElementById(`modal-${pizzaName}`);
    if (modal) {
        modal.style.display = "flex"; 
        modal.classList.add("show");
    }
};
const closeModal = (pizzaName) => {
    const modal = document.getElementById(`modal-${pizzaName}`);
    if (modal) {
        modal.classList.remove("show");
        modal.style.display = "none"; 
    }
};

window.addEventListener("DOMContentLoaded", () => loadPizzas());