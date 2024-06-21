# THIS VERSION IS UNSTABLE
The beta version mostly adds bases to new features
Current beta only features are :
- Bases for RGB edit
- Bit of changes in how editing the background works

## How to change the background using RGB ?
- Go to your browser's dev tools, then "Application" for Chromium browsers or "Storage" for Firefox
- Go to Local storage, then s0urce.io
- Select "bg_color"
- Edit the RGB values to your liking
- Refresh the page
In the default parameters, "primary" is the top color and "secondary" the bottom one
"angle" changes the orientation of the gradient
"balance" changes how much of the primary color appear
"effect" is to change the effect in the background. It is recommended to know CSS functions before changing that, else the whole background will break

## My RGB doesn't appear !
If you have a background image, remove it

## There was an update and now my RGB doesn't work anymore !
Follow the same steps than the "How to" to access the Local storage, but delete the entry instead of editing it. After refreshing the page, the script will put back a clean, compatible entry
