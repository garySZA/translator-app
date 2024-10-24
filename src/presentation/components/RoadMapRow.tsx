import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RoadMapRowTitle } from './RoadMapRowTitle';
import { RoadMapRowDescription } from './RoadMapRowDescription';

interface Props {
    title: string;
    description: string;
}

export const RoadMapRow = ({ title, description }: Props) => {
    return (
        <View style={ styles.container }>
            <RoadMapRowTitle title={ title }/>
            <RoadMapRowDescription description={ description }/>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
