document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS ACTUALIZADA ---
   const data = {
    "Infancia": {
        services: [
            { type: 'service', name: "Consulta Pediátrica General", description: "Atención médica integral para niños y niñas.", icon: "ri-stethoscope-line" },
            { type: 'service', name: "Control de Niño Sano", description: "Seguimiento del crecimiento y desarrollo saludable.", icon: "ri-baby-line" },
            { type: 'service', name: "Peso y Talla", description: "Evaluación y asesoría nutricional para un desarrollo óptimo.", icon: "ri-baby-line" },
            { type: 'service', name: "Alergias", description: "Diagnóstico y tratamiento de alergias comunes en la infancia.", icon: "ri-windy-line" },
            { type: 'service', name: "Dermatología Pediátrica", description: "Cuidado especializado para la piel delicada de los niños.", icon: "ri-sparkling-2-line" }
        ],
        products: [
            { type: 'product', id: 10, name: "Multivitamínico Infantil", price: 25.00, image: 'aceite-menta.jpg', description: "Refuerzo divertido y delicioso.", featured: true },
            { type: 'product', id: 12, name: "Crema Corporal Hipoalergénica", price: 18.00, image: 'aceites-essenciales.jpg', description: "Hidratación suave para pieles sensibles." },
            { type: 'product', id: 13, name: "Shampoo Suave para Bebé", price: 16.50, image: 'shampoo-anticaspa.jpg' , description: "Fórmula sin lágrimas que limpia y protege." },
            { type: 'product', id: 14, name: "Jabón de Avena y Miel", price: 9.00, image: 'jabon.jpg', description: "Limpieza natural que calma la piel." }
        ]
    },
    "Pubertad y Adolescencia": {
        services: [
            { type: 'service', name: "Consulta sobre Menstruación", description: "Orientación y manejo del ciclo menstrual.", icon: "ri-women-line" },
            { type: 'service', name: "Tratamiento para SOP", description: "Manejo integral del Síndrome de Ovario Poliquístico.", icon: "ri-women-line" },
            { type: 'service', name: "Consulta General Individual", description: "Espacio seguro para resolver dudas de salud.", icon: "ri-user-heart-line" },
            { type: 'service', name: "Control de Peso y Talla", description: "Asesoría nutricional para un desarrollo saludable.", icon: "ri-scales-line" },
            { type: 'service', name: "Dermatología (Acné)", description: "Tratamientos personalizados para el control del acné.", icon: "ri-empathize-line" },
            { type: 'service', name: "Salud Sexual y ETS", description: "Prevención y orientación sobre enfermedades de transmisión sexual.", icon: "ri-shield-heart-line" },
            { type: 'service', name: "Trastornos Ginecológicos", description: "Diagnóstico y tratamiento de condiciones específicas.", icon: "ri-stethoscope-line" },
            { type: 'service', name: "Detección de Riesgos", description: "Apoyo para identificar y manejar comportamientos de riesgo.", icon: "ri-psychotherapy-line" }
        ],
        products: [
            { type: 'product', id: 20, name: "Kit Primer Periodo", price: 45.00, image: 'https://placehold.co/400x300/F7F7F7/2C3E50?text=Kit+Periodo', description: "Todo lo necesario para afrontar la menarquia.", featured: true },
            { type: 'product', id: 21, name: "Limpiador Facial Anti-acné", price: 22.00, image: 'shampoo-anticaida.jpg', description: "Fórmula suave para pieles jóvenes." }
        ]
    },
    "Edad Reproductiva": {
        services: [{ type: 'service', name: "Consulta Ginecológica Anual", description: "Chequeo, Papanicolau y resolución de dudas.", icon: "ri-stethoscope-line" }],
        products: [{ type: 'product', id: 30, name: "Ácido Fólico", price: 15.00, image: 'https://placehold.co/400x300/F7F7F7/2C3E50?text=Acido+Folico', description: "Esencial para la planificación del embarazo.", featured: true }]
    },
    "Embarazo": {
        services: [{ type: 'service', name: "Control Prenatal Mensual", description: "Seguimiento para un embarazo saludable.", icon: "ri-service-line" }],
        products: [{ type: 'product', id: 40, name: "Vitaminas Prenatales", price: 35.00, image: 'https://placehold.co/400x300/F7F7F7/2C3E50?text=Prenatales', description: "Nutrientes para el desarrollo del bebé.", featured: true }]
    },
    "Climaterio y Menopausia": {
        services: [{ type: 'service', name: "Terapia de Reemplazo Hormonal", description: "Asesoría sobre opciones naturales y bioidénticas.", icon: "ri-refresh-line" }],
        products: [{ type: 'product', id: 50, name: "Suplemento con Isoflavonas", price: 38.00, image: 'https://placehold.co/400x300/F7F7F7/2C3E50?text=Isoflavonas', description: "Ayuda a aliviar los síntomas de la menopausia.", featured: true }]
    }
};    
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const allItems = Object.entries(data).flatMap(([category, content]) => [
        ...(content.products || []).map(p => ({ ...p, category })),
        ...(content.services || []).map(s => ({ ...s, category }))
    ]);

    function createProductCard(product, isFeatured) {
        const cardContent = `<img src="${product.image}" alt="${product.name}" class="${isFeatured ? 'h-52' : 'h-48'} w-full object-cover"><div class="product-card-content"><h3 class="text-lg font-semibold">${product.name}</h3><p class="text-gray-600 text-sm mt-1 flex-grow">${product.description}</p><div class="flex justify-between items-center mt-4"><span class="text-xl font-bold text-elegant-brown">$${product.price.toFixed(2)}</span><button class="add-to-cart-btn" data-product-id="${product.id}">Agregar</button></div></div>`;
        return isFeatured ? `<div class="swiper-slide"><div class="product-card h-full">${cardContent}</div></div>` : `<div class="product-card">${cardContent}</div>`;
    }
    function createServiceCard(service) { return `<div class="service-card"><i class="${service.icon} service-icon"></i><h3 class="service-title">${service.name}</h3><p class="service-description">${service.description}</p><button class="service-button reserve-appointment-btn" data-service-name="${service.name}">Reservar Cita</button></div>`; }

    function renderFilteredResults(items) {
        const servicesContainer = document.getElementById('shop-services');
        const productsContainer = document.getElementById('shop-products-grid');
        const servicesSection = document.getElementById('services-section');
        const productsSection = document.getElementById('products-section');
        const noResultsMsg = document.getElementById('no-results-message');
        const shopPrompt = document.getElementById('shop-prompt');

        const hasActiveFilters = document.querySelectorAll('.filter-category:checked').length > 0;

        if (!hasActiveFilters) {
            shopPrompt.classList.remove('hidden');
            servicesSection.classList.add('hidden');
            productsSection.classList.add('hidden');
            noResultsMsg.classList.add('hidden');
            return;
        }
        shopPrompt.classList.add('hidden');
        
        const services = items.filter(item => item.type === 'service');
        const products = items.filter(item => item.type === 'product');

        servicesSection.classList.toggle('hidden', services.length === 0);
        servicesContainer.innerHTML = services.map(createServiceCard).join('');

        productsSection.classList.toggle('hidden', products.length === 0);
        productsContainer.innerHTML = products.map(p => createProductCard(p, false)).join('');

        noResultsMsg.classList.toggle('hidden', items.length > 0);
    }
    
    function renderFeaturedProducts() {
        const container = document.getElementById('featured-products');
        if (!container) return;
        const featured = allItems.filter(p => p.type === 'product' && p.featured);
        container.innerHTML = featured.map(p => createProductCard(p, true)).join('');
    }

    function renderFilters() {
        const categories = Object.keys(data);
        const container = document.getElementById('filters-categories-desktop');
        if(container) {
            container.innerHTML = categories.map(category => `<label class="custom-checkbox flex items-center"><input type="checkbox" value="${category}" class="filter-category"><span class="checkmark"></span><span class="ml-2">${category}</span></label>`).join('');
        }
    }

    function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('#filters-categories-desktop .filter-category:checked')).map(cb => cb.value);
        if (selectedCategories.length === 0) {
            renderFilteredResults([]);
            return;
        }
        let filteredItems = allItems.filter(item => selectedCategories.includes(item.category));
        renderFilteredResults(filteredItems);
    }

    function updateCartUI() {
        localStorage.setItem('cart', JSON.stringify(cart));
        const cartItemsContainer = document.getElementById('cart-items');
        const cartCountEl = document.getElementById('cart-count');
        const cartTotalPriceEl = document.getElementById('cart-total-price');
        const cartEmptyMsg = document.getElementById('cart-empty-message');
        const checkoutBtn = document.getElementById('checkout-btn');
        cartItemsContainer.innerHTML = '';
        let total = 0;
        if (cart.length === 0) {
            cartEmptyMsg.classList.remove('hidden');
            checkoutBtn.disabled = true;
            checkoutBtn.classList.add('opacity-50');
        } else {
            cartEmptyMsg.classList.add('hidden');
            checkoutBtn.disabled = false;
            checkoutBtn.classList.remove('opacity-50');
            cart.forEach(item => {
                total += item.price * item.quantity;
                cartItemsContainer.innerHTML += `<div class="flex justify-between items-center"><p>${item.name} - $${item.price.toFixed(2)} x ${item.quantity}</p><button class="remove-from-cart-btn text-red-500 font-bold" data-product-id="${item.id}">X</button></div>`;
            });
        }
        cartCountEl.textContent = cart.reduce((sum, item) => sum + item.quantity, 0);
        cartTotalPriceEl.textContent = `$${total.toFixed(2)}`;
    }

    function addToCart(productId) {
        const productToAdd = allItems.find(p => p.id == productId && p.type === 'product');
        if (!productToAdd) return;
        const cartItem = cart.find(item => item.id == productId);
        if (cartItem) {
            cartItem.quantity++;
        } else {
            cart.push({ ...productToAdd, quantity: 1 });
        }
        updateCartUI();
    }
    
    renderFilters();
    renderFeaturedProducts();
    applyFilters();
    updateCartUI();

    document.querySelectorAll('.filter-category').forEach(el => el.addEventListener('change', applyFilters));

    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', e => {
            e.preventDefault();
            const category = card.dataset.category;
            document.querySelectorAll('.filter-category').forEach(cb => { cb.checked = cb.value === category; });
            applyFilters();
            document.getElementById('shop-page').scrollIntoView({ behavior: 'smooth' });
        });
    });

    document.body.addEventListener('click', e => {
        if (e.target.closest('.add-to-cart-btn')) {
            addToCart(e.target.closest('.add-to-cart-btn').dataset.productId);
        }
        if (e.target.closest('.remove-from-cart-btn')) {
            cart = cart.filter(item => item.id != e.target.closest('.remove-from-cart-btn').dataset.productId);
            updateCartUI();
        }
        if (e.target.closest('.reserve-appointment-btn')) {
            const serviceName = e.target.closest('.reserve-appointment-btn').dataset.serviceName;
            document.getElementById('appointment-service-name').value = serviceName;
            document.getElementById('appointment-modal').classList.remove('hidden');
        }
    });

    new Swiper('.categories-swiper', { loop: true, slidesPerView: 1.5, spaceBetween: 20, navigation: { nextEl: '.categories-swiper .swiper-button-next', prevEl: '.categories-swiper .swiper-button-prev' }, pagination: { el: '.categories-swiper .swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2.5, spaceBetween: 30 }, 1024: { slidesPerView: 3.5, spaceBetween: 40 } } });
    new Swiper('.products-swiper', { loop: true, slidesPerView: 1.2, spaceBetween: 15, navigation: { nextEl: '.products-swiper .swiper-button-next', prevEl: '.products-swiper .swiper-button-prev' }, pagination: { el: '.products-swiper .swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2.5, spaceBetween: 30 }, 1024: { slidesPerView: 3, spaceBetween: 40 } } });
    
    document.getElementById('menu-toggle').addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('hidden'));
    
    const cartModal = document.getElementById('cart-modal');
    document.getElementById('cart-toggle').addEventListener('click', () => cartModal.classList.remove('hidden'));
    document.getElementById('cart-close-btn').addEventListener('click', () => cartModal.classList.add('hidden'));
    document.getElementById('empty-cart-btn').addEventListener('click', () => { cart = []; updateCartUI(); });

    const checkoutSection = document.getElementById('checkout-section');
    document.getElementById('checkout-btn').addEventListener('click', () => {
        cartModal.classList.add('hidden');
        checkoutSection.classList.remove('hidden');
        document.getElementById('transfer-total').textContent = document.getElementById('cart-total-price').textContent;
    });
    document.getElementById('back-to-shop-btn').addEventListener('click', () => checkoutSection.classList.add('hidden'));
    document.getElementById('pay-transfer-btn').addEventListener('click', () => document.getElementById('transfer-details-section').classList.remove('hidden'));

    const orderConfirmModal = document.getElementById('order-confirm-modal');
    document.getElementById('transfer-done-btn').addEventListener('click', () => {
        checkoutSection.classList.add('hidden');
        orderConfirmModal.classList.remove('hidden');
        cart = [];
        updateCartUI();
    });
    document.getElementById('confirm-modal-close-btn').addEventListener('click', () => orderConfirmModal.classList.add('hidden'));

    const appointmentModal = document.getElementById('appointment-modal');
    document.getElementById('appointment-close-btn').addEventListener('click', () => appointmentModal.classList.add('hidden'));
    document.getElementById('appointment-form').addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Gracias! Tu solicitud de cita ha sido enviada.');
        document.getElementById('appointment-form').reset();
        appointmentModal.classList.add('hidden');
    });

});
