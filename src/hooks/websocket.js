import {ws_ADDRESS} from '../configs/index.js'

function useWebSocket() {
    const ws  = new WebSocket(ws_ADDRESS)

    const init = () => {
        bindEvent()
    }

    function bindEvent() {
        ws.addEventListener('open', handleOpen, false)
        ws.addEventListener('close', handleClose, false)
        ws.addEventListener('error', handleError, false)
        ws.addEventListener('message', handleMessage, false)
    }

    function handleOpen(e) {
        console.log("webSocket open", e)
    }

    function handleClose(e) {
        console.log("webSocket close", e)
    }

    function handleError(e) {
        console.log("webSocket error", e)
    }

    function handleMessage(e) {
        console.log("webSocket message", e)
    }

    init()

    return ws

}