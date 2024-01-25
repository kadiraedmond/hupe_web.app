<template>
    
    <!-- ======= Portfolio Details Section ======= -->
    <section id="portfolio-details" class="portfolio-details">
        <div class="container">

            <div class="row mt-4">
            <div class="col-md-12">
            <div class="row">
            
                <div class="col-md-12 text-end">
                <!-- Button trigger modal -->
                <button
                    type="button"
                    class="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal5Horaire"
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
                    id="exampleModal5Horaire"
                    tabindex="-1"
                    aria-labelledby="exampleModal5Horaire"
                    aria-hidden="true"
                >
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header" style="background-color: #219935; color : white">
                            <h1 class="modal-title fs-5" id="exampleModal5Horaire">
                                Définir les horaires
                            </h1>
                            <button
                                type="button"
                                class="btn-close-program text-white"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            </div>
                            <div class="modal-body">
                                <form @submit.prevent="addNewProgram" class="row g-3 needs-validation text-start" novalidate>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure N° 1</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_convocation"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure N° 2</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_convocation"
                                            required
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure N° 3</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_convocation"
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure N° 4</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_convocation"
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <label for="validationCustom02" class="form-label"
                                            >Heure N° 5</label
                                        >
                                        <input
                                            type="time"
                                            class="form-control"
                                            id="validationCustom02"
                                            v-model="heure_convocation"
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
                        
                    <th scope="col">Heure N° 1</th>
                    <th scope="col">Heure N° 2 </th>
                    <th scope="col">Heure N° 3</th>
                    <th scope="col">Heure N° 4 </th>
                    <th scope="col">Heure N° 5 </th>
                    <th scope="col">Actions</th>
                    
                    
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(program, i) in programs" :key="i">
                        
                    <td>{{ program.heure_convocation }}</td>
                    <td> {{ program.heure_depart }}</td>
                    <td> {{ program.lieu_depart }} - {{ program.destination }}</td>
                    <td>{{ program.escales }} </td>
                    <td> {{ program.montant }}</td>
                        
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