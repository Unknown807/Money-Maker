
(function() {
	var soundsToLoad = 0;
	var soundsLoaded = 0;
	var soundReadyCallbacks = [];
	
	var currentBGSound;

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
		currentBGSound = createjs.Sound.play(sound_id, {"loop":-1});
		currentBGSound.volume = 0.5;
	}
	
	function playSound(sound_id) {
	}

    window.sounds = { 
        load: load,
        onReady: onReady,
        isReady: isReady,
		playBGSound: playBGSound,
		playSound: playSound
    };
})();