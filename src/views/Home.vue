<template>
  <div class="home">
    <div class="phrase">
      <div class="phrase1">
        <h1>La patate ca se cultive avec <span class="gras">CROSS'FRITE</span> </h1>
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
          <img class="img"
            src="../assets/female_coach_logo.png.jpg"
            alt="Coach 1"
            width="175"
            height="175"
          />

          <div class="skill">
            <ul>
              <li>Formation scientifique</li>
              <li>Programme sur mesure</li>
              <li>Suivi regulier</li>
            </ul>
          </div>
        </div>
        <div class="part2">
          <div class="presentation">
            <h2>Emilie</h2>
            <h3>la specialiste du fitness</h3>
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
          <img
            src="../assets/male_coach_logo.png.jpg"
            alt="Coach 2"
            width="175"
            height="175"
          />
          <div class="skill">
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
          <div class="presentation">
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
.phrase{
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
  justify-content: space-between
}
</style>
