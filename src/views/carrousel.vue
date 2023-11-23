<script setup> 
  
</script>

<template>
    <div class="wrapper">
        <i id="left" class="fa-solid fa-angle-left"></i>
        <div class="carousel">
            <img src="./images/1.png" alt="image" />
            <img src="./images/2.webp" alt="image" />
            <img src="./images/3.png" alt="image" />
            <img src="./images/4.jpg" alt="image" />
            <img src="./images/5.png" alt="image" />
            <img src="./images/6.png" alt="image" />
            <img src="./images/7.png" alt="image" />
            <img src="./images/8.png" alt="image" />
            <img src="./images/9.png" alt="image" />
            <img src="./images/10.webp" alt="image" />
            <img src="./images/11.png" alt="image" />
            <img src="./images/12.png" alt="image" /> 
        </div>
        <i id="right" class="fa-solid fa-angle-right"></i>
    </div>
</template>

<style scoped>
 
    @keyframes slide {
        from { transform: translateX(0); }
        to { transform: translateX(-100%); }
    }

    .wrapper .carousel {
        /* white-space: nowrap; */
        display: inline-block;
        font-size: 0;
        cursor: pointer;
        overflow: hidden;
        scroll-behavior: smooth;
        animation: 8s slide infinite linear;
    }

    .wrapper:hover .carousel {
        animation-play-state: paused;
    }

    .carousel img {
        height: 150px;
        object-fit: cover;
        margin-left: 14px;
        width: calc(100% / 8);
        /* width: 150px; */
        /* overflow: hidden; */
    }

    .carousel img:first-child {
        margin-left: 0px;
    }

    .wrapper {
        white-space: nowrap;
        max-width: 1300px;
        position: relative;
    }

    .wrapper i {
        top: 50%;
        height: 46px;
        width: 46px;
        cursor: pointer;
        position: absolute;
        font-size: 1.5rem;
        text-align: center;
        line-height: 46px;
        color:#FFF;
        background: rgba(238, 238, 238, 0.8);
        border-radius: 50%;
        transform: translateY(-50%);
    }

    .wrapper i:hover {
        background: rgba(238, 238, 238, 1);
    }

    .wrapper i:first-child {
        left: -23px;
    }

    .wrapper i:last-child {
        right: -23px;
    }

    @media only screen and (max-width: 900px) {
        .carousel img {
            width: calc(100% / 2);
        }
    }

    @media only screen and (max-width: 550px) {
        .carousel img {
            width: 100%;
        }
    }

    /* #slider li {
        opacity: 0;
        transition: opacity 15s ease-in-out;
    }

    #slider li:not(.hidden) {
        opacity: 1;
    } */


</style>