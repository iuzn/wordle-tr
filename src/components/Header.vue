<script lang="ts">
// Runs immediately to avoid FOUC
const defaultDarkTheme = (() => {
  let dark
  const alreadySet = localStorage.getItem('darkMode')
  if (alreadySet) {
    dark = alreadySet === 'dark'
  } else {
    dark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  if (dark) {
    document.documentElement.classList.add('dark')
  }
  return dark
})()
</script>

<script lang="ts" setup>
import MiniBoard from './MiniBoard.vue'
import messages from '../lib/messages'
import Logo from '../Logo.vue'

let darkMode = $ref(defaultDarkTheme)
let infoOpen = $ref(false)

function toggleDarkMode () {
  darkMode = !darkMode
  document.documentElement.classList.toggle('dark')
  localStorage.setItem('darkMode', darkMode ? 'dark' : 'light')
}

function toggleInfoOpen () {
  infoOpen = !infoOpen
  document.documentElement.classList.toggle('overflow-hidden')
}
</script>

<template>
  <!--<ExampleInfo class="example-info-main" />-->
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
      Kaynak:  <a class="link" href="https://github.com/iuzn/wordle-wars">GitHub</a>
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
    <button @click="toggleInfoOpen">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </button>
    <Logo />
    <button @click="toggleDarkMode">
      <svg v-if="!darkMode" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
      <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
      </svg>
    </button>
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

button {
  padding: 15px;
  transition: background-color 150ms ease-in-out;
}

button:hover {
  background-color: rgba(0, 0, 0, 0.06);
}

.dark button:hover {
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
  .example-info-main {
    display: none;
  }
}
</style>
