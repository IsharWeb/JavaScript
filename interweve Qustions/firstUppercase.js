
let str = 'write a javaScript program the frist letter convert to uperCase.';

let a = str.split(" ");

function someFu(ch) {

    let chart = ch.split(" ").map((a) => {

        return a.charAt(0).toUpperCase() + a.substring(1)

    })

    console.log(chart.join(' '));

}

someFu(str)





