/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "bootstrap.min.css",
    "revision": "dba018fff7ba5880a93ee4253d923eb1"
  },
  {
    "url": "images/addcar.png",
    "revision": "9df10754d7da270af68c56b7d718d68e"
  },
  {
    "url": "images/icons/icon-128x128.png",
    "revision": "7e32ce6cf205230b7f2863bbc8c4339e"
  },
  {
    "url": "images/icons/icon-144x144.png",
    "revision": "00b0f9f56fddd1effa58db65f557ea60"
  },
  {
    "url": "images/icons/icon-152x152.png",
    "revision": "8ad0819957780ab2b7ce097de0538263"
  },
  {
    "url": "images/icons/icon-192x192.png",
    "revision": "6311fbc83fa27a73cf603eabf4a47869"
  },
  {
    "url": "images/icons/icon-384x384.png",
    "revision": "4b67079e598fc7c72ce7d6ae01b1d518"
  },
  {
    "url": "images/icons/icon-512x512.png",
    "revision": "4b67079e598fc7c72ce7d6ae01b1d518"
  },
  {
    "url": "images/icons/icon-72x72.png",
    "revision": "04c7caa1108c686614c162d033c56770"
  },
  {
    "url": "images/icons/icon-96x96.png",
    "revision": "79b3cf25dcf153797dd09b6167416f97"
  },
  {
    "url": "images/intro-car.jpg",
    "revision": "d33e4d69803abf9d5ce235b617cb45eb"
  },
  {
    "url": "manifest.json",
    "revision": "29bd91c7caa2aa7b8ece604d54e1bcf2"
  },
  {
    "url": "style.css",
    "revision": "6bd0834775c86651a13c5c6a06e9a2fa"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
