module GMD_xzmj{
	export const enum GameUITag {
		openRoomViewUI = 1001,
		openRoomUI = 1002,
		openStart = 1003,
		openBalance = 1004
	}
	export let scene:game.IScene;
	export let isActive:boolean;
	export function init(): void {
		scene = game.gameScene;
		gameDataMo = new GameDataModel()

		let resName = 'xzmj_Lang'
		let resData = RES.getRes( resName )
		if( resData ) {
			TRain.langMgr.addGps( resData ）
			RES.destroyRes( resName );
		}
		
		resName = 'xzmj_Conf'
		resData = RES.getRes( resName )
		if( resData ) {
			gameDataMo.initConf( resData )
			RES.destroyRes( resName );
		}
		if( DEBUG )	game.VersionUI.getInst().setVer('1.0.0.0')
	}
	export function  _PlayMainSound(soundIdx: number): void {
		if( soundIdx == 1 ){
			Train.soundMgr.playSFX(<any> confConsts.SoundTp.click, 0, 1000)
		}
	}
	export function start( data?: {inGame:boolean} ): void {
		let skinConfig = new ConfigSkin();
		skinConfig = null;
		
		game.Protobuf.addDecodeProtos( Xzmj_NET_CONF.s2cDecode, Xzmj_NET_CONF.typeDecode )
		game.Protobuf.addEncodeProtos( Xzmj_NET_CONF.c2sDecode, Xzmj_NET_CONF.typeDecode )

		gameDataMo.RealGold = game.dataMgr.accMo.getVal( 'gold' )
		let ingame = gameDataMo.inGame = data? data.inGame:false
		gameDataMo.init()
		if( !ingame ) {
			showUI( data )
		}

		gameDataMo.regHandler()
		isActive = true
		let stage = TRain.core.stage
		stage.addEventListener( egret.Event.ACTIVATE
