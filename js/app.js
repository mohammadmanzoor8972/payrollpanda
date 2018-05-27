var ride_module = (function(){

    var form = document.getElementById("user-registration");

    var bikers = [];

   function init(){
    bikers = [];     
    addEventListner();

    }

    function addEventListner(){
        form.onsubmit = saveData;
    }

    function saveData(){
        event.preventDefault();
        var elements = form.elements;

        var obj ={};
        for(var i = 0 ; i < elements.length ; i++){
                var item = elements.item(i);
                if(item.type!=="submit"){
                    obj[item.name] = item.value;
               
                }
        }
        obj["createdOn"] = new Date();
        bikers.push(obj);
        loadData();
       form.reset()
       
    }

    function trash(index){
        debugger;
        bikers.splice(index,1);
        loadData();
    }

    function loadData(){   
        window.trash = trash;
        var tableRef = document.getElementById('bikerList').getElementsByTagName('tbody')[0];
        var str = "";
        for(var index in bikers){
            str += "<tr>"
            str +="<td>"+bikers[index]["fullname"] + "</td>"
            str +="<td>"+bikers[index]["email"] + "</td>"
            str +="<td>"+bikers[index]["city"] + "</td>"
            str +="<td>"+bikers[index]["radio"] + "</td>"
            str +="<td>"+bikers[index]["chkbox"] + "</td>"
            str +="<td>"+bikers[index]["createdOn"] + "</td>"
            str +='<td><i class="fa fa-trash-o" aria-hidden="true" onclick="trash('+index+')"></i></td></tr>'
        }
        console.log(str);
        tableRef.innerHTML = str;
    }

   

    return {
        initilize : init
    }
    
})().initilize();

