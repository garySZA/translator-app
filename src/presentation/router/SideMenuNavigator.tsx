import React from 'react';
import { StyleSheet, Text, useWindowDimensions, View } from 'react-native';

import { createDrawerNavigator, DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { Avatar, Divider } from 'react-native-paper';

import { DataScreen } from '../screens';
import { StackNavigator } from './StackNavigator';
import { colors } from '../theme';
import { IonIcon } from '../components/shared';

const Drawer = createDrawerNavigator();

export const SideMenuNavigator = () => {
    const dimensions = useWindowDimensions();

    return (
        <Drawer.Navigator
            drawerContent={ (props) => <CustomDrawerContent { ...props }/> }
            screenOptions={{
                drawerType: ( dimensions.width >= 758 ) ? 'permanent' : 'slide',
                headerShown: true,

                drawerActiveBackgroundColor: colors.primary,
                drawerActiveTintColor: 'white',
                drawerInactiveTintColor: colors.primary,
                drawerItemStyle: styles.drawerItem,
            }}
        >
            <Drawer.Screen
                options={{
                    drawerIcon: ({ color }) => (<IonIcon name="color-wand-outline" color={ color }/>)
                }}
                name="Retos"
                component={ StackNavigator }
            />
            <Drawer.Screen
                name="Animales"
                component={ DataScreen }
            />
            <Drawer.Screen
                name="Alimentos"
                component={ DataScreen }
            />
            <Drawer.Screen
                name="Colores"
                component={ DataScreen }
            />
            <Drawer.Screen
                name="Números"
                component={ DataScreen }
            />
            <Drawer.Screen
                name="Objetos del hogar"
                component={ DataScreen }
            />
        </Drawer.Navigator>
    );
};

const CustomDrawerContent = ( props: DrawerContentComponentProps ) => {
    return (
        <DrawerContentScrollView>
            <View style={ styles.logoContainer }>
                <Avatar.Image size={ 200 } source={ require('../../assets/logo.jpeg') } />
            </View>
            <Text
                numberOfLines={ 2 }
                style={ styles.title }
            >
                CULTURANCHIKPA PUNTA KAQARIMAYNIN
            </Text>
            <Divider style={ styles.divider }/>


            <DrawerItemList { ...props } />
        </DrawerContentScrollView>
    );
};

const styles = StyleSheet.create({
    logoContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 40,
    },

    title: {
        color: colors.primary,
        fontSize: 20,
        fontWeight: '400',
        textAlign: 'center',
    },

    divider: {
        marginVertical: 20,
        backgroundColor: colors.primary,
    },

    drawerItem: {
        borderRadius: 100,
        paddingHorizontal: 20,
    },

    drawerContent: {
        height: 200,
        backgroundColor: colors.primary,
        margin: 30,
        borderRadius: 50,
    },
});
