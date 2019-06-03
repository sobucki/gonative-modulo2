import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Header from '~/components/Header';

import Icon from 'react-native-vector-icons/FontAwesome';
// import { Container } from './styles';

const Repository = () => (
  <View>
    <Header title="Repositórios" />
  </View>
);

// Icone da tab inferior, separado devido ao eslint
const TabIcon = ({ tintColor }) => <Icon name="list-alt" size={20} color={tintColor} />;

TabIcon.propTypes = {
  tintColor: PropTypes.string.isRequired,
};

Repository.navigationOptions = {
  tabBarIcon: TabIcon,
};

export default Repository;
