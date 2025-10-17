export default {
  content: ["./index.html", "./src/**/*.{js,ts}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'system-ui', 'Segoe UI', 'Roboto', 'Arial'],
      },
      colors: {
        fundo: '#f5f7fb',
        cartao: '#ffffff',
        cinzento: '#6b7280',
        amarelo: '#ffd24a',
        texto: '#0f172a',
        borda: '#e6e9ef',
      },
      boxShadow: {
        custom: '0 6px 18px rgba(17, 24, 39, 0.06)',
      }
    }
  },
  plugins: [],
}
