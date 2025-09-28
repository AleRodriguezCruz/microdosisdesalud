document.addEventListener('DOMContentLoaded', () => {

    // --- BASE DE DATOS DE PRODUCTOS Y SERVICIOS ---
    const data = {

"Productos Destacados": {
    products: [
        { type: 'product', id: 101, name: "TOTAL BEAUTY", price: 55.00, image: 'https://youmatter.mx/cdn/shop/files/Total_Beauty_Choco_Cacahuate.webp?v=1756515869&width=1100', description: "Colágeno Hidrolizado con Biotina y Ácido Hialurónico.", featured: true },
        { type: 'product', id: 102, name: "YIELPI", price: 60.00, image: 'https://youmatter.mx/cdn/shop/files/CHOCOMENTA.jpg?v=1758153793&width=1100', description: "Proteína de Suero de Leche con Probióticos y Prebióticos.", featured: false },
        { type: 'product', id: 103, name: "DESOL K", price: 48.00, image: 'https://youmatter.mx/cdn/shop/files/Desol_K_120_c6350e93-6a9c-4869-95e5-f538350dd20f.webp?v=1753128713&width=1100', description: "Vitamina D3 y Vitamina K2 (MK-7) para salud ósea.", featured: true },
        { type: 'product', id: 104, name: "Colágeno UP", price: 45.00, image: 'https://cloudinary.images-iherb.com/image/upload/f_auto,q_auto:eco/images/cgn/cgn01032/v/273.jpg', description: "Colágeno Marino con Ácido Hialurónico y Vitamina C.", featured: true },
        { type: 'product', id: 105, name: "Magno Complex", price: 499.00, image: 'https://youmatter.mx/cdn/shop/files/2b466b3e638e4e1e848454e9ea50048a_22012025064332_f2edc9c2-1010-4a12-9fb2-8d410601ee44.jpg?crop=center&height=950&v=1753827017&width=950', description: "Bisglicinato de Magnesio Quelado para relajación y descanso.", featured: true },
        { type: 'product', id: 106, name: "Total Baby Lactantes", price: 730.00, image: 'https://youmatter.mx/cdn/shop/files/Total_-_Baby_Lactantes__1.jpg?crop=center&height=1100&v=1757110032&width=1100', description: "Probióticos especializados para el bienestar de los lactantes.", featured: true }
    ]
},
// --- FIN DEL FRAGMENTO ---
// --- FIN DEL FRAGMENTO ---
        "Infancia": {
            services: [
                { type: 'service', name: "Consulta Pediátrica General", description: "Atención médica integral para niños y niñas.", image: "infancia/Pediatria.jpg" },
                { type: 'service', name: "Control de Niño Sano", description: "Seguimiento del crecimiento y desarrollo saludable.", image: "infancia/niño.jpg" },
                { type: 'service', name: "Peso y Talla", description: "Evaluación y asesoría nutricional para un desarrollo óptimo.", image: "infancia/tallaypeso.jpg" },
                { type: 'service', name: "Alergias", description: "Diagnóstico y tratamiento de alergias comunes en la infancia.", image: "infancia/alergias.jpg" },
                { type: 'service', name: "Dermatología Pediátrica", description: "Cuidado especializado para la piel delicada de los niños.", image: "infancia/dermatologia.jpg" }
            ],
            products: [
                { type: 'product', id: 10, name: "Multivitamínico Infantil", price: 25.00, image: 'https://youmatter.mx/cdn/shop/files/CHOCOMENTA.jpg?crop=center&height=1100&v=1758153793&width=1100', description: "Refuerzo divertido y delicioso.", featured: false },
                { type: 'product', id: 12, name: "Crema Corporal Hipoalergénica", price: 18.00, image: 'https://youmatter.mx/cdn/shop/files/Magno_Complex_160_b790ecaf-f4b0-4895-84ba-1b619dd810c9.webp?crop=center&height=1100&v=1753128762&width=1100', description: "Hidratación suave para pieles sensibles." },
                { type: 'product', id: 13, name: "Shampoo Suave para Bebé", price: 16.50, image: 'https://images.unsplash.com/photo-1599462653991-6a41eff238a3?q=80&w=800&auto=format&fit=crop', description: "Fórmula sin lágrimas que limpia y protege." },
                { type: 'product', id: 14, name: "Jabón de Avena y Miel", price: 9.00, image: 'https://images.unsplash.com/photo-1610422558296-7a8c8a179951?q=80&w=800&auto=format&fit=crop', description: "Limpieza natural que calma la piel." }
            ]
        },
        "Pubertad y Adolescencia": {
            services: [
                { type: 'service', name: "Consulta sobre Menstruación", description: "Orientación y manejo del ciclo menstrual.", image: "pubertad/mestruacion.jpg" },
                { type: 'service', name: "Tratamiento para SOP", description: "Manejo integral del Síndrome de Ovario Poliquístico.", image: "pubertad/SOP.jpg" },
                { type: 'service', name: "Consulta General Individual", description: "Diagnostico y tratamiento de enfermedades propias de la mujer.", image: "pubertad/consulta.jpg" },
                { type: 'service', name: "Control de Peso y Talla", description: "Asesoría nutricional para un desarrollo saludable.", image: "pubertad/talla.jpg" },
                { type: 'service', name: "Dermatología (Acné)", description: "Tratamientos personalizados para el control del acné.", image: "pubertad/dermatologia.jpg" },
                { type: 'service', name: "Salud Sexual y ETS", description: "Prevención y orientación sobre enfermedades de transmisión sexual.", image: "pubertad/ets.jpg" },
                { type: 'service', name: "Trastornos Ginecológicos", description: "Diagnóstico y tratamiento de condiciones específicas.", image: "pubertad/ginecologia.jpg" },
                { type: 'service', name: "Detección de Riesgos", description: "Apoyo para identificar y manejar comportamientos de riesgo.", image: "pubertad/deteccionderiesgo.jpg" }
            ],
            products: [
                { type: 'product', id: 20, name: "Kit Primer Periodo", price: 45.00, image: 'https://images.unsplash.com/photo-1604781444060-123f157c11e5?q=80&w=800&auto=format&fit=crop', description: "Todo lo necesario para afrontar la menarquia.", featured: false },
                { type: 'product', id: 21, name: "Limpiador Facial Anti-acné", price: 22.00, image: 'https://images.unsplash.com/photo-1629198735660-e39ea93f5c14?q=80&w=800&auto=format&fit=crop', description: "Fórmula suave para pieles jóvenes." }
            ]
        },
        "Edad Reproductiva": {
            services: [
                { type: 'service', name: "Consulta Ginecológica ", description: "Tu revisión es clave. Realizamos Papanicolau, exploración y resolvemos tus dudas para cuidar tu bienestar integral.", image: "" },
                { type: 'service', name: "Salud Sexual y ETS", description: "Orientación confidencial sobre salud sexual, métodos de prevención, diagnóstico y tratamiento de ETS.", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop" },
                { type: 'service', name: "Trastornos Ginecológicos", description: "Diagnosticamos y tratamos condiciones como miomas, endometriosis o irregularidades menstruales.", image: "https://images.unsplash.com/photo-1588776814546-da631a357412?q=80&w=800&auto=format&fit=crop" },
                { type: 'service', name: "Control de Sobrepeso y Obesidad", description: "Desarrollamos un plan integral y personalizado para ayudarte a alcanzar un peso saludable y mejorar tu calidad de vida.", image: "https://images.unsplash.com/photo-1543362906-acfc16c67564?q=80&w=800&auto=format&fit=crop" },
                { type: 'service', name: "Asesoría en Anticoncepción", description: "Te ayudamos a elegir el método anticonceptivo que mejor se adapte a tu cuerpo, estilo de vida y planes a futuro.", image: "https://images.unsplash.com/photo-1584515933487-779824d2793b?q=80&w=800&auto=format&fit=crop" },
                { type: 'service', name: "Consulta Preconcepcional", description: "Preparamos tu cuerpo para un embarazo saludable con asesoría sobre nutrición, suplementos y cuidados previos.", image: "https://images.unsplash.com/photo-1505453976333-5b235a681358?q=80&w=800&auto=format&fit=crop" },
                { type: 'service', name: "Tratamiento para SOP", description: "Manejo integral del Síndrome de Ovario Poliquístico para controlar síntomas y mejorar tu salud hormonal.", image: "https://images.unsplash.com/photo-1622254843325-e490a0a945c9?q=80&w=800&auto=format&fit=crop" }
            ],
            products: [{ type: 'product', id: 30, name: "Ácido Fólico", price: 15.00, image: 'Total_Beauty_Choco_Cacahuate.webp', description: "Esencial para la planificación del embarazo.", featured: false }]
        },
        "Embarazo": {
            services: [{ type: 'service', name: "Control Prenatal Mensual", description: "Seguimiento para un embarazo saludable.", image: "https://images.unsplash.com/photo-1584988223218-975dd76503f1?q=80&w=800&auto=format&fit=crop" }],
            products: [{ type: 'product', id: 40, name: "Vitaminas Prenatales", price: 35.00, image: 'https://images.unsplash.com/photo-1584308666744-8480404b65ae?q=80&w=800&auto=format&fit=crop', description: "Nutrientes para el desarrollo del bebé.", featured: false }]
        },
        "Climaterio y Menopausia": {
            services: [{ type: 'service', name: "Terapia de Reemplazo Hormonal", description: "Asesoría sobre opciones naturales y bioidénticas.", image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=800&auto=format&fit=crop" }],
            products: [{ type: 'product', id: 50, name: "Suplemento con Isoflavonas", price: 38.00, image: 'https://images.unsplash.com/photo-1627485937980-5427b0a3c27a?q=80&w=800&auto=format&fit=crop', description: "Ayuda a aliviar los síntomas de la menopausia.", featured: false }]
        }
    };

    // --- VARIABLES GLOBALES ---
    let servicesSwiper = null;
    let productsSwiper = null;
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const allItems = Object.entries(data).flatMap(([category, content]) => [
        ...(content.products || []).map(p => ({ ...p, category })),
        ...(content.services || []).map(s => ({ ...s, category }))
    ]);

    // --- FUNCIÓN DE UTILIDAD ---
    function debounce(func, delay = 250) {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                func.apply(this, args);
            }, delay);
        };
    }

    // --- FUNCIONES PARA CREAR TARJETAS ---
    function createProductCard(product, { isCarousel = false, isFeatured = false } = {}) {
        // Unificamos el tamaño para consistencia, destacados un poco más grandes
        const imageHeightClass = isFeatured ? 'h-44' : 'h-36';

        const cardContent = `
            <div class="product-card">
                <img src="${product.image}" alt="${product.name}" class="${imageHeightClass} w-full object-cover">
                <div class="product-card-content">
                    <h3 class="text-base font-bold text-gray-800 line-clamp-2">${product.name}</h3>
                    <p class="text-sm text-gray-600 my-2 line-clamp-2 flex-grow">${product.description}</p>
                    <div class="flex justify-between items-center mt-2">
                        <span class="text-lg font-semibold text-gray-900">$${product.price.toFixed(2)}</span>
                        <button class="add-to-cart-btn" data-product-id="${product.id}">Agregar</button>
                    </div>
                </div>
            </div>`;
        return isCarousel ? `<div class="swiper-slide">${cardContent}</div>` : cardContent;
    }

    function createServiceCard(service, isCarousel) {
        const cardContent = `
            <div class="service-card">
                <img src="${service.image}" alt="${service.name}" class="service-image">
                <h3 class="service-title">${service.name}</h3>
                <p class="service-description line-clamp-2">${service.description}</p>
                <button class="service-button reserve-appointment-btn mt-auto" data-service-name="${service.name}">Reservar Cita</button>
            </div>`;
        return isCarousel ? `<div class="swiper-slide">${cardContent}</div>` : cardContent;
    }

    // --- RENDERIZADO CONDICIONAL (CARRUSEL O CUADRÍCULA) ---
    function renderFilteredResults(items) {
        const servicesContainer = document.getElementById('shop-services');
        const productsContainer = document.getElementById('shop-products-grid');
        const servicesSection = document.getElementById('services-section');
        const productsSection = document.getElementById('products-section');
        const noResultsMsg = document.getElementById('no-results-message');
        const shopPrompt = document.getElementById('shop-prompt');

        if (servicesSwiper) { servicesSwiper.destroy(true, true); servicesSwiper = null; }
        if (productsSwiper) { productsSwiper.destroy(true, true); productsSwiper = null; }

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

        const isMobileOrTablet = window.matchMedia("(max-width: 1023px)").matches;

        servicesSection.classList.toggle('hidden', services.length === 0);
        if (services.length > 0) {
            if (isMobileOrTablet) {
                servicesContainer.className = 'shop-carousel swiper';
                servicesContainer.innerHTML = `<div class="swiper-wrapper">${services.map(service => createServiceCard(service, true)).join('')}</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>`;
            } else {
                servicesContainer.className = 'shop-grid';
                servicesContainer.innerHTML = services.map(service => createServiceCard(service, false)).join('');
            }
        }

        productsSection.classList.toggle('hidden', products.length === 0);
        if (products.length > 0) {
            if (isMobileOrTablet) {
                productsContainer.className = 'shop-carousel swiper';
                productsContainer.innerHTML = `<div class="swiper-wrapper">${products.map(product => createProductCard(product, { isCarousel: true, isFeatured: false })).join('')}</div><div class="swiper-pagination"></div><div class="swiper-button-next"></div><div class="swiper-button-prev"></div>`;
            } else {
                productsContainer.className = 'shop-grid';
                productsContainer.innerHTML = products.map(product => createProductCard(product, { isCarousel: false, isFeatured: false })).join('');
            }
        }

        noResultsMsg.classList.toggle('hidden', items.length > 0);

        if (isMobileOrTablet) {
            const swiperOptions = {
                loop: false,
                spaceBetween: 12,
                slidesPerView: 1.5,
                pagination: { el: '.swiper-pagination', clickable: true },
                navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
                breakpoints: {
                    768: { slidesPerView: 2.5, spaceBetween: 20 }
                }
            };
            if (services.length > 0) { servicesSwiper = new Swiper(servicesContainer, swiperOptions); }
            if (products.length > 0) { productsSwiper = new Swiper(productsContainer, swiperOptions); }
        }
    }
    
    // --- OTRAS FUNCIONES DE RENDERIZADO ---
    function renderFeaturedProducts() {
        const container = document.getElementById('featured-products');
        if (!container) return;
        const featured = allItems.filter(p => p.type === 'product' && p.featured);
        container.innerHTML = featured.map(p => createProductCard(p, { isCarousel: true, isFeatured: true })).join('');
    }

    function renderFilters() {
        const categories = Object.keys(data);
        const container = document.getElementById('filters-categories-desktop');
        if(container) {
            container.innerHTML = categories.map(category => `<label class="custom-checkbox flex items-center"><input type="checkbox" value="${category}" class="filter-category"><span class="checkmark"></span><span class="ml-2">${category}</span></label>`).join('');
        }
    }

    // --- FUNCIÓN PRINCIPAL DE FILTRADO ---
    function applyFilters() {
        const selectedCategories = Array.from(document.querySelectorAll('.filter-category:checked')).map(cb => cb.value);
        let filteredItems = allItems.filter(item => selectedCategories.includes(item.category));
        renderFilteredResults(filteredItems);
    }

    // --- FUNCIONES DEL CARRITO ---
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
                cartItemsContainer.innerHTML += `<div class="flex justify-between items-center py-2 border-b"><p class="text-sm">${item.name} <br> <span class="text-xs text-gray-500">$${item.price.toFixed(2)} x ${item.quantity}</span></p><button class="remove-from-cart-btn text-red-500 font-bold" data-product-id="${item.id}">X</button></div>`;
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
    
    // --- INICIALIZACIÓN Y EVENT LISTENERS ---
    
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

    // Carruseles estáticos (siempre son carruseles)
    new Swiper('.categories-swiper', { 
        loop: true, 
        slidesPerView: 1.5,
        spaceBetween: 15, 
        navigation: { nextEl: '.categories-swiper .swiper-button-next', prevEl: '.categories-swiper .swiper-button-prev' }, 
        pagination: { el: '.categories-swiper .swiper-pagination', clickable: true }, 
        breakpoints: { 
            640: { slidesPerView: 2.5, spaceBetween: 20 }, 
            1024: { slidesPerView: 4, spaceBetween: 30 }
        } 
    });

    new Swiper('.products-swiper', { 
        loop: true, 
        slidesPerView: 1.5,
        spaceBetween: 15, 
        navigation: { nextEl: '.products-swiper .swiper-button-next', prevEl: '.products-swiper .swiper-button-prev' }, 
        pagination: { el: '.products-swiper .swiper-pagination', clickable: true }, 
        breakpoints: { 
            640: { slidesPerView: 2.5, spaceBetween: 20 }, 
            1024: { slidesPerView: 4, spaceBetween: 30 }
        } 
    });
    
    // Manejo de Modales y Menús
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
    
    // Listener para redimensionar la ventana y adaptar el layout
    window.addEventListener('resize', debounce(applyFilters));
});







