<script setup>
 import { onMounted } from 'vue'

 
onMounted(() => {
  window.scrollTo(0, 0)
  this.refresh()
})
</script>

<template>
  
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
    <section id="features" class="features" style="margin-top: 70px;">
      <div class="container">
        <div class="row">
           <div class="col-md-2"></div>
           <div class="col-md-8">
            <div class="card border-0" style="background: #F4F4F4; border-radius: 15px 15px 15px 15px;">
            <div class="card-body">
               <div class="row" style="margin-top: -16px; margin-bottom: -16px;  margin-right: -16px;">
                <div class="col-md-7">
                    <div class="row mt-2">
                        <div class="col-md-12 d-flex">
                            <img src="" alt="logo" class="img-fluid" style="height: 35px;"> 
                            <div style="margin-top: 11px; margin-left: 9px;">
                                <h6>  | NomCompagnie</h6>
                            </div>
                           
                        </div>
                         
                    </div>
                    <hr style="border: 1px solid; border-color: #219935;">
                    <div class="row">
                        <div class="col-md-6">
                            <P style="font-size: 8px; font-weight: 700;">NOM DU LOCATAIRE</P>
                        </div>
                        <div class="col-md-6 text-end">
                            <P style="font-size: 8px; font-weight: 700;"><Strong>N° de ticket  |</Strong> 020 </P>
                        </div>
                    </div>

                    <div class="row">
                        <div class="col-md-7">
                            <P style="font-size: 19px;">SEAN JOHNSON</P>
                        </div>
                        <div class="col-md-5 text-end">
                            <button class="btn btn-primary" style="background: #219935; border-color: #219935; color: white ; font-size: 14px;">50 000 FCFA </button>
                        </div>
                    </div>

                    <div class="row mt-2">
                        
                        <div class="col-md-8">
                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">MARQUE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">Toyota</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">MODELE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">Yaris </p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">ANNEE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">2022</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">MOTEUR |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">165hp 15L</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">IMMATRICULATION |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">BG 20202</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">TRANSITION |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">Automatique</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">OPTION CHAUFFEUR|</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">Oui</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">INTERIEUR DU PAYS |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;">Non</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">CAUTION PAYER |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px; color:#219935">20 000 FCFA</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">DATE DE RETRAIT |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;"> 10/20/2023 </p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">LIEU DE RETRAIT |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;"> AZEFRE</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 9px; font-weight: 700;">DATE DE RETOUR |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 9px;"> 15/20/2023 </p>
                                </div>
                            </div>
                        </div>
                        
                  
                        <div class="col-md-4 text-bottom">
                           <img src="/public/assets/img/Qr.jpg" alt="" class="img-fluid" style="width: 100%; margin-top: 104px;">
                        </div>
                    </div>
                </div>
                <div class="col-md-5 text-white" style="background: #219935; border-radius: 0px 15px 15px 0px;">
                    <div class="row mt-2">
                        <div class="col-md-12 d-flex">
                            <img src="/public/assets/img/logo2.png" alt="logo" class="img-fluid" style="height: 35px;"> 
                            <div style="margin-top: 11px; margin-left: 9px;">
                                <h6> | Hupe africa</h6>
                            </div>
                           
                        </div>
                         
                    </div>
                    <hr style="border: 1px solid; border-color: white;">
                    <div class="row">
                        <div class="col-md-7">
                            <P>SEAN JOHNSON</P>
                        </div>
                        <div class="col-md-5 text-end">
                            <button class="btn btn-primary" style="background: white; border-color: white; color:#219935 ; font-size: 9px;">50 000 FCFA </button>
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col-md-12">
                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">MARQUE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">Toyota</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">MODELE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">Yaris </p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">ANNEE |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">2022</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">MOTEUR |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">165hp 15L</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">IMMATRICULATION |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">BG 20202</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">TRANSITION |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">Automatique</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">OPTION CHAUFFEUR|</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">Oui</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">INTERIEUR DU PAYS |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;">Non</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">CAUTION PAYER |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px; color:#219935">20 000 FCFA</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">DATE DE RETRAIT |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;"> 10/20/2023 </p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">LIEU DE RETRAIT |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;"> AZEFRE</p>
                                </div>
                            </div>

                            <div class="row" style="margin-top: -10px;">
                                <div class="col-md-6">
                                    <p style=" font-size: 7px; font-weight: 700;">DATE DE RETOUR |</p>
                                </div>
                                <div class="col-md-6 text-end">
                                    <p style=" font-size: 7px;"> 15/20/2023 </p>
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div class="row mt-2 mb-2">
                        <div class="col-md-8">
                            
                        </div>
                        <div class="col-md-4 text-end">
                           <img src="/public/assets/img/Qr.jpg" alt="" class="img-fluid" style="width: 75%; margin-top: 7px;">
                        </div>
                        
                    </div>
                </div>
               </div>
            </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6"></div>
                <div class="col-md-6 text-end">
                    <button class="btn btn-primary" style="background: #219935; border-color: #219935;">Télécharger le ticket</button>
                </div>
            </div>
           </div>
           <div class="col-md-2"></div>
        </div>
      </div>
    </section>


    

  </main>
    <!-- End #main -->
    
</template>
<style scoped>
 
</style>