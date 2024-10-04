import Cards from "@/components/Cards";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import GetInTouch from "@/components/GetInTouch";
import Header from "@/components/header/Header";
import MainHeader from "@/components/header/MainHeader";
import HomeComponent from "@/components/home/HomeComponent";
import { ThemeProvider } from "@/components/themeContext";

export default function Home() {
  return (
    <>
      <ThemeProvider>
        <HomeComponent />
      </ThemeProvider>
    </>
  );
}
