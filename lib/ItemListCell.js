import React from 'react';
//Import React
import {
    View,
    StyleSheet,
    Text,
    Image,
    Animated,
    TouchableOpacity,
} from 'react-native';
//Import basic react native components

export default class ItmeListCell extends React.Component {
    render() {
        const { removeItem, item } = this.props;
        const { uri, title, description, key, price } = item;
        return (
            <Animated.View style={{ flex: 1, alignItems: 'center', paddingVertical: 10 }}>
                <View
                    style={styles.container}>
                    <Image style={styles.thumbnail} source={{ uri }} />
                    <View style={styles.metaDataContainer}>
                        <View style={styles.metaDataContent}>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>
                            <Text style={styles.description}>₹{price}</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => removeItem(key)}
                    ><Text style={styles.remove}>Remove</Text></TouchableOpacity>
                </View>
            </Animated.View >
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        elevation: 3,
        borderColor: 'gray',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    metaDataContainer: {
        flex: 1,
    },
    thumbnail: {
        width: 70,
        height: 70,
    },
    metaDataContent: {
        marginTop: 5,
        marginLeft: 15,
    },
    title: {
        color: '#444',
        fontSize: 18,
        fontWeight: 'bold',
    },
    remove: {
        color: 'red',
        fontSize: 18,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 16,
        color: '#888',
        fontWeight: '700',
    },
});
