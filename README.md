# html.css

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

