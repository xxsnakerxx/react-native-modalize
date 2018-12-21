import * as React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import Modalize from 'react-native-modalize';
import faker from 'faker';

export default class DefaultContent extends React.PureComponent {

  private modal: React.RefObject<Modalize> = React.createRef();

  private renderContent = () => (
    <View style={s.content}>
      <Text style={s.content__heading}>Article title</Text>
      <Text style={s.content__subheading}>November 11st 2018</Text>
      <TextInput style={s.content__input} placeholder="Type your username" />
      <Text style={s.content__paragraph}>{faker.lorem.paragraphs(8)}</Text>
      <TextInput style={s.content__input} placeholder="Type your username" />
    </View>
  )

  public openModal = () => {
    if (this.modal.current) {
      this.modal.current.open();
    }
  }

  render() {
    return (
      <Modalize ref={this.modal}>
        {this.renderContent()}
      </Modalize>
    );
  }
}

const s = StyleSheet.create({
  content: {
    padding: 15,
  },

  content__heading: {
    marginBottom: 2,

    fontSize: 24,
    fontWeight: '600',
    color: '#333',
  },

  content__subheading: {
    marginBottom: 20,

    fontSize: 16,
    color: '#ccc',
  },

  content__input: {
    paddingVertical: 15,
    marginBottom: 10,

    width: '100%',

    borderWidth: 1,
    borderColor: 'transparent',
    borderBottomColor: '#cdcdcd',
    borderRadius: 6,
  },

  content__paragraph: {
    fontSize: 15,
    fontWeight: '200',
    lineHeight: 22,
    color: '#666',
  },
});
