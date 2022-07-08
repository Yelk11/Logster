
import Realm from "realm";


class LogbookSchema extends Realm.Object {}
class LogEntrySchema extends Realm.Object {}

LogEntrySchema.schema = {
    name: 'LogEntry',
    properties: {
        band: 'string',
        band_rx:  'string',
        call: 'string',
        rx_pwr: 'int',
        tw_pwr: 'int',
        mode: 'string',
        rst_rcvd: 'int',
        rst_sent: 'int',
        freq: 'int',
        freq_rx: 'int'
    }
};

LogbookSchema.schema = {
    name: 'Logbook',
    properties: {
        title: 'string',
        station_callsign:  'string',
        gridsquare: 'string?',
        program_id: 'string',
        program_version: 'int',
        logbook_entries: 'LogEntry[]',
    }
};

let realm = new Realm({schema: [LogEntrySchema, LogbookSchema], schemaVersion: 1});

let getAllLogbooks = () => {
    return realm.objects('Logbook');
}


let addLogbook = (_title, _station_callsign, _gridsquare = null) => {
    realm.write(() => {
        const logBook = realm.create('Logbook', {
            title: _title,
            station_callsign:  _station_callsign,
            gridsquare: _gridsquare,
            program_id: 'Logster',
            program_version: 1
        });
    });
}

let addEntry = (
    _title, 
    _band,
    _band_rx = null,
    _call, 
    _rx_pwr, 
    _tx_pwr, 
    _mode, 
    _rst_rcvd,
    _rst_sent,
    _freq,
    _freq_rx = null) => {
    realm.write(() => {
        const logBook = realm.create('Logbook', {
            title: _title,
            station_callsign:  _station_callsign,
            gridsquare: _gridsquare,
            program_id: 'Logster',
            program_version: 1
        });
    });
}

let deleteAllLogbooks = () => {
    realm.write(() => {
        realm.delete(getAllLogbooks());
    })
}


export {
    getAllLogbooks,
    addLogbook,
    deleteAllLogbooks
}
// Export the realm
export default realm;