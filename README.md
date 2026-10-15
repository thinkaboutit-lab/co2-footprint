# CO₂ Footprint

Öffentliche Webanwendung zur Transparenz über jährliche CO₂-Emissionen von
Ländern und Unternehmen. Die Anwendung entstand im Rahmen einer Fallstudie für
eine Non-Profit-Organisation mit Fokus auf den Klimawandel. **Alle dargestellten
Daten sind fiktiv** und dienen ausschließlich Demonstrationszwecken.

## Tech-Stack

- **Vue 3** (`<script setup>`, Composition API) + **TypeScript**
- **Vite** als Build-Tool und Dev-Server
- **Vue Router** für die globale Navigation
- **Bootstrap 5.3** + **Bootstrap Icons** für Layout, Responsivität und RTL-Support

## Projekt starten

- ` npm install `    # Abhängigkeiten installieren
- `npm run dev `    # Entwicklungsserver (http://localhost:5173)
- `npm run build`   # Produktions-Build (inkl. Typprüfung via vue-tsc)
- `npm run preview` # Produktions-Build lokal ansehen


## Projektstruktur

```
src/
├─ components/
│  ├─ AppHeader.vue    # Header + globale Navigation
│  ├─ AppFooter.vue    # Footer mit rechtlichen Hinweisen
│  ├─ LocalMenu.vue    # lokales Menü (LTR/RTL)
│  ├─ FilterBar.vue    # Such- und Filterfelder
│  └─ Co2Table.vue     # sortierbare Emissions-Tabelle
├─ views/              # HomeView, AboutView, LegalView
├─ data/co2Data.ts     # fiktive CO₂-Datensätze
├─ types/Co2Entry.ts   # TypeScript-Typ eines Datensatzes
├─ router/index.ts     # Routen-Definitionen
└─ main.ts             # Einstieg, Leserichtung (LTR/RTL)
```

## Hinweis zu den Daten

Sämtliche Länder-, Unternehmens- und Emissionswerte in `src/data/co2Data.ts`
sind frei erfunden und bilden keine realen Zahlen ab.
