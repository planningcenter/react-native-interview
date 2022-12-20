# Planning Center Code Challenge
Congratulations on making it to this point in the interview process at Planning Center! We are delighted that you have made it this far and we're excited to see your solutions to the exercises we are about to present to you. In all, we expect these challenges to take about 4-6 hours of your time (though this is NOT a time limit).

While we obviously are looking first and foremost for solutions that work, feel free to also take this opportunity to let your personality come through.

## General Setup

This app depends on:
```
ruby: 2.7.5
node: 16.18
```

If you haven't already please get your system ready to run react-native by following [these instructions](https://reactnative.dev/docs/0.68/environment-setup).

To run the mobile app:
```
npm install
gem install

# If running ios
cd ios
bundle exec pod install

npm run ios

# Else
npm run android

```

To start the server:
```
npm run serve
```

## Directions
Once you get the app up and running, start the server. After that, you can find the instructions for the code challenge in `app/assignment.md`

### Troubleshooting
If you are regularly running react-native apps consider running:
```
npx react-native-clean-project
```