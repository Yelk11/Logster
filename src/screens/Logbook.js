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
    getAllBooks,
    addBook,
    deleteAllBooks,
    updateAllBookEditions
} from "/Users/matt/Documents/GitHub/Logster/src/db/Database.js";

function Logbook() {
    const [data, setData] = useState(getAllBooks());
    for (let i = 0; i < 3; i++) {
        realm.write(() => {
            const book = realm.create('Book', {
                title: 'Barry Butter' + i,
                pages: 400
            });
        });
    }
    return (
        <SafeAreaView>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={{ paddingVertical: 8 }}
                    onPress={() => {
                        // Add a book with a random number of pages called "Chronicles of JavaScript"
                        addBook("Chronicles of JavaScript", Math.floor(Math.random() * 500))
                        setData(getAllBooks())
                    }}>Add book</Text>

                <Text style={{ paddingVertical: 8 }}
                    onPress={() => {
                        deleteAllBooks()
                        setData(getAllBooks())
                    }}>Delete all books</Text>

                <Text style={{ paddingVertical: 8 }}
                    onPress={() => {
                        updateAllBookEditions()
                        setData(getAllBooks())
                    }}>Update edition</Text>
            </View>
            <FlatList
                data={getAllBooks()}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text>{item.title}</Text>
                            <Text>{item.pages}</Text>
                            <Text>{item.edition === null ? 'null' : item.edition}</Text>
                        </View>
                    )
                }} />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({

});

export default Logbook;