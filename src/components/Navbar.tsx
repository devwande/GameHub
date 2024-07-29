import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px"> {/* hstack lays out items horizonally */}
      <Image src={logo} boxSize="60px" />
      <ColourModeSwitch /> 
    </HStack> 
  );
};

export default Navbar;
