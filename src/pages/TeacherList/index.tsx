import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, TextInput } from "react-native";
import TeacherItem, { Teacher } from "../../components/TeacherItem";
import { BorderlessButton, RectButton } from "react-native-gesture-handler";
import AsyncStorage from "@react-native-community/async-storage";
import {Feather} from "@expo/vector-icons";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";

import styles from "./styles";


function TeacherList() {
  const [isFiltersVisible, setIsFiltersVivible] = useState(false);

  const [favorites, setFavorites] = useState<number[]>([]);
  const [teachers, setTeachers] = useState([]);
  const [subject, setSubject] = useState('');
  const [week_day, setWeeDay] = useState('');
  const [time, setTime] = useState('');

  useEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response) ;
        const favoritedTeachersIds = favoritedTeachers.map((teacher: Teacher) => teacher.id);

        setFavorites(favoritedTeachersIds);
      }
    })
  }, []);

  function handleToggleFIltersVisible() {
    setIsFiltersVivible(!isFiltersVisible)
  }

  function handleFiltersSubmit() {
    searchTeachers();
  }

  async function searchTeachers() {
    const response = await api.get('/classes', {
      params: {
        subject,
        week_day,
        time
      }
    });

    setTeachers(response.data);
    handleToggleFIltersVisible();
    console.log(teachers);
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
              value={subject}
              onChangeText={text => setSubject(text)}
              placeholder="Qual a matéria?"
              placeholderTextColor="#C1BCCC"
            />

            <View style={styles.inputGroup}>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Dia da semana</Text>
                <TextInput
                  style={styles.input}
                  value={week_day}
                  onChangeText={text => setWeeDay(text)}
                  placeholder="Qual o dia?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  value={time}
                  onChangeText={text => setTime(text)}
                  placeholder="Qual horário?"
                  placeholderTextColor="#C1BCCC"
                />
              </View>
            </View>

            <RectButton onPress={handleFiltersSubmit} style={styles.submitButton}>
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
        {teachers.map((teacher: Teacher) => {
          return (
            <TeacherItem
              key={teacher.id} 
              teacher={teacher}
              favorited={favorites.includes(teacher.id)}
            />
          );
        })}
      </ScrollView>
      
    </View>
  );
}

export default TeacherList;