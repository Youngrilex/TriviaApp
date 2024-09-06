import React from 'react';
import { View, Text, Button, StyleSheet, Image, ImageBackground } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
    navigation: any;
    route:any
  };

const ResultsScreen: React.FC<Props> = ({ navigation ,route}) => {
    const { correctCount, incorrectCount, totalTime } = route.params;
  return (
 
    <ImageBackground
    source={require('../assets/background-image.png')}
    style={styles.backgroundImage}
  >
    <View style={styles.container}>
      <Text style={styles.header}>Results</Text>

      <View style={styles.resultsBox}>
        <Text style={styles.timeText}>Total Time Used: {`${Math.floor(totalTime / 60)
          .toString()
          .padStart(2, '0')}:${(totalTime % 60).toString().padStart(2, '0')}`}</Text>
        <View style={styles.scoreRow}>
          <Text style={styles.correctText}>{correctCount} Correct</Text>
          <Ionicons name="checkmark-circle" size={24} color="#00C449" />
          <Text style={styles.correctText}>{incorrectCount} Incorrect</Text>
          <Ionicons name="close-circle" size={24} color="#F9474B" />
        </View>
      </View>

      <View style={styles.messageBox}>
        <Text style={styles.emoji}>{correctCount >= 6 ? "😀" : "😠"}</Text>
        <Text style={styles.message}>Better luck next time</Text>
        <Text style={styles.congrats}>
          {correctCount >= 6 ? "Congratulations You Won 🎉" : "Sorry you didn't win"}
        </Text>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeButton}>
        <Text style={styles.inviteButtonText}>Go Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.homeBut}>
        <Text style={styles.inviteButtonText}>Go Home</Text>
      </TouchableOpacity>
    </View>
  </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
    padding: 20,
    opacity:.8,
  },
  backgroundImage: {
    flex: 1,
    borderBottomRightRadius:60,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color:"#FFF",
  },
  resultsBox: {
    width: '90%',
    backgroundColor: '#DFF9FF',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    borderColor:"#00CBF7", 
    borderWidth: 4,   
  },
  timeText: {
    fontSize: 12,
    marginBottom: 10,
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  correctText: {
    fontSize: 14,
    fontWeight:'700',
  },
  messageBox: {
    width: '90%',
    backgroundColor: '#DFF9FF',
    borderRadius: 10,
    padding: 20,
    marginBottom: 170,
    alignItems: 'center',
    justifyContent:'center',
    borderColor:"#00CBF7", 
    borderWidth: 4,   
    height:256,
  },
  emoji: {
    fontSize: 60,
    marginBottom: 10,
  },
  message: {
    fontSize: 14,
    color: '#000000',
    marginBottom: 15,
    fontWeight: '500',
  },
  congrats: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000',
  },
  homeButton: {
    width: '100%',
    backgroundColor:'#ED7B2B',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 130,
 
    position:'relative',
  },
  homeBut: {
    width: '90%',
    backgroundColor:'#00CBF7',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 130,
    position:'absolute',
    fontWeight: '700',
    bottom:6,
    right:'-45%',
  },
  // homeBut: {
  //   width: '80%', // Set width for a proper proportion
  //   backgroundColor: '#ED7B2B',
  //   borderRadius: 20,
  //   paddingVertical: 10,
  //   position: 'absolute',
  //   bottom: 6,
  //   left: '50%', // Place it 50% from the left
  //   transform: [{ translateX: -'40%' }], // Move the button back to the left by half of its width (40% in this case because width is 80%)
  // },
  
  inviteButtonText: {
    fontSize: 18,
    fontWeight:700,
  },
});

export default ResultsScreen;
