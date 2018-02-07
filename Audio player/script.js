var speakingGently, weSink, gotMe; //songs
var sliderVolume;
var playButton, pauseButton, nextButton, previousButton; //buttons
var analyzer, song;

function preload() {
    soundFormats('mp3', 'm4a');
    speakingGently = loadSound('02 Speaking Gently.m4a');
    weSink = loadSound('02 We Sink.mp3');
    gotMe = loadSound('15 You Got Me.m4a');
    
    var arrSongs = [speakingGently, weSink, gotMe]; //keep an index of where you are
    
}

function setup() {
    
    sliderVolume = createSlider(0, 1, 0.5, 0.1);
    sliderVolume.position(windowWidth/5, 10);
    sliderVolume.style('width', '400px');

    analyzer = new p5.Amplitude();
}

function draw() {
    
    if (selector.value() == 'We Sink - CHVRCHES') {
        song = weSink;
        analyzer.setInput(song);
    } else if (selector.value() == 'Speaking Gently - BADBADNOTGOOD') {
        song = speakingGently;
        analyzer.setInput(song);
    } else if (selector.value() == 'You Got Me - The Roots ft. Erykah Badu') {
        song = gotMe;
        analyzer.setInput(song);
    };
    
    background(255);
    var rms = analyzer.getLevel();
    fill('yellow');
    stroke(1);
    ellipse(width/2, 400, 10+rms*97, 10+rms*97);
    
    var volume = sliderVolume.value();
    weSink.setVolume(sliderVolume.value());
    
    if (playButton == "true"){
        song.play();
    } else if (playButton == "false" && song.isPlaying() == "true"){
        song.stop();
    } else if (pauseButton == "true" && song.isPlaying() == "true"){
        song.pause();
    }
    
}