document.addEventListener('DOMContentLoaded', () => {
  // ===== Фасовки =====
  const variantRows = document.querySelectorAll('.variant-row');
  const addButtons = document.querySelectorAll('.variant-row__add-btn');

  // Обработка выбора фасовки (клик по строке)
  variantRows.forEach(row => {
    row.addEventListener('click', (e) => {
      // Если клик не по кнопке корзины
      if (!e.target.closest('.variant-row__add-btn')) {
        variantRows.forEach(r => r.classList.remove('variant-row--active'));
        row.classList.add('variant-row--active');
      }
    });
  });

  // Обработка кнопок "Добавить в корзину"
  addButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      
      const row = btn.closest('.variant-row');
      const weight = row.querySelector('.variant-row__weight').textContent;
      const price = row.querySelector('.variant-row__current-price').textContent;
      
      // Визуальная обратная связь
      const originalHTML = btn.innerHTML;
      btn.innerHTML = `
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20 6 9 17 4 12"></polyline>
        </svg>
      `;
      btn.style.backgroundColor = '#4CAF50';
      
      console.log(`Добавлено в корзину: ${weight}, ${price}`);
      
      setTimeout(() => {
        btn.innerHTML = originalHTML;
        btn.style.backgroundColor = '';
      }, 1500);
    });
  });

  // ===== Табы =====
  const tabNavButtons = document.querySelectorAll('.tabs__nav-btn');
  const tabPanels = document.querySelectorAll('.tabs__panel');
  
  tabNavButtons.forEach(button => {
    button.addEventListener('click', () => {
      const targetTab = button.dataset.tab;
      
      tabNavButtons.forEach(btn => btn.classList.remove('tabs__nav-btn--active'));
      tabPanels.forEach(panel => panel.classList.remove('tabs__panel--active'));
      
      button.classList.add('tabs__nav-btn--active');
      document.getElementById(targetTab).classList.add('tabs__panel--active');
    });
  });
});