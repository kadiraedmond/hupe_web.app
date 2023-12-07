<template>
  <!-- <div class="loader" /> -->

  <div class="absolute">
    <div class="spinner-grow one text-success" role="status"> 
      <span class="visually-hidden">Loading...</span> 
    </div>
    <div class="spinner-grow two text-success" role="status"> 
      <span class="visually-hidden">Loading...</span> 
    </div>
    <div class="spinner-grow three text-success" role="status"> 
      <span class="visually-hidden">Loading...</span> 
    </div>
    <div class="spinner-grow four text-success" role="status"> 
      <span class="visually-hidden">Loading...</span> 
    </div>
  </div>

</template>

<style>
/* LOADER */
/* .loader {
  border: 10px solid #FFF;
  border-radius: 50%;
  border-top: 10px solid #219935;
  width: 150px;
  height: 150px;
  -webkit-animation: spin 1s linear infinite;
  animation: spin 1s linear infinite;
  margin: 40px auto 20px;
}

.loaderText {
  text-align: center;
  color: #FFF;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }

  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
} */


.spinner-grow.one { 
  --bs-spinner-width: 2rem; 
  --bs-spinner-height: 2rem; 
  --bs-spinner-vertical-align: -0.125em; 
  --bs-spinner-animation-speed: 1.5s; 
  --bs-spinner-animation-name: spinner-grow; 
  background-color: currentcolor; 
  margin: 0 0.5rem;
  opacity: 0; 
}
.spinner-grow.two { 
  --bs-spinner-width: 2rem; 
  --bs-spinner-height: 2rem; 
  --bs-spinner-vertical-align: -0.125em; 
  --bs-spinner-animation-speed: 1.58s; 
  --bs-spinner-animation-name: spinner-grow; 
  background-color: currentcolor; 
  margin: 0 0.5rem;
  opacity: 0; 
}
.spinner-grow.three { 
  --bs-spinner-width: 2rem; 
  --bs-spinner-height: 2rem; 
  --bs-spinner-vertical-align: -0.125em; 
  --bs-spinner-animation-speed: 1.58s; 
  --bs-spinner-animation-name: spinner-grow; 
  background-color: currentcolor; 
  margin: 0 0.5rem;
  opacity: 0; 
}
.spinner-grow.four { 
  --bs-spinner-width: 2rem; 
  --bs-spinner-height: 2rem; 
  --bs-spinner-vertical-align: -0.125em; 
  --bs-spinner-animation-speed: 1.58s; 
  --bs-spinner-animation-name: spinner-grow; 
  background-color: currentcolor; 
  margin: 0 0.5rem;
  opacity: 0; 
}
</style>
