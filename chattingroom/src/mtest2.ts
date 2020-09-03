class mtest2 extends eui.Component implements  eui.UIComponent {
	public constructor() {
		super();
		console.log('mtest2 is called');
	}

	protected partAdded(partName:string,instance:any):void
	{
		super.partAdded(partName,instance);
	}


	protected childrenCreated():void
	{
		super.childrenCreated();
	}
	
}