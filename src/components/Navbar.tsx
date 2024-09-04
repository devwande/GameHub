import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";


const Navbar = () => {
  return (
    <HStack padding="10px">
      {" "}
      {/* hstack lays out items horizonally */}
      <Image src={logo} boxSize="60px" />
      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default Navbar;
