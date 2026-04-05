document.addEventListener("DOMContentLoaded", function () {
    fetch('https://localhost:7259/api/products')
        .then(response => response.json())
        .then(data => {
            const productList = document.getElementById('product-list');

            data.forEach(product => {
                const productCard = `
                    <div class="col-md-4 mb-3">
                        <div class="card p-3 h-100">
                            <img src="assests/images/${product.imageUrl}" class="product-img mb-2">
                            <h5>${product.name}</h5>
                            <p>${product.description}</p>
                            <p><strong>₱${product.price}</strong></p>
                            <button class="btn btn-primary">Buy Now</button>
                        </div>
                    </div>  
                `;

                productList.innerHTML += productCard;
            });
        })
        .catch(error => console.error("Error loading products:", error));
}); 