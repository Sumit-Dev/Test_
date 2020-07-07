import React, { Component } from 'react';
//Import React
import {
    Text,
    View,
    StyleSheet,
    FlatList,
    UIManager,
    SafeAreaView,
    LayoutAnimation,
    TouchableOpacity,
} from 'react-native';
//Import basic react native components
import ItmeListCell from './ItemListCell';
//Import custom card component

console.disableYellowBox = true;

UIManager.setLayoutAnimationEnabledExperimental &&
    UIManager.setLayoutAnimationEnabledExperimental(true);
const imageUrl = 'https://cdn-a.william-reed.com/var/wrbm_gb_food_pharma/storage/images/publications/food-beverage-nutrition/beveragedaily.com/article/2020/01/31/what-next-for-lipton-and-pg-tips-unilever-s-strategic-tea-review/10657232-5-eng-GB/What-next-for-Lipton-and-PG-Tips-Unilever-s-strategic-tea-review.jpg';
const cards = [
    {
        key: 0,
        uri: imageUrl,
        title: 'TEA',
        description: 'Special Tea',
        price: '30'
    },
];

export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cards,
        };
    }

    setAnimation = () => {
        LayoutAnimation.configureNext({
            duration: 250,
            update: {
                type: LayoutAnimation.Types.easeIn,
                springDamping: 0.7,
            },
        });
        LayoutAnimation.configureNext({
            duration: 500,
            create: {
                type: LayoutAnimation.Types.easeIn,
                property: LayoutAnimation.Properties.scaleXY,
                springDamping: 0.7,
            },
        });
    };

    addItem = (() => {
        let key = cards.length;
        return () => {
            const { cards } = this.state;
            cards.unshift({
                key,
                uri: imageUrl,
                title: 'TEA',
                description: 'Special Tea',
                price: '30'
            });
            this.setAnimation();
            this.setState({
                cards: cards.slice(0),
            });
            key++;
        };
    })();

    removeItem = key => {
        const { cards } = this.state;
        this.setAnimation();
        this.setState({
            cards: cards.slice().filter(card => card.key !== key),
        });
    };

    renderItem = ({ item }) => <ItmeListCell item={item} removeItem={this.removeItem} />;

    render() {
        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: '#808080' }}>
                <View style={styles.container}>
                    <View style={styles.addButton}>
                        <Text style={styles.title}>Firm Name</Text>
                        <TouchableOpacity style={{ alignSelf: 'flex-end' }} onPress={this.addItem}>
                            <Text style={styles.addIcon}>+</Text>
                        </TouchableOpacity>
                    </View>
                    <FlatList
                        contentContainerStyle={styles.paragraph}
                        data={this.state.cards}
                        renderItem={this.renderItem}
                        ItemSeparatorComponent={() => <View style={{ marginTop: 10 }} />}
                        keyExtractor={item => item.key.toString()}
                    />
                </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
    },
    paragraph: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#34495e',
        paddingBottom: 10,
    },
    addButton: {
        width: '100%',
        elevation: 3,
        backgroundColor: '#808080',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 15,
        flexDirection: 'row'
    },
    title: {
        color: 'white',
        padding: 10,
        fontSize: 20,
        textAlign: 'center',
    },
    addIcon: {
        color: 'white',
        padding: 10,
        fontSize: 25,
        textAlign: 'center',
        alignSelf: 'flex-end',
    },
});