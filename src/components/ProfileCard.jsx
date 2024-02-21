import React from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, StyleSheet, Image } from "react-native";

const ProfileCard = ({name, course, bio, picture}) => {
  return (
    <View style={styles.container}>
        <Image source={picture} style={styles.image}/>
      <Text>{name}</Text>
      <Text>{course}</Text>
      <Text>{bio}</Text>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 100,
    },
    });

export default ProfileCard;