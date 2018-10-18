var TV = {
    currentChannel : 1,
    nextChannel() {
        this.currentChannel++;
        return this.currentChannel;
    },
    previousChannel() {
        this.currentChannel--;
        return this.currentChannel;
    },
    setChannel(number) {
        this.currentChannel = number;    
        return this.currentChannel;
    }
}

var MP3 = {
    currentSong : "song.mp3",
    nextSong() {
        this.currentSong++;
        return this.currentSong;
    },
    previousSong() {
        this.currentSong--;
        return this.currentSong;
    },
    playSong(song) {
        this.currentSong = "song";    
        return this.currentSong;
    },
    stopSong() {
        this.currentSong = "";
        return this.currentSong;
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