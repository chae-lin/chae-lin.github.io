import { ref } from "vue";

const isDark = ref(false);

export const useDarkMode = () => {
  const applyDark = (value: boolean) => {
    isDark.value = value;
    document.documentElement.classList.toggle("dark", value);
  };

  const toggle = () => {
    const next = !isDark.value;
    localStorage.setItem("color-scheme", next ? "dark" : "light");
    applyDark(next);
  };

  const init = () => {
    const stored = localStorage.getItem("color-scheme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    applyDark(stored ? stored === "dark" : prefersDark);

    // OS 설정 변경 감지
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem("color-scheme")) {
        applyDark(e.matches);
      }
    });
  };

  return { isDark, toggle, init };
};
