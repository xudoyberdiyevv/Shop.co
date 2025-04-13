const closeBtn = document.querySelector('.foricon');
const topBanner = document.querySelector('.top');

closeBtn.addEventListener('click', function(e) {
    e.preventDefault(); // agar <a> bo'lsa, sahifa refresh bo'lmasligi uchun
    topBanner.style.display = 'none';
});

const aboutItem = document.querySelector('.menu-item');

    aboutItem.addEventListener('click', function (e) {
        e.preventDefault(); // sahifa refresh bo‘lmasligi uchun
        aboutItem.classList.toggle('active'); // toggle orqali ko‘rsatadi yoki yashiradi
    });

    fetch('products.json')
      .then(response => response.json())
      .then(products => {
        const container = document.getElementById('product-container');
        products.forEach(product => {
          container.innerHTML += `
            <div class="card">
              <img src="${product.image}" alt="${product.name}" />
              <h3>${product.name}</h3>
              <img src="${product.peck}" alt="${product.peck}"/>
              <p>${product.description}</p>
              <strong>${product.price}</strong>
            </div>
          `;
        });
      });