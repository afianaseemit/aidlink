// app/design-system.ts

export const colors = {
  primary: "bg-blue-600",
  primaryHover: "hover:bg-blue-700",
  secondary: "bg-sky-500",
  accent: "text-blue-600",
  dark: "text-slate-900",
  light: "text-slate-600",
  white: "bg-white",
  background: "bg-slate-50",
};

export const typography = {
  heroTitle:
    "text-5xl md:text-6xl lg:text-7xl font-extrabold text-slate-900 leading-tight",

  sectionTitle:
    "text-4xl md:text-5xl font-bold text-slate-900",

  subtitle:
    "text-xl text-slate-600 leading-8",

  body:
    "text-lg text-slate-600 leading-8",

  small:
    "text-sm text-slate-500",
};

export const layout = {
  container:
    "mx-auto max-w-7xl px-6 lg:px-8",

  section:
    "py-24",

  sectionGray:
    "py-24 bg-slate-50",
};

export const buttons = {
  primary:
    "inline-flex items-center rounded-xl bg-blue-600 px-7 py-4 font-semibold text-white shadow-lg transition duration-300 hover:bg-blue-700 hover:scale-105",

  secondary:
    "inline-flex items-center rounded-xl border-2 border-blue-600 px-7 py-4 font-semibold text-blue-600 transition duration-300 hover:bg-blue-600 hover:text-white",
};

export const cards = {
  primary:
    "rounded-2xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl",

  feature:
    "rounded-3xl bg-white p-10 shadow-xl",

  glass:
    "rounded-3xl border border-white/20 bg-white/70 backdrop-blur-lg shadow-xl",
};

export const grids = {
  two:
    "grid grid-cols-1 lg:grid-cols-2 gap-12",

  three:
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",

  four:
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8",
};

export const animations = {
  hover:
    "transition-all duration-300 hover:-translate-y-2",

  button:
    "transition-all duration-300 hover:scale-105",

  card:
    "transition-all duration-300 hover:shadow-2xl",
};

export const inputs = {
  textarea:
    "w-full rounded-2xl border border-slate-300 p-5 focus:border-blue-500 focus:outline-none",

  input:
    "w-full rounded-xl border border-slate-300 p-4 focus:border-blue-500 focus:outline-none",
};