import React from 'react';

import { DataTable } from 'react-native-paper';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { RootStackParams } from '../router';

export const DataScreen = () => {
    const params = useRoute<RouteProp<RootStackParams, 'Data'>>().params;
        const navigator = useNavigation();

    // const [setPage] = useState(0);
    // const [numberOfItemsPerPageList] = useState([5,10,15]);
    // const [itemsPerPage] = useState(numberOfItemsPerPageList[0]);

    // const from = page * itemsPerPage;
    // const to = Math.min((page + 1) * itemsPerPage, items.length );

    // useEffect(() => {
    //     setPage(0);
    // }, [itemsPerPage]);


    return (
        <DataTable>
            <DataTable.Header>
                <DataTable.Title>#</DataTable.Title>
                <DataTable.Title>Castellano</DataTable.Title>
                <DataTable.Title>Quechua</DataTable.Title>
            </DataTable.Header>

            {/* {
                params.list.map((item) => (
                    <DataTable.Row key={ item.key }>
                        <DataTable.Cell >{ +item.key + 1 }</DataTable.Cell>
                        <DataTable.Cell>{ item.value }</DataTable.Cell>
                        <DataTable.Cell>{ params.listEsp[+item.key].value }</DataTable.Cell>
                    </DataTable.Row>
                ))
            } */}

            {/* <DataTable.Pagination
                page={ page }
                numberOfPages={ Math.ceil(items.length / itemsPerPage) }
                onPageChange={ (page) => setPage(page) }
                label={ `${from + 1} - ${ to } of ${ items.length }` }
                numberOfItemsPerPageList={ numberOfItemsPerPageList }
                numberOfItemsPerPage={ itemsPerPage }
                onItemsPerPageChange={ onItemsPerPageChange }
                showFastPaginationControls={false}
                selectPageDropdownLabel={'Filas por página'}
            /> */}

        </DataTable>
    );
};
