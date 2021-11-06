import {CommonStyles, Spaces} from '@constants/style';
import {calcFont} from '@constants/style/sizes';
import * as React from 'react';
import {StyleSheet} from 'react-native';
import {Card, Paragraph, useTheme} from 'react-native-paper';

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
        style={{backgroundColor: primary}}
      />
      <Card.Title
        titleNumberOfLines={2}
        titleStyle={[CommonStyles.title, styles.title]}
        title={title}
      />
      <Card.Content>
        <Paragraph>{author}</Paragraph>
        <Paragraph style={{alignSelf: 'flex-end'}}>{date}</Paragraph>
      </Card.Content>
    </Card>
  );
};
const styles = StyleSheet.create({
  container: {
    margin: Spaces.medium,
    borderRadius: calcFont(7),
    overflow: 'hidden',
  },
  title: {marginTop: 15},
});

export {NewsCard};
