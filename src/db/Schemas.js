
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
        freq_rq: 'int'
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
export {
    LogbookSchema,
LogEntrySchema}