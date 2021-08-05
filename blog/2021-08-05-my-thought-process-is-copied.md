---
title: My thought process is copied
author: Harit Himanshu
author_title: Co-creator of bonsaiilabs
author_url: https://github.com/hhimanshu
author_image_url: https://avatars.githubusercontent.com/u/6589036?v=4
tags: [thought, process]
description: This is my first post on Docusaurus 2.
image: /img/blog/2021-08-03-my-thought-process/01.jpeg
hide_table_of_contents: true
---
Welcome to this blog. See all features working here

<!--truncate-->

## Image
### with `![img alt]()` sntax
![image alt](/img/blog/2021-08-03-my-thought-process/01.jpeg)

### with `<img>` tag to control height
<img src={require('@site/static/img/blog/2021-08-03-my-thought-process/01.jpeg').default} alt="drawing" width="400"/>

## Quote
> This a quote by a very important person

### Nested toggle elements
<details>
  <summary>Toggle me!</summary>
  <div>
    <div>This is the detailed content</div>
    <details>
      <summary>
        <div>Nested toggle!</div>
        <div>Some surprise inside...</div>
      </summary>
      <div>
        😲😲😲😲😲
      </div>
    </details>
  </div>
</details>

## MDX

import {Highlight} from '../src/components/Highlight';

<Highlight color="#25c2a0">Docusaurus green</Highlight> and <Highlight color="#1877F2">Facebook blue</Highlight> are my favorite colors.

I can write **Markdown** alongside my _JSX_!

## Code Snippets
### Import the component from codebase

import CodeBlock from '@theme/CodeBlock';
import HomepageFeatures from '!!raw-loader!../src/components/HomepageFeatures';

<CodeBlock className="language-jsx">{HomepageFeatures}</CodeBlock>

### Import Markdown/MDX files

import useBaseUrl from '@docusaurus/useBaseUrl';

:::info
<img src={useBaseUrl('/img/blog/2021-08-03-my-thought-process/01.jpeg')} alt="drawing" width="400"/>

The location of mdx file to import matters right now.
Read [this comment](https://github.com/facebook/docusaurus/issues/5286#issuecomment-893256200) to learn more
:::

import PartialExample from '../src/pages/_markdown-partial-example.mdx';

<PartialExample name='Harit'/>

### Code title
```jsx title="/src/components/Highlight.jsx" {1,4-6,11}
import React from 'react';

function MyComponent(props) {
    if (props.isBar) {
        return <div>Bar</div>;
    }

    return <div>Foo</div>;
}

export default MyComponent;
```

### Syntax Highlighting
```jsx title='console.log'
console.log('Every repo must come with a mascot.');
```

```css  title='main.css'
body {
    font-size: 16px;
}
```

## Live Code Editor
### When all `React` imports are available
```jsx live
function Clock(props) {
  const [date, setDate] = useState(new Date());
  useEffect(() => {
    var timerID = setInterval(() => tick(), 1000);

    return function cleanup() {
      clearInterval(timerID);
    };
  });

  function tick() {
    setDate(new Date());
  }

  return (
    <div>
      <h2>It is {date.toLocaleTimeString()}.</h2>
    </div>
  );
}
```

### Extending React Live scope
```jsx live
function MyPlayground(props) {
  return (
    <div>
      <ButtonExample onClick={() => alert('hey!')}>Click me</ButtonExample>
    </div>
  );
}
```

## Alerts

### Note
:::note Important Information
Some **content** with _markdown_ `syntax`. Check [this `api`](#)
:::

### Tip
:::tip Never forget

- [x] Brushing teeth
- [x] Morning Coffee
- [ ] Afternoon Nap
:::

### Info
:::info Nice to have

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

### Caution
:::caution Be careful

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

### Danger

:::danger Stay Away!!

Some **content** with _markdown_ `syntax`. Check [this `api`](#).

:::

## Image Assets
### `JPEG` image as Markdown
![scooter](assets/2021-08-03-my-thought-process/scooter.jpeg)

### `JPEG` image as `img`
<img src={require('./assets/2021-08-03-my-thought-process/scooter.jpeg').default} alt="drawing" width="400"/>

### `JPEG` image as ES `import` syntax

import scooter from './assets/2021-08-03-my-thought-process/scooter.jpeg';

<img src={scooter} alt="drawing" width="300"/>

## File Assets
### As Link

<a
target="_blank"
href={require('./assets/2021-08-03-my-thought-process/aPdf.pdf').default}>
Download this PDF
</a>

### As Markdown
[Download this PDF using Markdown](./assets/2021-08-03-my-thought-process/aPdf.pdf)

## SVG Assets

import GuitarSvg from './assets/2021-08-03-my-thought-process/guitar.svg'

<GuitarSvg style={{width: 200}} />

## Video
### YouTube
<figure className="video-container">
  <iframe src="//www.youtube.com/embed/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&start=621" allowFullScreen width="100%"></iframe>
</figure>

```html
<figure className="video-container">
  <iframe src="//www.youtube.com/embed/nYkdrAPrdcw?list=PLb0IAmt7-GS188xDYE-u1ShQmFFGbrk0v&start=621" allowFullScreen width="100%"></iframe>
</figure>
```

### Vimeo
<figure className="video-container">
  <iframe src="https://player.vimeo.com/video/391115017" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
<p><a href="https://vimeo.com/391115017">JavaScript Concurrency Model</a> from <a href="https://vimeo.com/bonsaiiilabs">BonsaiiLabs</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</figure>

```html
<figure className="video-container">
    <iframe src="https://player.vimeo.com/video/391115017" width="640" height="360" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowFullScreen></iframe>
    <p><a href="https://vimeo.com/391115017">JavaScript Concurrency Model</a> from <a href="https://vimeo.com/bonsaiiilabs">BonsaiiLabs</a> on <a href="https://vimeo.com">Vimeo</a>.</p>
</figure>
```