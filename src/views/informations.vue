<script></script>

<template>
  <main id="main">
    <section id="features" class="features" style="margin-top: 100px">
      <div class="container">
        <div class="row">
          <div
            class="col-md-6"
            style="background: #d5f8e5; border-radius: 5px; padding: 20px"
          >
            <div class="col-md-12 text-center">
              <p style="font-weight: 700">
                Complétez les informations de votre compagnie
              </p>
            </div>
            <form class="row g-3">
              <div class="col-md-12">
                <label for="text" class="form-label">Raison sociale </label>
                <input type="text" class="form-control" id="inputEmail4" />
              </div>
              <div class="col-md-12">
                <label for="text" class="form-label">Responsable </label>
                <input type="text" class="form-control" id="inputPassword4" />
              </div>
              <div class="col-12">
                <label for="inputAddress" class="form-label">Addresse</label>
                <input
                  type="text"
                  class="form-control"
                  id="inputAddress"
                  placeholder=""
                />
              </div>
              <div class="col-12">
                <label for="inputAddress2" class="form-label"
                  >Description</label
                >
                <textarea type="text" class="form-control" id="inputAddress2">
                </textarea>
              </div>
              <div class="col-md-12">
                <label for="inputCity" class="form-label"
                  >Images de couverture</label
                >
                <input type="file" class="form-control" id="inputCity" />
              </div>

              <div class="col-md-12">
                <label for="inputCity" class="form-label">Logo</label>
                <input type="file" class="form-control" id="inputCity" />
              </div>

              <div class="col-md-12 text-center mt-3">
                <router-link to="/information">
                  <button
                    type=""
                    class="btn btn-primary w-50"
                    style="background-color: #219935; border-color: #219935"
                  >
                    Valider
                  </button>
                </router-link>
              </div>

              <!-- <div class="col-12">
                        <button type="submit" class="btn btn-primary">Sign in</button>
                    </div> -->
            </form>
          </div>
          <div class="col-md-6">
            <img
              src="/public/assets/img/a.png"
              alt=""
              class="img-fluid"
              style="height: 658px; object-fit: cover; border-radius: 5px"
            />
          </div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style></style>
