# vimeo-player-api-loader
Wrapper for loading [Vimeo Player API](https://github.com/vimeo/player.js) JS. Inspired by [youtube-iframe](https://github.com/Prinzhorn/youtube-iframe).

# Install
```
npm install vimeo-player-api-loader
```
```
yarn add vimeo-player-api-loader
```

# Usage
```
import VimeoPlayerApiLoader from 'vimeo-player-api-loader';

VimeoPlayerApiLoader.load((Vimeo) => {
    const iframe = document.querySelector('iframe');   
    const player = new Vimeo.Player(iframe);
});
```

