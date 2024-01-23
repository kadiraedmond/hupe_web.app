<script setup>

</script>
<template>
    
      <!-- ======= Portfolio Details Section ======= -->
      <section id="portfolio-details" class="portfolio-details">
          <div class="container">

              <div class="row mt-4">
              <div class="col-md-12">
                <div class="row">
                
                  <div class="col-6 text-start">
                    <button @click="exportToExcel" class="btn btn-primary" style="background-color:#219935 ; border-color:#219935"><i class='bx bxs-file-export'></i> Exporter</button>
                  </div>
                  <div class="col-md-6 text-end">
                    <!-- Button trigger modal -->
                    <button
                        type="button"
                        class="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal5"
                        style="background-color: #219935; border-color: #219935"
                    >
                        <img
                        src="/assets/img/icone/plus.png"
                        class="img-fluid"
                        alt="..."
                        />
                        Ajouter
                    </button>

                    <!-- Modal -->
                    <div
                        class="modal fade"
                        id="exampleModal5"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel5"
                        aria-hidden="true"
                    >
                        <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #219935; color : white">
                            <h1 class="modal-title fs-5" id="exampleModalLabel5">
                                Ajouter un programme
                            </h1>
                            <button
                                type="button"
                                class="btn-close-col text-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            </div>
                            <div class="modal-body">
                            <form @submit.prevent="handleSubmit" class="row g-3 needs-validation text-start" novalidate>
                                <div class="col-md-12">
                                <label for="validationCustom01" class="form-label"
                                    >Jours</label
                                >
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>....</option>
                                    <option value="lundi">Lundi</option>
                                    <option value="mardi">Mardi</option>
                                    <option value="mercredi">Mercredi</option>
                                    <option value="jeudi">Jeudi</option>
                                    <option value="vendredi">Vendredi</option>
                                    <option value="samedi">Samedi</option>
                                    <option value="dimanche">Dimanche</option>
                                </select>
                                </div>
                                <div class="col-md-12">
                                <label for="validationCustom02" class="form-label"
                                    >Heure de convocation</label
                                >
                                <input
                                    type="time"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="prenoms"
                                    required
                                />
                                </div>
                                
                                <div class="col-md-12">
                                <label for="validationCustom02" class="form-label"
                                    >Heure de départ</label
                                >
                                <input
                                    type="time"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="adresse"
                                />
                                </div>

                                <div class="col-md-12">
                                <label for="validationCustom02" class="form-label"
                                    >Trajet</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="adresse"
                                />
                                </div>

                                <div class="col-md-12">
                                <label for="validationCustom02" class="form-label"
                                    >Escale</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="adresse"
                                />
                                </div>

                                <div class="col-md-12">
                                <label for="validationCustom02" class="form-label"
                                    >Prix</label
                                >
                                <input
                                    type="text"
                                    class="form-control"
                                    id="validationCustom02"
                                    v-model="adresse"
                                />
                                </div>
                            
                                <div class="col-12 text-center">
                                <button
                                    class="btn btn-primary"
                                    style="background-color: #219935; border-color: #219935"
                                    type="submit"
                                >
                                    Enregistrer
                                </button>
                                </div>
                            </form>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
              </div>
              <div class="col-md-12 mt-2">
                <div class="table-responsive">
                  <table class="table table-striped" ref="exportable_table">
                    <thead>
                      <tr>
                         
                        <th scope="col">N°</th>
                        <th scope="col">Heure de convocation </th>
                        <th scope="col">Heure de depart</th>
                        <th scope="col">Trajet </th>
                        <th scope="col">Escale </th>
                        <th scope="col">Prix</th>
                        <th scope="col">Action</th>
                      
                        
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                         
                        <td>loren</td>
                        <td>loren</td>
                        <td> loren</td>
                        <td> loren</td>
                        <td>loren </td>
                        <td> loren</td>
                         
                        <td> <div class="btn btn-primary" style="border-radius: 30px ; font-size: 12px; background: #219935 !important; border-color: #219935;">Voir plus</div></td>
                         

                      </tr>
                    
                      
                      
                    </tbody>
                </table>
                </div>
                
              </div>
            </div>
  
          </div>
      </section>
      <!-- End Portfolio Details Section -->
</template>

<style>
</style>