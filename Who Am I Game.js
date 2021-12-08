let animals = ['Eagle', 'Parrot', 'Shark', 'Dolphin', 'Lion', 'Cat'];
let ani = '';

const areWild = (first ,sec) => { ani = confirm("Are you wild?")? first : sec };

const go = () => confirm("Do you Fly")? areWild(animals[0], animals[1]): 
                    confirm("Do you live under sea?")? areWild(animals[2], animals[3]): areWild(animals[4], animals[5]);
go();

document.getElementById("ani_name").innerText = ani;

switch (ani) {
    case animals[0]:
        document.getElementById(animals[0]).style.display = "block";
        break;
    case animals[1]:
        document.getElementById(animals[1]).style.display = "block";
        break;
    case animals[2]:
        document.getElementById(animals[2]).style.display = "block";
        break;
    case animals[3]:
        document.getElementById(animals[3]).style.display = "block";
        break;
    case animals[4]:
        document.getElementById(animals[4]).style.display = "block";
        break;
    case animals[5]:
        document.getElementById(animals[5]).style.display = "block";
        break;
    default:
        break;
}