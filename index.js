let path = ["./sounds/tom-1.mp3", "./sounds/tom-2.mp3", "./sounds/tom-3.mp3", "./sounds/tom-4.mp3", "./sounds/snare.mp3", "./sounds/crash.mp3", "./sounds/kick-bass.mp3"];

for (let i=0;i<document.querySelectorAll(".drum").length;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click",
    function() {
        let audio = new Audio(path[i]);
        audio.play();
        buttonAnimation("." + this.innerHTML);
    }
);
}


document.addEventListener("keydown", 
    function(event) {
        if (event.key === "w") {
            let audio = new Audio(path[0]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".w").classList.add("pressed");
        }
        else if (event.key === "a") {
            let audio = new Audio(path[1]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".a").classList.add("pressed");
        }
        else if (event.key === "s") {
            let audio = new Audio(path[2]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".s").classList.add("pressed");
        }
        else if (event.key === "d") {
            let audio = new Audio(path[3]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".d").classList.add("pressed");
        }
        else if (event.key === "j") {
            let audio = new Audio(path[4]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".j").classList.add("pressed");
        }
        else if (event.key === "k") {
            let audio = new Audio(path[5]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".k").classList.add("pressed");
        }
        else if (event.key === "l") {
            let audio = new Audio(path[6]);
            audio.play();
            buttonAnimation("." + event.key);
            //document.querySelector(".l").classList.add("pressed");
        }
    }
)

function buttonAnimation(key) {
    document.querySelector(key).classList.add("pressed");
    setTimeout( function() { document.querySelector(key).classList.remove("pressed");}, 100);
}
