import {
  rapidApiKey,
  text2speechHost,
  text2speechKey,
  text2speechUrl,
} from "../utils/rapidApi";

import VoiceRSSWebApi from "../../node_modules/voice-rss/src/voice-rss-api";

const ToAudio = () => {
  const VoiceRSS = new VoiceRSSWebApi(text2speechKey);
  const getAudio = async () => {
    const url = `${text2speechUrl}/?key=${text2speechKey}`;
    const options = {
      method: "POST",
      headers: {
        "content-type": "application/x-www-form-urlencoded",
        "X-RapidAPI-Key": rapidApiKey,
        "X-RapidAPI-Host": text2speechHost,
      },
      body: new URLSearchParams({
        src: "Hello, world!",
        hl: "en-gb",
      }),
    };

    try {
      const response = await fetch(url, options);
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };
  (async () => {
    const audio = await VoiceRSS.getAudio("Hello World");

    // play the audio
    new Audio(audio).play();

    // OR console log the audio (base64 encoding)
    console.log(audio);
  })();
  return (
    <>
      <div>
        <audio controls>
          <source src={getAudio} />
          Your browser does not support the audio element.
        </audio>
      </div>
    </>
  );
};
export default ToAudio;
