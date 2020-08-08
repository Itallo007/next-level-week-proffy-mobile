import React, { useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import TeaccherItem from "../../components/TeacherItem";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import {Feather} from "@expo/vector-icons";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";

function TeacherList() {
  const [isFiltersVisible, setIsFiltersVivible] = useState(false);

  function handleToggleFIltersVisible() {
    setIsFiltersVivible(!isFiltersVisible)
  }

  return (
    <View style={styles.container}>
      <PageHeader
        title="Proffys Disponíveis"
        headerRight={(
          <BorderlessButton onPress={handleToggleFIltersVisible}>
            <Feather name="filter" size={20} color="#FFF"/>
          </BorderlessButton>
        )}
      >

        {isFiltersVisible && (
          <View style={styles.searchForm}>

            <Text style={styles.label}>Matéria</Text>
            <TextInput
              style={styles.input}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
            />

            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonTex}>Filtrar</Text>
            </RectButton>
          </View>
        )}

      </PageHeader>
      
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