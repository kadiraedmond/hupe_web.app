<script setup>
import { onBeforeMount, ref } from "vue";
import { doc, collection, getDocs } from "firebase/firestore";
import { firestoreDb } from "@/firebase/firebase.js";

const imageSlideColRef = collection(firestoreDb, "slideAcceuilImages");
const companiesColRef = collection(firestoreDb, "compagnies");
const carsLocationColRef = collection(firestoreDb, 'location_vehicules')
const usersColRef = collection(firestoreDb, 'users')
const reservationsColRef = collection(firestoreDb, 'reservation')

const companie5DocRef = doc(firestoreDb, 'compagnies', 'MIKsd9oIvxP860LDUMm9XNpvwzV2')
const companie6DocRef = doc(firestoreDb, 'compagnies', 'T599SBhvhnQZf1MPPO5bJMF6dYi1')
const companie7DocRef = doc(firestoreDb, 'compagnies', 'YYiQmKBenyUzKzyxIEO1vHxfEPb2')

const companie5SubColRef = collection(companie5DocRef, 'vehicules_programmer')
const companie6SubColRef = collection(companie6DocRef, 'vehicules_programmer')
const companie7SubColRef = collection(companie7DocRef, 'vehicules_programmer')

const companie5SubData = ref([])
const companie6SubData = ref([])
const companie7SubData = ref([])

const fetchCompaniesSubCollectionsData = async () => {
   try {
    const snapshot5 = await getDocs(companie5SubColRef);
    const snapshot6 = await getDocs(companie6SubColRef);
    const snapshot7 = await getDocs(companie7SubColRef);

    snapshot5.docs.forEach((doc) => companie5SubData.value.push({ ...doc.data() }));
    snapshot6.docs.forEach((doc) => companie6SubData.value.push({ ...doc.data() }));
    snapshot7.docs.forEach((doc) => companie7SubData.value.push({ ...doc.data() }));

    // console.log(companie5SubData.value)
    // console.log(companie6SubData.value)
    // console.log(companie7SubData.value)
  } catch (err) {
    console.log(err.message);
  }
}


const slideImages = ref([])
const companies = ref([])
const carsForLocation = ref([])
const users = ref([])
const reservations = ref([])

const fetchSlideImages = async () => {
  try {
    const snapshot = await getDocs(imageSlideColRef);
    snapshot.docs.forEach((doc) => slideImages.value.push({ ...doc.data() }));
    // console.log(slideImages.value)
  } catch (err) {
    console.log(err.message);
  }
};

const fetchCompanies = async () => {
  try {
    const snapshot = await getDocs(companiesColRef);
    snapshot.docs.forEach((doc) => companies.value.push(doc.data()));
    // console.log(companies.value[5])
  } catch (error) {
    console.log(err.message);
  }
};

const fetchCars = async () => {
  try {
    const snapshot = await getDocs(carsLocationColRef);
    snapshot.docs.forEach((doc) => carsForLocation.value.push({ ...doc.data() }));
    // console.log(carsForLocation.value)
  } catch (err) {
    console.log(err.message);
  }
};

const fetchUsers = async () => {
   try {
    const snapshot = await getDocs(usersColRef);
    snapshot.docs.forEach((doc) => users.value.push({ ...doc.data() }));
    // console.log(users.value)
  } catch (err) {
    console.log(err.message);
  }
}

const fetchReservations = async () => {
   try {
    const snapshot = await getDocs(reservationsColRef);
    snapshot.docs.forEach((doc) => reservations.value.push({ ...doc.data() }));
    // console.log(reservations.value)
  } catch (err) {
    console.log(err.message);
  }
}

onBeforeMount(() => {
  fetchSlideImages()
  fetchCompanies()
  fetchCars()
  fetchUsers()
  fetchReservations()

  fetchCompaniesSubCollectionsData()
})
</script>

<template>
  <!-- ========== Hero one =========== -->
  <section id="hero" class="d-flex">
    <div class="container-fluid" style="background: #219935">
      <div class="row g-3 mb-4" style="padding: 93px !important">
        <div
          class="col-lg-6 col-md-6 bg-white border-2"
          style="background: #219935 !important"
        >
          <p class="text-white" style="margin-top: 25%">
            Découvrez notre sélection de véhicules de qualité à des tarifs
            imbattables. Que ce soit pour un voyage d'affaires ou des vacances
            en famille, trouvez la voiture parfaite pour votre escapade.
            Réservez en ligne, choisissez votre destination, et préparez-vous à
            prendre la route.
          </p>
        </div>
        <div
          class="col-lg-6 col-md-6 bg-white border-2"
          id="heros_left_section"
          style="background: #219935 !important"
        >
          <div
            id="carouselExampleSlidesOnly"
            class="carousel slide"
            data-bs-ride="carousel"
            style="height: 400px"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  :src="slideImages[0].downloadURL"
                  class="d-block w-100"
                  style="max-height:350px; object-fit: cover; border-radius: 10px;"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="slideImages[1].downloadURL"
                  class="d-block w-100 h-50"
                  style="max-height:350px; object-fit: cover; border-radius: 10px;"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  :src="slideImages[2].downloadURL"
                  class="d-block w-100 h-50"
                  style="max-height:350px; object-fit: cover; border-radius: 10px;"
                  alt="..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <main id="main">
    <!-- ======= Features Section ======= -->

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Que voulez-vous faire ?</h2>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/location" class="mt-4">
                <img
                  src="/public/assets/img/car.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/location" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Louer un véhicule
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/reservation" class="mt-4 text-black">
                <img
                  src="/public/assets/img/bus.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Reserver un ticket de bus
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/reservation" class="mt-4" id="a">
                <img
                  src="/public/assets/img/engin.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Louer un gros engin
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0 text-center"
              style="background: #f6f8fb"
            >
              <router-link to="/reservation" class="mt-4" id="a">
                <img
                  src="/public/assets/img/engine.png"
                  class="img-fluid w-25"
                  alt="..."
                />
              </router-link>

              <div class="card-body" style="background: #219935">
                <router-link to="/reservation" class="mt-4" id="a">
                  <h5 class="card-title text-white" style="font-size: 17px">
                    Acheter un engin
                  </h5>
                </router-link>

                <p class="card-text" style="font-size: 14px">
                  Évitez les files d'attente et réservez vos billets de bus en
                  quelques instants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>En promotions</h2>
              <p>
                Ne manquez pas nos offres spéciales du moment ! Découvrez des
                promotions exclusives pour rendre votre voyage encore plus
                mémorable.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-3 g-4">
          <div class="col">
            <div class="card" style="background: #a6a6a621">
              <div class="row" style="padding: 6px">
                <div class="col-md-12 d-flex">
                  <img
                    :src="companies[5].imageLogoUrl"
                    class="img-fluid"
                    alt="..."
                    style="width: 25px; height: 25px; margin-top: 6px"
                  />
                  <h6
                    style="font-size: 12px; margin-left: 5px; margin-top: 10px"
                  >
                    {{ companies[5].raison_social }}
                  </h6>
                  <p style="font-size: 12px; margin-left: 5px; margin-top: 6px">
                    <img
                      src="/public/assets/img/icone/map.png"
                      class="img-fluid"
                      alt="..."
                    />
                    {{ companies[5].adresse }}
                  </p>
                </div>
              </div>
              <div
                class="card h-100"
                id="compagnie_card"
                style="padding: 6px; background: #a6a6a621"
              >
                <router-link
                  to="/detail"
                  style="
                    border: 1px solid;
                    border-radius: 5px;
                    border-color: #a6a6a6;
                  "
                >
                  <img
                    :src="companie5SubData[0].vehicule_image_url"
                    class="card-img-top"
                    alt="..."
                    style="
                      border-radius: 5px 5px 5px 5px;
                      height: 215px !important;
                      object-fit: cover;
                    "
                  />
                </router-link>
                <button class="btn btn-primary" id="badges">
                  <s> 5000 FCFA </s>
                </button>
                <button class="btn btn-primary" id="badges0">{{ companie5SubData[0].montant }} FCFA</button>
                <button class="btn btn-primary" id="badges012">93%</button>
                <button class="btn btn-primary" id="badges0121">
                  {{ companie5SubData[0].vehicule }}
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="background: #a6a6a621">
              <div class="row" style="padding: 6px">
                <div class="col-md-12 d-flex">
                  <img
                    :src="companies[6].imageLogoUrl"
                    class="img-fluid"
                    alt="..."
                    style="width: 25px; height: 25px; margin-top: 6px"
                  />
                  <h6
                    style="font-size: 12px; margin-left: 5px; margin-top: 10px"
                  >
                    {{companies[6].raison_social}}
                  </h6>
                  <p style="font-size: 12px; margin-left: 5px; margin-top: 6px">
                    <img
                      src="/public/assets/img/icone/map.png"
                      class="img-fluid"
                      alt="..."
                    />
                    {{companies[6].adresse}}
                  </p>
                </div>
              </div>
              <div
                class="card h-100"
                id="compagnie_card"
                style="padding: 6px; background: #a6a6a621"
              >
                <router-link
                  to="/detail"
                  style="
                    border: 1px solid;
                    border-radius: 5px;
                    border-color: #a6a6a6;
                  "
                >
                  <img
                    :src="companie6SubData[0].vehicule_image_url"
                    class="card-img-top"
                    alt="..."
                    style="
                      border-radius: 5px 5px 5px 5px;
                      height: 215px !important;
                      object-fit: cover;
                    "
                  />
                </router-link>
                <button class="btn btn-primary" id="badges">
                  <s> 5000 FCFA </s>
                </button>
                <button class="btn btn-primary" id="badges0">{{ companie6SubData[0].montant }} FCFA</button>
                <button class="btn btn-primary" id="badges012">93%</button>
                <button class="btn btn-primary" id="badges0121">
                  {{ companie6SubData[0].vehicule }}
                </button>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card" style="background: #a6a6a621">
              <div class="row" style="padding: 6px">
                <div class="col-md-12 d-flex">
                  <img
                    :src="companies[7].imageLogoUrl"
                    class="img-fluid"
                    alt="..."
                    style="width: 25px; height: 25px; margin-top: 6px"
                  />
                  <h6
                    style="font-size: 12px; margin-left: 5px; margin-top: 10px"
                  >
                    {{companies[7].raison_social}}
                  </h6>
                  <p style="font-size: 12px; margin-left: 5px; margin-top: 6px">
                    <img
                      src="/public/assets/img/icone/map.png"
                      class="img-fluid"
                      alt="..."
                    />
                    {{companies[7].adresse}}
                  </p>
                </div>
              </div>
              <div
                class="card h-100"
                id="compagnie_card"
                style="padding: 6px; background: #a6a6a621"
              >
                <router-link
                  to="/detail"
                  style="
                    border: 1px solid;
                    border-radius: 5px;
                    border-color: #a6a6a6;
                  "
                >
                  <img
                    :src="companie7SubData[0].vehicule_image_url"
                    class="card-img-top"
                    alt="..."
                    style="
                      border-radius: 5px 5px 5px 5px;
                      height: 215px !important;
                      object-fit: cover;
                    "
                  />
                </router-link>
                <button class="btn btn-primary" id="badges">
                  <s> 5000  FCFA </s>
                </button>
                <button class="btn btn-primary" id="badges0">{{ companie7SubData[0].montant }} FCFA</button>
                <button class="btn btn-primary" id="badges012">93%</button>
                <button class="btn btn-primary" id="badges0121">
                  {{ companie7SubData[0].vehicule }}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Compagnies de locations populaires</h2>
              <p>
                Explorez les compagnies de location les plus appréciées par les
                voyageurs du monde entier. Faites confiance à l'expérience et à
                la qualité.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/detail">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link
                  to="/detail"
                  class="nav-link px-4"
                  id="a_compagnie"
                >
                  <div class="row">
                    <div class="col-md-8">
                      <div>
                        <h5 class="card-title" style="font-size: 15px">
                          {{ companies[0].raison_social }}
                        </h5>
                      </div>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[0].adresse }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/detail">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link
                  to="/detail"
                  class="nav-link px-4"
                  id="a_compagnie"
                >
                  <div class="row">
                    <div class="col-md-8">
                      <router-link to="/detail">
                        <h5 class="card-title" style="font-size: 15px">
                          {{ companies[1].raison_social }}
                        </h5>
                      </router-link>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[1].adresse }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/detail">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail" id="a_compagnie">
                  <div class="row">
                    <div class="col-md-8">
                      <h5 class="card-title" style="font-size: 15px">
                        {{ companies[2].raison_social }}
                      </h5>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[2].adresse }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/detail">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail" id="a_compagnie">
                  <div class="row">
                    <div class="col-md-8">
                      <h5 class="card-title" style="font-size: 15px">
                        {{ companies[3].raison_social }}
                      </h5>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[3].adresse }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Véhicules populaires</h2>
              <p>
                Découvrez les véhicules les plus prisés pour votre prochain
                voyage. Confort, style et fiabilité, nous avons tout ce dont
                vous avez besoin.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px">
                <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img
                          :src="users[4].imageUrl"
                          alt
                          class="w-px-40 h-auto rounded-circle"
                          style="width: 90px"
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 15px">
                            {{ users[4].firstName }}
                          </h5>
                          <p class="card-text mt-2" style="font-size: 14px">
                            <i
                              class="bx bx-map"
                              id="icon_menu"
                              style="color: #219935"
                            ></i>
                            {{ users[4].addresse }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="
                      background: #219935;
                      border-color: #219935;
                      margin-top: 15px;
                    "
                  >
                    {{ carsForLocation[6].montant }} FCFA
                  </button>
                </div>
              </div>
              <div
                class="card mb-3 mt-4"
                style="
                  max-width: 540px;
                  margin: 10px;
                  margin-top: -10px !important;
                "
              >
                <div class="row g-0" style="margin: 10px">
                  <div class="col-md-4">
                    <img
                      :src="carsForLocation[6].vehicule_image_url"
                      class="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ carsForLocation[6].vehicule }}</h5>
                      <p class="card-text">
                        <strong>Modéle : </strong> {{ carsForLocation[6].modele }}
                      </p>
                      <p class="card-text">
                        <strong>Essence : </strong> Automobile
                      </p>
                      <p class="card-text">
                        <strong>Immatriculation : </strong> {{ carsForLocation[6].plaque_vehicule }}
                      </p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px">
                <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img
                          :src="users[8].imageUrl"
                          alt="..."
                          class="w-px-40 h-auto rounded-circle"
                          style="width: 90px"
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 15px">
                            {{ users[8].firstName }}
                          </h5>
                          <p class="card-text mt-2" style="font-size: 14px">
                            <i
                              class="bx bx-map"
                              id="icon_menu"
                              style="color: #219935"
                            ></i>
                            {{ users[8].addresse }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="
                      background: #219935;
                      border-color: #219935;
                      margin-top: 15px;
                    "
                  >
                    {{ carsForLocation[2].montant }} FCFA
                  </button>
                </div>
              </div>
              <div
                class="card mb-3 mt-4"
                style="
                  max-width: 540px;
                  margin: 10px;
                  margin-top: -10px !important;
                "
              >
                <div class="row g-0" style="margin: 10px">
                  <div class="col-md-4">
                    <img
                      :src="carsForLocation[6].vehicule_image_url"
                      class="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{{ carsForLocation[2].vehicule }}</h5>
                      <p class="card-text">
                        <strong>Modéle : </strong> {{ carsForLocation[2].modele }}
                      </p>
                      <p class="card-text">
                        <strong>Essence : </strong> Automobile
                      </p>
                      <p class="card-text">
                        <strong>Immatriculation : </strong> {{ carsForLocation[2].plaque_vehicule }}
                      </p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Compagnies de transport populaires</h2>
              <p>
                Simplifiez votre trajet en choisissant parmi les compagnies de
                transport les plus populaires. Voyagez en toute tranquillité
                avec nos partenaires de confiance.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/details">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail" id="a_compagnie">
                  <div class="row">
                    <div class="col-md-8">
                      <h5 class="card-title" style="font-size: 15px">
                        {{ companies[4].raison_social }}
                      </h5>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[4].adresse }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/details">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail" id="a_compagnie">
                  <div class="row">
                    <div class="col-md-8">
                      <h5 class="card-title" style="font-size: 15px">
                        {{ companies[5].raison_social }}
                      </h5>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[5].adresse }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/details">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail" id="a_compagnie">
                  <div class="row">
                    <div class="col-md-8">
                      <h5 class="card-title" style="font-size: 15px">
                        {{ companies[6].raison_social }}
                      </h5>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[6].adresse }}
                </p>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="compagnie_card">
              <router-link to="/detail">
                <img
                  :src="carsForLocation[6].vehicule_image_url"
                  class="card-img-top"
                  alt="..."
                  style="border-radius: 10px 10px 0px 0px"
                />
              </router-link>

              <div class="card-body">
                <router-link to="/detail" id="a_compagnie">
                  <div class="row">
                    <div class="col-md-8">
                      <h5 class="card-title" style="font-size: 15px">
                        {{ companies[8].raison_social }}
                      </h5>
                    </div>
                    <div class="col-md-4 text-end">
                      <i
                        class="bx bx-car"
                        id="icon_menu"
                        style="color: #219935"
                      ></i>
                    </div>
                  </div>
                </router-link>

                <p class="card-text mt-2" style="font-size: 14px">
                  <i
                    class="bx bx-map"
                    id="icon_menu"
                    style="color: #219935"
                  ></i>
                  {{ companies[8].adresse }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Expertise et conseils en immobiliers Section ======= -->
    <section id="features" class="features">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Destinations populaires</h2>
              <p>
                Explorez les destinations les plus en vogue du moment. Trouvez
                l'inspiration pour votre prochain voyage et vivez des
                expériences inoubliables.
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-2 g-4">
          <div class="col">
            <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px">
                <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img
                          :src="carsForLocation[6].client_profil_url"
                          alt
                          class="w-px-40 h-auto rounded-circle"
                          style="width: 90px"
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 15px">
                            {{ users[6].lastName }}
                          </h5>
                          <p class="card-text mt-2" style="font-size: 14px">
                            <i
                              class="bx bx-map"
                              id="icon_menu"
                              style="color: #219935"
                            ></i>
                            {{ users[6].addresse }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="
                      background: #219935;
                      border-color: #219935;
                      margin-top: 15px;
                    "
                  >
                    {{ carsForLocation[6].montant }} FCFA
                  </button>
                </div>
              </div>
              <div
                class="card mb-3 mt-4"
                style="
                  max-width: 540px;
                  margin: 10px;
                  margin-top: -10px !important;
                "
              >
                <div class="row g-0" style="margin: 10px">
                  <div class="col-md-4">
                    <img
                      :src="carsForLocation[4].vehicule_image_url"
                      class="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">
                        <strong>Trajet : </strong> {{ reservations[8].destination }}
                      </p>
                      <p class="card-text">
                        <strong>Escales : </strong> {{ reservations[8].escale }}
                      </p>
                      <p class="card-text">
                        <strong>Convocation : </strong>13 h 11 min
                      </p>
                      <p class="card-text">
                        <strong>Jours du voyages : </strong> Lundi
                      </p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100" id="card_compagnie">
              <div class="row" style="margin: 10px">
                <div class="col-md-6">
                  <div class="card mb-3 border-0" style="max-width: 540px">
                    <div class="row g-1">
                      <div class="col-md-4">
                        <img
                          :src="carsForLocation[4].client_profil_url"
                          alt
                          class="w-px-40 h-auto rounded-circle"
                          style="width: 90px"
                        />
                      </div>
                      <div class="col-md-8">
                        <div class="card-body">
                          <h5 class="card-title" style="font-size: 15px">
                            {{ users[6].lastName }}
                          </h5>
                          <p class="card-text mt-2" style="font-size: 14px">
                            <i
                              class="bx bx-map"
                              id="icon_menu"
                              style="color: #219935"
                            ></i>
                            {{ users[6].addresse }}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-md-6 text-end">
                  <button
                    class="btn btn-primary"
                    style="
                      background: #219935;
                      border-color: #219935;
                      margin-top: 15px;
                    "
                  >
                    {{ carsForLocation[4].montant }} FCFA
                  </button>
                </div>
              </div>
              <div
                class="card mb-3 mt-4"
                style="
                  max-width: 540px;
                  margin: 10px;
                  margin-top: -10px !important;
                "
              >
                <div class="row g-0" style="margin: 10px">
                  <div class="col-md-4">
                    <img
                      :src="carsForLocation[4].vehicule_image_url"
                      class="img-fluid rounded-start h-100"
                      alt="..."
                    />
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <p class="card-text">
                        <strong>Trajet : </strong> {{ reservations[4].destination }}
                      </p>
                      <p class="card-text">
                        <strong>Escales : </strong> {{ reservations[4].escale }}
                      </p>
                      <p class="card-text">
                        <strong>Convocation : </strong>13 h 11 min
                      </p>
                      <p class="card-text">
                        <strong>Jours du voyages : </strong> Lundi
                      </p>
                      <!-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ======= Features Section ======= -->
    <section id="features" class="features" style="margin-top: -30px">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="section-title text-center">
              <h2>Actualités</h2>
              <p>
                Restez a jour avec les dernières nouvelles du monde du voyage .
                Les informations les plus récentes sur les destinations, les
                promotion et plus encore
              </p>
            </div>
          </div>
        </div>

        <div class="row row-cols-1 row-cols-md-4 g-4">
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img src="/public/assets/img/blog.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img src="/public/assets/img/blog-1.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img src="/public/assets/img/blog-2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col">
            <div
              class="card h-100 border-0"
              style="box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.2)"
            >
              <img src="/public/assets/img/blog-2.jpg" class="card-img-top" alt="..." />
              <div class="card-body">
                <div class="row" id="blog_row">
                  <div class="col-md-12">
                    <h5 class="card-title" id="blog_title">Card title</h5>
                  </div>
                </div>

                <div class="row mt-4">
                  <div class="col-md-6">
                    <h5 class="" style="font-size: 15px">
                      <i
                        class="bx bxs-circle mr-2"
                        style="margin-right: 2px"
                      ></i>
                      8 mars 2023
                    </h5>
                  </div>
                </div>

                <p class="card-text" style="font-size: 13px">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </p>
                <div class="row">
                  <div class="col-md-6">
                    <button
                      class="btn btn-primary"
                      style="background-color: #219935 !important; border: none"
                    >
                      Voir plus
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- End Features Section -->

    <section id="features" class="features" style="margin-top: -90px">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12 text-center mt-5"
            style="margin-top: 80px !important"
          >
            <h1 id="titre_new">Inscrivez vous à notre Newsletter</h1>

            <p class="mt-4" style="font-weight: 600">
              Veuillez renseignez votre adresse mail, pour etre au courant de
              toutes nos nouveautés
            </p>

            <div class="col-md-12 text-center mt-5">
              <div class="row">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                  <form
                    class="d-flex"
                    action=""
                    method="POST"
                    enctype="multipart/form-data"
                  >
                    <div class="input-group" style="margin-top: -14px">
                      <input
                        type="text"
                        class="form-control form-control-lg input py-3"
                        placeholder="Adresse email"
                        name="email"
                        id="input_newsletter"
                      />
                      <button
                        class="btn btn-primary"
                        style="
                          background: #219935;
                          border-color: #219935;
                          border-radius: 0px 50px 50px 0px;
                          width: 133px;
                        "
                      >
                        Envoyer
                      </button>
                    </div>
                  </form>
                </div>
                <div class="col-md-2"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>

<style scoped></style>
