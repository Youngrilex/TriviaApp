import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  ActivityIndicator,  // Import ActivityIndicator
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface Props {
  navigation: any;
}

interface Question {
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

const QuizScreen: React.FC<Props> = ({ navigation }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [timer, setTimer] = useState(10);
  const [isAnswerLocked, setIsAnswerLocked] = useState(false);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [totalTime, setTotalTime] = useState(0);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(
          "https://opentdb.com/api.php?amount=10&category=32&difficulty=easy&type=multiple&encode=url3986"
        );
        const data = await response.json();
        setQuestions(
          data.results.map((item: any) => ({
            question: decodeURIComponent(item.question),
            correct_answer: decodeURIComponent(item.correct_answer),
            incorrect_answers: item.incorrect_answers.map(decodeURIComponent),
          }))
        );
        setLoading(false); // Set loading to false when data is fetched
      } catch (error) {
        console.error("Error fetching trivia questions:", error);
        setLoading(false); // Set loading to false if error occurs
      }
    })();
  }, []);

  useEffect(() => {
    if (questions.length) {
      const currentQuestion = questions[currentQuestionIndex];
      const allAnswers = [...currentQuestion.incorrect_answers];
      allAnswers.splice(
        Math.floor(Math.random() * (allAnswers.length + 1)),
        0,
        currentQuestion.correct_answer
      );
      setShuffledAnswers(allAnswers);
    }
  }, [currentQuestionIndex, questions]);

  useEffect(() => {
    if (timer > 0 && !isAnswerLocked) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else if (!timer && !isAnswerLocked) {
      moveToNextQuestion();
    }
  }, [timer, isAnswerLocked]);

  const moveToNextQuestion = () => {
    setSelectedAnswer(null);
    setIsAnswerLocked(false);
    setTimer(10);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      navigation.navigate("Result", {
        correctCount,
        incorrectCount,
        totalTime,
      });
    }
  };

  const handlePress = (answer: string) => {
    setSelectedAnswer(answer);
    setIsAnswerLocked(true);
    if (answer === questions[currentQuestionIndex].correct_answer) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    setTimeout(moveToNextQuestion, 2000);
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
        <ActivityIndicator size="large" color="#00CBF7" />
      </View>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <ImageBackground
      source={require("../assets/background-image.png")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.timerContainer}>
            <Ionicons name="timer-outline" size={24} color="white" />
            <Text style={styles.timerText}>00.00.40</Text>
          </View>
          <View style={styles.questionNumberContainer}>
            <Text style={styles.questionNumber}>{timer}s</Text>
          </View>
        </View>

        <View style={styles.questionContainer}>
          <Text style={styles.questionTitle}>Question {currentQuestionIndex + 1}</Text>
          <Text style={styles.questionText}>{currentQuestion.question}</Text>
        </View>

        <View style={styles.optionsContainer}>
          {shuffledAnswers.map((option, index) => {
            const backgroundColor =
              selectedAnswer === null
                ? "#E0F7FA"
                : option === currentQuestion.correct_answer
                ? "#009028"
                : option === selectedAnswer
                ? "#C30012"
                : "#E0F7FA";
            return (
              <TouchableOpacity
                key={index}
                onPress={() => !isAnswerLocked && handlePress(option)}
                style={[styles.optionButton, { backgroundColor }]}
                disabled={isAnswerLocked}
              >
                <Text style={[styles.optionText, { color: selectedAnswer === null ? "black" : "white" }]}>{option}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1E3A8A',
  },
  container: {
    flex: 1,
    backgroundColor: "#1E3A8A",
    paddingHorizontal: 20,
    paddingTop: 50,
    opacity: 0.75,
  },
  backgroundImage: {
    flex: 1,
    borderBottomRightRadius: 60,
  },
  header: {
    flexDirection: "row",
    gap: 70,
    alignItems: "center",
    marginBottom: 20,
    opacity: 1,
  },
  timerContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  timerText: {
    color: "white",
    fontSize: 16,
    marginLeft: 5,
  },
  questionNumberContainer: {
    backgroundColor: "white",
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  questionNumber: {
    fontSize: 18,
    color: "#1E3A8A",
    fontWeight: "bold",
  },
  questionContainer: {
    backgroundColor: "white",
    borderRadius: 15,
    padding: 20,
    marginBottom: 20,
    height: 182,
    borderColor: "#00CBF7",
    borderWidth: 7,
    alignItems: "center",
    justifyContent: "center",
  },
  questionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#1E3A8A",
    marginBottom: 10,
  },
  questionText: {
    fontSize: 16,
    textAlign: "center",
    color: "#1E3A8A",
  },
  optionsContainer: {
    marginVertical: 20,
  },
  optionButton: {
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 25,
    padding: 15,
    marginBottom: 15,
    alignItems: "center",
  },
  optionText: {
    fontSize: 16,
    color: "#1E3A8A",
    textAlign: "center",
    flex: 1,
  },
});

export default QuizScreen;
