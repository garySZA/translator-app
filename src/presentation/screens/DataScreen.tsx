import React, { useEffect, useState } from 'react';

import { DataTable } from 'react-native-paper';
import { RouteProp, useRoute } from '@react-navigation/native';

import { useNavigator } from '../../hooks';
import { DictionaryRouterParams } from '../router/DictionaryNavigator';
import { ScrollView } from 'react-native';
import { colors } from '../theme';

export const DataScreen = () => {
    const params = useRoute<RouteProp<DictionaryRouterParams >>().params;
    const { navigation } = useNavigator<DictionaryRouterParams>();

    const [page, setPage] = useState(0);
    const [numberOfItemsPerPageList] = useState([5,10,15]);
    const [itemsPerPage, onItemsPerPageChange] = useState(numberOfItemsPerPageList[0]);

    const [items] = useState(params?.list || []);
    const [itemsEsp] = useState(params?.listEsp || []);

    const from = page * itemsPerPage;
    const to = Math.min((page + 1) * itemsPerPage, items.length );

    useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    useEffect(() => {
        navigation.setOptions({
            title: params?.title,
        });
    }, [navigation, params?.title]);


    return (
        <ScrollView>

            <DataTable>
                <DataTable.Header>
                    <DataTable.Title>#</DataTable.Title>
                    <DataTable.Title>Castellano</DataTable.Title>
                    <DataTable.Title>Quechua</DataTable.Title>
                </DataTable.Header>

                {
                    items.slice(from, to).map((item) => (
                        <DataTable.Row key={ item.key }>
                            <DataTable.Cell >{ +item.key + 1 }</DataTable.Cell>
                            <DataTable.Cell>{ item.value }</DataTable.Cell>
                            <DataTable.Cell>{ itemsEsp[+item.key].value }</DataTable.Cell>
                        </DataTable.Row>
                    ))
                }

                <DataTable.Pagination
                    page={ page }
                    numberOfPages={ Math.ceil(params!.list.length / itemsPerPage) }
                    onPageChange={ (page) => setPage(page) }
                    label={ `${from + 1} - ${ to } de ${ params!.list.length }` }
                    numberOfItemsPerPageList={ numberOfItemsPerPageList }
                    numberOfItemsPerPage={ itemsPerPage }
                    onItemsPerPageChange={ onItemsPerPageChange }
                    showFastPaginationControls
                    selectPageDropdownLabel={'Filas por página'}
                    dropdownItemRippleColor={ colors.primary }
                />

            </DataTable>
        </ScrollView>
    );
};
