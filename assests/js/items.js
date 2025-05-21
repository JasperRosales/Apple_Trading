const CATEGORY = ["School Supplies", "Appliances", "Office Items", "Catering Supplies"];

const categoryFilter = document.getElementById('categoryFilter');
CATEGORY.forEach(cat => {
  const option = document.createElement('option');
  option.value = cat;
  option.textContent = cat;
  categoryFilter.appendChild(option);
});

fetch('items.json')
  .then(res => res.json())
  .then(items => {
    const itemsGrid = document.getElementById('itemsGrid');

    items.forEach(({ name, category, price, image }) => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4 item-card';
      col.dataset.category = category;

      col.innerHTML = `
        <div class="card h-100 shadow-sm">
          <img src="${image}" class="card-img-top" alt="${name}">
          <div class="card-body">
            <h5 class="card-title">${name}</h5>
            <hr>
            <p class="text-muted mb-1">Category: ${category}</p>
            <p class="fw-bold text-success">₱${price}</p>
          </div>
        </div>
      `;

      itemsGrid.appendChild(col);
    });
  });

categoryFilter.addEventListener('change', function () {
  const selected = this.value;
  document.querySelectorAll('.item-card').forEach(card => {
    card.style.display =
      selected === 'all' || card.dataset.category === selected ? '' : 'none';
  });
});
