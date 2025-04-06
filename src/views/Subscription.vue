<template>
  <!-- J'ai séparé chaque carte d'abonnement en div en y insérant des div pour le prix et pour les titres des cartes, que j'ai ensuite stylisés. -->

  <div class="abonnement-container">
    <div class="abonnement guerrier">
      <div class="abonnement-titre">Guerrier</div>
      <ul class="abonnement-liste">
        <li>Accès à des entraînements de base</li>
        <li>Suivi de vos pogrès</li>
        <li>Conseils nutritionnels</li>
        <li>Support client standard</li>
      </ul>

      <div class="abonnement-prix"><strong>9.99€</strong></div>
      <button>S'abonner</button>
      <button class="conditions-button" @click="openModal('condition')">i</button>
    </div>

    <div class="abonnement sayan">
      <div class="abonnement-titre">Sayan</div>
      <ul class="abonnement-liste">
        <li>Tous les avantages Guerrier</li>
        <li>Entraînements avancés</li>
        <li>Plans de repas personnalisés</li>
        <li>Accès à des coachs experts</li>
        <li>Sessions de Q&A en direct</li>
      </ul>
      <div class="abonnement-prix"><strong>19.99€</strong></div>
      <button>S'abonner</button>
      <button class="conditions-button" @click="openModal('condition')">i</button>
    </div>

    <div class="abonnement super">
      <div class="abonnement-titre">Super</div>
      <ul class="abonnement-liste">
        <li>Tous les avantages Sayan</li>
        <li>Entraînements ultra-personnalisés</li>
        <li>Support VIP 24/7</li>
        <li>Accès exclusif à des événements</li>
        <li>Analyse de performance détaillée</li>
      </ul>
      <div class="abonnement-prix"><strong>29.99€</strong></div>
      <button>S'abonner</button>
      <button class="conditions-button" @click="openModal('condition')">i</button>
    </div>
  </div>
  <div v-if="simodal" class="modal">
    <div class="modal-content">
      <h3>Conditions d'Abonnement</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <button @click="closeModal">Fermer</button>
    </div>
  </div>
</template>

<script setup>

import { ref } from 'vue';

const simodal = ref(false);

const openModal = () => {
  simodal.value = true;
};

const closeModal = () => {
  simodal.value = false;
};

</script>
<style scoped>
.modal {
  position: fixed; 
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); 
  display: flex;
  justify-content: center; 
  align-items: center; 
  z-index: 1000; }

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.abonnement-container {
  display: flex;
  gap: 75px;
  margin: 50px;
}

.abonnement {
  flex: 1;
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  position: relative;
  height: auto;
}



.abonnement.guerrier::before {
  background-color: #e0f7fa;
}

.abonnement.sayan::before {
  background-color: #fce4ec;
}

.abonnement.super::before {
  background-color: #fffde7;
}

.abonnement-titre {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 20px;
  text-align: center;
  margin-bottom: 20px;
  position: absolute;
  top: -15px;
  left: 50%;
  font-weight: bold;
}

.abonnement.guerrier .abonnement-titre {
  background-color: #ffffff;
  color: #222;
}

.abonnement.sayan .abonnement-titre {
  background-color: #ffffff;
  color: #222;
}

.abonnement.super .abonnement-titre {
  background-color: #ffffff;
  color: #222;
}

.abonnement-liste {
  list-style: none;
  padding: 0;
  margin-bottom: 30px;
}

.abonnement-liste li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

.abonnement-liste li:last-child {
  border-bottom: none;
}

.abonnement-prix {
  text-align: right;
  font-size: 1.2em;
}

.abonnement.guerrier {
  background-color: #c1db8a;
}

.abonnement.sayan {
  background-color: #4cd278;
}

.abonnement.super {
  background-color: #108d25;
}
.conditions-button {
  position: absolute; 
  bottom: 10px;
  right: 10px;
  width: 30px;
  height: 30px;
  border-radius: 50%; 
  background-color: #020202;
  color: #fff;
  border: 1px solid #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 16px;
  cursor: pointer;
}

.conditions-button:hover {
  background-color: #ffffff;
  color: #020202;
}

</style>
