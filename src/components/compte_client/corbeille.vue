<script>
 
</script>

<template>

    <!-- Page compte client (historique des transactions) -->
        <div class="row mt-4">
            <div class="col-md-6" v-for="(history, index) in userStore.userHistory" :key="index">
            <div class="row">
                <div
                class="col-md-12 mb-4"
                style="box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25)"
                >
                <div class="row">
                    <div class="col-md-8">
                    <p style="font-size: 17px; font-weight: 600">
                        {{ history.title }}
                    </p>
                    </div>
                    <div class="col-md-4">
                    <p>
                        <img src="/assets/img/icone/calendar.png" alt="" />
                        {{ new Intl.DateTimeFormat('fr-FR', options).format(history.date.toDate()) }}
                    </p>
                    </div>
                </div>
                <p>{{ history.title }}</p>
                <div class="row mb-2">
                    <div class="col-md-8">
                    <p>
                        Topic |
                        <strong>
                        <img src="/assets/img/icone/circle.png" alt="" />
                        {{ history.topic }}</strong
                        >
                    </p>
                    </div>
                    <div class="col-md-4">
                    <button
                        class="btn btn-primary"
                        style="background: #219935; border-color: #219935"
                    >
                        Solde : {{ history.solde }} F
                    </button>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
     <!-- Page compte client (historique des transactions) -->

     <!-- les codes couleur  de la sections activité ( compteClient) -->
        style="background: #f77f00; border-color: #f77f00"
        style="background: #219935; border-color: #219935"
</template>

<style>
</style>