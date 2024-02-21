import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import ProfileCard from './src/components/ProfileCard';

export default function App() {
  return (
    <View style={styles.container}>
      <ProfileCard  name={"Matheus Menezes Scaranello"}  course={"Desenvolvimento de Sistemas"} picture={require("./assets/matheus.jpeg")} bio={"Nascido em 5 de julho de 2006, em Campinas, SP, minha paixão por tecnologia surgiu cedo. Durante meus anos no SESI, mergulhei nos estudos de matemática e ciência da computação. Ingressse no curso técnico de desenvolvimento de sistemas no SENAI, onde aprofundei meus conhecimentos em linguagens de programação. Recebi o título de aluno Ouro do SENAI duas vezes, reconhecendo minha excelência acadêmica e desempenho em desenvolvimento de sistemas."} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
