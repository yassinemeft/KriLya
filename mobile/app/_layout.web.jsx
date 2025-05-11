import { Slot, Stack } from "expo-router";
import "../global.css"; // Ensure this file exists in the root directory

// app/_layout.web.jsx
import { ThemeProvider } from "@/components/theme/ThemeProvider";

export default function WebLayout({ children }) {


  

  return (
    <ThemeProvider>
        <Slot />
    </ThemeProvider>
  );
}
