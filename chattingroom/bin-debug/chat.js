var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
var chat = (function (_super) {
    __extends(chat, _super);
    function chat() {
        return _super.call(this) || this;
    }
    chat.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    chat.prototype.childrenCreated = function () {
        this.init();
        _super.prototype.childrenCreated.call(this);
    };
    chat.prototype.init = function () {
        console.log('chat.ts is called');
        /**WebSocket连接 */
        this.ws = new WebSocket('ws://127.0.0.1:10080');
        console.log('connecting');
        this.ws.onopen = function (e) {
            console.log('Connection to server opened');
        };
        /**昵称 */
        var nickname;
        var self = this;
        this.ws.onmessage = function (e) {
            var data = JSON.parse(e.data);
            nickname = data.nickname;
            appendLog(data.type, data.nickname, data.message, data.clientcount);
            console.log("ID: [%s] = %s", data.id, data.message);
            //插入消息
            self.group_msg.addChild(self.newLabel(data.nickname, data.message));
        };
        function appendLog(type, nickname, message, clientcount) {
            console.log(clientcount);
            /**聊天信息 */
            var messages = this.list_msg;
            /**提示 */
            var preface_label;
            if (type === 'notification') {
                preface_label = "提示：";
            }
            else if (type === 'nick_update') {
                preface_label = "警告：";
            }
            else {
                preface_label = nickname;
            }
            self.preface_label = preface_label;
            var message_text = self.message_text = message;
            /**在线人数 */
            self.lb_online.text = clientcount;
        }
        /**点击OK发送 */
        this.btn_ok.addEventListener(egret.TouchEvent.TOUCH_TAP, this.sendMessage, this);
    };
    /**发送消息 */
    chat.prototype.sendMessage = function () {
        var message = this.input_msg.text;
        if (message.length < 1) {
            console.log("不能发送空内容！");
            return;
        }
        this.ws.send(message);
        /**清空输入框内容 */
        this.input_msg.text = "";
    };
    chat.prototype.newLabel = function (name, msg) {
        var label1 = new eui.Label();
        label1.text = name + " : " + msg;
        label1.textColor = 0x000000;
        return label1;
    };
    return chat;
}(eui.Component));
__reflect(chat.prototype, "chat", ["eui.UIComponent", "egret.DisplayObject"]);
//# sourceMappingURL=chat.js.map