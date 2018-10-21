var TV = {
    currentChannel : 1,
    nextChannel() {
        this.currentChannel++;
    },
    previousChannel() {
        this.currentChannel--;
    },
    setChannel(number) {
        this.currentChannel = number;
    },
    printChannel() {
        console.log("channel", this.currentChannel);
    }
}
console.log(TV);

var MP3 = {
    playList : [song1, song2, song3],
    playSong : playList[i],
    nextButton() {
        this.playSong[i++];
    },
    prevButton() {
        this.playSong[i--];
    },
    playButton(song) {
        this.playSong[song];
    },
    stopButton() {
        this.playSong[i] = NULL;
    }
}

class TV {
    constructor (name_TV) {
        this.TV = name_TV;
    };
    getTV () {
        return this.TV;
    };
    setTV (name_TV) {
        this.TV = name_TV;
    };
    currentChannel = 1;
    nextChannel() {
        this.currentChannel++;
        return this.currentChannel;
    };
    previousChannel() {
        this.currentChannel--;
        return this.currentChannel;
    };
    setChannel(number) {
        this.currentChannel = number;    
        return this.currentChannel;
    };
}

class MP3 {
    constructor (name_MP3) {
        this.MP3 = name_MP3;
    };
    getMP3 () {
        return this.MP3;
    };
    setMP3 (name_MP3) {
        this.MP3 = name_MP3;
    };
    currentSong = "song.mp3";
    nextSong() {
        this.currentSong++;
        return this.currentSong;
    };
    previousSong() {
        this.currentSong--;
        return this.currentSong;
    };
    playSong(song) {
        this.currentSong = "song";    
        return this.currentSong;
    };
    stopSong() {
        this.currentSong = "";
        return this.currentSong;
    };
}