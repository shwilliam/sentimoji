# Sentimoji

> Sentiment analysis represented by a single emoji

## Usage

Pass the text you wish to analyze as a path to your endpoint. For example, a valid
request to the demo could look like
[`https://emoji-summary.herokuapp.com/hello world`](https://emoji-summary.herokuapp.com/hello%20world).

## Development

```terminal
npm i
npm run dev
```

## Production

```terminal
npm i
npm run build
npm start
```

## Dockerized

```terminal
docker build --tag sentimoji:1.0 .
docker run -p 1234:1234 -d --name sentimoji sentimoji:1.0
```

## Contributing

This project is open to and encourages contributions! Feel free to discuss any
bug fixes/features in the [issues](https://github.com/shwilliam/sentimoji/issues).
If you wish to work on this project:

1. Fork [this project](https://github.com/shwilliam/sentimoji)
2. Create a branch (`git checkout -b new-branch`)
3. Commit your changes (`git commit -am 'add new feature'`)
4. Push to the branch (`git push origin new-branch`)
5. [Submit a pull request!](https://github.com/shwilliam/sentimoji/pull/new/master)
