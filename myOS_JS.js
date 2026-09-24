function clickChrome()
    {
        window.open("https://www.google.com");
    }
function clickStart()
    {
        document.getElementById("start").style.display="flex";
    }
let data="";
        function insert(value)
        {
        data=data+value;
        document.getElementById("display").value=data;
        }
        function clearDisplay()
        {
        data="";
        document.getElementById("display").value="";
        }
        function calculate()
        {
        let result=eval(data);
        document.getElementById("display").value=result;
        data=result;
        }
function clickCal()
    {
        document.getElementById("calc").style.display="inline-block";
    }
function saveNote()
    {
        let c=document.getElementById("noteName").value;
        alert("Your Note " + c + "is saved");
    }
function clickNote()
    {
        document.getElementById("note").style.display="block";
    }
function updateClock()
    {
        let now=new Date();
        let time=now.toLocaleTimeString([],{
            hour:'2-digit',
            minute:'2-digit'
        });
        let date=now.toLocaleDateString();
        document.getElementById("time").innerHTML=time;
        document.getElementById("date").innerHTML=date;
        document.getElementById("time2").innerHTML=time;
        document.getElementById("date2").innerHTML=date;
    }
updateClock();
setInterval(updateClock,1000);

function DateTime()
    {
        document.getElementById("clockTime").style.display="block";
    }
function clickPro(){
    document.getElementById("profile").style.display="block";
}
function main()
    {
        document.getElementById("clockTime").style.display="none";
        document.getElementById("note").style.display="none";
        document.getElementById("calc").style.display="none";
        document.getElementById("start").style.display="none";
        document.getElementById("profile").style.display="none";
        document.getElementById("set").style.display="none";
    }

function toggle()
    {
        document.body.classList.toggle("dark");
        if(document.body.classList.contains("dark"))
                {
                    document.getElementById("togg").innerText= " Light Mode";
                }
        else {
                    document.getElementById("togg").innerText= " Dark Mode"
             }
    }
function Setting()
    {
        document.getElementById("set").style.display="block";
    }
function clickLink()
    {
        window.open("https://www.linkedin.com/in/gurpreet-kaushal-a90925366","_blank");
    }
function clickWall()
    {
        document.getElementById("div_1").style.backgroundImage='url("win.jpg")';
    }