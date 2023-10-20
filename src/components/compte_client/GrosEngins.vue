<script setup>

</script>

<template>
  <div class="col-md-12 mt-4">
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
                <div class="col-4">
                  <i class="bx bx-time"></i>
                </div>
                <div class="col-4">En attente</div>
                <div class="col-4">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-4">
            <boutton
              class="btn btn-primary w-100"
              style="background: #219935; border-color: #219935"
            >
              <div class="row">
                <div class="col-4">
                  <i class="bx bx-check-circle"></i>
                </div>
                <div class="col-4">Validé</div>
                <div class="col-4">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-4">
            <boutton
              class="btn btn-primary w-100"
              style="background: red; border-color: red"
            >
              <div class="row">
                <div class="col-4">
                  <i class="bx bx-x-circle"></i>
                </div>
                <div class="col-4">Annulé</div>
                <div class="col-4">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-4">
            <boutton
              class="btn btn-primary w-100"
              style="background: #3987fb; border-color: #3987fb"
            >
              <div class="row">
                <div class="col-4">
                  <i class="bx bx-check-square"></i>
                </div>
                <div class="col-4">Confirmer</div>
                <div class="col-4">2</div>
              </div>
            </boutton>
          </div>
          <div class="col-md-12 mt-4">
            <boutton
              class="btn btn-primary w-100"
              style="background: #931d96; border-color: #931d96"
            >
              <div class="row">
                <div class="col-4">
                  <i class="bx bx-check-circle"></i>
                </div>
                <div class="col-4">Utilisé</div>
                <div class="col-4">2</div>
              </div>
            </boutton>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="col-md-12">
    <div class="row mt-4">
      <div class="col-md-6">
        <boutton
          class="btn btn-primary w-100"
          style="background: #f77f00; border-color: #f77f00"
        >
          <div class="row">
            <div class="col-4">
              <i class="bx bx-error-alt"></i>
            </div>
            <div class="col-4">En attente de report</div>
            <div class="col-4">2</div>
          </div>
        </boutton>
      </div>
      <div class="col-md-6">
        <boutton
          class="btn btn-primary w-100"
          style="background: #219935; border-color: #219935"
        >
          <div class="row">
            <div class="col-4">
              <i class="bx bx-reset"></i>
            </div>
            <div class="col-4">Reporté</div>
            <div class="col-4">2</div>
          </div>
        </boutton>
      </div>
    </div>
  </div>
</template>
