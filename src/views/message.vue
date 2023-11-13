<script setup></script>

<template>
  <!-- style="background: rgb(213, 248, 229);" -->
  <main id="main">
    <section id="features" class="features" style="margin-top: 70px">
      <div class="container">
        <div class="row">
          <div
            class="col-md-12"
            style="background: #f4f4f4; border-radius: 15px 15px 15px 15px"
          >
            <div class="row">
              <div class="col-md-3">
                <div
                  class="card mb-3 border-0"
                  style="padding: 11px; background: #f4f4f4"
                >
                  <div class="row g-0">
                    <div class="col-md-4">
                      <img
                        src="/public/assets/img/avatars/5.png"
                        class="img-fluid rounded-start"
                        alt="..."
                        style="border-radius: 50% !important; width: 70px"
                      />
                    </div>
                    <div class="col-md-8">
                      <div class="card-body">
                        <h5 class="card-title" style="font-size: 14px">
                          Joe doe
                        </h5>
                        <p class="card-text" style="font-size: 12px">
                          Partenaire
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
              <div class="col-md-3"></div>
            </div>
            <hr style="margin-top: -19px" />
            <div class="container">
              <div class="row">
                <div class="col-md-12">
                  <!-- Affichage des messages -->
                  <div
                    id="messages"
                    style="height: 500px; overflow-y: scroll; padding: 12px"
                  >
                    <div class="row">
                        <!-- Receiver -->
                      <div class="col-md-6">
                        <div class="message-time" style="font-size: 11px">
                          <i
                            class="bx bx-check"
                            style="font-size: 15px; color: #219935"
                          ></i>
                          10:32
                        </div>
                        <div
                          class="message incoming"
                          style="
                            background: white;
                            padding: 10px;
                            border-radius: 20px 20px 20px 0;
                          "
                        >
                          <div class="message-text" style="font-size: 14px">
                            Lorem ipsum dolor sit amet, consectetur adipisci
                            elit, sed eiusmod tempor incidunt ut labore
                          </div>
                        </div>
                      </div>

                      <div class="col-md-6"></div>
                      <div class="col-md-6"></div>

                        <!-- Sender -->
                      <div class="col-md-6">
                        <div class="message-time" style="font-size: 11px">
                          10:32
                        </div>
                        <div
                          class="message outgoing"
                          style="
                            background: #deeee4;
                            padding: 10px;
                            border-radius: 20px 20px 0;
                          "
                        >
                          <div
                            class="message-text mt-2"
                            style="font-size: 14px"
                          >
                            Lorem ipsum dolor sit amet, consectetur adipisci
                            elit, sed eiusmod
                          </div>
                        </div>
                      </div>                      
                    </div>

                    <!-- Ajoutez d'autres messages ici -->
                  </div>
                  <!-- Formulaire de saisie de messages -->
                    <form>
                        <div class="input-group mb-3" style="height: 43px">
                            <input
                            type="text"
                            class="form-control"
                            id="message-input"
                            placeholder="Tapez votre message"
                            />
                            <button
                            type="submit"
                            class="btn btn-primary"
                            id="send-button"
                            style="background: #219935; border-color: #219935"
                            >
                                <i
                                    class="bx bx-send"
                                    style="font-size: 33px; color: white; width: 95px"
                                ></i>
                            </button>
                        </div>
                    </form>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-1"></div>
        </div>
      </div>
    </section>
  </main>
  <!-- End #main -->
</template>
<style scoped></style>
