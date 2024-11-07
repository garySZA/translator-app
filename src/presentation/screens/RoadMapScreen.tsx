import React from 'react';
import { StyleSheet } from 'react-native';

import Timeline from 'react-native-timeline-flatlist';

import { RoadMapRow } from '../components';
import { roadmapList } from '../../helpers';
import { useNavigator } from '../../hooks';
import { colors } from '../theme';

const renderDetail = (rowData: any ) => {
    return (
        <RoadMapRow
            title={ rowData.title }
            description={ rowData.description }
        />
    );

};



export const RoadMapScreen = () => {
    const { navigation } = useNavigator();

    const handleClick = (data: any ) => {
        navigation.navigate('Lesson',
            {
                lessonId: 0,
                name: data.title,
                step: 1,
                stepTitle: 'El número 10',
                lesson: data.lessonList[0],
                lessonList: data.lessonList,
            });
    };

    return (
        <Timeline
            circleColor={ colors.primary }
            lineColor={ colors.tertiary }
            timeStyle={ styles.timeStyle }
            circleSize={20}
            innerCircle="dot"
            timeContainerStyle={ styles.timeContainer }
            rowContainerStyle={ styles.rowContainer }
            circleStyle={ styles.circle }
            showTime={ false }
            separator={ true }
            separatorStyle={ styles.separator }
            onEventPress={ handleClick }
            data={ roadmapList }
            renderDetail={ renderDetail }
            style={ styles.container }
        />
    );
};

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        backgroundColor: colors.secondaryBackground,
    },

    timeStyle: {
        textAlign: 'center',
        padding:5,
        borderRadius:13,
    },

    timeContainer: {
        minWidth: 72,
        marginRight: 10,
    },

    rowContainer: {
        paddingBottom: 0,
    },

    circle: {
        position: 'absolute',
        left: 10,
        top: 0,
    },

    separator: {
        backgroundColor: colors.tertiary,
    },

    row: {
        flex: 1,
    },
});
