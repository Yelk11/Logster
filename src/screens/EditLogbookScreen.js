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

function EditLogbook() {

    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingVertical: 8 }}
                    onPress={() => {
                        addLogbook("Logbook Name", "KE8MLJ", )
                    }}>Add book</Text>



            </View>
            
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default EditLogbook;