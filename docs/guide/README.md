# Guide

## Introduction

VuePress is a markdown-centered static site generator. You can write your content (documentations, blogs, etc.) in Markdown, then VuePress will help you to generate a static site to host them.

The purpose of creating VuePress was to support the documentation of Vue.js and its sub-projects, but now it has been helping a large amount of users to build their documentation, blogs, and other static sites.

## How It Works

A VuePress site is in fact a single-page application (SPA) powered by Vue and Vue Router.

Routes are generated according to the relative path of your markdown files. Each Markdown file is compiled into HTML with markdown-it and then processed as the template of a Vue component. This allows you to directly use Vue inside your Markdown files and is great when you need to embed dynamic content.

During development, we start a normal dev-server, and serve the VuePress site as a normal SPA. If you’ve used Vue before, you will notice the familiar development experience when you are writing and developing with VuePress.

During build, we create a server-rendered version of the VuePress site and render the corresponding HTML by virtually visiting each route. This approach is inspired by Nuxt's nuxt generate command and other projects like Gatsby.

## Why Not ...?

#Nuxt
Nuxt is an outstanding Vue SSR framework, and it is capable of doing what VuePress does. But Nuxt is designed for building applications, while VuePress is more lightweight and focused on content-centric static sites.

## VitePress

VitePress is the little brother of VuePress. It's also created and maintained by our Vue.js team. It's even more lightweight and faster than VuePress. However, as a tradeoff, it's more opinionated and less configurable. For example, it does not support plugins. But VitePress is powerful enough to make your content online if you don't need advanced customizations.

It might not be an appropriate comparison, but you can take VuePress and VitePress as Laravel and Lumen.

## Docsify / Docute

Both are great projects and also Vue-powered. Except they are both fully runtime-driven and therefore not SEO-friendly. If you don’t care for SEO and don’t want to mess with installing dependencies, these are still great choices.
