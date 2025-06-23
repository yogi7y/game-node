import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";

import { SiNintendo } from "react-icons/si";
import { MdPhoneIphone } from "react-icons/md";

import { HStack, Icon } from "@chakra-ui/react";
import type { Platform } from "../hooks/useGames";
import type { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

function PlatformIconsList({ platforms }: Props) {
  const iconsMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    iphone: MdPhoneIphone,
  };

  return (
    <HStack marginY={1}>
      {platforms
        .filter((p) => iconsMap[p.slug])
        .map((p) => (
          <Icon key={p.id} as={iconsMap[p.slug]} color="gray.500" />
        ))}
    </HStack>
  );
}

export default PlatformIconsList;
