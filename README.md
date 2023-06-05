# html.css

My projects:
1. https://karlasz.github.io/html5-CSS3-layouts/Flexbox/71wro-project/71wro
2. https://karlasz.github.io/html5-CSS3-layouts/CSS-art/Santa-CSS-Art/santa
3. https://karlasz.github.io/html5-CSS3-layouts/blob/main/CSS-art/Pisanka-CSS-Art/pisanka
4. https://karlasz.github.io/html5-CSS3-layouts/Bootstrap/projekt-dobrakrzepa/project-bootstrap
5. https://karlasz.github.io/html5-CSS3-layouts/MarioBross-project/semantic-html5-index

<hr>

below used technologies and description
<!-- bootstrap -->
//-- 
siatka (grid) - to elastyczny szkielet strony
=> i roznie zachowuje sie na roznych szerokosciach i urzadzeniach
=> w siatce jest do 12 kolumn
=> mobile first, tablety, i kompy oraz tv
- mobile - jedno pod drugim
- tablet - obok siebie kolumny i 3 wiersze
- komp - obok siebie,a wszystko w 2 wierszach 

//-- 
responsove breakpoint prefixy

xs -> 0 do 576px - v4 nie ma juz i jak jest bez prefisku to znaczy ze to xs
sm -> 576px
md -> 768px
lg -> powyzej 992px
xl -> 1200px

schemat 
col-{prefix}-{ilosc_kolumn}

//--
zawsze zaczynamy sitatke boostrap  z 
<div class="container"> lub "container-fluid"
            <div class="row">

//--
offset - il. kolumn o ile chcemy przesunac nasz element

schemat 
 offset-{il.kolumn}

 //--
 order - jest o 0-12, 
 
  =>ustawia wszystkie elementy z wyzszym priorytetem na koniec,wiec jak tylko jednemu cos przypisalismy order to inne sa na 0 i wtedy ten order-1 jest najwiekszy
 =>order-first to tak jakby wartosc z -1
 lub
 order-last to wartosc order-13
 =>tutaj tez mozna prefixy uzywac i zmieniac ordery w zaleznosci od wielkosci

 => reverse- zawraca elementu od tylu

 // -
 5 typow marginesow 
  => od 0 d- 5 z czego 1 najmniejszy,a 5 najwiekszy

  schemat 
  m{l/r/b/t/...(dla wszystkich)}-({sm/md/lg})-{1..5/auto}

  paading podobnie
p{l/r/b/t/...(dla wszystkich)}-{1..5/auto}

//--
sizing
w-100 - width 100%
w-50 to 50%
w-75 75%

//- fixed-top - wszystko inne nie jest widziane i jest nad i na cala szerokosc
