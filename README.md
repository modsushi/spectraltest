# Spectral FE Assignment

For this assignment, I first had to get acquainted with the vue ecosystem.
Vue is quite similar to React in some regards but still had a lot of conventions that have to be looked into.

## Challenges

I was caught offguard with the API wars of vue. I planned to stick with Composition early on but I couldn't get recursive component going for tree navigation.
Didn't find anything on how to name the component so switched to Options API for tree navigation.

Due to the friction of working with an unfamiliar framework, I was unable to do tests and dark mode. I'd be happy to talk about this further though.
Just didn't have enough time.

## Thoughts on vue

Now that I can do some Vue, here's my thoughts.
It's a much nicer developer experience than React. That part is true, joy to work with.
However, there's very little support from third party libraries.
I am an  avid Chakra UI user and spent quite some time trying to get it to work with vue. Only to find out later that Vue3 is not supported.
This is in contrast to React where libraries race to provide zero day compatibility with new versions.

In the end I didn't use any UI frameworks and just did some minimal CSS.

The other thing is Vue prefers convention over composition. Where react provides first class JavaScript support in templating, vue has a different approach of having opinionated conventions that simplifies technical overhead and decisions in some regard. It's stock styling system works out of the box whereas in react there are tons of ways to do styling, each competing for attention.

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
