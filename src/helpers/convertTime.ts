


export const converTime =(time:number)=>{
    let ret:number[] | string[]=[0,0];

    if(time){
        ret=[
            ~~(time % 3600 / 60),
            ~~(time % 60)  
        ];
    }

    ret = ret.map(re => `${re}`.padStart(2, '0'));

    return ret.join(':');
}