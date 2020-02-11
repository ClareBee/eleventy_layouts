---
title: 'grid post'
description: 'lorem ipsum'
faIcon: 'map'
---
<div class="grid-post">

### basic grid
```css
.container {
  display: grid;
  grid-template-columns: 100px auto 100px;
  grid-gap: 20px;
}
```
<div class="grid grid-container">
  <div class="item">1</div>
  <div class="item">2</div>
  <div class="item">3</div>
  <div class="item">4</div>
  <div class="item">5</div>
  <div class="item">6</div>
</div>

----

### grid-auto-flow
```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 400px 200px;
  grid-auto-flow: column; /* vs row - won't wrap */
  /*
  grid-auto-columns: 200px; sizes the implicitly created cols
*/
}
```
<div class="grid grid-container-2">
  <div class="item">Explicit</div>
  <div class="item">Explicit</div>
  <div class="item">Implicit</div>
</div>

----

### fractional unit
```css
.container {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 400px 1fr 2fr;
  grid-template-rows: 1fr 2fr;
}
```

<div class="grid grid-container-3">
  <div class="item">Explicit by 1fr</div>
  <div class="item">1fr by 1fr</div>
  <div class="item">2fr by 1fr</div>
  <div class="item">Explicit by 2fr</div>
  <div class="item">1fr by 2fr</div>
  <div class="item">2fr by 2fr</div>
</div>
</div>
