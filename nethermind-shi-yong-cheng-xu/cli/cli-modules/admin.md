# Admin

## admin.addPeer\(enode, addToStaticNodes\)

将指定节点添加为静态节点

### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| enode | `string` |
| addToStaticNodes | `boolean` |

### **返回值**

`String` —— 刚刚被添加为静态节点的节点的 enode

### **示例**

{% tabs %}
{% tab title="Request" %}
```bash
admin.addPeer("enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001", true)
```
{% endtab %}

{% tab title="Response" %}
```bash
Request complete in 58129.371μs
"enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001"
```
{% endtab %}
{% endtabs %}

## admin.peers

显示已连接对等节点的列表

### **参数**

无

### **返回值**

`Array` —— 目前已连接到您的节点的节点

### **示例**

{% tabs %}
{% tab title="Request" %}
```bash
admin.peers
```
{% endtab %}

{% tab title="Response" %}
```bash
Request complete in 627464.281μs
[
  {
    "clientId": "Geth/v1.9.15-stable-0f77f34b/linux-amd64/go1.14.4",
    "host": "::ffff:47.218.109.107",
    "port": "34182",
    "address": "[::ffff:47.218.109.107]:34182",
    "isBootnode": false,
    "isTrusted": false,
    "isStatic": false,
    "enode": "enode://4df44eba60b4d2b9edadad10a4c4a9fb837e910932eb9b6aa5a90b3a99472af6e362ff2be5f45b5eca248521d87b42a461d119633e4856e291d304f93762821b@47.218.109.107:34182"
  }
]
```
{% endtab %}
{% endtabs %}

## admin.removePeer\(enode, removeFromStaticNodes\)

从静态节点中删除指定节点

### **参数**

| 参数名称 | 类型 |
| :--- | :--- |
| enode | `string` |
| removeFromStaticNodes | `boolean` |

### **返回值**

`String` —— 刚刚从静态节点中被删除的节点的 enode

### **示例**

{% tabs %}
{% tab title="Request" %}
```bash
admin.removePeer("enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001", true)
```
{% endtab %}

{% tab title="Response" %}
```bash
Request complete in 361680.159μs
"enode://92c18bfbd45c9c7a8d46d5a766d7da4b6c1fac4f980cd11172738975e10cb84a4a98884affd240f4c40d98f371a7b2b8bd0e91c59c7beee20d20e4735a2af6e1@127.0.0.1:30001"
```
{% endtab %}
{% endtabs %}
