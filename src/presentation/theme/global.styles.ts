import { Appearance, Platform, StyleSheet } from 'react-native';

const globalColorsLight = {
    primary: '#7C4DFF',  // Un tono más suave y moderno del morado base
    secondary: 'rgba(255, 128, 171, 0.7)',  // Rosa suave, amigable y fresco
    tertiary: '#5C6BC0',  // Un morado más claro para una apariencia suave
    success: '#81DEEA',  // Azul suave para un mensaje de éxito no intrusivo
    danger: '#FF5252',  // Rojo más pastel y moderno, menos agresivo
    dark: '#424242',  // Gris oscuro suave que da buen contraste sin ser muy fuerte

    background: '#F5F5F5',  // Fondo claro grisáceo para evitar el blanco puro
    secondaryBackground: '#E0E0E0',  // Color plomo bajo, tono neutro para fondos secundarios
    textPrimary: '#333333',  // Un gris muy oscuro, más suave que negro
    textSecondary: '#757575',  // Gris claro para textos secundarios
    border: '#E0E0E0',  // Un color de borde suave para una delineación sutil // Color de borde sutil para delinear elementos
};

const globalColorsDark = {
    primary: '#B388FF',  // Un tono de morado suave pero con presencia
    secondary: 'rgba(255, 153, 187, 0.7)',  // Rosa suave y moderno, pero aún vibrante
    tertiary: '#7986CB',  // Un tono de azul/morado que sigue destacando sobre el fondo oscuro
    success: '#4DD0E1',  // Azul suave que resalta bien sobre el fondo oscuro
    danger: '#FF7B7B',  // Rojo pastel moderno que sigue resaltando sin ser agresivo
    dark: '#303030',  // Un gris oscuro con un tono suave, menos duro que el negro puro

    background: '#1E1E1E',
    secondaryBackground: '#2A2A2E',  // Un fondo gris oscuro para suavizar el contraste
    textPrimary: '#E0E0E0',  // Texto claro que resalta en fondo oscuro sin ser blanco puro
    textSecondary: '#B0BEC5',  // Un gris claro para los textos secundarios
    border: '#424242',  // Bordes sutiles para delinear sin distraer
};

export const commonColors = {
    white: '#E0E0E0',
};


const isDarkMode = Appearance.getColorScheme() === 'dark';

export const colors = isDarkMode ? globalColorsDark : globalColorsLight;

export const globalStyles = StyleSheet.create({
    centerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

        backgroundColor: colors.background,
    },

    title: {
        fontSize: 80,
        fontWeight: '300',
        color: 'black',
    },

    button: {
        borderRadius: 5,
        padding: 10,
        marginBottom: 10,
        alignItems: 'center',
    },

    primaryButton: {
        backgroundColor: colors.primary,
        color: colors.textPrimary,
    },

    secondaryButton: {
        backgroundColor: colors.secondary,
    },

    tertiaryButton: {
        backgroundColor: isDarkMode ? colors.secondaryBackground : commonColors.white,
        color: colors.textPrimary,
    },

    buttonText: {
        color: commonColors.white,
        fontSize: 15,
    },

    tertiaryButtonText: {
        color: globalColorsDark.primary,
        fontSize: 15,
    },

    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: Platform.OS === 'android' ? 15 : 0,
    },
});
