---
title: 'Flexbox Fundamentals'
description: 'Inspired by Wes Bos'
faIcon: 'list'
---
<div class="flex-post">

### basic flexbox
- flex-direction: sets axis - row (default)/column

```css
.container {
  display: flex;
  flex-direction: column-reverse;
}
```
<div class="flex-container flex-container-1">
  <div class="flex-item">1</div>
  <div class="flex-item">2</div>
</div>

-----

### wrapping
- flex-wrap: wrap/nowrap/wrap-reverse!

```css
.container {
  display: flex;
  flex-wrap: wrap;
}
.item {
  width: 200px;
  margin: 10px;
}
```
<div class="flex-container flex-container-2">
  <div class="flex-item flex-item-md">1</div>
  <div class="flex-item flex-item-md">2</div>
  <div class="flex-item flex-item-md">3</div>
  <div class="flex-item flex-item-md">4</div>
  <div class="flex-item flex-item-md">5</div>
  <div class="flex-item flex-item-md">6</div>
  <div class="flex-item flex-item-md">7</div>
</div>

-----

### ordering
- default is 0, so anything greater than 0 is at the end!

```css
.container {
  display: flex;
}
.box {
  flex: 1;
}
.box-3 {
  order: -1;
}
.box-2 {
  order: 4;
}

```
<div class="flex-container">
  <div class="flex-item flex-item-md box">1</div>
  <div class="flex-item flex-item-md box box-2">2</div>
  <div class="flex-item flex-item-md box box-3">3</div>
  <div class="flex-item flex-item-md box">4</div>
</div>

-----

### alignment and centering
- **justify** = row axis (left to right) => main axis
- **align** = column axis (top to bottom) => cross axis

**justify-content**
- flex-start (default), flex-end, center, space-between, space-around

```css
.container {
  display: flex;
  justify-content: center;
}
```
<div class="flex-container flex-container-3">
  <div class="flex-item flex-item-sm">1</div>
  <div class="flex-item flex-item-sm">2</div>
  <div class="flex-item flex-item-sm">3</div>
  <div class="flex-item flex-item-sm">4</div>
</div>

**align-items**
- default set to stretch; center, flex-start, flex-end, baseline
```css
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
```
<div class="flex-container flex-container-4">
  <div class="flex-item flex-item-sm">1</div>
  <div class="flex-item flex-item-sm">2</div>
  <div class="flex-item flex-item-sm">3</div>
  <div class="flex-item flex-item-sm">4</div>
</div>

**align-content**
- stretch (default), flex-start, flex-end, center, space-between, space-around
- takes extra space on the cross axis (top-to-bottom) when wrapped
```css
.container {
  height: 250px;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: space-around;
}
```
<div class="flex-container flex-container-5">
  <div class="flex-item flex-item-md">1</div>
  <div class="flex-item flex-item-md">2</div>
  <div class="flex-item flex-item-md">3</div>
  <div class="flex-item flex-item-md">4</div>
  <div class="flex-item flex-item-md">5</div>
  <div class="flex-item flex-item-md">6</div>
  <div class="flex-item flex-item-md">7</div>
  <div class="flex-item flex-item-md">8</div>
  <div class="flex-item flex-item-md">9</div>
</div>
</div>
