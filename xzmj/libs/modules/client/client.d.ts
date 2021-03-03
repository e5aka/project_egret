declare let nativeInterface: any;
declare let nativeBridge: any;
declare let inputProto: any;
declare module URLUtil {
    function createInputEle(multiline: boolean, id: string, onInput: Function): any;
    function getLocationParam(key: string): string;
    function getLocationParams(): {
        [key: string]: string;
    };
    function getLocationValue(data: any): {
        [key: string]: string;
    };
    function getWebParam(key: string): any;
    function amendSvrDomain(url1: string, url2: string): string;
    interface NativeURLOptions {
        showbar?: boolean;
        title?: string;
        orientation?: string;
        usesdk?: boolean;
        eventfunc?: string;
        webview?: string;
        usecache?: boolean;
        showloading?: boolean;
        showfloatbar?: boolean;
        enableobserver?: boolean;
        enablewkpost?: boolean;
        htmlstring?: string;
    }
    function openURL(url: string, options?: NativeURLOptions): void;
    function openWxLoginUrl(url: string): void;
    function openQQUrl(): void;
    function openWXUrl(): void;
    function outLayOpenUrl(url: string): void;
    function changeWebURL(url: string): void;
    function getUserAgent(): string;
    function loadScript(src: string, cb?: Function, failCnt?: number): void;
    function getGlobal(name: string): any;
    function setGlobal(name: string, val: any): any;
    function hideLoad(): void;
    function getClipboardText(cb: (data: any) => void): void;
    function copyText(value: string): void;
    function saveScreenshot(): void;
    function getWXCallUrl(): any;
    function saveImg(nm: string, base64Str: string): void;
    function isHttps(): boolean;
    function checkDeviceID(okCB: () => void, failCB?: () => void): void;
    function hasNativeHandler(funName: string): any;
    function nativeHandler(funName: string, params?: any, cb?: (retVal?: any) => void): void;
    const enum SHARE_PINGTAI {
        weixin = 0,
    }
    function shareRoomGame(gameId: number, room: number, tp?: SHARE_PINGTAI): void;
    function parseRoomId(val: string): {
        gameId: number;
        roomId: number;
    };
    function moloadErr(): void;
    function gameLoadErr(gameId: number, errData: {
        fin: game.GMD_UPDATE_FIN_CODE;
        args1?: string;
    }): void;
    function openWx(params: any): void;
    function initDom(dom: HTMLElement): void;
    function setDomMx(dom: HTMLElement, mx: egret.Matrix): void;
    function showDom(dom: HTMLElement): void;
    function hideDom(dom: HTMLElement): void;
}
declare module game {
    interface IListen {
        once: boolean;
        tar: any;
        fun: (param1?: any, param2?: any) => void;
    }
    const enum Noti_G_EVT {
        JS_ERR = "jserr",
    }
    class Notification {
        private static _frees;
        static getListen(): IListen;
        static freeListen(data: IListen): void;
        private _listens;
        hasListener(evt: string, tar?: any): boolean;
        addListener(evt: string, fun: (param1?: any, param2?: any) => void, tar: any, once?: boolean): void;
        rmvListener(evt: string, target: any): void;
        rmvAllListener(target?: any): void;
        delayPostEvent(key: string, delay: number, param1?: any, param2?: any): void;
        postEvent(key: string, param1?: any, param2?: any): void;
    }
    let notifiCenter: Notification;
}
declare module game {
    /**
     * 界面窗口基类，此类界面必须使用open接口来打开。
     *
     * */
    class UIFWBase extends cui.Component {
        gpName: string;
        protected _aniWrap: TRain.AniWrapper;
        private _openData;
        dispose(): void;
        protected onDispose(): void;
        private stopOpen();
        open(parent: egret.DisplayObjectContainer, data?: any, fin?: (ui: UIFWBase) => void, tar?: any): void;
        close(): void;
        isOpened(): boolean;
        private _open();
        /**
         *
         * @param data 界面重新显示时， data为空
         */
        protected openImpl(data?: any): void;
        protected closeImpl(): void;
        protected _clsAni: TRain.AniBase;
        protected getCloseAni(): TRain.AniBase;
        protected _openAni: TRain.AniBase;
        protected getOpenAni(): TRain.AniBase;
        protected startAni(ani: TRain.AniBase, fin?: Function, tar?: any): void;
        /**
         * 添加到舞台后且构建完成后调用
         * */
        protected onShow(stage: egret.Stage): void;
        /**
         * 移除舞台后触发
         * */
        protected onHide(): void;
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        $onRemoveFromStage(): void;
        protected getNeedRes(): RES.ResItem[];
        protected onLoadFin(event: RES.ResourceEvent): void;
    }
}
declare module game {
    /**
     * 界面窗口基类，此类界面必须使用open接口来打开。
     *
     * */
    class UIFullFW extends UIFWBase {
        /**
         * @
         * 舞台尺寸改变
         */
        protected onResize(w: number, h: number): void;
        private doResize(w, h);
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        $onRemoveFromStage(): void;
    }
}
declare module game {
    const enum PopupPriority {
        back = -10,
        normal = 0,
        layer1 = 100,
        top = 10000,
    }
    interface PopupDelegate {
        onPopupClose(popup: UIPopup): void;
        onPopupOpen(popup: UIPopup): void;
    }
    /**
     * 界面弹出窗口基类
     *
     * */
    class UIPopup extends UIFWBase {
        pri: number;
        delegate: PopupDelegate;
        useOnce: boolean;
        hideHome: boolean;
        hideChar: boolean;
        hideBg: boolean;
        bgClose: boolean;
        constructor();
        protected openImpl(data: any): void;
        protected getCloseAni(): any;
        protected closeImpl(): void;
    }
    class PopupLayer extends cui.Group {
        private _deque;
        private _canPop;
        private _bgImg;
        private _curPri;
        private _delayTag;
        private _waitUI;
        delegate: LayerDelegate;
        constructor();
        startPop(): void;
        stopPop(): void;
        openPopup(ui: UIPopup, openData?: any): void;
        private _openPopup(popup, openData?);
        /**
         * 删除所有的弹出界面，包括队列内的
         * */
        closeAll(): void;
        private hasPopup();
        $childRemoved(child: egret.DisplayObject, index: number): void;
        protected update(): void;
        private reset();
    }
}
declare module langConsts {
    const enum errCode {
        e_rmt_unknow = 0,
        e_rmt_success = 1,
        e_rmt_fail = 2,
        e_rmt_change_gate = 3,
        e_rmt_connect_full = 4,
        e_rmt_player_max = 5,
        e_rmt_has_dial_lottery = 6,
        e_rmt_error_nickname = 7,
        e_rmt_same_nickname = 8,
        e_rmt_length_beyond_range = 9,
        e_rmt_gold_not_enough = 10,
        e_rmt_ticket_not_enough = 11,
        e_rmt_room_full = 12,
        e_rmt_vip_under = 13,
        e_rmt_level_under = 14,
        e_rmt_friend_full = 15,
        e_rmt_exists_friend = 16,
        e_rmt_player_not_exists = 17,
        e_rmt_runout_count = 18,
        e_rmt_time_not_arrive = 19,
        e_rmt_no_can_bet = 20,
        e_rmt_bet_index_error = 21,
        e_rmt_outof_bet_limit = 22,
        e_rmt_no_find_table = 23,
        e_rmt_pwd_not_same = 24,
        e_rmt_format_invalid = 25,
        e_rmt_need_set_pwd = 26,
        e_rmt_pwd_error = 27,
        e_rmt_not_find_item = 28,
        e_rmt_friend_offline = 29,
        e_rmt_not_in_game = 30,
        e_rmt_cant_buyitem = 31,
        e_rmt_cannot_add_self = 32,
        e_rmt_chat_too_often = 33,
        e_rmt_exp_not_enough = 34,
        e_rmt_level_max = 35,
        e_rmt_cannot_collect = 36,
        e_rmt_has_bind_phone = 37,
        e_rmt_code_error = 38,
        e_rmt_beyond_limit = 39,
        e_rmt_not_bind_phone = 40,
        e_rmt_cannot_sendto_self = 41,
        e_rmt_room_notopen = 42,
        e_rmt_bet_full = 43,
        e_rmt_game_begun = 44,
        e_rmt_banker_not_bet = 45,
        e_rmt_banker_is_full = 46,
        e_rmt_can_not_leave = 47,
        e_rmt_has_receive_reward = 48,
        e_rmt_not_recharge = 49,
        e_rmt_custom_head_freezing = 50,
        e_rmt_now_banker_first = 51,
        e_rmt_has_in_banker_list = 52,
        e_rmt_now_is_banker = 53,
        e_rmt_is_not_banker = 54,
        e_rmt_haven_apply_leave = 55,
        e_rmt_banker_not_enough = 56,
        e_rmt_banker_betgold_is_full = 57,
        e_rmt_other_betgold_is_full = 58,
        e_rmt_error_game_state = 59,
        e_rmt_box_not_exist = 60,
        e_rmt_box_has_opened = 61,
        e_rmt_thank_you_not_enough = 62,
        e_rmt_now_is_you = 63,
        e_rmt_banker_protect = 64,
        e_rmt_snatch_is_you = 65,
        e_rmt_snatch_is_low = 66,
        e_rmt_last_speaker_not_finish = 67,
        e_rmt_speaker_beyond_max_count = 68,
        e_rmt_roping_over = 69,
        e_rmt_activity_outofdate = 70,
        e_rmt_activity_not_satisfy_cond = 71,
        e_rmt_time_over = 72,
        e_rmt_not_follow = 73,
        e_rmt_not_follow_roping = 74,
        e_rmt_chip_not_enough = 75,
        e_rmt_month_card_out_date = 76,
        e_rmt_not_follow_prize_claw = 77,
        e_rmt_no_empty_seat = 78,
        e_rmt_player_prohibit = 79,
        e_rmt_can_not_change_table_setting = 80,
        e_rmt_player_have_no_enough_gold = 81,
        e_rmt_player_absent_room = 82,
        e_rmt_player_absent_desk = 83,
        e_rmt_can_not_leave_bet = 84,
        e_rmt_can_not_bet_hasbet = 85,
        e_rmt_cdk_used = 86,
        e_rmt_cdk_none = 87,
        e_rmt_cdk_notenough = 88,
        e_rmt_cdk_past = 89,
        e_rmt_binded_ac = 90,
        e_rmt_not_bind_ac = 91,
        e_rmt_betgold_not_enough = 92,
        e_rmt_shutdown = 93,
        e_rmt_has_inviter = 94,
        e_rmt_not_has_inviter = 95,
        e_rmt_binded_bank_card = 96,
        e_rmt_not_bind_bank_card = 97,
        e_rmt_inviter_error = 98,
        e_rmt_suggest_limit = 99,
        e_rmt_gold_limit = 10000,
        e_rmt_gold_accountnum_or_pwd_error = 10001,
        e_rmt_not_empty = 10002,
        e_rmt_input_correct_num = 10003,
        e_rmt_input_correct_code = 10004,
        e_rmt_agree_consent = 10005,
        e_rmt_register_faild = 10006,
        e_rmt_binding_success = 10007,
        e_rmt_binding_falid = 10008,
        e_rmt_pwd_not_less_6 = 10009,
        e_rmt_login_AccIsExists = 10010,
        e_rmt_login_AccIsNotExists = 10011,
        svrConnectErr = 10012,
        device_invalid_error = 10013,
        ip_block = 10014,
        reset_pwd_succ = 10015,
        reset_pwd_fail = 10016,
        e_rmt_bank_unopened = 100,
        e_rmt_inviter_error_same_device = 101,
        e_rmt_bet_count_full = 102,
        e_rmt_bet_players_full = 103,
        e_rmt_serverid_error = 104,
        e_rmt_has_draw = 105,
        e_rmt_too_offen = 106,
        e_rmt_alipay_exists = 107,
        e_rmt_agent_create_team_member_limit = 108,
        e_rmt_agent_join_team_member_limit = 109,
        e_rmt_room_card_invalid = 110,
        e_rmt_room_card_full = 111,
        e_rmt_ac_chest_ts = 112,
        e_rmt_pay_product_erro = 113,
        e_rmt_third_pay_regtime_err = 114,
        e_rmt_third_pay_viplvl_err = 115,
        e_rmt_activity_performance_check = 116,
        e_rmt_activity_timeout = 117,
        e_rmt_activity_apply = 118,
        e_rmt_activity_award = 119,
        client_actAwd_success = 10017,
        client_actJoin_success = 10018,
        client_phone_isExists = 10019,
        e_rmt_player_kick = 120,
        e_rmt_login_accOrPwdErr = 10020,
        e_rmt_login_accIsInvalid = 10021,
        e_rmt_login_svrLoadErr = 10022,
        e_rmt_login_hardwareEmp = 10023,
        e_rmt_login_sysErr = 10024,
        e_rmt_server_down = 124,
        e_rmt_already_in_game = 125,
        e_rmt_pay_bank_not_player = 126,
        e_rmt_pay_bank_not_bank_id = 127,
        e_rmt_pay_bank_gold_vaild = 128,
        e_rmt_pay_bank_too_busy = 129,
        e_rmt_guild_not_found = 130,
        e_rmt_guild_has_join = 131,
        e_rmt_guild_join_cooling = 132,
        e_rmt_guild_has_ask = 133,
        e_rmt_seat_has_player = 134,
        e_rmt_guild_not_member = 135,
        e_rmt_guild_not_same = 136,
        e_rmt_guild_roomcard_not_enough = 137,
        e_rmt_guild_points_not_enough = 138,
        e_rmt_roomcard_game_err = 139,
        e_rmt_roomcard_social_down = 140,
        e_rmt_roomcard_no_guild = 141,
        e_rmt_roomcard_wait_guild = 142,
        e_rmt_roomcard_gaming = 143,
        e_rmt_roomcard_need_continue = 144,
        e_rmt_roomcard_kicked_player = 145,
        e_rmt_roomcard_not_enough = 146,
        e_rmt_roomcard_game_too_much = 147,
        e_rmt_guild_gaming_points = 148,
        e_rmt_guild_gaming_kick = 149,
        e_rmt_guild_ask_invalid = 150,
        e_rmt_guild_gaming_sub_points = 151,
        e_rmt_balance_not_enough = 152,
        client_Login_ChannelIdError = 10025,
        client_Login_PackageIdIsNull = 10026,
        client_Login_LoginDisable = 10027,
        client_Login_OpenIdError = 10028,
        client_Login_OpenSignError = 10029,
        client_Login_accountError = 153,
        client_Login_accountOrPwdError = 154,
    }
    const enum mainLang {
        Version_Check = 0,
        Version_NetError = 1,
        Version_IsNew = 2,
        Version_DownloadFile = 3,
        Version_DownloadComplete = 4,
        Version_NeedUpdate = 5,
        Version_DownloadList = 6,
        Version_UpdateFail = 7,
        Version_Updating = 8,
        Version_NeedRedownload = 9,
        Version_Downloading = 10,
        Login_AccIsEmpty = 11,
        Login_AccIsShort = 12,
        Login_AccIsInvalid = 13,
        Login_PwdIsEmpty = 14,
        Login_PwdIsShort = 15,
        Login_AccIsExists = 16,
        Login_AccIsNotExists = 17,
        Login_AccOrPwdError = 18,
        Login_UnknownError = 19,
        Login_NetError = 20,
        Login_IsLogining = 21,
        Login_IsRegistering = 22,
        Login_RegisterSuccess = 23,
        Login_SystemError = 24,
        Login_NetErrorTitle = 25,
        Login_LoginSuccess = 26,
        Login_NeedRelogin = 27,
        Login_DownloadServerList = 28,
        Login_DownloadError = 29,
        Login_PhoneError = 30,
        Login_CodeError = 31,
        Login_AskCode = 32,
        Login_AskCodeSuccess = 33,
        Login_Reset = 34,
        Login_ResetSuccess = 35,
        Login_Init = 36,
        Login_GetAccount = 37,
        Login_NotInfo = 38,
        Login_Binging = 39,
        Login_AccountIsFormal = 40,
        Login_AccountIsNotFormal = 41,
        Login_DeviceIDError = 42,
        Login_PhoneCode = 43,
        Logic_InvalidDeviceID = 44,
        Login_Notice = 45,
        Net_ConnectServer = 46,
        Net_ConnectFail = 47,
        Net_ConnectSuccess = 48,
        Net_SelectGate = 49,
        Net_VerifyLogin = 50,
        Net_AskLogin = 51,
        Net_VerifyLoginFail = 52,
        Net_ReConnect = 53,
        Net_Confirm = 54,
        Net_Retry = 55,
        Net_ShutDown = 56,
        Download_Downloading = 57,
        Download_Wait = 58,
        Download_Complete = 59,
        Download_Fail = 60,
        Recharge_Success = 61,
        SendGiftTitle = 62,
        SendGiftContent = 63,
        GameNotOpen = 64,
        GoldNotEnough = 65,
        BetFull = 66,
        GetOnlineAward = 67,
        OnlineAwardIsOver = 68,
        TicketNotEnough = 69,
        StartBet = 70,
        StopBet = 71,
        WaitNewGame = 72,
        Big = 73,
        Small = 74,
        Leopard = 75,
        Point = 76,
        RoomNotOpen = 77,
        Text_Give = 155,
        MaintenanceNotify = 156,
        Mail_Title = 157,
        Mail_From = 158,
        Mail_Text = 159,
        Mail_Title_1 = 160,
        Mail_Text_1 = 161,
        Mail_Title_2 = 162,
        Mail_Text_2 = 163,
        BuyGold = 164,
        BuyTicket = 165,
        System = 166,
        Loading_Loading = 167,
        Setting_Success = 168,
        pwd_not_same = 169,
        pwd_error = 170,
        olpwd = 171,
        newpwd = 172,
        pwd_6_to_8 = 173,
        pwd1 = 174,
        pwd = 175,
        confirm_pwd = 176,
        cash = 177,
        deposit = 178,
        Enter_Money = 179,
        Enter_pwd = 180,
        Re_enter1 = 181,
        Re_enter2 = 182,
        Save_money = 183,
        Withdrawals = 184,
        Repeat_add_friend = 185,
        Send_add_friend = 186,
        NewAccountName = 187,
        not_add_self = 188,
        RoomGoldCondition = 189,
        RoomVipCondition = 190,
        BuySuccess = 191,
        OperationSuccess = 192,
        SendGift = 193,
        BetAreaFull = 194,
        OldInfo = 195,
        ChatTooOfen = 196,
        YouNowText = 197,
        LevelText = 198,
        YouNextText = 199,
        YouNeedText = 200,
        RMBText = 201,
        BroadcastHelpText = 202,
        VipInfo_1 = 203,
        VipInfo_2 = 204,
        VipInfo_3 = 205,
        VipInfo_4 = 206,
        VipInfo_5 = 207,
        VipInfo_6 = 208,
        AlmsIntroduce = 209,
        AlmsGetOver = 210,
        AlmsGetInfo = 211,
        not_search_self = 212,
        AlmsGetFail = 213,
        Choose_gift = 214,
        GoldToCharge = 215,
        TicketToCharge = 216,
        VipToCharge = 217,
        giftSuccess = 218,
        error_id = 219,
        addFirendSuc = 220,
        RoomGoldTip = 221,
        RoomVipTip = 222,
        BetMaxText = 223,
        FishLevelLimit = 224,
        SelfRank = 225,
        ServerText_1 = 226,
        ServerText_2 = 227,
        ServerText_3 = 228,
        ServerInfo_1 = 229,
        ServerInfo_2 = 230,
        ServerInfo_3 = 231,
        ServerTip = 232,
        RepeatLogin1 = 233,
        RepeatLogin2 = 234,
        RepeatLogin3 = 235,
        RepeatLogin4 = 236,
        NoNoticeText = 237,
        PlayerNameOverLong = 238,
        PhoneNumTip = 239,
        VerifyTip = 240,
        PhoneRepeat = 241,
        PhoneNumError = 242,
        PhoneTooOfen = 243,
        BindSuccess = 244,
        VerifyBefore = 245,
        VerifyNull = 246,
        VerifyError = 247,
        SendGoldTip = 248,
        SendGift1 = 249,
        SendGift2 = 250,
        SendGift3 = 251,
        SendGift4 = 252,
        SendGift5 = 253,
        selfSignature = 254,
        isFloor = 255,
        GoldError = 256,
        playername = 257,
        BeginBet = 258,
        DiceHelpText = 259,
        MaxGiftslimit = 260,
        GameBroadcast = 261,
        WHNBroadcast = 262,
        FishHitGoldMsg = 263,
        FishHitGiftMsg = 264,
        MoneyType1 = 265,
        MoneyType2 = 266,
        VipNotice = 267,
        BroadcastCdTip = 268,
        BroadcastTooOfen = 269,
        MailTitle = 270,
        MailSendName = 271,
        SendSuc = 272,
        MailReceiveName = 273,
        InputTitle = 274,
        InputDesc = 275,
        MailDeleteTip = 276,
        ReplyTip = 277,
        Get = 278,
        getCode = 279,
        InputPwd1 = 280,
        InputPwd2 = 281,
        changPwdText = 282,
        HeadFrameHaveText = 283,
        HeadFrameEquipText = 284,
        GiftText1 = 285,
        GiftText2 = 286,
        GiftText3 = 287,
        GiftText4 = 288,
        GetMailGift = 289,
        updateCusHead2 = 290,
        updateCusHeadFree = 291,
        updateCusHead1 = 292,
        ExChangeTip = 293,
        ExChangeGoldTip = 294,
        ExChangeTicketTip = 295,
        ExChangePhoneTip = 296,
        TimeFormat = 297,
        ChangeNameTip = 298,
        NameNotNull = 299,
        ChangeNamePayTip = 300,
        ChangeNameFirst = 301,
        ChargeErrorTip = 302,
        DataText = 303,
        ExChangeItemName = 304,
        ExChangeState = 305,
        ExChangeWait = 306,
        ExChangeSend = 307,
        ExChangeNoRecord = 308,
        betName = 309,
        betDesc = 310,
        betOdds = 311,
        betExample = 312,
        UpdateGame_Download = 313,
        UpdateGame_DownloadInfo = 314,
        UpdateGame_Update = 315,
        UpdateGame_UpdateInfo = 316,
        UpdateGame_Unzip = 317,
        input_error = 318,
        HitType1 = 319,
        HitType2 = 320,
        HitType3 = 321,
        HitType4 = 322,
        HitType5 = 323,
        SetPanelText_1 = 324,
        SetPanelText_2 = 325,
        SetPanelText_3 = 326,
        SetPanelText_4 = 327,
        SetPanelText_5 = 328,
        LoginOut = 329,
        LoginOutConfirm = 330,
        Retry = 331,
        GoldUpLimit = 332,
        SendGoldLimit = 333,
        AccountText = 334,
        PasswordText1 = 335,
        PasswordText2 = 336,
        notOpen = 337,
        GiftNotReceive = 338,
        GetMonthCardTip = 339,
        MonthCardRemainTime = 340,
        MonthCardBuyTip = 341,
        GoldUpLimitTip = 342,
        online = 343,
        not_online = 344,
        input_f_id = 345,
        gift_num = 346,
        ExChangeVipTip = 347,
        ExChangeTip1 = 348,
        ExChangeTip2 = 349,
        ModifyPwd = 350,
        PlayerInfoText1 = 351,
        PlayerInfoText2 = 352,
        PlayerInfoText3 = 353,
        PlayerInfoText4 = 354,
        PlayerInfoText5 = 355,
        NoMonthCard = 356,
        UsePhotoTip = 357,
        UseCameraTip = 358,
        OnLineCountText = 359,
        ExperienceVipDayText = 360,
        ExperienceVipHourText = 361,
        PlayerNum = 362,
        plyaer_win = 363,
        VipInfo_7 = 364,
        DiceHelpLab1 = 365,
        DiceHelpLab2 = 366,
        DiceHelpLab3 = 367,
        DiceHelpLab4 = 368,
        goldout = 369,
        LotteryTip1 = 370,
        LotteryTip2 = 371,
        LotteryTip3 = 372,
        LotteryTip4 = 373,
        LotteryWin = 374,
        LotteryThanks = 375,
        LotteryThanksNotEnough = 376,
        LotteryUseTicket = 377,
        LotteryWinTip = 378,
        LotteryFailTip = 379,
        err_not_phone = 380,
        err_not_bind = 381,
        err_timecd = 382,
        err_maxcount = 383,
        err_sendfailed = 384,
        err_sign_error = 385,
        err_data_error = 386,
        err_acc_error = 387,
        err_pwd_error = 388,
        err_system_error = 389,
        err_code_error = 390,
        err_weixin_error = 391,
        ExitGameTip = 392,
        Msg_AppStoreWait = 393,
        TimeText = 394,
        ContinueSendText2 = 395,
        ContinueSendText3 = 396,
        SendContentNotNull = 397,
        ContinueSendTip1 = 398,
        ContinueSendMaxCount = 399,
        ContinueSendRemainCount = 400,
        Login_AccountInfo = 401,
        Login_PasswordInfo = 402,
        Register_AccountInfo = 403,
        Register_PasswordInfo = 404,
        Register_PhoneNum = 405,
        Register_GetCode = 406,
        SafeBoxTip = 407,
        BcPlayerEnter = 408,
        touchGo = 409,
        Goldnotenough = 410,
        chongfanbiaoti2016 = 411,
        chongfanneirong1002016 = 412,
        chongfanneirong3002016 = 413,
        denglubiaoti20160207 = 414,
        denglubiaoti20160208 = 415,
        denglubiaoti20160209 = 416,
        denglubiaoti20160210 = 417,
        denglubiaoti20160211 = 418,
        denglubiaoti20160212 = 419,
        denglubiaoti20160213 = 420,
        dengluneirong20160207 = 421,
        dengluneirong20160208 = 422,
        dengluneirong20160209 = 423,
        dengluneirong20160210 = 424,
        dengluneirong20160211 = 425,
        dengluneirong20160212 = 426,
        dengluneirong20160213 = 427,
        BuySend = 428,
        ApplyToCharge = 429,
        RechargeTip = 430,
        nowRecharge = 431,
        BuyItemNeedVIP = 432,
        GetFirstFrameTip = 433,
        ActivityGetTip = 434,
        OnlineRemainTime = 435,
        OnlineOverTimer = 436,
        OnlineNotBegin = 437,
        DragonsTip1 = 438,
        DragonsTip2 = 439,
        DragonsTip3 = 440,
        DragonsTip4 = 441,
        DragonsTip5 = 442,
        DragonsTip6 = 443,
        NoticeSendTime = 444,
        NotHave = 445,
        DragonsTip7 = 446,
        EnterRoomGold = 447,
        EnterRoomVIP = 448,
        PokerGameIdx1 = 449,
        PokerGameIdx2 = 450,
        PokerGameIdx3 = 451,
        MonthCardSend1 = 452,
        MonthCardSend2 = 453,
        MonthCardSend3 = 454,
        ChipNotEnough = 455,
        ChipNotEnough2 = 456,
        FreeGoldInfo = 457,
        RewardLotteryInfo = 458,
        ReportTip = 459,
        FreeLotteryNotStar1 = 460,
        FreeLotteryStar1 = 461,
        FreeLotteryNotStar4 = 462,
        FreeLotteryStar4 = 463,
        FreeLotteryNotStar2 = 464,
        FreeLotteryStar2 = 465,
        FreeLotteryNotStar3 = 466,
        FreeLotteryStar3 = 467,
        FreeLotteryNotStar5 = 468,
        FreeLotteryStar5 = 469,
        FreeLotteryNotStar6 = 470,
        FreeLotteryStar7 = 471,
        FreeLotteryNotStar9 = 472,
        FreeLotteryStar9 = 473,
        FreeLotteryClick = 474,
        FreeLotteryNotStar = 475,
        FreeLotteryStar = 476,
        CowsBroadcast = 477,
        RechargeLotteryNotice = 478,
        StarLotteryNotice = 479,
        rechargeNotify = 480,
        RechargeNotify01 = 481,
        RechargeNotify02 = 482,
        RechargeNotify03 = 483,
        RechargeNotify04 = 484,
        RobotNotice01 = 485,
        RobotNotice02 = 486,
        RobotNotice03 = 487,
        RobotNotice04 = 488,
        RobotNotice05 = 489,
        RobotNotice06 = 490,
        RobotNotice07 = 491,
        ExchangeTelCharge = 492,
        AutoRegister = 493,
        TenThousand = 494,
        SendGiftLimitTip = 495,
        ConfirmPayment = 496,
        PriceRMBText = 497,
        PriceGemText = 498,
        FirstGiveGold = 499,
        GiveGold = 500,
        HaveBoughtItem = 501,
        WithdrawNotify = 502,
        WithdrawHistory = 503,
        RechargeHistory = 504,
        MaintenanceNotice = 505,
        UISafeBoxNew_receiverIDStr = 506,
        UISafeBoxNew_transferNumStr = 507,
        UISafeBoxNew_oldPassWordStr = 508,
        UISafeBoxNew_newPassWordStr = 509,
        UISafeBoxNew_againPassWordStr = 510,
        UISafeBoxNewReminder_passWordStr = 511,
        RoomEnterLimit = 512,
        transferDtailsStringFormat = 513,
        TransferAffirmDesc = 514,
        GoldIsNotEnough = 515,
        TicketIsNotEnough = 516,
        FindNotGame = 517,
        CowsGoldNotEnough = 518,
        RelieveSuccess = 519,
        FishLevelEnough = 520,
        FishGoldEnough = 521,
        Player_AutoEnter = 522,
        FishLevelInfo = 523,
        Debug_HighCount = 524,
        Debug_HighLimit = 525,
        Debug_SpecialLimit = 526,
        Debug_SpecialCount = 527,
        Debug_TotalProfit = 528,
        Debug_TotalStock = 529,
        Debug_Lucky = 530,
        Debug_TempIncome = 531,
        Debug_TotalIncome = 532,
        Debug_oddsType = 533,
        Recharge_First = 534,
        Recharge_Five = 535,
        Recharge_Continue = 536,
        Recharge_First_Content = 537,
        BetHas = 538,
        CopySuccess = 539,
        CowsGoldToCharge = 540,
        BindInfo = 541,
        AccountIsFormal = 542,
        Room_NeedGold = 543,
        NeedNewHead = 544,
        UpdateHeadSuccess = 545,
        ACIsBinded = 546,
        ACIsNotBind = 547,
        ACIsNotBindOrVerify = 548,
        ACAccountIsNull = 549,
        ACRealNameIsNull = 550,
        ACBindSuccess = 551,
        ACBindVerify = 552,
        ACTransferSuccess = 553,
        ACBindError = 554,
        ACInfoError = 555,
        FishGoldFormat = 556,
        Bank_NewRule = 557,
        Bank_Password = 558,
        Bank_PasswordRule = 559,
        Register_RefereeID = 560,
        BankPassword_and_LoginPassword = 561,
        Please_RechargeAmount = 562,
        Please_CashWithdrawal = 563,
        Please_AC = 564,
        Please_RealName = 565,
        WithdrawGoldTip = 566,
        MinChargeGoldTip = 567,
        MaxChargeGoldTip = 568,
        MinWithdrawGoldTip = 569,
        MaxWithdrawGoldTip = 570,
        ChargeURLErrorTip = 571,
        BindRewardTip = 572,
        Please_Draw = 573,
        Please_Deposit = 574,
        NotHaveAccountID = 575,
        TransSuccess = 576,
        AccountIDError = 577,
        TransNumError = 578,
        TransContent = 579,
        PaySuccessTip = 580,
        PayWayAipai = 581,
        TransAtten = 582,
        Tip_LeaveBankerList = 583,
        WithdrawInfo = 584,
        WithdrawInfoFail = 585,
        WithdrawInfoSuccess = 586,
        PayType1 = 587,
        PayType2 = 588,
        PayType = 589,
        WXNotOpen = 590,
        CanNotBetTip = 591,
        GameIp = 592,
        GameErweima = 593,
        SuccessNewHead = 594,
        SuccessChangeName = 595,
        AllBetTip = 596,
        SelfBetTip = 597,
        RegisterPhone = 598,
        ServiceInfo = 599,
        ProxyInfo = 600,
        PayTipsInfo1 = 601,
        PayTipsInfo2 = 602,
        PayTipsInfo3 = 603,
        PayTipsInfo4 = 604,
        Msg_ExitGame = 605,
        ChargePayedTip = 606,
        ShareText = 607,
        ShareCopySuccess = 608,
        NetErrorHost = 609,
        NetErrorPath = 610,
        CardBetError = 611,
        VersionPrompt = 612,
        CodeCountEnough = 613,
        PayFail = 614,
        MaxPayMoney = 615,
        BindInviterSuccess = 616,
        BindInviterError = 617,
        ShareLose = 618,
        BankIsBinded = 619,
        BindBankSuccess = 620,
        BindWeChatSuccess = 621,
        WeChatBinded = 622,
        BankIsError = 623,
        ContentIsNull = 624,
        ContentAlipayID = 625,
        ContentBankID = 626,
        RealName = 627,
        WeChatAccount = 628,
        WeChatName = 629,
        BankIsNotBind = 630,
        ServiceQQTip = 631,
        OpponentLeaveTable = 632,
        ShareLandingPageTitle = 633,
        ShareLandingPageContent = 634,
        ShareImageBg = 635,
        CaptureScreenTipIOS = 636,
        CaptureScreenTip = 637,
        CaptureScreenError = 638,
        AdviseTip = 639,
        PayIsClosed = 640,
        RoomTips = 641,
        BankerMinLimitTip = 642,
        InputHaveCardName = 643,
        InputBankAcc = 644,
        InputBodyCode = 645,
        InputBranch = 646,
        InputBankPhoneNum = 647,
        InputBankAccAgain = 648,
        BankAccIsNull = 649,
        BankReAccIsNull = 650,
        BankTypeIsNull = 651,
        BodyCodIsNull = 652,
        BodyNameIsNull = 653,
        InputBankDiffrent = 654,
        InputBodyCodeError = 655,
        InputBankAccError = 656,
        BankIsNotUsed = 657,
        accountAlreadyBindedInAppid = 658,
        WithdrawIsClosed = 659,
        TaskRemainedTimes = 660,
        TaskAwardGold = 661,
        TaskNameTip = 662,
        ShareGameIp = 779,
        ShareFailed = 670,
        AlipayBindError = 671,
        SevenDayTaskDone = 672,
        GameTaskDone = 673,
        GetDayRankReward = 674,
        GetWeekRankReward = 675,
        IncomeHistory = 676,
        ReceiveIncomeHistory = 677,
        UnlockHead = 678,
        CopyUrlSuccess = 679,
        RedPacketJoinInfo = 680,
        RedPacketJoinInfo1 = 681,
        tenThousandRmb = 682,
        hundredMillionRmb = 683,
        tenThousand = 684,
        hundredMillion = 685,
        shareOpenLock = 686,
        loadingLab = 687,
        AlmsRestCount = 688,
        AlmsGetCondition = 689,
        deleteMailSuccess = 690,
        dontDeleteMail = 691,
        Enter_AccountNum = 692,
        EnterChar6To20 = 693,
        PhoneNum = 694,
        VerCode = 695,
        InputPwd = 696,
        ConfirmPwd = 697,
        AgreeConsent = 698,
        SevenDayRest = 699,
        CustomerFeedback = 700,
        TwoNameSame = 701,
        gameError = 702,
        mainMan = 703,
        mainWoman = 704,
        mainRewardTip = 705,
        InResult = 706,
        InBet = 707,
        LimitRed = 708,
        zhuang = 709,
        xian = 710,
        he = 711,
        Tiger = 712,
        Dragon = 713,
        Big1 = 714,
        Small1 = 715,
        Birds = 716,
        Animal = 717,
        shark = 718,
        Leopard1 = 719,
        totalNum = 720,
        backGain = 721,
        yeji = 722,
        inPlayerId = 723,
        preId = 724,
        teamnum = 725,
        todaygold = 726,
        weekgold = 727,
        createTime = 728,
        noresult = 729,
        noplayer = 730,
        teamname = 731,
        copynet = 732,
        cannotnoTeam = 733,
        setteamname = 734,
        teamsName = 735,
        setPaixian = 736,
        teamsNum = 737,
        notAllNumber = 738,
        wrongNumber = 739,
        teamSuccess = 740,
        sameName = 741,
        noTeam = 742,
        notices = 743,
        teamChange = 744,
        resetMa = 745,
        resetMaName = 746,
        isOverBetLimit = 747,
        otherOverBetLimit = 748,
        WaitNextGame = 749,
        WaitNextGame1 = 750,
        inputNum = 751,
        WaitBetTime = 756,
        resultTmNoRobBank = 757,
        loginInfoOver = 758,
        gameNum = 759,
        robNeedGold = 760,
        RepeatBetNotBet = 761,
        RepeatBetMaxLimit = 762,
        RepeatBetGoldEnought = 763,
        notGoldToCharge = 764,
        fuhao = 765,
        robBankTip = 766,
        common_error_game_state = 767,
        common_banker_betgold_is_full = 768,
        common_other_betgold_is_full = 769,
        common_hasEnd = 770,
        common_noBetBefore = 771,
        common_hasBet = 772,
        commmon_lessCondition = 773,
        common_noGold = 774,
        commmon_partFull = 775,
        sevenGetGold = 776,
        ComingSoon = 777,
        headHasGet = 778,
        LobbyUITips6 = 780,
        betCondition = 781,
        todayCanGet = 782,
        serviceHttp = 783,
        Tourist = 784,
        avatarSuffix = 785,
        anotherBet = 786,
        enterRoomCondition = 787,
        getDLGold = 788,
        xcDesc = 789,
        noMoneyBank = 794,
        betNotLeave = 795,
        playKickDesc = 796,
        limitRewardTips = 797,
        vipRewardTip1 = 798,
        vipRewardTip2 = 799,
        vipRewardTip3 = 800,
        vipRewardTip4 = 801,
        vipRewardTip5 = 802,
        vipRewardTip6 = 803,
        vipRewardTip7 = 804,
        vipExpWaitTip = 805,
        vipExpCanPop = 806,
        thousand = 807,
        loadingVerErr = 808,
        loadingResErr = 809,
        loadingThemeErr = 810,
        loadingObjErr = 811,
        giveUpLoad = 812,
        loadingGmdErr = 813,
        loadingConfErr = 814,
        extendSM = 815,
        UpdateNewVer = 816,
        loginGiftTip = 817,
        gameGuideTip1 = 818,
        gameGuideTip2 = 819,
        gameGuideTip3 = 820,
        gameGuideTip4 = 821,
        gameGuideTip5 = 822,
        gameGuideTip6 = 823,
        gameGuideTip7 = 824,
        gameGuideTip8 = 825,
        gameGuideTip9 = 826,
        gameGuideTip10 = 827,
        gameGuideTip11 = 828,
        gameGuideTip12 = 829,
        gameGuideTip13 = 830,
        gameGuideTip14 = 831,
        gameGuideTip15 = 832,
        gameGuideTip16 = 834,
        kickingOff = 835,
        gameNoOpen = 836,
        bindAndSave = 837,
        playerProhibit = 838,
        Binging_AccIsExists = 839,
        bindAwdLate = 840,
        extendTS = 841,
        customChipErr1 = 842,
        customChipErr2 = 843,
        customChipErr3 = 844,
        gameAddQueue = 845,
        gameLoadOver = 846,
        gameZipErr = 847,
        gameUpErr = 848,
        gameVerFMErr = 849,
        gameNoFun = 850,
        gameVerErr = 851,
        getting = 852,
        codeIn = 853,
        codeSure = 854,
        codeS = 855,
        boxGet = 856,
        boxIn = 857,
        nextGetTime = 858,
        boxFindCode = 859,
        boxTishi = 860,
        customPeople = 861,
        boxNumber = 862,
        codeMastBeNum = 863,
        notEnoughGold = 864,
        boxNoEnoughMoney = 865,
        yanzmengma = 866,
        boxGetCount = 867,
        boxInCount = 868,
        mingxiCun = 869,
        mingxiQu = 870,
        colorQU = 871,
        colorCun = 872,
        colorSY = 873,
        kaiqiTS = 874,
        inMoney = 875,
        outMoney = 876,
        boxCodeNumber = 877,
        boxYanZheng = 878,
        boxYanHasSend = 879,
        boxPassNtoSeam = 880,
        resultWrong1 = 881,
        areaLitBetGold = 882,
        areaTalBetGold = 883,
        bankLitBetGold = 884,
        bankTalBetGold = 885,
        extendXiShu0 = 886,
        extendXiShu1 = 887,
        extendXiShu2 = 888,
        buyuExpTip = 889,
        moLoadErr = 890,
        moVerLoadErr = 891,
        moJsLoadErr = 892,
        moResLoadErr = 893,
        moThemeLoadErr = 894,
        boxCunIsZero = 895,
        boxQuIsZero = 896,
        touristAccount = 897,
        bindAccount = 898,
        gettingRoomCfg = 899,
        safeguard = 900,
        safeguarding = 901,
        needBindPlay = 902,
        gameNeedUp = 903,
        freeAnotherBet = 904,
        dearPlayer = 905,
        boxWrongNum = 906,
        rRoomNum = 907,
        rJuShuNum = 908,
        rNCopySuccess1 = 909,
        rNCopySuccess2 = 910,
        rMasterExitTip = 911,
        rPlayerKicked = 912,
        rDismiss = 913,
        rWaitRenewal = 914,
        rRenewaled = 915,
        rExitIsReq = 916,
        rExitTip1 = 917,
        rExitTip2 = 918,
        rExitSend = 919,
        rApplay = 920,
        noPlayerUpBank = 921,
        noHave = 922,
        year = 923,
        month = 924,
        day = 925,
        hour = 926,
        minter = 927,
        seconds = 928,
        underDown = 929,
        underUp = 930,
        eachW = 931,
        roomIdLang = 932,
        howInnings = 933,
        recordsKept = 934,
        getWin = 935,
        zuijin = 936,
        juCount = 937,
        jin = 938,
        manyInner = 939,
        downing = 940,
        noKickSelf = 941,
        friendIntegral = 942,
        friendAgent = 943,
        friendAgent1 = 944,
        friendAgent2 = 945,
        friendAgent3 = 946,
        friendAgent4 = 947,
        friendJoinTip = 948,
        friendInputName = 949,
        createFkTip = 950,
        friendApplyTime = 951,
        friendUpPoint = 952,
        friendDownPoint = 953,
        friendNotice = 954,
        friendNoticeInput = 955,
        friendUplines = 956,
        friendDownlines = 957,
        friendUpPointTip = 958,
        friendDownPointTip = 959,
        disFriendCircle = 960,
        outFriendCircle = 961,
        friendOnLine = 962,
        friendUpBig = 963,
        firendInputPt = 964,
        askDismiss = 965,
        disNotice = 966,
        upPointSucc = 967,
        downPointSucc = 968,
        apiRobNeedGold = 969,
        apiEnterRoomCondition = 970,
        apiNoMoneyBank = 971,
        apiBetCondition = 972,
        apinotGoldToCharge = 973,
        apiLogin = 974,
        roomCardNotEnough = 975,
        friendApplyId = 976,
        friendWaiting = 977,
        friendRefused = 978,
        friendNoticeRel = 979,
        friendCreateRm = 980,
        friendOnLineNoTab = 981,
        friendCircleNm = 982,
        friendInputNotice = 983,
        friendOverJoin = 984,
        friendPickPlay = 985,
        friendWeek0 = 986,
        friendWeek1 = 987,
        friendWeek2 = 988,
        friendWeek3 = 989,
        friendWeek4 = 990,
        friendWeek5 = 991,
        friendWeek6 = 992,
        friendSaveData = 993,
        friendUDSaveData = 994,
        friendOnLine1 = 995,
        friendOnLineNoTab1 = 996,
        friendReportNum = 997,
        friendReportUpPt = 998,
        friendReportDownPt = 999,
        friendRoomLeave = 1000,
        friendRoomDis = 1001,
        friendGameDesc = 1002,
        friendCardExpend = 1003,
        chatLimitNum = 1004,
        chatLab0 = 1005,
        chatLab1 = 1006,
        chatLab2 = 1007,
        chatLab3 = 1008,
        chatLab4 = 1009,
        chatLab5 = 1010,
        chatLab6 = 1011,
        chatLab7 = 1012,
        xufei = 1013,
        onlineLab = 1014,
        timeOutLab = 1015,
        notSupportFull = 1016,
        noSupportEquipMent = 1017,
        gameNumber = 1018,
        room = 1019,
        effectiveBet = 1020,
        profit = 1021,
        endTime = 1022,
        gameRecordTip = 1023,
        addLinks = 1024,
        waitReview = 1025,
        inatallNewProgram = 1026,
        gameLogID = 1027,
        pingminchang = 1028,
        guizuchang = 1029,
        fuhaochang = 1030,
        huangjiachang = 1031,
        gameLogNoID = 1032,
        moneyBagTip1 = 1033,
        moneyBagTip2 = 1034,
        moneyBagTip3 = 1035,
        moneyBagTip4 = 1036,
        moneyBagTip5 = 1037,
        moneyBagTip6 = 1038,
        moneyBagTip7 = 1039,
        balance = 1040,
        onJieSuan = 1041,
        onXiaZhu = 1042,
        onSendCard = 1043,
        onAward = 1044,
        onPrepare = 1045,
        gameClassTp0 = 1046,
        gameClassTp1 = 1047,
        gameClassTp2 = 1048,
        gameClassTp3 = 1049,
        gameClassTp4 = 1050,
        gameClassTp5 = 1051,
        gameClassTp6 = 1052,
        gameClassTp7 = 1053,
        rebateMoneyTip = 1054,
        rebateTitle = 1055,
        rebateBet = 1056,
        rebateMoney = 1057,
        rebateAwdTime = 1058,
        rebateNoLog = 1059,
        firstPage = 1060,
        lastPage = 1061,
        upPage = 1062,
        nextPage = 1063,
        mail = 1064,
        mailContent = 1065,
        appendix = 1066,
        notice = 1067,
        accountInfo = 1068,
        basicInfo = 1069,
        vipLv = 1070,
        nickName = 1071,
        loginPwd = 1072,
        bankInfo = 1073,
        memberCenter = 1074,
        myAccount = 1075,
        records = 1076,
        betRecord = 1077,
        infomation = 1078,
        contactService = 1079,
        gameNotice = 1080,
        noPrize = 1081,
        appDownload = 1082,
        actHall = 1083,
        onlineService = 1084,
        onMail = 1085,
        flowDes = 1086,
        withdrawalDes = 1087,
        close = 1088,
        hasBeenOpen = 1100,
        centerWallet = 1101,
        autoTransfer = 1102,
        openBalance = 1103,
        transferTheBalance = 1104,
        nonsupport = 1105,
        centerGold = 1106,
        myWallet = 1107,
        InputTransfer = 1108,
        warningGolds = 1109,
        closedPattern = 1110,
        closeTransfer = 1111,
        openTransfer = 1112,
        InputTransfer1 = 1113,
        notGreaterMaxGold = 1114,
        hallWallet = 1115,
        transferSuccess = 1116,
        transferFailed = 1117,
        backGain1 = 1118,
        agency = 1119,
        teamList = 1120,
        enterGameGold = 1121,
        OperateTooOften = 1122,
        myWalletErr0 = 1123,
        myWalletErr1 = 1124,
        myWalletErr2 = 1125,
        myWalletErr3 = 1126,
        myWalletErr4 = 1127,
        myWalletErr5 = 1128,
        myWalletErr6 = 1129,
        myWalletErr7 = 1130,
        myWalletErr8 = 1131,
        myWalletErr9 = 1132,
        myWalletErr10 = 1133,
        myWalletErr11 = 1134,
        Joiningdays = 1135,
        Accountbalance = 1136,
        Collectrecords = 1137,
        Helpcenter = 1138,
        Invitefriends = 1139,
        MemberLab1 = 1140,
        MemberLab2 = 1141,
        MemberLab3 = 1142,
        MemberLab4 = 1143,
        Gender = 1144,
        ofbirth = 1145,
        mailbox = 1146,
        Toaddress = 1147,
        basicLab1 = 1148,
        basicLab2 = 1149,
        basicLab3 = 1150,
        basicLab4 = 1151,
        basicLab5 = 1152,
        basicLab6 = 1153,
        basicLab7 = 1154,
        basicLab8 = 1155,
        basicLab9 = 1156,
        Safetytips = 1157,
        Changenickname = 1158,
        Nicknames = 1159,
        yournickname = 1160,
        Thisrevision = 1161,
        phonenumber = 1162,
        phoneLab1 = 1163,
        phoneLab2 = 1164,
        LealName = 1165,
        LealNameLab = 1166,
        Tpis = 1167,
        Emailaccount = 1170,
        Emailcode = 1171,
        mailboxLab1 = 1172,
        mailboxLab2 = 1173,
        address = 1174,
        joinaddress = 1175,
        man = 1176,
        woman = 1177,
        Freetomodify = 1178,
        Emailtitle = 1179,
        Gendertitle = 1180,
        datebirth = 1181,
        addresstitle = 1182,
        Moreavatars = 1183,
        sopportPartner = 1184,
        inputAccount = 1185,
        RemoteTime = 1186,
        noBindNoChangePwd = 1187,
        flushSuccess = 1188,
        recoverSuccess = 1189,
        InviteFriends = 1190,
        filterList = 1191,
        checking = 1192,
        grant = 1193,
        and = 1194,
        longVaild = 1195,
        rateFlow = 1196,
        needLoadGm = 1197,
        expiryRefuse = 1198,
        expirySend = 1199,
        expiryCheck = 1200,
        ticketRecord = 1201,
        expiryType = 1202,
        expiryPrize = 1203,
        expirtTime = 1204,
        expirtHandsel = 1205,
        expirGrantWallet = 1206,
        expirRunWater = 1207,
        expirDetailsTime = 1208,
        expirState = 1209,
        expirDetailsType = 1210,
        expirToday = 1211,
        expirThreeDays = 1212,
        expirSevenDays = 1213,
        expirFifteenDays = 1214,
        expirActiveGifts = 1215,
        expirBonus = 1216,
        expirAll = 1217,
        expirDetailsHandsel = 1218,
        expirHandselGold = 1219,
        expirDetailsWallet = 1220,
        expirDetailsRunWater = 1221,
        expirStadium = 1222,
        expircUrrentState = 1223,
        expirceHaoliDetails = 1224,
        expirRecipients = 1225,
        expirPhone = 1226,
        expirExpressage = 1227,
        expirActivityPrizes = 1228,
        runningWater = 1229,
        allVenues = 1230,
        hasRefused = 1231,
        transferWallet = 1232,
        myWalletErr12 = 1233,
        myWalletErr13 = 1234,
        depositCourse = 1235,
        withdrawCourse = 1236,
        gameIntrodution = 1237,
        technicalSupport = 1238,
        helptxt0 = 1239,
        helptxt1 = 1240,
        helptxt2 = 1241,
        helptxt3 = 1242,
        helptxt4 = 1243,
        vipPay = 1244,
        alipay = 1245,
        weChatPay = 1246,
        wyPay = 1247,
        cloudPay = 1248,
        fastPay = 1249,
        QQPay = 1250,
        virtualPay = 1251,
        sportEvent = 1252,
        liveVideo = 1253,
        lotteryGame = 1254,
        electronicFish = 1255,
        electronicSport = 1256,
        cardGames = 1257,
    }
}
declare module TRain {
    class AniBase {
        tar: any;
        action: Action;
        protected _props: any;
        constructor(tar?: any);
        setData(...args: any[]): void;
        beforeAni(): void;
        endAni(): void;
        clear(): void;
    }
    class AniWrapper {
        inFree: boolean;
        inAni: boolean;
        ani: AniBase;
        private _seqAct;
        private _acts;
        private _data;
        constructor();
        clear(): void;
        start(finFun?: Function, tar?: any): void;
        stop(): void;
        protected actFin(tar: any, notDo: boolean): void;
    }
    module WrapperMgr {
        function getWrapper(): AniWrapper;
        function freeWrapper(wrapper: AniWrapper): void;
    }
}
declare module game {
    interface IMsgPrompt {
        showErr(errCode: number): any;
        showPrompt(errCode: number): any;
    }
    let msgPrompt: IMsgPrompt;
    /**
     *
     * 数据类基类，内含有本地配置表数据_configData 和 服务器下发数据 _svrData。
     * 对数据操作逻辑
     *
     * */
    class DataModel extends Notification {
        confLoaded: boolean;
        confNm: string;
        protected _data: any;
        protected _lProps: (string | number)[];
        /**
         * 配置表加载完成后调用。再各自的数据类中解析客户端配置数据
         * */
        onLoadConf(data: any): void;
        setData(data: any): void;
        getData(): any;
        getVal(key: string | number): any;
        addVal(key: string | number, val: number): any;
        setVal(key: string | number, val: any): any;
        updateData(newData: any): void;
        addPropListener(propKey: string | number, fun: (param1?: any) => void, tar: any): void;
        rmvPropListener(propKey: string | number, tar: any): void;
    }
}
declare module game {
    const enum GameResultTp {
        none = 0,
        win = 1,
        lose = 2,
        peace = 3,
        peaceSmall = 4,
    }
    interface IGameResult {
        r: GameResultTp;
        pt?: number;
    }
    const enum RouteTp {
        zhupanlu = 0,
        dalu = 1,
        dayanzailu = 2,
        xiaolu = 3,
        xiaoqianglu = 4,
        max = 5,
    }
    const enum gdWayTp {
        none = 0,
        first = 1,
        second = 2,
        three = 3,
        four = 4,
        five = 5,
        six = 6,
        seven = 7,
        eight = 8,
        nine = 9,
        ten = 10,
    }
    const enum RouteConst {
        overRmvcnt = 1,
        maxRow = 6,
        maxHisCnt = 100,
    }
    const enum RouteMo_EVT {
        DATA_CHANGE = "d_change",
        DATA_UPDATE = "d_update",
    }
    class RouteModel extends Notification {
        data2Zhupanlu: (data: any, param1?: any) => IGameResult;
        data2GdWay: (idx: number) => string;
        maxHisCnt: number;
        overRmvcnt: number;
        winType: number;
        loseType: number;
        protected _historys: any[];
        protected _routes: IGameResult[][];
        protected _tmps: IGameResult[][][];
        protected _lastIdxs: number[];
        constructor(maxHisCnt?: number, overRmvcnt?: number, winTp?: number, loseTp?: number);
        historys: any[];
        addHistory(data: any): void;
        getRouteData(tp: RouteTp | number): IGameResult[];
        getGdwayNm(tp: number): string;
        /**
         *
         * @param routeList
         *
         * 0无、1长红、2长黑、3大路单跳、4拍拍黐、5一厅两房、6一房两厅、7逢红黐、8逢黑黐、9隔黐红、10隔黐黑
         */
        calGdWayType(tp: number): number;
        getRouteLastIdx(tp: RouteTp | number): number;
        getForecast(): GameResultTp[][];
        protected freeArrs(list: IGameResult[][]): void;
        protected _handHistory(stIdx: number, resetSub?: boolean): void;
        protected shiftHistory(cnt: number): void;
        protected zpl2Dalu(list: IGameResult[], stIdx: number, ret: IGameResult[][]): void;
        protected calcSubs(daluList: IGameResult[][], reset?: boolean, stCol?: number, stRow?: number): void;
        protected resetSubs(): void;
        protected result2Sub(list: IGameResult[][], tp: RouteTp, col?: number, row?: number): void;
        /**
         *
         * @param ret 处理后 值存放的 一维数组
         * @param list 待处理的二维数组
         * @param col 有， 则从指定列开始
         * @param row 有， 则从指定行开始
         * @param free 是否要回收数组  内部使用， 外部不要使用
         */
        protected two2one(list: IGameResult[][], ret: IGameResult[], col: number, row: number): number;
        protected _result2Sub(list: IGameResult[][], col: number, row: number, doFun: (lists: IGameResult[][], col: number, row: number) => GameResultTp, ret: IGameResult[][]): void;
        protected calcDYZLResult(lists: IGameResult[][], col: number, row: number): GameResultTp;
        protected calcXLResult(lists: IGameResult[][], col: number, row: number): GameResultTp;
        protected calcXQLResult(lists: IGameResult[][], col: number, row: number): GameResultTp;
    }
}
declare module game {
    interface LayerDelegate {
        showLayer(layer: cui.Group): void;
        hideLayer(layer: cui.Group): void;
    }
    class BaseScene extends cui.Group {
        constructor();
        /**
         * @
         * 舞台尺寸改变
         */
        protected onResize(w: number, h: number): void;
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        $onRemoveFromStage(): void;
        $hitTest(stageX: number, stageY: number): egret.DisplayObject;
        onMsgErr(errCode: number): void;
    }
}
declare module game {
    interface IShowResult {
        bg: number;
        num: number;
        up: number;
        down: number;
    }
    interface IRoomData {
        room: any;
    }
    interface IRouteData {
        route: game.RouteModel;
    }
    const enum colTp {
        six = 6,
    }
    class UIRouteList extends cui.Group {
        private _items;
        /**
         *
         * @param datas
         * @param itemCls 必须继承RouteItemBase
         * @param haveDbRow 是否有双列
         */
        init(datas: IRouteData[], itemCls: any, haveDbRow?: boolean): void;
        initNew(datas: IRouteData[], itemCls: any, haveDbRow?: boolean): void;
        updateRoom(datas: IRoomData[]): void;
    }
    class RouteItemBase extends cui.Component {
        skZPL: RouteCom;
        skDL: RouteCom;
        skDYZL: RouteCom;
        skXL: RouteCom;
        skXQL: RouteCom;
        skWin0: cui.Image;
        skWin1: cui.Image;
        skWin2: cui.Image;
        skLose0: cui.Image;
        skLose1: cui.Image;
        skLose2: cui.Image;
        _data: RouteModel;
        private _winStr;
        private _win1Str;
        private _win2Str;
        childrenCreated(): void;
        init(data: game.RouteModel, haveDbRow: boolean): void;
        updateRoom(data: IRoomData): void;
    }
    class RouteCom extends cui.Component {
        itemSkinName: string;
        skImg: cui.Image;
        skList: cui.DataGroup;
        skTbScroller: cui.TableScroller;
        skLab: cui.Label;
        skGrpGreatRoad: cui.Group;
        private _mo;
        private _tp;
        private _imgLen;
        private _imgW;
        private _oldW;
        private _flashTag;
        private _flashData;
        private _itemPro;
        private _haveDouble;
        private _doubleRow;
        childrenCreated(): void;
        setModel(tp: RouteTp, mo: RouteModel, haveDouble?: boolean): void;
        private updateResult(noclear?);
        private updateTile();
        private endFlash();
        dispose(): void;
    }
}
declare module game {
    class ItemTile extends cui.UITile {
        static props: string[];
        skIcon: cui.Image;
        skSel: cui.Image;
        skBg: cui.Image;
        skRed: cui.Image;
        skAni: cui.UIMovieClip;
        skFont: cui.BitmapLabel;
        skBtn: cui.SimpleButton;
        constructor(skinName?: string);
        dataChanged(): void;
        hasProp(key: string): boolean;
        icon: string;
        bg: string;
        sel: boolean;
        ani: string;
        font: string;
    }
}
declare module game {
    module ApiUtil {
        function loadParam_api(cb: Function): void;
    }
}
interface IMainDelegate extends egret.DisplayObjectContainer {
    onGameShow(): void;
}
interface IMainInfo {
    svrData: any;
    svrInfo: any;
    loginInfo: any;
    platConf: any;
}
declare module AppDelegate {
    function run(main: IMainDelegate): void;
}
declare module game {
    const enum MC_TYPE {
        UI = 0,
        EFFECT = 1,
        MAX_CNT = 2,
    }
    const enum CapabilityOS {
        Unknown = 0,
        iOS = 1,
        Android = 2,
        WinPhone = 3,
        WinPC = 4,
        MacOS = 5,
    }
    const enum RenderModeTp {
        canvas = 0,
        webgl = 1,
    }
    const enum EnterGameType {
        Normal = 1,
        Reconnect = 2,
    }
    const enum GAME_CONST {
        DESIGN_WIDTH = 1280,
        DESIGN_HEIGTH = 720,
        DESIGN_WIDTH_HALF = 568,
        DESIGN_HEIGTH_HALF = 320,
    }
    const enum GAME_STR_CONST {
        resNm = "resource",
        hall = "hall",
    }
    const enum ROOM_TYPE {
        shiwan = 1,
        pingmin = 2,
        fuhao = 3,
        guizu = 4,
        huangjia = 5,
        max = 6,
    }
    module GameUtil {
        let os: CapabilityOS;
        let rm: RenderModeTp;
        let gc: boolean;
        const enum GAME_EVT {
            enter_game_fin = "enter_fin",
            update_main_finish = "update_main_finish",
            update_game_finish = "update_game_finish",
            update_game_progress = "update_game_progress",
        }
        function loadParam(cb: Function): void;
        function getAllVer(name: string): string;
        function getHome(nm: string): string;
        function getAllSkinId(): number;
        const enum LocalKey {
            ACC_NAME = "ACC_NAME",
            ACC_PHONE = "ACC_PHONE",
            ACC_Pwd = "ACC_Pwd",
            ISRELOAD = "RELOAD",
            SERVERID = "SERVERID",
            MUSICID = "MUSICID",
            SFX_STATUS = "SFX_STATUS",
            MUSIC_STATUS = "MUSIC_STATUS",
            LAST_GAME = "LAST_GAME",
            NOTICE_2 = "NOTICE_2",
            NOTICE_3 = "NOTICE_3",
            NOTICE_TM_1 = "NOTICE_TM_1",
            NOTICE_TM_2 = "NOTICE_TM_2",
            NOW_NOTICE = "NOW_NOTICE",
            OVER_READ_NOTICE = "OVER_NOTICE",
            ISOVERPOP_BINDREWARD = "BINDREWARD",
            ISOVERPOP_FIRSTRECHANGE = "FIRSTRECHANGE",
            OVER_READ_Activity = "OVER_Activity",
            URL_kefu = "URL_kefu",
            URL_erweima = "URL_erweima",
            URL_location = "URL_location",
            URL_bsKfUrl = "URL_bsKf",
            URL_bsKfUrlWeb = "URL_bsKfWeb",
            ACC_REMEMBER = "ACC_REMEMBER",
            CUSTOM_CHIPS = "CUSTOM_CHIPS",
            LAST_LOGIN = "LAST_LOGIN",
            LOGIN_PLAYID = "LOGIN_PLAYID",
            GOOD_ROAD = "GOOD_ROAD",
            FRIEND_NOTICE_READ = "FRIEND_NOTICE_READ",
            WEB_HARDWAREID = "WEB_HARDWAREID",
            AUTO_TRANFER = "AUTO_TRANFER",
        }
        function getLocal(key: string, defVal?: any): any;
        function getLocalBool(key: string, defVal?: boolean): boolean;
        function setLocal(key: string, val: string | boolean): void;
        function playClickSound(): void;
        function strToBinary(str: string): string;
        function binaryToStr(str: string): string;
        /**
         *
         * @param isReset 是否重置账号密码
         */
        function gameReload(isReset?: boolean): void;
        function getErrInfo(info: string): number;
        /**
         *
         * @param listIdx 当前金币在自定义数组中的下标
         */
        function getCustomIdx(listIdx: number): number;
        /**
         * 生成随机的uuid
         */
        function getUUID(): any;
        /**
         *
         * @param room_info 房间状态服信息
         * @param room_confs 房间总配置表
         * 返回值是一个{count:xxx,fireNum:xxx}的数组 如果服务器没给那两个参数（player_cnt，bot_cnt）则返回的count为0
         * 返回的fireNum是达到多少人数是火爆
         */
        function getOnlineNum(roomInfo: any[], roomConfs: any): {
            count: number;
            fireNum: number;
        }[];
        function getWebLogData(): {
            playId: number;
            gameId: number;
        };
        function sendIntervalTm(nm: string, tm: number): void;
        function enterCurGame(gameId: number): void;
        function checkGmEnter(id: number): void;
    }
}
declare var handerNativeEvt: (evtNm: any, paramStr: any) => void;
declare module game {
    class BankerView extends game.UIPopup {
        private skDBAniGetBank;
        private skDBAniLeaveBank;
        private skShangZ;
        private skSZHead;
        private skSZHeadBack;
        private skSZName;
        private _isleave;
        private _bankerInfo;
        constructor();
        childrenCreated(): void;
        setIsLeave(isLeave: any): void;
        setBankerInfo(info: any): void;
        playToBanker(): void;
        updateBanker(bankerGold: any, income: any, limitGold: any): boolean;
        playLeaveBanker(): void;
        protected onDispose(): void;
    }
}
declare module game {
    interface MomentMediator {
        onReturn(): void;
    }
    class MomentView extends UIFullFW {
        skImgName: cui.Image;
        skBtnReturn: cui.ScaleButton;
        skList: cui.DataGroup;
        skNotify: cui.Group;
        skVerGrp: cui.Group;
        skGameRule: cui.ScaleButton;
        skNoCfg: cui.Label;
        skRecordBtn: ChildGMRecord;
        skClassGrp: cui.MenuGroup;
        skGold: cui.BitmapLabel;
        skGirlDb: UIDBAni;
        skImg: cui.Image;
        private _arr;
        constructor(isNew?: boolean);
        childrenCreated(): void;
        protected onReturn(): void;
        setData(itemRen: any, source: any[]): void;
        setGirlDb(girlDb: string): void;
        setDbImg(imgV: boolean): void;
    }
}
declare module game {
    class playerInfoView extends cui.SimpleButton {
        skHead: cui.Image;
        skHeadFrame: cui.Image;
        skbackGuang: cui.Image;
        skteshu: cui.Image;
        skFont: cui.BitmapLabel;
        skwinFont: cui.BitmapLabel;
        skNickName: cui.Label;
        skgold: cui.Label;
        skJiao: cui.Image;
        private skConfGrp;
        private _tag;
        private _date;
        cleanDate(): void;
        setData(data: any, rank: any): void;
        updateGold(data: any, isAward: boolean, gold?: number): void;
    }
}
declare module game {
    interface hallPlayerListShowData extends cui.IItemData {
        rankid: number;
        player_head_custom: string;
        player_vip_lv: string;
        player_nickname: string;
        win_count: number;
        play_cnt: number;
        player_gold: number;
        bets: number;
        type: number;
    }
    class PlayerListView extends game.UIPopup {
        skBack: cui.ScaleButton;
        skplyHead: cui.Image;
        skplyHeadF: cui.Image;
        skList: cui.DataGroup;
        skDushen: cui.Label;
        skwinCount: cui.Label;
        skplayCount: cui.Label;
        skgold: cui.BitmapLabel;
        skbets: cui.BitmapLabel;
        skGetWin: cui.Label;
        skJu0: cui.Label;
        skJu1: cui.Label;
        skZuiJin: cui.Label;
        private _itemPro;
        private _data;
        constructor();
        childrenCreated(): void;
        setData(data: any): void;
        updateView(): void;
    }
    class PlayerListItem extends cui.DataItem {
        skfuhao: cui.Image;
        skplyHead: cui.Image;
        skplyHeadF: cui.Image;
        sknickname: cui.Label;
        skwinConut: cui.Label;
        skplayCount: cui.Label;
        skgold: cui.BitmapLabel;
        skbets: cui.BitmapLabel;
        skrank: cui.BitmapLabel;
        skJiao: cui.Image;
        skGetWin: cui.Label;
        skJu0: cui.Label;
        skJu1: cui.Label;
        skZuiJin: cui.Label;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module confConsts {
    const enum GameTp {
        jinchanbuyu = 1,
        hlgz = 3,
        brniuniu = 4,
        bjl = 5,
        heihongmeifang = 10,
        jinshayinsha = 12,
        hlzz = 14,
        doudizhu = 16,
        zhajinhua = 17,
        robcow = 18,
        sgj = 20,
        ermj = 21,
        shz = 22,
        benchibaoma = 23,
        buyulkpy = 24,
        buyudntg = 25,
        slwh = 26,
        buyufk = 27,
        srmj = 28,
        wrdz = 29,
        dzpk = 30,
        gan28 = 31,
        longhudou = 32,
        yydb = 33,
        ernn = 34,
        ttz = 35,
        tbnn = 36,
        sgbf = 37,
        sss = 38,
        srnn = 39,
        hhdz = 40,
        lp = 41,
        dfdc = 42,
        hch = 43,
        rywz = 44,
        qwzb = 45,
        jxlw = 46,
        ssq = 52,
        hcdh = 53,
        lpak = 54,
        lpxy = 55,
        yqcm = 56,
        lol = 57,
        wbdj = 58,
        dn = 59,
        pbSport = 60,
        sszz = 61,
        brsg = 62,
        kpCows = 63,
        dznz = 64,
        xzmjFk = 65,
        xzmj = 66,
        qznnNew = 67,
        qzZjh = 68,
        sa = 70,
        redsweep = 71,
        wtt = 72,
        dsg = 73,
        bxpDdz = 74,
        paigow = 75,
        dycp = 76,
        shqmFj = 77,
        shqm = 78,
        lhch = 79,
        sp = 80,
        fxttz = 81,
        dstpj = 82,
        yxx = 83,
        ambjl = 84,
        luckyseven = 85,
        dzmjFj = 86,
        dzmj = 87,
        sport188 = 90,
        avia = 91,
        dt = 92,
        im = 93,
        aglive = 94,
        bglive = 95,
        wzssc = 96,
        qxzl = 97,
        redsweeppro = 98,
        jlbpoker = 99,
        csd = 100,
        dotassc = 101,
        ermjFj = 102,
        srmjFj = 103,
        qznnNewFj = 105,
        qzZjhFj = 106,
        srnnfk = 109,
        doudizhufk = 112,
        roweyfk = 116,
        slm = 143,
        bxqjt = 144,
        rowey = 145,
        sgssc = 146,
        shssc = 147,
        qzebg = 150,
        wlzb = 151,
        ermjqyq = 153,
        srmjqyq = 154,
        xzmjqyq = 155,
        shqmqyq = 156,
        qznnNewqyq = 159,
        qzZjhqyq = 160,
        srnnqyq = 163,
        doudizhuqyq = 166,
        gswz = 197,
        qzpaiju = 198,
        sangong = 199,
        qzsuoha = 200,
        shidianban = 201,
        roomgm = 211,
        legae = 8801,
        legesb = 8802,
        legallbet = 8803,
        legn2 = 8804,
        legperson = 8805,
        legibc = 8806,
        legebet = 8807,
        legtcg = 8808,
        legpt = 8809,
        legpp = 8810,
        legea = 8811,
        leglb = 8812,
        legag = 8813,
        legnetent = 8814,
        legog = 8815,
        legmg = 8816,
        legsgl = 8817,
        legpg = 8818,
        legsgqp = 8819,
        legim = 8821,
        legelect = 8824,
        legfish = 8825,
        legsport = 8826,
        leglottery = 8828,
        legvr = 8829,
        legsea = 8830,
        tbjinhua = 212,
    }
    const enum ConstTp {
        base_gold = 100,
        base_ticket = 0,
        base_chip = 0,
        signatureMaxLength = 80,
        giftDepreciation = 100,
        friendLimit = 50,
        noticeCdTime = 30,
        all_notice_player = 5000,
        worldChatInterval = 5,
        almsGoldCount = 50,
        almsLimit = 40,
        almsMaxCount = 6,
        nickNameMaxLength = 16,
        bindCount = 3,
        bindCodeExpiryDate = 60,
        isOpenGuide = 0,
        isAutoConnect = 1,
        isInsertAnySdk = 0,
        sendGiftLogMaxCount = 50,
        sendMailLogMaxCount = 50,
        UpdateIcon = 10000,
        modifyNicknameCost = 500,
        costType = 1,
        exchangeMaxCount = 50,
        updateGameList = 300,
        updateMailPoint = 60,
        isOfflineVersion = 0,
        defaultvip = 0,
        firstGameId = 1,
        isApple = 0,
        lotteryBigPrize = 30000,
        lotterySmallPrize = 500,
        ticketLotteryCost = 20,
        lotteryBoxCount = 0,
        thankYouJoinExchangeTicket = 5,
        thankYouExchangeLimit = 20,
        tankkYouCountLimit = 999,
        continuousVipCount = 1,
        continuousSendSpeakerCost = 5000,
        continuousSendSpeakerInterval = 120,
        continuousSendTime1 = 10,
        continuousSendTime2 = 100,
        continuousSendTime3 = 1000,
        continuousSpeakerMaxCount = 1000,
        ptotectTime = 604800,
        FreeSpeakerLevel = 9,
        rechargeNumSpeaker = 30,
        silverMember = 100,
        goldMember = 1000,
        notifyEnterGameVipLevel = 3,
        DiceCondition = 3000,
        MinLifeTime = 1800,
        MaxLifeTime = 7200,
        MaxGold = 400000000,
        DiscountVIP = 11,
        DiscountValue = 100,
        StarMax = 50,
        AwardMax = 100000,
        BaseChip = 200,
        ChipRate = 50,
        StarCount = 20,
        RobotNoticeMinTime = 10,
        RobotNoticeMaxTime = 20,
        SendGiftLimit = 200000,
        safeBoxLogMaxCount = 50,
        InitRobot = 1000,
        MoneyBase = 100,
        BindReward = 100,
        MinChargeGold = 1000,
        MaxDefaultChargeGold = 300000,
        MaxChargeGold3 = 500000,
        MinWithdrawGold = 10000,
        MaxWithdrawGold = 5000000,
        ExtraWithdrawGold = 600,
        WithdrawCost = 50,
        DefaultDiscount = 100,
        MinDiscount = 90,
        VerifyTime = 60,
        CheckPayLimit = 0,
        InviterTipReceiveMinGold = 100,
        friendPointLimit = 1000,
        friendCircleLimit = 500,
        connIntervalTime = 500,
    }
    const enum SoundTp {
        click = "click",
        back = "back",
        bonus = "bonus",
        coins = "coins",
        popup = "popup",
        lvup = "lvup",
        charge = "charge",
        BG00 = "BG00",
        BG309 = "BG309",
        ReceiveGold1 = "ReceiveGold1",
        arcade = "arcade",
        gold = "gold",
        dating = "dating",
        denglu = "denglu",
        bangdingyouli = "bangdingyouli",
        fenxiang = "fenxiang",
        kefu = "kefu",
        yinghang = "yinghang",
        shangcheng = "shangcheng",
        shouchong = "shouchong",
        sevenDay = "sevenDay",
        xianshixuanshang = "xianshixuanshang",
        email = "email",
        personInfo = "personInfo",
        count_down = "count_down",
        countdown_3 = "countdown_3",
        countdown_2 = "countdown_2",
        countdown_1 = "countdown_1",
        countdown_open = "countdown_open",
        onBet = "on_bet",
        bet = "bet",
        jiesuan2 = "jiesuan2",
        jetton = "sound_jetton",
        win_bet = "win_bet",
        fanpai = "fanpai",
        fapai2 = "fapai2",
        blankBtn = "blankBtn",
    }
    const enum PluginsTp {
        recharge = 10000,
    }
    const enum ComResTp {
        mk_bg = "common@mk_bg",
        back1 = "menuList@txt_back",
        Poker01 = "card@ddzPoker",
        Poker02 = "poker",
        girlHead = "head@nv_",
        manHead = "head@nan_",
        headframe = "head@new",
        vip = "vip@v",
        txt_lose = "common@txt_lose",
        txt_notHit = "common@txt_notHit",
        txt_notBet = "common@txt_notBet",
        notMusic = "menuList@txt_notMusic",
        music = "menuList@txt_music",
        pull_off = "menuList@top",
        pull_on = "menuList@bottom",
        game_rules = "menuList@txt_question",
        bottomScore = "common@txt_df",
        juNum = "common@txt_js",
        admission = "common@txt_rc",
        yuan = "common@txt_y",
        diban_db = "diban",
        store = "common@txt_shop",
        Chip = "chip@",
        txt_robZhuang = "banker@txt_robZhuang",
        txt_kamisho = "banker@txt_kamisho",
        txt_shimosho = "banker@txt_shimosho",
        txt_againBet = "chip@txt_againBet",
        txt_getGold = "common@txt_getGold",
        txt_applyZhuang = "banker@txt_applyZhuang",
        txt_applyShimosho = "banker@txt_applyShimosho",
        close = "common@close",
        txt_enter = "common@txt_enter",
        fastMatching = "common@txt_quickMa",
        bottomRes = "dingbu",
        txt_you = "banker@txt_you",
        txt_zhuang = "banker@txt_zhuang",
        rank = "common@rank",
        gold = "common@gold",
        zhuangSign = "banker@txt_bZhuang",
        redCircle = "common@redCircle",
        greenCircle = "common@greenCircle",
        nihezhuang_db = "jieSuan",
        txt_allKill = "banker@txt_allKill",
        ListTable = "listTable",
        tableBg = "tablesBg",
        list_zhuang = "zhuangList",
        listBg = "ListBg",
        momentBg = "momentBg",
        txt_rules = "common@txt_rules",
        txt_gameOver = "common@txt_gameOver",
        bottomBg = "common@goldBottom",
        txt_win = "common@txt_win",
        decoration = "common@decoration",
        ruleBg = "ruleBg",
        rule = "rule",
        nameBg = "common@nameBg",
        countDown = "common@djsBg",
        pureOn = "menuList@txt_pureOn",
        pureOff = "menuList@txt_pureOff",
        Popup01 = "menuList@db01",
        Popup02 = "menuList@db02",
        enterGame = "common@txt_enterGame",
        selectBar = "pic_xuanchangBar",
        arrow = "common@pic_jushujiantou",
        back2 = "common@back",
        girlBg = "renwu_xuanchang",
        QuickStart = "txt_QuickStart",
        guizuchangIcon = "common@guizuchang",
        huangjiachangIcon = "common@huangjiachang",
        newScene = "txt_newScene",
        paibe = "newPoker0",
        pic_v = "vip@pic_v",
        PlayerList = "wjdb",
        PListNeiDi = "wjnd",
        Add = "chip@txt_doubleBet",
        chipchoose = "chip@chipchoose",
        pailu = "common@pailu",
        daluOff = "common@txt_dl_off",
        daluOn = "common@txt_dl_on",
        quanluOff = "common@txt_ql_off",
        quanluOn = "common@txt_ql_on",
        zplOff = "common@txt_off",
        zplOn = "common@txt_on",
        jiaobiao = "common@jiaobiao",
        zhuangxianDB = "common@txt_zhuangxian",
        PlayerFrame = "common@wanjiakuang",
        SpecialFrame = "common@teshukuang",
        xing = "common@xing",
        fuhao = "common@txt_fuhao",
        dushen = "common@txt_dushen",
        oldFrame = "head@old",
        panzhulu = "route@pzl_",
        selectNum = "route@num_",
        dayanzai = "route@dyz_",
        xiaolu = "route@xl_",
        xiaoquanlu = "route@xql_",
        pailuxian = "route@bg_",
        fapaiqi = "common@pic_fapaiqi",
        online = "common@txt_online",
        xuanchangBg = "txt_xuanchangBg",
        dalu = "route@dl_",
        dayan = "route@bigeyes_",
        xianxiao = "route@xx_",
        zhx = "route@bjl_",
        xiaolu1 = "route@xiaolu_",
        dxbz = "route@txt_hltz_",
        lhh = "route@txt_lhd_",
        qss = "route@txt_jsys_",
        tablebBase = "paizhuo_diban",
        chipBase = "pic_chipdizuo",
        table_BG = "paizhuoBG1",
        ruleBg01 = "txt_ruleBg",
        pailuBg = "txt_pailuBg",
        zhxInner = "route@bjlInner_",
        daluInner = "route@dlInner_",
        numInner = "route@numInner_",
        pzlInner = "route@pzlInner_",
        xiaoluInner = "route@xiaoluInner_",
        xqlInner = "route@xqlInner_",
        xxInner = "route@xxInner_",
        bgPop = "route@bgPop_",
        dayanPop = "route@bigeyesPop_",
        zhxPop = "route@bjlPop_",
        daluPop = "route@dlPop_",
        dyzPop = "route@dyzPop_",
        pzlPop = "route@pzlPop_",
        xiaoluPop = "route@xiaoluPop_",
        xlPop = "route@xlPop_",
        xqlPop = "route@xqlPop_",
        xxPop = "route@xxPop_",
        Green = "route@dalulv_",
        dlNum = "route@dlNum_",
        hlgzPop = "route@txt_HlgzPop_",
        hlgzInner = "route@txt_HlgzIn_",
        labelInner = "common@pic_biaoqian",
        routeBg = "pailuBg",
        resultBg = "resultBg",
        upSide = "upSide",
        tablelBG1 = "paizhuoBG",
        routeUpBg = "paiLu@pailu_bg",
        routeUp = "paiLu@tou_",
        jin = "paiLu@txt_jing",
        jushengfu = "paiLu@txt_jushengfu",
        ruleBG1 = "txt_ruleBg1",
        star = "common@star",
        chip1 = "chip@num_",
        sevenDay = "hall_hall@txt_qiriyoujiang",
        limitReward = "hall_hall@txt_task",
        yqChip = "chip@yq_",
        gameIcon = "gameImg@txt_icon",
        gameName = "gameImg@txt_name",
        customChip = "custom@",
        customChipNum = "custom@Num",
        customChipYq = "custom@yq_",
        customYqNum = "custom@yqNum_",
        customLoL = "custom@LoL_",
        customLoLNum = "custom@LoLNum_",
        tyGame = "common@txt_tyGame",
        customChipTxtNum = "custom@txt_num_",
        customYqTxtNum = "custom@txt_yqNum_",
        chipTxtNum = "chip@txt_num_",
        customLolNum = "custom@LoLNum_",
        customLolTxtNum = "custom@txt_LoLNum_",
        headframeApi = "apiHead@new",
        oldFrameApi = "apiHead@old",
        Popup03 = "menuList@db03",
        newTyGame = "newXScene@txt_freeGame",
        newEnterGame = "newXScene@txt_enterGame",
        newRoomBg = "xcfl1",
        newTyRoomBg = "xcfl2",
    }
    const enum ComFontTp {
        loseMul = "loseMup",
        winMul = "winMup",
        ruleMag = "ruleRatio",
        moment = "moment",
        gold = "gold",
        bjlJu = "bjlJu",
        bjlXian = "bjlXian",
        chip = "chip",
        endPoint = "endPoint",
        topJu = "topJu",
        publicMup = "publicMup",
        and = "and",
        tiger = "tiger",
        closeMup = "closeMup",
        quartetLose = "quartetLose",
        quartetWin = "quartetWin",
        closeLose = "closeLose",
        closeWin = "closeWin",
        playerList = "playerList",
        lhdJu = "lhdJu",
        lhdBet = "lhdBet",
        lhdTotal = "lhdTotal",
        dragon = "dragon",
        match = "match",
        cardPerCentS = "cardPerCentS",
        cardPerCentB = "cardPerCentB",
        cardJu = "cardJu",
        cardOutCome = "cardOutCome",
        cardRoad = "cardRoad",
        cardClock = "cardClock",
        playerGold = "playerGold",
        list = "list",
        clock = "clock",
        loseMon = "loseMon",
        playerRk = "playerRk",
        betY = "betY",
        betG = "betG",
        winMon = "winMon",
        beadRoad = "beadRoad",
        zhuangXianHe = "zhuangXianHe",
        cardTableFen = "cardTableFen",
        remain = "remain",
        remember = "remember",
        zjhEndPoint = "zjhEndPoint",
        remainNum = "remainNum",
        difenNum = "difenNum",
        tableCaichiGold = "tableCaichiGold",
        resultNumLose = "resultNumLose",
        resultNumWin = "resultNumWin",
        caiChiGold = "caiChiGold",
        fieldNum = "fieldNum",
        jushuNum = "jushuNum",
        ruChangFen = "ruChangFen",
        xuanchangDiFen = "xuanchangDiFen",
        hhmfRound = "hhmfRound",
        pokerNum = "pokerNum",
        BJLfuping = "BJLfuping",
        loseMoney = "loseMoney",
        winMoney = "winMoney",
        goldNum = "goldNum",
        chipNum = "chipNum",
        coldTime = "coldTime",
        dzpkBet = "dzpkBet",
        dzpkFollow = "dzpkFollow",
        jsysrouteNum = "JSYSrouteNum",
    }
    const enum ComDbTp {
        bjl = "bjl",
        brniuniu = "brniuniu",
        doudizhu = "doudizhu",
        heihongmeifang = "heihongmeifang",
        jinchanbuyu = "jinchanbuyu",
        jinshayinsha = "jinshayinsha",
        longhudou = "longhudou",
        zhajinhua = "zhajinhua",
        brnnwin = "brnnwin",
        brnnlose = "brnnlose",
        benchibaoma = "benchibaoma",
        robcow = "robcow",
        gameBegin = "gameBegin ",
        pingju = "pingju",
        wuhuaniu = "wuhuaniu",
        zhuang = "zhuang",
        touxiang = "touxiang",
        beishu = "beishu",
        chuntian = "chuntian",
        tishi = "tishi",
        dzBs = "dzBs",
        fanchuntian = "fanchuntian",
        feiji = "feiji",
        gzyz = "gzyz",
        liandui = "liandui",
        baozha = "baozha",
        vs = "vs",
        mbdc = "mbdc",
        shengli = "shengli",
        shibai = "shibai",
        pk = "pk",
        dg = "dg",
        shunzi = "shunzi",
        wangzha = "wangzha",
        wmpzz = "wmpzz",
        zhadan = "zhadan",
        jcbyTurret = "jcbyTurret",
        xiazhushou = "xiazhushou",
        hhdz = "hhdz",
        dzpk = "dzpk",
        erbagan = "gan28",
        hlgz = "hlgz",
        hhdzVS = "hhdzVS",
        jcbyHit = "jcbyHit",
        WaterWave = "WaterWave",
        yuchaolailin = "yuchaolailin",
        jcbyBomb = "jcbyBomb",
        jcbyAuto = " jcbyAuto",
        jcbyding = "jcbyding",
        jcbyGold = "jcbyGold",
        jcbyFlash = "jcbyFlash",
        jcbyLizi = "jcbyLizi",
        jcby1 = "jcby1",
        jcby2 = "jcby2",
        jcby3 = "jcby3",
        jcbyDie = "jcbyDie",
        gan28_Dice = "gan28_Dice",
        gan28_Xipai = "gan28_Xipai",
        ddzfuhao = "ddzfuhao",
        ddzpingmin = "ddzpingmin",
        ddztiyan = "ddztiyan",
        dzpkChip = "dzpkChip",
        dzpkFrame = "dzpkFrame",
        dzpkWaitBegin = "dzpkWaitBegin",
        dzpkWin = "dzpkWin",
        dzpkWinFrame = "dzpkWinFrame",
        guizuchang = "guizuchang",
        jcbyfuhao = "jcbyfuhao",
        jcbyguizu = "jcbyguizu",
        jcbypingmin = "jcbypingmin",
        jcbytiyan = "jcbytiyan",
        quickStart = "quickStart",
        qznnCaijin = "qznnCaijin",
        qznnTishi = "qznnTishi",
        renwu = "renwu",
        zjhfuhao = "zjhfuhao",
        zjhpingmin = "zjhpingmin",
        zjhtiyan = "zjhtiyan",
        zjhPK = "zjhPK",
        hlgzDice = "hlgz_Dice",
        hlgzWord = "hlgz_Word",
        huangjiachang = "huangjiachang",
        tongchi = "tongchi",
        tongpei = "tongpei",
        jcbyBossCome = "jcbyBossCome",
        jcby4 = "jcby4",
        bcbmResult = "bcbmResult",
        jsysResult = "jsysResult",
        dzpkFuhao = "dzpkFuhao",
        dzpkPingmin = "dzpkPingmin",
        brnnjiepai = "brnnjiepai",
        brnnCaijin = "brnnCaijin",
        errenCardGirl = "errenCardGirl",
        fkbyGirl = "fkbyGirl",
        lhdWinFrame = "longhudou_WinFrame",
        niuniuGirl = "niuniuGirl",
        sssGirl = "sssGirl",
        yydbGirl = "yydbGirl",
        sgjGoldTurn = "sgjGoldTurn",
    }
    const enum DbNameTp {
        erbaGang = "dating_erbagang",
        baozha = "longhudou_lizi_baozha",
        beishu = "beishu",
        bcbm = "dating_bengchibaoma",
        bjl = "dating_baijiale",
        brnn = "dating_bairenniuniu",
        brnnLose = "bairenniuniu_paizhuo_lose",
        brnnWin = "bairenniuniu_paizhuo_win",
        chuntian = "chuntian",
        ddzfuhao = "xinhuang_jinchanbuyu_fuhaochan",
        ddzpingmin = "xinhuang_doudizhu_pingmingchan",
        ddztiyan = "xinhuang_doudizhu_tiyanchang",
        dg = "pk_daoguang",
        doudizhu = "dating_doudizhu",
        dizhuSign = "doudizhu_paizhuo_dizhu_biaoshi",
        dzpk = "dating_dezhoupuke",
        allin = "allin",
        dzChip = "chouma",
        jiantou = "jiantou",
        waikuang = "allin_waikuang",
        WaitBegin = "dengdaikaishi",
        win = "youwin",
        winFrame = "shengliwaikuang",
        left = "left_",
        crash = "pengzhuanglizi",
        right = "right_",
        xipai = "28gang_xipai",
        fanchuntian = "fanchuntian",
        feiji = "feiji",
        BeginSoon = "zhajinhua_youxijijiangkaishi",
        guizuchang = "xinhuang_zhajinhua_guizuchang",
        guzhiyizhi = "guzhiyizhi",
        hhmf = "dating_heihongmeifang",
        hhdzVS = "honghheidazhan_VS",
        hlgz = "dating_huanletouzi",
        dice1 = "touzi_01_0",
        dice2 = "touzi_02_0",
        dice3 = "touzi_03_0",
        dizuo = "touzi_dizuo",
        gaizi = "touzi_gaizi",
        wenzi1 = "kaishai_wenzi_",
        wenzi2 = "kaishai_wenzi_0",
        baozi = "kaishai_wenzi_baozi",
        da = "kaishai_wenzi_da",
        db = "kaishai_wenzi_db",
        lizi = "kaishai_wenzi_lizi",
        xiao = "kaishai_wenzi_xiao",
        hhdz = "dating_hongheidazhan",
        huangjiachang = "xinhuang_zhajinhua_huangjiachang",
        huolongzhu = "huolongzhu2",
        hlBomb = "huotongbaozhayan",
        dropGold = "xiajinbiyu",
        autoFire = "buyuzidongfapao",
        bomb = "buyu_baozha",
        bomb1 = "baozhagai_1",
        bomb2 = "baozhagai_4",
        bomb3 = "baozhagai_5",
        bomb4 = "dayubaozha",
        bomb5 = "dayubaozha2",
        bomb6 = "dayubaozha3",
        bomb7 = "hongyubaozha",
        bomb8 = "huotongbaozha",
        bomb9 = "shenshuizhadan_baozha",
        bomb10 = "xingxingbaozha",
        die = "xiaoyusiwang",
        ding = "dingzi",
        falsh = "hongyu_flash",
        byFuhao = "xinhuang_jinchanbuyu_fuhaochan",
        dropFrame = "GoldDropFrame",
        GoldPlate0 = "GoldPlate0",
        GoldPlate1 = "GoldPlate1",
        byGuizu = "xinhuang_jinchanbuyu_guizuchan",
        hit = "jinchanbuyu_paotai_jizhong",
        byHuangjia = "xinhuang_jinchanbuyu_huangjiac",
        lizi1 = "hongyulizi",
        lizi2 = "lihualizi1",
        lizi3 = "lihualizi2",
        lizi4 = "lihualizi3",
        byPingmin = "xinhuang_jinchanbuyu_pingmingc",
        byTiyan = "xinhuang_jinchanbuyu_tiyanchan",
        attack = "attack",
        stand = "stand",
        jcby = "dating_jinchanbuyu",
        jsys = "dating_jinshayinsha",
        liandui = "liandui",
        lhd = "dating_longhudou",
        mbdc = "mubiaodacheng",
        pingju = "paizhuo_pingju",
        pk = "PK",
        quickStart = "xinhuang_kuaisukaishi",
        caijin = "xinhuang_togbiniuniu_caijincua",
        huanpai = "huanpai",
        qiangzhuang = "qiangzhuang",
        xiazhu = "xiazhu",
        girl = "xinhuang_xuanchang_nvren",
        robcow = "dating_qiangzhuangniuniu",
        shengli = "paizhuo_shengli",
        shibai = "paizhuo_shibai",
        shunzi = "shunzi",
        kaipai = "common_paizhuo_kaipai",
        kaishaile = "common_paizhuo_kaishaila",
        beginBet = "common_paizhuo_kaishixiazhu",
        stopBet = "common_paizhuo_tingzhixiazhu",
        gameBegin = "common_paizhuo_youxikaishi",
        touxiang = "zhongjiang_touxiang",
        vs = "longhudou_vs",
        wangzha = "wangzha",
        WaterWave = "WaterWave_1",
        wmpzz = "wanmingpeizhuozhong",
        wuhuaniu = "qiangzhuangniuniu_wuhuaniu",
        xiazhushou1 = "zhajinhua_xiazhu_shou_xaizhu01",
        xiazhushou2 = "zhajinhua_xiazhu_shou_xaizhu02",
        yuchaolailin = "buyu_yuchaolailin",
        zhadan = "zhadan",
        zhajinhua = "dating_zhajinhua",
        zhuang = "qiangzhuangniuniu_zhuang",
        zjhFuhao = "xinhuang_zhajinhua_fuhaochang",
        zjhPingmin = "xinhuang_zhajinhua_pingmingchang",
        zjhLose = "zhajinhua_pk_lose",
        zjhWin = "zhajinhua_pk_win",
        zjhTiyan = "xinhuang_zhajinhua_tiyanchang",
        tongchi = "paizhuo_tongchi",
        tongpei = "paizhuo_tongpei",
        BossCome = "jinchanbuyu_bosslaixi",
        huolongzhu1 = "huolongzhua",
        baoma = "benchibaoma_jiesuan_baoma0",
        baoshijie = "benchibaoma_jiesuan_baoshijie0",
        benchi = "benchibaoma_jiesuan_benchi0",
        dazhong = "benchibaoma_jiesuan_dazhong0",
        gezi = "jinshayinsha_jiesuan_gezi",
        houzi = "jinshayinsha_jiesuan_houzi",
        jinsha = "jinshayinsha_jiesuan_jinsha",
        kongque = "jinshayinsha_jiesuan_kongque",
        laoying = "jinshayinsha_jiesuan_laoying",
        shizi = "jinshayinsha_jiesuan_shizi",
        jsystongchi = "jinshayinsha_jiesuan_tongchi",
        jsystongpei = "jinshayinsha_jiesuan_tongpei",
        tuzi = "jinshayinsha_jiesuan_tuzi",
        xiongmao = "jinshayinsha_jiesuan_xiongmao",
        yingwu = "jinshayinsha_jiesuan_yingwu",
        yinsha = "jinshayinsha_jiesuan_yinsha",
        dzpkFuhao = "deizhoupuke_fuhaochang",
        dzpkPingmin = "deizhoupuke_pingmingchang",
        brnnjiepai = "jiepaidonghua",
        brnnCaijin = "xinhuang_togbiniuniu_caijincua",
        errenCardGirl = "xh_xuanchangnvren_errenqipai",
        fkbyGirl = "xh_xuanchangnvren_fengkuangbuy",
        lhdWinFrame = "longhudou_poker_win_waikuang",
        niuniuGirl = "xh_xuanchangnvren_niuniu",
        sssGirl = "xh_xuanchangnvren_shisanshui",
        yydbGirl = "xh_xuanchangnvren_yiyuanduobao",
        sgjGold = "shuiguojijinbizhuan",
    }
    const enum ParticleTp {
        starbomb = "starbomb",
        golddrop = "golddrop",
    }
    const enum openFunTp {
        benefits = 1,
        agency = 2,
        bindPolite = 3,
        firstRechange = 4,
        sevenDay = 5,
        earnings = 6,
        shop = 7,
        safeBox = 8,
        kefu = 9,
        activity = 10,
        changeAcc = 11,
        wallet = 12,
    }
    const enum hallFunTp {
        limitReward = 1,
        bindReward = 2,
        firstRechange = 3,
        allAgent = 4,
        sevenDay = 5,
        runWater = 6,
    }
    const enum dynamicBtnTp {
        sevenDayReward = 1,
        limitReward = 2,
        extension = 3,
        activity = 4,
        gameRecord = 5,
        bindAcc = 6,
        onlineReward = 7,
        rebate = 8,
        relief = 9,
        wallet = 10,
    }
}
declare module game {
    interface ParticlePropConf {
        key: string;
        bb: number;
        br: number;
        rb: number;
        rr: number;
        eb: number;
        er: number;
        ease: string;
    }
    interface ParticleColorConf {
        key: string;
        bb: number;
        br: number;
        rb: number;
        rr: number;
        eb: number;
        er: number;
        ease: string;
    }
    interface RoomCardOptionConf {
        fieldNm: string;
        fieldNm1: string;
        isMoneyBase: number;
        isSpc: number;
        desc: string;
        type: number;
        option: string[];
    }
    interface OnLineTimesConf {
        id: number;
        time: number;
        pre: number;
    }
    interface TipsTypeConf {
        id: number;
        type: number;
        show: number;
    }
    interface GmdConf {
        id: number;
        nm: string;
        file: string;
        icon: string;
        gameId: number;
        class: number;
        hasCN: number;
        isFriendGm: number;
        isHot: number;
        isNewGame: number;
        class2: number[];
        isFakeIcon: number;
        isJumpWeb: number;
        orientation: string;
    }
    interface QuestConf {
        id: number;
        name: string;
        desc: string;
        gameID: number[];
        default: number;
        weight: number;
        Style: number;
        class: number;
        type: number;
        completeType: number;
        completeCount: number;
        completeParam: number;
        nextQuestID: number;
        isSaveCount: number;
        awardItemID: number;
        awardItemCount: number;
        isSet: number;
        goTo: number;
        group: number;
        template: number;
        index: number;
        icon1: string;
        IsCommon: number;
    }
    interface PluginsConf {
        id: number;
        nm: string;
        file: string;
        ver0: string;
        ver1: string;
    }
    interface ParticleConf {
        id: string;
        einte: number;
        emax: number;
        dur: number;
        oneMin: number;
        oneMax: number;
        src: string;
        blendMode: number;
        pcls: string;
        anchor: {
            x: number;
            y: number;
        };
        prop: {
            [key: string]: ParticlePropConf;
        };
        color: {
            [key: string]: ParticleColorConf;
        };
    }
    interface VIPProfitConf {
        VipLv: number;
        VipExp: number;
        OnlineReward: number;
        MaxGiftslimit: number;
        GiveTicket: number;
        DailyLottery: number;
    }
    interface PerformConf {
        Level: number;
        PButton: number;
        PTop: number;
        Rate: number;
        Describe: string;
    }
    interface ExtendConf {
        id: number;
        text: string;
        isImg: number;
        x: number;
        y: number;
    }
    interface ExtendPlatConf {
        id: number;
        text: string;
        isImg: number;
        x: number;
        y: number;
    }
    interface ExtendPlatHConf {
        id: number;
        text: string;
        isImg: number;
        x: number;
        y: number;
    }
    interface OpenConf {
        id: number;
        isOpen: number;
        api: number;
    }
    interface HelpShowConf {
        id: number;
        text: string;
        isImage: number;
        x: number;
        y: number;
        size: number;
        rid: number;
    }
    interface NewHelpShowConf {
        id: number;
        text: string;
        isImage: number;
        x: number;
        y: number;
        size: number;
        rid: number;
    }
    interface HelpShow1Conf {
        id: number;
        text: string;
        isImage: number;
        x: number;
        y: number;
        size: number;
        rid: number;
    }
    interface TipControlConf {
        txt: string;
        os: number;
    }
    interface HallFunPopConf {
        ID: number;
        WindowName: any;
        Sort: number;
        Probability: number;
        IsShow: number;
    }
    interface HallRepairConf {
        id: number;
        charImg: string;
        btnImg: string;
        isIOS: number;
    }
    interface SafeBoxRuleConf {
        id: number;
        text: string;
        isImg: number;
        x: number;
        y: number;
    }
    interface PerFormDataConf {
        Gameid: number;
        PerformanceRate: string;
        Desc: string;
        GameName: string;
    }
    interface RoomCardConf {
        id: number;
        playNum: number;
        option: RoomCardOptionConf[];
    }
    interface DynamicBtnConf {
        id: number;
        nm: string;
    }
    interface FriendRuleConf {
        id: number;
        text: string;
        isImg: number;
        x: number;
        y: number;
    }
    interface HlhGmsConf {
        id: number;
        idx: number;
        nm: string;
    }
    interface HomeSkinConf {
        nm: string;
        skin: {
            0: string;
            1: string;
            2: string;
            3: string;
            4: string;
            5: string;
        };
    }
    interface TicketRecordConf {
        id: number;
        title: string;
        type: number;
        fieldNm: string[];
    }
}
declare module game {
    class UIDBAni extends cui.BaseContainer {
        protected _arm: dragonBones.EgretArmatureDisplay;
        protected _playData: {
            ani?: string;
            times?: number;
            frame?: number;
            stopFrame?: number;
        };
        protected _dbNm: string;
        autoPlay: boolean;
        $hitTest(stageX: number, stageY: number): egret.DisplayObject;
        dbNm: string;
        protected childrenCreated(): void;
        protected loadData(): void;
        protected onLoadFin(succ: boolean, skName: string): void;
        setSlotDisplay(nm: string, display: cui.IBaseCtrl): void;
        play(aniNm?: string, playTimes?: number): void;
        gotoAndPlay(aniNm: string, frame?: number, playTimes?: number): void;
        private _play();
        private _stop();
        gotoAndStop(frame: number, aniNm?: string): void;
        stop(): void;
        protected onAniFin(e: any): void;
        protected freeArm(): void;
    }
}
/**
 * Created by wjdeng on 2015/9/2.
 */
declare module game {
    let dataMgr: DataManager;
    class DataManager {
        preload: boolean;
        accMo: AccountModel;
        gameMo: GameModel;
        soundMo: SoundModel;
        generalMo: GeneralModel;
        mailMo: MailModel;
        gsMo: GameStateModel;
        actMo: ActivityModel;
        guildMo: GuildModel;
        networkDelay: number;
        private _inited;
        private _needLoads;
        private _heartTag;
        private _receivedNet;
        private _sendNetTime;
        private _heartDelayTag;
        private _isShow;
        constructor();
        private createMo(name, modelCls);
        loadConfs(): void;
        init(): void;
        private startHeart();
        stopHeart(): void;
        private heartSync();
    }
}
declare module game {
    let dbMgr: DBoneManager;
    class DBoneManager {
        static resPath: string;
        static timeScale: number;
        private _factory;
        private _usecnts;
        private _loadings;
        constructor();
        private incUsecnt(skName);
        private decUsecnt(skName);
        createArm(skName: string): dragonBones.EgretArmatureDisplay;
        createArmAsync(skName: string, finBack: (arm: dragonBones.EgretArmatureDisplay, skName: string) => void, thisObj: any): void;
        loadAnimate(skName: string, callback?: (succ: boolean, skName: string) => void, thisObj?: any): void;
        getUrl(skName: string): string;
        private loadResImpl(skName, callback?, thisObj?);
        private onLoadResFin(data, skName);
        onArmDispose(arm: dragonBones.EgretArmatureDisplay): void;
        doGC(): void;
    }
}
declare module game {
    const enum SceneType {
        NONE = 0,
        LodingScene = 1,
        LoginScene = 2,
        GameScene = 3,
    }
    const enum DelayFlag {
        normal = 0,
        newday = 1,
    }
    let gameMgr: GameManager;
    class GameManager {
        private _loadStep;
        private _stepState;
        constructor();
        begin(main: IMainDelegate): void;
        private _main;
        private _scTp;
        private _curScene;
        gotoScene(tp: SceneType): void;
        private startLogin();
        private startGame();
        private loadUpdate();
        private setStepState(state);
        private tryStartStep();
        setTimeScale(val: number): void;
        beginScaleMode(): void;
        endScaleMode(): void;
    }
}
declare module game {
    class UIDomBase extends cui.Group {
        protected _node: HTMLDivElement;
        protected _ele: HTMLElement;
        private _mx;
        constructor();
        dispose(): void;
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        $onRemoveFromStage(): void;
        private onResize();
        validateDL(): void;
        private adjustPos();
    }
    class UIIFrame extends UIDomBase {
        constructor();
        src: string;
    }
}
declare module game {
    interface ILoadShow {
        showBusy(): any;
        hideBusy(): any;
    }
    /**
     * 资源管理器
     *
     * */
    let resMgr: ResManager;
    class ResManager {
        static getConfUrl(name: string): string;
        static loadVer(fileNm: string, cb: (succ: boolean, jsver?: string, gver?: string, zip?: any) => void, tar: any): void;
        private static _resData;
        static loadRes(fileNm: string, cb: (succ: boolean) => void, tar: any): void;
        private static _loadNextRes();
        private static _loadResCom(event);
        static loadTheme(fileNm: string, cb: (succ: boolean) => void, tar: any, gpNm?: string): void;
        static loadGroup(groupNm: string, cb: () => void, tar: any): void;
        loadShow: ILoadShow;
        private _paths;
        private _parses;
        private _loadConf;
        private _loadcnt;
        private _loadIcons;
        constructor();
        initResConf(data: any): void;
        getImgUrl(nm: string, isJpg: boolean): string;
        /**
         *
         * @param cdnPath 云平台cdn地址
         */
        getYptUrl(cdnPath: string): string;
        getNoHomeUrl(url: string): string;
        getNoticeUrl(noticePath: string): string;
        getLoadCnt(): number;
        getParseCnt(): number;
        loadConf(url: string, fin: Function, tar: any, isURL?: boolean): void;
        private loadConfFin(data, url);
        private parseConf();
        preloadFin: boolean;
        startPreload(): void;
        private compGameList(a, b);
        private _startPreload();
    }
}
declare module game {
    class EffectNode extends cui.Group {
        useOnce: boolean;
        protected _inPly: boolean;
        protected _cb: {
            fun: (tar: any) => void;
            tar: any;
        };
        constructor();
        setFinish(cb: (tar: any) => void, tar: any): void;
        play(): void;
        protected aniFin(): void;
        dispose(): void;
    }
    class ImgEffect extends EffectNode {
        protected _img: cui.Image;
        protected _aniTm: number;
        protected _tag: number;
        constructor(img: cui.Image, showTm: number);
        play(): void;
        protected aniFin(): void;
        dispose(): void;
    }
    class ClipEffect extends EffectNode {
        protected _anitp: number;
        protected _clip: TRain.MovieClip;
        constructor(anitp: number, aniName: string);
        protected onLoadDataFinish(clipData: TRain.MovieClipData, anitp: number): void;
        play(): void;
        protected aniFin(): void;
        dispose(): void;
    }
    class DBEffect extends EffectNode {
        protected _arm: dragonBones.EgretArmatureDisplay;
        protected _aniNm: string;
        protected _playTime: number;
        /**
         * - 播放指定动画。
         * @param name - 龙骨资源名字
         * @param aniNm - 动画数据名称。 （如果未设置，则播放默认动画，或将暂停状态切换为播放状态，或重新播放之前播放的动画）
         * @param playTimes - 循环播放次数。 [-1: 使用动画数据默认值, 0: 无限循环播放, [1~N]: 循环播放 N 次] （默认: -1）
         */
        constructor(name: string, aniNm?: string, playTime?: number);
        play(): void;
    }
    class EffectLayer extends cui.Group {
        delegate: LayerDelegate;
        private _deque;
        dispose(): void;
        isPlaying(): boolean;
        addEffect(node: EffectNode): void;
        showEffect(node: EffectNode): void;
        clearAll(): void;
        $childRemoved(child: egret.DisplayObject, index: number): void;
        private update();
    }
}
declare module game {
    const enum AccountMo_EVT {
        login_fin = "login_fin",
        login_svr_fin = "svr_fin",
        reg_phone_fin = "reg_fin",
        bin_phone_fin = "bin_fin",
        reset_pwd_fin = "resetPwd_fin",
        check_svr_info = "check_fin",
        update_ip_info = "up_ip_info",
        bind_fail_fin = "bind_fail",
        update_notice = "update_notice",
    }
    const enum LoginInfoErr {
        ipBlock = "Login_IpBlock",
        accIsNotExt = "Login_AccIsNotExists",
        verifyErr = "VerifyError",
        accIsExt = "Login_AccIsExists",
        accOrPwdErr = "Login_AccOrPwdError",
        accIsInvalid = "Login_AccIsInvalid",
        svrLoadErr = "Login_DownloadError",
        sysErr = "Login_SystemError",
        hardwareEmp = "Login_HardwareIsEmpty",
        Login_AccountIsFormal = "Login_AccountIsFormal",
        Login_DeviceIDError = "Login_DeviceIDError",
        Login_PhoneError = "Login_PhoneError",
        Login_ChannelIdError = "Login_ChannelIdError",
        Login_PackageIdIsNull = "Login_PackageIdIsNull",
        Login_LoginDisable = "Login_LoginDisable",
        Login_OpenIdError = "Login_OpenIdError",
        Login_OpenSignError = "Login_OpenSignError",
    }
    const enum NotifyMo_EVT {
        got_notify = "new",
        CONN_LOGINFAIL = "loginfin",
        CHAT_CLOSE = "chat_close",
    }
    const enum verifyType {
        reg = 1,
        resetPwd = 2,
    }
    const enum accountType {
        wechat = "wechat",
    }
    interface AccData {
        nm: string;
        pwd: string;
        isHasPwd: boolean;
    }
    class AccountModel extends DataModel {
        accNm: string;
        firstGold: number;
        isAuto: boolean;
        channel: string;
        private _token;
        protected _data: NET_CONF.msg_account_info;
        private _notifys;
        private _noticeDatas;
        private _bindReward;
        private _accArrs;
        gameId: number;
        private _lastId;
        private _roomCardList;
        private _sortClass;
        private _lastGms;
        private _webHardwareId;
        private _apiHotNum;
        private _isChgQR;
        private _centerGms;
        private _transferGms;
        private _startTm;
        private _heartTag;
        constructor();
        lastId: number;
        getApiHotNum(): number;
        getLastGms(): string[];
        getBindReward(): number;
        getIsChgQR(): boolean;
        getSortCls(): number[];
        getData(): NET_CONF.msg_account_info;
        readonly isApi: boolean;
        getNoticeDatas(): any[];
        apiLogin(): void;
        wxLogin(): void;
        private setGmsList(list);
        getRoomCardList(room_type: number): NET_CONF.msg_roomcard_config[];
        getCenterGms(): NET_CONF.msg_game_info[];
        getTransferGms(): NET_CONF.msg_game_info[];
        isCenterGm(gameid: number): boolean;
        isTransferGm(gameid: number): boolean;
        /**
         *
         * @param nm  游客则传null
         * @param pwd  游客则传null
         */
        verlogin(nm: string, pwd: String): void;
        getLocals(): string;
        private setLocals(data);
        /**
         *
         * @param nm 手机号
         * @param pwd 密码
         * @param isRemember 记住密码
         */
        login(nm?: string, pwd?: string, isRemember?: boolean): void;
        private setAccPwd(nm, pwd);
        private formatAccInfo(accArrs);
        getPwdByPhone(phone: string): string;
        getAccInfos(): AccData[];
        setIdToLocal(playId: number): void;
        idHaveLocal(playId: number): boolean;
        protected reLogin(): void;
        resetPassward(phone: string, pwd: string, code: string): void;
        registered(phone: string, pwd: string, code: string): void;
        bind(phone: string, pwd: string, nm: string, code: string): void;
        checkCode(phone: string, opType: number, playId: string): void;
        CheckNoticeInfo(): void;
        private deletePack(datas);
        getChannelInfo(): void;
        private regNetHandle();
        private doConnect();
        private onNotify(data);
        private playKick(data);
        popNotify(): NET_CONF.s2c_w2c_notify;
        private onT2TStart();
        private printLog(connNm, closeNm);
        private calInterValTm(nm);
        private onConnRes(data);
        askLogin(): void;
        private onLoginRes(data);
        changeHead(icon: string): void;
        private onHeadChange(data);
        changeNickName(nickname: string): void;
        private onNickNameChange(data);
        askVipInfo(): void;
        askVipAcInfo(): void;
        askVipInfoResult(data: NET_CONF.s2c_req_vip_info_result): void;
        askVipAcInfoResult(data: NET_CONF.s2c_activity_vip_ac_list_result): void;
        askRewardInfo(): void;
        askRewardResult(data: NET_CONF.s2c_activity_reward_log_result): void;
        changeSex(sex: number): void;
        askSynGold(): void;
        updateGold(data: NET_CONF.s2c_req_sync_gold_result): void;
        private onSexChange(data);
        private onBindReward(data);
        updateGetCount(): void;
        havePopNotice(): boolean;
        haveLoginNotice(): boolean;
        isNewNotice(nId: string): boolean;
        isNoRead(nId: string): boolean;
        getNoReadNum(state?: number): number;
        askLeaveGm(): void;
        regLeaveHandle(cb: Function, tar: any): void;
        unRegLeaveHandle(): void;
    }
}
declare module game {
    interface actDataInfo {
        bindGold: number;
        bindActList: Array<{
            tId: number;
            uId: number;
            name: string;
            sort: number;
        }>;
        reviveList: Array<{
            tId: number;
            uId: number;
            name: string;
        }>;
        onlineAwd: {
            svrTm: number;
            totalTm: number;
            uId: number;
        };
    }
    class ActivityModel extends Notification {
        protected _data: any;
        protected _lProps: (string | number)[];
        /**
         *
         * @param data bindGold:number,actList:{tId:number,uId:number,name:string},onlineAwd:{svrTm:number,totalTm:number,uId:number}
         */
        setData(data: actDataInfo): void;
        getData(): actDataInfo;
        getVal(key: string | number): any;
        setVal(key: string | number, val: any): any;
        addPropListener(propKey: string | number, fun: (param1?: any) => void, tar: any): void;
        rmvPropListener(propKey: string | number, tar: any): void;
    }
}
declare module game {
    interface IGameModule {
        init(): void;
        start(data: any): void;
        end(): void;
        onBackClk(): boolean;
        onReConnect(): void;
        close(): void;
        onGameShow(): void;
    }
    type GmdInfo = {
        id: number;
        conf: GmdConf;
        inited: boolean;
        started?: boolean;
        firstShow?: boolean;
        gm?: IGameModule;
        data?: any;
        theme?: boolean;
        res?: boolean;
        gp?: boolean;
        ver?: boolean;
        loading?: number;
        errCode?: number;
        jsVer?: string;
        gVer?: string;
        zipMD5?: any;
    };
    const enum GameMo_EVT {
        start_load_per = "st_per",
        start_fin = "fin",
        update_gmd_fin = "up_gmd_fin",
        update_gmd_progress = "up_gmd_pro",
        moload_fin = "moload_fin",
    }
    const enum GMD_UPDATE_STATE {
        NONE = 0,
        NEED_UPDATE = 1,
        UPDATING = 2,
        FAIL = 3,
    }
    const enum GMD_UPDATE_FIN_CODE {
        OK = 0,
        NO_FUN = 1,
        VER_FORMAT_ERR = 2,
        FILE_LOADER_ERR = 3,
        UNZIP_ERR = 4,
        ZIP_MD5_ERR = 5,
        VER_FILE_ERR = 6,
    }
    const enum CODE_TYPE {
        GMD = 0,
        MO = 1,
    }
    const enum ModuleName {
        activity = "activity",
        recharge = "recharge",
    }
    interface update_game_info {
        file: string;
        gameId: number;
        curVer?: string;
        newVer?: string;
        progress?: number;
        state?: GMD_UPDATE_STATE;
    }
    interface msg_game_info extends NET_CONF.msg_game_info {
        conf?: GmdConf;
        update?: update_game_info;
    }
    interface IMoModule {
        start(): void;
    }
    type MoInfo = {
        nm: string;
        onlyRes: boolean;
        fined?: boolean;
        started?: boolean;
        mo?: IMoModule;
        theme?: boolean;
        res?: boolean;
        gp?: boolean;
        ver?: boolean;
        loading?: number;
        jsVer?: string;
        zipMD5?: any;
        newVer?: string;
        curVer?: string;
        state?: GMD_UPDATE_STATE;
        errArgs?: {
            fin: MO_LOAD_FIN_CODE;
            arg1?: string;
        };
        loadNum?: number;
        isBtn?: boolean;
    };
    const enum MO_LOAD_FIN_CODE {
        OK = 0,
        NO_FUN = 1,
        VER_FORMAT_ERR = 2,
        FILE_LOADER_ERR = 3,
        UNZIP_ERR = 4,
        ZIP_MD5_ERR = 5,
        VER_FILE_ERR = 6,
        JS_FILE_ERR = 7,
        RES_FILE_ERR = 8,
        THEME_FILE_ERR = 9,
    }
    class GameModel extends DataModel {
        private _inGame;
        private _moList;
        private _upMoList;
        private _gmdConf;
        private _gmdList;
        private _curGMD;
        protected _data: msg_game_info[];
        private _dataList;
        private _fileUpList;
        private _upList;
        constructor();
        onLoadConf(data: any): void;
        getGmdConf(gid: confConsts.GameTp): GmdConf;
        getCurMoInfo(nm: string): MoInfo;
        hasRechangeMo(): boolean;
        private isNeedUpdate(newVer, curVer);
        startUpdateGmd(gid: confConsts.GameTp): void;
        stopUpdateGmd(gid: confConsts.GameTp): void;
        private onUpdateProgess(nm, per);
        private onUpdateFin(nm, args);
        private onEnterGame();
        setData(data: any): void;
        getData(): msg_game_info[];
        /**
         * 是否在子游戏中显示七日奖励 游戏个数小于8个不显示
         */
        isShowSD(): boolean;
        /**
         *
         * @param gameId
         */
        isOpenRmCard(): boolean;
        getGameData(gameId: confConsts.GameTp): msg_game_info;
        private getUpdateData(file, gameId);
        private handlerData();
        goBack(): boolean;
        getCurGMD(): GmdInfo;
        private getGmdInfo(gameId);
        startGMD(gameId: confConsts.GameTp, data?: any): void;
        closeGMD(): void;
        onGameShow(): void;
        private onLoadErr(gmdInfo, err);
        private loadGMD(gmdInfo);
        private loadJs(gmdInfo);
        private tryLoadFin(gmdInfo);
        private loadFin();
        isMoLoaded(nm: string): boolean;
        skipMoUpdate(nm: string): void;
        initMo(nm: string, data: {
            gVer?: string;
            zip?: any;
            jsVer?: string;
            res?: boolean;
            theme?: boolean;
            gp?: boolean;
        }): void;
        private initMoVer(moInfo, gVer, zip, jsVer);
        loadModule(nm: string, onlyRes?: boolean): void;
        private loadMo(moInfo);
        private onUpdateMoFin(nm, args);
        private tryLoadMoFin(moInfo, args?);
    }
}
declare module game {
    const enum GameStateMo_EVT {
        CFG_UPDATE = "cfg_update",
        CHECK_STATE = "check_state",
        GS_CONN = "gs_conn",
    }
    const enum GoodRoad_EVT {
        ROAD_ALL = "road_all",
        ROAD_APPEND = "road_append",
    }
    class GameStateModel extends DataModel {
        private _inConn;
        private _roomCfgs;
        private _goodRoadCfgs;
        init(): void;
        askHaoLu(): void;
        askChangeState(state: any): void;
        askHistory(gameId: any, idx?: number, count?: number): void;
        startConn(): void;
        askRoomCfg(gameId: number): void;
        checkGameState(gameId: number): void;
        private getCheckStateId(gameId);
        getRoomCfg(gameId: number): NET_CONF.s2c_req_room_config_result;
        rmvRoomCfg(): void;
        getGoodRoadCfgs(): NET_CONF.gs_haolu_info[];
        rmvGoodRoadCfgs(): void;
        endConn(): void;
        restCoon(): void;
    }
}
declare module game {
    interface IGoodRdItem {
        roomid: number;
        handicapid: number;
        route: game.RouteModel;
    }
    interface ITaskItem {
        questid: number;
        count: number;
        received: boolean;
        cfg: QuestConf;
    }
    interface IBindBenData {
        bindPhone?: boolean;
        binGold?: number;
        benefitsLimit?: number;
        benefitsGold?: number;
        benefitsCount?: number;
    }
    const enum General_EVT {
        Quest_List_Result = "quest_list",
        Notify_Achieve_Share = "achieve_share",
        UpdateTaskList = "UpdateTaskList",
        UpdateTaskList2 = "UpdateTaskList2",
        OpenTaskToday = "OpenTaskToday",
        GetFaqResult = "GetFaqResult",
        GetFaqDetailResult = "GetFaqDetailResult",
        GetadviceListResult = "GetadviceListResult",
        GetQuestReward = "GetQuestReward",
        ShowGameClass = "ShowGameClass",
        IsDone = "IsDone",
        GetVipInfoResult = "GetVipInfoResult",
        GetVipActivityResult = "GetVipActivityResult",
        GetGameRecordList = "GetGameRecordList",
        CHECK_BALANCE_RESULT = "CHECK_BALANCE_RESULT",
        ADD_SINGLE_GOLD_RESULT = "ADD_SINGLE_GOLD_RESULT",
        GetRebateList = "GetRebateList",
        GetRebateAward = "GetRebateAward",
        GetRebateDetail = "GetRebateDetail",
        Detail_Id_Back = "Detail_Id_Back",
        FilteSet = "FilteSet",
        FilteGet = "FilteGet",
    }
    const enum General_EVT_Dai {
        Gain_result = "Gain_result",
        GetGain = "GetGain",
        Perform = "Perform",
        PerformList = "PerformList",
        PerformChild = "PerformChild",
        PerformTeamlist = "PerformTeamlist",
        PerformTeamcreate = "PerformTeamcreate",
        PerformTeamupdate = "PerformTeamupdate",
        PerformTeaminfo = "PerformTeaminfo",
        updateUrl = "updateUrl",
        PerformConfig = "PerformConfig",
    }
    const enum General_EVT_Box {
        setBoxPassword = "set_box_password",
        enterBox = "enterBox",
        resetPass = "resetPass",
        log = "log",
        qu = "qu",
        cun = "cun",
    }
    const enum General_EVT_POP {
        Close = "close",
        backInfo = "backInfo",
        NewGuide = "guide",
    }
    const enum General_Evt_Wallet {
        Game_wallet_refrsh = "Game_wellet_refrsh",
        Depsit_wallet = "Depsit_wallet",
        WithDraw_wallet = "WithDraw_wallet",
        Single_to_other = "Single_to_other",
        Reflush_wallet = "Reflush_wallet",
    }
    class GeneralModel extends DataModel {
        isOpen: boolean;
        isDone: boolean;
        isget: boolean;
        partConf: {
            [key: string]: ParticleConf;
        };
        bindBenData: IBindBenData;
        private _questList;
        private _curDay;
        private _adviceList;
        private _questConf;
        private _openConfs;
        private _gainConf;
        private _xiShuConf;
        private _FAQConf;
        private _SafeBoxConf;
        private _safeBoxPwd;
        private _tempSafeBoxPwd;
        private _selfGold;
        private _cunGold;
        private _isFinish;
        private _isFind;
        private _gain;
        private _lastTime;
        private _logInfo;
        private _performsInfo;
        private _performsList;
        private _performsChild;
        private _performsTeamlist;
        private _performsTeamInfo;
        private _teamID;
        private _tag;
        private _vipConf;
        private _helpConf;
        private _helpConf1;
        private _tipConf;
        private _teamName;
        private _changeName;
        private _hallFunConfs;
        private _isOpenLimitRw;
        private _isPopSevenDay;
        private _hallRepairConfs;
        private _openShop;
        private _shareUrl;
        private _customChips;
        private _tipsConfs;
        private _onlineTmConfs;
        private _dynamicBtnConf;
        private _detailId;
        private _goodRdIdx;
        private _hlhGmsConfs;
        _routeRoadConfs: IGoodRdItem[];
        private _autoTranfer;
        private _walletList;
        private _curAskListTm;
        constructor();
        onLoadConf(data: any): void;
        readonly tipConf: TipControlConf[];
        curDay: number;
        openShop: boolean;
        getLimitList(): ITaskItem[];
        isOpenLimitRw: boolean;
        isFunOpen(tp: confConsts.openFunTp): boolean;
        getFunPopInfos(): HallFunPopConf[];
        getRepairConfs(): HallRepairConf[];
        getTipConf(id: number): TipsTypeConf;
        getDynamicConf(id: confConsts.dynamicBtnTp): DynamicBtnConf;
        getHlhGmsConf(): HlhGmsConf[];
        getSuggestList(): NET_CONF.msg_suggest[];
        getAllGold(): number;
        getQuestByID(id: number): QuestConf;
        getQuest(): {
            [key: string]: QuestConf;
        };
        setPerform(data: any): void;
        getPerform(): any;
        getDeatilId(): string;
        /**
         *
         * @param gameId 游戏id 如果传的游戏id在配置表中找不到 则返回 0
         * 返回值是一个系数的number，为0的时候就要在选场界面 显示"本场次不计入VIP与代理中心业绩"
         */
        getPerRate(gameId: number): number;
        getExtend(): ExtendConf;
        getSafeBoxRule(): SafeBoxRuleConf;
        getVipProfit(): VIPProfitConf;
        getHelpView(): HelpShowConf;
        getHelpView1(): HelpShow1Conf;
        getOnlineTmConf(): OnLineTimesConf[];
        setGain(gain: any): void;
        getGain(): number;
        setPwd(pwd: string): void;
        getPwd(): string;
        setTempPwd(pwd: string): void;
        getTempPwd(): string;
        setSelfGold(gold: any): void;
        getSelfGold(): number;
        setHasCunGold(gold: any): void;
        getHasCunGold(): number;
        setIsFinish(finish: any): void;
        getIsFinish(): boolean;
        setIsFind(find: any): void;
        getIsFind(): boolean;
        setCreateTeamName(name: string): void;
        getCreateTeamName(): string;
        setChangeTeamName(name: string): void;
        getChangeTeamName(): string;
        setPerformanceInfo(data: any): void;
        getPerformanceInfo(): any;
        setPerformanceList(data: any): void;
        getPerformanceList(): NET_CONF.msg_performance_info[];
        setPerformanceChild(data: any): void;
        getPerformanceChild(): NET_CONF.msg_performance_info;
        setPerformanceTeamlist(data: any): void;
        getPerformanceTeamlist(): NET_CONF.msg_performance_team[];
        setPerformTeamInfo(data: any): void;
        getPerformanceTeamInfo(): NET_CONF.msg_performance_team;
        setPerformXishu(data: NET_CONF.msg_performance_rate[]): void;
        getPerformXishu(): NET_CONF.msg_performance_rate[];
        setTeamId(teamId: any): void;
        getTeamId(): number;
        setCodeTag(tag: any): void;
        getCodeTag(): number;
        setShareUrl(url: string): void;
        getShareUrl(): string;
        setLogTimes(lastTime: number): void;
        getLogTimes(): number;
        setLogInfo(info: any): void;
        getLogInfo(): NET_CONF.SafeBoxLogInfo[];
        setCurGmGold(info: NET_CONF.msg_wallet_info): void;
        getCurGmGold(gameId: number): number;
        getAskWalletTm(): number;
        initRegHandle(): void;
        performanceConfigsResult(data: NET_CONF.s2c_performance_configs_result): void;
        performanceTeamInfoResult(data: NET_CONF.s2c_performance_team_info_result): void;
        private updateExtendUrl(data);
        performanceTeamUpdateResult(data: NET_CONF.s2c_performance_team_update_result): void;
        performanceTeamcreateResult(data: NET_CONF.s2c_performance_team_create_result): void;
        performanceTeamlistResult(data: NET_CONF.s2c_performance_team_list_result): void;
        performanceChildResult(data: NET_CONF.s2c_performance_child_result): void;
        performanceListResult(data: NET_CONF.s2c_performance_list_result): void;
        performanceInfoResult(data: NET_CONF.s2c_performance_info_result): void;
        getGainResult(data: NET_CONF.s2c_performance_gain_result): void;
        checkGainResult(data: NET_CONF.s2c_performance_check_gain_result): void;
        benefits(data: NET_CONF.s2c_benefits_result): void;
        getQuestlist(data: NET_CONF.s2c_get_questlist_result): void;
        notifyShare(data: NET_CONF.s2c_notify_share): void;
        shareReward(data: NET_CONF.s2c_receive_share_reward_result): void;
        taskReflush(data: NET_CONF.s2c_notify_task_reflush): void;
        getQuestReward(data: NET_CONF.s2c_receive_questreward_result): void;
        private checkAllOver();
        changeQuest(data: NET_CONF.s2c_change_quest): void;
        private OpenSafeBoxResult(data);
        private EnterSafeBoxResult(data);
        private ResetPasswordResult(data);
        private SafeboxLogResult(data);
        private SafeboxSecurityCodeResult(data);
        private DrawGoldResult(data);
        private DepositGoldResult(data);
        askSafeBoxLog(lastTime: number): void;
        askGetMoney(gold: number, pwd: string): void;
        askCunMoney(gold: number, pwd: string): void;
        askFindSafeBoxCode(pwd1: string, pwd2: string, safeCode: string): void;
        askOpenSafeBox(pwd1: string, pwd2: string): void;
        askEnterSafeBox(pwd: string): void;
        askSafeBoxCode(): void;
        askPerformanceConfig(): void;
        sendSearchTeam(team_id: any): void;
        sendChangeTeamName(optype: number, team_id: number, limit: number, nick_name: string): void;
        sendCreateTeam(count: number, nick_name: string): void;
        sendPerformTeamList(): void;
        sendPerformanceChild(player_id: any): void;
        sendPerformList(isFirst?: boolean): void;
        sendPerformanceInfo(): void;
        askPromoteUrl(channel_id: string, params: string): void;
        sendGetGain(): void;
        sendAskForGain(): void;
        sendBenefits(): void;
        sendGetQuestlist(isOpen?: boolean): void;
        sendshareReward(): void;
        sendWXshareTask(): void;
        sendGetQuestReward(questid: number): void;
        /**
         *
         * @param id 游戏id
         * 返回的是当前游戏id的自定义筹码
         */
        getCustomChips(id: confConsts.GameTp, roomId: number): number[];
        /**
         *
         * @param id
         * @param customList
         * @param WeightList
         *
         * 返回值 数组的第0位 缓存筹码列表是否存在于customList
         * 数组的第1位 默认筹码列表 （WeightList） 是否存在于customList
         */
        setCustomChips(id: confConsts.GameTp, roomId: number, chips: number[]): void;
        askHaoLuFilteSet(filte: number): void;
        askHaoLuFilteGet(): void;
        HaoLuFilteSetResult(data: NET_CONF.s2c_haolu_filte_set_result): void;
        HaoLuFilteGetResult(data: NET_CONF.s2c_haolu_filte_get_result): void;
        private Zupanlu(history);
        add(roomid: number, handicapid: number, data: number): void;
        setRoadData(roomid: number, handicapid: number, flag: boolean, roadData: any): void;
        getRouteRoad(): IGoodRdItem[];
        setRouteRoad(): void;
        getGoodRd(): number[];
        setGoodRd(data: string[]): void;
        getAutoTranFer(): boolean;
        setAutoTranFer(value: boolean): void;
        askRecordList(gameId: number): void;
        askRecordListResult(data: NET_CONF.s2c_gold_record): void;
        askAddSingleGold(gold: number): void;
        checkSingleBalance(): void;
        singleGoldResult(data: NET_CONF.s2c_single_add_gold_result): void;
        singlecheckResult(data: NET_CONF.s2c_single_check_balance_result): void;
        detailIdResult(data: NET_CONF.s2c_detailId_result): void;
        getTaskByDay(day?: number): ITaskItem[];
        setTaskByDay(index: number, day?: number): any;
        getRestReward(): number;
        sendAdviceReq(text: string): void;
        adviceReqResult(data: NET_CONF.s2c_suggestion_result): void;
        adviceListReq(): void;
        adviceListReqResult(data: NET_CONF.s2c_req_suggest_result): void;
        askFaq(): void;
        faqResult(data: NET_CONF.s2c_req_faq_result): void;
        askFaqDetail(index: number): void;
        faqDetailResult(data: NET_CONF.s2c_req_faq_detail_result): void;
        showGameClass(tag: number): void;
        askRebateList(): void;
        rebateListResult(data: NET_CONF.s2c_rebate_list_result): void;
        askRebateLog(): void;
        rebateLogResult(data: NET_CONF.s2c_rebate_log_result): void;
        askRebateAwd(): void;
        rebateAwdResult(data: NET_CONF.s2c_rebate_gain_result): void;
        askRebateDetail(ts: number): void;
        rebateDetailResult(data: NET_CONF.s2c_rebate_detail_result): void;
        askWalletList(isopen: boolean): void;
        askReflushWallet(gameId: number): void;
        askDepsitWallet(walletInfo: NET_CONF.msg_wallet_info): void;
        askDrawWallet(walletInfo: NET_CONF.msg_wallet_info): void;
        askSingleToOther(walletInfo: NET_CONF.msg_wallet_info): void;
        withdrawAllWallet(): void;
        enterGame(gameid: number): void;
        walletListResult(data: NET_CONF.s2c_wallet_list_result): void;
        depsitWalletResult(data: NET_CONF.s2c_deposit_wallet_result): void;
        drawWalletResult(data: NET_CONF.s2c_withdraw_wallet_result): void;
        singleOtherResult(data: NET_CONF.s2c_single_to_other_result): void;
        reflushWalletResult(data: NET_CONF.s2c_reflush_wallet_result): void;
    }
}
declare module game {
    const enum chairManOption {
        e_mot_agree = 1,
        e_mot_refuse = 2,
        e_mot_points = 3,
        e_mot_kick = 4,
        e_mot_dismiss = 5,
    }
    const enum memberOption {
        e_mot_quit = 1,
    }
    const enum msgType {
        e_gmt_join = 0,
        e_gmt_agree = 1,
        e_gmt_has_guild = 2,
        e_gmt_refuse = 3,
        e_gmt_quit = 4,
    }
    const enum memPropType {
        e_mp_online = 1,
        e_mp_gaming_id = 2,
    }
    const enum roomCardType {
        ert_gold = 0,
        ert_points = 1,
        ert_guild_gold = 2,
        ert_guild_points = 3,
    }
    const enum Guild_EVT_POP {
        JOIN_FRIEND_CIRCLE = "join_friend_circle",
        MSG_BACK = "msg_back",
        MEMBER_CHANGE = "member_change",
        EXIT_GUILD = "exit_guild",
        POINT_RECORD_BACK = "point_back",
        ASK_RECORD = "ask_record",
        MOD_GUILD_NAME = "mod_guild_name",
        ROOM_LIST_UPDATE = "room_list_update",
        UP_NOTICE = "up_notice",
        CHAIRMAN_REFUSED = "chairman_refused",
        EXTENDS_ADD = "extends_add",
        UP_DOWN_POINT = "up_down_point",
        ROOM_CARD = "room_card",
        replay_history = "replay_history",
        replay_detail = "replay_detail",
    }
    class GuildModel extends DataModel {
        private _guildData;
        private _askRecords;
        private _msgRecords;
        private _pointsRecords;
        private _friendRuleConfs;
        private _roomLists;
        private _roomCards;
        private _guildAsks;
        private _expendDatas;
        private _recordDatas;
        private _joinGuildId;
        private _isChairMan;
        private _detailData;
        private _oldMusicState;
        constructor();
        onLoadConf(data: any): void;
        guildAsks: NET_CONF.guild_ask_record[];
        detailData: IShowRecordItem;
        getFriendRuleConfs(): FriendRuleConf[];
        getRoomCardConf(id: confConsts.GameTp): RoomCardConf;
        private initRegHandle();
        initGuildHandle(): void;
        isChairman(): boolean;
        /**
         *
         * @param type 房卡还是上分数据
         */
        getDataByType(type: number, monthId: number, curDay: number): any[];
        getExdDayData(monthId: number, dayId: number): any[];
        /**
         *
         */
        /**
         *
         * @param monthId 月份id
         */
        getExdMonthData(monthId: number): any[];
        /**
         *
         * @param dayId 月份id
         */
        getPointDayData(monthId: number, dayId: number): any[];
        /**
         *
         * @param monthId 月份id
         */
        getPointMonthData(monthId: number): any[];
        /**
         *
         * @param playId 玩家id
         */
        getRoomNoByPlayId(playId: number): string;
        getTotalPointById(playId: number): number[];
        getPointRdById(playId: number): NET_CONF.points_msg_record[];
        getAllMemberPoint(): number;
        getGuildData(): NET_CONF.s2c_guild_data;
        getAskRecordData(): NET_CONF.ask_record[];
        getRoomLists(): NET_CONF.guild_game[];
        getGuildMsgData(): NET_CONF.guild_msg_record[];
        getRecordDatas(): NET_CONF.replay_record[];
        getPointsData(): NET_CONF.points_msg_record[];
        joinFriendCircle(id: number): void;
        /**
         *
         * @param playId 玩家id
         * @param ops   //会长操作
                        enum e_master_ops_type {
                            e_mot_agree = 1,
                            e_mot_refuse = 2,
                            e_mot_points = 3,
                            e_mot_kick = 4,
                            e_mot_dismiss = 5
                        }
         * @param param 上分, 下分数量
         */
        masterOperation(playId?: number, ops?: number, param?: number): void;
        askLeaveGuild(): void;
        modName(name: string): void;
        joinGuildGm(room_no: number): void;
        sendNotice(new_notice: string): void;
        clearGuildIcon(): void;
        joinFriendResult(msg: NET_CONF.s2c_join_guild): void;
        guildNoticeResult(msg: NET_CONF.s2c_guild_notice): void;
        guildRefusedResult(msg: NET_CONF.s2c_guild_refused): void;
        guildDataResult(msg: NET_CONF.s2c_guild_data): void;
        chairmanSpecResult(msg: NET_CONF.s2c_chairman_spec_data): void;
        memberSpecResult(msg: NET_CONF.s2c_member_spec_data): void;
        expendsResult(msg: NET_CONF.s2c_guild_expends_data): void;
        guildPointsResult(msg: NET_CONF.s2c_guild_roomcard_cnt): void;
        guildMembersResult(msg: NET_CONF.s2c_guild_member_data): void;
        /**
         *  成员属性变化
         * @param msg
         * enum e_member_prop {
                e_mp_online = 1;						//在线状态
                e_mp_gaming_id = 2;						//游戏id
            }
         */
        guildMebPropResult(msg: NET_CONF.s2c_guild_member_prop): void;
        guildAskDataResult(msg: NET_CONF.s2c_guild_ask_data): void;
        opsErrResult(msg: NET_CONF.s2c_master_operation_err): void;
        guildMsgDataResult(msg: NET_CONF.s2c_guild_msg_data): void;
        guildPointResult(msg: NET_CONF.s2c_guild_points_msg_data): void;
        exitGuild(msg: NET_CONF.s2c_guild_id): void;
        modNameResult(msg: NET_CONF.s2s_guild_name): void;
        mulPointResult(msg: NET_CONF.s2c_guild_mul_points): void;
        createGameResult(msg: NET_CONF.s2c_guild_game_create): void;
        guildEnterGameResult(msg: NET_CONF.s2c_guild_game_enter_exit): void;
        delGameResult(msg: NET_CONF.s2c_guild_game_delete): void;
        /**
         *
         * @param id 游戏id
         */
        createRoom(cfg: NET_CONF.msg_sel_roomcard_config): void;
        leaveRoom(): void;
        /**
         *
         * @param roomCardId 加入房卡游戏的房间id
         */
        joinRoom(roomCardId: number): void;
        askRoomReplayHistory(userId: number, guild_id?: number): void;
        askReplayDetail(gameId: number, logId: string): void;
        askRePlayHisResult(msg: NET_CONF.s2c_replay_history_result): void;
        replayDetailResult(msg: NET_CONF.s2c_replay_detail_shqm): void;
        replayDetSrnnResult(msg: NET_CONF.s2c_replay_detail_srnn): void;
        replayDetLandResult(msg: NET_CONF.s2c_replay_detail_land): void;
        replayDetErmjResult(msg: NET_CONF.s2c_replay_detail_ermj): void;
        replayDetQNewResult(msg: NET_CONF.s2c_replay_detail_qznn_new): void;
        replayDetSrmjResult(msg: NET_CONF.s2c_replay_detail_srmj): void;
        private enterGameResult(msg);
        openUrlCB(event: any): void;
    }
}
declare module game {
    const enum Mail_EVT {
        read = "read_mail",
        delete = "mail_delete",
        list = "mail_list",
        update = "mailupdate",
    }
    class MailModel extends DataModel {
        private _mailList;
        private _rmvList;
        constructor();
        initRegHandle(): void;
        readonly list: NET_CONF.msg_some_info[];
        rmvList(list: string[]): void;
        setReadMail(id: string): void;
        askMsgResult(data: NET_CONF.s2c_ask_message_result): void;
        deleteMsgResult(data: NET_CONF.s2c_delete_message_result): void;
        readMsgResult(data: NET_CONF.s2c_read_message_result): void;
        askMessage(): void;
        deleteMessage(list: string[]): void;
        readMessage(id: string): void;
    }
}
declare module game {
    class RollGoldModel {
        private _betAreaNum;
        private _goldList;
        private _goldList2;
        private _time;
        private _gapNum;
        private _isBit;
        private _isNeedYuan;
        constructor();
        init(betAreaNum: number, isBit: boolean, isNeedYuan: boolean): void;
        initGold(gold: number[]): void;
        reset(): void;
        /**
         * @param index 0~x
         * @param gold 没有/100  就是差值
         */
        setCurGold(index: number, gold: number, target: any, thisObj: any, flag: number): void;
        private setData(gold, index);
    }
    const rollGoldMgr: RollGoldModel;
}
declare module game {
    const enum RouteLineMo_EVT {
        DATA_CHANGE = "d_change",
    }
    class RouteLineModel extends Notification {
        history2Tp: (historyData: any) => number;
        tps: number[];
        hits: number[][];
        private _historys;
        private _maxRow;
        private _maxNHit;
        private _tpCnt;
        /**
         *
         * @param tpCnt 类型数量
         * @param maxRow 最大局数
         * @param maxNotHit 最大未命中数
         */
        constructor(tpCnt?: number, maxRow?: number, maxHit?: number);
        historys: any[];
        addHistory(data: any): void;
        private _addHistory(tp);
        private _shiftHistory();
    }
}
declare class Main extends egret.DisplayObjectContainer implements IMainDelegate {
    private _themeFin;
    private _preFin;
    private _init;
    constructor();
    $onAddToStage(stage: egret.Stage, nestLevel: number): void;
    private loadVer();
    private loadRes();
    /**
     * 配置文件加载完成,开始预加载皮肤主题资源和preload资源组。
     * Loading of configuration file is complete, start to pre-load the theme configuration file and the preload resource group
     */
    private onResComp(event);
    private loadPre();
    private onThemeFin(data, url);
    /**
     * preload资源组加载完成
     * preload resource group is loaded
     */
    private onGroupFin(event);
    /**
     * 资源组加载出错
     * Resource group loading failed
     */
    /**
     * preload资源组加载进度
     * loading process of preload resource
     */
    private createScene();
    onGameShow(): void;
}
declare module game {
    const enum RouteSsqMo_EVT {
        DATA_CHANGE = "d_change",
        DATA_UPDATE = "d_update",
    }
    const enum RouteSsqConst {
        zplMaxCnt = 4,
        dlMaxCnt = 2,
    }
    class RouteSsqModel extends Notification {
        data2Zhupanlu: (data: any, param1?: any) => IGameResult;
        data2Dl: (data: any, param1?: any) => IGameResult;
        data2Dyzl: (data: any, param1?: any) => IGameResult;
        history2Tp: (historyData: any) => number;
        maxHisCnt: number;
        overRmvcnt: number;
        protected _historys: any[];
        protected _historys1: any[];
        protected _routes: IGameResult[][];
        protected _tmps: IGameResult[][][];
        protected _lastIdxs: number[];
        _tps: number[];
        _hits: number[][];
        private _maxRow;
        private _maxNHit;
        private _tpCnt;
        private _arrs;
        constructor(maxHisCnt?: number, overRmvcnt?: number);
        historys: any[];
        readonly tps: any[];
        readonly hits: any[];
        private _addHistory(tp);
        private _shiftHistory();
        protected freeArrs(list: IGameResult[][]): void;
        protected _handHistory(stIdx: number, resetSub?: boolean): void;
        getRouteData(tp: RouteTp | number): IGameResult[];
        getRouteLastIdx(tp: RouteTp | number): number;
        private two2one(lastNum, r, maxCnt);
        addHistory(data: any): void;
        private shiftHistory(cnt);
    }
}
declare module game {
    const enum RouteTpMo_EVT {
        DATA_CHANGE = "d_change",
    }
    class RouteTpModel extends RouteModel {
        data2Zhupanlu: (data: any, tp: number) => IGameResult;
        private _tpCnt;
        private _zpls;
        constructor(tpCnt: number, winTp?: number, loseTp?: number);
        historys: any[];
        getForecast(): any;
        protected _handHistory(stIdx: number, resetSub?: boolean): void;
        protected shiftHistory(cnt: number): void;
        getGdwayNm(tp: number): string;
        /**
  *
  * @param routeList
  *
  * 0无、1长红、2长黑、3大路单跳、4拍拍黐、5一厅两房、6一房两厅、7逢红黐、8逢黑黐、9隔黐红、10隔黐黑
  */
        calGdWayType(tp: number): number;
    }
}
declare module game {
    class SoundModel {
        bgm: string;
        private _canPlay;
        private _loadBgm;
        constructor();
        setState(val: boolean): void;
        getState(): boolean;
        loadMusic(): void;
        playMusic(): void;
    }
}
declare module CONF {
    let inner: number;
    let svrUrl: string;
    let webSvrUrl: string;
    let kefuUrl: string;
    let erweima: string;
    let location: string;
    let taotaoUrl: string;
    let isNative: boolean;
    let channelId: string;
    let agentId: string;
    let shareId: string;
    let deviceId: string;
    let res: {
        [key: string]: string;
    };
    let gameVer: string;
    let clientIp: string;
    let bsKfUrl: string;
    let bsKfUrlWeb: string;
    let packAgeTp: string;
    let packId: string;
    let appVer: number;
    let moList: {
        [key: string]: {
            gVer: string;
            zip: any;
            jsVer?: string;
            res?: boolean;
            theme?: boolean;
            gp?: boolean;
        };
    };
    let curVers: {
        [key: string]: string;
    };
    let scOffx: number;
    let roomId: any;
    let preview: {
        [key: string]: string;
    };
    let logUrl: string;
    let homeUrl: string;
    let apiInfo: any;
    let appid: string;
    let wxCallUrl: string;
    let openWXQQUrl: string;
    let platNm: string;
    let hlhUrl: string;
    let kefuSign: string;
    const enum apkRes {
        login = "login",
    }
}
/**
 * Created by wjdeng on 2015/9/6.
 */
declare module game {
    class BusyLayer extends cui.Group implements ILoadShow {
        private static inst;
        static getInst(): BusyLayer;
        private _lab;
        private _gcon;
        private _aniTag;
        private _cnt;
        private _pcon;
        private _time;
        private _tmSpeed;
        private _flag;
        constructor();
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        $onRemoveFromStage(): void;
        $hitTest(): egret.DisplayObject;
        private hideAni();
        private showAni();
        showBusy(): void;
        hideBusy(): void;
        stopBusy(): void;
        setParent(container: cui.BaseContainer): void;
        private update();
        private loadUpdate(tm);
    }
}
declare module game {
    let chipMgr: ChipManager;
    class ChipManager {
        private _parent;
        private _areaArr;
        private _aniTag;
        private _chipArr;
        private _pure;
        private _flyBefore;
        constructor();
        setParent(p: cui.BaseContainer): void;
        resetAreaArr(): void;
        /**
         *
         * @param id 区域id
         * @param maxCnt 区域最大显示数量
         * @param x 区域的x ,转化为舞台的全局坐标
         * @param y 区域的y ,转化为舞台的全局坐标
         * @param w 区域的w
         * @param h 区域的h
         */
        addArea(id: number, maxCnt: number, x: number, y: number, w?: number, h?: number): void;
        /**
         *
         * @param formAreaId 出发点区域id
         * @param toAreaId 到达点区域id
         * @param tm 飞行时间
         * @param data {chipId:筹码id，gold:筹码下注额,chipTp:筹码枚举，默认是通用的}
         * @param bScale 初始的大小x
         * @param sfxName 音效
         * @param delay 延迟多久播放音效
         */
        addChip(formAreaId: number, toAreaId: number, tm: number, data: {
            chipId: number;
            gold: number;
            chipTp?: string;
            isSelfBet?: boolean;
        }, bScale?: number, eScale?: number, sfxName?: string, delay?: number, cb?: Function, thisObj?: any): void;
        /**
         *
         * @param pure true 纯净模式
         */
        setPure(pure: boolean): void;
        isPure(): boolean;
        private addChipToArea(chip);
        /**
         *
         * @param formAreaId 出发点区域id
         * @param toAreaId 到达点区域id
         * @param flytm 飞行的总时间
         * @param isPlay 是否播放声音
         */
        moveAll(formAreaId: number, toAreaId: number, flytm: number, isPlay?: boolean): number;
        /**
         *
         * @param formAreaId 出发点区域id
         * @param toAreaIds 到达点区域ids
         * @param flytm  飞行的总时间
         * @param isPlay  是否播放声音 默认播
         */
        moveAllMuti(formAreaId: number, toAreaIds: {
            id: number;
            wg: number;
        }[], flytm: number, isPlay?: boolean): number;
        private moveChip(formTiles, toAreaId, flyTm, maxCnt?, sfxName?, isPlay?);
        clear(): void;
        private getChip();
        private freeChip(chip);
    }
}
declare module game.DataFormat {
    function formatGold(gold: number, isLang?: boolean, fixed?: number): string;
    /**
     * 获取角色头像资源
     * @param icon_custom
     */
    function getHeadIcon(icon_custom: string): string;
    function convertGold(value: number): number;
    function convertGoldString2(gold: number, isLang?: boolean): string;
    function convertGoldString3(gold: number): string;
    function convertGoldString4(gold: number, isLang?: boolean): string;
    function convertGoldString5(gold: number, isLang?: boolean): string;
    function convertYuanString(value: number, isLang?: boolean): string;
    function convertYuanString2(gold: number, isLang?: boolean): string;
    function convertYuanString3(gold: number, isLang?: boolean): string;
    function convertYuanString4(gold1: number, gold2?: number, isLang?: boolean): string;
    function formatName(name: string, maxLen?: number, halfLen?: number): string;
    function CheckStringLength(txt: string): number[];
    function getGuildId(id: number, maxLen?: number): string;
}
declare module game {
    let goldMgr: GoldMange;
    type PlayerDatas = {
        player_id: number;
    }[];
    type betDatas = {
        bet_golds: number;
        master_bets?: master_bets;
    }[];
    type master_bets = {
        player_id: number;
        player_bets: number;
    }[];
    class GoldMange {
        private _particleWrapper;
        private _parent;
        private _plyData;
        private _myId;
        private _flyState;
        private _startPos;
        private _endPosArr;
        private _firData;
        private _secData;
        private _othFirGold;
        private _othSecGold;
        private _areaNum;
        private _spcNum;
        private _isFly;
        private _starArr;
        constructor();
        setParent(parent: cui.BaseContainer): void;
        /**
         *
         * @param num 区域数量
         * @param spcNum 特殊区域 代表只有几个地方是需要飞星星 全飞就不需要传
         */
        setAreaNum(num: number, spcNum?: number): void;
        initData(data: PlayerDatas, myId?: number): void;
        setStartPoint(point: cui.IPointData): void;
        /**
         *
         * @param point 区域坐标数据
         * @param starArr 要飞星星的区域数组
         */
        addEndPoint(point: cui.IPointData[], starArr?: number[]): void;
        private getOtherGold(betDate, myBetList?);
        private getSixGold(plyData, betData);
        getGold(betData: betDatas, myBetList?: number[]): {
            other: any[];
            six: any[];
        };
        private flyStar(toArea, fin?, tar?);
        reset(): void;
        clear(): void;
    }
}
declare module game {
    module MsgBox {
        function showBoxCB(gp: string, key: string | number, fun: (tag: number) => void, tar: any): void;
        function showBoxCB2(str: string, fun: (tag: number) => void, tar: any): void;
        function showPrintBoxCB(gpName: string, key: string | number, fun: (tag: number) => void, tar: any, ...rest: any[]): void;
        function showGoldBox(gpName: string, key: string | number, tar: any, ...rest: any[]): void;
        function showSafeGuard(startTm?: number, endTm?: number): void;
        /**
         *
         * @param isErr 是否是服务器错误码 langConsts.errCode.xxx
         * @param code 错误码
         * @param gp 组名
         * @param txt 文本，如果是已经处理过的，就传个文本过来
         */
        function showTipBox(isErr: boolean, code: number, gp?: string, txt?: string, color?: UIColor, isSpc?: boolean): void;
        /**
         *
         * @param gp 组名
         * @param key 语言包枚举
         * @param other 增加的
         * @param isNotOk 不显示确认按钮 true
         */
        function showBox(gp: string, key: string | number, other?: string, isNotOk?: boolean): void;
        function showErr(errCode: number | string): void;
        function showPrompt(errCode: number | string): void;
        /**
         *
         * @param gpName
         * @param key
         * @param color  默认白色
         */
        function showTxt(gpName: string, key: string | number, size?: number, color?: UIColor): void;
        /**
         *
         * @param gpName
         * @param key
         * @param repValue 要替换的
         * @param color  默认白色
         */
        function showPrintfTxt(gpName: string, key: string | number, color?: UIColor, ...rest: any[]): void;
    }
}
declare module game {
    const enum MCType {
        ui = 0,
    }
    /**
     * 界面有关常量
     *
     * */
    const enum UIConsts {
    }
    const enum UIColor {
        white = 16777215,
        green = 1041935,
        blue = 5551845,
        orange = 15648323,
        gray = 7829367,
        red = 15615301,
        yellow = 16763904,
        purple = 13762815,
        txt = 14602122,
        link = 968553,
        greeng = 1244928,
        COLOR_1 = 0,
        COLOR_2 = 16777215,
        COLOR_3 = 16711680,
        COLOR_4 = 16744192,
        COLOR_5 = 16776960,
        COLOR_6 = 65280,
        COLOR_7 = 255,
        COLOR_8 = 8855416,
        COLOR_9 = 11053224,
        COLOR_10 = 12632256,
        COLOR_11 = 15132922,
        COLOR_12 = 16770315,
        COLOR_13 = 1244928,
        COLOR_14 = 12237498,
        COLOR_15 = 16772735,
        COLOR_16 = 16743936,
        COLOR_17 = 11857588,
    }
    const enum ImgPrefix {
    }
    const enum LangGrp {
        mainLang = "mainLang",
    }
    const enum moneyTp {
        y = "y",
        w = "w",
        q = "q",
        b = "b",
        by = "by",
        wy = "wy",
    }
    const enum soundEnum {
        nn = "sound_brnn_type_",
    }
    const enum gamePoker {
        poker = "poker",
        ddzPoker = "card@ddzPoker",
    }
    const enum HallImg {
        setting = "setting@",
        hallNm = "hall_",
    }
    const enum moment {
        scene = "txt_scene",
    }
    const enum HeadImg {
        head = "head@",
        headFrame = "headFrame@",
    }
    const enum UIFilerNm {
        grayCF = "grayCF",
    }
    const enum UIEvent {
        CHAT_CLOSE = "chat_cls",
        BUSY_TM_OUT = "busy_out",
        BIND_MISS = "bind_miss",
        CUSTOM_CHIP = "custom_chip",
        OPTION_CARD = "option_card",
        FRIEND_CIRCLE_CLOSE = "friend_circle_close",
        OPEN_DETAIL_VIEW = "open_detail_view",
        NETWORK_DELAY = "NetWorkDelay",
        LOAD_ICON = "load_icon",
        GOOD_ROAD = "good_road",
        CHANGE_ROOM = "change_room",
        CHANGE_ROOM_RESULT = "change_room_result",
    }
    module UIUtils {
        var quakeFun: Function;
        /**
         * @param targetPos中可以设置多个属性 例如 x ,y , scaleX,scaleY   {x:600,y:110,scaleX:0.3,scaleY:0.3}
         * confConsts.GameTp.xxx
         * TRain.core.addDelayDo( move, self, delayTime, 游戏id, false, display, targetPos, speed, dur ,times );
         */
        function move(display: egret.DisplayObject, targetPos: any, speed: Function, dur?: number, times?: number, cb?: Function, flag?: number): void;
        /**
         * @param targetPos中可以设置多个属性 例如 x ,y , scaleX,scaleY   {x:600,y:110,scaleX:0.3,scaleY:0.3}
         */
        function startActCB(display: egret.DisplayObject, actions: Array<TRain.Action>, cb?: Function, flag?: number): void;
        /**
         * @param scr:资源名
         * @param closeTm:合上的时间
         * @param openTm:翻开的时间
         * @param scaleX:翻开后的scale
         */
        function flipCardCB(display: cui.Image, scr: string, scaleX: number, closeTm?: number, openTm?: number, cb?: Function, flag?: number): void;
        /**
         * @param missTm:什么时间消失
         *
         * @param LookTm:什么时间出现
         */
        function flashAni(display: egret.DisplayObject, missTm: number, endTm: number, cb?: Function, flag?: number): void;
        function sin(t: number): number;
        function secToStr(sec: number): string;
        /**
         *
         * @param parent 存放星星的容器
         * @param form 初始位置
         * @param to 结束位置
         * @param flyTm 飞行时间
         * @param flag 标记
         * @param cb 返回函数
         */
        function flyStarAni(parent: cui.Group, form: {
            x: number;
            y: number;
        }, to: {
            x: number;
            y: number;
        }, flyTm?: number, flag?: number, cb?: Function): void;
        /**
         *
         * @param parent 父容器
         * @param gold 金币
         * @param form 出发点
         * @param to 结束点
         * @param flag 标记
         */
        function showGold(parent: cui.BaseContainer, gold: number, form: {
            x: number;
            y: number;
        }, to: {
            y: number;
        }, flag?: number): void;
        function createParticle(nm: string): cui.ParticleSys;
        /**
         * 金币显示滚动增加
         * @param fromGold   初始金币
         * @param fromGold   最终金币
         * @param fromGold   你的label或者bitmaplabel
         * @param fromGold   是否是bitmaplabel  是就true不是false
         * @param fromGold   就是self
         * @param fromGold   游戏id
         */
        function showRollGold(fromGold: number, toGold: number, target: any, isBit: boolean, thisObj: any, flag: number, hasYuan?: boolean): void;
        /**
         * 数字显示滚动增加
         * @param toNum     最终数字
         * @param item      ui
         * @param str1 2    前缀/后缀
         * @param allTime   总时长
         * @param target    self
         * @param delay     延迟显示
         */
        function showRollGold1(toNum: number, item: any, target: any, allTime: number, delay?: number, str1?: string, str2?: string): void;
        function getQRCodeTeam(id: number, codeTag: number, cb: Function): void;
        function getQRCodeTeam1(id: number, codeTag: number, cb: Function): void;
        function getQRCodePly(cb: Function): void;
        function getQRCodePly1(cb: Function): void;
        function getQRLinkUrl(id: number, codeTag?: number, type?: number): {
            channelID: string;
            params: string;
        };
        function getQRLinkUrl1(id: number, codeTag?: number, type?: number, newUrl?: string): string;
        function enterActionCom(item: egret.DisplayObject, moveX: number, moveY: number, moveTime: number, delay?: number, isCenter?: boolean, cb?: Function): void;
    }
}
declare module game {
    class BindGiftDialog extends game.UIPopup {
        skBtnClose: cui.ScaleButton;
        skBtnBind: cui.ScaleButton;
        skBindAct: cui.Group;
        skGrpSay: cui.Group;
        skDataGrp: cui.DataGroup;
        skLeft: cui.ScaleButton;
        skRight: cui.ScaleButton;
        skScroller: cui.Scroller;
        skConf: game.ConfGroup;
        private _sayDur;
        private _sayID;
        private _delayDur;
        private _gameTag;
        private _arr;
        private _one;
        private _two;
        private _three;
        constructor();
        childrenCreated(): void;
        private showArrow();
        onDispose(): void;
    }
    class BindGiftItem extends cui.DataItem {
        skImg: cui.Image;
        skLab: cui.Label;
        constructor();
        childrenCreated(): void;
        dataChanged(): void;
    }
}
declare module game {
    class SaveMoneyDialog extends UIPopup {
        skBtnClose: cui.ScaleButton;
        skBtnSave: cui.ScaleButton;
        skBtnCharge: cui.ScaleButton;
        skLabCount: cui.Label;
        skLabCondition: cui.Label;
        constructor();
        childrenCreated(): void;
        private updateInfo();
        private getSaveMoney();
    }
}
declare module game {
    interface DisPlyData extends cui.IItemData {
        nickName: string;
        head: string;
        vip: number;
        agree: number;
    }
    class disTable extends cui.Component {
        private skJiesanGrp;
        private skBack;
        private skBack1;
        skAgree: cui.ScaleButton;
        skNo: cui.ScaleButton;
        private skAskDis;
        private skNotice;
        private skConfGrp;
        private _tag;
        private _plyCount;
        private _data;
        private _posArr;
        private _time;
        private _disID;
        constructor(plyCount: number, data: any, disID: number);
        childrenCreated(): void;
        private showText();
        reSet(): void;
        private AllPos();
        setData(data: any): void;
        private updateView();
    }
    class DisTile extends cui.DataItem {
        skHead: cui.Image;
        skHeadFrame: cui.Image;
        skState: cui.Image;
        skNickName: cui.Label;
        _data: any;
        constructor(data: any);
        protected dataChanged(): void;
    }
}
declare module game {
    class ExtensionNoticeView extends UIPopup {
        sknoticeName: cui.Image;
        skclose: cui.ScaleButton;
        skCreateGrp: cui.Group;
        skCreate: cui.ScaleButton;
        skTname: cui.EditableText;
        skTnum: cui.EditableText;
        sksetname: cui.Label;
        sksetnum: cui.Label;
        skChangeGrp: cui.Group;
        skTchange: cui.EditableText;
        skTishi: cui.Label;
        skchange: cui.ScaleButton;
        skcancle: cui.ScaleButton;
        skresetGrp: cui.Group;
        skReset: cui.Label;
        skSure: cui.ScaleButton;
        sknoSure: cui.ScaleButton;
        private skConfGrp;
        private _isCreate;
        private _tag;
        private _data;
        constructor(isCreate: number, data?: any);
        childrenCreated(): void;
        private getIsAllNumber(val);
        private onFocus1(e);
        private OnAccount(e);
        private onFocus2(e);
        private OnAccount1(e);
        private onFocus3(e);
        private OnAccount2(e);
        private showResult();
        private showResult2(optype, data);
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
    }
}
declare module game {
    class ExtensionPop extends UIPopup {
        private skclose;
        private skTG;
        constructor();
        childrenCreated(): void;
    }
}
declare module game {
    class ExtensionShareView extends UIFullFW {
        private skclose;
        private skCopy;
        private skNet;
        private skerwei;
        private _data;
        constructor(data: any);
        childrenCreated(): void;
        private updateUrl(num);
        private showUrl();
        private createImg(type?);
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
    }
}
declare module game {
    interface IBtnHanderTeamList {
        btnClick(item: ExtensionPerformTeamList, num: any): any;
    }
    class ExtensionView extends UIFullFW {
        skBack: cui.ScaleButton;
        private skdiGrp;
        private skdiYJGrp;
        private skdlXian;
        private skYJxian;
        private skdiTeam;
        skBtnGrp: cui.MenuGroup;
        skYeJiGrp: cui.MenuGroup;
        skteamGrp: cui.MenuGroup;
        skChaxun: cui.MenuGroup;
        skdaili0: cui.Group;
        private skMyId;
        private skTuiId;
        private skZSNew;
        private skZSAll;
        private skTeamNew;
        private skTeamMember;
        private skYesYJ;
        private skHesYJ;
        private skshuoming;
        private sktishi;
        private skCopyImg;
        private skShareWx;
        private skShareQQ;
        skGet: cui.ScaleButton;
        skPay: cui.BitmapLabel;
        skVip: cui.Label;
        skList: cui.DataGroup;
        skTrueGold0: cui.Label;
        skTrueGold1: cui.Label;
        skTrueGold2: cui.Label;
        skListXS: cui.DataGroup;
        private skLeft;
        private skRight;
        private skMoveGrp;
        private skZhiDu;
        private skXiShu;
        skdaili1: cui.Group;
        skteamNum: cui.BitmapLabel;
        skyesNew: cui.BitmapLabel;
        skmonthNew: cui.BitmapLabel;
        skteamtoday: cui.Label;
        skselftoday: cui.Label;
        skdltoday: cui.Label;
        skteamtodaygold: cui.Label;
        skselftodaygold: cui.Label;
        skdltodaygold: cui.Label;
        skteamyes: cui.Label;
        skselfyes: cui.Label;
        skdlyes: cui.Label;
        skteamyesgold: cui.Label;
        skselfyesgold: cui.Label;
        skdlyesgold: cui.Label;
        skmyyj: cui.Label;
        sktodayyj: cui.Label;
        skmyweek: cui.Label;
        skweekyj: cui.Label;
        skmyZY: cui.Label;
        skmyZYyes: cui.Label;
        skZS: cui.Label;
        skZSyes: cui.Label;
        skdaili2: cui.Group;
        skDLList: cui.DataGroup;
        skLast: cui.ScaleButton;
        skNext: cui.ScaleButton;
        skFirst: cui.ScaleButton;
        skEnd: cui.ScaleButton;
        skFind: cui.ScaleButton;
        skCancle: cui.ScaleButton;
        skX: cui.ScaleButton;
        skName: cui.EditableText;
        skGLPage0: cui.BitmapLabel;
        skGLPage1: cui.BitmapLabel;
        skzhishuNew: cui.BitmapLabel;
        skzhishuNum: cui.BitmapLabel;
        skdaili3: cui.Group;
        skplayerId: cui.EditableText;
        skSearch: cui.ScaleButton;
        skSearchGrp: cui.Group;
        skupId: cui.Label;
        skteamnum: cui.Label;
        sktodaygold: cui.Label;
        skweekgold: cui.Label;
        sktime: cui.Label;
        skdaili4: cui.Group;
        skCopy: cui.ScaleButton;
        skNet: cui.Label;
        skerwei: cui.Base64Img;
        skdaili5: cui.Group;
        skGrp: cui.Group;
        skInGrp: cui.Group;
        skdaili6: cui.Group;
        skteamName: cui.EditableText;
        skCreateTeam: cui.ScaleButton;
        skSearchTeam: cui.ScaleButton;
        skclean: cui.ScaleButton;
        skTeamList: cui.DataGroup;
        skTeam: cui.Group;
        skTeamBack: cui.ScaleButton;
        skScerchName: cui.EditableText;
        skteamScerch: cui.ScaleButton;
        skTeamX: cui.ScaleButton;
        skTeamCancle: cui.ScaleButton;
        skteamList: cui.DataGroup;
        skTeamLast: cui.ScaleButton;
        skTeamNext: cui.ScaleButton;
        skTeamFirst: cui.ScaleButton;
        skTeamEnd: cui.ScaleButton;
        skpaixianNum: cui.BitmapLabel;
        skpaixianNew: cui.BitmapLabel;
        skTeamPage0: cui.BitmapLabel;
        skTeamPage1: cui.BitmapLabel;
        skyejiGrp: cui.Group;
        skyejiGold: cui.BitmapLabel;
        skYejiBack: cui.ScaleButton;
        skYJLast: cui.ScaleButton;
        skYJNext: cui.ScaleButton;
        skYJFirst: cui.ScaleButton;
        skYJEnd: cui.ScaleButton;
        skyejiBG: cui.Image;
        skyejiPic: cui.Image;
        skDLYJlist: cui.DataGroup;
        skYJPage0: cui.BitmapLabel;
        skYJPage1: cui.BitmapLabel;
        private skConfGrp;
        private skLeftGrp;
        private skLeftImg;
        private _itemPro;
        private _itemProXS;
        private _itemProPerformance;
        private _itemProTeam;
        private _itemProTeamList;
        private _itemExtendList;
        private _dailiPage;
        private _yejiPage;
        private _teamPage;
        private _openId;
        private _xishuPage;
        private _tag;
        constructor(openid?: number);
        setScOffX(): void;
        childrenCreated(): void;
        btnClickExtend(item: cui.MenuItemImage): void;
        showExtendResult(num: any): void;
        btnClickYeji(item: cui.MenuItemImage): void;
        updateDLView(num: any): void;
        btnClickChip(item: cui.MenuItemImage): void;
        private _base64Code;
        showDate(num: any): void;
        private updatePic(type);
        private getQRLinkUrl();
        teamSearchResult(): void;
        searchResult(): void;
        memberSearchResult(): void;
        updateView(num: any): void;
        private testFun(a, b);
        private GMTToStr(time);
        private onFocus1(e);
        private OnAccount(e);
        private onFocus2(e);
        private OnAccount2(e);
        private onFocus3(e);
        private OnAccount3(e);
        private onFocus4(e);
        private OnAccount4(e);
        showResult(num: any): void;
        showGain(): void;
        showPerforms(): void;
        showPerformsList(): void;
        showPerformsChild(): void;
        showPerformsTeamlist(): void;
        private updateConfig();
        private updateUrl(num);
        showTeamInfo(): void;
        btnClick(item: ExtensionPerformTeamList, num: any): void;
        showTeamGrp(data: any): void;
        dispose(): void;
    }
    interface XiShuShowData extends cui.IItemData {
        id: number;
        gameName: string;
        xishu: number;
        shuoming: string;
    }
    class extensionXiShu extends cui.DataItem {
        skGameName: cui.Label;
        skGameXiShu: cui.Label;
        skShuoMing: cui.Label;
        private skXian;
        constructor();
        protected dataChanged(): void;
    }
    interface WuXianShowData extends cui.IItemData {
        id: number;
        PButton: number;
        PTop: number;
        Rate: number;
        Describe: string;
    }
    class extensionWuXian extends cui.DataItem {
        skWXgold: cui.Label;
        skWXlv: cui.Label;
        skWXget: cui.Label;
        private skXian;
        constructor();
        protected dataChanged(): void;
    }
    interface PerformListShowData extends cui.IItemData {
        rank: number;
        player_id: number;
        nick_name: string;
        per_tw: number;
        ac: number;
        bd: number;
    }
    class ExtensionPerformList extends cui.DataItem {
        skRank: cui.Label;
        skNickname: cui.Label;
        skId: cui.Label;
        skyj: cui.Label;
        skTeamNum: cui.Label;
        skBaodi: cui.Label;
        constructor();
        protected dataChanged(): void;
    }
    function formatString(str: string): string;
    interface PerformTeamlistShowData extends cui.IItemData {
        handle: IBtnHanderTeamList;
        name: string;
        count: number;
        count_limit: number;
        player_id: number;
        id: number;
        code_tag: number;
    }
    class ExtensionPerformTeamList extends cui.DataItem {
        skChange: cui.ScaleButton;
        skTeam: cui.ScaleButton;
        skerweima: cui.ScaleButton;
        skshare: cui.ScaleButton;
        skteamName: cui.Label;
        sknumber: cui.Label;
        skpaixian: cui.Label;
        sknewId: cui.Label;
        constructor();
        protected dataChanged(): void;
    }
    interface PerformTeamMemberShowData extends cui.IItemData {
        rank: number;
        name: string;
        player_id: number;
        ts_create: number;
        per_sub_tw: number;
        ac: number;
    }
    class ExtensionPerformTeamMemberList extends cui.DataItem {
        skRank: cui.Label;
        skNickname: cui.Label;
        skId: cui.Label;
        sktime: cui.Label;
        skyj: cui.Label;
        skTeamNum: cui.Label;
        constructor();
        protected dataChanged(): void;
        private GMTToStr(time);
    }
    interface PerformYJShowData extends cui.IItemData {
        isself: boolean;
        rank: number;
        name: string;
        player_id: number;
        yej: number;
        yongj?: number;
    }
    class ExtensionDLList extends cui.DataItem {
        skself: cui.Group;
        skmyRank: cui.Label;
        skmyname: cui.Label;
        skmyid: cui.Label;
        skmygold: cui.Label;
        skother: cui.Group;
        skotherRank: cui.Label;
        skothername: cui.Label;
        skotherid: cui.Label;
        skothergold: cui.Label;
        skotheryj: cui.Label;
        constructor();
        protected dataChanged(): void;
    }
}
declare module game {
    module ClickMcMgr {
        function setParent(parent: cui.Group, layerDelegate: LayerDelegate): void;
        function showMc(x: number, y: number): void;
    }
}
declare module game {
    interface IScene {
        /**
         * 调用 HomeView的 homeUI.setNotifyParent(跑马灯父窗口)
         * 游戏结束时， 需要还原跑马灯父窗口 调用 homeUI.setNotifyParent(null);
         */
        homeUI: game.HomeView;
        /**
         * 返回到主界面（如果有显示过主界面的话， 无会则不显示任何界面 ）
         * 游戏必须要设置主界面
         */
        goBack(): any;
        /**
         *
         * @param popup
         * @param data
         * @param isTop
         */
        openPopup(popup: UIPopup, data?: any, isTop?: boolean): void;
        /**
         * 显示大厅UI
         * @param tag
         * @param data
         */
        showHallUI(tag: UITag, data?: any): cui.BaseContainer;
        /**
         * 显示游戏UI  UI概念 UI是全屏界面  同时显示一个所谓的UI 有新的UI显示时, 老的UI会被dispose
         *
         * 注： uiCls: 传入要打开的界面类
         * @param tag 游戏UI 标识
         * @param uiCls 游戏UI类   注： 是类 不是 实例
         * @param isMain 表示是否是主界面
         *        主界面会被缓存起来   调用goBack函数  会返回到主界面
         * */
        showGameUI(tag: number, uiCls: any, isMain?: boolean): cui.BaseContainer;
        /**
         * 获取当前显示UI
         */
        getCurUI(): cui.BaseContainer;
        /**
         * 顺序播放全屏特效  前面的特效播后，后面的特效才开始播
         */
        addSceneEff(eff: game.EffectNode): void;
        /**
         * 立即播放全屏特效
         */
        showSceneEff(eff: EffectNode): void;
        regUICls(tag: number, uiCls: any): any;
        unregUICls(tag: number): any;
    }
    const enum UITag {
        NIL = 0,
        Home = 1,
        shop = 2,
        safeBox = 3,
        sevenReward = 4,
        extension = 5,
        code = 6,
        systemMsg = 7,
        activity = 8,
        safeBoxCQ = 9,
        bxxShouyi = 10,
        friendHome = 11,
        roomCardHome = 12,
        myWallet = 13,
        max = 14,
    }
    const enum GameScene_EVT {
        created = "create",
    }
    let gameScene: GameScene;
    /**
     * 游戏主逻辑界面，分层控制游戏内其他界面。
     *
     * */
    class GameScene extends BaseScene implements PopupDelegate {
        static createInst(): GameScene;
        homeUI: HomeView;
        private _curTag;
        private _backUI;
        private _curUI;
        private _firstShow;
        private _mainUI;
        private _layers;
        private _mainLayer;
        private _popupLayer;
        private _popupTop;
        private _hideHome;
        private _uiClss;
        protected childrenCreated(): void;
        private connEnterGm(gameId, gameData?);
        showLayer(layer: cui.Group): void;
        hideLayer(layer: cui.Group): void;
        private _showLayer(id, visible);
        /**
         * 显示大厅UI
         * @param value:number 界面码
         * @param data?:any 传递给界面的参数 可选。其中 lastUI:打开此界面的上一个界面
         * */
        showHallUI(tag: UITag, data?: any, needBack?: boolean): cui.BaseContainer;
        /**
         * 显示游戏UI  注：游戏UI  tag 需要大于1000
         * @param uiCls:传入要打开的界面类
         * */
        showGameUI(tag: number, uiCls: any, isMain?: boolean): cui.BaseContainer;
        getCurUI(): cui.BaseContainer;
        getCurTag(): UITag;
        private openFWUI(newUI?, tag?, isMain?, needBack?);
        regUICls(tag: number, uiCls: any): void;
        unregUICls(tag: number): void;
        /**
         *
         * @param gameId
         * @param data   当data有值  且inGame=true 表示当前正在游戏中
         * @param detailData 当detailData有值时说明是回放功能
         * 运营活动业绩开关 yyhd_enable
         * 无限代理业绩开关 wxdl_enable
         */
        startGame(gameId: confConsts.GameTp, data?: {
            inGame?: boolean;
            roomId?: number;
            detailData?: any;
        }): void;
        /**
         *
         * @param isKcik 是否是没钱被踢
         * @param isPlayBack 回放返回
         * @param isRmCardGm 是否是房卡游戏退出
         */
        endGame(isKcik?: boolean, isPlayBack?: boolean, isRmCardGm?: boolean): void;
        friendEndGame(isPlayBack?: boolean): void;
        private _gcTag;
        private startGC(tm);
        private stopGC();
        private doGC();
        goBack(): void;
        goHome(): void;
        onBackClk(): void;
        openPopup(popup: UIPopup, data?: any, isTop?: boolean): void;
        openPopupByTag(tag: number, data?: any, isTop?: boolean): void;
        private closePop();
        closeAllTopPop(): void;
        closeAllPopup(): void;
        onPopupOpen(popup: UIPopup): void;
        onPopupClose(popup: UIPopup): void;
        stopPopup(): void;
        startPopup(): void;
        hideGameLoad(): void;
        showGameLoad(): void;
        addSceneEff(eff: EffectNode): void;
        /**
         * 同时播放多个场景特效，仅用于小特效
         */
        showSceneEff(eff: EffectNode): void;
    }
}
declare module game {
    const enum GuideTp {
        first = 0,
        second = 1,
        third = 2,
        four = 3,
        fif = 4,
    }
    module GuideMgr {
        function setParent(parent: cui.Group, layerDelegate: LayerDelegate): void;
        function clear(): void;
        function guideState(state: number): void;
        function showGuild(): void;
    }
}
declare module game {
    class ConfGroup extends cui.Group {
        offX: string;
        noticeNm: string;
        tag: number;
    }
}
declare module game {
    class GetReward extends UIPopup {
        skGoldAni: game.UIDBAni;
        skWinGold: cui.BitmapLabel;
        private _showGold;
        private _goldPos;
        constructor(gold: number, skin?: string);
        childrenCreated(): void;
        showWinGrp(gold: number): void;
        onDispose(): void;
    }
}
declare module game {
    class HlhEwmView extends game.UIPopup {
        skClose: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
    }
}
declare module game {
    class HlhSettingView extends game.UIPopup {
        skClose: cui.ScaleButton;
        skMusic: cui.ScaleButton;
        skSound: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        updateMcAndSd(): void;
    }
}
declare module game {
    interface gameTileHandle {
        clickTile(item: GameTile): any;
    }
    interface IShowXfyData extends cui.IItemData {
        handle: XfyClickHandle;
        id: number;
        imgSrc: string;
        btnSrc: string;
    }
    interface XfyClickHandle {
        xfBtnClick(item: XfyItem): any;
    }
    const enum enterGmLimitTp {
        gold = 30,
    }
    class HomeView extends UIFullFW {
        skRoleTalk: cui.Label;
        skHeadImg: cui.Image;
        private skRedpoint;
        skName: cui.Label;
        skId: cui.Label;
        skHeadFrame: cui.Image;
        skGold: cui.BitmapLabel;
        skBSet: cui.ScaleButton;
        skGames: cui.DataGroup;
        skNotify: cui.Group;
        skMail: cui.ScaleButton;
        skGirlImg: cui.Image;
        skBFull: cui.ScaleButton;
        skBLang: cui.ScaleButton;
        skExtension: cui.SimpleButton;
        skBinding: cui.SimpleButton;
        skAniBinding: cui.UIMovieClip;
        skReward: cui.SimpleButton;
        skTask: cui.SimpleButton;
        skTipBtn: cui.SimpleButton;
        skTipBtn1: cui.SimpleButton;
        skNotice: cui.SimpleButton;
        skNoticeGrp: cui.Group;
        skNoticeMvp: cui.UIMovieClip;
        skNewGame0: game.UIDBAni;
        skNewGame1: game.UIDBAni;
        skNewTitle0: game.UIDBAni;
        skNewTitle1: game.UIDBAni;
        skGame1: cui.SimpleButton;
        skGame2: cui.SimpleButton;
        private _newTileTag;
        skAniRelief: cui.UIMovieClip;
        skRelief: cui.SimpleButton;
        skFirstRecharge: cui.SimpleButton;
        skService: cui.ScaleButton;
        skClass: cui.ScaleButton;
        skClassGrp: cui.MenuGroup;
        skGameName: cui.Label;
        skLastGmBtn: cui.SimpleButton;
        skLast: cui.Image;
        skAniTask: cui.UIMovieClip;
        skAniReward: cui.UIMovieClip;
        skProfit: cui.ScaleButton;
        skConfGrp: game.ConfGroup;
        skBack: cui.ScaleButton;
        _classFlag: number;
        skImgDone: cui.Image;
        _loginCount: number;
        skGrp: cui.Group;
        skOnlineReward: cui.SimpleButton;
        skSafeBox: cui.ScaleButton;
        skActGrp: cui.Group;
        skStore: cui.SimpleButton;
        skAdd: cui.ScaleButton;
        skSoundBtn: cui.SimpleButton;
        skWallet: cui.SimpleButton;
        skGoldGrp: cui.Group;
        skHeadGrp: cui.Group;
        skBHead: cui.ScaleButton;
        skLeftGrp: cui.Group;
        skJingle: cui.Image;
        skAgent: cui.ScaleButton;
        skBottomGrp: cui.Group;
        skKfAllGrp: cui.Group;
        skClassGroup: cui.Group;
        skLeft: cui.ScaleButton;
        skRight: cui.ScaleButton;
        skBtnGroup: cui.Group;
        skGameSc: cui.Scroller;
        skLeftImg: cui.Image;
        skRightImg: cui.Image;
        skXfyGrp: cui.Group;
        skXfScrll: cui.TableScroller;
        skXfList: cui.DataGroup;
        skXfBtnGrp: cui.MenuGroup;
        skMenuBg: cui.Image;
        skRoomCardNumGrp: cui.Group;
        skCardNum: cui.BitmapLabel;
        skAddCard: cui.ScaleButton;
        skBgBar: cui.ProgressBar;
        skHeadBarGrp: cui.Group;
        skHeadBtn: cui.ScaleButton;
        skMoneybag: cui.ScaleButton;
        skSetting: cui.ScaleButton;
        skHlhGame: cui.Scroller;
        skHlhGrp: cui.DataGroup;
        skEwmBtn: cui.SimpleButton;
        skKfBtn: cui.SimpleButton;
        skMenuGame: cui.MenuGroup;
        skHlhScr: cui.Scroller;
        skGameRecord: cui.ScaleButton;
        skRebate: cui.ScaleButton;
        skWindow: cui.ScaleButton;
        skDelay: NetworkDelay;
        skPeople: cui.Label;
        private _onLineNumTm;
        skTopGrp: cui.Group;
        skBomGrp: cui.Group;
        skNewGameGrp: cui.Group;
        skGameImg: cui.Image;
        skTopBTn: cui.Group;
        skGaNameGrp: cui.Group;
        skBottomBg: cui.Image;
        private _notifyUI;
        private _actionLoop;
        private _actIconLoop;
        private _gamesBeginX;
        private _tempGameId;
        private _offX;
        private _isFlashGirl;
        private _changeNotice;
        private _oldNotice;
        private _soundNum;
        private _redPointNum;
        private _xfyIdx;
        private _onlineTm;
        private _isHaveGuide;
        private _showGames;
        private _point;
        private _tmTag;
        private _xfTm;
        private _bubbleCloseTm;
        private _isCanTime;
        private _clickTm;
        private _headBtnOpen;
        private _lookBtnGrp;
        private _bindFlag;
        private _newGames;
        private _isFristEnter;
        private _balanceDeyTag;
        private _isClickHot;
        private _popularGames;
        private _clickAniTm;
        private _clickGmIds;
        private _gameTags;
        constructor();
        childrenCreated(): void;
        protected onResize(w: number, h: number): void;
        /**
         *
         * @param w
         * hlh动态修改位置
         */
        private setHlhResize(w);
        private clickBtn(itemTile);
        private openDetail();
        private showApiBtn();
        private updateBar();
        private upHeadBarPoint(lookNum);
        private activityMoClick();
        private rechargeMoClick();
        private updateIcon();
        private initOnline();
        private updateOnlineTm();
        private updateTm();
        private updateBtn();
        private getDefaultBtns(idx);
        private formatOnlineTm(Tm);
        private playReward(isNotEvt?);
        private initRepair();
        private autoChangeIdx();
        private formatXfyInfo(repairConf, id);
        xfBtnClick(item: XfyItem): void;
        private setScOffX();
        clickTile(item: GameTile): void;
        private showRed();
        private isShowRedPoint();
        setRedPoint(num: number): void;
        showNoticeNum(): void;
        private noticeGrpAni();
        private updateSevenDayBtn();
        private setBindOrSave();
        menuClick(item: cui.MenuItemImage): void;
        private bindGift();
        private openBind();
        setNotifyParent(p: cui.BaseContainer, maskWidth?: number): void;
        rmvNotifyParent(p: cui.BaseContainer): void;
        protected onShow(stage: egret.Stage): void;
        private showNewTile();
        private apiEnterActionAll();
        private apiEnterGold();
        protected onHide(): void;
        private flipGirlGrp();
        private updateHead();
        private updateGold();
        private outOrIn(isOut, cb?);
        private randomTxt();
        private showNewGames();
        private showGameClass(tag?);
        private compList(a, b);
        private showClick(e);
        private showArrow(e);
        openFunPop(isNotEvt?: boolean): void;
        openRevivePop(): void;
        isFullscreenEnabled(): any;
        checkScreen(): boolean;
        changeScreenImg(): void;
        fullScreen(): void;
        exitScreen(): void;
        getRndInteger(min: any, max: any): any;
        getOnlineNumber(isFirst: boolean): any;
        randomOnline(): void;
        getMinutePre(Number: number): number;
        apiEnterAction(item: egret.DisplayObject, isX: boolean, isAdd: boolean, tm: number, delay?: number): void;
        enterActionBottom(item: any, moveTime: number, delay?: number, isCenter?: boolean, cb?: Function): void;
        actComPoint(item: egret.DisplayObject, isX: boolean, isAdd: boolean): void;
    }
    class XfyItem extends cui.DataItem {
        skXfyImg: cui.Image;
        skXfyBtn: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    interface ILastGameData extends cui.IItemData {
        handle: IGameListHandle;
        gameId: number;
    }
    interface IGameListHandle {
        click(item: LastGameItem): any;
    }
    class LastGameView extends UIPopup {
        skClose: cui.ScaleButton;
        skList: cui.DataGroup;
        private _itemPro;
        private _clickTm;
        constructor();
        childrenCreated(): void;
        updateGameList(): void;
        click(item: LastGameItem): void;
    }
    class LastGameItem extends cui.DataItem {
        skImg: cui.Image;
        skNameImg: cui.Image;
        skEnter: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    class LimitReward extends UIPopup {
        skTips: cui.Label;
        skClose: cui.SimpleButton;
        skList: cui.DataGroup;
        private _itemPro;
        constructor();
        childrenCreated(): void;
        updateView(): void;
        protected onDispose(): void;
    }
    class LimitRewardItem extends cui.DataItem {
        skOverImg: cui.Image;
        skGold: cui.BitmapLabel;
        skName: cui.Label;
        skContent: cui.Label;
        skGo: cui.ScaleButton;
        skBar: cui.ProgressBar;
        skBarLab: cui.Label;
        skBg: cui.Image;
        skGoldBg: cui.Image;
        private _isGoLink;
        constructor();
        childrenCreated(): void;
        private BtnClick();
        protected dataChanged(): void;
    }
}
declare module game {
    class LimitReward2 extends UIPopup {
        skTime: cui.Label;
        skClose: cui.ScaleButton;
        skList: cui.DataGroup;
        private _itemPro;
        private _tagTm;
        constructor();
        childrenCreated(): void;
        private updateTm();
        updateView(): void;
        protected onDispose(): void;
    }
}
declare module game {
    class LimitRwOpen extends UIPopup {
        skClose: cui.SimpleButton;
        private _tm;
        private _tagTm;
        constructor();
        protected childrenCreated(): void;
        private updateTm();
    }
}
declare module game {
    interface IShowMailItem extends cui.IItemData {
        handle: DeleteMailHandle;
        id: string;
        read: number;
        time: number;
        info: string;
        items: NET_CONF.msg_item[];
    }
    interface DeleteMailHandle {
        click(item: MailItem): any;
        readClick(item: MailItem): any;
    }
    class MailView extends UIPopup {
        skClose: cui.ScaleButton;
        skNoHaveImg: cui.Image;
        skScroller: cui.Scroller;
        skList: cui.DataGroup;
        skFirstPage: cui.ScaleButton;
        skLastPage: cui.ScaleButton;
        skUpPage: cui.ScaleButton;
        skNextPage: cui.ScaleButton;
        skPage: cui.Label;
        skBtnGrp: cui.Group;
        private _pageNum;
        private _dataPro;
        private _arrDate;
        constructor();
        childrenCreated(): void;
        updateView(): void;
        formatMialItem(mailInfo: NET_CONF.msg_some_info): IShowMailItem;
        click(item: MailItem): void;
        readClick(item: MailItem): void;
        onDispose(): void;
    }
    class MailItem extends cui.DataItem {
        skIcon: cui.Image;
        skTime: cui.Label;
        skInfo: cui.Label;
        skRmvMail: cui.ScaleButton;
        skReadBtn: cui.SimpleButton;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
    class MailDetail extends UIPopup {
        skClose: cui.ScaleButton;
        skTitle: cui.Label;
        skSender: cui.Label;
        skContent: cui.Label;
        skOverImg: cui.Image;
        skAccessory: cui.Group;
        skGold: cui.Label;
        private _info;
        constructor(info: IShowMailItem);
        childrenCreated(): void;
    }
}
declare module game {
    class NoticeHall extends cui.Component {
        skNoticeBg: cui.Image;
        skBtn: cui.ScaleButton;
        skTitle1: cui.Label;
        skTitle2: cui.Label;
        skTitle3: cui.Label;
        skIcon: cui.Image;
        skMenuNotice: cui.MenuGroup;
        skScr: cui.Scroller;
        skGrp: cui.Group;
        skInGrp: cui.Group;
        skImg: cui.Image;
        skDom: game.UIIFrame;
        private _state;
        private _showNoticeDatas;
        private _curTag;
        private _parent;
        private _rmvDom;
        constructor(state: number, parent?: any);
        protected childrenCreated(): void;
        setState(state: number): void;
        /**
         *
         * @param isBack 是否是返回公告
         */
        resetView(isBack?: boolean): void;
        updateView(): void;
        private clickMenu(item);
        private reflshMenu(tag);
        private getListByState();
    }
}
declare module game {
    interface INoticeData {
        _id: string;
        Page: string;
        Title: string;
        Notice: string;
        ShowStage: number;
        Id: string;
        EndTime: string;
        StartTime: string;
        Games: number;
        AgentId: number;
        ShowIdx: number;
        Url: string;
        NoticeType: number;
        Packages: number[];
    }
    const enum noticeState {
        login = 0,
        hall = 1,
        hallPop = 2,
    }
    const enum noticeType {
        one = 1,
        two = 2,
        three = 3,
        oneToOne = 101,
        oneToTwo = 102,
        oneToThree = 103,
    }
    class NoticeView extends UIPopup {
        skClose: cui.ScaleButton;
        private _state;
        private skHall;
        constructor(state: number);
        protected childrenCreated(): void;
    }
}
declare module game {
    class NotifyUI extends cui.Component {
        skTxt: cui.Label;
        skBg: cui.Image;
        skAni: cui.UIMovieClip;
        private _stX;
        private _parent;
        private _showing;
        private _data;
        private _sysData;
        constructor();
        onPartAdded(): void;
        rmvParent(p: cui.BaseContainer): void;
        setParent(p: cui.BaseContainer, width?: number): void;
        private update(tm);
        /**
         *
         * @param isNew 是否是服务器发过来的新数据，用作区分延迟跑马灯数据
         */
        private showNext(isNew?);
        private setShowing(b);
        private resetTxt();
        private formatTxt(nodifyData);
        private parseProp(propStr);
    }
}
declare module game {
    interface IShowServiceData extends cui.IItemData {
        handle: LookRuleHander;
        tag: number;
        titleLab: string;
        content: string;
        isNotOpen: boolean;
    }
    interface LookRuleHander {
        click(item: ServiceItem): any;
    }
    interface IShowComplaintsData extends cui.IItemData {
        time: number;
        info: string;
    }
    class ServiceView extends game.UIPopup {
        skConsultation: cui.ScaleButton;
        skSuggestion: cui.ScaleButton;
        skClose: cui.ScaleButton;
        skList: cui.DataGroup;
        private _itemPro;
        private _showArr;
        constructor();
        childrenCreated(): void;
        updateList(list: NET_CONF.msg_faq_def[]): void;
        click(item: ServiceItem): void;
        updateDetailInfo(data: NET_CONF.msg_faq_def): void;
        protected onDispose(): void;
    }
    class ServiceItem extends cui.DataItem {
        skGroup: cui.Group;
        skTitleLab: cui.Label;
        skBtn: cui.ScaleButton;
        skImg: cui.Image;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
    class ComplaintsItem extends cui.DataItem {
        skReturn: cui.Label;
        skTime: cui.Label;
        skAdvice: cui.Label;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
    class Complaints extends game.UIPopup {
        skClose: cui.ScaleButton;
        skMenuGrp: cui.MenuGroup;
        skAdvice: cui.EditableText;
        skSubmission: cui.ScaleButton;
        skHandImage: cui.Image;
        skList: cui.DataGroup;
        skScroller: cui.Scroller;
        private _itemPro;
        private _listArr;
        constructor();
        childrenCreated(): void;
        menuClick(item: cui.MenuItemImage): void;
        updateView(list: NET_CONF.msg_suggest[]): void;
        protected onDispose(): void;
    }
}
declare module game {
    class SettingView extends game.UIPopup {
        skClose: cui.ScaleButton;
        skMusic: cui.ScaleButton;
        skSound: cui.ScaleButton;
        skSwitch: cui.ScaleButton;
        skBinding: cui.ScaleButton;
        skHead: cui.Image;
        skHeadFrame: cui.Image;
        skName: cui.Label;
        skId: cui.Label;
        skPhoneNum: cui.Label;
        skBack: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        private updateHead();
        updateMcAndSd(): void;
    }
}
declare module game {
    class VersionUI {
        private static _inst;
        static getInst(): VersionUI;
        private _gameVer;
        constructor();
        setParent(p: cui.BaseContainer): void;
        setVer(ver: string): void;
    }
}
declare module game {
    module BoxMgr {
        function setParent(parent: cui.Group, layerDelegate: LayerDelegate): void;
        function showBox(txt: string, cb?: (tag: number) => void, tar?: any, isNotOk?: boolean): void;
        function showWarmBox(txt: string): void;
        function showEasyWarmBox(txt: string): void;
    }
}
declare module game {
    class BoxUI extends UIFullFW {
        skTxt: cui.Label;
        skClose: cui.ScaleButton;
        skOk: cui.ScaleButton;
        skGrp: cui.Group;
        private _txt;
        private _data;
        constructor();
        protected childrenCreated(): void;
        setData(txt: string, cb?: (tag: number) => void, tar?: any, isNotOk?: boolean): void;
        private _openAniSelf;
        private getOpenAniSelf();
        protected _aniWrapSelf: TRain.AniWrapper;
        private startAniSelf(ani, fin?, tar?);
        dispose(): void;
    }
}
declare module game {
    class EasyWarmUI extends UIFullFW {
        skNotarize: cui.ScaleButton;
        skContent: cui.Label;
        skTitle: cui.Label;
        private _txt;
        private _data;
        constructor();
        childrenCreated(): void;
        setData(txt: string, cb?: () => void, tar?: any): void;
    }
}
declare module game {
    module TipsMgr {
        function init(): void;
        function setParent(parent: cui.Group, layerDelegate: LayerDelegate): void;
        function clear(): void;
        function clearWait(): void;
        /**
         *
         * @param txt 文本
         * @param tm 延迟多久关闭
         * @param cantTouch 是否接受用的触摸事件
         */
        function waitPrompt(txt: string, tm?: number, cantTouch?: boolean): void;
        function showPrompt(txt: string, color?: UIColor, tm?: number, cantTouch?: boolean, size?: number): void;
    }
}
declare module game {
    class UpDateVer extends UIPopup {
        skTxt: cui.Label;
        skClose: cui.ScaleButton;
        skUpdate: cui.ScaleButton;
        skNotUp: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
    }
}
declare module game {
    class WarmUI extends UIFullFW {
        skNotarize: cui.ScaleButton;
        skContent: cui.Label;
        skTitle: cui.Label;
        private _txt;
        private _data;
        constructor();
        childrenCreated(): void;
        setData(txt: string, cb?: () => void, tar?: any): void;
    }
}
declare module game {
    class NetworkDelay extends cui.Component {
        skDelay: cui.Image;
        skDelayNum: cui.Label;
        constructor();
        childrenCreated(): void;
        setNetDelay(delay: number, isRoll?: boolean): void;
        setScOffX(): void;
    }
}
declare module game {
    class ModName extends UIPopup {
        skBack: cui.ScaleButton;
        skName: cui.EditableText;
        skFirstLab: cui.Image;
        skSecondGp: cui.Group;
        skGold: cui.Label;
        skSure: cui.ScaleButton;
        skCancel: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        private onFocus1(e);
        private OnAccount(e);
    }
}
declare module game {
    const enum perCenterType {
        myInfo = 0,
        vip = 1,
        head = 2,
        accInfo = 3,
    }
    class PersonCenter extends UIPopup {
        skBack: cui.ScaleButton;
        skIconImg: cui.Image;
        skIconFrame: cui.Image;
        skName: cui.Label;
        skMod: cui.ScaleButton;
        skId: cui.Label;
        skAddresss: cui.Label;
        skList: cui.DataGroup;
        skCopyId: cui.ScaleButton;
        skMenuBtn: cui.MenuGroup;
        skInfoBG: cui.Image;
        skLeftbtn: cui.SimpleButton;
        skRightbtn: cui.SimpleButton;
        skAwardBtn: cui.ScaleButton;
        skReceive1: cui.ScaleButton;
        skReceive2: cui.ScaleButton;
        skLeftlab: cui.BitmapLabel;
        skRightlab: cui.BitmapLabel;
        skGoldLab: cui.BitmapLabel;
        skVipGroup: cui.Group;
        skHeadScr: cui.Scroller;
        skHeadInfoBg: cui.Image;
        skBarLabel: cui.Label;
        skBar: cui.ProgressBar;
        skHelp: cui.ScaleButton;
        skActs: cui.DataGroup;
        skInfoGrp: cui.Group;
        skUserGrp: cui.Group;
        skAllAward: cui.Label;
        skAllGold: cui.Label;
        skCurGold: cui.Label;
        skInfoRule: cui.ScaleButton;
        skInfoSc: cui.Scroller;
        skInfoNone: cui.Image;
        skUpCode: cui.ScaleButton;
        skAdd: cui.ScaleButton;
        skGold: cui.Label;
        skCode: cui.Label;
        skInfos: cui.DataGroup;
        skTxt1: cui.Label;
        skTxt2: cui.Label;
        skTxt3: cui.Label;
        skTxt4: cui.Label;
        skTxt5: cui.Label;
        skTxt6: cui.Label;
        skTxt7: cui.Label;
        skVipScr: cui.TableScroller;
        private _curIcon;
        private _iconArr;
        private _dataArr;
        private _dataPro;
        private _actPro;
        private _reawrdPro;
        private _tagTm;
        private _isHaveTag;
        private _helpView;
        private _index;
        private _cenOpenData;
        constructor(data?: {
            type: perCenterType;
        });
        childrenCreated(): void;
        showApiBtn(): void;
        clickBtn(item: cui.SimpleButton): void;
        initConf(): void;
        openHelp(rid: number): void;
        updateHead(): void;
        private initIcons();
        private showIcontTxt();
        private isLock(iconStr);
        menuClick(item: cui.MenuItemImage): void;
        vipInfoResult(data: any, isVip: boolean): void;
        updataVipInfo(data: NET_CONF.s2c_req_vip_info_result): void;
        updateVipActivity(data: NET_CONF.s2c_activity_vip_ac_list_result): void;
        updateVipReawrd(data: NET_CONF.s2c_activity_reward_log_result): void;
        onDispose(): void;
    }
    class helpView extends UIPopup {
        skClose: cui.ScaleButton;
        skGrp: cui.Group;
        skTitle: cui.Image;
        constructor();
        protected childrenCreated(): void;
        updateRule(rid: number): void;
    }
}
declare module game {
    const enum CHAT_EVT {
        SEND_EMOJI = "send_emoji",
        SEND_TEXT = "send_text",
    }
    interface IChatData {
        chatUrl: string;
        mediaUrl: string;
        playId: number;
        roomId: string;
        sign: string;
        headGrp: {
            playid: number;
            head: string;
        }[];
    }
    interface IChatHisData extends cui.IItemData {
        isSelfId: boolean;
        head: string;
        info: string;
    }
    class Chat extends cui.Component {
        skSoundBtn: cui.ScaleButton;
        skReceiver: cui.ScaleButton;
        skBtnMsg: cui.ScaleButton;
        skScroll2: cui.TableScroller;
        private isMsgOpen;
        private skGrpChat;
        private skBtnSend;
        private skInputMsg;
        private skGrp;
        skEmojiList: cui.DataGroup;
        skTextList: cui.DataGroup;
        skHisList: cui.DataGroup;
        skSendImg: cui.Image;
        skRecImg: cui.Image;
        private _emojiPro;
        private _textPro;
        private _hisPro;
        private _messAges;
        private _headGrp;
        private _soundOpen;
        private _receiverOpen;
        private _curPlayId;
        private _sendState;
        private _recvState;
        private _sendTag;
        private _recvTag;
        private _sendNum;
        private _recvNum;
        constructor();
        initChatSys(data: IChatData): void;
        closeChatSys(): void;
        addHeadGrp(head: {
            playid: number;
            head: string;
        }): void;
        rmvHeadGrp(head: {
            playid: number;
            head: string;
        }): void;
        childrenCreated(): void;
        private updateState(item);
        private upMediaState(name, status);
        private messAgeBack(messages);
        private updateMsg();
        private getHeadData(playId);
        private initEmoji();
        private initText();
        clickBtn(item: (ItemTile | HeadTile)): void;
        private setMenuBtn(item);
        onClickMsg(): void;
        onSendMsg(): void;
        dispose(): void;
    }
    class ChatHisItem extends cui.DataItem {
        skLeftGrp: cui.Group;
        skRightGrp: cui.Group;
        skLeftLabGrp: cui.Group;
        skRightLabGrp: cui.Group;
        skLeftHead: cui.Image;
        skLeftEmoji: cui.Image;
        skLeftLab: cui.Label;
        skRightHead: cui.Image;
        skRightEmoji: cui.Image;
        skRightLab: cui.Label;
        constructor();
        dataChanged(): void;
    }
}
declare module ChatClient {
    enum ChatEventType {
        Send = 0,
        StartRecord = 1,
        FinishRecord = 2,
        Message = 3,
    }
    function init(hostName: string, playerId: number, roomId: string, sign: string): void;
    function close(): void;
    function sendTextMessage(info: string): number;
    function sendRecordMessage(recordId: number): number;
    function playRecord(url: string): void;
    type SendCb = (clientId: number, message: chatProtocols.messageData) => void;
    type StartRecordCb = (success: boolean) => void;
    type FinishRecordCb = (success: boolean, recordId: number) => void;
    type MessageCb = (messages: chatProtocols.messageData[]) => void;
    function on(eventType: ChatEventType.Send, callback: SendCb, tar: any): any;
    function on(eventType: ChatEventType.StartRecord, callback: StartRecordCb, tar: any): any;
    function on(eventType: ChatEventType.FinishRecord, callback: FinishRecordCb, tar: any): any;
    function on(eventType: ChatEventType.Message, callback: MessageCb, tar: any): any;
    function startRecord(): void;
    function finishRecord(cancel: boolean): void;
    function sendMsg(data: string): void;
}
declare module ChatClient {
    class SendTask {
        clientId: number;
        sendData: string;
        init(clientId: number, info: string): void;
        initRecord(clientId: number, info: string, soundLength: number): void;
        run(): void;
    }
    class PlayRecordTask {
        private _sound;
        private _soundChannel;
        private _soundUrl;
        private _isStop;
        constructor(url: string);
        play(): void;
        loadComplete(): void;
        stop(): void;
    }
}
declare module MediaClient {
    function init(hostName: string, playerId: number, roomId: string, sign: string): void;
    function isSupport(): any;
    function close(): void;
    function setEnableMic(enable: boolean): void;
    function setEnableAudio(enable: boolean): void;
    enum MediaEventType {
        ConnectStatus = 0,
    }
    type ConnectStatusCb = (name: string, status: string) => void;
    function on(eventType: MediaEventType.ConnectStatus, callback: ConnectStatusCb, tar: any): any;
    function onConnectStatus(name: string, status: string): void;
}
declare module game {
    class ChipComp extends cui.Component {
        private _fontArr;
        private _indexY;
        constructor();
        childrenCreated(): void;
        setFont(fontArr: number[]): void;
        updateChip(): void;
        clickChip(tile: cui.UITile): void;
    }
}
declare module game {
    interface customData {
        checkConfArr: number[];
        customConfArr: number[];
        roomId: number;
    }
    interface chooseData {
        skinNm?: string;
        chipTp?: string;
        chipNumTp?: string;
        chipNumTxtTp?: string;
        itemSkinNm?: string;
    }
    class CustomChipView extends UIPopup {
        skClose: cui.ScaleButton;
        skSure: cui.ScaleButton;
        skBgImg: cui.Image;
        skList: cui.DataGroup;
        private _id;
        private _checkTags;
        private _chooseData;
        private _initData;
        private _itemPro;
        private _showArrs;
        constructor(id: confConsts.GameTp, initData: customData, choosData?: chooseData);
        childrenCreated(): void;
        private formatChip(idx, chipNum);
        checkSure(): void;
        clickBtn(item: ItemTile): void;
    }
}
declare module game {
    class ApiDefeat extends UIPopup {
        skClose: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
    }
}
declare class LoadingUI extends egret.Sprite {
    private textField;
    constructor();
    createdView(): void;
    setProgress(current: any, total: any): void;
}
declare module game {
    class DefeatShop extends UIPopup {
        skClose: cui.ScaleButton;
        skShop: cui.SimpleButton;
        constructor();
        childrenCreated(): void;
    }
}
declare module game {
    class ChildGMRecord extends cui.Component {
        skBtn: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
    }
}
declare module game {
    interface IRecordData extends cui.IItemData {
        handle: IGameRcdHandle;
        idx: number;
        login_Id: string;
        room_id_txt: string;
        bet_gold: number;
        add_gold: number;
        new_gold: number;
        log_time: number;
        reason: number;
        room_name_type: number;
    }
    interface IGameRcdHandle {
        click(item: GameAllRecordItem | GameRecordItem): any;
    }
    class GameAllRecord extends UIPopup {
        skClose: cui.ScaleButton;
        skMenuGame: cui.MenuGroup;
        skList: cui.DataGroup;
        skTip: cui.Label;
        skNoRecord: cui.Image;
        private _itemPro;
        private _selTag;
        constructor();
        childrenCreated(): void;
        private initGameList();
        click(item: GameAllRecordItem): void;
        updateRecordList(data: NET_CONF.s2c_gold_record): void;
        private updateMenu(list);
        private clickBtn(item);
        onDispose(): void;
    }
    class GameAllRecordItem extends cui.DataItem {
        skId: cui.Label;
        skNum: cui.Label;
        skRoomId: cui.Label;
        skBetNum: cui.Label;
        skProfit: cui.Label;
        skTime: cui.Label;
        skCopyBtn: cui.ScaleButton;
        skBanker: cui.Image;
        skBg: cui.Image;
        skBalanceLab: cui.Label;
        private _roomNmTps;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    class GameRecord extends UIPopup {
        skClose: cui.ScaleButton;
        skList: cui.DataGroup;
        skTip: cui.Label;
        skNoRecord: cui.Image;
        private _gameId;
        private _itemPro;
        constructor(id: confConsts.GameTp);
        childrenCreated(): void;
        click(item: GameRecordItem): void;
        updateRecordList(data: NET_CONF.s2c_gold_record): void;
        onDispose(): void;
    }
    class GameRecordItem extends cui.DataItem {
        skId: cui.BitmapLabel;
        skNumTitle: cui.Label;
        skRoomTitle: cui.Label;
        skBettitle: cui.Label;
        skProfitTitle: cui.Label;
        skTimeTitle: cui.Label;
        skBanker: cui.Image;
        skNum: cui.Label;
        skRoom: cui.Label;
        skBet: cui.Label;
        skProfit: cui.Label;
        skTime: cui.Label;
        skBalanceLab: cui.Label;
        skCopyBtn: cui.ScaleButton;
        skBalanceTitle: cui.Label;
        private _roomNmTps;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    class GoodRdView extends UIPopup {
        skClose: cui.ScaleButton;
        skAll: cui.ScaleButton;
        skSure: cui.ScaleButton;
        private _tempGoodRdData;
        private _chooseTag;
        private _isAllChoose;
        private _itemArr;
        constructor(goodRdConf: any);
        childrenCreated(): void;
        updateView(): void;
        itemClick(item: ItemTile): void;
        allChoose(): void;
        setSure(): void;
    }
}
declare module game {
    interface IRoadData extends cui.IItemData {
        handle: IGoodRdHandle;
        gameid?: number;
        roomid?: number;
        handicapid?: number;
        haolu_type?: number;
        gdType: string;
        road: any;
        roomNmType: number;
        roomIDTxt: string;
    }
    interface IGoodRdHandle {
        click(item: GoodRoadItem): any;
    }
    let ROOM_TYPE_NAME: number[];
    class GoodRoadView extends UIPopup {
        skGrpGoodRoad: cui.Group;
        skSheZhi: cui.ScaleButton;
        skYiWen: cui.ScaleButton;
        skNotRecommend: cui.Image;
        skScrollerRoad: cui.Scroller;
        skDataGrpRoad: cui.DataGroup;
        private _itemPro;
        private _gameid;
        private _roomid;
        private _roomCfgs;
        private _roadListData;
        private _roadSetData;
        private _goodRoad;
        private skinItem;
        constructor(gameid: number, roomid: number, roadListConf: any, roadSetConf: any, skinName?: any, skinItem?: any);
        childrenCreated(): void;
        click(item: GoodRoadItem): void;
        updateGoodRoad(): void;
        getRoadRoute(roomid: number, handicapid: number): game.RouteModel;
        getNmTypeAndIDTxt(roomid: number): {
            NmType: ROOM_TYPE;
            IDTxt: string;
        };
        onDispose(): void;
    }
    class GoodRoadItem extends cui.DataItem {
        skGrp: cui.Group;
        skGame: cui.Label;
        skChang: cui.Label;
        skNameBg: cui.Image;
        skName: cui.Label;
        skEnter: cui.ScaleButton;
        skBtnItem: cui.ScaleButton;
        skPaiLu: cui.Group;
        roomId: number;
        private _uiRouteList;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
        getRoomId(): number;
    }
    class goodRoadRoute extends game.RouteItemBase {
        skDL: game.RouteCom;
        constructor();
    }
}
declare module game {
    class RoadListView extends game.UIPopup {
        skBtnClose: cui.ScaleButton;
        skScroller: cui.Scroller;
        skDataGrp: cui.DataGroup;
        _arr: cui.ArrayCollection;
        private _tempRoadData;
        constructor(goodRdConf: any);
        childrenCreated(): void;
        updateList(): void;
    }
    class RoadListItem extends cui.DataItem {
        skName: cui.Label;
        skExample: cui.Image;
        skDefinition: cui.Label;
        constructor();
        protected dataChanged(): void;
    }
}
declare module game {
    class RoadSetView extends UIPopup {
        skClose: cui.ScaleButton;
        skAll: cui.ScaleButton;
        skSure: cui.ScaleButton;
        private _tempGoodRdData;
        private _chooseTag;
        private _isAllChoose;
        private _itemArr;
        constructor(goodRdConf: any);
        childrenCreated(): void;
        getFilte(filtes: number): void;
        updateView(): void;
        itemClick(item: ItemTile): void;
        allChoose(): void;
        setSure(): void;
    }
}
declare module game {
    class RouteIntroduction extends UIPopup {
        skClose: cui.ScaleButton;
        skLeftBtn: cui.ScaleButton;
        skRightBtn: cui.ScaleButton;
        skInGrp: cui.Group;
        skImgGrp: cui.MenuGroup;
        private _routeInConfs;
        private _curTg;
        private _maxTg;
        private _menuItemSkinNm;
        constructor(routeInConfs: any[], skin?: string, menuItemSkinNm?: string);
        protected childrenCreated(): void;
        private rmvInGrp();
        private btnClick(item);
        private clickMenu(item);
        private updateView();
    }
}
declare module game {
    interface ICloseDoorData {
        leftX: number;
        leftEndX: number;
        rightX: number;
        rightEndX: number;
        leftY?: number;
        rightY?: number;
    }
    class Room1 extends UIFullFW {
        skBack: cui.ScaleButton;
        skQuickStart: cui.SimpleButton;
        skList: cui.DataGroup;
        skTitle: cui.Image;
        skGroup: cui.Group;
        skScroller: cui.Scroller;
        skImg: UIDBAni;
        skNotify: cui.Group;
        skVerGrp: cui.Group;
        skConfGrp: game.ConfGroup;
        skGameRule: cui.ScaleButton;
        skNoCfg: cui.Label;
        skScrGrp: cui.Group;
        skRecordBtn: ChildGMRecord;
        private _closeDoorWrapper;
        private _itemPro;
        private _closeDoorData;
        private _tag;
        constructor(data?: ICloseDoorData);
        childrenCreated(): void;
        private setScOffX();
        setTitle(value: string, girlDb?: string): void;
        setData(item: any, listArr: any[]): void;
        protected onDispose(): void;
    }
    class Room2 extends UIFullFW {
        skBack: cui.ScaleButton;
        skList: game.UIRouteList;
        skTitle: cui.Image;
        skNotify: cui.Group;
        skRouteIn: cui.ScaleButton;
        skGameRule: cui.ScaleButton;
        skVerGrp: cui.Group;
        skNoCfg: cui.Label;
        skRecordBtn: ChildGMRecord;
        constructor();
        setTitle(value: string): void;
    }
    class Room3 extends UIFullFW {
        skBack: cui.ScaleButton;
        skList: game.UIRouteList2;
        skTitle: cui.Image;
        skNotify: cui.Group;
        skRouteIn: cui.ScaleButton;
        skGameRule: cui.ScaleButton;
        skVerGrp: cui.Group;
        skNoCfg: cui.Label;
        skRecordBtn: ChildGMRecord;
        constructor();
        setTitle(value: string): void;
    }
    class Room4 extends UIFullFW {
        skBack: cui.ScaleButton;
        skList: game.UIRouteList;
        skTitle: cui.Image;
        skNotify: cui.Group;
        skRouteIn: cui.ScaleButton;
        skGameRule: cui.ScaleButton;
        skVerGrp: cui.Group;
        skNoCfg: cui.Label;
        skRecordBtn: ChildGMRecord;
        skGroup: cui.Group;
        skClassGrp: cui.MenuGroup;
        skGold: cui.BitmapLabel;
        skGirlDb: UIDBAni;
        skImg: cui.Image;
        constructor();
        setTitle(value: string, girlDb?: string): void;
        setDbImg(imgV: boolean): void;
    }
}
declare module game {
    class RoutePop extends game.UIPopup {
        skClose: cui.ScaleButton;
        skList: game.UIRouteList;
        skImg: cui.Image;
        constructor();
        childrenCreated(): void;
        setImg(value: string): void;
    }
}
declare module game {
    class ParticleAni {
        private _p;
        private _sys;
        constructor(parent: egret.DisplayObjectContainer, particleNm: string);
        start(): void;
        stop(): void;
        dispose(): void;
        private onFin();
    }
}
declare module game {
    class UIRouteList2 extends cui.Group {
        private _items;
        /**
         *
         * @param datas
         * @param itemCls 必须继承RouteItemBase2
         */
        init(datas: IRouteData[], itemCls: any, haveDbRow?: boolean): void;
        updateRoom(datas: IRoomData[]): void;
    }
    class RouteItemBase2 extends cui.Component {
        skDONG: RouteCom;
        skNAN: RouteCom;
        skXI: RouteCom;
        skBEI: RouteCom;
        _data: RouteModel;
        childrenCreated(): void;
        init(data: game.RouteModel, haveDbRow: boolean): void;
        updateRoom(data: IRoomData): void;
    }
}
declare module game {
    interface IRouteSsqData {
        route: RouteSsqModel;
    }
    class UIRouteList3 extends cui.Group {
        private _items;
        /**
         *
         * @param datas
         * @param itemCls 必须继承RouteItemBase3
         */
        init(datas: IRouteSsqData[], itemCls: any): void;
        initNew(datas: IRouteSsqData[], itemCls: any): void;
        updateRoom(datas: IRoomData[]): void;
    }
    class RouteItemBase3 extends cui.Component {
        skZPL: RouteCom2;
        skDL: RouteCom2;
        skDYZL: RouteCom2;
        skXl: RouteCom3;
        childrenCreated(): void;
        init(data: game.RouteSsqModel): void;
        updateRoom(data: IRoomData): void;
    }
    class RouteCom2 extends cui.Component {
        itemSkinName: string;
        skImg: cui.Image;
        skList: cui.DataGroup;
        skTbScroller: cui.TableScroller;
        private _mo;
        private _tp;
        private _imgLen;
        private _imgW;
        private _oldW;
        private _flashTag;
        private _flashData;
        private _itemPro;
        childrenCreated(): void;
        setModel(tp: RouteTp, mo: RouteSsqModel): void;
        private updateResult(noclear?);
        private updateTile();
        private endFlash();
        dispose(): void;
    }
    class RouteCom3 extends cui.Component {
        itemSkinName: string;
        private _mo;
        skList1: cui.DataGroup;
        skTbScroller: cui.TableScroller;
        private _itemPro;
        childrenCreated(): void;
        setModel(mo: RouteSsqModel): void;
        private updateResult(noclear?);
        dispose(): void;
    }
    class SsqRouteStateTile extends cui.DataItem {
        constructor(skinName?: string);
        dataChanged(): void;
    }
}
declare module game {
    class FifthGuide extends UIFullFW {
        skClose: cui.SimpleButton;
        skSure: cui.ScaleButton;
        skLab: cui.Label;
        constructor();
        childrenCreated(): void;
        clickNext(): void;
    }
}
declare module game {
    class FirstGuide extends UIFullFW {
        skClose: cui.SimpleButton;
        skSure: cui.ScaleButton;
        skPass: cui.ScaleButton;
        skLab: cui.Label;
        constructor();
        childrenCreated(): void;
        clickNext(): void;
    }
}
declare module game {
    class FourthGuide extends UIFullFW {
        skClose: cui.SimpleButton;
        skSure: cui.ScaleButton;
        skLab: cui.Label;
        skLab1: cui.Label;
        skLab2: cui.Label;
        skLab3: cui.Label;
        skLab4: cui.Label;
        skLab5: cui.Label;
        constructor();
        childrenCreated(): void;
        clickNext(): void;
    }
}
declare module game {
    class SecondGuide extends UIFullFW {
        skClose: cui.SimpleButton;
        skSure: cui.ScaleButton;
        skLab: cui.Label;
        skLab1: cui.Label;
        skLab2: cui.Label;
        skLab3: cui.Label;
        constructor();
        childrenCreated(): void;
        clickNext(): void;
    }
}
declare module game {
    class ThirdGuide extends UIFullFW {
        skClose: cui.SimpleButton;
        skSure: cui.ScaleButton;
        skLab: cui.Label;
        skLab1: cui.Label;
        skLab2: cui.Label;
        skLab3: cui.Label;
        constructor();
        childrenCreated(): void;
        clickNext(): void;
    }
}
declare module game {
    class OutGameList extends cui.Component {
        skClose: cui.SimpleButton;
        skBackPure: cui.ScaleButton;
        skRulePure: cui.ScaleButton;
        skmusicPure: cui.ScaleButton;
        skPure: cui.ScaleButton;
        skDbImg: cui.Image;
        skRecordPure: cui.ScaleButton;
        skBtn: cui.ScaleButton;
        skGroup: cui.Group;
        private _isPure;
        private _gameRecdY;
        private _soundY;
        constructor(isPure?: boolean, skin?: string);
        childrenCreated(): void;
        /**
         *
         * @param val 是否是试玩场
         */
        setFreeRoom(val: boolean): void;
        setScOffX(): void;
    }
}
declare module game {
    class RebateDetailView extends UIPopup {
        private skClose;
        private skList;
        private _itemPro;
        private _ts;
        constructor(ts: number);
        childrenCreated(): void;
        private setData(info);
        private getClassType(gameid);
        onDispose(): void;
    }
    class RebateDetailItemView extends cui.DataItem {
        private skType;
        private skBet;
        private skAwd;
        private skGoBtn;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    interface IRebateData extends cui.IItemData {
        handle: RebateView;
        gameid: number;
        type?: number;
        typeN?: string;
        bet: number;
        rebate: number;
    }
    class RebateView extends UIPopup {
        private skClose;
        private skTitle;
        private skEmpty;
        private skMenuGrp;
        private _selTag;
        private skBetGrp;
        private skBetList;
        private _betItemPro;
        private skLogGrp;
        private skLogList;
        private _logItemPro;
        private skRebate;
        private skReTxt;
        private skAwdBtn;
        constructor();
        childrenCreated(): void;
        private setEmpty(empty, isLog);
        private cliskMenus(item);
        private updateBetList(data);
        private getAllTypeLog();
        private getTypeName(tid);
        private getClassType(gameid);
        private setAwardBtn(enabled);
        private updateLogList(data);
        private getAwardResult(gold);
        onDispose(): void;
    }
    class RebateListItemView extends cui.DataItem {
        private skType;
        private skBet;
        private skAwd;
        private skGoBtn;
        private _gameid;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
    class RebateLogItemView extends cui.DataItem {
        private skTime;
        private skBet;
        private skAwd;
        private skDetail;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    class CheckBox extends cui.SimpleButton {
        skLabel: cui.Label;
        skIcon: cui.StateImage;
        private _label;
        private _isClick;
        constructor();
        label: string;
        state: string;
        buttonReleased(): void;
    }
}
declare module game {
    class CreateRoomView extends UIPopup {
        skClose: cui.ScaleButton;
        skCardGrp: cui.Group;
        skFkNum: cui.BitmapLabel;
        skRecharge: cui.ScaleButton;
        skRecord: cui.ScaleButton;
        skGameMenu: cui.MenuGroup;
        skListGrp: OptionCardView;
        skSure: cui.ScaleButton;
        skTip: cui.Label;
        skFkImg: cui.Image;
        private _clickTm;
        private _roomType;
        constructor(roomType: number);
        protected childrenCreated(): void;
        private clickMenu(item);
        private clickSure();
        onDispose(): void;
    }
}
declare module game {
    class JoinRoomView extends UIPopup {
        skClose: cui.ScaleButton;
        skCodeMenuGrp: cui.MenuGroup;
        skNumGrp: cui.Group;
        private _flag;
        private _ids;
        constructor();
        protected childrenCreated(): void;
        menuClick(item: cui.MenuItemImage): void;
        private getFkId();
        onDispose(): void;
    }
}
declare module game {
    class OptionCardView extends cui.Group {
        private _svrDatas;
        private _svrData1;
        private _optionCfg;
        private _curGmId;
        constructor();
        childrenCreated(): void;
        createCardView(tag: number, roomType: number): void;
        private changeOption(cardData);
        private hasJoinCond(optionConfs);
        getChooseData(): NET_CONF.msg_sel_roomcard_config;
        dispose(): void;
    }
}
declare module game {
    interface IShowRecordItem extends cui.IItemData {
        handle: RoomCardHandle;
        index: number;
        game_id: number;
        table_id: number;
        rounds_cnt: number;
        begin_time: number;
        players: NET_CONF.replay_player[];
        rounds: NET_CONF.replay_round[];
        base_score: number;
        guildName?: string;
    }
    interface IShowRoomRdItem extends cui.IItemData {
        handle: RoomRdHandle;
        gameId: number;
        logId: string;
        idx: number;
        wins: number[];
    }
    interface RoomCardHandle {
        click(item: RecordItem): any;
    }
    interface RoomRdHandle {
        replayClick(item: RoomRecordItem): any;
    }
    class RoomCardRecordview extends UIPopup {
        skClose: cui.ScaleButton;
        skInfoScr: cui.Scroller;
        skNoRecord: cui.Image;
        skList: cui.DataGroup;
        skTips: cui.Label;
        private _dataPro;
        private _guildName;
        constructor(guildName?: string);
        protected childrenCreated(): void;
        updateView(): void;
        click(item: RecordItem): void;
        onDispose(): void;
    }
    class RecordItem extends cui.DataItem {
        skNum: cui.BitmapLabel;
        skGameName: cui.Label;
        skRoomId: cui.Label;
        skJu: cui.Label;
        skTime: cui.Label;
        skPlayBack: cui.ScaleButton;
        skplayerItemGrp: cui.Group;
        skGuildId: cui.Label;
        private _colors;
        private _winLoseCols;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
        private rmvAllGrpChild();
    }
    class RoomRdInnerView extends UIPopup {
        skNum: cui.BitmapLabel;
        skGameName: cui.Label;
        skRoomId: cui.Label;
        skJu: cui.Label;
        skTime: cui.Label;
        skplayerItemGrp: cui.Group;
        skClose: cui.ScaleButton;
        skNmGrp: cui.Group;
        skInfoScr: cui.Scroller;
        skList: cui.DataGroup;
        skGuildId: cui.Label;
        private _itemPro;
        private _data;
        private _detailData;
        private _guildName;
        private _curIdx;
        private _colors;
        private _winLoseCols;
        constructor();
        childrenCreated(): void;
        setData(data: IShowRecordItem): void;
        private detailBack(detailData);
        private updateView();
        private rmvAllGrpChild();
        replayClick(item: RoomRecordItem): void;
        onDispose(): void;
    }
    class RoomRecordItem extends cui.DataItem {
        skJuNum: cui.Label;
        skPlayerItemInnerGrp: cui.Group;
        skItemBg: cui.Image;
        skPlay: cui.ScaleButton;
        private _winLoseCols;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
        private rmvAllGrpChild();
    }
}
declare module game {
    class RoomCardView extends UIFullFW {
        skBack: cui.ScaleButton;
        skNotify: cui.Group;
        skImg: game.UIDBAni;
        skCreateBtn: cui.SimpleButton;
        skJoinBtn: cui.SimpleButton;
        skFriendBtn: cui.SimpleButton;
        skTips: cui.Image;
        constructor();
        childrenCreated(): void;
        private updateRed();
        private roomCardClick(btn);
        protected onDispose(): void;
    }
}
declare module game {
    class RoomMenuImage extends cui.MenuItemImage {
        private _upSrc;
        private _downSrc;
        constructor();
        selected: boolean;
        setIconState(upSrc: string, downSrc: string): void;
    }
}
declare module game {
    class SelItemComp extends cui.Component {
        skLab: cui.Label;
        skMenuGrp: cui.MenuGroup;
        skExpendGrp: cui.Group;
        skBottomBg: cui.Image;
        skUse: cui.Label;
        skBtnGrp: cui.Group;
        skImg: cui.Image;
        private _svrData;
        private _idx;
        private _type;
        private _roomType;
        private _data;
        constructor(room_type: number);
        /**
         *
         * @param idx 第几行
         * @param data 配置数据
         * @param svrData 服务器数据
         * @param svrData1 特殊情况的数据
         */
        setData(idx: number, data: RoomCardOptionConf, svrData: number[], svrData1?: number[]): void;
        private initSingleOption(values);
        private initMoreOption(values);
        /**
         *
         * @param value 返回的是当前选择的第几个
         */
        changeCardNum(tag: number): void;
        chgJoinCondition(tag: number): void;
    }
}
declare module game {
    class UpdataGame extends UIPopup {
        skXzBg: cui.Image;
        skProBar: cui.Image;
        skBarNum: cui.BitmapLabel;
        skUpGameing: cui.Label;
        private _circleMask;
        private _gameId;
        constructor(id: confConsts.GameTp);
        protected childrenCreated(): void;
        update(val: {
            state: GMD_UPDATE_STATE;
            proBar?: number;
        }): void;
        onDispose(): void;
    }
}
declare module game {
    interface IApplyRecordItem extends cui.IItemData {
        time: number;
        guild_id: number;
        ask_status: number;
    }
    class ApplyRecordPop extends UIPopup {
        skClose: cui.ScaleButton;
        skNoApply: cui.Image;
        skList: cui.DataGroup;
        private _recordPro;
        constructor();
        childrenCreated(): void;
        updateView(): void;
        onDispose(): void;
    }
    class ApplyRecordItem extends cui.DataItem {
        skDate: cui.Label;
        skApply: cui.Label;
        skResult: cui.Label;
        constructor();
        childrenCreated(): void;
        dataChanged(): void;
    }
}
declare module game {
    class CreateFriendCircle extends UIPopup {
        skCopyWx: cui.ScaleButton;
        skClose: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
    }
}
declare module game {
    interface IFriendItemData extends cui.IItemData {
        idx: number;
        name: string;
        head: string;
        headFrame: number;
        id: number;
        score: number;
        isOnline: boolean;
        gameId: number;
        tableId: string;
    }
    interface IFriendGmItemData extends cui.IItemData {
        handle: FriendGmHandle;
        isCreate: boolean;
        gameId?: number;
        room_no?: number;
        plays?: number[];
        room_cfg?: NET_CONF.msg_sel_roomcard_config;
        state: number;
        isOpenDesc: boolean;
    }
    interface FriendGmHandle {
        clickGame(FrdGameListItem: any): any;
        openDesc(FrdGameListItem: any): any;
    }
    class FriendCircleHome extends UIFullFW {
        skTitle: cui.Label;
        skChange: cui.ScaleButton;
        skChangeID: cui.ScaleButton;
        skID: cui.Label;
        skNum: cui.Label;
        skOnline: cui.Label;
        skRoomCard: cui.Label;
        skAgent: cui.ScaleButton;
        skNews: cui.ScaleButton;
        skRecord: cui.ScaleButton;
        skReport: cui.ScaleButton;
        skMemberList: cui.Group;
        skCreateNm: cui.Label;
        skOff: cui.SimpleButton;
        skOpen: cui.ScaleButton;
        skUserScr: cui.Scroller;
        skUserList: cui.DataGroup;
        skGameScr: cui.Scroller;
        skGameList: cui.DataGroup;
        skSet: cui.ScaleButton;
        skQuickStart: cui.ScaleButton;
        skBtn: cui.ScaleButton;
        skGroup: cui.ScaleButton;
        skBackPure: cui.ScaleButton;
        skRulePure: cui.ScaleButton;
        skmusicPure: cui.ScaleButton;
        skPure: cui.ScaleButton;
        skBottom1: cui.Group;
        skBottom2: cui.Group;
        skAgent1: cui.ScaleButton;
        skNews1: cui.ScaleButton;
        skRecord1: cui.ScaleButton;
        skNotice: cui.ScaleButton;
        skRedImg: cui.Image;
        skRedImgNotice: cui.Image;
        private _isOut;
        private _listFlag;
        private _listPro;
        private _gameListPro;
        private _MemberLists;
        private _clickTm;
        constructor();
        childrenCreated(): void;
        private openDetail();
        private updateNoticeRed();
        private quickStartgm();
        private getQuickRoom();
        private openRecord();
        private setOffX();
        private updateRoomList();
        private hideBtn();
        private updateRed();
        protected onResize(w: number, h: number): void;
        private upListBtn();
        private updateMemberList();
        updateView(): void;
        private getOnlineNum();
        clickBtn(): void;
        clickGame(item: FriendListItem): void;
        openDesc(item: FriendListItem): void;
        onDispose(): void;
    }
    class FriendListItem extends cui.DataItem {
        skNum: cui.BitmapLabel;
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skScore: cui.Label;
        skNotLine: cui.Label;
        skOnline1: cui.Label;
        skGameName: cui.Label;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
    class FrdGameListItem extends cui.DataItem {
        skRoomBg: cui.Image;
        skRoomId: cui.Label;
        skBg: cui.Image;
        skJia: cui.Image;
        skGameName: cui.Label;
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skGameInfo: cui.ScaleButton;
        skJoin: cui.ScaleButton;
        skInfoGrp: cui.Group;
        skOwner: cui.Group;
        skOther: cui.Group;
        skBtn: cui.SimpleButton;
        skInfoLabels: cui.Group;
        skRoom: cui.Image;
        private _size;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
        dispose(): void;
        private getMember(playId);
    }
}
declare module game {
    class FriendCirclePop extends UIPopup {
        skJoinFriend: cui.ScaleButton;
        skCreateFriend: cui.ScaleButton;
        skClose: cui.ScaleButton;
        skRecord: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        onDispose(): void;
    }
}
declare module game {
    class FriendNoticePop extends UIPopup {
        skLab: cui.Label;
        skWord: cui.EditableText;
        skClose: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        onDispose(): void;
    }
}
declare module game {
    interface IFriendPointData extends IFriendItemData {
        handle: IFirendPointHandle;
    }
    interface IFirendPointHandle {
        sfClick(item: FriendPointItem): any;
        xfClick(item: FriendPointItem): any;
        kickClick(item: FriendPointItem): any;
        recordClick(item: FriendPointItem): any;
    }
    class FriendSetPop extends UIPopup {
        skBg: cui.Image;
        skMenuGrp: cui.MenuGroup;
        skSxfScr: cui.Scroller;
        skList: cui.DataGroup;
        skReleaseGrp: cui.Group;
        skLab: cui.Label;
        skWord: cui.EditableText;
        skRelease: cui.ScaleButton;
        skClose: cui.ScaleButton;
        private _itemPro;
        private _MemberLists;
        constructor();
        childrenCreated(): void;
        private onFocus1(e);
        private OnAccount(e);
        private updateMemberList();
        private updatePoint(member_points);
        private menuClick(item);
        sfClick(item: FriendPointItem): void;
        xfClick(item: FriendPointItem): void;
        kickClick(item: FriendPointItem): void;
        recordClick(item: FriendPointItem): void;
        onDispose(): void;
    }
    class FriendPointItem extends cui.DataItem {
        skNum: cui.BitmapLabel;
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skScore: cui.Label;
        skNotLine: cui.Label;
        skOnline1: cui.Label;
        skSf: cui.ScaleButton;
        skXf: cui.ScaleButton;
        skKick: cui.ScaleButton;
        skRecord: cui.ScaleButton;
        skGameName: cui.Label;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    interface IGuildMsgItemData extends cui.IItemData {
        handle: IGuildMsgHandle;
        name: string;
        head: string;
        headFrame: number;
        id: number;
        tag: number;
        time: number;
        state?: number;
        score?: number;
    }
    interface IGuildMsgHandle {
        sureClick(item: GuildMsgItem): any;
        cancelClick(item: GuildMsgItem): any;
    }
    class GuildMsgView extends UIPopup {
        skClose: cui.ScaleButton;
        skMenGrp: cui.MenuGroup;
        skMsgScr: cui.Scroller;
        skList: cui.DataGroup;
        skTip: cui.Label;
        private _listPro;
        private _showMsgData;
        constructor();
        childrenCreated(): void;
        private menuClick(item);
        updateView(tag: any): void;
        sureClick(item: GuildMsgItem): void;
        cancelClick(item: GuildMsgItem): void;
        onDispose(): void;
    }
    class GuildMsgItem extends cui.DataItem {
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skTimeGrp: cui.Group;
        skLab: cui.Label;
        skTime1: cui.Label;
        skSxfGrp: cui.Group;
        skTime2: cui.Label;
        skSfLab: cui.Label;
        skBtnGrp: cui.Group;
        skAgree: cui.ScaleButton;
        skRefuse: cui.ScaleButton;
        skState: cui.Image;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    class JoinFriendCircle extends UIPopup {
        skClose: cui.ScaleButton;
        skCodeMenuGrp: cui.MenuGroup;
        skNumGrp: cui.Group;
        skTip2: cui.Label;
        private _flag;
        private _ids;
        constructor();
        protected childrenCreated(): void;
        menuClick(item: cui.MenuItemImage): void;
        private getFkId();
        onDispose(): void;
    }
}
declare module game {
    class KickMember extends UIPopup {
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skClose: cui.ScaleButton;
        skSure: cui.ScaleButton;
        skCancel: cui.ScaleButton;
        private _data;
        constructor(data: IFriendPointData);
        childrenCreated(): void;
        onDispose(): void;
    }
}
declare module game {
    class ModGuildName extends UIPopup {
        skClose: cui.ScaleButton;
        skGuildName: cui.EditableText;
        skFirstLab: cui.Image;
        skSecondGp: cui.Group;
        skGold: cui.Label;
        skSure: cui.ScaleButton;
        skCancel: cui.ScaleButton;
        constructor();
        childrenCreated(): void;
        private onFocus1(e);
        private OnAccount(e);
    }
}
declare module game {
    class ReportDetail extends UIPopup {
        skClose: cui.ScaleButton;
        skIncome: cui.ScaleButton;
        skPay: cui.ScaleButton;
        skCardNum: cui.Label;
        skSf: cui.Label;
        skXf: cui.Label;
        skZf: cui.Label;
        skDown: cui.ScaleButton;
        skTime: cui.Label;
        skImg: cui.Image;
        skSmallBg: cui.Image;
        skDate: cui.Label;
        skIncomeGrp: cui.Group;
        skOpen: cui.ScaleButton;
        skFk: cui.Label;
        skSf1: cui.Label;
        skXf1: cui.Label;
        skDownBtn: cui.SimpleButton;
        skDotLine: cui.Group;
        skDotLine1: cui.Group;
        skDotImg: cui.Image;
        private _isCurMonth;
        private _curMonth;
        private _curTag;
        private _curDate;
        private _curDay;
        private _curDotLine;
        private _radius;
        private _pointDatas;
        constructor();
        childrenCreated(): void;
        private btnClick(e);
        private showDotImg();
        private showData(item?);
        private showTxt();
        private drawLine();
        private showTime();
        private updateView();
        private openView();
        getCurDate(): string;
        getCurMonthDay(day?: number): string;
        onDispose(): void;
    }
}
declare module game {
    interface IReportDetailData extends cui.IItemData {
        head: string;
        headFrame: number;
        name: string;
        id: number;
        time: number;
        isPay: boolean;
        gameId?: number;
        score?: number;
        roomCard?: number;
    }
    class ReportDetailPop extends UIPopup {
        skClose: cui.ScaleButton;
        skList: cui.DataGroup;
        private _listPro;
        private _type;
        private _data;
        constructor(type: number, data: any);
        childrenCreated(): void;
        private updateView();
        onDispose(): void;
    }
    class ReportDtItem extends cui.DataItem {
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skScore: cui.Label;
        skDate: cui.Label;
        skDate1: cui.Label;
        skTimeBg: cui.Image;
        skTimeBg1: cui.Image;
        skGameName: cui.Label;
        skGameNum: cui.Label;
        skFkGrp: cui.Group;
        constructor();
        childrenCreated(): void;
        dataChanged(): void;
    }
}
declare module game {
    class UpDownPoint extends UIPopup {
        skClose: cui.ScaleButton;
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skScore: cui.Label;
        skNotLine: cui.Label;
        skOnline1: cui.Label;
        skLimit: cui.EditableText;
        skSure: cui.ScaleButton;
        skCancel: cui.ScaleButton;
        skTip: cui.Label;
        skBg: cui.Image;
        skGameName: cui.Label;
        private _isUp;
        private _data;
        constructor();
        childrenCreated(): void;
        setData(data: IFriendPointData, isUp: boolean): void;
        private onFocus1(e);
        private OnLimit(e);
        onDispose(): void;
    }
}
declare module game {
    interface IPointRdItemData extends cui.IItemData {
        idx: number;
        time: number;
        score: number;
    }
    class UpDwPointRecord extends UIPopup {
        skClose: cui.ScaleButton;
        skHead: cui.Image;
        skFrame: cui.Image;
        skName: cui.Label;
        skID: cui.Label;
        skScore: cui.Label;
        skNotLine: cui.Label;
        skOnline1: cui.Label;
        skTotalSf: cui.Label;
        skTotalXf: cui.Label;
        skList: cui.DataGroup;
        skGameName: cui.Label;
        skTip: cui.Label;
        private _data;
        private _listPro;
        constructor(data: IFriendPointData);
        childrenCreated(): void;
        updateView(): void;
        onDispose(): void;
    }
    class PointRecordItem extends cui.DataItem {
        skDate: cui.Label;
        skNum: cui.Label;
        skScore: cui.Label;
        constructor();
        childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    class RuleView extends UIPopup {
        skClose: cui.ScaleButton;
        skGrp: cui.Group;
        skInGrp: cui.Group;
        skBtnGrp: cui.MenuGroup;
        skScr: cui.Scroller;
        private _ruleConfs;
        constructor(ruleConfs: any[], skin?: string);
        protected childrenCreated(): void;
        private rmvInGrp();
        private updateView(confs);
        private getTxtLen(str, flagStr);
        private menuClick(item);
    }
}
declare module game {
    class PseudoWallet extends UIPopup {
        skBtn: cui.SimpleButton;
        skName: cui.Label;
        skBalance1: cui.BitmapLabel;
        skBalance2: cui.BitmapLabel;
        skTip1: cui.Image;
        skTip2: cui.Image;
        skClickTip: cui.EditableText;
        skSendBtn: cui.SimpleButton;
        skComeTo: cui.ScaleButton;
        skPut: cui.ScaleButton;
        skTip: cui.Label;
        skInput: cui.Label;
        skBg: cui.Image;
        skMidGrp: cui.Group;
        skMidAniGrp: cui.Group;
        private _curBalanceVal;
        private _countDownTm;
        private _countDownTag;
        private _state;
        private _addTag;
        private _addBack;
        constructor();
        childrenCreated(): void;
        private clickStage(evt);
        private showAni();
        private showMidGrp();
        private hideMidGrp();
        private showHideAni(dispaly, isOpen, cb?);
        private closeAni();
        private upBalance();
        private onFocus();
        private outFocus();
        private OnAccount(e);
        private checkBalance(gold);
        private addSingleGold(result, gold);
        private comeToCurAcc();
        onDispose(): void;
    }
}
declare module game {
    const enum walletButtponTp {
        centerWallet = 0,
        transferWallet = 1,
    }
    interface IGmNameData extends cui.IItemData {
        handle: GameNmHandle;
        gameId: number;
        isSel: boolean;
        name: string;
        isLeft: boolean;
    }
    interface GameNmHandle {
        clickGm(item: WelletGmName): any;
    }
    class MyWalletView extends UIFullFW {
        skClose: cui.ScaleButton;
        skFlush: cui.ScaleButton;
        skRecycle: cui.ScaleButton;
        skOpen: cui.ScaleButton;
        skGoldPwd: cui.EditableText;
        skHallGold: cui.Label;
        skGoldSelect: cui.ScaleButton;
        skGameName: cui.Label;
        skGameSelect: cui.ScaleButton;
        skGoldGrap: cui.Group;
        skGoldScroller: cui.Scroller;
        skGameGrap: cui.Group;
        skGameScroller: cui.Scroller;
        skArrows: cui.ScaleButton;
        skMaxGold: cui.ScaleButton;
        skScrllGrap: cui.Group;
        skXfScrll: cui.Scroller;
        skUnfold: cui.ScaleButton;
        skDeposit: cui.ScaleButton;
        skWithdrawal: cui.ScaleButton;
        skTransfer: cui.ScaleButton;
        skXfList: cui.DataGroup;
        skGoldList: cui.DataGroup;
        skGameList: cui.DataGroup;
        skBitGrap: cui.Group;
        skSeletImg1: cui.Image;
        skSeletImg2: cui.Image;
        skDepositGold: cui.BitmapLabel;
        skTransferGarp: cui.Group;
        skAutoGarp: cui.Group;
        skOperateGrap: cui.Group;
        skAdd: cui.ScaleButton;
        private _isOpen;
        private _dropDownTag;
        private _gamePro;
        private _leftGmPro;
        private _rightGmPro;
        private _showGmArr;
        private _leftGmArr;
        private _rightGmArr;
        private _leftGmFlag;
        private _rightGmFlag;
        private _hallToGmFlag;
        private _chooseGmId;
        private _curAskWithdrawTm;
        private _isOpenUi;
        private _tmTag;
        constructor();
        protected childrenCreated(): void;
        showArrowAni(): void;
        private transferGold();
        private showContent();
        private updateHallGold();
        private refrshList();
        private refreshSingleGm(info, hasTip?);
        private refreshHallGm();
        private refreshLeftBtn();
        private refreshRightBtn();
        private showleftLab(gameId);
        private showRightLab(gameId);
        clickGm(item: WelletGmName): void;
        private refreshGame(game_id);
        private showGame();
        private showOpenBtn();
        private refreshAutoTran();
        private onFocus1(e);
        private OnLimit(e);
        private rechargeMoClick(tag);
        onDispose(): void;
    }
    class WelletGmName extends cui.DataItem {
        skBg: cui.Image;
        skLab: cui.Label;
        skBtn: cui.SimpleButton;
        constructor();
        protected childrenCreated(): void;
        protected dataChanged(): void;
    }
}
declare module game {
    interface JieSuanData extends cui.IItemData {
        nickName: string;
        head: string;
        vip: number;
        plyScore: number;
        rank: number;
        isOwner: boolean;
    }
    class jieSuanView extends cui.Component {
        private skJieSuanGrp;
        private skOwnerGrp;
        private skNotice;
        private skNoticeXu;
        private skConfGrp;
        skXuGrp: cui.Group;
        skNorGrp: cui.Group;
        skStart: cui.ScaleButton;
        skSave: cui.ScaleButton;
        skBack: cui.ScaleButton;
        skQQ: cui.ScaleButton;
        skWX: cui.ScaleButton;
        skXuQQ: cui.ScaleButton;
        skXuWX: cui.ScaleButton;
        skXuWait: cui.Label;
        skXuOwnerGrp: cui.Group;
        skXuSave: cui.ScaleButton;
        skXuBack: cui.ScaleButton;
        private skWaitBg;
        skXuFei: cui.ScaleButton;
        skXuShare: cui.Image;
        private skWait;
        skXuStart: cui.ScaleButton;
        skClose: cui.ScaleButton;
        skImg: cui.Image;
        private skfkImg0;
        private skfkImg1;
        private skfkImg2;
        private skfkImg3;
        private _plyCount;
        private _plyData;
        private _scoreData;
        private _config;
        private _posArr;
        private _tag;
        private _roomId;
        private skRoom;
        private skJuShu;
        private _type;
        constructor(plyCount: number, plydata: any, score: any, config: any, roomId: number, type?: number);
        childrenCreated(): void;
        setData(data: any, score: any, selfId: number, isXu?: boolean, type?: number): void;
        private getRoomId(roomId);
        private AllPos();
        private updateView();
    }
    class JieSuanTile extends cui.DataItem {
        private skBg;
        private skOwner;
        private skWinner;
        private skHead;
        private skHeadFrame;
        private skNickName;
        private skScore;
        constructor(data: any);
        protected dataChanged(): void;
        private formatString(str);
    }
    class JieSuanSmallTile extends cui.DataItem {
        private skBg;
        private skOwner;
        private skWinner;
        private skHead;
        private skHeadFrame;
        private skNickName;
        private skScore;
        constructor(data: any);
        protected dataChanged(): void;
        private formatString(str);
    }
}
declare module game {
    interface JoinPlyData extends cui.IItemData {
        nickName: string;
        head: string;
        vip: number;
        isReady: boolean;
        isOwner: boolean;
        ownerId: number;
        plyId: number;
        seat: number;
        isShow: boolean;
    }
    class joinTable extends cui.Component {
        private skJoinGrp;
        skImg: cui.Image;
        skCopyId: cui.ScaleButton;
        skInvite: cui.ScaleButton;
        skReady: cui.ScaleButton;
        skKick1: cui.ScaleButton;
        skKick2: cui.ScaleButton;
        skKick3: cui.ScaleButton;
        skKick4: cui.ScaleButton;
        skKick5: cui.ScaleButton;
        private skRoomid;
        private _plyCount;
        private _data;
        private _ownerId;
        private _posArr;
        private skConfGrp;
        private _tag;
        constructor(plyCount: number, roomId: number, ownerId: number, type?: number);
        childrenCreated(): void;
        private AllPos();
        setData(data: any): void;
        updateData(data: any): void;
        private updateView();
        reSet(): void;
    }
    class JoinTile extends cui.DataItem {
        skJoinGrp: cui.Group;
        skReady: cui.Image;
        skHead: cui.Image;
        skHeadFrame: cui.Image;
        skOwner: cui.Image;
        skNickName: cui.Label;
        _data: any;
        constructor(data: any);
        protected dataChanged(): void;
    }
}
declare module game {
    class GameLoadView extends UIFullFW {
        skBar: cui.ProgressBar;
        skBarLab: cui.Label;
        skLoadB: cui.Image;
        skAniLogin: game.UIDBAni;
        skImgLogin: cui.Image;
        skBack: cui.ScaleButton;
        private _nextPer;
        private _time;
        private _tmSpeed;
        private static _inst;
        static getInst(): GameLoadView;
        constructor();
        protected onPartAdded(): void;
        protected getCloseAni(): any;
        protected getOpenAni(): any;
        protected onShow(): void;
        initLoad(): void;
        protected onHide(): void;
        stopUpdate(): void;
        private pbLabelFun(val);
        /**
         * totalper 为占100 的百分比 tm 预计时间 毫秒
         * */
        setLoadStep(totalper: number): void;
        private update(tm);
    }
}
declare module game {
    class LoadingScene extends BaseScene implements LayerDelegate {
        private static _inst;
        static getInst(): LoadingScene;
        private _view;
        private _initLayer;
        constructor();
        $onAddToStage(stage: egret.Stage, nestLevel: number): void;
        dispose(): void;
        setLoadStep(msg: string, totalper: number, tm: number): void;
        isFinish(): boolean;
        showLayer(layer: cui.Group): void;
        hideLayer(layer: cui.Group): void;
    }
}
declare module game {
    class LoadingView extends UIFullFW {
        slowSpeed: number;
        fastSpeed: number;
        private _nextPer;
        private _curPer;
        private _showPer;
        private _speed;
        skBar: cui.ProgressBar;
        skBarLab: cui.Label;
        skLoadB: cui.Image;
        skAniLogin: game.UIDBAni;
        skImgLogin: cui.Image;
        private _delayTm;
        constructor();
        protected onPartAdded(): void;
        protected getCloseAni(): any;
        protected getOpenAni(): any;
        protected onShow(): void;
        protected onHide(): void;
        private pbLabelFun(val);
        protected onDispose(): void;
        /**
         * totalper 为占100 的百分比 tm 预计时间 毫秒
         * */
        setLoadStep(msg: string, totalper: number, tm: number): void;
        isFinish(): boolean;
        private update(tm);
    }
}
declare module game {
    class logIdView extends cui.Component {
        private skLogId;
        skIdBack: cui.Image;
        constructor();
        protected childrenCreated(): void;
        /**
         *
         * @param isAddBet 是否是下注 下注则显示牌局id 否则就是 牌局ID： -下注后生成-
         */
        setData(isAddBet: boolean): void;
        /**
         *
         * @param logId 显示牌局id
         */
        showLogId(logId: string): void;
        dispose(): void;
    }
}
declare module game {
    class ForgotPwd extends UIPopup {
        skPhone: cui.EditableText;
        skCode: cui.EditableText;
        skPwd: cui.EditableText;
        skAgainPwd: cui.EditableText;
        skGetCode: cui.ScaleButton;
        skSure: cui.ScaleButton;
        skClose: cui.SimpleButton;
        skLCode: cui.Label;
        skLPhone: cui.Label;
        skLPwd: cui.Label;
        skLAgainPwd: cui.Label;
        constructor();
        childrenCreated(): void;
        private OnChangePhone(e);
        private OnChangeCode(e);
        private OnChangePwd(e);
        private OnChangeAgainPwd(e);
        getCode(): void;
        enSure(): void;
        protected onDispose(): void;
    }
}
declare module game {
    const enum loginTp {
        normal = 0,
        visitor = 1,
        wx = 2,
    }
    class LoginAccount extends UIFullFW {
        skAccountLab: cui.EditableText;
        skPwdLab: cui.EditableText;
        skLogin: cui.ScaleButton;
        skRegistered: cui.ScaleButton;
        skVtrLogin: cui.ScaleButton;
        skWXLogin: cui.ScaleButton;
        skLookPwd: cui.ScaleButton;
        skForgotPwd: cui.ScaleButton;
        skKeFu: cui.ScaleButton;
        skGameVer: cui.Label;
        skAppVer: cui.Label;
        skShowId: cui.ScaleButton;
        skRemember: cui.ScaleButton;
        skIDGroup: cui.Group;
        skAniLogin: game.UIDBAni;
        skImgLogin: cui.Image;
        private _isLockPwd;
        private _isRemember;
        private _isMoreAcc;
        private _accDatas;
        constructor();
        childrenCreated(): void;
        private btnClick(item);
        private updateMoreBtn();
        private updateMoreAcc();
        private onFocus1(e);
        private onFocus2(e);
        private OnAccount(e);
        private OnPwd(e);
        protected getOpenAni(): any;
        protected getCloseAni(): any;
        private registeredView();
        private lookPwd();
        private openForgotView();
        private tapLogin(item);
        protected onDispose(): void;
    }
}
declare module game {
    const enum LoginNavType {
        kLoginAccount = 0,
        kLoginLayer = 1,
        kLoginServer = 2,
        kLoginCreate = 3,
    }
    interface ICreateDelegate {
        onCreateFin(job: number, sex: number): void;
    }
    interface LoginDelegate {
        showView(page: LoginNavType, data?: any): any;
    }
    class LoginScene extends BaseScene implements LoginDelegate, LayerDelegate {
        private _platStartup;
        private _curView;
        constructor();
        protected childrenCreated(): void;
        private startLogin();
        dispose(): void;
        showView(page: LoginNavType): void;
        private onNormalOpen(uiView);
        showLayer(layer: cui.Group): void;
        hideLayer(layer: cui.Group): void;
    }
}
declare module game {
    class Registered extends UIPopup {
        skPhone: cui.EditableText;
        skCode: cui.EditableText;
        skPwd: cui.EditableText;
        skAgainPwd: cui.EditableText;
        skGetCode: cui.ScaleButton;
        skSure: cui.ScaleButton;
        skchoose: cui.ScaleButton;
        skClose: cui.SimpleButton;
        skLCode: cui.Label;
        skLPhone: cui.Label;
        skLPwd: cui.Label;
        skLAgainPwd: cui.Label;
        skLAgreeConsent: cui.Label;
        skBindAct: cui.Group;
        private _isAgreed;
        private _isBind;
        private _isCanClick;
        constructor();
        childrenCreated(): void;
        protected getOpenAni(): any;
        protected getCloseAni(): any;
        setData(value: boolean): void;
        private chooseBtn();
        private OnChangePhone(e);
        private OnChangeCode(e);
        private OnChangePwd(e);
        private OnChangeAgainPwd(e);
        getCode(): void;
        enSure(): void;
        protected onDispose(): void;
    }
}
declare module game {
    const enum REPLAY_EVENT {
        STOP = "STOP",
        FAST = "FAST",
        AGAIN = "AGAIN",
        OUT = "OUT",
    }
    class RoomReplayOps extends cui.Component {
        skFast: cui.ScaleButton;
        skStop: cui.ScaleButton;
        skAgain: cui.ScaleButton;
        skGuanBi: cui.ScaleButton;
        private _fastCount;
        private _stopCount;
        constructor();
        childrenCreated(): void;
        private initTouch();
        dispose(): void;
    }
}
declare module game {
    class SafeBoxFindPwd extends UIPopup {
        skclose: cui.ScaleButton;
        private skGetYan;
        private skFindCode;
        private skCodeYan;
        private skCodeIn;
        private skCodeSure;
        private skTips;
        private skBoxCode;
        private skSureCode;
        private skBoxYanZheng;
        constructor();
        childrenCreated(): void;
        private resetPassWord();
        private onFocus1(e);
        private OnAccount(e);
        private onFocus2(e);
        private OnAccount1(e);
        private onFocus3(e);
        private OnAccount2(e);
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
        dispose(): void;
    }
}
declare module game {
    class SafeBoxGetOrCun extends UIFullFW {
        private skclose;
        private skKefu;
        skAdd: cui.ScaleButton;
        private skGold;
        private skCunGold;
        private skGetOrCun;
        private skYuan;
        private skMax;
        private skSure;
        private skReset;
        private skBoxGold;
        private sktuodong;
        private skCQ;
        private skChipLight0;
        private skChipLight1;
        private skChipLight2;
        private skChipLight3;
        private skchip0;
        private skchip1;
        private skchip2;
        private skchip3;
        private skLongBar;
        private skConfGrp;
        private _isQu;
        private _distance;
        private _touchStatus;
        private _showGold;
        private _tag;
        private _tuoX;
        private _tuoMaxX;
        private _maxSize;
        constructor(isQu: boolean);
        childrenCreated(): void;
        private showGoldChange(type);
        private goldCun();
        private goldQu();
        private initTouch();
        private clickBtn();
        private onMoveBegin(e);
        private moveTuoDong(e);
        private onMoveEnd(e);
        private removeEvent();
        private onFocus(e);
        private OnAccount(e);
        private getIsTrueNumber(inputText);
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
        dispose(): void;
    }
}
declare module game {
    class SafeBoxMingXi extends UIPopup {
        private skclose;
        private skBtnGrp;
        private skMXList;
        private skLogData;
        private _itemPro;
        private _tag;
        constructor();
        childrenCreated(): void;
        private showLog();
        private btnClickChip(item);
        private showLab(tag);
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
    }
    interface MingXiShowData extends cui.IItemData {
        tag: number;
        gold: number;
        time: number;
        selfgold: number;
    }
    class safeBoxMingXiShow extends cui.DataItem {
        private skLabel;
        private skLabel0;
        constructor();
        private GMTToStr(time);
        protected dataChanged(): void;
    }
}
declare module game {
    class SafeBoxOpen extends UIPopup {
        skclose: cui.ScaleButton;
        private skOpenGrp;
        private skOpenBox;
        private skBoxCode;
        private skSureCode;
        private skCodeIn;
        private skCodeSure;
        private skTips;
        private skEnterGrp;
        private skEnterEdi;
        private skTishi;
        private skForget;
        private skEnterBox;
        private _isisOpen;
        constructor(isOpen: boolean);
        childrenCreated(): void;
        private rmvListen();
        private enterBox();
        private openBox(result);
        private onFocus1(e);
        private OnAccount(e);
        private onFocus2(e);
        private OnAccount1(e);
        private onFocus3(e);
        private OnAccount2(e);
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
    }
}
declare module game {
    class SafeBoxRule extends UIPopup {
        private skclose;
        private skGrp;
        private skInGrp;
        constructor();
        childrenCreated(): void;
        private showRule();
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
    }
}
declare module game {
    class SafeBoxView extends UIFullFW {
        private skclose;
        private skGold;
        private skAdd;
        private skKefu;
        private skCunGold;
        private skRule;
        private skMingxi;
        private skCun;
        private skQu;
        private skNextTime;
        private skLastGet;
        private skAllGet;
        private skNowPet;
        private skNextGet;
        private skConfGrp;
        private _tag;
        constructor();
        childrenCreated(): void;
        private initTouch();
        protected onShow(stage: egret.Stage): void;
        protected onHide(): void;
        dispose(): void;
    }
}
declare module game {
    interface ScorePlyData extends cui.IItemData {
        nickName: string;
        head: string;
        vip: number;
        plyScore: number;
        id: number;
    }
    interface ScoreBoxData extends cui.IItemData {
        scores: number[];
        num: number;
    }
    class scoreBoxView extends UIPopup {
        private skPlyList;
        private skScoreList;
        private skBack;
        private _itemPly;
        private _itemScore;
        private _plyCount;
        private _plyData;
        private _scoreData;
        constructor(plyCount: number, plydata: any, score: any);
        setScoreData(score: any): void;
        childrenCreated(): void;
        private updateView();
    }
    class ScoreBoxTile extends cui.DataItem {
        skJu: cui.Label;
        skScore0: cui.BitmapLabel;
        skScore1: cui.BitmapLabel;
        skScore2: cui.BitmapLabel;
        skScore3: cui.BitmapLabel;
        skScore4: cui.BitmapLabel;
        skScore5: cui.BitmapLabel;
        constructor(data: any);
        protected dataChanged(): void;
    }
    class ScorePlyTile extends cui.DataItem {
        skHead: cui.Image;
        skVip: cui.Image;
        skOwner: cui.Image;
        skNickName: cui.Label;
        skGold: cui.BitmapLabel;
        constructor(data: any);
        protected dataChanged(): void;
    }
}
declare module game {
    class SecondSevenView extends cui.Component {
        skBtn: cui.ScaleButton;
        skPb: cui.ProgressBar;
        skLabGame: cui.Label;
        skLabPb: cui.Label;
        skGrp: cui.Group;
        skImgDone: cui.Image;
        private _xsImg;
        private _sdImg;
        constructor();
        childrenCreated(): void;
        private updateInfo();
        /**
         *
         * @param xsIcon 显示悬赏图片
         * @param sevenDayIcon 七日奖励图片
         */
        setIcon(xsIcon?: string, sevenDayIcon?: string): void;
        private updateTask(vo, oldCount);
        private dealDone(isdone, isget);
        regHandle(): void;
        dispose(): void;
    }
}
declare module game {
    const enum GameClass {
        all = 0,
        fish = 5,
        video = 6,
        create_room = 7,
        hot_game = 20,
    }
    class SevenRewardView extends UIFullFW {
        skBtnReturn: cui.ScaleButton;
        skBtnGet: cui.ScaleButton;
        skImgGold0: cui.Image;
        skLabDesc0: cui.Label;
        skBtnGoto0: cui.ScaleButton;
        skImgDown0: cui.Image;
        skPb0: cui.ProgressBar;
        skLabPer0: cui.Label;
        skImgGold1: cui.Image;
        skLabDesc1: cui.Label;
        skBtnGoto1: cui.ScaleButton;
        skImgDown1: cui.Image;
        skPb1: cui.ProgressBar;
        skLabPer1: cui.Label;
        skImgBG0: cui.Image;
        skImgDay0: cui.Image;
        skImgSelect0: cui.Image;
        skImgBG1: cui.Image;
        skImgDay1: cui.Image;
        skImgSelect1: cui.Image;
        skImgBG2: cui.Image;
        skImgDay2: cui.Image;
        skImgSelect2: cui.Image;
        skImgBG3: cui.Image;
        skImgDay3: cui.Image;
        skImgSelect3: cui.Image;
        skImgBG4: cui.Image;
        skImgDay4: cui.Image;
        skImgSelect4: cui.Image;
        skImgBG5: cui.Image;
        skImgDay5: cui.Image;
        skImgSelect5: cui.Image;
        skImgBG6: cui.Image;
        skImgDay6: cui.Image;
        skImgSelect6: cui.Image;
        skBitAll: cui.BitmapLabel;
        skBitSing: cui.BitmapLabel;
        rmv_qiri: cui.Image;
        skGrp0: cui.Group;
        skGrp1: cui.Group;
        skGrp2: cui.Group;
        skGrp3: cui.Group;
        skGrp4: cui.Group;
        skGrp5: cui.Group;
        skGrp6: cui.Group;
        skLabTip: cui.Label;
        skGrp: cui.Group;
        skImgHas: cui.Image;
        skBtn: cui.ScaleButton;
        skLabToday: cui.Label;
        private _taskIndex;
        private _completeCount;
        private _gameTag;
        constructor();
        childrenCreated(): void;
        private updateInfo();
        private updateTask(day?);
        private fallGoldAni();
        private showTalk();
        regHandle(): void;
        onDispose(): void;
    }
}
declare module game {
    /**
     * doudizhu = 16,  //斗地主
        jinchanbuyu = 1,  //金蟾捕鱼
        jinshayinsha = 12,  //金鲨银鲨
        zhajinhua = 17,  //炸金花
        bjl = 5,  //百家乐
        heihongmeifang = 10,  //黑红梅方
        longhudou = 32,  //龙虎斗
        brniuniu = 4,  //百人牛牛
        robcow = 18,  //抢庄牛牛
        benchibaoma = 23,  //奔驰宝马
     */
    class AchieveShareDialog extends UIPopup {
        skBtnClose: cui.ScaleButton;
        skBtnP: cui.ScaleButton;
        skBtnW: cui.ScaleButton;
        skBitGold: cui.BitmapLabel;
        skBitNum: cui.BitmapLabel;
        skImgGame: cui.Image;
        skImgGet: cui.Image;
        skimgKind: cui.Image;
        skBitMoney: cui.BitmapLabel;
        skLabMan: cui.Label;
        skLabWoman: cui.Label;
        skLabTip: cui.Label;
        skerwei: cui.Base64Img;
        constructor();
        childrenCreated(): void;
        updateInfo(): void;
        protected openImpl(data: NET_CONF.s2c_notify_share): void;
    }
}
declare module game {
    class ChipTile extends cui.Group {
        skChip: cui.Image;
        skBitImg: cui.ImageLabel;
        isSelfBet: boolean;
        constructor();
        /**
         *
         * @param id 筹码下标
         *
         * @param gold 筹码金币
         */
        setData(id: number, gold: number, chipTp?: string, isSelfBet?: boolean): void;
        clear(): void;
    }
}
declare module game {
    class OpenFWAni extends TRain.AniBase {
        private static props;
        constructor(tar: cui.BaseContainer);
        beforeAni(): void;
    }
    class CloseFWAni extends TRain.AniBase {
        private static props;
        constructor(tar: cui.BaseContainer);
        beforeAni(): void;
    }
    class MoveXFWAni extends TRain.AniBase {
        private _isHori;
        constructor(tar: egret.DisplayObject, pent: number, isOut: boolean, isHorizontal?: boolean);
        endAni(): void;
    }
    class CloseDoorAni extends TRain.AniBase {
        private _leftTar;
        private _rightTar;
        private _leftBeginX;
        private _rightBeginX;
        private _leftEndX;
        private _rightEndX;
        private _LEndAlpha;
        private _REndAlpha;
        private _LHaveAlpha;
        private _RHaveAlpha;
        constructor(leftTar: egret.DisplayObject, rightTar: egret.DisplayObject, aniTm: number, data?: ICloseDoorData, LHaveAlpha?: boolean, RHaveAlpha?: boolean);
        beforeAni(): void;
        protected update(v: number): void;
    }
    class ScrollAni extends TRain.AniBase {
        private _mask;
        private _isHori;
        private _isOut;
        constructor(tar: cui.BaseContainer, aniTm: number, isHorizontal?: boolean, isOut?: boolean);
        protected update(v: number): void;
        beforeAni(): void;
    }
    class CircleMaskAni extends TRain.AniBase {
        centerX: number;
        centerY: number;
        private mask;
        private _isOut;
        private _isBeginMask;
        private _endAngle;
        private _radius;
        private _beginTm;
        private _aniTm;
        constructor(tar: egret.DisplayObject, aniTm: number, isOut?: boolean, beginTm?: number, isBeginMask?: boolean);
        resetBeginTm(beTm?: number, aniTm?: number): void;
        protected update(tm: number): void;
        beforeAni(): void;
        endAni(): void;
        private drawFan();
    }
    class CircleMask {
        centerX: number;
        centerY: number;
        private _mask;
        private _isOut;
        private _endAngle;
        private _radius;
        private _tar;
        private _val;
        constructor(tar: egret.DisplayObject, isOut?: boolean);
        value: number;
        dispose(): void;
        private drawFan();
    }
    class QuakeAni extends TRain.AniBase {
        constructor(tar: cui.BaseContainer, aniTm?: number, xRange?: number, yRange?: number);
    }
    class StarParticleAni extends TRain.AniBase {
        parent: egret.DisplayObjectContainer;
        private _movsys;
        private _bomClip;
        private _movActs;
        private _spawnAct;
        private _movTm;
        private _bomName;
        constructor(parent: egret.DisplayObjectContainer, starSource?: string);
        clear(): void;
        setData(from: cui.IPointData, to: cui.IPointData): void;
        beforeAni(): void;
        endAni(): void;
    }
}
declare module game {
    class CustomTile extends ItemTile {
        skLab: cui.ImageLabel;
        hasProp(key: string): boolean;
        lab: string;
    }
}
declare module game {
    class GameTile extends ItemTile {
        skAni: any;
        skHot: cui.UIMovieClip;
        skPower: cui.UIMovieClip;
        skGrp: cui.Group;
        skBtn: cui.SimpleButton;
        skLoadGrp: cui.Group;
        skProBar: cui.Image;
        skBarNum: cui.BitmapLabel;
        skState: cui.Image;
        skUpdate: cui.Image;
        skXzBg: cui.Image;
        private _circleMask;
        static props: string[];
        hasProp(key: string): boolean;
        protected childrenCreated(): void;
        dataChanged(): void;
        ani: string;
        state: any;
        upLoadBg(): void;
        hot: boolean;
        power: boolean;
        offX: string;
        upState: {
            state: GMD_UPDATE_STATE;
            proBar?: number;
        };
        dispose(): void;
    }
}
declare module game {
    class GoodRdTile extends ItemTile {
        skLab: cui.Label;
        hasProp(key: string): boolean;
        lab: string;
    }
}
declare module game {
    class HeadTile extends ItemTile {
        skMask: egret.DisplayObject;
        skLab: cui.Label;
        hasProp(key: string): boolean;
        mk: boolean;
        lab: string;
    }
}
declare module game {
    class RouteStateTile extends cui.UITile {
        static props: string[];
        skBg: cui.Image;
        skNum: cui.Image;
        skDot: cui.Image;
        skDot1: cui.Image;
        constructor(skinName?: string);
        hasProp(key: string): boolean;
        dataChanged(): void;
        r: number;
        pt: number;
        up: boolean;
        down: boolean;
    }
}
declare module game {
    class WalletTile extends ItemTile {
        skLab: cui.Label;
        skName: cui.Label;
        hasProp(key: string): boolean;
        nm: string;
        lab: string;
    }
}
declare module chatProtocols {
    namespace type {
        const c2sSendMessageType: string;
        const c2sFillMessageType: string;
        const c2sRequestType: string;
        const s2cSendMessageResultType: string;
        const s2cFillMessageResultType: string;
        const s2cBcMessageType: string;
        const s2cResponseType: string;
    }
    interface messageData {
        serverId: number;
        senderId: number;
        type: number;
        info: string;
        recordLength?: number;
        recordSize?: number;
    }
    interface c2sSendMessage {
        clientId: number;
        type: number;
        info: string;
        recordData?: string;
        recordLength?: number;
        recordSize?: number;
    }
    interface s2cSendMessageResult {
        clientId: number;
        message?: messageData;
    }
    interface c2sFillMessage {
        serverId: number;
    }
    interface s2cFillMessageResult {
        messages?: messageData[];
    }
    interface s2cBcMessage {
        message: messageData;
    }
    interface c2sRequest {
        id: number;
        method: string;
        data: any;
    }
    interface s2cResponse {
        id: number;
        data: any;
    }
}
declare module game {
    module HttpUtil {
        interface ILoadShow {
            showBusy(): any;
            hideBusy(): any;
        }
        let busyUI: ILoadShow;
        function accLogin(args: {
            nm: string;
            channel: string;
            agentId: string;
            hardwareId: string;
            urlKey: string;
            clientIp: string;
            packAgeTp: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function wxLogin(args: {
            openid: string;
            openSign: string;
            nickname: string;
            headimgurl: string;
            channel: string;
            agentId: string;
            hardwareId: string;
            urlKey: string;
            clientIp: string;
            packAgeTp: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function serverList(args: {
            nm: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function checkCode(args: {
            phone: string;
            agentId: string;
            opType: number;
            channel: string;
            playId: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function resetPwd(args: {
            phone: string;
            pwd: string;
            checkcode: string;
            channel: string;
            agentId: string;
            hardwareId: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function regAcc(args: {
            phone: string;
            pwd: string;
            checkcode: string;
            channel: string;
            agentId: string;
            hardwareId: string;
            urlKey: string;
            clientIp: string;
            packAgeTp: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function loginAcc(args: {
            phone: string;
            pwd: string;
            channel: string;
            agentId: string;
            hardwareId: string;
            urlKey: string;
            clientIp: string;
            packAgeTp: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function bindAcc(args: {
            phone: string;
            pwd: string;
            channel: string;
            nm: string;
            checkcode: string;
            agentId: string;
            hardwareId: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function CheckNotice(args: {
            agentId: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        /**
         *
         * @param args
         *  playerId 玩家ID，若还没获取到,传空
            hardwareId  设备号,网页端传空
            channelId 包的渠道号
            url  如果是http访问的过程中出错，这里填请求的地址
            error  具体错误内容
            ip  本机IP
            gameId  若是在子游戏内报错,填游戏ID
            gameVer 子游戏版本号
            lobbyVer 大厅版本号
            clientVer 包的版本号
         * @param showBusy
         * @param cb
         * @param target
         */
        function webLogInfo(args: {
            playId: number;
            error: string;
            gameId: number;
            gameVer: string;
        }): void;
        function channelCfgInfo(args: {
            agentId: string;
            channelId: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function gotoKeFu(): void;
        function askCreateImg(args: {
            playerid: string;
            link: string;
        }, showBusy: boolean, cb: Function, target: any): void;
        function sendLocation(): void;
        function reqURL(url: string, data: string, showBusy: boolean, cb: Function, target: any, svrUrl?: string): void;
    }
}
declare module game {
    const enum CONN_EVT {
        RECONN = "re",
        CONN_SUCC = "succ",
        CONN_FAIL = "fail",
        CONN_CLOSE = "close",
    }
    type DecodeData = {
        off: number;
        data: egret.ByteArray;
    };
    module Net {
        let busyUI: ILoadShow;
        let ip: string;
        let isReCon: boolean;
        function connect(): void;
        function loginFin(succ: boolean): void;
        function regHandle(msgId: number, handler: (data: any) => void, tar: any): void;
        function unregHandle(msgId: number): void;
        function decodeMsg(msgId: number, len: number, buf: egret.ByteArray): void;
        function sendMsg(msgId: number, args: any): void;
        function sendMsgFilter(msgId: number, args: any, intervalMaxTm: number): void;
        function sendMsgWait(msgId: number, args: any, resultMsgId: number): void;
    }
}
declare module game {
    module Package {
        function encode(msgId: number, len: number, buf: egret.ByteArray): void;
        function decode(data: egret.ByteArray): {
            id: number;
            len: number;
        };
    }
}
declare module game {
    module Protobuf {
        type ProtoInfos = {
            [key: string]: any[];
        };
        type ProtosList = {
            [key: number]: ProtoInfos;
        };
        function addEncodeProtos(routeProtos: ProtosList, typeProtos?: ProtosList): void;
        function rmvEncodeProtos(routeProtos: ProtosList, typeProtos?: ProtosList): void;
        function addDecodeProtos(routeProtos: ProtosList, typeProtos?: ProtosList): void;
        function rmvDecodeProtos(routeProtos: ProtosList, typeProtos?: ProtosList): void;
        function encode(msgId: number, data: any, buff: egret.ByteArray): egret.ByteArray;
        function decode(msgId: number, len: number, data: egret.ByteArray): any;
    }
}
declare module NET_CONF {
    const enum C2S_ROUTE_TP {
        c2g_heartbeat = 301,
        c2s_connect = 5001,
        c2s_asklogin = 5003,
        c2s_enter_game = 5004,
        c2s_command = 5005,
        c2s_ask_check_payment = 5006,
        c2s_ask_test_payment = 5007,
        c2s_leave_game = 5008,
        c2s_update_playerhead = 5010,
        c2s_update_nickname = 5011,
        c2s_update_sex = 5012,
        c2s_beneifts = 5037,
        c2s_get_questlist = 5058,
        c2s_receive_questreward = 5059,
        c2s_ask_message = 5080,
        c2s_delete_message = 5081,
        c2s_read_message = 5082,
        c2s_receive_share_reward = 5091,
        c2s_req_faq = 5092,
        c2s_req_faq_detail = 5093,
        c2s_req_cs_contact = 5094,
        c2s_suggestion = 5097,
        c2s_req_suggest = 5098,
        c2s_wechat_share_task = 5100,
        c2s_req_sync_gold = 5111,
        c2s_performance_list = 5120,
        c2s_performance_gain = 5121,
        c2s_performance_child = 5122,
        c2s_performance_check_gain = 5123,
        c2s_performance_team_create = 5124,
        c2s_performance_team_list = 5125,
        c2s_performance_team_info = 5126,
        c2s_performance_team_update = 5127,
        c2s_performance_info = 5128,
        c2s_performance_info_self_today = 5129,
        c2s_performance_info_self_yesterday = 5130,
        c2s_performance_info_agent_today = 5131,
        c2s_performance_info_agent_yesterday = 5132,
        c2s_req_vip_info = 5150,
        c2s_req_room_config = 5175,
        c2s_check_game_state = 5176,
        c2s_haolu_filte_get = 5192,
        c2s_haolu_filte_set = 5193,
        c2gs_player_connect = 30001,
        c2gs_player_disconnect = 30002,
        c2gs_game_history = 30003,
        c2gs_replay_history = 30004,
        c2gs_replay_detail = 30005,
        c2gs_haolu = 30006,
        c2gs_change_state = 30007,
        c2s_activity_reward_log = 40105,
        c2s_promote_url = 5174,
        c2s_check_box_password = 5068,
        c2s_get_safe_box_security_code = 5044,
        c2s_draw_gold = 5031,
        c2s_deposit_gold = 5030,
        c2s_reset_box_password = 5066,
        c2s_change_box_password = 5034,
        c2s_set_box_password = 5029,
        c2s_activity_vip_ac_list = 40109,
        c2s_req_safebox_log = 5067,
        c2s_performance_configs = 5133,
        c2s_join_guild = 5179,
        c2s_master_operation = 50001,
        c2s_member_operation = 50002,
        c2s_join_guild_game = 50003,
        c2s_guild_notice = 50004,
        c2c_guild_name = 50005,
        c2s_gold_record = 5182,
        c2s_single_add_gold = 5184,
        c2s_single_check_balance = 5185,
        c2s_rebate_list = 5186,
        c2s_rebate_log = 5187,
        c2s_rebate_detail = 5188,
        c2s_rebate_gain = 5189,
        c2s_clear_guild_icon = 5190,
        c2s_wallet_list = 5194,
        c2s_deposit_wallet = 5195,
        c2s_withdraw_wallet = 5196,
        c2s_single_to_other = 5197,
        c2s_withdraw_all_wallet = 5198,
        c2s_reflush_wallet = 5203,
    }
    const enum S2C_ROUTE_TP {
        s2c_send_msglist = 401,
        g2c_heartbeat = 404,
        msg_t2t_start = 444,
        s2c_connect_result = 7501,
        s2c_asklogin_result = 7503,
        s2c_enter_game_result = 7504,
        s2c_command_result = 7505,
        s2c_ask_check_payment_result = 7506,
        s2c_leave_game_result = 7507,
        s2c_update_playerhead_result = 7509,
        s2c_update_nickname_result = 7510,
        s2c_update_sex_result = 7511,
        s2c_w2c_notify = 7523,
        s2c_change_photo_frame_result = 7534,
        s2c_benefits_result = 7539,
        s2c_player_kick = 7541,
        s2c_get_questlist_result = 7561,
        s2c_receive_questreward_result = 7562,
        s2c_change_quest = 7563,
        s2c_ask_message_result = 7586,
        s2c_delete_message_result = 7587,
        s2c_read_message_result = 7588,
        s2c_bind_reward = 7589,
        s2c_notify_share = 7599,
        s2c_receive_share_reward_result = 7600,
        s2c_req_faq_result = 7601,
        s2c_req_faq_detail_result = 7602,
        s2c_req_cs_contact_result = 7603,
        s2c_suggestion_result = 7606,
        s2c_req_suggest_result = 7607,
        s2c_notify_task_reflush = 7609,
        s2c_update_ipinfo_result = 7621,
        s2c_req_sync_gold_result = 7622,
        s2c_performance_list_result = 7631,
        s2c_performance_gain_result = 7632,
        s2c_performance_child_result = 7633,
        s2c_performance_check_gain_result = 7634,
        s2c_performance_team_create_result = 7635,
        s2c_performance_team_list_result = 7636,
        s2c_performance_team_info_result = 7637,
        s2c_performance_team_update_result = 7638,
        s2c_performance_info_result = 7639,
        s2c_performance_info_self_today_result = 7640,
        s2c_performance_info_self_yesterday_result = 7641,
        s2c_performance_info_agent_today_result = 7642,
        s2c_performance_info_agent_yesterday_result = 7643,
        s2c_notice = 7644,
        s2c_req_vip_info_result = 7660,
        s2c_req_room_config_result = 7685,
        gs2c_player_connect_result = 31001,
        gs2c_player_disconnect_result = 31002,
        s2c_activity_reward_log_result = 41105,
        s2c_promote_url_result = 7684,
        s2c_check_password_result = 7574,
        s2c_get_safe_box_security_code_result = 7548,
        s2c_draw_gold_result = 7533,
        s2c_deposit_gold_result = 7532,
        s2c_reset_box_password_result = 7572,
        s2c_change_box_password_result = 7536,
        s2c_set_box_password_result = 7531,
        s2c_activity_vip_ac_list_result = 41109,
        s2c_req_safebox_log_result = 7573,
        s2c_performance_configs_result = 7686,
        s2c_check_game_state_result = 7687,
        s2c_join_guild = 7689,
        s2c_haolu_filte_get_result = 7701,
        s2c_haolu_filte_set_result = 7702,
        s2c_wallet_list_result = 7703,
        s2c_deposit_wallet_result = 7704,
        s2c_withdraw_wallet_result = 7705,
        s2c_single_to_other_result = 7706,
        s2c_reflush_wallet_result = 7711,
        s2c_replay_history_result = 31600,
        s2c_replay_detail_shqm = 31601,
        s2c_replay_detail_srnn = 31602,
        s2c_replay_detail_land = 31603,
        s2c_replay_detail_ermj = 31604,
        s2c_replay_detail_qznn_new = 31605,
        s2c_replay_detail_srmj = 31606,
        s2c_haolu_result = 31607,
        s2c_haolu_append = 31608,
        s2c_guild_data = 50201,
        s2c_guild_roomcard_cnt = 50202,
        s2s_guild_name = 50203,
        s2c_guild_member_data = 50204,
        s2c_guild_member_prop = 50205,
        s2c_guild_ask_data = 50206,
        s2c_guild_msg_data = 50207,
        s2c_guild_points_msg_data = 50208,
        s2c_guild_mul_points = 50209,
        s2c_guild_game_create = 50210,
        s2c_guild_game_enter_exit = 50211,
        s2c_guild_game_delete = 50212,
        s2c_guild_notice = 50213,
        s2c_chairman_spec_data = 50214,
        s2c_member_spec_data = 50215,
        s2c_guild_expends_data = 50216,
        s2c_master_operation_err = 50217,
        s2c_guild_id = 7690,
        s2c_guild_refused = 7692,
        s2c_gold_record = 7693,
        s2c_single_add_gold_result = 7694,
        s2c_single_check_balance_result = 7695,
        s2c_detailId_result = 19998,
        s2c_rebate_list_result = 7696,
        s2c_rebate_log_result = 7697,
        s2c_rebate_detail_result = 7698,
        s2c_rebate_gain_result = 7699,
    }
    type c2g_heartbeat = {
        packet_id?: number;
    };
    type c2s_connect = {
        packet_id?: number;
        account?: string;
        token?: string;
        sign?: string;
        platform?: string;
        login_platform?: string;
        machine_code?: string;
        machine_type?: string;
        channelid?: number;
    };
    type c2s_asklogin = {
        packet_id?: number;
        channelid?: string;
    };
    type c2s_enter_game = {
        packet_id?: number;
        gameid?: number;
        gamever?: number;
        roomid?: number;
        unique_id?: string;
        roomcard_num?: number;
        sel_config?: msg_sel_roomcard_config;
        game_code?: string;
    };
    type c2s_command = {
        packet_id?: number;
        command?: string;
    };
    type c2s_ask_check_payment = {
        packet_id?: number;
        orderid?: string;
    };
    type c2s_ask_test_payment = {
        packet_id?: number;
        pay_type?: number;
        pay_value?: number;
    };
    type c2s_leave_game = {
        packet_id?: number;
    };
    type c2s_update_playerhead = {
        packet_id?: number;
        headStr?: string;
    };
    type c2s_update_nickname = {
        packet_id?: number;
        nickName?: string;
    };
    type c2s_update_sex = {
        packet_id?: number;
        sex?: number;
    };
    type c2s_beneifts = {
        packet_id?: number;
    };
    type c2s_get_questlist = {
        packet_id?: number;
    };
    type c2s_receive_questreward = {
        packet_id?: number;
        questid?: number;
    };
    type c2s_ask_message = {
        packet_id?: number;
    };
    type c2s_delete_message = {
        packet_id?: number;
        delete_list: string[];
    };
    type c2s_read_message = {
        packet_id?: number;
        id?: string;
    };
    type c2s_receive_share_reward = {
        packet_id?: number;
    };
    type c2s_req_faq = {
        packet_id?: number;
    };
    type c2s_req_faq_detail = {
        packet_id?: number;
        index?: number;
    };
    type c2s_req_cs_contact = {
        packet_id?: number;
    };
    type c2s_suggestion = {
        packet_id?: number;
        text?: string;
    };
    type c2s_req_suggest = {
        packet_id?: number;
    };
    type c2s_wechat_share_task = {
        packet_id?: number;
    };
    type c2s_req_sync_gold = {
        packet_id?: number;
    };
    type c2s_performance_list = {
        packet_id?: number;
    };
    type c2s_performance_gain = {
        packet_id?: number;
    };
    type c2s_performance_child = {
        packet_id?: number;
        player_id?: number;
    };
    type c2s_performance_check_gain = {
        packet_id?: number;
    };
    type c2s_performance_team_create = {
        packet_id?: number;
        count?: number;
        nick_name?: string;
    };
    type c2s_performance_team_list = {
        packet_id?: number;
    };
    type c2s_performance_team_info = {
        packet_id?: number;
        team_id?: number;
    };
    type c2s_performance_team_update = {
        packet_id?: number;
        optype?: number;
        team_id?: number;
        limit?: number;
        nick_name?: string;
    };
    type c2s_performance_info = {
        packet_id?: number;
    };
    type c2s_performance_info_self_today = {
        packet_id?: number;
    };
    type c2s_performance_info_self_yesterday = {
        packet_id?: number;
    };
    type c2s_performance_info_agent_today = {
        packet_id?: number;
    };
    type c2s_performance_info_agent_yesterday = {
        packet_id?: number;
    };
    type c2s_req_vip_info = {
        packet_id?: number;
        skin?: number;
    };
    type c2s_req_room_config = {
        packet_id?: number;
        game_id?: number;
    };
    type c2s_check_game_state = {
        packet_id?: number;
        game_id?: number;
    };
    type c2s_haolu_filte_get = {
        packet_id?: number;
    };
    type c2s_haolu_filte_set = {
        packet_id?: number;
        filte?: number;
    };
    type c2gs_player_connect = {
        packet_id?: number;
        playerid?: number;
        gameid?: number;
        agentid?: number;
    };
    type c2gs_player_disconnect = {
        packet_id?: number;
        playerid?: number;
    };
    type c2gs_game_history = {
        packet_id?: number;
        gameid?: number;
        idx_st?: number;
        count?: number;
    };
    type c2gs_replay_history = {
        packet_id?: number;
        player_id?: number;
        guild_id?: number;
    };
    type c2gs_replay_detail = {
        packet_id?: number;
        game_id?: number;
        log_id?: string;
    };
    type c2gs_haolu = {
        packet_id?: number;
    };
    type c2gs_change_state = {
        packet_id?: number;
        state?: number;
    };
    type c2s_activity_reward_log = {
        packet_id?: number;
    };
    type c2s_promote_url = {
        packet_id?: number;
        params?: string;
        channel_id?: string;
    };
    type c2s_check_box_password = {
        packet_id?: number;
        pwd?: string;
    };
    type c2s_get_safe_box_security_code = {
        packet_id?: number;
    };
    type c2s_draw_gold = {
        packet_id?: number;
        gold?: number;
        pwd?: string;
    };
    type c2s_deposit_gold = {
        packet_id?: number;
        gold?: number;
        pwd?: string;
    };
    type c2s_reset_box_password = {
        packet_id?: number;
        pwd1?: string;
        pwd2?: string;
        safeCode?: string;
    };
    type c2s_change_box_password = {
        packet_id?: number;
        old_pwd?: string;
        new_pwd1?: string;
        new_pwd2?: string;
    };
    type c2s_set_box_password = {
        packet_id?: number;
        pwd1?: string;
        pwd2?: string;
    };
    type c2s_activity_vip_ac_list = {
        packet_id?: number;
        skin?: number;
    };
    type c2s_req_safebox_log = {
        packet_id?: number;
        lastTime?: number;
    };
    type c2s_performance_configs = {
        packet_id?: number;
    };
    type c2s_join_guild = {
        packet_id?: number;
        guild_id?: number;
    };
    type c2s_master_operation = {
        packet_id?: number;
        player_id?: number;
        ops?: number;
        param?: number;
    };
    type c2s_member_operation = {
        packet_id?: number;
        ops?: number;
    };
    type c2s_join_guild_game = {
        packet_id?: number;
        roomcard_number?: number;
    };
    type c2s_guild_notice = {
        packet_id?: number;
        new_notice?: string;
    };
    type c2c_guild_name = {
        packet_id?: number;
        new_name?: string;
    };
    type c2s_gold_record = {
        packet_id?: number;
        game_id?: number;
    };
    type c2s_single_add_gold = {
        packet_id?: number;
        gold?: number;
    };
    type c2s_single_check_balance = {
        packet_id?: number;
    };
    type c2s_rebate_list = {
        packet_id?: number;
    };
    type c2s_rebate_log = {
        packet_id?: number;
    };
    type c2s_rebate_detail = {
        packet_id?: number;
        ts?: number;
    };
    type c2s_rebate_gain = {
        packet_id?: number;
    };
    type c2s_clear_guild_icon = {
        packet_id?: number;
    };
    type c2s_wallet_list = {
        packet_id?: number;
    };
    type c2s_deposit_wallet = {
        packet_id?: number;
        info?: msg_wallet_info;
    };
    type c2s_withdraw_wallet = {
        packet_id?: number;
        info?: msg_wallet_info;
    };
    type c2s_single_to_other = {
        packet_id?: number;
        info?: msg_wallet_info;
    };
    type c2s_withdraw_all_wallet = {
        packet_id?: number;
    };
    type c2s_reflush_wallet = {
        packet_id?: number;
        game_id?: number;
    };
    type s2c_send_msglist = {
        packet_id?: number;
        msgpaks: msg_list[];
    };
    type g2c_heartbeat = {
        packet_id?: number;
    };
    type msg_t2t_start = {
        packet_id?: number;
    };
    type s2c_connect_result = {
        packet_id?: number;
        result?: number;
        servertime?: number;
        gaming?: number;
        ver?: string;
    };
    type s2c_asklogin_result = {
        packet_id?: number;
        account_info?: msg_account_info;
        game_list: msg_game_info[];
        gaming?: number;
        bind_phone_demo?: boolean;
        bin_gold?: number;
        benefits_limit?: number;
        benefits_gold?: number;
        benefits_count?: number;
        guild_asks: guild_ask_record[];
        sort_class: number[];
    };
    type s2c_enter_game_result = {
        packet_id?: number;
        result?: number;
        result_param?: number;
        server_down_start?: number;
        server_down_end?: number;
        game_id?: number;
        game_url?: string;
    };
    type s2c_command_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_ask_check_payment_result = {
        packet_id?: number;
        result?: number;
        pay_type?: number;
        pay_value?: number;
        vip_exp?: number;
        orderid?: string;
    };
    type s2c_leave_game_result = {
        packet_id?: number;
        shutdown?: boolean;
        result?: number;
    };
    type s2c_update_playerhead_result = {
        packet_id?: number;
        headstr?: string;
        result?: number;
    };
    type s2c_update_nickname_result = {
        packet_id?: number;
        nickName?: string;
        result?: number;
    };
    type s2c_update_sex_result = {
        packet_id?: number;
        sex?: number;
        result?: number;
    };
    type s2c_w2c_notify = {
        packet_id?: number;
        content?: string;
        notifyType?: number;
        talkerNickName?: string;
        playerId?: number;
        talkerVIPLevel?: number;
        hasMonthCard?: boolean;
        repCount?: number;
        interval?: number;
        moneyNum?: number;
    };
    type s2c_change_photo_frame_result = {
        packet_id?: number;
        photoFrameId?: number;
        result?: number;
    };
    type s2c_benefits_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_player_kick = {
        packet_id?: number;
        kick_type?: number;
    };
    type s2c_get_questlist_result = {
        packet_id?: number;
        questlist: msg_quest_info[];
        is_new?: boolean;
    };
    type s2c_receive_questreward_result = {
        packet_id?: number;
        questid?: number;
        result?: number;
    };
    type s2c_change_quest = {
        packet_id?: number;
        qinfo?: msg_quest_info;
    };
    type s2c_ask_message_result = {
        packet_id?: number;
        result?: boolean;
        msg_list: msg_some_info[];
    };
    type s2c_delete_message_result = {
        packet_id?: number;
        result?: boolean;
    };
    type s2c_read_message_result = {
        packet_id?: number;
        result?: number;
        id?: string;
    };
    type s2c_bind_reward = {
        packet_id?: number;
        reward_gold?: number;
        reward_gold_new?: number;
    };
    type s2c_notify_share = {
        packet_id?: number;
        game_id?: number;
        room_id?: number;
        win_gold?: number;
        share_reward?: number;
    };
    type s2c_receive_share_reward_result = {
        packet_id?: number;
        result?: number;
        reward?: number;
    };
    type s2c_req_faq_result = {
        packet_id?: number;
        faq_list: msg_faq_def[];
    };
    type s2c_req_faq_detail_result = {
        packet_id?: number;
        faq?: msg_faq_def;
    };
    type s2c_req_cs_contact_result = {
        packet_id?: number;
        qq?: string;
    };
    type s2c_suggestion_result = {
        packet_id?: number;
        result?: number;
        suggest?: msg_suggest;
    };
    type s2c_req_suggest_result = {
        packet_id?: number;
        list: msg_suggest[];
    };
    type s2c_notify_task_reflush = {
        packet_id?: number;
    };
    type s2c_update_ipinfo_result = {
        packet_id?: number;
        ipinfo?: string;
    };
    type s2c_req_sync_gold_result = {
        packet_id?: number;
        gold?: number;
        roomcard?: number;
    };
    type s2c_performance_list_result = {
        packet_id?: number;
        info: msg_performance_info[];
    };
    type s2c_performance_gain_result = {
        packet_id?: number;
        result?: number;
        gain?: number;
    };
    type s2c_performance_child_result = {
        packet_id?: number;
        info?: msg_performance_info;
    };
    type s2c_performance_check_gain_result = {
        packet_id?: number;
        gain?: number;
    };
    type s2c_performance_team_create_result = {
        packet_id?: number;
        result?: number;
        team_id?: number;
        count?: number;
        nick_name?: string;
        code_tag?: number;
    };
    type s2c_performance_team_list_result = {
        packet_id?: number;
        teams: msg_performance_team[];
    };
    type s2c_performance_team_info_result = {
        packet_id?: number;
        team: msg_performance_team[];
    };
    type s2c_performance_team_update_result = {
        packet_id?: number;
        result?: number;
        optype?: number;
        team_id?: number;
        limit?: number;
        nick_name?: string;
        code_tag?: number;
    };
    type s2c_performance_info_result = {
        packet_id?: number;
        commission_today_team?: number;
        commission_today_self?: number;
        commission_today_agent?: number;
        commission_yesterday_team?: number;
        commission_yesterday_self?: number;
        commission_yesterday_agent?: number;
        per_today_team?: number;
        per_today_self?: number;
        per_today_agent?: number;
        per_yesterday_team?: number;
        per_yesterday_self?: number;
        per_yesterday_agent?: number;
        per_today?: number;
        per_this_week?: number;
        rebate_today?: number;
        rebate_this_week?: number;
        per_b_self_today?: number;
        per_b_child_today?: number;
        per_b_self_yesterday?: number;
        per_b_child_yesterday?: number;
        ac?: number;
        ac_inc?: number;
        ac_inc_yd?: number;
        ac_inc_tw?: number;
        ac_inc_lw?: number;
        ac_inc_tm?: number;
        ac_inc_lm?: number;
        parent?: number;
        gain_all?: number;
        ac_inc_dir?: number;
        count_dir?: number;
    };
    type s2c_performance_info_self_today_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_performance_info_self_yesterday_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_performance_info_agent_today_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_performance_info_agent_yesterday_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_notice = {
        packet_id?: number;
    };
    type s2c_req_vip_info_result = {
        packet_id?: number;
        viplv?: number;
        vipexp?: number;
        ac_list: ac_info[];
    };
    type s2c_req_room_config_result = {
        packet_id?: number;
        game_id?: number;
        GameTax?: number;
        LotteryTax?: boolean;
        LotteryBackzjh1?: number;
        LotteryBackrobcow1?: number;
        LotteryBackrobcow2?: number;
        LotteryBackrobcow3?: number;
        LotteryBackrobcow4?: number;
        room_cfg: msg_room_config[];
    };
    type gs2c_player_connect_result = {
        packet_id?: number;
        result?: number;
    };
    type gs2c_player_disconnect_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_activity_reward_log_result = {
        packet_id?: number;
        ac_reward?: number;
        ac_per?: number;
        ac_per_cur?: number;
        log_list: ac_reward_log[];
    };
    type s2c_promote_url_result = {
        packet_id?: number;
        url?: string;
    };
    type s2c_check_password_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_get_safe_box_security_code_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_draw_gold_result = {
        packet_id?: number;
        gold?: number;
        result?: number;
    };
    type s2c_deposit_gold_result = {
        packet_id?: number;
        gold?: number;
        result?: number;
    };
    type s2c_reset_box_password_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_change_box_password_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_set_box_password_result = {
        packet_id?: number;
        result?: number;
    };
    type s2c_activity_vip_ac_list_result = {
        packet_id?: number;
        ac_list: ac_info[];
    };
    type s2c_req_safebox_log_result = {
        packet_id?: number;
        logList: SafeBoxLogInfo[];
        lastTime?: number;
    };
    type s2c_performance_configs_result = {
        packet_id?: number;
        rates: msg_performance_rate[];
        rebates: msg_performance_rebate[];
    };
    type s2c_check_game_state_result = {
        packet_id?: number;
        result?: number;
        server_down_start?: number;
        server_down_end?: number;
        yyhd_enable?: boolean;
        wxdl_enable?: boolean;
    };
    type s2c_join_guild = {
        packet_id?: number;
        result?: number;
        param?: number;
    };
    type s2c_haolu_filte_get_result = {
        packet_id?: number;
        filte?: number;
    };
    type s2c_haolu_filte_set_result = {
        packet_id?: number;
        filte?: number;
    };
    type s2c_wallet_list_result = {
        packet_id?: number;
        infos: msg_wallet_info[];
    };
    type s2c_deposit_wallet_result = {
        packet_id?: number;
        result?: number;
        info?: msg_wallet_info;
        gold?: number;
        err_code?: number;
    };
    type s2c_withdraw_wallet_result = {
        packet_id?: number;
        result?: number;
        info?: msg_wallet_info;
        gold?: number;
        err_code?: number;
    };
    type s2c_single_to_other_result = {
        packet_id?: number;
        result?: number;
        info?: msg_wallet_info;
    };
    type s2c_reflush_wallet_result = {
        packet_id?: number;
        result?: number;
        info?: msg_wallet_info;
    };
    type s2c_replay_history_result = {
        packet_id?: number;
        records: replay_record[];
    };
    type s2c_replay_detail_shqm = {
        packet_id?: number;
        replay_deldata?: replay_data;
        hand_card: replay_cards[];
        ops: shqm_replay_operate[];
        hu_data: shqm_win_result[];
        dice_count?: number;
        banker_user?: number;
        huang_fan_cnt?: number;
    };
    type s2c_replay_detail_srnn = {
        packet_id?: number;
        replay_deldata?: replay_data;
        hand_card: replay_cards[];
        ops: srnn_replay_operate[];
        card_type: number[];
        banker_user?: number;
        win: boolean[];
    };
    type s2c_replay_detail_land = {
        packet_id?: number;
        replay_deldata?: replay_data;
        ops: land_replay_operate[];
        back_card: number[];
        banker_user?: number;
        task_id?: number;
        total_times: number[];
        spring?: boolean;
        task_ok?: number;
    };
    type s2c_replay_detail_ermj = {
        packet_id?: number;
        replay_deldata?: replay_data;
        banker_user?: number;
        dice_count?: number;
        hand_card: replay_cards[];
        bu_hua: ermj_first_bu_hua[];
        ops: ermj_replay_operate[];
        FanType1: number[];
        FanType2: number[];
        FanType3: number[];
        Fan_Cnt?: number;
        Hu_Card?: number;
    };
    type s2c_replay_detail_qznn_new = {
        packet_id?: number;
        replay_deldata?: replay_data;
        hand_card: replay_cards[];
        ops: qznn_new_replay_operate[];
        card_type: number[];
        banker_user?: number;
    };
    type s2c_replay_detail_srmj = {
        packet_id?: number;
        replay_deldata?: replay_data;
        hand_card: replay_cards[];
        ops: srmj_replay_operate[];
        hu_data: srmj_win_result[];
        dice_count?: number;
        banker_user?: number;
        huan_type?: number;
        huan_old: replay_cards[];
        huan_new: replay_cards[];
    };
    type s2c_haolu_result = {
        packet_id?: number;
        info: gs_haolu_info[];
    };
    type s2c_haolu_append = {
        packet_id?: number;
        info_append?: gs_haolu_append;
    };
    type s2c_guild_data = {
        packet_id?: number;
        guild_id?: number;
        guild_name?: string;
        roomcard_cnt?: number;
        member: guild_member[];
        games: guild_game[];
        guild_notice?: string;
        changed_name?: boolean;
    };
    type s2c_guild_roomcard_cnt = {
        packet_id?: number;
        roomcard_cnt?: number;
    };
    type s2s_guild_name = {
        packet_id?: number;
        result?: number;
        new_name?: string;
    };
    type s2c_guild_member_data = {
        packet_id?: number;
        member?: guild_member;
    };
    type s2c_guild_member_prop = {
        packet_id?: number;
        player_id?: number;
        prop?: number;
        value?: number;
    };
    type s2c_guild_ask_data = {
        packet_id?: number;
        ask: ask_record[];
    };
    type s2c_guild_msg_data = {
        packet_id?: number;
        guild_msg?: guild_msg_record;
    };
    type s2c_guild_points_msg_data = {
        packet_id?: number;
        points_msg?: points_msg_record;
    };
    type s2c_guild_mul_points = {
        packet_id?: number;
        multi_points: member_points[];
    };
    type s2c_guild_game_create = {
        packet_id?: number;
        room_no?: number;
        player_id?: number;
        game_id?: number;
        sel_config?: msg_sel_roomcard_config;
        room_type?: number;
    };
    type s2c_guild_game_enter_exit = {
        packet_id?: number;
        room_no?: number;
        player_id?: number;
        enter?: boolean;
    };
    type s2c_guild_game_delete = {
        packet_id?: number;
        room_no?: number;
    };
    type s2c_guild_notice = {
        packet_id?: number;
        new_notice?: string;
    };
    type s2c_chairman_spec_data = {
        packet_id?: number;
        ask: ask_record[];
        guild_msg: guild_msg_record[];
        points_msg: points_msg_record[];
        expends: expends_record[];
    };
    type s2c_member_spec_data = {
        packet_id?: number;
        points_msg: points_msg_record[];
    };
    type s2c_guild_expends_data = {
        packet_id?: number;
        expends_msg?: expends_record;
    };
    type s2c_master_operation_err = {
        packet_id?: number;
        result?: number;
        param?: number;
    };
    type s2c_guild_id = {
        packet_id?: number;
        id?: number;
    };
    type s2c_guild_refused = {
        packet_id?: number;
        guild_id?: number;
    };
    type s2c_gold_record = {
        packet_id?: number;
        record_list: msg_gold_record[];
    };
    type s2c_single_add_gold_result = {
        packet_id?: number;
        result?: number;
        gold?: number;
    };
    type s2c_single_check_balance_result = {
        packet_id?: number;
        result?: number;
        gold?: number;
    };
    type s2c_detailId_result = {
        packet_id?: number;
        detailid?: string;
    };
    type s2c_rebate_list_result = {
        packet_id?: number;
        info: msg_rebate[];
    };
    type s2c_rebate_log_result = {
        packet_id?: number;
        info: msg_rebate_log[];
    };
    type s2c_rebate_detail_result = {
        packet_id?: number;
        info: msg_rebate[];
    };
    type s2c_rebate_gain_result = {
        packet_id?: number;
        result?: number;
        gain?: number;
    };
    type msg_list = {
        msgid?: number;
        msginfo?: egret.ByteArray;
    };
    type msg_game_info = {
        gameid?: number;
        gamever?: number;
        curOnlineNum?: number;
        isHot?: boolean;
        sort?: number;
        minVer?: number;
        h5GameVer: string[];
        isPowerful?: boolean;
        roomcard_config?: msg_roomcard_config;
        pure_model?: boolean;
        wallet?: number;
    };
    type msg_account_info = {
        aid?: number;
        channelId?: string;
        nickname?: string;
        gold?: number;
        viplvl?: number;
        vipexp?: number;
        icon_custom?: string;
        sex?: number;
        Ticket?: number;
        curPhotoFrameId?: number;
        payids: number[];
        isSafeDepositBoxPwdEmpty?: boolean;
        safeBoxGold?: number;
        collected?: number;
        updateNicknameCount?: number;
        isBindMobilePhone?: boolean;
        create_time?: number;
        Privilege?: number;
        lastGameId?: number;
        isFormal?: boolean;
        BindInfo?: string;
        RealName?: string;
        Recharged?: number;
        inviter_id?: number;
        water?: number;
        inviter_reward_count?: number;
        withdraw?: number;
        sevenday_done?: boolean;
        quest_list: number[];
        limit_time_photo?: number;
        ipinfo?: string;
        inviter_reward?: number;
        performance?: number;
        ts_ac_bind?: number;
        can_bind_alipay?: boolean;
        cs_token?: string;
        LogOutTime?: number;
        bindphone?: string;
        room_card?: number;
        guild_id?: number;
        guild_points?: number;
        join_guild_time?: number;
        acctype?: string;
        wechat_headimg?: string;
        flag_agent_status?: number;
        GuildWeChat?: string;
        rebate_open?: boolean;
        guild_icon?: boolean;
    };
    type msg_quest_info = {
        questid?: number;
        count?: number;
        received?: boolean;
    };
    type msg_some_info = {
        id?: string;
        userId?: number;
        timeValue?: number;
        msgInfo?: string;
        read?: number;
        items: msg_item[];
    };
    type msg_item = {
        id?: number;
        count?: number;
    };
    type msg_faq_def = {
        index?: number;
        text?: string;
    };
    type msg_suggest = {
        text?: string;
        time?: number;
    };
    type msg_performance_info = {
        player_id?: number;
        photo_frame?: number;
        nick_name?: string;
        parent?: number;
        per_today?: number;
        per_yesterday?: number;
        per_sub_today?: number;
        per_sub_yesterday?: number;
        per_tw?: number;
        per_lw?: number;
        per_sub_tw?: number;
        per_sub_lw?: number;
        ts_create?: number;
        ac?: number;
        ac_inc?: number;
        ac_inc_yd?: number;
        ac_inc_tw?: number;
        ac_inc_lw?: number;
        ac_inc_tm?: number;
        ac_inc_lm?: number;
        gain_yd?: number;
        gain_tw?: number;
        gain_lw?: number;
        gain?: number;
    };
    type msg_performance_team = {
        id?: number;
        name?: string;
        count?: number;
        count_limit?: number;
        code_tag?: number;
        ac_inc?: number;
        member_infos: msg_performance_info[];
    };
    type ac_info = {
        Uid?: number;
        Aid?: number;
        Tid?: number;
        Title?: string;
        indexSort?: number;
    };
    type ac_reward_log = {
        uid?: number;
        ts?: number;
        reward?: number;
        per?: number;
        Title?: string;
    };
    type SafeBoxLogInfo = {
        time?: number;
        gold?: number;
        player_gold?: number;
    };
    type msg_room_config = {
        RoomID?: number;
        unique_id?: string;
        BankerCondition?: number;
        FirstBankerCost?: number;
        AddBankerCost?: number;
        AutoLeaveBanker?: number;
        PlayerMaxCount?: number;
        GoldCondition?: number;
        BetCondition?: number;
        BaseGold?: number;
        WeightList: number[];
        BetLimit: number[];
        BetRange: number[];
        customList: number[];
        platList: number[];
        RoomName?: string;
        RoomIDTxt?: string;
        RoomType?: number;
        RoomNmType?: number;
        CarryRest?: number;
        BigBlind?: number;
        SmallBlind?: number;
        RateList: number[];
        FreeGold?: number;
        MaxAnte?: number;
        HuaGold?: number;
        isBankerOn?: boolean;
    };
    type msg_performance_rate = {
        gameid?: number;
        performancerate?: number;
        desc?: string;
    };
    type msg_performance_rebate = {
        pbutton?: number;
        ptop?: number;
        rate?: number;
        desc?: string;
    };
    type msg_roomcard_config = {
        game_id?: number;
        base_golds: number[];
        durations: number[];
        models: number[];
        types: number[];
        rate_limits: number[];
        rounds: number[];
        cost_counts: number[];
        player_counts: number[];
        small_blinds: number[];
        big_blinds: number[];
        hua_golds: number[];
        gold_conditions: number[];
        room_type?: number;
    };
    type msg_sel_roomcard_config = {
        game_id?: number;
        base_gold?: number;
        duration?: number;
        model?: number;
        type: number[];
        rate_limit?: number;
        round?: number;
        cost_count?: number;
        player_count?: number;
        small_blind?: number;
        big_blind?: number;
        hua_gold?: number;
        gold_condition?: number;
    };
    type replay_record = {
        game_id?: number;
        table_id?: number;
        rounds_cnt?: number;
        begin_time?: number;
        players: replay_player[];
        rounds: replay_round[];
        base_score?: number;
    };
    type replay_player = {
        player_id?: number;
        player_name?: string;
        head_frame?: number;
        head_custom?: string;
        player_sex?: number;
        vip_level?: number;
        player_win?: number;
    };
    type replay_round = {
        player_win: number[];
        log_id?: string;
    };
    type replay_cards = {
        cards: number[];
    };
    type replay_data = {
        dismiss?: boolean;
        detail_id?: string;
        StartGold: number[];
        win_limited: boolean[];
        low_limited: boolean[];
    };
    type shqm_replay_operate = {
        player_id?: number;
        operate_id?: number;
        card?: number;
        confirm?: boolean;
        first_bu_hua: number[];
    };
    type srnn_replay_operate = {
        player_id?: number;
        operate_id?: number;
        operate_param?: number;
    };
    type land_replay_operate = {
        player_id?: number;
        operate_id?: number;
        operate_param: number[];
    };
    type ermj_first_bu_hua = {
        player_id?: number;
        hua_cards: number[];
        bu_cards: number[];
    };
    type ermj_replay_operate = {
        player_id?: number;
        operate_id?: number;
        card?: number;
    };
    type qznn_new_replay_operate = {
        player_id?: number;
        operate_id?: number;
        operate_param?: number;
    };
    type srmj_replay_operate = {
        player_id?: number;
        operate_id?: number;
        card?: number;
        con?: boolean;
    };
    type srmj_win_result = {
        win_idx?: number;
        win_account?: number;
        win_limited?: boolean;
        lose: srmj_lose_result[];
        fan_cnt?: number;
        result1: number[];
        result2: number[];
        result3: number[];
        win_root_cnt?: number;
        user_action?: number;
    };
    type shqm_win_result = {
        win_idx?: number;
        win_total?: number;
        win_account?: number;
        win_limited?: boolean;
        lose: shqm_lose_result[];
        fan_cnt?: number;
        result1: number[];
        result2: number[];
        result3: number[];
        hua_di?: number;
    };
    type shqm_lose_result = {
        lose_idx?: number;
        lose_total?: number;
        lose_account?: number;
        lose_limited?: boolean;
    };
    type srmj_lose_result = {
        lose_idx?: number;
        lose_account?: number;
        lose_limited?: boolean;
    };
    type guild_member = {
        player?: guild_player;
        points?: number;
        online?: boolean;
        gaming_id?: number;
    };
    type guild_player = {
        player_id?: number;
        player_name?: string;
        head_frame?: number;
        head_custom?: string;
        player_sex?: number;
        vip_level?: number;
    };
    type guild_msg_record = {
        player?: guild_player;
        time?: number;
        msg?: number;
    };
    type points_msg_record = {
        player?: guild_player;
        time?: number;
        points?: number;
    };
    type ask_record = {
        player?: guild_player;
        time?: number;
    };
    type guild_game = {
        room_no?: number;
        game_id?: number;
        players: number[];
        sel_config?: msg_sel_roomcard_config;
        room_type?: number;
        create_time?: number;
    };
    type member_points = {
        player_id?: number;
        points?: number;
    };
    type guild_ask_record = {
        time?: number;
        guild_id?: number;
        ask_status?: number;
    };
    type expends_record = {
        player?: guild_player;
        time?: number;
        game_id?: number;
        roomcard_cnt?: number;
    };
    type msg_gold_record = {
        log_id?: string;
        game_id?: number;
        room_id?: number;
        room_id_txt?: string;
        room_name_type?: number;
        old_gold?: number;
        new_gold?: number;
        add_gold?: number;
        bet_gold?: number;
        win_gold?: number;
        profit_gold?: number;
        reason?: number;
        log_time?: number;
    };
    type msg_rebate = {
        gameid?: number;
        bet?: number;
        rebate?: number;
    };
    type msg_rebate_log = {
        bet?: number;
        rebate?: number;
        ts?: number;
    };
    type gs_haolu_info = {
        gameid?: number;
        roomid?: number;
        handicapid?: number;
        haolu_type?: number;
        flag?: boolean;
        result_2: boolean[];
        result_3: number[];
    };
    type gs_haolu_append = {
        agentid?: number;
        gameid?: number;
        roomid?: number;
        hand: gs_haolu_handicap_append[];
    };
    type gs_haolu_handicap_append = {
        handicapid?: number;
        result?: number;
        type?: number;
    };
    type gs_haolu_game = {
        gameid?: number;
        flag_type?: boolean;
        room: gs_haolu_room[];
    };
    type gs_haolu_room = {
        roomid?: number;
        handicap: gs_haolu_handicap[];
    };
    type gs_haolu_handicap = {
        handicapid?: number;
        result_src: number[];
        result_3: number[];
        result_2: boolean[];
        haolu_type?: number;
    };
    type msg_wallet_info = {
        game_id?: number;
        gold?: number;
    };
    let c2sEncode: {
        "301": {
            "packet_id": number[];
        };
        "5001": {
            "packet_id": number[];
            "account": number[];
            "token": number[];
            "sign": number[];
            "platform": number[];
            "login_platform": number[];
            "machine_code": number[];
            "machine_type": number[];
            "channelid": number[];
        };
        "5003": {
            "packet_id": number[];
            "channelid": number[];
        };
        "5004": {
            "packet_id": number[];
            "gameid": number[];
            "gamever": number[];
            "roomid": number[];
            "unique_id": number[];
            "roomcard_num": number[];
            "sel_config": number[];
            "game_code": number[];
        };
        "5005": {
            "packet_id": number[];
            "command": number[];
        };
        "5006": {
            "packet_id": number[];
            "orderid": number[];
        };
        "5007": {
            "packet_id": number[];
            "pay_type": number[];
            "pay_value": number[];
        };
        "5008": {
            "packet_id": number[];
        };
        "5010": {
            "packet_id": number[];
            "headStr": number[];
        };
        "5011": {
            "packet_id": number[];
            "nickName": number[];
        };
        "5012": {
            "packet_id": number[];
            "sex": number[];
        };
        "5029": {
            "packet_id": number[];
            "pwd1": number[];
            "pwd2": number[];
        };
        "5030": {
            "packet_id": number[];
            "gold": number[];
            "pwd": number[];
        };
        "5031": {
            "packet_id": number[];
            "gold": number[];
            "pwd": number[];
        };
        "5034": {
            "packet_id": number[];
            "old_pwd": number[];
            "new_pwd1": number[];
            "new_pwd2": number[];
        };
        "5037": {
            "packet_id": number[];
        };
        "5044": {
            "packet_id": number[];
        };
        "5058": {
            "packet_id": number[];
        };
        "5059": {
            "packet_id": number[];
            "questid": number[];
        };
        "5066": {
            "packet_id": number[];
            "pwd1": number[];
            "pwd2": number[];
            "safeCode": number[];
        };
        "5067": {
            "packet_id": number[];
            "lastTime": number[];
        };
        "5068": {
            "packet_id": number[];
            "pwd": number[];
        };
        "5080": {
            "packet_id": number[];
        };
        "5081": {
            "packet_id": number[];
            "delete_list": number[];
        };
        "5082": {
            "packet_id": number[];
            "id": number[];
        };
        "5091": {
            "packet_id": number[];
        };
        "5092": {
            "packet_id": number[];
        };
        "5093": {
            "packet_id": number[];
            "index": number[];
        };
        "5094": {
            "packet_id": number[];
        };
        "5097": {
            "packet_id": number[];
            "text": number[];
        };
        "5098": {
            "packet_id": number[];
        };
        "5100": {
            "packet_id": number[];
        };
        "5111": {
            "packet_id": number[];
        };
        "5120": {
            "packet_id": number[];
        };
        "5121": {
            "packet_id": number[];
        };
        "5122": {
            "packet_id": number[];
            "player_id": number[];
        };
        "5123": {
            "packet_id": number[];
        };
        "5124": {
            "packet_id": number[];
            "count": number[];
            "nick_name": number[];
        };
        "5125": {
            "packet_id": number[];
        };
        "5126": {
            "packet_id": number[];
            "team_id": number[];
        };
        "5127": {
            "packet_id": number[];
            "optype": number[];
            "team_id": number[];
            "limit": number[];
            "nick_name": number[];
        };
        "5128": {
            "packet_id": number[];
        };
        "5129": {
            "packet_id": number[];
        };
        "5130": {
            "packet_id": number[];
        };
        "5131": {
            "packet_id": number[];
        };
        "5132": {
            "packet_id": number[];
        };
        "5133": {
            "packet_id": number[];
        };
        "5150": {
            "packet_id": number[];
            "skin": number[];
        };
        "5174": {
            "packet_id": number[];
            "params": number[];
            "channel_id": number[];
        };
        "5175": {
            "packet_id": number[];
            "game_id": number[];
        };
        "5176": {
            "packet_id": number[];
            "game_id": number[];
        };
        "5179": {
            "packet_id": number[];
            "guild_id": number[];
        };
        "5182": {
            "packet_id": number[];
            "game_id": number[];
        };
        "5184": {
            "packet_id": number[];
            "gold": number[];
        };
        "5185": {
            "packet_id": number[];
        };
        "5186": {
            "packet_id": number[];
        };
        "5187": {
            "packet_id": number[];
        };
        "5188": {
            "packet_id": number[];
            "ts": number[];
        };
        "5189": {
            "packet_id": number[];
        };
        "5190": {
            "packet_id": number[];
        };
        "5192": {
            "packet_id": number[];
        };
        "5193": {
            "packet_id": number[];
            "filte": number[];
        };
        "5194": {
            "packet_id": number[];
        };
        "5195": {
            "packet_id": number[];
            "info": number[];
        };
        "5196": {
            "packet_id": number[];
            "info": number[];
        };
        "5197": {
            "packet_id": number[];
            "info": number[];
        };
        "5198": {
            "packet_id": number[];
        };
        "5203": {
            "packet_id": number[];
            "game_id": number[];
        };
        "30001": {
            "packet_id": number[];
            "playerid": number[];
            "gameid": number[];
            "agentid": number[];
        };
        "30002": {
            "packet_id": number[];
            "playerid": number[];
        };
        "30003": {
            "packet_id": number[];
            "gameid": number[];
            "idx_st": number[];
            "count": number[];
        };
        "30004": {
            "packet_id": number[];
            "player_id": number[];
            "guild_id": number[];
        };
        "30005": {
            "packet_id": number[];
            "game_id": number[];
            "log_id": number[];
        };
        "30006": {
            "packet_id": number[];
        };
        "30007": {
            "packet_id": number[];
            "state": number[];
        };
        "40105": {
            "packet_id": number[];
        };
        "40109": {
            "packet_id": number[];
            "skin": number[];
        };
        "50001": {
            "packet_id": number[];
            "player_id": number[];
            "ops": number[];
            "param": number[];
        };
        "50002": {
            "packet_id": number[];
            "ops": number[];
        };
        "50003": {
            "packet_id": number[];
            "roomcard_number": number[];
        };
        "50004": {
            "packet_id": number[];
            "new_notice": number[];
        };
        "50005": {
            "packet_id": number[];
            "new_name": number[];
        };
    };
    let s2cDecode: {
        "401": {
            "1": (string | number)[];
            "3": (string | number)[];
        };
        "404": {
            "1": (string | number)[];
        };
        "444": {
            "1": (string | number)[];
        };
        "7501": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "7503": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
        };
        "7504": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
        };
        "7505": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7506": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "7507": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7509": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7510": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7511": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7523": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
        };
        "7531": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7532": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7533": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7534": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7536": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7539": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7541": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7548": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7561": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7562": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7563": {
            "1": (string | number)[];
            "3": (string | number)[];
        };
        "7572": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7573": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7574": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7586": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7587": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7588": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7589": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7599": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "7600": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7601": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7602": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7603": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7606": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7607": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7609": {
            "1": (string | number)[];
        };
        "7621": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7622": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7631": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7632": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7633": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7634": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7635": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "7636": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7637": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7638": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "7639": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
            "14": (string | number)[];
            "15": (string | number)[];
            "16": (string | number)[];
            "17": (string | number)[];
            "18": (string | number)[];
            "19": (string | number)[];
            "20": (string | number)[];
            "21": (string | number)[];
            "22": (string | number)[];
            "23": (string | number)[];
            "24": (string | number)[];
            "25": (string | number)[];
            "26": (string | number)[];
            "27": (string | number)[];
            "28": (string | number)[];
            "29": (string | number)[];
            "30": (string | number)[];
            "31": (string | number)[];
            "32": (string | number)[];
        };
        "7640": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7641": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7642": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7643": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7644": {
            "1": (string | number)[];
        };
        "7660": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "7684": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7685": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
        };
        "7686": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7687": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "7689": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7690": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7692": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7693": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7694": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7695": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7696": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7697": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7698": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7699": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7701": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7702": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7703": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "7704": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "7705": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "7706": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "7711": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "19998": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "31001": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "31002": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "31600": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "31601": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
        };
        "31602": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
        };
        "31603": {
            "1": (string | number)[];
            "2": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
        };
        "31604": {
            "1": (string | number)[];
            "2": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
        };
        "31605": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "31606": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
        };
        "31607": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "31608": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "41105": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "41109": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50201": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
        };
        "50202": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50203": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "50204": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50205": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "50206": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50207": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50208": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50209": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50210": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "50211": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "50212": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50213": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50214": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "50215": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50216": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "50217": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
    };
    let typeDecode: {
        "30010": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30011": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
        };
        "30012": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "14": (string | number)[];
            "16": (string | number)[];
            "19": (string | number)[];
            "20": (string | number)[];
            "21": (string | number)[];
            "22": (string | number)[];
            "26": (string | number)[];
            "27": (string | number)[];
            "36": (string | number)[];
            "44": (string | number)[];
            "46": (string | number)[];
            "47": (string | number)[];
            "48": (string | number)[];
            "49": (string | number)[];
            "52": (string | number)[];
            "53": (string | number)[];
            "54": (string | number)[];
            "55": (string | number)[];
            "56": (string | number)[];
            "57": (string | number)[];
            "58": (string | number)[];
            "59": (string | number)[];
            "60": (string | number)[];
            "61": (string | number)[];
            "62": (string | number)[];
            "63": (string | number)[];
            "64": (string | number)[];
            "65": (string | number)[];
            "66": (string | number)[];
            "67": (string | number)[];
            "68": (string | number)[];
            "69": (string | number)[];
            "70": (string | number)[];
            "71": (string | number)[];
            "72": (string | number)[];
            "73": (string | number)[];
            "74": (string | number)[];
            "75": (string | number)[];
            "76": (string | number)[];
            "77": (string | number)[];
        };
        "30013": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30014": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "30015": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30016": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30017": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30018": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
            "14": (string | number)[];
            "15": (string | number)[];
            "16": (string | number)[];
            "17": (string | number)[];
            "18": (string | number)[];
            "19": (string | number)[];
            "20": (string | number)[];
            "21": (string | number)[];
            "22": (string | number)[];
            "23": (string | number)[];
            "24": (string | number)[];
        };
        "30019": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
        };
        "30020": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "30021": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "30022": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30023": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
            "14": (string | number)[];
            "15": (string | number)[];
            "16": (string | number)[];
            "17": (string | number)[];
            "18": (string | number)[];
            "19": (string | number)[];
            "20": (string | number)[];
            "21": (string | number)[];
            "22": (string | number)[];
            "23": (string | number)[];
            "24": (string | number)[];
            "25": (string | number)[];
            "26": (string | number)[];
            "27": (string | number)[];
        };
        "30024": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30025": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "30026": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
            "14": (string | number)[];
        };
        "30027": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
        };
        "30028": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
        };
        "30029": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
        };
        "30030": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30031": {
            "1": (string | number)[];
        };
        "30032": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "30033": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "30034": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30035": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30036": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30037": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30038": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30039": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "30040": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
        };
        "30041": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
        };
        "30042": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "30043": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30044": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "30045": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "30046": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30047": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30048": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30049": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
        };
        "30050": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30051": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30052": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "30053": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
            "8": (string | number)[];
            "9": (string | number)[];
            "10": (string | number)[];
            "11": (string | number)[];
            "12": (string | number)[];
            "13": (string | number)[];
        };
        "30054": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30055": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30056": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
            "6": (string | number)[];
            "7": (string | number)[];
        };
        "30057": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
        };
        "30058": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30059": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
        };
        "30060": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
        "30061": {
            "1": (string | number)[];
            "2": (string | number)[];
            "3": (string | number)[];
            "4": (string | number)[];
            "5": (string | number)[];
        };
        "30062": {
            "1": (string | number)[];
            "2": (string | number)[];
        };
    };
}
declare module Base64 {
    function base64Encode(str: string): string;
    function decode(str: string): string;
}
declare module CacheUtil {
    function getArr(): any[];
    function freeArr(arr: any[]): void;
}
declare function md5(string: any): string;
declare module StringUtil {
    /**
     * 字符串补全。
     * @param src
     * @param fillStr
     * @param isPre
     * @returns {*}
     */
    function fill(src: any, fillStr: string, isPre?: boolean): string;
    /**
     * 格式化字符串
     * */
    function format(str: string, ...rest: any[]): string;
    function printf(str: string, ...rest: any[]): string;
}
declare module TimeUtil {
    const enum TimeConst {
        MONTHS_PER_YEAR = 12,
        DAYS_PER_WEEK = 7,
        HOURS_PER_DAY = 24,
        MINUTES_PER_HOUR = 60,
        SECONDS_PER_MINUTE = 60,
        SECONDS_PER_HOUR = 3600,
        SECONDS_PER_DAY = 86400,
        WEEKDAY_AT_FIRST_DAY = 4,
        MILLIS_PER_SECOND = 1000,
        MILLIS_PER_MINUTE = 60000,
        MILLIS_PER_HOUR = 3600000,
        MILLIS_PER_DAY = 86400000,
        SERVER_OPEN_DAY = 259200,
        DAYS_ONE = 1,
        CLICK_INTERVALTM = 2000,
    }
    function setBeginTm(beginTm_s: number): void;
    function isFirstDay(): boolean;
    function setSvrTm(svrTm: number): void;
    /**
     * 获取当前服务器的时间戳，单位毫秒
     *
     * */
    function getSvrMS(): number;
    function getSvrSec(): number;
    /**
     * 返回时间戳转换成时间表达式
     * @param ts: timestamp
     * @return string xxxx/xx/xx xx:xx
     */
    function formatTsStr(ts: number): string;
    function formatHmsTime(ts: number): string;
    /**
     *	@brief	获取相对当天具体时间点的时间
        *
        *	@param 	svrTm 服务器时间  单位毫秒
        *	@param 	offHour 	相当于0点的 移动值  时间点 单位小时
        *
        *	@return 时间戳 单位秒
        */
    function getRefreshTm(svrTm: number, refreshHour?: number): number;
    /**
     *	@brief	获取参数now当天的几点几分的time_t
        *
        *	@param 	time 要获取的当前时间 单位毫秒
        *	@param 	h 	时
        *	@param 	m 	分
        *	@param 	s 	秒
        *
        *	@return 时间戳 单位毫秒
        */
    function getTodayTm(msTm: number, h?: number, m?: number, s?: number, ms?: number): number;
    function getTowTm(now: number, h?: number, m?: number, s?: number): number;
    function getTowDiff(now: number, h?: number, m?: number, s?: number): number;
    /**
     * 判断是否为同一天
     * */
    function equalsDay(secTm1: number, secTm2: number): boolean;
    /**
     * 本期结束还有几天几时几分几秒 周一 和周五零点结束
     */
    function formatTm(): any;
    /**
     *
     * @param tm 毫秒
     */
    function getHourMinSec(offTm: number): any;
    /**
     *
     * @param myMonth 1-12
     */
    function getMonthDays(myMonth: number): number;
}
declare module game {
    interface IShowDFItemData extends cui.IItemData {
        handle: DefeatItemClick;
        id: number;
        isAlms: boolean;
        uId?: number;
    }
    interface DefeatItemClick {
        click(item: DefeatGItem): any;
    }
    class DefeatGeneral extends UIPopup {
        skClose: cui.ScaleButton;
        skRecharge: cui.SimpleButton;
        skLeft: cui.ScaleButton;
        skRight: cui.ScaleButton;
        skList: cui.DataGroup;
        private _idx;
        constructor();
        childrenCreated(): void;
        click(item: DefeatGItem): void;
    }
    class DefeatGItem extends cui.DataItem {
        skAni: UIDBAni;
        skClick: cui.SimpleButton;
        constructor();
        childrenCreated(): void;
    }
}
