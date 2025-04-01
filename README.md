Tired of waking up to add/swap classes?

This selenium script will constantly try to swap uWaterloo classes for you until a space opens up.

Usage:
1. run 'npm i' in cmd (or terminal of your choice) within the auto-class folder
2. run 'node app [class# to drop] [class# tutorial to add] [class# to add]  ...' (repeat arguments as many times as needed)
3. login with your UW login and 2FA (2 minute timeout)
4. sit back and monitor console logs


Examples:

node app 6927 6441 6928
(NOTE: if no arguments are provided, it will default to these classes)

node app 6927 6441 6928 4001 1012 4003
(runs two instances of chrome to try to swap into both classes)
