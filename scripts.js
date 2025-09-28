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
                { type: 'service', name: "Control de Niño Sano", description: "Seguimiento del crecimiento y desarrollo saludable.", image: "infancia/niño.jpg" },
            ],
            products: [
                { type: 'product', id: 10, name: "Multivitamínico Infantil", price: 25.00, image: 'https://youmatter.mx/cdn/shop/files/CHOCOMENTA.jpg?crop=center&height=1100&v=1758153793&width=1100', description: "Refuerzo divertido y delicioso." },
                { type: 'product', id: 12, name: "Crema Corporal Hipoalergénica", price: 18.00, image: 'https://youmatter.mx/cdn/shop/files/Magno_Complex_160_b790ecaf-f4b0-4895-84ba-1b619dd810c9.webp?crop=center&height=1100&v=1753128762&width=1100', description: "Hidratación suave para pieles sensibles." },
            ]
        },
        "Pubertad y Adolescencia": {
            services: [
                { type: 'service', name: "Consulta sobre Menstruación", description: "Orientación y manejo del ciclo menstrual.", image: "pubertad/mestruacion.jpg" },
            ],
            products: [
                { type: 'product', id: 21, name: "Limpiador Facial Anti-acné", price: 22.00, image: 'https://images.unsplash.com/photo-1629198735660-e39ea93f5c14?q=80&w=800&auto=format&fit=crop', description: "Fórmula suave para pieles jóvenes." }
            ]
        },
        "Edad Reproductiva": {
            services: [
                { type: 'service', name: "Consulta Ginecológica", description: "Tu revisión es clave para cuidar tu bienestar integral.", image: "ruta/a/imagen_ginecologica.jpg", default: true },
            ],
            products: [{ type: 'product', id: 30, name: "Ácido Fólico", price: 15.00, image: 'Total_Beauty_Choco_Cacahuate.webp', description: "Esencial para la planificación del embarazo." }]
        },
        // ... y el resto de tus categorías
    };

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const allItems = Object.entries(data).flatMap(([category, content]) => [
        ...(content.products || []).map(p => ({ ...p, category })),
        ...(content.services || []).map(s => ({ ...s, category }))
    ]);

    const createProductCard = (product) => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}" class="w-full h-44 object-cover object-center">
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
    
    // --- LÓGICA DE FILTROS RESTAURADA ---
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
            renderDefaultServices(); // Muestra los servicios por defecto si no hay filtros
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

    // --- LÓGICA DEL CARRITO ---
    const addToCart = (productId) => {
        const productToAdd = allItems.find(item => item.id === parseInt(productId));
        if (productToAdd) {
            cart.push(productToAdd);
            updateCartUI();
        }
    };

    const updateCartUI = () => {
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('cart-count').textContent = cart.length;
    };
    
    // --- INICIALIZACIÓN DE LA PÁGINA ---
    const initPage = () => {
        const featuredProductsContainer = document.getElementById('featured-products');
        if (featuredProductsContainer) {
            const featuredProducts = allItems.filter(item => item.featured);
            featuredProductsContainer.innerHTML = featuredProducts.map(p => `<div class="swiper-slide">${createProductCard(p)}</div>`).join('');
        }
        
        const filtersContainer = document.getElementById('filters-categories-desktop');
        if (filtersContainer) {
            const categories = Object.keys(data);
            filtersContainer.innerHTML = categories.map(cat => `
                <label class="flex items-center space-x-2 cursor-pointer">
                    <input type="checkbox" class="filter-category" value="${cat}">
                    <span>${cat}</span>
                </label>
            `).join('');
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
    });

    // --- INICIALIZACIÓN DE SWIPERS ---
    new Swiper('.categories-swiper', { loop: true, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, pagination: { el: '.swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } } });
    new Swiper('.products-swiper', { loop: true, slidesPerView: 1.5, spaceBetween: 15, navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }, pagination: { el: '.swiper-pagination', clickable: true }, breakpoints: { 640: { slidesPerView: 2.5 }, 1024: { slidesPerView: 4 } } });

    initPage();
});
