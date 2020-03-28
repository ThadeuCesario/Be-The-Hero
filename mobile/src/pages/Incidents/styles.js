import { StyleSheet } from 'react-native';

/**
 * Dentro de 'Constants' conseguimos importar algumas constantes. Isso é, propriedades que serão
 * fixas de nosso projeto. No caso, queremos obter o tamanho da statusBar.
 */
import Constants from 'expo-constants';

/**
 * A propriedade 'flex:1', informa que o conteúdo preenche 100% da página.
 * A propriedade paddingHorizontal adiciona padding nas horizontais (como se fosse padding-right junto com padding-left) 
 * no CSS, entretando essa é uma propriedade unica do React Native.
 * 
 * Ao contrário da web o flex-direction no ReacNative é sempre collumn;
 */

export default StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },  

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    headerText: {
        fontSize: 15,
        color: '#737380'
    },

    headerTextBold: {
        fontWeight: 'bold'
    },

    title: {
        fontSize: 30,
        marginBottom: 16,
        marginTop: 48,
        color: '#13131a',
        fontWeight: 'bold'
    },

    description: {
        fontSize: 16,
        lineHeight: 24,
        color: '#737380'
    },

    incidentList: {
        marginTop: 32
    },

    incident:{
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#fff',
        marginBottom: 16
    },

    incidentProperty: {
        fontSize: 14,
        color: '#41414d',
        fontWeight: 'bold'
    },

    incidentValue:{
        marginTop: 8,
        fontSize: 15,
        marginBottom: 24,
        color: '#737380'
    },

    detailsButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    detailsButtonText:{
        color: '#e02041',
        fontSize: 15,
        fontWeight: 'bold'
    }
});