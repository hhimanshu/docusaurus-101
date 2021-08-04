---
title: My first interaction with blog
author: Harit Himanshu
author_title: Co-creator of bonsaiilabs
author_url: https://github.com/hhimanshu
author_image_url: https://avatars.githubusercontent.com/u/6589036?v=4
tags: [thought, process]
description: This is my first post on Docusaurus 2.
image: /img/blog/2021-08-03-my-thought-process/01.jpeg
hide_table_of_contents: false
---
Welcome to this blog. See all features working here

<!--truncate-->

## Image
### with `![img alt]()` sntax
![image alt](/img/blog/2021-08-03-my-thought-process/01.jpeg)

### with `<img>` tag to control height
<img src='/img/blog/2021-08-03-my-thought-process/01.jpeg' alt="drawing" width="400"/>

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
TBD

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