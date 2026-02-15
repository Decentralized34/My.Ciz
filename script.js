let noCount = 0;

function ansNo() {
    noCount++;
    const yesBtn = document.getElementById('yesBtn');
    const noBtn = document.getElementById('noBtn');
    const questionText = document.getElementById('questionText');
    const videoElement = document.getElementById('videoDisplay');

    // 1. Yes Button Growing Logic
    let fontSize = 1.1 + (noCount * 1.0); 
    yesBtn.style.fontSize = fontSize + "rem";
    yesBtn.style.padding = (12 + noCount * 10) + "px " + (28 + noCount * 20) + "px";

    // 2. No Button Shrinking Logic
    let noSize = 1.1 - (noCount * 0.15);
    noBtn.style.fontSize = Math.max(noSize, 0.4) + "rem";
    noBtn.style.opacity = Math.max(1 - (noCount * 0.2), 0.2);

    // 3. Text Change Logic
    if (noCount == 1) questionText.innerText = "တကယ်ကြီးလား? 🥺";
    if (noCount == 2) questionText.innerText = "အကို့ကို မချစ်တော့ဘူးလားဟင်? 😭";
    if (noCount >= 3) {
        questionText.innerText = "Yes ပဲ နှိပ်တော့နော်... ❤️";
        noBtn.style.display = "none"; // Hide No button after 3 clicks
    }

    // Refresh video play
    videoElement.currentTime = 0;
    videoElement.play();
}

function ansYes() {
    // Switch Pages
    document.getElementById('page1').style.display = 'none';
    document.getElementById('page2').style.display = 'block';
    
    // Play Music
    const music = document.getElementById('bgMusic');
    music.play().catch(e => console.log("Audio play failed: ", e));

    // Confetti Effect
    confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 },
        colors: ['#ff4d6d', '#ffafbd', '#ffffff']
    });
}
