import type { Config } from 'tailwindcss'
export default <Partial<Config>>{
  theme: {
    extend: {
      colors: {
        primary: "#6867C5",
      },
    },
    container: {
      screens: {
          sm: "470px",
          md: "598px",
          lg: "854px",
          xla: "1110px",
      },
      center: true,
    },
  }
}