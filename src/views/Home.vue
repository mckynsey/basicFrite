<template>
<!-- Ici, j'ai découpé mon code en plusieurs div afin de pouvoir les manipuler plus simplement. 
 Pour ce faire, j'ai d'abord placé ma phrase d'accroche dans une div pour lui donner le style que je veux.
  J'ai fait de même pour le texte d'accroche. Ensuite, j'ai englobé les coachs dans une classe pour les diviser en sous-divs de 2 cartes,
   qui représentent chacune 2 div : une contenant une colonne avec l'image et les compétences (skills), et l'autre avec le titre et la présentation. -->
<div class="home">
    <div class="phrase">
      <div class="phrase1">
        <h1>
          La patate ca se cultive avec <span class="gras">CROSS'FRITE</span>
        </h1>
      </div>
    </div>
    <div class="pres">
      <p>
        Cross'Frite, c'est bien plus qu'une salle de sport. C'est un lieu où
        l'énergie débordante rencontre la convivialité, où chaque séance est une
        aventure et où l'on repousse ses limites dans la bonne humeur.
      </p>
    </div>
    <div class="coach">
      <div class="coach1 bouille">
        <div class="part1">
          <img
            class="img"
            src="../assets/women logo.png"
            alt="Coach 1"
            width="175"
            height="175"
          />

          <div class="skill1">
            <ul>
              <li>Formation scientifique</li>
              <li>Programme sur mesure</li>
              <li>Suivi regulier</li>
            </ul>
          </div>
        </div>
        <div class="part2">
          <h2>Emilie</h2>
          <h3>la specialiste du fitness</h3>
          <div class="presentation1">
            <p>
              Émilie est une coach professionnelle qui utilise une approche
              scientifique pour vous aider à atteindre vos objectifs de fitness.
              Elle vous fournira des conseils nutritionnels personnalisés et un
              plan d'entraînement adapté à vos besoins.
            </p>
          </div>
        </div>
      </div>
      <div class="coach2 bouille">
        <div class="part1">
          <img src="../assets/men.png" alt="Coach 2" width="175" height="175" />
          <div class="skill2">
            <ul>
              <li>Motivation</li>
              <li>Conaissance appronfondie</li>
              <li>Capacité a s'adapter</li>
            </ul>
          </div>
        </div>
        <div class="part2">
          <h2>ALEX</h2>
          <h3>le motivant</h3>
          <div class="presentation2">
            <p>
              Alex est un coach passionné qui sait comment vous motiver à
              atteindre vos objectifs. Il vous aidera à concevoir un programme
              d'entraînement personnalisé qui vous convient et vous accompagnera
              tout au long de votre parcours.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>
<style scoped>
.phrase {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.phrase1 {
  text-align: center;
  margin-top: 25%;
  font-size: 1em;
  margin: 80px;
  margin-bottom: 10px;
  width: 900px;
  color: #000000;
  background-color: #ffd621;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 30%);
  padding-bottom: 50px;
  text-align: center;
}
h1 {
  font-size: 2em;
  color: #000000;
  font-weight: normal;
}

.gras {
  font-weight: bold;
  color: #031046;
}

.pres {
  text-align: center;
  margin: 100px;
  background-color: #e6eff6;
}
p {
  font-size: 1.5em;
  margin: 20px;
  color: #000000;
}
.coach {
  display: flex;
  justify-content: center;
}

.bouille {
  width: 500px;
  height: 600px;
  background-color: bisque;
  border-radius: 30px;
  margin: 0 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.part1,
.part2 {
  width: 50%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.coach1 {
  background-color: #e5bff2;
  position: relative;
}
.coach2 {
  background-color: #9a93e6;
  position: relative;
}
.presentation1 {
  background-color: #f7d4d4;
}
.presentation2 {
  background-color: #6d7cef;
}
.skill1,
.skill2 {
  padding: 15px 30px;
  border-radius: 5px;
  box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.2), 0 -10px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
}

.skill1 {
  background-color: #f0f0f0;
}

.skill2 {
  background-color: #e0e0e0;
}
.coach1 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 168px;
  height: 175px;
  border-radius: 50%;
}
.coach2 img {
  position: absolute;
  top: 0;
  left: 0;
  width: 168px;
  height: 175px;
  border-radius: 50%;
}
</style>
