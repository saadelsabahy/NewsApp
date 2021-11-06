import {COLORS, CommonStyles, Spaces} from '@constants/style';
import {calcFont, SCREEN_HEIGHT} from '@constants/style/sizes';
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import {Card, Paragraph, Text} from 'react-native-paper';

interface Props {
  imageSource: string;
  date: string;
  firstParagraph: string;
  secondParagraph: string;
  title: string;
  author: string;
}

const DetailsCard = ({
  imageSource,
  date,
  firstParagraph,
  secondParagraph,
  title,
  author,
}: Props) => {
  return (
    <View style={CommonStyles.screensContainer}>
      <ImageBackground
        source={{uri: imageSource}}
        style={styles.imageBackground}
      />
      <Card.Content>
        <View style={styles.rowSubtitles}>
          <Text style={styles.subTitles}>{`${author.replace(
            /[^a-zA-Z ]/g,
            '',
          )}`}</Text>
          <Text style={styles.subTitles}>{date}</Text>
        </View>
      </Card.Content>
      <Card.Title
        titleNumberOfLines={2}
        title={title.replace(/[^a-zA-Z ]/g, '')}
        titleStyle={CommonStyles.title}
      />

      <Card.Content>
        <Paragraph style={styles.paragraph}>
          {firstParagraph.replace(/[^a-zA-Z ]/g, '')}
        </Paragraph>
        <Paragraph style={styles.paragraph}>
          {secondParagraph.replace(/[^a-zA-Z ]/g, ' ')}
        </Paragraph>
      </Card.Content>
    </View>
  );
};

export {DetailsCard};
const styles = StyleSheet.create({
  imageBackground: {
    width: '100%',
    height: SCREEN_HEIGHT / 2,
    marginBottom: Spaces.medium,
  },
  rowSubtitles: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  date: {
    textTransform: 'capitalize',
  },

  subTitles: {
    textTransform: 'capitalize',
    fontSize: calcFont(15),
    marginTop: calcFont(5),
    color: COLORS.GRAY,
  },
  paragraph: {marginVertical: calcFont(10)},
});
