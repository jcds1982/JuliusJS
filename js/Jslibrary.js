/**
 * Created by JulioDavila on 5/8/16.
 */


var car = {
    name: "",
    model: "",
    retName: function () {
        return this.name;
    },
    setName: function (pName) {
        this.name = pName;
    }
}


function CarModel()
{
    var a = prompt('Please enter your car Name');

    if(a!='')
    {
        car.setName(a);
        //var b = car.getName();

        alert('You entered ' + car.retName());
    }

    //function WriteToFile(passForm) {
    //
    //    set fso = CreateObject("Scripting.FileSystemObject");
    //    set s = fso.CreateTextFile("C:\test.txt", True);
    //    s.writeline("HI");
    //    s.writeline("Bye");
    //    s.writeline("-----------------------------");
    //    s.Close();
    //}
}