//--------PENGATURAN------------------------------



//------------------------------------------------


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
        "keyword": [
            "keyword yang tersedia saat ini:<br>- kelompok<br>- judul<br>- test<br>- halo"
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
    }
    
    chatText = chatText.toLowerCase();
    if (chatText in resp) {
        const rand = getRandomNumber(resp[chatText].length);
        console.log(rand);
        return resp[chatText][rand];
    }
    else {
        const rand = getRandomNumber(resp["else"].length);
        console.log(rand);
        return resp["else"][rand];
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