<template>
    <div class="container">
        <div class="col">
            <div class="cards-container" :style="cardsContainerStyle">
            
            <div class="card h-100" id="compagnie_card" v-for="card in cards" :key="card.id" style="background: #f3f4f6; box-shadow: none;">
                
                    <a v-bind:href="'/details'">
                        <img src="/public/assets/img/car2.jpg" class="card-img-top" alt="..." style="border-radius: 10px 10px 0px 0px;">
                    </a>

                    <div class="card-body">
                        <router-link to="/detail">
                        <div class="row">
                            <div class="col-md-7">    
                                <h5 class="card-title" style="font-size: 15px; color:black">BG-Compagnie</h5>     
                            </div>
                            <div class="col-md-5 text-end">
                            <boutton class="btn btn-primary " style="background: white ; border-color: white ; border-radius: 30px; color: #219935; margin-top: -9px;">
                                <i class='bx bx-like' style="color: #219935;"></i> 30%
                            </boutton>
                            
                            </div>
                        </div>
                        </router-link>
                        <div class="row">
                        <div class="col-md-8">
                            <p class="card-text mt-2" style="font-size: 14px; "> <i class='bx bx-map'
                            style="color:#8b8b8b"></i> CI,rue 250</p>
                        </div>
                        <div class="col-md-4 text-center mt-2">
                            <i class='bx bx-car' style="color: #8b8b8b; font-size:21px;"></i>
                            </div>
                        </div>

                        
                    
                    </div>
                    
            </div>
            </div>
        </div>
  </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [],
        currentIndex: 0,
        cardWidth: 200,
        numCardsVisible: 4,
      };
    },
    computed: {
      cardsContainerStyle() {
        const translateX = -this.currentIndex * this.cardWidth;
        return {
          transform: `translateX(${translateX}px)`,
          transition: 'transform 1s',
        };
      },
    },
    mounted() {
      // Remplissez les données de cartes (vous pouvez les récupérer depuis une API ou les générer localement)
      for (let i = 1; i <= 8; i++) {
        this.cards.push({ id: i });
      }
  
      setInterval(this.nextCard, 2000); // Défilement automatique toutes les 2 secondes
    },
    methods: {
      nextCard() {
        this.currentIndex = (this.currentIndex + 1) % (this.cards.length - this.numCardsVisible + 1);
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    overflow: hidden;
    width: 100%;
    position: relative;
  }
  
  .cards-container {
    display: flex;
  }
  .card {
    width: 33%;
    height: 150px;
    background: #f3f4f6;
    margin: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
    border-radius: 5px;
  }
  </style>
 
  