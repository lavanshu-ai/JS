let thisobj ={
    "name": "lv",
    "age": 21,
    "city": "New York",
     biodata:function  (){
    console.log(`${this.name} leaves in ${this.city}`);
    console.log( this)
    }
}
thisobj.biodata()
thisobj.name="shiva"
thisobj.biodata()
//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
    console.log( this) // gives {} in browser gives window //
