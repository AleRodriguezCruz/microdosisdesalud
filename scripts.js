document.addEventListener('DOMContentLoaded', () => {

    // --- 1. BASE DE DATOS DE PRODUCTOS Y SERVICIOS ---
    const data = {
        "Productos Destacados": {
            products: [
                { type: 'product', id: 101, name: "TOTAL BEAUTY", price: 55.00, image: 'https://youmatter.mx/cdn/shop/files/Total_Beauty_Choco_Cacahuate.webp?v=1756515869&width=1100', description: "Colágeno Hidrolizado con Biotina y Ácido Hialurónico.", featured: true },
                { type: 'product', id: 104, name: "Colágeno UP", price: 45.00, image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01032/v/273.jpg', description: "Colágeno Marino con Ácido Hialurónico y Vitamina C.", featured: true },
                { type: 'product', id: 105, name: "Magno Complex", price: 499.00, image: 'https://youmatter.mx/cdn/shop/files/2b466b3e638e4e1e848454e9ea50048a_22012025064332_f2edc9c2-1010-4a12-9fb2-8d410601ee44.jpg?crop=center&height=950&v=1753827017&width=950', description: "Bisglicinato de Magnesio Quelado para relajación y descanso.", featured: true },
                { type: 'product', id: 106, name: "Total Baby Lactantes", price: 730.00, image: 'https://youmatter.mx/cdn/shop/files/Total_-_Baby_Lactantes__1.jpg?crop=center&height=1100&v=1757110032&width=1100', description: "Probióticos especializados para el bienestar de los lactantes.", featured: true },
                { type: 'product', id: 109, name: "SOP Complex", price: 757.00, image: 'https://youmatter.mx/cdn/shop/files/SOP_Complex.webp?crop=center&height=1100&v=1753130877&width=1100', description: "Myo-Inositol y D-Chiro para balance hormonal.", featured: true },
                { type: 'product', id: 110, name: "Diaria Fem (3 Pack)", price: 1400.00, image: 'https://youmatter.mx/cdn/shop/files/3pack_60_8bb59738-5514-4417-b649-a703e4206bd1.jpg?crop=center&height=1100&v=1753125971&width=1100', description: "Multivitamínico y Multimineral para Mujer, suministro trimestral.", featured: true }
            ]
        },
        "Infancia": {
            services: [
                { type: 'service', name: "Consulta Pediátrica General", description: "Atención médica integral para niños y niñas.", image: "infancia/Pediatria.jpg", default: true },
            ],
            products: [
                { type: 'product', id: 10, name: "Multivitamínico Infantil", price: 25.00, image: 'https://youmatter.mx/cdn/shop/files/CHOCOMENTA.jpg?crop=center&height=1100&v=1758153793&width=1100', description: "Refuerzo divertido y delicioso." },
            ]
        },
        "Edad Reproductiva": {
            services: [
                { type: 'service', name: "Consulta Ginecológica", description: "Tu revisión es clave para cuidar tu bienestar integral.", image: "img/ginecologia.jpg", default: true },
            ],
        },
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const allItems = Object.entries(data).flatMap(([category, content]) => [
        ...(content.products || []).map(p => ({ ...p, category })),
        ...(content.services || []).map(s => ({ ...s, category }))
    ]);

    const createProductCard = (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="w-full h-44 object-contain p-2">
            <div class="product-card-content">
                <h3 class="font-bold line-clamp-2">${product.name}</h3>
                <p class="text-sm text-gray-600 my-2 line-clamp-2 flex-grow">${product.description}</p>
                <div class="flex justify-between items-center mt-auto">
                    <span class="text-lg font-semibold text-gray-900">$${product.price.toFixed(2)}</span>
                    <button class="add-to-cart-btn" data-product-id="${product.id}">Agregar</button>
                </div>
            </div>
        </div>
    `;

    const createServiceCard = (service) => `
        <div class="service-card">
            <img src="${service.image}" alt="${service.name}" class="service-image">
            <h3 class="service-title">${service.name}</h3>
            <p class="service-description line-clamp-2">${service.description}</p>
            <button class="service-button reserve-appointment-btn mt-auto" data-service-name="${service.name}">Reservar Cita</button>
        </div>
    `;

    const renderFilteredResults = (items) => {
        const servicesContainer = document.getElementById('shop-services');
        const productsContainer = document.getElementById('shop-products-grid');
        const servicesSection = document.getElementById('services-section');
        const productsSection = document.getElementById('products-section');
        const noResultsMsg = document.getElementById('no-results-message');
        const shopPrompt = document.getElementById('shop-prompt');

        shopPrompt.classList.add('hidden');
        const services = items.filter(item => item.type === 'service');
        const products = items.filter(item => item.type === 'product');

        servicesSection.classList.toggle('hidden', services.length === 0);
        productsSection.classList.toggle('hidden', products.length === 0);
        noResultsMsg.classList.toggle('hidden', items.length > 0);

        servicesContainer.innerHTML = services.map(createServiceCard).join('');
        productsContainer.innerHTML = products.map(createProductCard).join('');
    };

    const applyFilters = () => {
        const checkedCategories = [...document.querySelectorAll('.filter-category:checked')].map(el => el.value);
        if (checkedCategories.length === 0) {
            renderDefaultServices();
            return;
        }
        const filteredItems = allItems.filter(item => checkedCategories.includes(item.category));
        renderFilteredResults(filteredItems);
    };

    const renderDefaultServices = () => {
        const defaultServices = allItems.filter(item => item.type === 'service' && item.default);
        const servicesContainer = document.getElementById('shop-services');
        const servicesSection = document.getElementById('services-section');
        const productsSection = document.getElementById('products-section');
        const shopPrompt = document.getElementById('shop-prompt');
        
        shopPrompt.classList.add('hidden');
        productsSection.classList.add('hidden');
        servicesSection.classList.remove('hidden');
        servicesContainer.innerHTML = defaultServices.map(createServiceCard).join('');
    };

    const addToCart = (productId) => {
        const productToAdd = allItems.find(item => item.id === parseInt(productId));
        if (productToAdd) {
            cart.push(productToAdd);
            updateCartUI();
        }
    };

    const updateCartUI = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems();
        
        const cartCount = document.getElementById('cart-count');
        cartCount.textContent = cart.length;
        cartCount.classList.toggle('hidden', cart.length === 0);

        const totalPrice = cart.reduce((total, item) => total + item.price, 0);
        document.getElementById('cart-total-price').textContent = `$${totalPrice.toFixed(2)}`;
    };

    const renderCartItems = () => {
        const cartItemsContainer = document.getElementById('cart-items');
        const emptyCartMessage = document.getElementById('cart-empty-message');
        
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '';
            emptyCartMessage.classList.remove('hidden');
            return;
        }

        emptyCartMessage.classList.add('hidden');
        cartItemsContainer.innerHTML = cart.map(item => `
            <div class="flex justify-between items-center border-b pb-2">
                <div>
                    <h4 class="font-semibold">${item.name}</h4>
                    <p class="text-sm text-gray-500">$${item.price.toFixed(2)}</p>
                </div>
            </div>
        `).join('');
    };
    
    const initPage = () => {
        const featuredProductsContainer = document.getElementById('featured-products');
        if (featuredProductsContainer) {
            const featuredProducts = allItems.filter(item => item.featured);
            featuredProductsContainer.innerHTML = featuredProducts.map(p => `<div class="swiper-slide">${createProductCard(p)}</div>`).join('');
        }
        
        const filtersContainer = document.getElementById('filters-categories-desktop');
        if (filtersContainer) {
            const categories = Object.keys(data);
            filtersContainer.innerHTML = categories.map(cat => `<label class="flex items-center space-x-2 cursor-pointer"><input type="checkbox" class="filter-category" value="${cat}"><span>${cat}</span></label>`).join('');
            filtersContainer.addEventListener('change', applyFilters);
        }
        
        renderDefaultServices();
        updateCartUI();
    };

    // --- MANEJO DE EVENTOS ---
    document.addEventListener('click', (e) => {
        if (e.target.closest('.add-to-cart-btn')) {
            const productId = e.target.closest('.add-to-cart-btn').dataset.productId;
            addToCart(productId);
        }
        if (e.target.closest('.reserve-appointment-btn')) {
            const serviceName = e.target.closest('.reserve-appointment-btn').dataset.serviceName;
            document.getElementById('appointment-service-name').value = serviceName;
            document.getElementById('appointment-modal').classList.remove('hidden');
        }
    });

    // --- MANEJO COMPLETO DE MODALES Y MENÚS (RESTAURADO) ---
    document.getElementById('menu-toggle').addEventListener('click', () => document.getElementById('mobile-menu').classList.toggle('hidden'));
    
    // Carrito
    const cartModal = document.getElementById('cart-modal');
    document.getElementById('cart-toggle').addEventListener('click', () => cartModal.classList.remove('hidden'));
    document.getElementById('cart-close-btn').addEventListener('click', () => cartModal.classList.add('hidden'));
    document.getElementById('empty-cart-btn').addEventListener('click', () => {
        cart = [];
        updateCartUI();
    });

    // Checkout
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
        cart = []; // Vacía el carrito después de confirmar el pago
        updateCartUI();
    });
    document.getElementById('confirm-modal-close-btn').addEventListener('click', () => orderConfirmModal.classList.add('hidden'));

    // Citas
    const appointmentModal = document.getElementById('appointment-modal');
    document.getElementById('appointment-close-btn').addEventListener('click', () => appointmentModal.classList.add('hidden'));
    document.getElementById('appointment-form').addEventListener('submit', e => {
        e.preventDefault();
        alert('¡Gracias! Tu solicitud de cita ha sido enviada.');
        document.getElementById('appointment-form').reset();
        appointmentModal.classList.add('hidden');
    });

    // Swipers
    new Swiper('.categories-swiper', { loop: true, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: '.categories-swiper .swiper-button-next', prevEl: '.categories-swiper .swiper-button-prev' }, pagination: { el: '.categories-swiper .swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } } });
    new Swiper('.products-swiper', { loop: true, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: '.products-swiper .swiper-button-next', prevEl: '.products-swiper .swiper-button-prev' }, pagination: { el: '.products-swiper .swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } } });

    initPage();
});
