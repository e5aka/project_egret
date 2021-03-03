declare namespace RES {
    interface ILoader extends egret.EventDispatcher {
        data: any;
        ud: string;
        load(url: string): void;
    }
    class RequestLoader extends egret.HttpRequest implements ILoader {
        ud: string;
        data: any;
        load(url: string): void;
    }
    interface IResData {
        $tm?: number;
        data?: any;
        $hasRef(): boolean;
        $addRef(): void;
        $subRef(): void;
    }
    class TexData extends egret.Texture implements IResData {
        $tm?: number;
        nm?: string;
        conf: any;
        data: any;
        private _ref;
        $hasRef(): boolean;
        $addRef(): void;
        $subRef(): void;
    }
    class FontRes extends egret.BitmapFont implements IResData {
        private _data;
        private _ref;
        data: TexData;
        $hasRef(): boolean;
        $addRef(): void;
        $subRef(): void;
    }
    /**
     * @classic
     * @private
     */
    abstract class AnalyzerBase extends egret.HashObject implements ITpLoader {
        finHandler: ILoadFinHandler;
        protected _canGC: boolean;
        protected _fileDic: any;
        protected _loadDic: {
            [key: number]: LoadItem[];
        };
        protected _fLoaders: ILoader[];
        /**
         * 加载一个资源文件
         * @param resItem 加载项信息
         * @param compFunc 加载完成回调函数,示例:compFunc(resItem:ResourceItem):void;
         * @param thisObject 加载完成回调函数的this引用
         */
        loadFile(loadItm: LoadItem): void;
        /**
         * @inheritDoc
         */
        getRes(url: string): any;
        hasRes(url: string): boolean;
        getResState(url: string): LoadState;
        /**
         * @inheritDoc
         */
        destroyRes(url: string): boolean;
        /**
         * 销毁某个资源文件的二进制数据,返回是否删除成功。
         * @param url 配置文件中加载项的url属性
         */
        protected onResDestroy(res: any): void;
        /**
        * 获取一个Loader对象
        */
        protected getLoader(): ILoader;
        protected abstract newLoader(): ILoader;
        protected analyzeData(loader: ILoader, cb: (data: any) => void): void;
        protected onLoadFinish(event: egret.Event): void;
        protected freeLoader(loader: ILoader): void;
        doGC(): void;
    }
}
declare namespace RES {
    /**
     * @private
     */
    class BinAnalyzer extends AnalyzerBase {
        protected newLoader(): ILoader;
    }
}
declare module RES {
    class SheetAnalyzer extends BinAnalyzer {
        protected _canGC: boolean;
        protected analyzeData(loader: ILoader, cb: (data: any) => void): void;
        protected parseSheet(res: TexData, jsonStr: string, otherStr?: string): void;
        protected onResDestroy(res: any): void;
    }
}
declare namespace RES {
    class JsonAnalyzer extends BinAnalyzer {
        protected newLoader(): ILoader;
        /**
         * 解析并缓存加载成功的数据
         */
        protected analyzeData(loader: ILoader, cb: (data: any) => void): void;
    }
}
declare namespace RES {
    class SoundRes extends egret.EventDispatcher implements IResData, ILoader {
        ud: string;
        private _data;
        private _ref;
        data: egret.Sound;
        $hasRef(): boolean;
        $addRef(): void;
        $subRef(): void;
        load(url: string): void;
    }
    class SoundAnalyzer extends AnalyzerBase {
        protected _canGC: boolean;
        protected newLoader(): ILoader;
        protected analyzeData(loader: ILoader, cb: (data: any) => void): void;
        protected freeLoader(loader: ILoader): void;
        protected onResDestroy(res: SoundRes): void;
    }
}
declare namespace RES {
    /**
     * @private
     */
    class ImageAnalyzer extends AnalyzerBase {
        protected _canGC: boolean;
        protected recycler: egret.ImageLoader[];
        protected newLoader(): any;
        protected analyzeData(loader: ILoader, cb: (data: any) => void): void;
        protected onResDestroy(res: any): void;
    }
}
declare namespace RES {
    /**
     * @private
     */
    class TextAnalyzer extends BinAnalyzer {
        protected newLoader(): ILoader;
    }
}
declare namespace RES {
    const enum LoadState {
        none = 0,
        load = 1,
        fail = 2,
        got = 3,
    }
    interface LoadItem {
        itm: ResItem;
        pri: number;
        load: boolean;
        pre: boolean;
        gps?: string[];
        cbs?: {
            fun: (data: any, itm: ResItem) => void;
            tar: any;
        }[];
    }
    interface LoadGp {
        gp: string;
        itms: ResItem[];
        pre: boolean;
        fins: string[];
        fails: string[];
    }
    interface ILoadFinHandler {
        onLoadFin: (itm: LoadItem) => void;
    }
    interface ITpLoader {
        finHandler: ILoadFinHandler;
        getRes(url: string): any;
        hasRes(url: string): boolean;
        getResState(url: string): LoadState;
        /**
         * 加载一个资源文件
         * @param itm 加载项信息
         * @param compFunc 加载完成回调函数,示例:compFunc(resItem:ResourceItem):void;
         * @param thisObject 加载完成回调函数的this引用
         */
        loadFile(itm: LoadItem): void;
    }
    class ResourceLoader extends egret.EventDispatcher implements ILoadFinHandler {
        /**
         * 最大并发加载数
         */
        maxLoad: number;
        retryCnt: number;
        private _loading;
        private _geting;
        private _gets;
        private _waits;
        private _waitDic;
        private _waitGpDic;
        private _preGps;
        private _loaders;
        constructor(tpLoaders: {
            [tp: string]: ITpLoader;
        });
        stopGroup(gpName: string): void;
        preLoadGroup(gpName: string, itms: ResItem[]): void;
        /**
         * 开始加载一组文件
         * @method RES.ResourceLoader#loadGroup
         * @param gpName {string} 组名
         * @param itms
         * @param priority {number} 加载优先级
         */
        loadGroup(gpName: string, itms: ResItem[], priority?: number): void;
        private _loadGp(gpName, itms, priority, isPerload);
        /**
         * 加载一个文件
         * @method RES.ResourceLoader#loadItem
         * @param itm {ResourceItem} 要加载的项
         * @param priority 为 负数时 表示插到最前面
         */
        loadItm(itm: ResItem, priority?: number, cb?: {
            fun: (data: any, itm: ResItem) => void;
            tar: any;
        }): void;
        private getInsPos(waits, pri);
        /**
         * 加载下一项
         */
        private next();
        private startLoad(loadItem);
        /**
         * 加载结束
         */
        onLoadFin(loadItm: LoadItem): void;
    }
}
declare namespace RES {
    const enum ResItem_IDX {
        url = 0,
        type = 1,
        name = 2,
    }
    type ResItem = string[];
    /**
     * @class RES.ResourceConfig
     * @classdesc
     * @private
     */
    class ResourceConfig {
        private _gpDic;
        private _resDic;
        constructor();
        getItm(name: string): ResItem;
        getGpItms(name: string): ResItem[];
        parseConf(data: any, folder: string): void;
    }
}
declare namespace RES {
    /**
     * @private
     */
    class FontAnalyzer extends SheetAnalyzer {
        protected _canGC: boolean;
        protected analyzeData(loader: ILoader, cb: (data: any) => void): any;
        protected parseSheet(texData: TexData, jsonStr: string, otherStr?: string): void;
    }
}
declare namespace RES {
    /**
     * @private
     */
    class McAnalyzer extends SheetAnalyzer {
        protected _canGC: boolean;
        protected parseSheet(texData: TexData, jsonStr: string, otherStr?: string): void;
    }
}
declare namespace RES {
    /**
     * The events of resource loading.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 资源加载事件。
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    class ResourceEvent extends egret.Event {
        /**
         * Failure event for a load item.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * Configure file to load and parse the completion event. Note: if a configuration file is loaded, it will not be thrown out, and if you want to handle the configuration loading failure, monitor the CONFIG_LOAD_ERROR event.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 配置文件加载并解析完成事件。注意：若有配置文件加载失败，将不会抛出此事件，若要处理配置加载失败，请同时监听 CONFIG_LOAD_ERROR 事件。
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        static CONFIG_COMPLETE: string;
        /**
         * Configuration file failed to load.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * Delay load group resource loading progress event.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 延迟加载组资源加载进度事件。
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        static GROUP_PROGRESS: string;
        /**
         * Delay load group resource to complete event. Note: if you have a resource item loading failure, the event will not be thrown, if you want to handle the group load failure, please listen to the GROUP_LOAD_ERROR event.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 延迟加载组资源加载完成事件。注意：若组内有资源项加载失败，将不会抛出此事件，若要处理组加载失败，请同时监听 GROUP_LOAD_ERROR 事件。
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        static GROUP_COMPLETE: string;
        /**
         * Delayed load group resource failed event.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * Creates an Event object to pass as a parameter to event listeners.
         * @param type  The type of the event, accessible as Event.type.
         * @param bubbles  Determines whether the Event object participates in the bubbling stage of the event flow. The default value is false.
         * @param cancelable Determines whether the Event object can be canceled. The default values is false.
         * @version Egret 2.4
         * @platform Web,Native
         * @private
         * @language en_US
         */
        /**
         * 创建一个作为参数传递给事件侦听器的 Event 对象。
         * @param type  事件的类型，可以作为 Event.type 访问。
         * @param bubbles  确定 Event 对象是否参与事件流的冒泡阶段。默认值为 false。
         * @param cancelable 确定是否可以取消 Event 对象。默认值为 false。
         * @version Egret 2.4
         * @platform Web,Native
         * @private
         * @language zh_CN
         */
        constructor(type: string, bubbles?: boolean, cancelable?: boolean);
        groupName: string;
        isErr: boolean;
        itemsLoaded: number;
        itemsTotal: number;
        /**
         * 使用指定的EventDispatcher对象来抛出事件对象。抛出的对象将会缓存在对象池上，供下次循环复用。
         * @method RES.ResourceEvent.dispatchResourceEvent
         * @param target {egret.IEventDispatcher}
         * @param type {string}
         * @param groupName {string}
         * @param resItem {egret.ResourceItem}
         * @param itemsLoaded {number}
         * @param itemsTotal {number}
         * @private
         */
        static dispatchProgress(target: egret.IEventDispatcher, type: string, groupName?: string, itemsLoaded?: number, itemsTotal?: number): boolean;
        static dispatchFin(target: egret.IEventDispatcher, type: string, name?: string, isErr?: boolean): boolean;
    }
}
declare namespace RES {
    /**
     * Version control loading interface
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/version/VersionControl.ts
     * @language en_US
     */
    /**
     * 版本控制加载的接口
     * @version Egret 2.4
     * @platform Web,Native
     * @includeExample extension/version/VersionControl.ts
     * @language zh_CN
     */
    interface IVersionController {
        /**
         * Get the version information data.<br/>
         * Before calling this method requires the application of any resource load, we recommend starting at the application entry class (Main) The first call processing. This method is only responsible for acquiring version information, is not responsible for downloaded resources.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 获取版本信息数据。<br/>
         * 这个方法的调用需要在应用程序进行任何资源加载之前，建议在应用程序的入口类（Main）的开始最先进行调用处理。此方法只负责获取版本信息，不负责资源的下载。
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        addWebVer(addVerList: any): any;
        /**
         * Get all changed files.<br/>
         * The main application in native scene. Changes here include new file, update file (the same file name, but changed files).<br/>
         * @returns All changes in the file list. In the Web end this list is empty.
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 获取所有有变化的文件。<br/>
         * 主要应用在native场景中。这里的变化包括新增文件、更新文件（文件名相同，但更改过的文件）。<br/>
         * @returns 所有有变化的文件列表。在Web端此列表为空。
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        getChangeList(): Array<{
            url: string;
            size: number;
        }>;
        /**
         * Get the actual URL of the resource file.<br/>
         * Because this method needs to be called to control the actual version of the URL have the original resource files were changed, so would like to get the specified resource file the actual URL.<br/>
         * In the development and debugging phase, this method will directly return value passed.
         * @param url Url used in the game
         * @returns Actual loaded url
         * @version Egret 2.4
         * @platform Web,Native
         * @language en_US
         */
        /**
         * 获取资源文件实际的URL地址。<br/>
         * 由于版本控制实际已经对原来的资源文件的URL进行了改变，因此想获取指定资源文件实际的URL时需要调用此方法。<br/>
         * 在开发调试阶段，这个方法会直接返回传入的参数值。
         * @param url 游戏中使用的url
         * @returns 实际加载的url
         * @version Egret 2.4
         * @platform Web,Native
         * @language zh_CN
         */
        getVirtualUrl(url: string): string;
    }
    /**
     * Manage version control class
     * @version Egret 2.4
     * @platform Web,Native
     * @event egret.Event.COMPLETE Version control loading is complete when thrown
     * @event egret.IOErrorEvent.IO_ERROR Version control failed to load when thrown
     * @includeExample extension/version/VersionControl.ts
     * @language en_US
     */
    /**
     * 管理版本控制的类
     * @version Egret 2.4
     * @platform Web,Native
     * @event egret.Event.COMPLETE 版本控制加载完成时抛出
     * @event egret.IOErrorEvent.IO_ERROR 版本控制加载失败时抛出
     * @includeExample extension/version/VersionControl.ts
     * @language zh_CN
     */
    interface VersionController extends IVersionController {
    }
    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    let VersionController: {
        /**
         * Constructor initialization
         * @language en_US
         */
        /**
         * 初始化构造函数
         * @language zh_CN
         */
        new (): VersionController;
    };
}
declare namespace RES {
    let resConf: ResourceConfig;
    function regVerCtrl(val: VersionController): void;
    function getVerCtrl(): VersionController;
    function loadGroup(name: string, priority?: number): void;
    function loadCustomGroup(name: string, gpItms: ResItem[], priority?: number): void;
    function perLoadGroup(name: string): void;
    function perLoadCustomGroup(name: string, gpItms: ResItem[]): void;
    function stopGroup(name: string): void;
    function hasRes(nm: string): boolean;
    function getResConf(nm: string): string[];
    function getRes(nm: string): any;
    function getResAsync(nm: string, compFunc: (data: any, source: string) => void, tar: any): void;
    function getUrlResAsync(url: string, type: string, compFunc: (data: any, source: string) => void, tar: any): void;
    function getUrlRes(url: string, tp: string): any;
    function destroyRes(name: string): void;
    function destroyUrl(url: string, type: string): void;
    function doGC(): void;
    function setMaxLoading(thread: number): void;
    function setMaxRetry(retry: number): void;
    function addEventListener(type: string, listener: (event: egret.Event) => void, selfObject: any, useCapture?: boolean, priority?: number): void;
    function removeEventListener(type: string, listener: (event: egret.Event) => void, selfObject: any, useCapture?: boolean): void;
    function $getVirtualUrl(url: any): any;
    const enum RES_TYPE {
        BIN = "bin",
        TEXT = "txt",
        JSON = "json",
        IMAGE = "image",
        SHEET = "st",
        FONT = "fnt",
        MC = "mc",
        SOUND = "sound",
    }
    function regAnalyzer(type: string, analyzer: AnalyzerBase): void;
    function loadConfig(url: string, resourceRoot: string): void;
}
