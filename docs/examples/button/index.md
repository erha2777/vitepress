<style>
    .example{
        border: 1px solid #f5f5f5;
        border-radius: 5px;
        padding:20px
    }
    
    details > summary:first-of-type {
        font-size: 10px;
        padding: 8px 0;
        cursor: pointer;
        color: #1989fa;
    }
</style>

# Button 按钮

## 基础用法

使用 type、plain、round 和 circle 来定义按钮的样式。

<div class="example">
    <div>
        <m-button>默认按钮</m-button>
        <m-button>Default</m-button>
        <m-button type="primary">Primary</m-button>
        <m-button type="success">Success</m-button>
        <m-button type="info">Info</m-button>
        <m-button type="warning">Warning</m-button>
        <m-button type="danger">Danger</m-button>
    </div>
</div>

<details>
<summary>展开查看</summary>

```vue
<template>
  <div>
        <m-button>默认按钮</m-button>
        <m-button>Default</m-button>
        <m-button type="primary">Primary</m-button>
        <m-button type="success">Success</m-button>
        <m-button type="info">Info</m-button>
        <m-button type="warning">Warning</m-button>
        <m-button type="danger">Danger</m-button>
    </div>
</template>
<script lang="ts" setup>
import { m-button } from "jaweiwang-ui";
</script>
<style>

</style>
```

</details>

