


# AR

- web XR API

        - guide
        
                https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API

                not supported by apple / safari

- model viewer / google oss

        - guide

                https://modelviewer.dev/

                not supported by apple / safari

- ar.js

        - git

                https://github.com/AR-js-org/AR.js

        - guide

                https://ar-js-org.github.io/AR.js-Docs/

                It works on every phone with webgl and webrtc.

        - feature

                1. Image tracking
                2. Location tracking
                3. Markers tracking
                
                - if look for image / location tracking
                recommend use MindAR
        
        - studio

                https://ar-js-org.github.io/studio/
                
                PC connect hotspot
                copy into nginx
                start ngrok / always https required
                visit in phone's browser
                e.g. https://ba0e-202-75-251-145.ngrok.io/ar/index.html
                scan & play, no interaction

        - 3d model

                - glTF

        - interaction

                https://ar-js-org.github.io/AR.js-Docs/ui-events/

                1. Handle clicks on AR content / A-Frame events
                https://github.com/fcor/arjs-gestures

                2. Interaction with Overlayed DOM content

- MindAR

        - git

                https://github.com/hiukim/mind-ar-js

        - guide

                https://hiukim.github.io/mind-ar-js-doc/

        - feature
        
                1. Image tracking 
                2. Face tracking

        - get start

                https://hiukim.github.io/mind-ar-js-doc/
                Web Server for Chrome, select minar-project

                - error
                status not defined

                - fix
                remove showStats: true;

        - 3d model

                - glTF
                AFRAME basically supports all the standard 3D format

        - interaction

                https://hiukim.github.io/mind-ar-js-doc/examples/events-handling

                1. AR content events / A-Frame events
                2. some basic events

        - multi targets

                https://hiukim.github.io/mind-ar-js-doc/examples/multi-targets

                - error
                only 1st target can be found

                - fix
                resize two images into same size, then compile them together & download the targets.mind

- 3d model

        - glTF
        https://github.com/KhronosGroup/glTF

        - download models
        https://sketchfab.com/3d-models/jumpboost-arrow-fad95c37aaa240e49377edcfe2552ee7

- A-Frame

        web VR framework
        https://aframe.io/












