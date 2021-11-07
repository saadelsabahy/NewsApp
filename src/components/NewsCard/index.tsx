import {CommonStyles, Spaces} from '@constants/style';
import {calcFont} from '@constants/style/sizes';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, Text, Title, useTheme} from 'react-native-paper';

interface Props {
  onCardPressed: () => void;
  title: string;
  author: string;
  date: string;
  imageSource: string;
}
const NewsCard = ({onCardPressed, title, author, date, imageSource}: Props) => {
  const {
    colors: {primary},
  } = useTheme();
  return (
    <Card style={styles.container} onPress={onCardPressed}>
      <Card.Cover
        source={{uri: imageSource}}
        //style={{backgroundColor: primary}}
      />
      <Card.Title
        titleNumberOfLines={2}
        titleStyle={[CommonStyles.title, styles.title]}
        title={title}
      />
      <Card.Content style={styles.cardContent}>
        <Text style={styles.paragraph}>{author}</Text>
        <Text style={[styles.paragraph]}>{date}</Text>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: Spaces.medium,
    borderRadius: calcFont(7),
    overflow: 'hidden',
    marginBottom: 0,
  },
  cardContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 0,

    paddingBottom: 0,
  },
  title: {marginTop: Spaces.medium, letterSpacing: 0},
  paragraph: {
    textAlignVertical: 'center',
    paddingVertical: Spaces.small,
    opacity: 0.5,
  },
});

export {NewsCard};
