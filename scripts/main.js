        // =========================================================================
        // Main JS
        // =========================================================================

        (function () {
            "use strict";

            // ============== UNIFIED DATA MODEL ==============
            const dishes = [
                {
                    id: 1,
                    name: "Winter Black Truffle",
                    tag: "Signature",
                    pairing: "Château-Chalon Vin Jaune",
                    desc: "• Périgord • celery root •",
                    price: 68,
                    img: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=700&q=80",
                    rating: 4.9,
                    old: 75,
                },
                {
                    id: 2,
                    name: "Wild Scallop",
                    tag: "Marine",
                    pairing: "Mosel Riesling Auslese",
                    desc: "• crisp sea beans • yuzu splash •",
                    price: 52,
                    img: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=700&q=80",
                    rating: 4.8,
                },
                {
                    id: 3,
                    name: "Aged Bresse Chicken",
                    tag: "Heritage",
                    pairing: "Arbois Pupillin Chardonnay",
                    desc: "• fresh wild morel • aged vin •",
                    price: 64,
                    img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=700&q=80",
                    rating: 4.9,
                    old: 70,
                },
                {
                    id: 4,
                    name: "42-Month Comté",
                    tag: "Dairy",
                    pairing: "Vin Jaune d'Arbois",
                    desc: "• buckwheat honey • black winter •",
                    price: 38,
                    img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=700&q=80",
                    rating: 4.7,
                },
                {
                    id: 5,
                    name: "Line-Caught Turbot",
                    tag: "Marine",
                    pairing: "Grand Cru Chablis",
                    desc: "Brittany ports • tarragon oil •",
                    price: 72,
                    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=700&q=80",
                    rating: 4.9,
                },
                {
                    id: 6,
                    name: "Venison Loin",
                    tag: "Game",
                    pairing: "Gevrey-Chambertin Burgundy",
                    desc: "• cracked juniper wood • roasted beet •",
                    price: 58,
                    img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=700&q=80",
                    rating: 4.8,
                },
                {
                    id: 7,
                    name: "Chocolate &amp; Black Garlic",
                    tag: "Dessert",
                    pairing: "Maury Vintage Rouge",
                    desc: "• organic Araguani • sea salt flakes •",
                    price: 26,
                    img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=700&q=80",
                    rating: 4.6,
                },
                {
                    id: 8,
                    name: "Citrus &amp; Bergamot Tart",
                    tag: "Dessert",
                    pairing: "Sauternes Premier Cru",
                    desc: "• Italian meringue • charred brûlée •",
                    price: 24,
                    img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=80",
                    rating: 4.7,
                },
            ];

            const experiences = [
                {
                    name: "Classic Tasting",
                    price: 295,
                    desc: "14 courses + non-alcoholic pairing",
                },
                {
                    name: "Extended Tasting",
                    price: 365,
                    desc: "17 courses + wine flight",
                },
                {
                    name: "Chef’s Table",
                    price: 475,
                    desc: "19 courses + full experience",
                },
            ];

            const menuItems = {
                first: [
                    {
                        id: 201,
                        name: "Oyster &amp; Apple",
                        price: 28,
                        desc: "Gillardeau oysters • green apple granite • lovage oil splash",
                        img: "https://images.unsplash.com/photo-1553621042-f6e147245754?w=300&q=80",
                    },
                    {
                        id: 202,
                        name: "Scallop Crudo",
                        price: 52,
                        desc: "Hand-dived deep scallops • wild sea beans • citrus yuzu kosho",
                        img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?w=300&q=80",
                    },
                    {
                        id: 203,
                        name: "Foie Gras Torchon",
                        price: 46,
                        desc: "Sauternes cured • organic quince mostarda • brioche slice",
                        img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=300&q=80",
                    },
                ],
                second: [
                    {
                        id: 204,
                        name: "Turbot &amp; Artichoke",
                        price: 72,
                        desc: "Rich barigoule sauce • organic saffron threads • wild lemon thyme",
                        img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=300&q=80",
                    },
                    {
                        id: 205,
                        name: "Venison Loin",
                        price: 58,
                        desc: "Smoked juniper wood finish • red beets • celeriac reduction",
                        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&q=80",
                    },
                    {
                        id: 206,
                        name: "Bresse Chicken",
                        price: 64,
                        desc: "Fontainebleau morels • aged vin jaune broth • sweet tarragon",
                        img: "https://images.unsplash.com/photo-1506084868230-bb9d95c24759?w=300&q=80",
                    },
                ],
                dessert: [
                    {
                        id: 207,
                        name: "Chocolate Noir",
                        price: 26,
                        desc: "Araguani 72% chocolate mousse • black garlic hints • coarse sea salt",
                        img: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=300&q=80",
                    },
                    {
                        id: 208,
                        name: "Citrus Tart",
                        price: 24,
                        desc: "Delicate bergamot cream • yuzu zest • brûléed Italian meringue",
                        img: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&q=80",
                    },
                    {
                        id: 209,
                        name: "Cheese Course",
                        price: 32,
                        desc: "Comté aged 42 months • raw Roquefort • seasonal pear compote",
                        img: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&q=80",
                    },
                ],
                wine: [
                    {
                        id: 210,
                        name: "Classic Pairing",
                        price: 165,
                        desc: "6 premium glasses curated from the Jura to Burgundy regions",
                        img: "https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?w=300&q=80",
                    },
                    {
                        id: 211,
                        name: "Rare Pairing",
                        price: 245,
                        desc: "8 highly unique reserve labels hand-plucked from our historical cellar",
                        img: "https://images.unsplash.com/photo-1506368083636-6defb67639a7?w=300&q=80",
                    },
                    {
                        id: 212,
                        name: "Non-Alcoholic Flow",
                        price: 95,
                        desc: "Tasting flow of 6 delicate home-brewed herbal infusions &amp; ferments",
                        img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?w=300&q=80",
                    },
                ],
            };

            const faqs = [
                {
                    q: "Do you accommodate dietary restrictions?",
                    a: "Yes. With 48 hours notice we can adapt the menu for vegetarian, pescatarian, gluten-free, and most common allergies.",
                },
                {
                    q: "Is there a dress code?",
                    a: "Smart casual. We welcome you comfortable but respectful of the dining space.",
                },
                {
                    q: "Can I bring my own wine?",
                    a: "We do not allow outside wine. Our private list is carefully curated and shifts weekly.",
                },
                {
                    q: "What is the cancellation policy?",
                    a: "Cancellations within 48 hours are charged €150 per person. No-shows are charged the full menu price.",
                },
            ];

            // ============== CART LOCAL STORAGE STORAGE SCATTER PROTECTION ==============
            const getCartStorageKey = () => {
                const pathIdentifier = window.location.pathname.replace(/[^a-zA-Z0-9]/g, "_");
                return `atelier28_cart_${pathIdentifier}`;
            };
            const cartStorageKey = getCartStorageKey();

            // ============== SECURE HTML SANITIZATION LAYER (XSS SHIELD) ==============
            const escapeHTML = (str) => {
                if (typeof str !== 'string') return str;
                const unescaped = str
                    .replace(/&amp;/g, '&')
                    .replace(/&lt;/g, '<')
                    .replace(/&gt;/g, '>')
                    .replace(/&quot;/g, '"')
                    .replace(/&#39;/g, "'");
                return unescaped.replace(/[&<>'"]/g, (tag) => {
                    const escapeMap = {
                        '&': '&amp;',
                        '<': '&lt;',
                        '>': '&gt;',
                        "'": '&#39;',
                        '"': '&quot;'
                    };
                    return escapeMap[tag] || tag;
                });
            };

            // ============== CENTRALIZED SYSTEM DATA REGISTRY ==============
            const Registry = {
                store: new Map(),
                initialize() {
                    dishes.forEach(item => this.store.set(item.id, { ...item }));
                    experiences.forEach((item, index) => {
                        const calculatedId = 100 + index;
                        this.store.set(calculatedId, {
                            id: calculatedId,
                            name: item.name,
                            price: item.price,
                            desc: item.desc,
                            img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=150&q=80"
                        });
                    });
                    Object.values(menuItems).flat().forEach(item => this.store.set(item.id, { ...item }));
                },
                get(id) {
                    return this.store.get(id) || null;
                }
            };

            // ============== TRANSACTIONAL STATE MANAGEMENT ==============
            const StateManager = {
                state: {
                    cart: {},
                    selectedTable: "window"
                },
                initialize() {
                    try {
                        const storedData = localStorage.getItem(cartStorageKey);
                        this.state.cart = storedData ? JSON.parse(storedData) : {};
                    } catch (err) {
                        console.warn("Storage integration restricted. Safe fallback state in memory activated.", err);
                        this.state.cart = {};
                    }
                },
                getCart() {
                    return this.state.cart;
                },
                getSelectedTable() {
                    return this.state.selectedTable;
                },
                setSelectedTable(tableType) {
                    this.state.selectedTable = tableType;
                    this.commit();
                },
                setCartQuantity(id, qty) {
                    if (qty <= 0) {
                        delete this.state.cart[id];
                    } else {
                        this.state.cart[id] = qty;
                    }
                    this.commit();
                },
                addToCart(id) {
                    this.state.cart[id] = (this.state.cart[id] || 0) + 1;
                    this.commit();
                },
                removeFromCart(id) {
                    delete this.state.cart[id];
                    this.commit();
                },
                clearCart() {
                    this.state.cart = {};
                    this.commit();
                },
                commit() {
                    try {
                        localStorage.setItem(cartStorageKey, JSON.stringify(this.state.cart));
                    } catch (err) {
                        console.error("Critical state serialization failure:", err);
                    }
                    Atelier.updateAllUI();
                }
            };

            // ============== BASE DATA PROVIDER INTERFACE ==============
            function getItemData(id) {
                return Registry.get(id);
            }

            // ============== CORE SYSTEM COORDINATOR (Atelier Namespace) ==============
            const Atelier = {
                // Render Signature Dishes Grid
                renderDishes() {
                    const container = document.getElementById("dishesGrid");
                    if (!container) return;

                    container.innerHTML = dishes
                        .map(
                            (dish) => `
                        <div class="col-12 col-sm-6 col-lg-3 mb-4">
                            <div class="editorial-dish-card reveal">
                                <div class="editorial-img-container">
                                    <span class="editorial-tag">${escapeHTML(dish.tag)}</span>
                                    <img src="${dish.img}" class="editorial-dish-img" alt="${escapeHTML(dish.name)}" loading="lazy" decoding="async">
                                </div>
                                <div class="editorial-body">
                                    <h5 class="editorial-title">${escapeHTML(dish.name)}</h5>
                                    <p class="editorial-desc">${escapeHTML(dish.desc)}</p>
                                    <div class="editorial-meta">
                                        <i class="bi bi-compass"></i>• ${escapeHTML(dish.pairing)}
                                    </div>
                                    <div class="editorial-action-bar">
                                        <span class="editorial-price">€${dish.price}</span>
                                        <button class="editorial-add-btn add-to-bag" data-id="${dish.id}" title="Add to reservation">
                                            <i class="bi bi-bag-plus"></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `
                        )
                        .join("");
                },

                // Event-Delegated Cart Addition Handler
                handleItemAddition(id, element) {
                    StateManager.addToCart(id);
                    const item = getItemData(id);
                    const name = item ? item.name : "Item";
                    showToast(`${name} added`);

                    if (element) {
                        let targetButton = element;
                        if (element.tagName === "I") {
                            targetButton = element.parentElement;
                        }
                        const icon = targetButton.querySelector("i");
                        if (icon) {
                            icon.className = "bi bi-check-lg";
                            targetButton.classList.add("added");
                            targetButton.style.pointerEvents = "none";

                            setTimeout(() => {
                                icon.className = "bi bi-bag-plus";
                                targetButton.classList.remove("added");
                                targetButton.style.pointerEvents = "auto";
                            }, 1000);
                        }
                    }
                },

                // Render Current Menu Panel Category
                renderMenu(category) {
                    const container = document.getElementById("menuContent");
                    if (!container) return;
                    const items = menuItems[category] || [];

                    container.innerHTML = items
                        .map(
                            (item) => `
                        <div class="menu-item-row">
                            <div class="menu-item-img-wrapper">
                                <img src="${item.img}" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async">
                            </div>
                            <div class="menu-item-details">
                                <div class="menu-item-head">
                                    <div class="menu-item-name">${escapeHTML(item.name)}</div>
                                    <div class="menu-item-price">€${item.price}</div>
                                </div>
                                <div class="menu-item-desc">${escapeHTML(item.desc)}</div>
                            </div>
                            <div class="menu-item-action">
                                <button class="menu-add-btn btn-menu-add" data-id="${item.id}" title="Add to Reservation Bag">
                                    <i class="bi bi-bag-plus"></i>
                                </button>
                            </div>
                        </div>
                    `
                        )
                        .join("");
                },

                // Render Cart Details inside Offcanvas Body
                updateCartOffcanvas() {
                    const body = document.getElementById("cartOffcanvasBody");
                    const footer = document.getElementById("cartOffcanvasFooter");
                    const totalEl = document.getElementById("cartTotal");
                    if (!body || !footer || !totalEl) return;

                    const cart = StateManager.getCart();
                    const entries = Object.entries(cart);

                    if (entries.length === 0) {
                        body.innerHTML = `
                    <div class="text-center py-5 text-muted">
                        <i class="bi bi-bag fs-1 d-block mb-3"></i>Your selections are empty
                    </div>
                `;
                        footer.style.display = "none";
                        return;
                    }

                    let html = "";
                    let total = 0;

                    entries.forEach(([idString, qty]) => {
                        const id = parseInt(idString, 10);
                        const item = getItemData(id);

                        if (item) {
                            const itemCost = item.price * qty;
                            total += itemCost;
                            html += `
                        <div class="d-flex gap-3 py-3 border-bottom">
                            <img src="${item.img || "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=150&q=80"}" width="68" height="68" style="border-radius:10px;object-fit:cover" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async">
                            <div class="flex-grow-1">
                                <div class="fw-semibold">${escapeHTML(item.name)}</div>
                                <div class="small text-muted">€${item.price} × ${qty}</div>
                                <div class="mt-2 d-flex align-items-center gap-1">
                                    <button class="btn btn-sm btn-light border py-0 px-2 btn-qty-decrement" data-id="${id}">−</button>
                                    <span class="px-2 small">${qty}</span>
                                    <button class="btn btn-sm btn-light border py-0 px-2 btn-qty-increment" data-id="${id}">+</button>
                                    <button class="btn btn-sm text-danger ms-3 btn-item-remove" data-id="${id}"><i class="bi bi-trash"></i></button>
                                </div>
                            </div>
                            <div class="text-end">
                                <div class="text-sage fw-semibold">€${itemCost}</div>
                            </div>
                        </div>
                    `;
                        }
                    });

                    body.innerHTML = html;
                    totalEl.textContent = `€${total}`;
                    footer.style.display = "block";
                },

                // Update Live Reservation Ticket Preview (Receipt Layout)
                updateReservePreview() {
                    const empty = document.getElementById("reserveCartEmpty");
                    const content = document.getElementById("reserveCartContent");
                    if (!empty || !content) return;

                    const cart = StateManager.getCart();
                    const entries = Object.entries(cart);

                    if (entries.length === 0) {
                        empty.style.display = "block";
                        content.style.display = "none";
                        return;
                    }

                    empty.style.display = "none";
                    content.style.display = "block";

                    let html = "";
                    let total = 0;

                    entries.forEach(([idString, qty]) => {
                        const id = parseInt(idString, 10);
                        const item = getItemData(id);

                        if (item) {
                            const lineCost = item.price * qty;
                            total += lineCost;
                            html += `
                        <div class="receipt-item-line">
                            <div>
                                <span class="qty">${qty}x</span>
                                <span>${escapeHTML(item.name)}</span>
                                <button class="remove-inline btn-receipt-remove" data-id="${id}" title="Remove item">Remove</button>
                            </div>
                            <span class="fw-semibold">€${lineCost}</span>
                        </div>
                    `;
                        }
                    });

                    content.innerHTML = `
                ${html}
                <div class="receipt-total-line">
                    <span>Grand Total</span>
                    <span>€${total}</span>
                </div>
                <div class="text-muted text-center mt-3" style="font-size:0.72rem;">
                    <i class="bi bi-shield-check me-1 text-sage"></i> Connected to reservation checkout
                </div>
            `;
                },

                // Master UI Synchronization Function
                updateAllUI() {
                    const cart = StateManager.getCart();
                    const totalQuantity = Object.values(cart).reduce((accum, val) => accum + val, 0);
                    const badge = document.getElementById("cartBadge");

                    if (badge) {
                        badge.textContent = totalQuantity;
                        badge.style.display = totalQuantity > 0 ? "flex" : "none";
                    }

                    this.updateCartOffcanvas();
                    this.updateReservePreview();
                }
            };

            // ============== ACTION FLOW DELEGATOR (Event Listeners Setup) ==============
            const ActionDelegator = {
                initialize() {
                    // General Event Delegation for Interactive Components
                    document.addEventListener("click", (e) => {
                        // 1. Signature Dish - Add Button
                        const btnAddDish = e.target.closest(".add-to-bag");
                        if (btnAddDish) {
                            const id = parseInt(btnAddDish.dataset.id, 10);
                            Atelier.handleItemAddition(id, btnAddDish);
                            return;
                        }

                        // 2. Menu Explorer Card - Add Button
                        const btnAddMenu = e.target.closest(".btn-menu-add");
                        if (btnAddMenu) {
                            const id = parseInt(btnAddMenu.dataset.id, 10);
                            Atelier.handleItemAddition(id, btnAddMenu);
                            return;
                        }

                        // 3. Carousel Special Item - Add Button
                        const btnAddSpec = e.target.closest(".btn-spec-add");
                        if (btnAddSpec) {
                            const id = parseInt(btnAddSpec.dataset.id, 10);
                            Atelier.handleItemAddition(id, btnAddSpec);
                            return;
                        }

                        // 4. Offcanvas Decr Qty Button
                        const btnDecr = e.target.closest(".btn-qty-decrement");
                        if (btnDecr) {
                            const id = parseInt(btnDecr.dataset.id, 10);
                            const currentQty = StateManager.getCart()[id] || 0;
                            StateManager.setCartQuantity(id, currentQty - 1);
                            return;
                        }

                        // 5. Offcanvas Incr Qty Button
                        const btnIncr = e.target.closest(".btn-qty-increment");
                        if (btnIncr) {
                            const id = parseInt(btnIncr.dataset.id, 10);
                            const currentQty = StateManager.getCart()[id] || 0;
                            StateManager.setCartQuantity(id, currentQty + 1);
                            return;
                        }

                        // 6. Offcanvas Row Trash Button
                        const btnTrash = e.target.closest(".btn-item-remove");
                        if (btnTrash) {
                            const id = parseInt(btnTrash.dataset.id, 10);
                            StateManager.removeFromCart(id);
                            return;
                        }

                        // 7. Live Preview (Receipt) Inline Remove Button
                        const btnReceiptRemove = e.target.closest(".btn-receipt-remove");
                        if (btnReceiptRemove) {
                            const id = parseInt(btnReceiptRemove.dataset.id, 10);
                            StateManager.removeFromCart(id);
                        }
                    });
                }
            };

            // ============== USER INTERACTIONS & WIDGET SETUP ==============

            function addExperience(index) {
                const exp = experiences[index];
                if (!exp) return;
                const calculatedId = 100 + index;
                StateManager.addToCart(calculatedId);
                showToast(`${exp.name} added`);

                const reservationSection = document.getElementById("reserve");
                if (reservationSection) {
                    reservationSection.scrollIntoView({ behavior: "smooth" });
                }
            }

            function setupMenuTabs() {
                const tabs = document.getElementById("menuTabs");
                if (!tabs) return;

                tabs.querySelectorAll(".menu-tab").forEach((tab) => {
                    tab.addEventListener("click", () => {
                        tabs.querySelectorAll(".menu-tab").forEach((t) => t.classList.remove("active"));
                        tab.classList.add("active");
                        Atelier.renderMenu(tab.dataset.category);
                    });
                });
                Atelier.renderMenu("first");
            }

            function setupCategorySpotlight() {
                document.querySelectorAll(".cat-card").forEach((card) => {
                    card.addEventListener("click", () => {
                        const filter = card.dataset.filter;
                        let category = "first";

                        if (filter === "starters") category = "first";
                        else if (filter === "mains") category = "second";
                        else if (filter === "desserts") category = "dessert";
                        else if (filter === "drinks") category = "wine";

                        const tab = document.querySelector(`.menu-tab[data-category="${category}"]`);
                        if (tab) {
                            document.querySelectorAll(".menu-tab").forEach((t) => t.classList.remove("active"));
                            tab.classList.add("active");
                            Atelier.renderMenu(category);
                        }
                    });
                });
            }

            function setupTableSelector() {
                const selector = document.getElementById("tableSelector");
                if (!selector) return;

                selector.querySelectorAll(".table-option").forEach((opt) => {
                    opt.addEventListener("click", () => {
                        selector.querySelectorAll(".table-option").forEach((o) => o.classList.remove("active"));
                        opt.classList.add("active");
                        StateManager.setSelectedTable(opt.dataset.table);
                    });
                });
            }

            function renderFAQ() {
                const container = document.getElementById("faqContainer");
                if (!container) return;

                container.innerHTML = faqs
                    .map(
                        (faq, i) => `
                    <div class="faq-item">
                        <button class="faq-btn" data-index="${i}" aria-expanded="false" aria-controls="faq-body-${i}">
                            ${escapeHTML(faq.q)}
                            <i class="bi bi-plus-lg"></i>
                        </button>
                        <div id="faq-body-${i}" class="faq-body" aria-hidden="true">
                            <div class="p-3 pt-0 text-muted">${escapeHTML(faq.a)}</div>
                        </div>
                    </div>
                `
                    )
                    .join("");

                container.querySelectorAll(".faq-btn").forEach((btn) => {
                    btn.addEventListener("click", () => {
                        const body = btn.nextElementSibling;
                        const isOpen = btn.classList.contains("open");

                        container.querySelectorAll(".faq-btn").forEach((b) => {
                            b.classList.remove("open");
                            b.setAttribute("aria-expanded", "false");
                            const itemBody = b.nextElementSibling;
                            if (itemBody) {
                                itemBody.style.maxHeight = "0";
                                itemBody.setAttribute("aria-hidden", "true");
                            }
                        });

                        if (!isOpen) {
                            btn.classList.add("open");
                            btn.setAttribute("aria-expanded", "true");
                            body.style.maxHeight = `${body.scrollHeight}px`;
                            body.setAttribute("aria-hidden", "false");
                        }
                    });
                });
            }

            function showToast(message) {
                const container = document.createElement("div");
                container.className = "position-fixed bottom-0 end-0 p-3";
                container.style.zIndex = "1090";
                container.innerHTML = `
            <div class="toast-custom">
                <i class="bi bi-check-circle-fill"></i>
                <span>${escapeHTML(message)}</span>
            </div>
        `;
                document.body.appendChild(container);

                setTimeout(() => {
                    container.style.transition = "opacity 0.3s ease, transform 0.3s ease";
                    container.style.opacity = "0";
                    setTimeout(() => container.remove(), 300);
                }, 2200);
            }

            function playSound() {
                const buttons = document.querySelectorAll(".sound-card");
                buttons.forEach((b) => (b.style.borderColor = "var(--sage)"));
                showToast("Playing current atmospheric soundscape (demo)");

                setTimeout(() => {
                    buttons.forEach((b) => (b.style.borderColor = "var(--line)"));
                }, 4200);
            }

            function setupSearch() {
                const input = document.getElementById("searchInput");
                if (!input) return;

                input.addEventListener("keydown", (e) => {
                    if (e.key === "Enter") {
                        e.preventDefault();
                        const term = input.value.toLowerCase().trim();
                        if (!term) return;

                        const match = dishes.find(
                            (d) =>
                                d.name.toLowerCase().includes(term) ||
                                d.desc.toLowerCase().includes(term)
                        );

                        if (match) {
                            const searchElement = document.getElementById("searchOffcanvas");
                            if (searchElement && typeof bootstrap !== 'undefined') {
                                const instance = bootstrap.Offcanvas.getInstance(searchElement);
                                if (instance) instance.hide();
                            }

                            const targetSection = document.getElementById("dishes");
                            if (targetSection) {
                                targetSection.scrollIntoView({ behavior: "smooth" });
                            }

                            setTimeout(() => {
                                const cards = document.querySelectorAll(".editorial-dish-card");
                                cards.forEach((card) => {
                                    if (card.textContent.toLowerCase().includes(term)) {
                                        card.style.boxShadow = "0 0 0 3px var(--sage)";
                                        setTimeout(() => (card.style.boxShadow = ""), 3000);
                                    }
                                });
                            }, 800);
                        } else {
                            showToast("No matching dishes found.");
                        }
                    }
                });
            }

            function setupNavbar() {
                const navbar = document.getElementById("navbar");
                const toTop = document.getElementById("toTop");

                window.addEventListener("scroll", () => {
                    if (navbar) {
                        navbar.classList.toggle("scrolled", window.scrollY > 40);
                    }
                    if (toTop) {
                        toTop.style.display = window.scrollY > 400 ? "flex" : "none";
                    }
                });

                if (toTop) {
                    toTop.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
                }
            }

            function setupReveal() {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                entry.target.classList.add("in");
                                observer.unobserve(entry.target);
                            }
                        });
                    },
                    { threshold: 0.12 }
                );

                document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
            }

            function setupCounters() {
                const observer = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (!entry.isIntersecting) return;
                            const element = entry.target;
                            const finalVal = parseInt(element.dataset.target, 10);
                            let currentVal = 0;
                            const stepValue = finalVal / 80;

                            const animationFrame = () => {
                                currentVal += stepValue;
                                if (currentVal < finalVal) {
                                    element.textContent = Math.floor(currentVal).toLocaleString();
                                    requestAnimationFrame(animationFrame);
                                } else {
                                    element.textContent =
                                        finalVal.toLocaleString() + (finalVal >= 1000 ? "+" : "");
                                }
                            };

                            animationFrame();
                            observer.unobserve(element);
                        });
                    },
                    { threshold: 0.5 }
                );

                document.querySelectorAll(".counter").forEach((c) => observer.observe(c));
            }

            function setupSpecialsSlider() {
                const inner = document.getElementById("specInner");
                if (!inner) return;
                const selections = dishes.slice(0, 8);

                const slidesCount = () => {
                    if (window.innerWidth < 576) return 1;
                    if (window.innerWidth < 992) return 2;
                    return 3;
                };

                let lastSlidesCount = 0;

                function rebuildSlider() {
                    const currentCount = slidesCount();
                    if (currentCount === lastSlidesCount) return;
                    lastSlidesCount = currentCount;

                    let markup = "";
                    for (let i = 0; i < selections.length; i += currentCount) {
                        const chunk = selections.slice(i, i + currentCount);
                        const activeClass = i === 0 ? "active" : "";

                        markup += `<div class="carousel-item ${activeClass}"><div class="row">`;

                        chunk.forEach((item) => {
                            const originalPriceMarkup = item.old
                                ? `<s class="text-muted small me-2">€${item.old}</s>`
                                : "";
                            markup += `
                        <div class="col-12 col-sm-${12 / currentCount}">
                            <div class="spec-mini">
                                <img src="${item.img}" alt="${escapeHTML(item.name)}" loading="lazy" decoding="async">
                                <div class="flex-grow-1">
                                    <div class="rate"><i class="bi bi-star-fill"></i> ${item.rating.toFixed(1)}</div>
                                    <h6>${escapeHTML(item.name)}</h6>
                                    <div class="d-flex align-items-center justify-content-between mt-1">
                                        <span class="price">${originalPriceMarkup}<strong>€${item.price}</strong></span>
                                        <button class="add-btn btn-spec-add" data-id="${item.id}"><i class="bi bi-bag-plus"></i></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    `;
                        });

                        markup += `</div></div>`;
                    }
                    inner.innerHTML = markup;
                }

                rebuildSlider();
                let resizeDebounce;
                window.addEventListener("resize", () => {
                    clearTimeout(resizeDebounce);
                    resizeDebounce = setTimeout(rebuildSlider, 150);
                });
            }

            // ============== VALIDATION FOR NEWSLETTER SIGNUP ==============
            const newsForm = document.getElementById("newsForm");
            const newsMsg = document.getElementById("newsMsg");
            if (newsForm && newsMsg) {
                newsForm.addEventListener("submit", (e) => {
                    e.preventDefault();
                    if (newsForm.checkValidity()) {
                        newsMsg.classList.remove("d-none");
                        newsForm.reset();
                    }
                });
            }

            // ============== DYNAMIC COLLAPSER ON NAVIGATION LINKS CLICK ==============
            document.querySelectorAll("#navMenu .nav-link").forEach((link) => {
                link.addEventListener("click", () => {
                    const collapser = document.getElementById("navMenu");
                    if (collapser && typeof bootstrap !== 'undefined') {
                        const instance = bootstrap.Collapse.getInstance(collapser);
                        if (instance) instance.hide();
                    }
                });
            });

            // ============== REACTION TO SHORTCUT KEYBOARD TRIGGERS ==============
            document.addEventListener("keydown", (e) => {
                if (e.key === "/" && document.activeElement.tagName === "BODY") {
                    e.preventDefault();
                    const searchElement = document.getElementById("searchOffcanvas");
                    if (searchElement && typeof bootstrap !== 'undefined') {
                        const instance = new bootstrap.Offcanvas(searchElement);
                        instance.show();
                    }
                }
            });

            // ============== FORM SUBMIT WITH ASYNC CHECKOUT MODEL ==============
            const reservationForm = document.getElementById("reserveForm");
            if (reservationForm) {
                reservationForm.addEventListener("submit", async (e) => {
                    e.preventDefault();
                    showToast("Reservation request sent. We will confirm shortly.");

                    // Simulate server network latency
                    await new Promise(resolve => setTimeout(resolve, 1500));
                    StateManager.clearCart();
                    reservationForm.reset();
                });
            }

            // ============== ATELIER INITIALIZATION GATEWAY ==============
            function init() {
                Registry.initialize();
                StateManager.initialize();

                Atelier.renderDishes();
                setupMenuTabs();
                setupCategorySpotlight();
                setupTableSelector();
                renderFAQ();
                setupSearch();
                setupNavbar();
                setupReveal();
                setupCounters();
                setupSpecialsSlider();
                ActionDelegator.initialize();

                Atelier.updateAllUI();

                // Safe transition execution on Preloader Out
                setTimeout(() => {
                    const preloader = document.getElementById("preloader");
                    if (preloader) preloader.classList.add("done");
                }, 800);
            }

            // Expose necessary functions globally for compatibility with HTML inline integrations
            window.addExperience = addExperience;
            window.playSound = playSound;
            window.changeQty = (id, delta) => {
                const currentQty = StateManager.getCart()[id] || 0;
                StateManager.setCartQuantity(id, currentQty + delta);
            };
            window.removeFromCart = (id) => {
                StateManager.removeFromCart(id);
            };
            window.addToCart = (id, element) => {
                Atelier.handleItemAddition(id, element);
            };

            if (document.readyState === "loading") {
                document.addEventListener("DOMContentLoaded", init);
            } else {
                init();
            }
        })();
