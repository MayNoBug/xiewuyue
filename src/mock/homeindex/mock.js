let Mock =require("mockjs")
let data = [
    {id:0,name:"路飞",text:"要成为海贼王的男人",a:"20",b:"5000"},
        {id:1,name:"索隆",text:"要成为天下第一大剑豪",a:"20",b:"5000"},
        {id:2,name:"乌索普",text:"要成为伟大的冒险家",a:"20",b:"5000"},
        {id:3,name:"娜美",text:"要成为最伟大的航海士",a:"20",b:"5000"},
        {id:4,name:"乔巴",text:"是特殊时期的应急粮食",a:"20",b:"5000"},
        {id:5,name:"山治",text:"毕生梦想隐身果实",a:"20",b:"5000"},
        {id:6,name:"弗兰奇",text:"最变态的变态",a:"20",b:"5000"},
        {id:7,name:"罗宾",text:"收齐被掩盖的历史正文",a:"20",b:"5000"},
        {id:8,name:"布鲁克",text:"可以看看你的胖次吗",a:"20",b:"5000"},
        {id:9,name:"甚平",text:"鱼人空手道",a:"20",b:"5000"},

]
Mock.mock("/api/homeindex","get",function(config){
    console.log(config)
    return data
})
Mock.mock(/\/api\/homeindex\/\d/,"delete",function(config){
    console.log(config.url)
    let arr= config.url.split("/")
    let id= arr.pop()
    data.splice(id,1)
    data=data.map(function(item,index){
        return {
            id:index,
            name:item.name,
            text:item.text
        }
    })
    return data
})
Mock.mock(/\/api\/homeindex\/edit\/\d/,"put",function(config){
    console.log(config)
    let arr=config.url.split("/")
    let id = arr.pop()
    let canshu=config.body 
    canshu =JSON.parse(canshu)
    data[id].name=canshu.name
    data[id].text=canshu.text
    return data
})
// 添加
Mock.mock("/api/homeindex","post",function(config){
    let obj = JSON.parse(config.body)
    let name = obj.name
    let text = obj.text
    data.push({id:data.length,name,text})
    return data
})