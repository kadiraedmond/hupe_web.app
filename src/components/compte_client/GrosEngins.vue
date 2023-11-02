<script setup>
import { onMounted } from "vue"

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>

<template>
  <div class="col-md-6 mt-4">
    <div class="row" style="margin-top: 50px">
      <div class="col-md-6">
        <div
          class="card h-100 border-0 text-center"
          style="background: #f6f8fb"
        >
          <router-link to="/" class="mt-4">
            <img
              src="/public/assets/img/engin.png"
              class="img-fluid w-25"
              alt="..."
            />
          </router-link>

          <div class="card-body">
            <h5 class="card-title" style="font-size: 17px">
              Location de gros engin
            </h5>
            <p class="card-text" style="font-size: 14px">
              Évitez les files d'attente et réservez vos billets de bus en
              quelques instants.
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <div class="row">
          <div class="col-md-12">
            <boutton
              class="btn btn-primary w-100"
              style="background: #f77f00; border-color: #f77f00"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-time"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">En attente</div>
                <div class="col-2">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #219935; border-color: #219935"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-check-circle"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Validé</div>
                <div class="col-2">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: red; border-color: red"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-x-circle"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Annulé</div>
                <div class="col-2">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #3987fb; border-color: #3987fb"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-check-square"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Confirmer</div>
                <div class="col-2">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-2">
            <boutton
              class="btn btn-primary w-100"
              style="background: #931d96; border-color: #931d96"
            >
              <div class="row">
                <div class="col-2">
                  <i class="bx bx-check-circle"></i>
                </div>
                <div class="col-8" style="font-size: 12px;">Utilisé</div>
                <div class="col-2">2</div>
              </div>
            </boutton>
          </div>

          <div class="col-md-12 mt-2">
        <boutton
          class="btn btn-primary w-100"
          style="background: #f77f00; border-color: #f77f00"
        >
          <div class="row">
            <div class="col-2">
              <i class="bx bx-error-alt"></i>
            </div>
            <div class="col-8" style="font-size: 12px;">En attente de report</div>
            <div class="col-2">2</div>
          </div>
        </boutton>
      </div>
      <div class="col-md-12 mt-2">
        <boutton
          class="btn btn-primary w-100"
          style="background: #219935; border-color: #219935"
        >
          <div class="row">
            <div class="col-2">
              <i class="bx bx-reset"></i>
            </div>
            <div class="col-8" style="font-size: 12px;">Reporté</div>
            <div class="col-2">2</div>
          </div>
        </boutton>
      </div>
        </div>
      </div>
    </div>
  </div>
  
</template>
