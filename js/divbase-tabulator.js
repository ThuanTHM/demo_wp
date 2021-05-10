//Table to move rows from
var tables = [];
//sample data to be used in all tabulators
var sampledata = {
  tblGroup1: [
    {id:1, task:"Luộc Hấp", progress:12, location:"NTA", gender:"male", rating:1, col:"red", dob:"14/04/1984", tips:1, lucky_no:5, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:2, task:"Chả chìa", progress:1, location:"Hạ Lũng", gender:"female", rating:2, col:"blue", dob:"14/05/1982", tips:true, lucky_no:10, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:3, task:"Thui rơm", progress:42, location:"Hà Nam", gender:"female", rating:0, col:"green", dob:"22/05/1982", tips:"true", lucky_no:12, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:4, task:"Nấu nhựa mận", progress:100, location:"Nghệ An", gender:"male", rating:1, col:"orange", dob:"01/08/1980", tips:false, lucky_no:18, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:5, task:"Gan nướng cuốn mỡ chài", progress:16, location:"Nam Định", gender:"female", rating:5, col:"yellow", dob:"31/01/1999", tips:false, lucky_no:33, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:6, task:"Xáo măng", progress:38, location:"Hà Bắc", gender:"", rating:4, col:"red", dob:"12/05/1966", tips:1, lucky_no:2, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:7, task:"Lòng dồi", progress:23, location:"Hà Đông", gender:"male", rating:3, col:"green", dob:"14/05/1985", tips:true, lucky_no:63, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:8, task:"Riềng mẻ lá mơ mắm tôm sả ớt bánh đa", progress:60, location:"Hà Tây", gender:"female", rating:0, col:"red", dob:"22/05/1982", tips:"true", lucky_no:72, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:9, task:"Bàu đá", progress:42, location:"Bình Định", gender:"female", rating:1, col:"maroon", dob:"11/11/1970", tips:false, lucky_no:44, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "}
  ],
  tblGroup2: [
    {id:1, task:"Luộc Hấp", progress:12, location:"NTA", gender:"male", rating:1, col:"red", dob:"14/04/1984", tips:1, lucky_no:5, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:2, task:"Chả chìa", progress:1, location:"Hạ Lũng", gender:"female", rating:2, col:"blue", dob:"14/05/1982", tips:true, lucky_no:10, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:3, task:"Thui rơm", progress:42, location:"Hà Nam", gender:"female", rating:0, col:"green", dob:"22/05/1982", tips:"true", lucky_no:12, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:4, task:"Nấu nhựa mận", progress:100, location:"Nghệ An", gender:"male", rating:1, col:"orange", dob:"01/08/1980", tips:false, lucky_no:18, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:5, task:"Gan nướng cuốn mỡ chài", progress:16, location:"Nam Định", gender:"female", rating:5, col:"yellow", dob:"31/01/1999", tips:false, lucky_no:33, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:6, task:"Xáo măng", progress:38, location:"Hà Bắc", gender:"", rating:4, col:"red", dob:"12/05/1966", tips:1, lucky_no:2, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:7, task:"Lòng dồi", progress:23, location:"Hà Đông", gender:"male", rating:3, col:"green", dob:"14/05/1985", tips:true, lucky_no:63, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:8, task:"Riềng mẻ lá mơ mắm tôm sả ớt bánh đa", progress:60, location:"Hà Tây", gender:"female", rating:0, col:"red", dob:"22/05/1982", tips:"true", lucky_no:72, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:9, task:"Bàu đá", progress:42, location:"Bình Định", gender:"female", rating:1, col:"maroon", dob:"11/11/1970", tips:false, lucky_no:44, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "}
  ],
  tblGroup3: [
    {id:1, task:"Luộc Hấp", progress:12, location:"NTA", gender:"male", rating:1, col:"red", dob:"14/04/1984", tips:1, lucky_no:5, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:2, task:"Chả chìa", progress:1, location:"Hạ Lũng", gender:"female", rating:2, col:"blue", dob:"14/05/1982", tips:true, lucky_no:10, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:3, task:"Thui rơm", progress:42, location:"Hà Nam", gender:"female", rating:0, col:"green", dob:"22/05/1982", tips:"true", lucky_no:12, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:4, task:"Nấu nhựa mận", progress:100, location:"Nghệ An", gender:"male", rating:1, col:"orange", dob:"01/08/1980", tips:false, lucky_no:18, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:5, task:"Gan nướng cuốn mỡ chài", progress:16, location:"Nam Định", gender:"female", rating:5, col:"yellow", dob:"31/01/1999", tips:false, lucky_no:33, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:6, task:"Xáo măng", progress:38, location:"Hà Bắc", gender:"", rating:4, col:"red", dob:"12/05/1966", tips:1, lucky_no:2, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:7, task:"Lòng dồi", progress:23, location:"Hà Đông", gender:"male", rating:3, col:"green", dob:"14/05/1985", tips:true, lucky_no:63, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:8, task:"Riềng mẻ lá mơ mắm tôm sả ớt bánh đa", progress:60, location:"Hà Tây", gender:"female", rating:0, col:"red", dob:"22/05/1982", tips:"true", lucky_no:72, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "},
    {id:9, task:"Bàu đá", progress:42, location:"Bình Định", gender:"female", rating:1, col:"maroon", dob:"11/11/1970", tips:false, lucky_no:44, lorem:"Lorem ipsum dolor sit amet, elit consectetur adipisicing "}
  ]
};

$(document).ready(function () {
  $(".wb-id-1-tbl").each(function() {
    tables[tables.length] = new Tabulator(this, {
        height:250,
        layout:"fitColumns",
        movableRows:true,
        // movableRowsConnectedTables:'.wb-id-1-tbl:not([id="' + $(this).attr("name") + '"])',
        movableRowsConnectedTables:'.wb-id-1-tbl',
        movableRowsReceiver: "insert",
        movableRowsSender: "delete",
        movableColumns: true,
        placeholder:"All Rows Moved",
        data: sampledata[this.id],
        columns:[
          {rowHandle:true, formatter:"handle", headerSort:false, frozen:true, width:30, minWidth:30},
          {title:"Task", field:"task", width:150, editor:"input"},
          {title:"Location", field:"person", width:130, editor:"autocomplete", editorParams:{allowEmpty:true, showListOnEmpty:true, values:true}},
          {title:"Progress", field:"progress", sorter:"number", hozAlign:"left", formatter:"progress", width:140, editor:true},
          {title:"Gender", field:"gender", editor:"select", editorParams:{values:{"male":"Male", "female":"Female", "unknown":"Unknown"}}},
          {title:"Rating", field:"rating",  formatter:"star", hozAlign:"center", width:100, editor:true},
          {title:"Date Of Birth", field:"dob", hozAlign:"center", sorter:"date", width:140, editor:dateEditor},
          {title:"Tips", field:"tips", hozAlign:"center", editor:true, formatter:"tickCross"},
          {rowHandle:false, formatter:"buttonCross", headerSort:false, frozen:true, width:30, minWidth:30},
        ]
    });
  })
});