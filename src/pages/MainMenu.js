import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function MainMenu() {
    return (
        <View style={styles.container}>
            <Text style={[styles.font, styles.title]}>
                CATAN
            </Text>
            <Text style={styles.font}>
                Nova partida com:
            </Text>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.font2}>4 Jogadores</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.font2}>6 Jogadores</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,            
            alignItems: 'center',
            backgroundColor: '#BF2C2C'
        },

        font: {
            color: "#F2B90C",
            fontSize: 30
        },

        font2: {
            color: "#BF2C2C",
            fontSize: 30,
            alignItems: 'center',
            justifyContent: 'space-between'

        },

        title: {
            fontSize: 100,
            fontWeight:"bold",
            marginTop: 15
        },

        button: {
            backgroundColor: '#F2DF80',
            padding: 20,
            width: 300,
            marginTop: 15,
            borderRadius: 10
        }
    }
)