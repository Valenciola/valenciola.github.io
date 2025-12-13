<template>
  <div id="landing">
    <div id="creativel" class="sectionl" @mouseenter="hoverCreative" @mouseleave="resetNav">
      <h2>Creative</h2>
    </div>

    <div id="businessl" class="sectionl" @mouseenter="hoverBusiness" @mouseleave="resetNav">
      <h2>Business</h2>
    </div>

    <div id="techl" class="sectionl" @mouseenter="hoverTech" @mouseleave="resetNav">
      <h2>Tech</h2>
    </div>
  </div>

  <div id="landing-nav" :style="{ opacity: navOpacity }">
    <h2 id="landheading"
        :style="{ color: titleColor, opacity: isFading ? 0 : 1 }">
    {{ title }}
    </h2>

    <p id="landdesc"
        :style="{ opacity: isFading ? 0 : 1 }">
        {{ desc }}
    </p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const router = useRouter()

const title = ref("Valerie Fils-Aime")
const desc = ref("Welcome to my website! To navigate through the different sections of my site, hover over a section and select it.")
const titleColor = ref("#961256")
const navOpacity = ref(1)

const isFading = ref(false)

function fadeText(newTitle, newDesc, color) {
  isFading.value = true

  setTimeout(() => {
    title.value = newTitle
    desc.value = newDesc
    titleColor.value = color
    isFading.value = false
  }, 200)
}

function resetNav() {
  fadeText("Valerie Fils-Aime", "Welcome to my website! To navigate through the different sections of my site, hover over a section and select it.", "#961256")
}

function hoverCreative() {
  fadeText("Creative", "Enter my world of creativity: every story, poem, and song. Imagination is limitless, and this page is my gallery.", "#f28d8e")
}

function hoverBusiness() {
  fadeText("Business", "This is the business side of things: skills, resume, and contact, all in one place. If you're looking to cut straight to it, this is the section to pick.", "#820087")
}

function hoverTech() {
  fadeText("Tech", "See the logic behind this website, as well as my other projects. The computer becomes the canvas, and ambition is translated to code.", "#8A7DFF")
}

function goCreative() { router.push('/creativity') }
function goBusiness() { router.push('/business') }
function goTech() { router.push('/tech') }
</script>

<style scoped>
#landing {
    display: flex;
    height: 100vh;
    position: relative;
    
    flex-direction: row;
}

#landing-nav {
    position: absolute;

    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);

    width: 90%;
    max-width: 600px;
    background-color: white;
    padding: 1rem;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 0.5rem;
    color: black;

    transition: opacity 0.5s ease;
    transition-delay: 0.2s;
    opacity: 1;

    text-align: center;
    margin-bottom: 1rem;
}

#landheading {
    font-family: "Freehand", cursive;
    font-size: 1.5rem;
    margin: 0;
    color: #961256;

    transition: opacity 0.2s ease;
    opacity: 1;
}

#landdesc {
    font-size: 0.8rem;
    margin: 0.5rem 0 0;
    height: 3em;
    overflow: hidden;

    font-weight: bold;

    transition: opacity 0.2s ease;
    opacity: 1;
}

#businessl {
    background-color: #820087;
}
#creativel {
    background-color: #f28d8e;
}
#techl {
    background-color: #8A7DFF;
}

.sectionl {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>