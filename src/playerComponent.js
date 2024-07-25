import React, { useEffect, useRef, useState } from "react";
import ReactHlsPlayer from "react-hls-player";

function PlayerComponent() {
  const playerRef = useRef();
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [controls, setControls] = useState(false);
  const [ccEnabled, setCcEnabled] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const hlsConfig = {
    autoStartLoad: true,
    startPosition: -1,
    debug: false,
    capLevelOnFPSDrop: false,
    capLevelToPlayerSize: false,
    defaultAudioCodec: undefined,
    initialLiveManifestSize: 1,
    maxBufferLength: 30,
    maxMaxBufferLength: 600,
    backBufferLength: Infinity,
    frontBufferFlushThreshold: Infinity,
    maxBufferSize: 60 * 1000 * 1000,
    maxBufferHole: 0.5,
    highBufferWatchdogPeriod: 2,
    nudgeOffset: 0.1,
    nudgeMaxRetry: 3,
    maxFragLookUpTolerance: 0.25,
    liveSyncDurationCount: 3,
    liveSyncOnStallIncrease: 1,
    liveMaxLatencyDurationCount: Infinity,
    liveDurationInfinity: false,
    preferManagedMediaSource: false,
    enableWorker: true,
    enableSoftwareAES: true,
    fragLoadPolicy: {
      default: {
        maxTimeToFirstByteMs: 9000,
        maxLoadTimeMs: 100000,
        timeoutRetry: {
          maxNumRetry: 2,
          retryDelayMs: 0,
          maxRetryDelayMs: 0,
        },
        errorRetry: {
          maxNumRetry: 5,
          retryDelayMs: 3000,
          maxRetryDelayMs: 15000,
          backoff: "linear",
        },
      },
    },
    startLevel: undefined,
    audioPreference: {
      characteristics: "public.accessibility.describes-video",
    },
    subtitlePreference: {
      lang: "en-US",
    },
    startFragPrefetch: false,
    testBandwidth: true,
    progressive: false,
    lowLatencyMode: true,
    fpsDroppedMonitoringPeriod: 5000,
    fpsDroppedMonitoringThreshold: 0.2,
    appendErrorMaxRetry: 3,
    //loader: customLoader,
    // fLoader: customFragmentLoader,
    // pLoader: customPlaylistLoader,
    // xhrSetup: XMLHttpRequestSetupCallback,
    // fetchSetup: FetchSetupCallback,
    // abrController: AbrController,
    // bufferController: BufferController,
    // capLevelController: CapLevelController,
    // fpsController: FPSController,
    // timelineController: TimelineController,
    enableDateRangeMetadataCues: true,
    enableEmsgMetadataCues: true,
    enableID3MetadataCues: true,
    enableWebVTT: true,
    enableIMSC1: true,
    enableCEA708Captions: true,
    stretchShortVideoTrack: false,
    maxAudioFramesDrift: 1,
    forceKeyFrameOnDiscontinuity: true,
    abrEwmaFastLive: 3.0,
    abrEwmaSlowLive: 9.0,
    abrEwmaFastVoD: 3.0,
    abrEwmaSlowVoD: 9.0,
    abrEwmaDefaultEstimate: 500000,
    abrEwmaDefaultEstimateMax: 5000000,
    abrBandWidthFactor: 0.95,
    abrBandWidthUpFactor: 0.7,
    abrMaxWithRealBitrate: false,
    maxStarvationDelay: 4,
    maxLoadingDelay: 4,
    minAutoBitrate: 0,
    emeEnabled: false,
    licenseXhrSetup: undefined,
    drmSystems: {},
    drmSystemOptions: {},
    // requestMediaKeySystemAccessFunc: requestMediaKeySystemAccess,
    // cmcd: {
    //   sessionId: uuid(),
    //   contentId: hash(contentURL),
    //   useHeaders: false,
    // },
  };
  useEffect(() => {
    // debugger;
    document.getElementById("playerLoader").style.display = "block";
    document.getElementById("playerDiv").style.display = "block";
    playVideo();
  });
  const playVideo = () => {
    if (playerRef.current) {
      playerRef.current.play();
      // setIsPlaying(true);
    }
  };
  const handlekeydown = (e) => {

    document.getElementById("playerDiv").style.display = "none";
    window.removeEventListener("keydown", handlekeydown);

    if (playerRef.current) {
      playerRef.current.pause();
      playerRef.current.src = "";
      if (e.key === "Backspace") {

      }
    }
  };
  window.addEventListener("keydown", handlekeydown);
  useEffect(() => {
    const player = playerRef.current;
    const handleCanPlay = () => {
      document.getElementById("playerLoader").style.display = "none";
    };
    if (player) {
      player.addEventListener("playing", handleCanPlay);
      //player.addEventListener("onplay", handleCanPlay);
    }
  });
  // useEffect(() => {
  //   const player = playerRef.current;

  //   const handleCanPlay = () => {
  //     playVideo();
  //   };

  //   const handleBeforeUnload = () => {
  //     if (playerRef.current) {
  //       playerRef.current.pause();
  //       playerRef.current.src = ""; // Remove the source to stop streaming
  //     }
  //   };

  //   if (player) {
  //     player.addEventListener("canplay", handleCanPlay);
  //   }

  //   window.addEventListener("beforeunload", handleBeforeUnload);

  //   return () => {
  //     if (player) {
  //       player.removeEventListener("canplay", handleCanPlay);
  //     }
  //     window.removeEventListener("beforeunload", handleBeforeUnload);
  //     if (playerRef.current) {
  //       playerRef.current.pause();
  //       playerRef.current.src = ""; // Remove the source to stop streaming
  //     }
  //   };
  // }, []);

  // useEffect(() => {
  //   const player = playerRef.current;
  //   if (player) {
  //     const updateTime = () => {
  //       setCurrentTime(player.currentTime);
  //     };

  //     player.addEventListener("timeupdate", updateTime);

  //     return () => {
  //       player.removeEventListener("timeupdate", updateTime);
  //     };
  //   }
  // }, [playerRef.current]);

  // useEffect(() => {
  //   const player = playerRef.current;
  //   if (player) {
  //     const handleLoadedMetadata = () => {
  //       setDuration(player.duration);
  //     };
  //     player.addEventListener("loadedmetadata", handleLoadedMetadata);
  //     return () => {
  //       player.removeEventListener("loadedmetadata", handleLoadedMetadata);
  //     };
  //   }
  // }, [playerRef.current]);

  // const pauseVideo = () => {
  //   if (playerRef.current) {
  //     playerRef.current.pause();
  //     setIsPlaying(false);
  //   }
  // };

  const togglePlayPause = () => {
    if (isPlaying) {
      pauseVideo();
    } else {
      playVideo();
    }
  };

  const toggleControls = () => {
    setControls(!controls);
  };

  const toggleCaptions = () => {
    if (playerRef.current) {
      const tracks = playerRef.current.textTracks;
      if (tracks && tracks.length > 0) {
        for (let i = 0; i < tracks.length; i++) {
          tracks[i].mode = ccEnabled ? "disabled" : "showing";
        }
        setCcEnabled(!ccEnabled);
      }
    }
  };

  const handleSeek = (event) => {
    if (playerRef.current) {
      playerRef.current.currentTime = event.target.value;
      setCurrentTime(event.target.value);
    }
  };

  return (
    <div className="player-wrapper">
      <div id="playerLoader" className="loader">
        Loading...
      </div>
      <ReactHlsPlayer
        playerRef={playerRef}
        src="http://76.88.2.87:2100/media/3.m3u8"
        hlsConfig={hlsConfig}
      />
       <div className="controls">
        <button onClick={togglePlayPause}>
          {isPlaying ? "Pause" : "Play"}
        </button>
        <button onClick={toggleControls}>
          {controls ? "Hide Controls" : "Show Controls"}
        </button>
        <button onClick={toggleCaptions}>
          {ccEnabled ? "Disable CC" : "Enable CC"}
        </button>
        <input
          type="range"
          min="0"
          max={duration}
          value={currentTime}
          onChange={handleSeek}
        />
      </div> 
    </div>
  );
}

export default PlayerComponent;
