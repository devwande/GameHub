import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColourModeSwitch from "./ColourModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navbar = ({ onSearch }: Props) => {
  return (
    <HStack padding="10px">
      {" "}
      {/* hstack lays out items horizonally */}
      <Image src={logo} boxSize="60px" />
      <SearchInput onSearch={onSearch} />
      <ColourModeSwitch />
    </HStack>
  );
};

export default Navbar;
