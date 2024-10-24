import React from 'react';
import { StyleSheet } from 'react-native';

import Timeline from 'react-native-timeline-flatlist';

import { RoadMapRow } from '../components';
import { roadmapList } from '../../helpers';

const renderDetail = (rowData: any ) => {
    return (
        <RoadMapRow
            title={ rowData.title }
            description={ rowData.description }
        />
    );
};

export const RoadMapScreen = () => {
    const handleClick = (data : any) => {
        console.log(data, 'evnt');
    };

    return (
        <Timeline
            circleColor="#6A3DE8"
            lineColor="#6A3DE8"
            timeStyle={ styles.timeStyle }
            circleSize={30}
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
        marginTop: 10,
    },

    timeStyle: {
        textAlign: 'center',
        backgroundColor:'#6A3DE8',
        color:'white',
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
        left: 6,
        top: 0,
    },

    separator: {
        backgroundColor: '#6a3DE8',
    },

    row: {
        flex: 1,
    },
});
