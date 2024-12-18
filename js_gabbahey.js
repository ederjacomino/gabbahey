<script>
document.addEventListener("DOMContentLoaded", function() {
    var isHomepage = window.location.pathname === "/" || 
                     window.location.pathname === "/index.html" || 
                     window.location.pathname === "/gabbahey" || 
                     window.location.pathname === "/gabbahey/";
    if (isHomepage) {
        var topBannerContainer = document.createElement("div");
        topBannerContainer.id = "top-banner-container";

        var topBanner = document.createElement("img");
        topBanner.id = "top-banner";
        topBanner.src = "https://i.ibb.co/mRRMXDk/banner1.png";
        topBanner.alt = "Topo do site";

        topBannerContainer.appendChild(topBanner);
        document.body.insertBefore(topBannerContainer, document.body.firstChild);

        var cabecalhoPrincipal = document.querySelector(".cabecalho-principal");
        var cabecalhoPrincipalEstreito = document.querySelector(".cabecalho-principal-estreito");
        var productSection = document.querySelector(".product-section");

        if (cabecalhoPrincipal) {
            document.body.insertBefore(cabecalhoPrincipal, topBannerContainer.nextSibling);
        }
        if (cabecalhoPrincipalEstreito) {
            document.body.insertBefore(cabecalhoPrincipalEstreito, topBannerContainer.nextSibling);
        }
        if (productSection) {
            document.body.insertBefore(productSection, topBannerContainer.nextSibling);
        }
    }
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var customNewFooter = document.createElement("div");
    customNewFooter.classList.add("custom-unique-footer");

    var customFooterLogo = document.createElement("img");
    customFooterLogo.src = "https://i.ibb.co/XYZ4Sdy/rodape-logo.png";
    customFooterLogo.alt = "Logo do rodapé";
    customFooterLogo.classList.add("custom-unique-footer-logo");
    customNewFooter.appendChild(customFooterLogo);

    var customBottomBar = document.createElement("div");
    customBottomBar.classList.add("custom-unique-bottom-bar");

    var customFooterImageContainer = document.createElement("div");
    customFooterImageContainer.classList.add("custom-unique-footer-image-container");

    var customFooterImage = document.createElement("img");
    customFooterImage.src = "https://i.ibb.co/cxdsW2v/rockpaulera.png";
    customFooterImage.alt = "Imagem do rodapé";
    customFooterImage.classList.add("custom-unique-footer-image");
    customFooterImageContainer.appendChild(customFooterImage);
    customNewFooter.appendChild(customFooterImageContainer);

    var footerDescription = document.createElement("div");
    footerDescription.classList.add("custom-unique-footer-description");
    footerDescription.innerHTML = `
        Estamos aqui para contar velhas histórias e descobrir novas promessas.<br>
        Nossa missão é simples: oferecer roupas que expressem a intensidade do Rock n' Roll e a personalidade de quem veste.<br>
        Se você respira música e entende que o estilo é mais do que uma roupa, é uma declaração, então a Gabba Hey! é pra você. Aqui, a rebeldia é bem-vinda, o som é sempre alto e a atitude é inegociável.<br>
        Seja um de nós. Gabba Hey!
    `;
    customNewFooter.appendChild(footerDescription);

    var socialIconsContainer = document.createElement("div");
    socialIconsContainer.classList.add("custom-unique-footer-social-icons");

    var instaIcon = document.createElement("img");
    instaIcon.src = "https://i.ibb.co/x7RxB6z/insta-rodape.png";
    instaIcon.alt = "Instagram";

    var faceIcon = document.createElement("img");
    faceIcon.src = "https://i.ibb.co/k26RRD0/face-rodape.png";
    faceIcon.alt = "Facebook";

    socialIconsContainer.appendChild(instaIcon);
    socialIconsContainer.appendChild(faceIcon);
    customNewFooter.appendChild(socialIconsContainer);

    var pagamentoDiv = document.createElement("div");
    pagamentoDiv.classList.add("custom-unique-footer-pagamento");

    var pagamentoImg = document.createElement("img");
    pagamentoImg.src = "https://i.ibb.co/tzpRJkQ/cartoes-novos.png";
    pagamentoImg.alt = "Cartões";
    pagamentoImg.classList.add("custom-unique-footer-pagamento-img-esquerda");
    pagamentoDiv.appendChild(pagamentoImg);

    var separador = document.createElement("div");
    separador.classList.add("custom-unique-footer-separador");
    pagamentoDiv.appendChild(separador);

    var link = document.createElement("a");
    link.href = "https://transparencyreport.google.com/safe-browsing/search?url=https:%2F%2Fgabbahey.com.br%2F&hl=pt_BR";
    link.target = "_blank";

    var secureImg = document.createElement("img");
    secureImg.src = "https://i.ibb.co/QkCPtv3/ggsafe.png";
    secureImg.alt = "Segurança";
    secureImg.classList.add("custom-unique-footer-pagamento-img-direita");
    link.appendChild(secureImg);

    pagamentoDiv.appendChild(link);
    customNewFooter.appendChild(pagamentoDiv);

    var customBottomBar = document.createElement("div");
    customBottomBar.classList.add("custom-unique-bottom-bar");

    var menuHTML = `
        <nav class="bottom-bar-menu">
            <span>Dados do Vendedor: CPF 218.682.438-85</span>
            <a href="https://troca.shop/trocas-produtos" target="_blank">Trocas e devoluções</a>
            <a href="https://faq.do/politica-de-troca-e-devolucao" target="_blank">Política de troca e devolução</a>
            <a href="https://faq.do/denuncie-o-uso-ilegal" target="_blank">Denuncie o uso ilegal de marcas</a>
        </nav>
    `;
    customBottomBar.innerHTML = menuHTML;

    document.body.appendChild(customNewFooter);
    document.body.appendChild(customBottomBar);

    function mostrarRodape(element, delay) {
        setTimeout(function() {
            element.classList.add('mostrar');
        }, delay);
    }

    var observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                customNewFooter.classList.add('mostrar');
                observer.unobserve(customNewFooter);
            }
        });
    }, { threshold: [0.1] });

    observer.observe(customNewFooter);
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var searchFormContainer = document.createElement("div");
    searchFormContainer.id = "search-form-container";

    var searchForm = document.createElement("form");
    var currentPath = window.location.pathname;
    if (currentPath.includes("/gabbahey")) {
        searchForm.action = "https://montink.com/gabbahey";
    } else {
        searchForm.action = "https://gabbahey.com.br/";
    }
    searchForm.method = "get";
    searchForm.id = "custom-search-form";

    var searchInput = document.createElement("input");
    searchInput.type = "text";
    searchInput.name = "produto";
    searchInput.placeholder = "DIGA O QUE PROCURA...";
    searchInput.className = "custom-search-input";

    var searchButton = document.createElement("button");
    searchButton.type = "submit";
    searchButton.className = "custom-search-button";

    searchForm.appendChild(searchInput);
    searchForm.appendChild(searchButton);
    searchFormContainer.appendChild(searchForm);
    document.body.appendChild(searchFormContainer);

    function toggleSearchForm(event) {
        event.preventDefault();
        if (searchFormContainer.style.display === "block") {
            searchFormContainer.style.display = "none";
        } else {
            searchFormContainer.style.display = "block";
        }
    }

    document.addEventListener("click", function(event) {
        var searchIcon = event.target.closest(".icone-lupa a");
        if (searchIcon) {
            toggleSearchForm(event);
        }
    });

    function updateSearchFormPosition() {
        var scrollY = window.scrollY;

        if (scrollY >= 85) {
            searchFormContainer.style.position = "fixed";
            searchFormContainer.style.top = "55px";
        } else {
            searchFormContainer.style.position = "fixed";
            searchFormContainer.style.top = "140px";
        }
    }

    window.addEventListener("scroll", updateSearchFormPosition);

    if (searchForm) {
        searchForm.addEventListener("submit", function(event) {
            event.preventDefault();

            var formData = new FormData(searchForm);
            var queryString = new URLSearchParams(formData).toString();

            fetch(searchForm.action + "?" + queryString, {
                method: "GET",
            })
            .then(response => response.text())
            .then(html => {
                var parser = new DOMParser();
                var doc = parser.parseFromString(html, "text/html");
                var productSection = doc.querySelector(".product-section");

                if (productSection) {
                    document.querySelector(".product-section").innerHTML = productSection.innerHTML;
                    document.querySelector(".product-section").scrollIntoView({ behavior: "auto" });
                }

                searchFormContainer.style.display = "none";
            })
            .catch(error => console.error("Erro ao buscar os dados: ", error));
        });
    }
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    function styleButtons() {
        var filterButton = document.querySelector('.btn.dropdown-toggle.input-select.product-section__filter-button');
        var productButton = document.querySelector('.btn.dropdown-toggle.input-select:not(.product-section__filter-button)');
        var categoryButtons = document.querySelectorAll('.btn.dropdown-toggle.input-select[data-toggle="dropdown"]');
        categoryButtons.forEach(function(categoryButton) {
            if (categoryButton.textContent.trim() === 'Categorias') {
                categoryButton.style.setProperty('padding', '5px 14px', 'important');
                categoryButton.style.setProperty('background', '#990000', 'important');
                categoryButton.style.setProperty('border-radius', '0', 'important');
                categoryButton.style.setProperty('border', '0', 'important');
                categoryButton.style.setProperty('color', '#fff', 'important');
            }
        });

        if (filterButton) {
            filterButton.style.setProperty('padding', '5px 14px', 'important');
            filterButton.style.setProperty('background', '#990000', 'important');
            filterButton.style.setProperty('border-radius', '0', 'important');
            filterButton.style.setProperty('border', '0', 'important');
            filterButton.style.setProperty('color', '#fff', 'important');
        }

        if (productButton) {
            productButton.style.setProperty('padding', '5px 14px', 'important');
            productButton.style.setProperty('background', '#990000', 'important');
            productButton.style.setProperty('border-radius', '0', 'important');
            productButton.style.setProperty('border', '0', 'important');
            productButton.style.setProperty('color', '#fff', 'important');
        }
    }

    styleButtons();

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                styleButtons();
            }
        });
    });

    var config = { childList: true, subtree: true };
    var target = document.body;
    if (target) {
        observer.observe(target, config);
    }
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var imgCol = document.querySelector('.product-detail-img-col');
    var maxMarginTop = 350;
    var startScroll = 162;

    window.addEventListener('scroll', function() {
        if (window.innerWidth > 768) {
            var scrollY = window.scrollY;

            if (scrollY > startScroll) {
                var newMarginTop = Math.min(scrollY - startScroll, maxMarginTop);
                imgCol.style.marginTop = newMarginTop + 'px';
            } else {
                imgCol.style.marginTop = '0px';
            }
        } else {
            imgCol.style.marginTop = '0px';
        }
    });
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    var cabecalhoPrincipal = document.createElement("div");
    cabecalhoPrincipal.classList.add("cabecalho-principal");

    var logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");

    var linkLogo = document.createElement("a");
    linkLogo.href = "https://gabbahey.com.br/";
    linkLogo.classList.add("link-logo");

    var logo = document.createElement("img");
    logo.src = "https://i.ibb.co/S0GGRGj/logo.png";
    logo.alt = "Logo do site";
    logo.classList.add("logo");

    linkLogo.appendChild(logo);
    logoContainer.appendChild(linkLogo);

    var iconesEsquerda = document.createElement("div");
    iconesEsquerda.classList.add("icones-esquerda");

    var menuEsquerda = document.createElement("div");
    menuEsquerda.classList.add("menu-esquerda");

    var itemGabbaHey = document.createElement("div");
    itemGabbaHey.classList.add("menu-item");
    var linkGabbaHey = document.createElement("a");
    linkGabbaHey.href = "#";
    linkGabbaHey.id = "btn-gabbahey";
    linkGabbaHey.textContent = "GABBA HEY!";
    linkGabbaHey.style.color = "inherit";
    linkGabbaHey.style.textDecoration = "none";
    itemGabbaHey.appendChild(linkGabbaHey);

    var itemProdutos = document.createElement("div");
    itemProdutos.classList.add("menu-item");
    itemProdutos.textContent = "PRODUTOS";

    var itemCupons = document.createElement("div");
    itemCupons.classList.add("menu-item");
    itemCupons.textContent = "CUPONS";

    menuEsquerda.appendChild(itemGabbaHey);
    menuEsquerda.appendChild(itemProdutos);
    menuEsquerda.appendChild(itemCupons);

    linkGabbaHey.addEventListener("click", function(event) {
        event.preventDefault();
        var newFooter = document.querySelector(".custom-unique-footer");
        newFooter.scrollIntoView({ behavior: "auto" });
    });

    var iconeHome = document.createElement("div");
    iconeHome.classList.add("icone-home");
    var linkHome = document.createElement("a");
    linkHome.href = "https://gabbahey.com.br/";
    var imgHome = document.createElement("img");
    imgHome.src = "https://i.ibb.co/QjkH3jm/home.png";
    imgHome.alt = "Home";
    linkHome.appendChild(imgHome);
    iconeHome.appendChild(linkHome);

    var iconeMenu = document.createElement("div");
    iconeMenu.classList.add("icone-menu");
    var linkMenu = document.createElement("a");
    linkMenu.href = "https://gabbahey.com.br/";
    var imgMenu = document.createElement("img");
    imgMenu.src = "https://i.ibb.co/myPfqC5/menu.png";
    imgMenu.alt = "Menu";
    linkMenu.appendChild(imgMenu);
    iconeMenu.appendChild(linkMenu);

    iconesEsquerda.appendChild(iconeHome);
    iconesEsquerda.appendChild(iconeMenu);

    var iconesDireita = document.createElement("div");
    iconesDireita.classList.add("icones-direita");

    var menuDireita = document.createElement("div");
    menuDireita.classList.add("menu-direita");

    var itemFaleConosco = document.createElement("div");
    itemFaleConosco.classList.add("menu-item");
    var linkFaleConosco = document.createElement("a");
    linkFaleConosco.href = "https://api.whatsapp.com/send?phone=14997337622";
    linkFaleConosco.id = "btn-faleconosco";
    linkFaleConosco.target = "_blank";
    linkFaleConosco.textContent = "WHATSAPP";
    linkFaleConosco.style.color = "inherit";
    linkFaleConosco.style.textDecoration = "none";
    itemFaleConosco.appendChild(linkFaleConosco);

    var itemRastrear = document.createElement("div");
    itemRastrear.classList.add("menu-item");
    var linkRastrear = document.createElement("a");
    linkRastrear.href = "https://track-order.co/rastrear/gabbahey";
    linkRastrear.target = "_blank";
    linkRastrear.textContent = "RASTREAR";
    linkRastrear.style.color = "inherit";
    linkRastrear.style.textDecoration = "none";
    itemRastrear.appendChild(linkRastrear);

    var itemSigaNos = document.createElement("div");
    itemSigaNos.classList.add("menu-item");
    itemSigaNos.textContent = "SIGA-NOS";

    menuDireita.appendChild(itemFaleConosco);
    menuDireita.appendChild(itemRastrear);
    menuDireita.appendChild(itemSigaNos);

    var iconeLupa = document.createElement("div");
    iconeLupa.classList.add("icone-lupa");
    var linkLupa = document.createElement("a");
    linkLupa.href = "#";
    var imgLupa = document.createElement("img");
    imgLupa.src = "https://i.ibb.co/CBXgB60/lupa.png";
    imgLupa.alt = "Lupa";
    linkLupa.appendChild(imgLupa);
    iconeLupa.appendChild(linkLupa);

    var iconeCarrinho = document.createElement("div");
    iconeCarrinho.classList.add("icone-carrinho");
    var linkCarrinho = document.createElement("a");
    linkCarrinho.href = "https://gabbahey.com.br/sacola";
    var imgCarrinho = document.createElement("img");
    imgCarrinho.src = "https://i.ibb.co/XYZKghb/carrinho.png";
    imgCarrinho.alt = "Carrinho";
    linkCarrinho.appendChild(imgCarrinho);
    iconeCarrinho.appendChild(linkCarrinho);

    iconesDireita.appendChild(iconeLupa);
    iconesDireita.appendChild(iconeCarrinho);

    cabecalhoPrincipal.appendChild(iconesEsquerda);
    cabecalhoPrincipal.appendChild(menuEsquerda);
    cabecalhoPrincipal.appendChild(logoContainer);
    cabecalhoPrincipal.appendChild(menuDireita);
    cabecalhoPrincipal.appendChild(iconesDireita);

    document.body.prepend(cabecalhoPrincipal);

    var enfeiteCabecalho = document.createElement("img");
    enfeiteCabecalho.src = "https://i.ibb.co/cxdsW2v/rockpaulera.png";
    enfeiteCabecalho.alt = "Enfeite de cabeçalho";
    enfeiteCabecalho.classList.add("enfeite-cabecalho");
    document.body.appendChild(enfeiteCabecalho);

    var cabecalhoEstreito = document.createElement("div");
    cabecalhoEstreito.classList.add("cabecalho-principal-estreito");
    cabecalhoEstreito.innerHTML = cabecalhoPrincipal.innerHTML;

    var logoEstreita = cabecalhoEstreito.querySelector(".logo");
    logoEstreita.src = "https://i.ibb.co/mJ4J2bT/logo-menor.png";
    logoEstreita.style.height = "63px";
    logoEstreita.style.width = "108px";
    logoEstreita.style.top = "14px";
    logoEstreita.style.position = "relative";
    logoEstreita.style.display = "none";

    var enfeiteCabecalhoEstreito = cabecalhoEstreito.querySelector(".enfeite-cabecalho");
    if (enfeiteCabecalhoEstreito) {
        enfeiteCabecalhoEstreito.remove();
    }

    cabecalhoEstreito.style.height = "57px";

    document.body.prepend(cabecalhoEstreito);

    var linkGabbaHeyPrincipal = cabecalhoPrincipal.querySelector("#btn-gabbahey");
    linkGabbaHeyPrincipal.addEventListener("click", function(event) {
        event.preventDefault();
        var newFooter = document.querySelector(".custom-unique-footer");
        newFooter.scrollIntoView({ behavior: "auto" });
    });

    var linkGabbaHeyEstreito = cabecalhoEstreito.querySelector("#btn-gabbahey");
    linkGabbaHeyEstreito.addEventListener("click", function(event) {
        event.preventDefault();
        var newFooter = document.querySelector(".custom-unique-footer");
        newFooter.scrollIntoView({ behavior: "auto" });
    });

    let enfeiteVisivel = false;

    window.addEventListener("scroll", function () {
        const scrollY = window.scrollY;

        if (scrollY > 105) {
            if (!enfeiteVisivel) {
                enfeiteVisivel = true;
                enfeiteCabecalho.style.opacity = "0";
                setTimeout(() => {
                    enfeiteCabecalho.style.display = "none";
                    cabecalhoPrincipal.style.top = "-156px";
                    cabecalhoEstreito.classList.add("mostrar");
                    logoEstreita.style.display = "block";
                }, 300);
            }
        } else {
            if (enfeiteVisivel) {
                enfeiteVisivel = false;
                enfeiteCabecalho.style.display = "block";
                setTimeout(() => {
                    enfeiteCabecalho.style.opacity = "1";
                }, 100);
                cabecalhoPrincipal.style.top = "0";
                cabecalhoEstreito.classList.remove("mostrar");
                logoEstreita.style.display = "none";
            }
        }
    });

    enfeiteCabecalho.style.opacity = "1";
    enfeiteCabecalho.style.display = "block";
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    function updateProductNames() {
        var productNames = document.querySelectorAll('.product-card .product-card__stats .product_name');
        productNames.forEach(function(name) {
            name.style.color = '#FFF';
        });
    }
    
    updateProductNames();

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                updateProductNames();
            }
        });
    });

    var config = { childList: true, subtree: true };
    var target = document.querySelector('.product-section');
    if (target) {
        observer.observe(target, config);
    }
});
</script>

<script>
document.addEventListener("DOMContentLoaded", function() {
    function updatePrices() {
        var prices = document.querySelectorAll('.product__price--final, .product__price--variant');
        prices.forEach(function(price) {
            price.style.color = '#990000';
            price.style.fontFamily = 'Rokkitt, serif';
            price.style.fontWeight = '700';
            if (window.innerWidth <= 768) {
                price.style.fontSize = '25px';
            } else {
                price.style.fontSize = '33px';
            }
        });
    }

    updatePrices();

    window.addEventListener('resize', function() {
        updatePrices();
    });

    var observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.addedNodes.length > 0) {
                updatePrices();
            }
        });
    });

    var config = { childList: true, subtree: true };
    var target = document.querySelector('.product-section');
    if (target) {
        observer.observe(target, config);
    }
});
</script>