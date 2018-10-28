var TV = {
    currentChannel : 1,
    nextChannel() {
        if (this.currentChannel == 32) {
			this.currentChannel = 1;
		} else {
            this.currentChannel++;
        }
    },
    previousChannel() {
        if (this.currentChannel == 1) {
			this.currentChannel = 32;
        } else {
            this.currentChannel--;
        }
    },
    setChannel(number) {
        if (number >= 1 && number <= 32) {
            this.currentChannel = number;
        } else {
            console.log("Number of channel is not correct");
        }
    },
    printChannel() {
        console.log("channel", this.currentChannel);
    }
}
console.log(TV);

var MP3 = {
    playList : [song1, song2, song3],
    i: 0,
    playSong : playList[i],
    nextButton() {
        if (this.playSong == this.playList[this.playList.length-1]) {
			this.playSong = playSong[0];
		} else {
            this.playSong[++i];
        }
    },
    prevButton() {
        if (this.playSong == this.playList[0]) {
			this.playSong = this.playList[this.playList.length-1];
		} else {
            this.playSong[--i];
        }
    },
    playButton(songNumber) {
        if (songNumber >= 0 && songNumber <= this.playList.length-1) {
            this.playSong = this.playList[songNumber];
        } else {
            console.log("Number of song is not correct");
        }
    },
    stopButton() {
        this.playSong = NULL;
    }
}

class TV {
    // constructor (name_TV) {
    //     this.TV = name_TV;
    // };
    // getTV () {
    //     return this.TV;
    // };
    // setTV (name_TV) {
    //     this.TV = name_TV;
    // };
    // currentChannel = 1;
    // nextChannel() {
    //     this.currentChannel++;
    //     return this.currentChannel;
    // };
    // previousChannel() {
    //     this.currentChannel--;
    //     return this.currentChannel;
    // };
    // setChannel(number) {
    //     this.currentChannel = number;    
    //     return this.currentChannel;
    // };
}

class MP3 {
    // constructor (name_MP3) {
    //     this.MP3 = name_MP3;
    // };
    // getMP3 () {
    //     return this.MP3;
    // };
    // setMP3 (name_MP3) {
    //     this.MP3 = name_MP3;
    // };
    // currentSong = "song.mp3";
    // nextSong() {
    //     this.currentSong++;
    //     return this.currentSong;
    // };
    // previousSong() {
    //     this.currentSong--;
    //     return this.currentSong;
    // };
    // playSong(song) {
    //     this.currentSong = "song";    
    //     return this.currentSong;
    // };
    // stopSong() {
    //     this.currentSong = "";
    //     return this.currentSong;
    // };
}