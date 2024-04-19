import React, { useState, useEffect } from 'react';
import { View, Button, Text, StyleSheet } from 'react-native';
//import firebase from 'firebase';
import database from '@react-native-firebase/database';
import Auth from '@react-native-firebase/auth';

const PostScreen = () => {
  const [liked, setLiked] = useState(false);
  const currentUser = Auth().currentUser;

  useEffect(() => {
    if (currentUser) {
      checkLikeStatus();
    }
  }, [currentUser]);

  const checkLikeStatus = () => {

    database()
      .ref('likes/' + currentUser.uid)
      .once('value')
      .then(snapshot => {
        if (snapshot.exists()) {
          setLiked(true);
        }
      })
      .catch(error => {
        console.error('Error getting like status:', error);
      });
  };

  const handleLike = () => {
    if (currentUser) {

      database()
        .ref('likes/' + currentUser.uid)
        .set(true)
        .then(() => {
          setLiked(true);
        })
        .catch(error => {
          console.error('Error setting like status:', error);
        });
    }
  };

  return (
    <View style={styles}>

      <Text>ADSFASDFASDF</Text>
      <Text>ADSFASDFASDF</Text>
      <Text>ADSFASDFASDF</Text>

      <Button
        title={liked ? "Liked" : "Like"}
        onPress={handleLike}
        disabled={liked}
      />


    </View>
  );
};

export default PostScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})