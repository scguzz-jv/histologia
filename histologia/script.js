const topicDefinitions = [
      { id: "hueso-compacto", number: 1, title: "HUESO COMPACTO" },
      { id: "placa-epifisaria", number: 2, title: "PLACA EPIFISARIA" },
      { id: "medula-espinal", number: 3, title: "MÉDULA ESPINAL" },
      { id: "meninges", number: 4, title: "MENINGES" },
      { id: "cerebelo", number: 5, title: "CEREBELO" },
      { id: "plexos-coroideos", number: 6, title: "PLEXOS COROIDEOS" },
      { id: "cerebro", number: 7, title: "CEREBRO" },
      { id: "globo-ocular", number: 8, title: "GLOBO OCULAR" },
      { id: "piel-delgada", number: 10, title: "PIEL DELGADA" },
      { id: "piel-gruesa", number: 11, title: "PIEL GRUESA" },
      { id: "traquea", number: 12, title: "TRÁQUEA" },
      { id: "pulmon", number: 13, title: "PULMÓN" },
      { id: "arteria", number: 14, title: "ARTERIA" },
      { id: "vena", number: 15, title: "VENA" },
      { id: "fibra-cardiaca", number: 16, title: "FIBRA CARDÍACA" },
      { id: "frote-periferico", number: 17, title: "FROTE PERIFÉRICO" },
      { id: "medula-osea-roja", number: 18, title: "MÉDULA ÓSEA ROJA" },
      { id: "timo", number: 19, title: "TIMO" },
      { id: "ganglio-linfatico", number: 20, title: "GANGLIO LINFÁTICO" },
      { id: "bazo", number: 21, title: "BAZO" },
      { id: "mix-random", number: 22, title: "MIX RANDOM", special: true }
    ];

    const studyLibrary = [
      {
        id: "hueso-compacto",
        title: "HUESO COMPACTO",
        cards: [
          {
            front: "¿Qué cubre externamente al hueso?",
            back: "El periostio: una membrana con capa fibrosa externa y capa osteogénica interna."
          },
          {
            front: "Capa fibrosa del periostio",
            back: "Tejido conectivo denso con pocos fibroblastos, vasos sanguíneos, nervios y fibras de Sharpey."
          },
          {
            front: "Capa osteogénica del periostio",
            back: "Tejido conectivo laxo, vascularizado, con células osteoprogenitoras."
          },
          {
            front: "¿Cuál es la unidad estructural del hueso compacto?",
            back: "La osteona o sistema haversiano."
          },
          {
            front: "Conducto de Havers y laminillas",
            back: "El conducto de Havers contiene uno o dos capilares y nervios. Las laminillas son concéntricas y se disponen en número de 4 a 20."
          },
          {
            front: "Lagunas, canalículos y osteocitos",
            back: "Las lagunas u osteoplastos alojan osteocitos. Los canalículos son muy delgados, ramificados y comunican lagunas vecinas."
          },
          {
            front: "Línea de cemento de Von Ebner",
            back: "Marca el límite entre los sistemas haversianos y los intersticiales; se observa oscura."
          },
          {
            front: "Sistemas intersticiales y laminillas externas e internas",
            back: "Los sistemas intersticiales son osteonas incompletas. Las laminillas circunferenciales externas e internas se ubican bajo periostio y endostio y participan en la remodelación."
          }
        ]
      },
      {
        id: "placa-epifisaria",
        title: "PLACA EPIFISIARIA",
        cards: [
          {
            front: "¿Qué muestra la preparación?",
            back: "Fémur fetal teñido con H&E en corte longitudinal de la mitad proximal."
          },
          {
            front: "Epífisis",
            back: "Zona clara, rosada pálida de cartílago hialino con condrocitos, condroplastos, nidos celulares, sustancia intercelular basófila y pericondrio."
          },
          {
            front: "Disco epifisiario",
            back: "Estructura entre la epífisis y la diáfisis; corresponde a la zona de crecimiento de la diáfisis."
          },
          {
            front: "Zona de reserva y zona de proliferación",
            back: "En la reserva hay condrocitos diseminados. En la proliferación, los condrocitos jóvenes se aplanan y se organizan en columnas longitudinales."
          },
          {
            front: "Zona de hipertrofia y calcificación",
            back: "Los condrocitos aumentan de volumen y se vuelven vacuolados. Luego ocurre la calcificación provisional, mueren muchos condrocitos y entran células osteógenas y vasos."
          },
          {
            front: "Zona de degeneración y depósito óseo",
            back: "Quedan lagunas vacías con extremos abiertos, invadidas por asas capilares y células osteoprogenitoras; empieza a formarse osteoide."
          }
        ]
      },
      {
        id: "medula-espinal",
        title: "MÉDULA ESPINAL",
        cards: [
          {
            front: "¿Cómo se ve el corte de médula espinal?",
            back: "Es un corte transversal teñido con H&E, de aspecto redondeado, con surco anterior profundo y surco posterior menos profundo."
          },
          {
            front: "Piamadre",
            back: "Membrana delgada que rodea la médula espinal; contiene tejido conectivo laxo, fibras colágenas y elásticas, núcleos de fibrocitos y abundantes vasos."
          },
          {
            front: "Sustancia blanca",
            back: "Está en la periferia y se ve como una red laxa rosada con fibras nerviosas y núcleos pequeños, redondos y basófilos de neuroglia."
          },
          {
            front: "Sustancia gris",
            back: "Está en la zona central, es rosado intenso y tiene forma de H o mariposa. Contiene neuronas, células gliales y fibras nerviosas."
          },
          {
            front: "Neuronas de la sustancia gris",
            back: "Los cuerpos neuronales son piriformes, piramidales o estrellados. Sus núcleos son redondos, basófilos, vesiculosos, centrales y con nucléolo prominente."
          },
          {
            front: "Conducto del epéndimo y vasos",
            back: "El conducto ependimario puede verse permeable y tapizado por glioepitelio ependimario, o bien obliterado. También hay vasos en la sustancia blanca y gris."
          }
        ]
      },
      {
        id: "meninges",
        title: "MENINGES",
        cards: [
          {
            front: "Capas meníngeas del SNC",
            back: "Duramadre, aracnoides y piamadre. Aracnoides + piamadre forman las leptomeninges."
          },
          {
            front: "Duramadre",
            back: "Capa fuerte de tejido conectivo denso con fibroblastos, fibras colágenas y algunas elásticas. Su superficie interna está cubierta por células planas."
          },
          {
            front: "Aracnoides",
            back: "Delgada, retiforme y sin vasos sanguíneos. Está formada por tejido conectivo laxo y cubierta por células planas."
          },
          {
            front: "Piamadre",
            back: "Es muy fina, de tejido conectivo laxo, adherida al encéfalo y médula. Tiene muchos vasos, fibroblastos, macrófagos, células cebadas, algunos linfocitos y fibras colágenas y elásticas."
          },
          {
            front: "Espacio epidural",
            back: "Se ubica entre el periostio del conducto vertebral y la superficie externa de la duramadre. Contiene tejido conectivo laxo, adiposo, plexo venoso y nervios."
          },
          {
            front: "Espacios subdural y subaracnoideo",
            back: "El subdural es potencial y contiene líquido seroso. El subaracnoideo está entre trabéculas de aracnoides y piamadre y contiene líquido cefalorraquídeo."
          }
        ]
      },
      {
        id: "cerebelo",
        title: "CEREBELO",
        cards: [
          {
            front: "Organización general del cerebelo",
            back: "Presenta disposición laminar; cada laminilla tiene dos zonas y entre ellas pueden verse proyecciones de piamadre."
          },
          {
            front: "Capas de la corteza cerebelosa",
            back: "La sustancia gris o corteza cerebelosa tiene tres capas: molecular, Purkinje y granulosa."
          },
          {
            front: "Capa molecular",
            back: "Es la más superficial y se ve rosado pálido. Contiene células en cesto de Cajal, células estrelladas superficiales y núcleos de neuroglia."
          },
          {
            front: "Células de Purkinje",
            back: "Forman una hilera entre la capa molecular y la granulosa. Son voluminosas, piriformes, con núcleo grande basófilo y nucléolo oscuro. Sus dendritas van a la capa molecular."
          },
          {
            front: "Capa granulosa",
            back: "Es violeta y contiene células granulares muy abundantes, células de Golgi, otros núcleos de neuroglia y fibras nerviosas."
          },
          {
            front: "Sustancia blanca cerebelosa",
            back: "Se ubica en la parte central, con aspecto fibrilar rosado. Corresponde a fibras nerviosas y núcleos basófilos de neuroglia."
          }
        ]
      }
    ];

    const state = {
      selectedTopicId: null,
      selectedTopicTitle: "",
      deck: [],
      isMixMode: false
    };

    const root = document.documentElement;
    const topicGrid = document.getElementById("topicGrid");
    const menuView = document.getElementById("menuView");
    const cardsView = document.getElementById("cardsView");
    const cardsGrid = document.getElementById("cardsGrid");
    const selectedTitle = document.getElementById("selectedTitle");
    const selectedMeta = document.getElementById("selectedMeta");
    const themePill = document.getElementById("themePill");
    const emptyState = document.getElementById("emptyState");
    const backBtn = document.getElementById("backBtn");
    const printBtn = document.getElementById("printBtn");
    const sizeInput = document.getElementById("cardSize");
    const sizeValue = document.getElementById("sizeValue");

    function setCardSize(value) {
      const size = Number(value);
      root.style.setProperty("--card-size", `${size}px`);
      sizeValue.textContent = `${size} px`;
    }

    function shuffle(array) {
      const clone = array.slice();
      for (let index = clone.length - 1; index > 0; index -= 1) {
        const swapIndex = Math.floor(Math.random() * (index + 1));
        [clone[index], clone[swapIndex]] = [clone[swapIndex], clone[index]];
      }
      return clone;
    }

    function flattenCards() {
      return studyLibrary.flatMap((topic) =>
        (topic.cards || []).map((card, index) => ({
          topicId: topic.id,
          topicTitle: topic.title,
          cardIndex: index,
          front: card.front ?? "",
          back: card.back ?? ""
        }))
      );
    }

    function getTopicDeck(topicId) {
      if (topicId === "mix-random") {
        return shuffle(flattenCards());
      }

      const topic = studyLibrary.find((entry) => entry.id === topicId);
      if (!topic || !Array.isArray(topic.cards)) {
        return [];
      }

      return topic.cards.map((card, index) => ({
        topicId: topic.id,
        topicTitle: topic.title,
        cardIndex: index,
        front: card.front ?? "",
        back: card.back ?? ""
      }));
    }

    function renderTopicGrid() {
      topicGrid.innerHTML = "";

      topicDefinitions.forEach((topic) => {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "topic-button";
        button.dataset.topicId = topic.id;
        button.setAttribute("aria-label", `Abrir ${topic.title}`);

        if (topic.highlight) {
          button.classList.add("is-highlight");
        }

        if (topic.special) {
          button.classList.add("is-mix");
        }

        const wrapper = document.createElement("span");
        wrapper.className = "topic-button__inner";

        const label = document.createElement("span");
        label.className = "topic-label";
        label.textContent = topic.title;

        wrapper.append(label);
        button.append(wrapper);
        button.addEventListener("click", () => openTopic(topic.id));
        topicGrid.append(button);
      });
    }

    function buildCard(card) {
      const cardButton = document.createElement("button");
      cardButton.type = "button";
      cardButton.className = "study-card";
      cardButton.setAttribute("aria-pressed", "false");

      const inner = document.createElement("div");
      inner.className = "study-card__inner";

      const frontFace = document.createElement("div");
      frontFace.className = "study-card__face study-card__face--front";

      const frontKicker = document.createElement("span");
      frontKicker.className = "card-kicker";
      frontKicker.textContent = "Frente";

      const frontText = document.createElement("div");
      frontText.className = "card-text card-text--front";
      frontText.textContent = card.front || "Sin texto en el frente";

      const frontMeta = document.createElement("span");
      frontMeta.className = "card-meta";
      frontMeta.textContent = card.topicTitle || "Tema";

      frontFace.append(frontKicker, frontText, frontMeta);

      const backFace = document.createElement("div");
      backFace.className = "study-card__face study-card__face--back";

      const backKicker = document.createElement("span");
      backKicker.className = "card-kicker";
      backKicker.textContent = "Reverso";

      const backText = document.createElement("div");
      backText.className = "card-text";
      backText.textContent = card.back || "Sin texto en el reverso";

      const backMeta = document.createElement("span");
      backMeta.className = "card-meta";
      backMeta.textContent = card.topicTitle || "Tema";

      backFace.append(backKicker, backText, backMeta);

      inner.append(frontFace, backFace);
      cardButton.append(inner);

      cardButton.addEventListener("click", () => {
        const flipped = cardButton.classList.toggle("is-flipped");
        cardButton.setAttribute("aria-pressed", flipped ? "true" : "false");
      });

      return cardButton;
    }

    function showEmptyState(message) {
      emptyState.hidden = false;
      selectedMeta.textContent = message;
      cardsGrid.innerHTML = "";
    }

    function renderCards(deck) {
      cardsGrid.innerHTML = "";

      if (!deck.length) {
        showEmptyState(
          state.isMixMode
            ? "No hay tarjetas disponibles para mezclar."
            : "No hay tarjetas disponibles para este tema."
        );
        return;
      }

      emptyState.hidden = true;
      const fragment = document.createDocumentFragment();
      deck.forEach((card) => fragment.append(buildCard(card)));
      cardsGrid.append(fragment);
    }

    function setViewerMode(isVisible) {
      menuView.style.opacity = isVisible ? "0" : "1";
      menuView.style.transform = isVisible ? "translateY(-14px)" : "translateY(0)";
      menuView.style.maxHeight = isVisible ? "0px" : "5000px";
      menuView.style.pointerEvents = isVisible ? "none" : "auto";

      cardsView.style.opacity = isVisible ? "1" : "0";
      cardsView.style.transform = isVisible ? "translateY(0)" : "translateY(14px)";
      cardsView.style.maxHeight = isVisible ? "5000px" : "0px";
      cardsView.style.pointerEvents = isVisible ? "auto" : "none";

      backBtn.classList.toggle("is-visible", isVisible);
      backBtn.disabled = !isVisible;
    }

    function openTopic(topicId) {
      const topic = topicDefinitions.find((entry) => entry.id === topicId);
      if (!topic) {
        return;
      }

      state.selectedTopicId = topic.id;
      state.selectedTopicTitle = topic.title;
      state.isMixMode = topic.id === "mix-random";
      state.deck = getTopicDeck(topic.id);

      const cardCount = state.deck.length;
      selectedTitle.textContent = topic.title;

      if (topic.id === "mix-random") {
        selectedMeta.textContent = cardCount
          ? `Tarjetas mezcladas de los temas cargados: ${cardCount}.`
          : "No hay tarjetas disponibles para mezclar.";
        themePill.textContent = cardCount
          ? `${cardCount} tarjetas`
          : "Sin tarjetas";
      } else if (cardCount) {
        selectedMeta.textContent = `Tema seleccionado: ${topic.title} · ${cardCount} tarjetas.`;
        themePill.textContent = `${cardCount} tarjetas`;
      } else {
        selectedMeta.textContent = `Tema seleccionado: ${topic.title}.`;
        themePill.textContent = "Sin tarjetas";
      }

      renderCards(state.deck);

      menuView.classList.add("is-hidden");
      cardsView.classList.add("is-visible");
      setViewerMode(true);

      requestAnimationFrame(() => {
        cardsView.scrollIntoView({ behavior: "smooth", block: "start" });
      });
    }

    function returnToMenu() {
      menuView.classList.remove("is-hidden");
      cardsView.classList.remove("is-visible");
      setViewerMode(false);
    }

    sizeInput.addEventListener("input", (event) => {
      setCardSize(event.target.value);
    });

    backBtn.addEventListener("click", returnToMenu);
    printBtn.addEventListener("click", () => window.print());

    renderTopicGrid();
    setCardSize(sizeInput.value);
    setViewerMode(false);
    renderCards([]);
