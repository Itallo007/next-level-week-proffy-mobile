import React from "react";
import { View, ScrollView } from "react-native";
import TeaccherItem from "../../components/TeacherItem";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";

function TeacherList() {
  return (
    <View style={styles.container}>
      <PageHeader title="Proffys Disponíveis"/>
      
      <ScrollView
        style={styles.teacherList}
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 16
        }}
      >
        <TeaccherItem/>
        <TeaccherItem/>
        <TeaccherItem/>
        <TeaccherItem/>
      </ScrollView>
      
    </View>
  );
}

export default TeacherList;