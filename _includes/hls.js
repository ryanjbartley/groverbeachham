<video id="myVideo" controls width="640" height="480"></video>

<!-- Use HLS.js to support the HLS format in browsers. -->
<script src="https://cdn.jsdelivr.net/npm/hls.js@0.8.2"></script>
<script>
  (function(){
    // Replace with your asset's playback ID
    var url = "https://stream.mux.com/"+"{{ include.id }}"+".m3u8";

    // HLS.js-specific setup code
    if (Hls.isSupported()) {
      var video = document.getElementById("myVideo");
      var hls = new Hls();
      hls.loadSource(url);
      hls.attachMedia(video);
    }
  })();
</script>
