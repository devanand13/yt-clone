export function VideoCard(props : any){
    return <div className="inline-block  p-2">
        <img src={props.videoImage} alt="" className="rounded-xl w-full"/>
        <div className="grid grid-cols-12 pl-2 pt-2 items-start">
            <div className="col-span-1 w-10 h-10"> 
                <img className="rounded-full w-10 h-10"src={props.channelImage} alt="" />
            </div>
            <div className="col-span-11 pl-4 lg:pl-7">
                {props.title}
                <div className="col-span-11  text-gray-400 text-base">
                    {props.channel}
                </div>      
                <div className="col-span-11  text-gray-400 text-base">
                    {props.views} views |  {props.updloadtime}
                </div>        
            </div>     
                
        </div>
    </div>
}