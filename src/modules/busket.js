const Busket = () => {
    const row = document.querySelector(".cart-table__goods");

    row.innerHTML = ""

    const goods = JSON.parse(localStorage.getItem("goods"))

    goods.forEach(element => {
        let quantity =1, totalPrice = 0
        row.insertAdjacentHTML("beforeend", `
      <tr>
						<td>${element.name}</td>
						<td>${element.price}</td>
						<td><button class="cart-btn-minus"">-</button></td>
						<td>${quantity}</td>
						<td><button class=" cart-btn-plus"">+</button></td>
						<td>${totalPrice}$</td>
						<td><button class="cart-btn-delete"">x</button></td>
					</tr>
      `)
    });
}

export default Busket;