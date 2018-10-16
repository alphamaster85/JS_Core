var TV = {
    currentChannel = 1

    nextChannel() {
        return this.currentChannel + 1;
    }

    previousChannel() {
        return this.currentChannel - 1;
    }
    setChannel(number) {
        return this.currentChannel(number);
    }
}