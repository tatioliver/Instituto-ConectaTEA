import { defineConfig } from 'vite'

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        home: 'html/index.html',
        cadastro: 'html/cadastro.html',
        projetos: 'html/projetos.html'
      }
    }
  }
})