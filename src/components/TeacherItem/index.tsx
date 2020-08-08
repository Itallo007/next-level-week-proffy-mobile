import React from "react";
import { View, Image, Text} from "react-native";
import { RectButton } from "react-native-gesture-handler";

import heartOutLineIcon from "../../assets/images/icons/heart-outline.png";
import unfavorite from "../../assets/images/icons/unfavorite.png";
import whatsappIcon from "../../assets/images/icons/whatsapp.png";

import styles from "./styles";

const TeaccherItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image 
          style={styles.avatar}
          source={{uri:"https://avatars1.githubusercontent.com/u/59578084?s=460&u=74ff8ec6e4cb2e87eadb4167116e7e30d5f14695&v=4"}}
        />

        <View style={styles.profileInfo}>
          <Text style={styles.name}>Itallo Santos</Text>
          <Text style={styles.subject}>Biologia</Text>
        </View>
      </View>

      <Text style={styles.bio}>
        Sem bio.Nao sei de nada , nao faco nada, nao qiero nada
      </Text>

      <View style={styles.footer}>

        <Text style={styles.price}>
          Preço/Hora {'   '}
          <Text style={styles.priceValue}>R$ 90,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutLineIcon}/> */}
            <Image source={unfavorite}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>
        </View>

      </View>
    </View>
  );
}

export default TeaccherItem;