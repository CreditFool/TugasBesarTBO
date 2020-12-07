//--------PENGATURAN------------------------------



//------------------------------------------------


let kota;

fetch('https://raw.githubusercontent.com/samayo/country-json/master/src/country-by-capital-city.json')
  .then(res => res.json())
  .then(data => kota = data)

function getKota(negara) {
    
//    const list = await fetchData();
    const list = kota;
    let hasil;
    
    let i;
    for (i=0; i<list.length; i++) {
        if (list[i].country.toLowerCase() == negara.toLowerCase()) {
            hasil = list[i].city;
            break;
        }
    }
    if (i>=list.length) {
        hasil = "Hasil tidak ditemukan";
    }
    
    console.log("getKota jalan");
    console.log(negara);
    console.log(hasil);
    return hasil;

}

function resetChatValue() {
    document.getElementById("chat-input").value = "";
}

function getChatValue() {
    return document.getElementById("chat-input").value;
}

function getRandomNumber(num) {
    return Math.floor((Math.random() * num));
}

var state = 'awal';
function ubahState(state_baru, kata="baik") {
//    state = state_baru;
    try {
        return kata;    
    } finally {
        state = state_baru;
    }
    
}

function test(arguent) {
    console.log(arguent);
    return arguent;
}

function jalankanFungsi(syarat, func, args = []) {
    if (syarat) {
        console.log(func.apply(this, args));
        return func.apply(this, args);
    }
}

function getResponse(chatText) {
    const resp = {
        "awal" : {
            "keyword": [ 
                `
                state: awal <br>
                - keyword <br>
                - kelompok <br>
                - judul <br>
                - test <br>
                - halo <br>
                - cari ibu kota <br>
                `
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
            
            "cari ibu kota": [
//                "cari negara"
                jalankanFungsi(((state == "awal") && (chatText == "cari ibu kota")), ubahState, ["cari negara", "state menjadi cari negara"])
            ],
            
            "else": [
                "silahkan ketik 'keyword' kemudian tekan enter"         
            ]
        },
        
        "cari negara" : {
            "keyword" : [
                 `
                state: cari negara <br>
                - keyword <br>
                - kembali <br>
                - nama negara dalam bahasa inggris <br>
                `
            ],
            
            "kembali" : [
//                "selesai"
                jalankanFungsi(((state == "cari negara") && (chatText == "kembali")), ubahState, ["awal", "state menjadi awal"])
            ],
            
            "else" : [
                jalankanFungsi((state == "cari negara"), getKota, [chatText])
            ]
        }
        
    }
    
//    console.log(resp[state][chatText][0]);
//    console.log(resp["cari_negara"]["else"][0]);
//    addChat("dia", resp["cari_negara"]["else"][0]);
    
    
    chatText = chatText.toLowerCase();
    console.log(chatText in resp[state]);
    if (chatText in resp[state]) {
        const rand = getRandomNumber(resp[state][chatText].length);
        return resp[state][chatText][rand];
    }
    else {
        const rand = getRandomNumber(resp[state]["else"].length);
        console.log("else dapat");
        return resp[state]["else"][rand];
    }
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