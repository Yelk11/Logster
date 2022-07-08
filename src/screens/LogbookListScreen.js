import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    StatusBar,
    FlatList,
} from 'react-native';
import realm, {
    getAllLogbooks,
    addLogbook,
    deleteAllLogbooks
} from "../db/Database.js";

function LogbookListScreen() {
    const [data, setData] = useState(getAllLogbooks());

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingVertical: 8 }}
                    onPress={() => {
                        
                        addLogbook("Logbook Name", "KE8MLJ", )
                        setData(getAllLogbooks())
                    }}>Add book</Text>

                <Text style={{ paddingVertical: 8 }}
                    onPress={() => {
                        deleteAllLogbooks()
                        setData(getAllLogbooks())
                    }}>Delete all books</Text>

            </View>
            <FlatList
                data={getAllLogbooks()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>{item.title}</Text>
                            <Text>{item.station_callsign}</Text>
                            <Text>{item.gridsquare === null ? 'null' : item.gridsquare}</Text>
                        </View>
                    )
                }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default LogbookListScreen;