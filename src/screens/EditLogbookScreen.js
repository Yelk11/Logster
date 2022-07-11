import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    Button,
    TextInput
} from 'react-native';
import realm, {
    getAllLogbooks,
    addLogbook,
    deleteAllLogbooks
} from "../db/Database.js";

const EditLogbook = ({ navigation, route }) => {
    const [title, onChangeTitle] = React.useState(null);
    const [station_callsign, onChangeStationCallsign] = React.useState(null);
    const [gridSquare, onChangeGridSquare] = React.useState(null);

    const onSubmit = () => {
        addLogbook(title, station_callsign);
        navigation.navigate('Edit Logbook');
    };
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Logbook Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeTitle}
                value={title}
                multiline={false}
                placeholder="MyLogbook"
            />

            <Text style={styles.title}>Logbook Owner Callsign</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeStationCallsign}
                value={station_callsign}
                maxLength={6}
                placeholder="eg. KE8MLJ"
            />

            <Text style={styles.title}>Gridsquare (Optional)</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeGridSquare}
                value={gridSquare}
                maxLength={6}
                placeholder="eg. EN82gj"
            />

            <Button title="Create Logbook"
                onPress={onSubmit} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 20
    },
    title: {
        margin: 20,
        marginBottom: 0
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});

export default EditLogbook;