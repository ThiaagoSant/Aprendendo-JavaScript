// Adicione a classe ativo a todos os itens do menu

const menuItens = document.querySelectorAll(".menu a");

menuItens.forEach(menuItem => menuItem.classList.add("ativo"));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro

menuItens.forEach(menuItem => {
  menuItem.classList.remove("ativo");
  menuItens[0].classList.add("ativo");
});

// Verifique se as imagens possuem o atributo alt

const todasImgs = document.querySelectorAll("img");

todasImgs.forEach(img => (img.hasAttribute("alt")) ? console.log(img, "Não possui o atributo alt") : console.log(img, "Possui o atributo alt"));

// Modifique o href do link externo no menu

const linkExternoModificado = document.querySelector("a[href^='https://']").setAttribute("href", "https://web.whatsapp.com/");

