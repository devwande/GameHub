import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" objectFit={"cover"}/>
      </Link>
      {/* hstack lays out items horizonally */}

      <SearchInput />
      <ColourModeSwitch />
    </HStack>
  );
};

export default Navbar;
