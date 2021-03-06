import React from "react";
import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import { styles } from "./style";

import { GuildIcon } from "../GuildIcon";
import { theme } from "../../global/styles/theme";

export type GuildProps = {
  id: string;
  name: string;
  icon: string | null;
  owner: boolean;
};

type Props = TouchableOpacityProps & {
  data: GuildProps;
};

export const Guild = ({ data, ...rest }: Props) => {
  return (
    <TouchableOpacity {...rest} activeOpacity={0.7} style={styles.container}>
      <GuildIcon />

      <View style={styles.content}>
        <View>
          <Text style={styles.title}>{data.name}</Text>

          <Text style={styles.type}>
            {data.owner ? "Administrador" : "Convidado"}
          </Text>
        </View>
      </View>

      <Feather name="chevrons-right" size={24} color={theme.colors.heading} />
    </TouchableOpacity>
  );
};
