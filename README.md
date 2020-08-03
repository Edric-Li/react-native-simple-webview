
# react-native-simple-webview

## Getting started

`$ npm install react-native-simple-webview --save`

### Mostly automatic installation

`$ react-native link react-native-simple-webview`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-simple-webview` and add `RNSimpleWebview.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNSimpleWebview.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
  - Add `import com.quenice.cardview.RNSimpleWebviewPackage;` to the imports at the top of the file
  - Add `new RNSimpleWebviewPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-simple-webview'
  	project(':react-native-simple-webview').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-simple-webview/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-simple-webview')
  	```


## Usage
```javascript
import RNSimpleWebview from 'react-native-simple-webview';

// TODO: What to do with the module?
RNSimpleWebview;
```
  