//--------PENGATURAN------------------------------



//------------------------------------------------

let state = 'awal';


//async function fetchData() {
//        try {
//            const response = await fetch(`https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json`);
//            const data = await response.json();
//            return data;
//        } catch (error) {
//            console.error(error);
//        }
//    }

let kota;

fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json')
  .then(res => res.json())
  .then(data => kota = data)

function getKota(negara) {
    
//    const list = await fetchData();
    const list = kota;
    let hasil;
    
    for (let i=0; i<list.length; i++) {
        if (list[i].country == negara) {
            hasil = list[i].city;
            break;
        }
    }
    
    return hasil;
//    console.log(hasil);
//    return hasil;
}

//function getIbuKota(negara = "Indonesia") {
//    
//    let hasil;
//    
//    fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json')
//    // Handle success
//        .then(response => response.json())  // convert to json
//        .then(json => {
//            if (json.error) {
//                console.log('error');
//            }
//            else {
////                addChat('dia', ambil(json, negara));
//                let yay = ambil(json, negara);
//                console.log(yay);
//            }
//        })
//        .catch(err => console.log('Request Failed', err)); // Catch errors
//    
//    return hasil;
//}

function resetChatValue() {
    document.getElementById("chat-input").value = "";
}

function getChatValue() {
    return document.getElementById("chat-input").value;
}

function getRandomNumber(num) {
    return Math.floor((Math.random() * num));
}



function getResponse(chatText) {
    const resp = {
        "awal" : {
            "keyword": [ 
//            "bababoy"
                getKota("Indonesia")
            ],
            "kelompok": [
            `
            Kelompok 1 <br /><br />
            Ashril Argadeda Mahendra (190535646066)<br />
            Ichlalsul Bulqiah (190535646047)<br />
            Mawaddah Awaliyah (190535646089)<br />
            `
            ],
            "judul": [
                "Implementasi finite state automata pada pembuatan chatbot"
            ],
            "test": [
                "ini adalah contoh balasan pertama (balasan pada key ini acak)",
                "ini adalah contoh balasan kedua (balasan pada key ini acak)",
                "ini adalah contoh balasan ketiga (balasan pada key ini acak)"
            ],
            "halo": [
                "hai",
                "halo juga",
                "yahoo"
            ],
            "else": [
                "silahkan ketik 'keyword' kemudian tekan enter"         
            ]
        },
        
        "cari_negara" : {
            "petunuk" : [
                
            ],
            
            "selesai" : [
                
            ],
            
            "else" : [
                getKota(chatText)
            ]
        }
        
    }
    
//    console.log(resp[state][chatText][0]);
    console.log(resp["cari_negara"]["else"][0]);
    addChat("dia", resp["cari_negara"]["else"][0]);
    
    
//    chatText = chatText.toLowerCase();
//    if (chatText in resp) {
//        const rand = getRandomNumber(resp[chatText].length);
//        console.log(rand);
//        return resp[chatText][rand];
//    }
//    else {
//        const rand = getRandomNumber(resp["else"].length);
//        console.log(rand);
//        return resp["else"][rand];
//    }
}

function addChat(sender, chatText) {
    let chatLog = document.getElementById("chat-log");
    chatLog.innerHTML += `
    <div class="chat ${sender}">
        <div class="chat-bubble">
            ${chatText}
        </div>
    </div>`
}

function updateScroll() {
    let element = document.getElementById("chat-area");
    element.scrollTop = element.scrollHeight;
}

const sendButton = document.getElementById("send-button");
sendButton.addEventListener("click", function(event){
    if (!(getChatValue() == false)) {
        addChat("aku", getChatValue());
         addChat("dia", getResponse(getChatValue()));
        
        resetChatValue();
        updateScroll();
        
    }
});

const input = document.getElementById("chat-input");
input.addEventListener("keyup", function(event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        document.getElementById("send-button").click();
    }
})

console.log("Hello, happy world!")