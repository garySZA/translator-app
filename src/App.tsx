import './gesture-handler';

import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { PaperProvider } from 'react-native-paper';

import IonIcons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { NavigationContainer } from '@react-navigation/native';

import { SideMenuNavigator } from './presentation/router';
import { colors } from './presentation/theme';



const iconProvider = ({ name, ...props }: { name: string } & React.ComponentProps<typeof IonIcons>) => {
  if (name.includes('-') || name.startsWith('menu')) {

      return <MaterialCommunityIcons name={name} {...props} />;
  }

  return <IonIcons name={name} {...props} />;
};

export const App = () => {
    return (
        <NavigationContainer>
          <PaperProvider
            settings={{
              icon: iconProvider,
            }}
          >
            <SafeAreaView style={ styles.container }>
              {/* <CounterScreen /> */}
              {/* <LessonScreen /> */}
              <SideMenuNavigator />
            </SafeAreaView>
          </PaperProvider>
        </NavigationContainer>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondaryBackground,
  },
});
