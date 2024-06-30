document.addEventListener("DOMContentLoaded", () => {
    const armas = {
      'RIFLE DE ASALTO': {
        'ACR': ['Mira Holográfica', 'Empuñadura delantera', 'Culata táctica'],
        'RAM-7': ['Mira Reflex', 'Silenciador ligero', 'Cañón extendido'],
        'GRAU 5.56': ['Mira Térmica', 'Empuñadura punteada', 'Cañón integrado'],
        'KILO 141': ['Mira Láser', 'Empuñadura de precisión', 'Silenciador monolítico'],
        'M4A1': ['Mira Corredor', 'Empuñadura de agente', 'Culata táctica extendida']
      },
      'SUBFUSIL': {
        'MP5': ['Mira Reflex', 'Cargador ampliado', 'Empuñadura punteada'],
        'HRM-9': ['Mira Holográfica', 'Empuñadura punteada', 'Silenciador ligero'],
        'UZI': ['Mira Láser', 'Cargador extendido', 'Empuñadura ergonómica'],
        'PP19 BIZON': ['Mira Holográfica', 'Cargador de tambor', 'Empuñadura de madera'],
        'MP7': ['Mira de punto rojo', 'Cargador doble', 'Empuñadura de silicona']
      },
      'FRANCOTIRADOR': {
        'KAR-97': ['Mira de francotirador x8', 'Bipode', 'Culata acolchada'],
        'MORS': ['Visor térmico', 'Silenciador pesado', 'Cañón pesado'],
        'AX-50': ['Mira de precisión', 'Silenciador monolítico', 'Culata ajustable'],
        'DRAGONUV': ['Mira telescópica', 'Cargador extendido', 'Empuñadura de cuero'],
        'HDR': ['Mira Variable', 'Silenciador ligero', 'Cañón largo']
      },
      'LANZACOHETES': {
        'RPG-7': ['Mira termal', 'Cohete explosivo', 'Empuñadura especial'],
        'JOKR': ['Mira láser', 'Cohete incendiario', 'Empuñadura reforzada'],
        'STRELA-P': ['Mira infrarroja', 'Cohete rastreador', 'Empuñadura táctica'],
        'PILA': ['Mira térmica', 'Cohete EMP', 'Empuñadura ergonómica'],
        'MGL-32': ['Mira holográfica', 'Cohete de racimo', 'Empuñadura extendida']
      },
      'ESCOPETA': {
        'Model 680': ['Culata táctica', 'Cañón corto', 'Empuñadura antideslizante'],
        'R9-0': ['Culata ligera', 'Cañón extendido', 'Empuñadura ergonómica'],
        '725': ['Culata de combate', 'Cañón largo', 'Empuñadura de madera'],
        'Origin 12': ['Culata de policía', 'Cañón perforante', 'Empuñadura táctica'],
        'VLK Rogue': ['Culata de cerrojo', 'Cañón de brecha', 'Empuñadura de silicona']
      }
    };
  
    const categorias = Object.keys(armas);
    const categorySelect = document.querySelector("#categorySelect");
    const weaponSelect = document.querySelector("#weaponSelect");
    const classForm = document.querySelector("#classForm");
    const selectedCategory = document.querySelector("#selectedCategory");
    const selectedWeapon = document.querySelector("#selectedWeapon");
    const selectedAccessories = document.querySelector("#selectedAccessories");
    const prevSelectedCategory = document.querySelector("#prevSelectedCategory");
    const prevSelectedWeapon = document.querySelector("#prevSelectedWeapon");
    const prevSelectedAccessories = document.querySelector("#prevSelectedAccessories");
    const saveClassCheckbox = document.querySelector("#saveClass");
    const successMessage = document.querySelector("#successMessage");
  
    function actualizarOpcionesDeArmas(categoriaSeleccionada) {
      weaponSelect.innerHTML = '<option value="">Elige...</option>';
      if (categoriaSeleccionada) {
        const armasDeCategoria = armas[categoriaSeleccionada];
        Object.keys(armasDeCategoria).forEach(arma => {
          const option = document.createElement("option");
          option.value = arma;
          option.textContent = arma;
          weaponSelect.appendChild(option);
        });
      }
    }
  
    categorySelect.addEventListener("change", (e) => {
      const selectedCategory = e.target.value;
      actualizarOpcionesDeArmas(selectedCategory);
    });
  
    classForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const category = categorySelect.value;
      const weapon = weaponSelect.value;
      if (category && weapon) {
        const accessories = armas[category][weapon].join(', ');
        selectedCategory.textContent = category;
        selectedWeapon.textContent = weapon;
        selectedAccessories.textContent = accessories;
  
        const saveSelection = saveClassCheckbox.checked;
        if (saveSelection) {
          saveSelectionToLocalStorage(category, weapon, accessories);
        }
  
        const prevSelection = loadPreviousSelectionFromLocalStorage();
        if (prevSelection) {
          prevSelectedCategory.textContent = prevSelection.category;
          prevSelectedWeapon.textContent = prevSelection.weapon;
          prevSelectedAccessories.textContent = prevSelection.accessories;
        }
      }
    });
  
    const currentSelection = loadSelectionFromLocalStorage();
    if (currentSelection) {
      selectedCategory.textContent = currentSelection.category;
      selectedWeapon.textContent = currentSelection.weapon;
      selectedAccessories.textContent = currentSelection.accessories;
    }
  
    const previousSelection = loadPreviousSelectionFromLocalStorage();
    if (previousSelection) {
      prevSelectedCategory.textContent = previousSelection.category;
      prevSelectedWeapon.textContent = previousSelection.weapon;
      prevSelectedAccessories.textContent = previousSelection.accessories;
    }
  });
  
