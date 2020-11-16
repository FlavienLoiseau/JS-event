// Fonctionnalité 1 :
// On commence par un petit échauffement : lorsque l'utilisateur va cliquer sur le footer (portant le tag <footer>), tu vas afficher le mot "clique" en console.
// Cette fonctionnalité doit être codée avec un addEventListener("click", function(){ } car c'est une bonne habitude à prendre ! 😇
{
  let footer = document.getElementsByTagName("footer")
  let onFooterClick = function() {
    console.log("clique");
  };
  footer[0].addEventListener("click", onFooterClick); 
}
// Fonctionnalité 1-bis :
// Maintenant on va upgrader cette première fonctionnalité : lorsque l'utilisateur va cliquer sur le footer, tu vas afficher en console "clic numéro x" avec x qui commence à 1 et s'incrémente de +1 à chaque clic.
{
  let num = 0
  let footer = document.getElementsByTagName("footer")
  let onFooterClick = function() {
    console.log("clic numéro " + num);
    num += 1
  };
  footer[0].addEventListener("click", onFooterClick);
}
// Fonctionnalité 2 :
// On va enfin faire fonctionner ce satané "Hamburger Menu" qui s'affiche depuis le début mais qui n'actionne rien quand on clique dessus. C'est quoi un "hamburger menu" ? C'est ça, ce bouton avec trois lignes horizontales en haut à droite de la navbar.
// Tu vas faire que si quelqu'un clique sur ce bouton, l'élément HTML portant l'Id navbarHeader perde sa classe collapse. Une fois que ça, ça marche, fait que si on clique à nouveau dessus, la classe collapse soit rajoutée à nouveau à l'élément portant l'Id navbarHeader
{
  let toggler = document.getElementsByClassName("navbar-toggler")
  let onTogglerClick = function() {
    navbarHeader.classList.toggle("collapse")
  }
  toggler[0].addEventListener("click", onTogglerClick);
}
// Fonctionnalité 3 :
// À présent, on va faire cela : si on clique sur le bouton "Edit" de la première card, le texte de la card va se mettre en rouge de façon irréversible (sauf si on recharge la page). À toi de jouer !
{
  let edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")
  let onEditClick = function() {
    document.getElementsByClassName("card-text")[0].style.color = "red";
  }
  edit[0].addEventListener("click", onEditClick);
}
// Fonctionnalité 4 :
// On va faire quelque chose de similaire à la fonctionnalité 3 mais un peu plus complexe : si on clique sur le bouton "Edit" de la deuxième card, le texte de la card va se mettre en vert. Si on re-clique dessus, il redevient comme avant ! Tu l'as compris, il va falloir que tu cherches comment faire un "toggle" sur le style du texte. C'est plus compliqué que sur une classe. 
{
  let greenColor = false
  let edit = document.getElementsByClassName("btn btn-sm btn-outline-secondary")
  let onEditClick = function() {
    if (greenColor === false){
      document.getElementsByClassName("card-text")[1].style.color = "green";
      greenColor = true
    } else {
      document.getElementsByClassName("card-text")[1].style.color = "black";
      greenColor = false
    }
  }
  edit[1].addEventListener("click", onEditClick);
}
// Fonctionnalité 5 :
// Pour le fun, on va implémenter une fonctionnalité à la sauce ☢"nucléaire"🤯. Et comme elle est un peu dangereuse, on va la cacher… Voici comment elle doit marcher : si un utilisateur double clique sur la navbar en haut, tout Bootstrap disparaît et la page s'affiche comme si on avait oublié de mettre le CDN qui la relie au fichier CSS. Si possible, rends cette fonctionnalité réversible (un nouveau double-clic fait tout revenir à la normale).
{
  let isDisabled = false
  let navbar = document.getElementsByTagName("header")
  let onNavbarClick = function() {
    if (isDisabled === false){
      document.getElementsByTagName("link")[0].href = '';
      isDisabled = true;
    } else {
      document.getElementsByTagName("link")[0].href = 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css';
      isDisabled = false;
    }
  }
  navbar[0].addEventListener("dblclick", onNavbarClick); 
}
// Fonctionnalité 6 :
// T'as déjà implémenté 5 fonctionnalités d'interaction ! C'est top ! On va commencer à corser les choses.
// La fonctionnalité sera la suivante : si un utilisateur passe sa souris sur le bouton "View" d'une card (n'importe laquelle), celle-ci va se réduire. Cela veut dire que le texte disparaît, l'image n'apparaîtra qu'à 20 % de sa taille d'origine et les boutons "Edit" / "View" restent visibles. Cette fonction sera réversible : s'il repasse sa souris, la card redevient normale !
{
  let card = document.getElementsByClassName("card mb-4 box-shadow")

  for (let num = 0; num < card.length; num++) {
    let image = card[num].getElementsByClassName("card-img-top")[0];
    let text = card[num].getElementsByClassName("card-text")[0];
    let view = card[num].getElementsByClassName("btn btn-sm btn-success")[0];

    function reduce() {
      if(text.style.display == "") {
        image.style.width = "20%";
        text.style.display = "none";
      } else {
        image.style.width = "100%"; 
        text.style.display = "";
      }
    }

    view.addEventListener("mouseover", reduce);
  }
}
// Fonctionnalité 7 :
// Allez on va rajouter un peu de WTF dans la page : si un utilisateur clique sur le bouton gris ==>, la dernière card (en bas à droite) va passer en premier (en haut à gauche). On va pouvoir faire tourner les cards !
{
  let rightButton = document.getElementsByClassName("btn btn-secondary my-2")[0];
  let cards = document.getElementsByClassName("row")[1];
  let cardsMaxId = document.getElementsByClassName("card mb-4 box-shadow").length - 1;

  function move_forward() {
    cards.insertBefore(cards.children[cardsMaxId], cards.children[0]);
  }

  rightButton.addEventListener("click", move_forward)
}
// Fonctionnalité 8 :
// Évidemment tu t'y attendais : on va faire tourner les card dans l'autre sens aussi. Donc si un utilisateur clique sur le bouton bleu <==, la première card devra passer en dernier. À première vue, tu te dis que si tu as réussi à faire la fonctionnalité précédente, celle-ci c'est du gateau... sauf qu'il y a quelques pièges. 😈 
{
  let leftButton = document.getElementsByClassName("btn btn-primary my-2")[0];
  let cards = document.getElementsByClassName("row")[1];
  let cardsMaxId = document.getElementsByClassName("card mb-4 box-shadow").length - 1;

  function move_backward() {
    leftButton.removeAttribute("href");
    cards.insertBefore(cards.children[0], cards.children[cardsMaxId].nextSibling);
  }

  leftButton.addEventListener("click", move_backward);
}
// Fonctionnalité 9 :
// Bon si t'es arrivé jusque-là, c'est que t'as besoin d'un peu de challenge. Du coup je t'ai concocté une fonctionnalité de derrière les fagots, spécialement conçue pour les moussaillons pas piqués des hannetons (this sentence is brought to you by www.vieilles-expressions.fr). Voici ce qu'elle va devoir faire :
//   La fonctionnalité se déclenchera si le logo de la page (JS & Events) est sélectionné et qu'on appuie sur une touche spécifique du clavier.
//   Si l'utilisateur presse la touche "a", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à gauche de l'écran.
//   Si l'utilisateur presse la touche "y", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap au milieu de l'écran.
//   Si l'utilisateur presse la touche "p", l'ensemble de la page va être condensé sur 4 colonnes Bootstrap à droite de l'écran.
//   Si l'utilisateur presse la touche "b", tout redevient normal.
{
  
}