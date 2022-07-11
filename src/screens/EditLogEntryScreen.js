import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native';
import realm, {
    getAllLogbooks,
    addLogbook,
    deleteAllLogbooks
} from "../db/Database.js";

const EditLogEntry = ({ navigation, route }) => {
    const [qso_date, onChangeQSODate] = React.useState(null);
    const [band, onChangeBand] = React.useState(null);// calculated
    const [owner_callsign, onChangeOwnerCallsign] = React.useState(null);// calculated
    const [call, onChangeCall] = React.useState(null); // contacted stations callsign
    const [rx_pwr, onChangeRX_pwr] = React.useState(null);
    const [tx_pwr, onChangeTX_pwr] = React.useState(null);
    const [mode, onChangeMode] = React.useState(null);
    const [rst_rcvd, onChangeRST_rcvd] = React.useState(null);
    const [rst_sent, onChangeRST_sent] = React.useState(null);
    const [freq, onChangeFreq] = React.useState(null);
    const [freq_rx, onChangeFreq_rx] = React.useState(null);
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.row}>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>QSO Date</Text>
                    <TextInput
                        style={styles.input_half}
                        onChangeText={onChangeQSODate}
                        value={qso_date}
                        maxLength={6}
                        placeholder="01/01/2022"
                    />
                </View>
                <View style={{ flex: 1 }}>
                    <Text style={styles.title}>QSO Time</Text>
                    <TextInput
                        style={styles.input_half}
                        onChangeText={onChangeQSODate}
                        value={qso_date}
                        maxLength={6}
                        placeholder="10:30"
                    />
                </View>
            </View>
            <Text style={styles.title}>Frequency</Text>
            <TextInput
                style={styles.input_half}
                onChangeText={onChangeQSODate}
                value={qso_date}
                maxLength={6}
                keyboardType='numeric'
                placeholder="7.200"
            />

            <Text style={styles.title}>Mode</Text>
            <View style={styles.row}>
                <TouchableOpacity style={mode==="CW" ? styles.selectedButton : styles.optionButton}
                    onPress={() => onChangeMode("CW")}>
                    <Text style={mode==="CW" ? styles.selectedText : styles.optionText} >CW</Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==="FT4" ? styles.selectedButton : styles.optionButton}
                    onPress={() => onChangeMode("FT4")}>
                    <Text style={mode==="FT4" ? styles.selectedText : styles.optionText} >FT4</Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==="FT8" ? styles.selectedButton : styles.optionButton}
                    onPress={() => onChangeMode("FT8")}>
                    <Text style={mode==="FT8" ? styles.selectedText : styles.optionText} >FT8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==="JS8" ? styles.selectedButton : styles.optionButton}
                    onPress={() => onChangeMode("JS8")}>
                    <Text style={mode==="JS8" ? styles.selectedText : styles.optionText} >JS8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==="SSB" ? styles.selectedButton : styles.optionButton}
                    onPress={() => onChangeMode("SSB")}>
                    <Text style={mode==="SSB" ? styles.selectedText : styles.optionText} >SSB</Text>
                </TouchableOpacity>
                <TouchableOpacity style={mode==="DATA" ? styles.selectedButton : styles.optionButton}
                    onPress={() => onChangeMode("DATA")}>
                    <Text style={mode==="DATA" ? styles.selectedText : styles.optionText} >DATA</Text>
                </TouchableOpacity>
            </View>

            <Text style={styles.title}>Callsign Tx</Text>
            <TextInput
                style={styles.input_half}
                onChangeText={onChangeOwnerCallsign}
                value={owner_callsign}
                maxLength={6}
                placeholder="KE8MLJ"
            />

            <Text style={styles.title}>Callsign Rx</Text>
            <TextInput
                style={styles.input_half}
                onChangeText={onChangeCall}
                value={call}
                maxLength={6}
                placeholder="KE8MLJ"
            />

            <Text style={styles.title}>Signal Report Tx</Text>
            <TextInput
                style={styles.input_half}
                onChangeText={onChangeRST_rcvd}
                value={rst_rcvd}
                maxLength={3}
                keyboardType='numeric'
                placeholder="KE8MLJ"
            />

            <Text style={styles.title}>Signal Report Rx</Text>
            <TextInput
                style={styles.input_half}
                onChangeText={onChangeRST_rcvd}
                value={rst_rcvd}
                maxLength={3}
                keyboardType='numeric'
                placeholder="KE8MLJ"
            />

            <TouchableOpacity style={styles.submitButton}
                onPress={() => 
                    addEntry = (
                        qso_date,
                        band,
                        call, 
                        mode, 
                        rst_rcvd,
                        rst_sent,
                        freq)
                }>
                <Text style={styles.submitText}>Submit</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    title: {
        ontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        margin: 5,
        marginBottom: 0
    },
    input_half: {
        height: 40,
        width: '50%',
        margin: 12,
        marginTop: 0,
        borderWidth: 1,
        padding: 10,
    },
    row: {
        flexDirection: 'row'
    },
    optionButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
    },
    selectedButton:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        backgroundColor:'black'
    },
    optionText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'black'
    },
    selectedText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    },
    submitButton: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        borderRadius: 4,
        elevation: 3,
        borderWidth: 1,
        backgroundColor:'black'
    },
    submitText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white'
    }
});

export default EditLogEntry;