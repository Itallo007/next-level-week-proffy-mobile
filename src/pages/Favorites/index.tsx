import React, { useState } from "react";
import { View, ScrollView, AsyncStorage } from "react-native";
import {useFocusEffect} from "@react-navigation/native";
import PageHeader from "../../components/PageHeader";
import TeacherItem, { Teacher } from "../../components/TeacherItem";

import styles from "./styles"

function Favorites() {
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(() => {
    AsyncStorage.getItem('favorites').then(response => {
      if(response) {
        const favoritedTeachers = JSON.parse(response) ;

        setFavorites(favoritedTeachers);
      }
    })
  });

  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <PageHeader title="Meus proffys Favoritos"/>

        <ScrollView
          style={styles.favoriteList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 16
          }}
        >
          {favorites.map((favorite: Teacher) => {
            return (
            <TeacherItem
              key={favorite.id}
              teacher={favorite}
              favorited
            />);
          })}
        
        </ScrollView>
      </View>
    </View>
  );
}

export default Favorites;