import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#8257E7",
    
  },
  
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },

  title: {
    fontFamily: "Archivo_700Bold",
    fontSize: 24,
    lineHeight: 32,
    color: "#FFF",
    maxWidth: 160,
    marginVertical: 40
  }
});

export default styles;