import { FormControl } from "@mui/material";
import BuildingSection from "../../section/home/BuildingSection";
import HeroSection from "../../section/home/HeroSection";
import ServiceSection from "../../section/home/ServiceSection";

export default function Home() {
  return (
    <main>
      <FormControl color="secondary">Build your image</FormControl>
      <HeroSection />
      <BuildingSection />
      <ServiceSection />
    </main>
  );
}
