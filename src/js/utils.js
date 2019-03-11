export function log() {
    console.log.call(this, ...arguments);
}