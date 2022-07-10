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
    const [logbookName, onChangelogbookName] = React.useState(null);
    const [callsign, onChangeCallsign] = React.useState(null);
    const [gridSquare, onChangeGridSquare] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>Logbook Name</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangelogbookName}
                value={logbookName}
                multiline={false}
                placeholder="MyLogbook"
            />

            <Text style={styles.title}>Logbook Owner Callsign</Text>
            <TextInput
                style={styles.input}
                onChangeText={onChangeCallsign}
                value={callsign}
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

            <Button title="Create Logbook" />
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