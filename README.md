# node destruct vs if benchmark

1. Install dependencies

```
npm i
```

1. Start the test server

```
npm start
```

1. Install K6
   
```
brew install k6
```

1. Run benchmark
```
k6 run -d 60s -u 100 k6-if.js
k6 run -d 60s -u 100 k6-if.js
```
