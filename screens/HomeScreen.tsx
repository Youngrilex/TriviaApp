import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";

import joeAvatar from "../assets/Joe.png";
import sarahAvatar from "../assets/sarah.png";
import hanaxAvatar from "../assets/Hanax.png";
import inioluwaAvatar from "../assets/Inioluwa.png";
import lizAvatar from "../assets/Liz.png";
import referVector from "../assets/Vector.png";
import questionMark from "../assets/qmark.png";
import john from "../assets/john.png";
import frame from "../assets/Frame.png";
import prize from "../assets/prize.png";
import notification from "../assets/notification.png";

const avatars = [
  joeAvatar,
  sarahAvatar,
  hanaxAvatar,
  inioluwaAvatar,
  lizAvatar,
];

type Props = {
  navigation: any;
};

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContent} contentContainerStyle={styles.scrollContainer}>
        <ImageBackground
          source={require('../assets/background.png')} // Path to your background image
          style={styles.backgroundImage}
        >
          <View style={styles.header}>
            <View style={styles.head}>
              <Image source={john} />
              <View style={styles.headImages}>
                <Image source={frame} />
                <Image source={prize} />
                <Image source={notification} />
              </View>
            </View>
            <Text style={styles.greeting}>Hello John 👋</Text>
            <Text style={styles.subText}>Let's play and Earn</Text>
          </View>
        </ImageBackground>

        <View style={styles.gameSection}>
          <Image source={questionMark} style={styles.qmark} />
          <Text style={styles.gamePrize}>Game Prize</Text>
          <Text style={styles.prizeAmount}>1,000,000</Text>
          <Text style={styles.nextGame}>Next Game: Tomorrow, 8PM</Text>
          <View style={styles.join}>
            <TouchableOpacity
              style={styles.joinButton}
              onPress={() => navigation.navigate("Trivia")}
            >
              <Text style={styles.joinButtonText}>Join Game</Text>
            </TouchableOpacity>
            <Text style={styles.entryFee}>Entry Fee ₦100.00</Text>
          </View>
        </View>

        <View style={styles.topGamersSection}>
          <Text style={styles.topGamersText}>Top Gamers of the Day</Text>
          <View style={styles.gamersList}>
            {["Joe", "Sarah", "Hanax", "Inioluwa", "Liz"].map((name, index) => (
              <View key={index} style={styles.gamer}>
                <Image source={avatars[index]} style={styles.avatar} />
                <Text style={styles.gamerName}>{name}</Text>
                <Text style={styles.gamerPoints}>₦5,000</Text>
              </View>
            ))}
          </View>
        </View>

        <View style={styles.referSection}>
          <View style={styles.box1}>
            <Text style={styles.referText}>Refer & Earn with your Friends</Text>
            <Text style={styles.inviteText}>
              Share with your friends and loved ones to {"\n"} come and play
            </Text>
            <TouchableOpacity style={styles.inviteButton}>
              <Text style={styles.inviteButtonText}>Invite Friends</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.box2}>
            <Image source={referVector} style={styles.referVector} />
          </View>
        </View>
      </ScrollView>

      {/* Sticky navbar */}
      <View style={styles.navContainer}>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="home-outline" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="wallet-outline" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Wallet</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="storefront-outline" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Store</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="trophy-outline" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>LeaderBoard</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Ionicons name="settings-outline" size={24} color="#FFFFFF" />
          <Text style={styles.navText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F4F6FC",
    paddingHorizontal: 0,
    position: "relative",
  },
  scrollContent: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 100, // To prevent content from being hidden by navbar
  },
  backgroundImage: {
    flex: 1,
    marginHorizontal:0,
    borderBottomRightRadius: 60,
  },
  header: {
    paddingBottom: 100,
    backgroundColor: "#17478B",
    padding: 20,
    opacity: 0.85,
    borderBottomRightRadius: 60,
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 150,
  },
  headImages: {
    flexDirection: "row",
    gap: 10,
  },
  greeting: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#FFF",
    marginTop: 20,
    marginBottom: 10,
  },
  subText: {
    fontSize: 16,
    color: "#FFF",
    marginBottom: 10,
  },
  gameSection: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    marginHorizontal:20,
    marginBottom: 20,
    marginTop: -80,
    alignItems: "center",
  },
  qmark: {
    position: "absolute",
    top: 15,
    right: 15,
  },
  gamePrize: {
    fontSize: 20,
    color: "#17478B",
    marginTop: 40,
  },
  prizeAmount: {
    fontSize: 48,
    fontWeight: "bold",
    color: "#17478B",
  },
  nextGame: {
    fontSize: 12,
    color: "#3B3B3B",
    marginBottom: 30,
  },
  join: {
    width:"100%",
    backgroundColor: "#2364AA",
    height: 63,
    flexDirection: "row",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 23,
  },
  joinButton: {
    backgroundColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    height: 28,
  },
  joinButtonText: {
    color: "#17478B",
    fontSize: 12,
    fontWeight: "bold",
  },
  entryFee: {
    fontSize: 14,
    color: "#FFFFFF",
    fontWeight: "bold",
  },
  topGamersSection: {
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
  },
  topGamersText: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
  },
  gamersList: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  gamer: {
    alignItems: "center",
  },
  avatar: {
    width: 50,
    height: 50,
    backgroundColor: "#D1D5DB",
    borderRadius: 25,
    marginBottom: 5,
  },
  gamerName: {
    fontSize: 14,
    fontWeight: "bold",
  },
  gamerPoints: {
    fontSize: 14,
    color: "#6B7280",
  },
  referSection: {
    backgroundColor: "#2364AA",
    borderRadius: 20,
    padding: 15,
    flexDirection: "row",
  },
  box1: {
    flex: 4,
  },
  box2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  referText: {
    fontSize: 18,
    color: "#FFF",
    fontWeight: "900",
    marginBottom: 10,
  },
  inviteText: {
    fontSize: 12,
    color: "#FFF",
    marginBottom: 10,
  },
  inviteButton: {
    borderWidth: 1,
    borderColor: "#FFF",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  referVector: {},
  inviteButtonText: {
    color: "#FFF",
    fontSize: 10,
  },
  navContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#17478B",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 70,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    justifyContent: "center",
    alignItems: "center",
  },
  navText: {
    color: "#FFFFFF",
    fontSize: 12,
    marginTop: 5,
  },
});

export default HomeScreen;
