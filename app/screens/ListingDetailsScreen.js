import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

import AppText from '../components/AppText';
import colors from '../config/colors';
import ListItem from '../components/ListItem';

function ListingDetailsScreen(props) {
    return (
        <View>
            <Image style={styles.image} source={require('../assets/nature.jpg')}/>
            <View style={styles.detailsContainer}>
                <AppText style={styles.title}>This shirt is for sale !</AppText>
                <AppText style={styles.price}>$100</AppText>
                <View style={styles.userContainer}>
                    <ListItem 
                        image={require("../assets/profile.jpg")}
                        title="Burhan Uddin"
                        subTitle="5 Listings"
                    />
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    detailsContainer: {
        padding: 20,
    },
    image: {
        width: "100%",
        height: 300,

    },
    price: {
        color: colors.secondary,
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: "500",
    },
    userContainer: {
        marginVertical: 30,
    },
})

export default ListingDetailsScreen;