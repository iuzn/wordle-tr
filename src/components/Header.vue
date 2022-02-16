<script lang="ts">
// Runs immediately to avoid FOUC
const defaultDarkTheme = (() => {
  let dark
  const alreadySet = localStorage.getItem('darkMode')
  if (alreadySet) {
    dark = alreadySet === 'on'
  } else {
    dark = (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) || false
  }
  if (dark) {
    document.documentElement.classList.add('dark')
  }
  return dark
})()

const defaultColourBlindTheme = (() => {
  if (localStorage.getItem('colourBlindMode') === 'on') {
    document.documentElement.classList.add('colourblind')
    return true
  }
  return false
})()
</script>

<script lang="ts" setup>
import MiniBoard from './MiniBoard.vue'
import messages from '../lib/messages'
import Logo from '../Logo.vue'

let darkMode = $ref(defaultDarkTheme)
let colourBlindMode = $ref(defaultColourBlindTheme)
let infoOpen = $ref(false)

function toggleDarkMode () {
  darkMode = !darkMode
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', darkMode ? 'on' : 'off')
}

function toggleColourBlindMode () {
  colourBlindMode = !colourBlindMode
  document.documentElement.classList.toggle('colourblind')
  localStorage.setItem('colourBlindMode', colourBlindMode ? 'on' : 'off')
}


function toggleInfoOpen () {
  infoOpen = !infoOpen
  document.documentElement.classList.toggle('overflow-hidden')
}
</script>

<template>
  <div v-if="infoOpen" class="info">
    <div>
      <h2>
        <span>
          Bilgi
        </span>
        <button @click="toggleInfoOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
        </button>
      </h2>
      <p>
        <strong>WORDLE KAPIŞMASI</strong>, <a class="link" href="https://twitter.com/ctnicholasdev">@ctnicholasdev</a> tarafından geliştirilen <a class="link" href="https://github.com/CTNicholas/wordle-wars">WORDLE WARS</a>'ın  <a class="link" href="https://twitter.com/ibrahimuzn">@ibrahimuzn</a> tarafından Türkçe'ye çevrilmiş versiyonudur.
      Kaynak:  <a class="link" href="https://github.com/iuzn/wordle-tr">GitHub</a>
      </p>
      <p>
        Wordle Kapışması çok oyunculu eklemek için <a class="link" href="https://liveblocks.io/">Liveblocks</a>'i kullanır.
      </p>
      <div class="divider" />
      <h2 class="mt-6">Nasıl oynanır</h2>
      <p>
        <strong>WORDLE</strong>'ı altı denemede bulun.
      </p>
      <p>
        Her tahmin, geçerli bir beş harfli kelime olmalıdır. Göndermek için giriş düğmesine basın.      </p>
      <p>
        Her tahminden sonra, karoların rengi, tahmininizin kelimeye ne kadar yakın olduğunu göstermek için değişecektir.
      </p>
      <p>
        WORDLE'ı ilk tahmin eden <strong>WORDLE KAPIŞMASINI</strong> kazanır.
      </p>
      <div class="divider" />
      <p>
        <strong>Examples</strong>
      </p>
      <div class="example">
        <p>
          <MiniBoard :large="true" :showLetters="true" :user="{ board: messages.abone }" :rows="messages.abone.length" />
        </p>
        <p><strong>A</strong> harfi kelimede var ve doğru yerde.
         </p>
      </div>
      <div class="example">
        <p>
          <MiniBoard :large="true" :showLetters="true" :user="{ board: messages.gizem }" :rows="messages.gizem.length" />
        </p>
        <p><strong>İ</strong> harfi kelimede var fakat yanlış yerde.
        </p>
      </div>
      <div class="example">
        <p>
          <MiniBoard :large="true" :showLetters="true" :user="{ board: messages.falez }" :rows="messages.falez.length" />
        </p>
        <p>Kelimenin hiçbir yerinde harf yok.</p>
      </div>
      <div class="divider" />
      <p>
        <strong>Her gün yeni bir WORDLE gelir!</strong>
      </p>

    </div>
  </div>
  <header>
    <div>
      <button @click="toggleInfoOpen">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </button>
      <a class="button" href="https://github.com/iuzn" target="_blank">
        <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path
              d="M10 1.66664C8.90569 1.66664 7.82206 1.88219 6.81101 2.30098C5.79997 2.71977 4.88131 3.3336 4.10749 4.10742C2.54468 5.67022 1.66671 7.78984 1.66671 9.99998C1.66671 13.6833 4.05838 16.8083 7.36671 17.9166C7.78338 17.9833 7.91671 17.725 7.91671 17.5V16.0916C5.60838 16.5916 5.11671 14.975 5.11671 14.975C4.73338 14.0083 4.19171 13.75 4.19171 13.75C3.43338 13.2333 4.25004 13.25 4.25004 13.25C5.08338 13.3083 5.52504 14.1083 5.52504 14.1083C6.25004 15.375 7.47504 15 7.95004 14.8C8.02504 14.2583 8.24171 13.8916 8.47504 13.6833C6.62504 13.475 4.68338 12.7583 4.68338 9.58331C4.68338 8.65831 5.00004 7.91664 5.54171 7.32498C5.45838 7.11664 5.16671 6.24998 5.62504 5.12498C5.62504 5.12498 6.32504 4.89998 7.91671 5.97498C8.57504 5.79164 9.29171 5.69998 10 5.69998C10.7084 5.69998 11.425 5.79164 12.0834 5.97498C13.675 4.89998 14.375 5.12498 14.375 5.12498C14.8334 6.24998 14.5417 7.11664 14.4584 7.32498C15 7.91664 15.3167 8.65831 15.3167 9.58331C15.3167 12.7666 13.3667 13.4666 11.5084 13.675C11.8084 13.9333 12.0834 14.4416 12.0834 15.2166V17.5C12.0834 17.725 12.2167 17.9916 12.6417 17.9166C15.95 16.8 18.3334 13.6833 18.3334 9.99998C18.3334 8.90563 18.1178 7.82199 17.699 6.81095C17.2803 5.7999 16.6664 4.88124 15.8926 4.10742C15.1188 3.3336 14.2001 2.71977 13.1891 2.30098C12.178 1.88219 11.0944 1.66664 10 1.66664V1.66664Z"
          ></path>
        </svg>
      </a>
      <a class="button" href="https://twitter.com/ibrahimuzn" target="_blank">
        <svg class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"></path>
        </svg>
      </a>
    </div>
    <Logo />
    <div>
      <button @click="toggleColourBlindMode">
        <svg v-if="!colourBlindMode"  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
        <svg v-else  xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4 2a2 2 0 00-2 2v11a3 3 0 106 0V4a2 2 0 00-2-2H4zm1 14a1 1 0 100-2 1 1 0 000 2zm5-1.757l4.9-4.9a2 2 0 000-2.828L13.485 5.1a2 2 0 00-2.828 0L10 5.757v8.486zM16 18H9.071l6-6H16a2 2 0 012 2v2a2 2 0 01-2 2z" clip-rule="evenodd" />
        </svg>
      </button>
      <button @click="toggleDarkMode">
        <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
        <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
        </svg>
      </button>
    </div>
  </header>
</template>

<style scoped>
.info {
  position: fixed;
  top: 52px;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 10;
  background: #fff;
  overflow-y: auto;
}

.dark .info {
  background: #18181B;
}

.info > div {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
}

.info h2 {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 10px;
}

.example, .divider {
  margin:  20px 0;
}

button, .button {
  vertical-align: top;
  display: inline-block;
  padding: 15px;
  transition: background-color 150ms ease-in-out;
}

button:hover, .button:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.dark button:hover, .dark .button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

p {
  margin-top: 10px;
}

header {
  height: 52px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ccc;
  color: #000;
  text-align: center;
  background: #fff;
  padding: 1px 0;
}

.dark header {
  background: #18181B;
  color: #fff;
  border-color: #52525B;
}

@media (max-width: 715px) {
  button, .button {
    padding-left: 5px;
    padding-right: 5px;
  }
}
</style>
