import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8257E5",
    justifyContent: "center",
    padding: 40
  },

  banner: {
    width: "100%",
    resizeMode: "contain",
  },

  title: {
    fontFamily: "Poppins_400Regular",
    color:"#FFF",
    fontSize: 20,
    lineHeight: 40,
    marginTop: 80,
  },

  titleBold: {
    fontFamily: "Poppins_600SemiBold"
  },

  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 40,
  },

  button: {
    height: 150,
    width: "48%",
    borderRadius: 8,
    padding: 22,
    justifyContent: "space-between"
  },

  buttonPrimary: {
    backgroundColor: "#9871f5",
  },

  buttonSecondary: {
    backgroundColor: "#04d361"
  },

  buttonText: {
    fontFamily: "Archivo_700Bold",
    color: "#FFF",
    fontSize: 20
  },

  totalConnections: {
    fontFamily: "Poppins_400Regular",
    color: "#D4C2FF",
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 140,
    marginTop: 40
  }

});

export default styles;