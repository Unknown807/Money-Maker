
(function() {
	var soundsToLoad = 0;
	var soundsLoaded = 0;
	var soundReadyCallbacks = [];
	
	var currentBGSound;
	var currentBGVolume = 1;
	
	var currentSound;
	var currentSoundID;
	var currentSoundVolume = 1;
	
	// For registering all provided sounds

    function load(soundsArr) {
		soundsToLoad = soundsArr.length;
		createjs.Sound.on("fileload", loadComplete);
		createjs.Sound.registerSounds(soundsArr);
    }

    function loadComplete() {
		soundsLoaded++;
		if(isReady()) {
			soundReadyCallbacks.forEach((func) => { func(); });
		}
	}

    function isReady() {
        return (soundsToLoad == soundsLoaded);
    }

    function onReady(func) {
        soundReadyCallbacks.push(func);
    }
	
	// For playing sounds
	
	function playBGSound(sound_id) {
		if (currentBGSound != null) {
			currentBGSound.stop();
		}
		currentBGSound = createjs.Sound.play(sound_id, {loop:-1});
		currentBGSound.volume = currentBGVolume;
	}
	
	function setBGSoundVolume(volume) {
		currentBGSound.volume = volume;
		currentBGVolume = volume;
	}
	
	function setSoundVolume(volume) {
		currentSound.volume = volume;
		currentSoundVolume = volume;
	}
	
	function playSound(sound_id) {
		if (sound_id == currentSoundID) {
			currentSound.play();
		} else {
			currentSoundID = sound_id;
			currentSound = createjs.Sound.play(sound_id);
		}
		
		currentSound.volume = currentSoundVolume
	}

    window.sounds = { 
        load: load,
        onReady: onReady,
        isReady: isReady,
		playBGSound: playBGSound,
		playSound: playSound,
		setBGSoundVolume: setBGSoundVolume,
		setSoundVolume: setSoundVolume
    };
})();